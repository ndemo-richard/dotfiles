import { AppOptions, AppOption } from './options.js';
const {
  FormControlLabel,
  Card,
  CardContent,
  Tooltip,
  FormGroup,
  Switch,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  ThemeProvider
} = MaterialUI;
const {
  createMuiTheme,
  colors,
  withStyles
} = MaterialUI;
const styles = {
  card: {
    margin: '10px'
  },
  appicon: {
    marginRight: '10px'
  }
};
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5'
    },
    secondary: colors.blueGrey
  },
  status: {
    danger: 'orange'
  }
});
const functions = {
  optVerbose: function (app, k, val) {
    const {
      bg
    } = app;
    bg.WSC.VERBOSE = bg.WSC.DEBUG = val;
  },
  optAllInterfaces: function (app, k, val) {
    app.webapp.interfaces = [];
  },
  optIPV6: function (app, k, val) {
    // reset the list of interfaces
    app.webapp.interfaces = [];
  },
  optPreventSleep: function (app, k, val) {
    // do it after the setting is changed
    setTimeout(() => {
      app.webapp.updatedSleepSetting();
    }, 1);
  },
  optBackground: function (app, k, val) {
    const {
      webapp,
      bg
    } = app;
    console.log('background setting changed', val);
    webapp.updateOption('optBackground', val); // appOptions.set('optBackground', val)

    bg.backgroundSettingChange({
      'optBackground': val
    });
  },
  port: (app, k, v) => {
    console.log('persist port', v);
    console.assert(typeof v === 'number');
    app.webapp.opts.port = v;
    app.webapp.port = v; // does it still need to be set here?
  },
  optAutoStart: function (app, k, val) {
    const {
      bg,
      webapp
    } = app;

    if (val) {
      chrome.permissions.request({
        permissions: ['background']
      }, function (result) {
        console.log('request perm bg', result);

        if (result) {
          success();
        }
      });
    } else {
      chrome.permissions.remove({
        permissions: ['background']
      }, function (result) {
        console.log('drop perm bg', result);
        success();
      });
    }

    function success() {
      console.log('persist setting start in background', val);
      webapp.opts.optBackground = val;
      bg.backgroundSettingChange({
        'optBackground': val
      });
    }
  }
};
window.reload = chrome.runtime.reload;
setup_events();

function setup_events() {
  function keydown(evt) {
    if (evt.metaKey || evt.ctrlKey) {
      if (evt.keyCode == 82) {
        // ctrl-r
        console.log('received ctrl(meta)-r, reload app');

        if (window.fgapp) {
          fgapp.reload();
        } else {
          chrome.runtime.reload();
        }
      } //evt.preventDefault() // dont prevent ctrl-w

    }
  }

  document.body.addEventListener('keydown', keydown);
}

class App extends React.Component {
  state = {
    showAdvanced: false,
    interfaces: [],
    port: 6669,
    started: false,
    starting: false,
    lasterr: null,
    folder: null,
    message: ''
  };

  constructor(props) {
    super(props);
    this.classes = props.classes; // styling api

    window.app = this;
    console.log('app created');
    this.init();
  }

  async init() {
    this.bg = await chromise.runtime.getBackgroundPage();
    this.appOptions = new AppOptions(this.settings_ready.bind(this));
  }

  settings_ready() {
    const allOpts = this.appOptions.getAll();
    console.log('fetched local settings', this.appOptions, allOpts);
    this.webapp = this.bg.get_webapp(allOpts); // retainStr in here

    this.bg.WSC.VERBOSE = this.bg.WSC.DEBUG = this.appOptions.get('optVerbose');
    this.webapp.on_status_change = this.on_webapp_change.bind(this);
    this.setState(allOpts);
    this.on_webapp_change();
    this.ui_ready();
  }

  get_status() {
    const result = {
      starting: this.webapp && this.webapp.starting,
      started: this.webapp && this.webapp.started,
      lasterr: this.webapp && this.webapp.lasterr,
      folder: this.webapp && this.webapp.fs && this.webapp.fs.entry && this.webapp.fs.entry.fullPath
    };
    result.message = this.computeMessage(result);
    return result;
  }

  computeMessage({
    started,
    starting,
    lasterr
  }) {
    if (lasterr) {
      return JSON.stringify(lasterr);
    } else if (starting) {
      return 'STARTING';
    } else if (started) {
      return 'STARTED';
    } else {
      return 'STOPPED';
    }
  }

  on_webapp_change() {
    var status = this.get_status();
    console.log('webapp changed', status);
    this.setState({ ...status,
      port: this.webapp.port,
      interfaces: this.webapp.urls.slice()
    });
  }

  ui_ready() {
    if (this.webapp) {
      if (!(this.webapp.started || this.webapp.starting)) {
        // autostart ?
        this.webapp.start();
      }
    }
  }

