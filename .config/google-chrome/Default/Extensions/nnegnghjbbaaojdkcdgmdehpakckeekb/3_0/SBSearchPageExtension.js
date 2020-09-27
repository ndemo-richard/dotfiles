window.addEventListener("load", function() {
	var SBSearchPageExtension = {
		sbDomainName: "swagbucks.com",
		injectTbUIDOnPage: function(tbUID) {
			tbUID = tbUID || true;
			var script = "SBSearchExtensionUID = " + tbUID + ";" +
					 "if (window.onSBSearchExtensionPresent) {window.onSBSearchExtensionPresent();}"; //alert('SBSearchExtensionUID=' + SBSearchExtensionUID);"; //
			this.injectScriptOnPage(script);
		},
		injectScriptOnPage: function(script) {
			var s = document.createElement("SCRIPT");
			s.type = "text/javascript";
			s.text = script;
			document.getElementsByTagName("HTML")[0].appendChild(s);
		},
		jqSB: window.$,
		curHostname: document.location.hostname,
		checkAndInject: function() {
			var sbDomainIdx = this.curHostname.indexOf(this.sbDomainName);
			var visitingSBDomain = (sbDomainIdx>=0);
			if (visitingSBDomain) {
				this.injectTbUIDOnPage();
			}
		}
	};
	SBSearchPageExtension.checkAndInject();
}, true);