  choose_folder() {
    console.log('clicked choose folder');

    function onfolder(folder) {
      this.bg.onchoosefolder(folder);
    }

    chrome.fileSystem.chooseEntry({
      type: 'openDirectory'
    }, onfolder.bind(this));
  }

  startStop(evt, checked) {
    console.log('startstop', checked);
    if (checked) this.webapp.start();else this.webapp.stop();
  }

  onChange(k, v) {
    console.log('update and save', k, v);
    this.webapp.updateOption(k, v); // also set on webapp.opts ?
    // certain options require special manual handling (e.g. port has to set this.webapp.opts.port)

    if (functions[k]) {
      console.log('special handling for', k);
      functions[k](this, k, v);
    }

    this.appOptions.set(k, v);
    this.setState({
      [k]: v
    });
  }

  render() {
    // option: [dependencies]
    const optDisplay = {
      optBackground: null,
      optAutoStart: ['optBackground'],
      optAllInterfaces: null,
      optDoPortMapping: ['optAllInterfaces'],
      optPreventSleep: null,
      optRenderIndex: null,
      port: null
    };
    const optAdvanced = {
      optCORS: null,
      optIPV6: null,
      optStatic: null,
      optUpload: null,
      optVerbose: null,
      optModRewriteEnable: null,
      optModRewriteRegexp: ['optModRewriteEnable'],
      optModRewriteNegate: ['optModRewriteEnable'],
      optModRewriteTo: ['optModRewriteEnable']
    };
    console.assert(this);

    const renderOpts = opts => {
      const _this = this;

      const options = [Object.keys(opts).map(k => {
        const deps = opts[k] || [];
        let enabled = true;
        let indent = false;

        for (const dep of deps) {
          indent = true;

          if (!this.state[dep]) {
            enabled = false;
          }
        }

        return React.createElement(AppOption, {
          indent: indent,
          disabled: !enabled,
          onChange: this.onChange.bind(this),
          name: k,
          key: k,
          value: this.state[k],
          appOptions: _this.appOptions
        });
      })];
      return options;
    };

    const options = renderOpts(optDisplay);
    const advOptions = renderOpts(optAdvanced);
    const advancedButton = React.createElement("div", null, React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        this.setState({
          showAdvanced: !this.state.showAdvanced
        });
      }
    }, this.state.showAdvanced ? 'Hide Advanced Options' : 'Show Advanced Options'));
    const {
      state
    } = this;
    return React.createElement("div", null, React.createElement(ThemeProvider, {
      theme: theme
    }, React.createElement(AppBar, {
      position: "static",
      color: "primary"
    }, React.createElement(Toolbar, null, React.createElement("img", {
      className: this.classes.appicon,
      src: "/images/200ok-64.png"
    }), React.createElement(Typography, {
      variant: "h6",
      type: "title",
      color: "inherit"
    }, "Web Server for Chrome"))), React.createElement(Container, null, React.createElement(Card, {
      className: this.classes.card
    }, React.createElement(CardContent, null, React.createElement("p", null, "Please ", React.createElement("a", {
      target: "_blank",
      href: "https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/reviews"
    }, "leave a review"), " to help others find this software."))), React.createElement(Card, {
      className: this.classes.card
    }, React.createElement(CardContent, null, React.createElement(FormGroup, null, React.createElement(Tooltip, {
      title: 'Click to start or stop the web server'
    }, React.createElement(FormControlLabel, {
      label: `Web Server: ${state.message}`,
      control: React.createElement(Switch, {
        disabled: state.starting,
        checked: state.started,
        onChange: this.startStop.bind(this)
      })
    }))), React.createElement("div", null, React.createElement(Button, {
      variant: "contained",
      onClick: this.choose_folder.bind(this)
    }, "Choose Folder"), React.createElement("span", null, state.folder ? ` Current: ${state.folder}` : 'NO FOLDER SELECTED')), React.createElement("h3", null, "Web Server URL(s)"), React.createElement("ul", {
      style: {
        WebkitUserSelect: 'text'
      }
    }, state.interfaces.map(item => {
      return React.createElement("li", {
        key: item.url
      }, React.createElement("a", {
        href: item.url,
        target: "_blank"
      }, item.url));
    })))), React.createElement(Card, {
      className: this.classes.card
    }, React.createElement(CardContent, null, React.createElement(Tooltip, {
      title: 'Some options may require a restart of the server. Restart by pressing the toggle button above'
    }, React.createElement("span", null, "Options (may require restart)")), options, advancedButton, state.showAdvanced && React.createElement("div", null, advOptions))), React.createElement(Card, {
      className: this.classes.card
    }, React.createElement(CardContent, null, React.createElement("p", null, "Need to ", React.createElement("a", {
      target: "_blank",
      href: "https://github.com/kzahel/web-server-chrome/issues"
    }, "Report a problem"), "? Open source, MIT license."))))));
  }

}

const AppWithStyles = withStyles(styles)(App);
ReactDOM.render(React.createElement(AppWithStyles, null), document.getElementById('app'));
//# sourceMappingURL=index.js.map