!function(e){var t={};function __webpack_require__(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,o){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(__webpack_require__.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(o,n,function(t){return e[t]}.bind(null,n));return o},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=7)}([function(e,t,o){"use strict";var n=class PBStorageInstance{constructor(e,t){this.key=e,this.storage=t}get(){const e=this;return new Promise(t=>{e.storage.get(e.key,o=>{o=o[e.key],e.lastAnswer=o,t(o)})})}set(e){const t=this;return new Promise(o=>{const n={};n[t.key]=e,t.storage.set(n,o)})}setIfNew(e){const t=this;return new Promise(o=>{t.get().then(n=>{n==e?o():t.set(e).then(o)})})}update(e){if("function"!=typeof e)throw new Error("Illegal invocation. Function expected.");const t=this;return new Promise(o=>{t.get().then(n=>{const a=e(n);t.setIfNew(a).then(o)})})}removeAndSet(e){const t=this;return new Promise(o=>{t.storage.remove(t.key,()=>{t.set(e).then((function(){o()}))})})}};class PBCombinedStorage_PBCombinedStorage{static COMBINE_MAP(e,t){const o={};return e.forEach((e,n)=>{o[t[n].key]=e}),o}static COMBINE_MERGE(e,t){let o=[];return e.forEach(e=>{e instanceof Array?o=o.concat(e):o.push(e)}),o}constructor(){this.storages=[],this.setStorages(arguments)}getStoragesMapped(){const e={};for(const t of this.storages)e[t.key]=t;return e}setStorages(e){for(let t=0;t<e.length;t++){const o=e[t];if(!(o instanceof n||o instanceof PBCombinedStorage_PBCombinedStorage))throw new Error(`Illegal invocation. PBStorageInstance expected at [${t}].`);this.storages.push(o)}}combine(e,t){}get(){const e=this,t=this.storages,o=[];for(let e=0;e<t.length;e++)o.push(t[e].get());return new Promise(n=>{Promise.all(o).then(o=>{n(e.combine(o,t))})})}}var a=PBCombinedStorage_PBCombinedStorage;var r=class PBCombinedMappedStorage_PBCombinedMappedStorage extends a{constructor(){super(),this.setStorages(arguments),this.combine=a.COMBINE_MAP,this.storages=[],this.parentStorage=null}setParentStorage(e){return this.parentStorage=e,this}set(e){const t=this;return new Promise(o=>{t.parentStorage.set(e,o)})}update(e){const t=this;return new Promise(o=>{t.get().then(n=>{n=e(n),t.set(n).then(o)})})}};const i=new class PBStorageSync_PBStorage{constructor(e,t){this.storage=t,this.pb_defaultWhitelist=this.createStorage("pb_defaultWhitelist"),this.pb_whitelistManager=this.createStorage("pb_whitelistManager"),this.pb_detectOverlays=this.createStorage("pb_detectOverlays"),this.pb_hideBadge=this.createStorage("pb_hideBadge"),this.pb_hideNotifications=this.createStorage("pb_hideNotifications"),this.pb_installDate=this.createStorage("pb_installDate"),this.pb_overlaylist=this.createStorage("pb_overlaylist"),this.pb_numOfBlocks=this.createStorage("pb_numOfBlocks"),this.pb_totalBlocksByType=this.createStorage("pb_totalBlocksByType"),this.pb_tabswithoverlay=this.createStorage("pb_tabswithoverlay"),this.pb_whitelist=this.createStorage("pb_whitelist"),this.pb_counterBlockedSites=this.createStorage("pb_counterBlockedSites"),this.pb_pause=this.createStorage("pb_pause"),this.pb_siteWhenReport=this.createStorage("pb_siteWhenReport"),this.pb_notFirstTimeToggle=this.createStorage("pb_notFirstTimeToggle"),this.pb_popupBlackList=this.createStorage("pb_popupBlackList"),this.pb_disableContextMenu=this.createStorage("pb_disableContextMenu"),this.pb_retentionData=this.createStorage("pb_retentionData"),this.doNotShowNotifyList=this.createStorage("doNotShowNotifyList"),this.pb_overlayBlockedList=this.createStorage("pb_overlayBlockedList"),this.pb_lastNotificationDisplay=this.createStorage("pb_lastNotificationDisplay"),this.pb_notification_size=this.createStorage("pb_notification_size"),this.pb_rating=this.createStorage("pb_rating"),this.pb_OneTimeEvents=this.createStorage("pb_OneTimeEvents"),this.all=this.many(this.pb_whitelist,this.pb_whitelistManager,this.pb_detectOverlays,this.pb_hideBadge,this.pb_hideNotifications,this.pb_installDate,this.pb_overlaylist,this.pb_numOfBlocks,this.pb_tabswithoverlay,this.pb_counterBlockedSites,this.pb_popupBlackList,this.pb_disableContextMenu,this.pb_retentionData,this.pb_pause,this.doNotShowNotifyList,this.pb_overlayBlockedList,this.pb_rating,this.pb_OneTimeEvents)}createStorage(e){return new n(e,this.storage)}many(){const e=new r;return e.setParentStorage(this.storage),e.setStorages(arguments),e}}(chrome.storage,chrome.storage.local);t.a=i},function(e,t,o){"use strict";o.d(t,"i",(function(){return getPrivacyPolicy})),o.d(t,"j",(function(){return getTabUrl})),o.d(t,"d",(function(){return executeCode})),o.d(t,"l",(function(){return isDomainInList})),o.d(t,"o",(function(){return randId})),o.d(t,"a",(function(){return GUID})),o.d(t,"h",(function(){return getManifestInfo})),o.d(t,"b",(function(){return Retension})),o.d(t,"k",(function(){return getTodayBlockCount})),o.d(t,"c",(function(){return copyTextToClipboard})),o.d(t,"f",(function(){return getBrowser})),o.d(t,"e",(function(){return getAbsoluteURL})),o.d(t,"n",(function(){return isI18N})),o.d(t,"g",(function(){return getI18N})),o.d(t,"p",(function(){return sendToActiveTab})),o.d(t,"m",(function(){return isFireFoxIncognito}));var n=o(2);function getPrivacyPolicy(e=null){const t=n.a["privacy_policy_"+getBrowser()];return e?e.replace(/%s/,t):t}function getTabUrl(){return new Promise(e=>{chrome.runtime.sendMessage({name:"requestTabUrl"},(function(t){try{let o=new URL(t.url);e({domain:o.hostname,href:o.href})}catch(t){e({domain:document.domain,href:location.href})}}))})}function executeCode(e){let t=document.createElement("script");t.textContent=e,insertBeforeRoot(t),t.remove()}function isDomainInList(e,t,o){t=t||[];for(var n=0;n<t.length;n++){var a=t[n];if(new RegExp("\\b[(www\\.)|.*.]?"+a+"\\b").test(e))return!o||a}return!1}function randId(){var e=localStorage.getItem("randid");if(!e){var rr=function(){return(65536*(1+Math.random(Date.now()+14))|0).toString(28).substring(1)};e=rr()+rr()+rr()+rr()+rr()+rr()+rr()+rr()+rr(),localStorage.setItem("randid",e)}return e}function GUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}function getManifestInfo(){return chrome.runtime.getManifest()}class Retension{constructor(e){this.Storage=e.Storage,this.GAEvents=e.GAEvents,this.minHoursFromInstall=8,this.Storage.requestGet().then(e=>{this.data=this.initialize(e),this.report()})}initialize(e){return e&&e.installDate&&e.sentDays||((e=e||{}).installDate=e.installDate?e.installDate:(()=>(this.GAEvents.Install(),Date.now()))(),e.sentDays=e.sentDays||{},this.Storage.requestSet(e)),e}report(){this.reportRetentoin(),setTimeout(this.report.bind(this),36e5)}reportRetentoin(){let e=new Date,t=new Date(this.data.installDate),o=this.getDateStart(t),n=this.getDateStart(e),a=Math.abs(n-o),r=Math.floor((e-t)/36e5),i=Math.floor(a/864e5);i>0&&!this.data.sentDays[i]&&r>this.minHoursFromInstall&&(this.GAEvents.Retentoin(i),this.data.sentDays[i]=!0,this.Storage.requestSet(this.data))}getDateStart(e){return new Date(e.getFullYear(),e.getMonth(),e.getHours()>=0&&e.getHours()<5?e.getDate()-1:e.getDate(),5,0,1)}}function getTodayBlockCount(e,t,o){e.pb_counterBlockedSites.get().then(e=>{let n=(e||{})[t];n&&function isBetweenTimeRange(e){let t=new Date,o=new Date(e[0]),n=new Date(e[1]);return t>=o&&t<n}(n.currentTimeRange)?o(n.todayCount):o(0)})}function copyTextToClipboard(e){var t=document.createElement("textarea");t.style.position="fixed",t.style.top=0,t.style.left=0,t.style.width="2em",t.style.height="2em",t.style.padding=0,t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",t.value=e,document.body.appendChild(t),t.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(t)}function getBrowser(){return/firefox/i.test(navigator.userAgent)?"FF":"CH"}function getAbsoluteURL(e){return/^about:blank/i.test(e)||/^(https?:)?\/\//.test(e)?e:e=location.origin+(/^\//.test(e)?"":"/")+e}function isI18N(e){return!!chrome.i18n.getMessage(e)}function getI18N(e,t){return chrome.i18n.getMessage(e)||chrome.i18n.getMessage(t||e)||e}function insertBeforeRoot(e){const t=document.head;if(t)t.appendChild(e);else{const t=document.documentElement;t.insertBefore(e,t.firstChild)}}function sendToActiveTab(e,t){chrome.tabs.query({active:!0,lastFocusedWindow:!0},(function(o){chrome.tabs.sendMessage(o[0].id,{name:e,data:t||""})}))}function isFireFoxIncognito(e){return new Promise(e=>{if("FF"!=getBrowser())return e(!1);chrome.tabs.query({currentWindow:!0,active:!0},t=>{let o=t[0].id;chrome.tabs.executeScript(o,{code:"isI=chrome.extension.inIncognitoContext; isI;"},t=>chrome.runtime.lastError?e(!1):e(!(!t||!Array.isArray(t))&&t[0]))})})}},function(e,t,o){"use strict";t.a={thank_you_page_CH:"https://poperblocker.com/welcome",thank_you_page_FF:"https://poperblocker.com/welcome-firefox",privacy_policy_CH:"https://poperblocker.com/privacy/",privacy_policy_FF:"https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/privacy/",uninstall_page_CH:"https://poperblocker.com/uninstall/?",uninstall_page_FF:"https://poperblocker.com/uninstall-firefox/?",feedback_page:"https://poperblocker.com/feedback.html?from=ext",contact_page:"https://poperblocker.com/contact-form.html",appStore_CH:"https://chrome.google.com/webstore/detail/pop-up-blocker-for-chrome/bkkbcggnhapdmkeljlodobbkopceiche",appStore_FF:"https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/",extension_review_page_CH:"https://chrome.google.com/webstore/detail/pop-up-blocker-for-chrome/bkkbcggnhapdmkeljlodobbkopceiche/reviews",extension_review_page_FF:"https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/reviews/add",twitter_share_link:"https://twitter.com/intent/tweet?hashtags=popups&original_referer=https%3A%2F%2Fpoperblocker.com%3Fref%3Dfb_pp_share&related=socialmediahats&text=I'm%20using%20poper%20blocker%20to%20enjoy%20a%20popup%20free%20browsing%20experience%20pic.twitter.com%2FniqVgqfmAw&url=https%3A%2F%2Fgoo.gl%2FryoaEn&via=poper_blocker",facebook_share_link:"https://www.facebook.com/dialog/share?app_id=1911035589168170&display=popup&href=https%3A%2F%2Fpoperblocker.com%3Fref%3Dfb_pp_share%3Fhl%3Den&hashtag=%23For_No_More_Popups_Click_Below",overlay_check_API:"https://api2.poperblocker.com/view/update",overlay_blocking_context_item_contexts:["page","frame","selection","link","editable","image","video","audio"],googleSheetID:"1dRQsmt6DYMXGo3YeTQ442kV-xxG1LJfG41wEUpnWefM",dataSettings:{strKeys:["ga_allEvent_rate","ni"],arrKeys:["blacklist","whitelist"]},blockCountsToShowRate:5,blockCountsToShowRateAgain:100,defaultWhiteList:{sites:[],popups:["disqus.com","engage.wixapps.net","linkedin.com","google","gmail.com","www.pinterest.com","www.youtube.com","www.facebook.com","myh.godaddy.com"]},defaultBlackList:["adrunnr","successforyu.clickfunnels.com","fmovies.se","in-365-tagen.info","5000-settimanale.com","shop.mazzugioielli.com","maxigossip.com","lp.yazizim.com","beyourxfriend.com","99tab.com","zzqrt.com","canuck-method.net","bewomenly.com","playnow.guru","datingforyou-48e1.kxcdn.com","trafficnetworkads24.com","sistemadedinerogratis.com","canuckmethodprofit.co","consumerresearchnetwork.com","securemacfix.com","zz3d3.ru","zd1.quebec-bin.com","hot-games4you.xyz","om.elvenar.com","superpccleanup.com","gomediaz.com","judithi.xyz","free.atozmanuals.com","yoursuccess.ravpage.co.il","123hop.ir","quizcliente.pw","aussiemethod.biz","hlpnowp-c.com","picbumper.com","shaneless.com","anacondamonster.com","altrk1.com","health.todaydiets.com","download.weatherblink.com","happyluketh.com","go.ameinfo.com","50kaweek.net","thepornsurvey.com","ofsiite.ru","fulltab.com","1000spins.com","time2play-online.net","vintacars.com","welcome.pussysaga.com","free-desktop-games.com","download.televisionfanatic.com","theprofitsmaker.net","sgad.info","algocashmaster.net","sunmaker.com","topvipdreams.com","watchmygirlfriend.gfpornvideos.com","filesharefanatic.com","safedownloadhub.com","7awlalalam.blogspot.com","tvplusnewtab.com","trendingpatrol.com","moneymorning.com","ifileyou.com","classifiedcanada.ca","firefan.com","methode-binaire.com","letmetell.com","kenduktur.com","getafuk.com","yotraleplahnte.ru","jackpot.88beto.com","pwwysydh.com","search.queryrouter.com","v.lvztxy.com","pussysaga.com","saffamethod.com","prezzonline.com","searchprivacy.website","3d2819216eb4e1035879-7c248de0c99745406e9b749fc86ec3e4.ssl.cf1.rackcdn.com","only2date.com","mysagagame.com","themillionaireinpjs.net","wlt.kd2244.com","quickprivacycheck.com","hotchatdate.com","autotraderbot.com","z1.zedo.com","youlucky2014.com","traffic.getmyads.com","appcloudprotected.com","safensecure.com-allsites3.xyz","newpoptab.com","static.williamhill.com","myhealthyblog.co","greatestmobideals.com","sweetclarity.com","mgid.com","securepccure.com","autopengebygger.com","am15.net","es.reimageplus.com","o2.promos-info.com","it.reimageplus.com","westsluts.com","spinandwin.com-ser.pw","reimageplus.com","vodafone.promos-info.com","vinnmatpengar.se","movie.ienjoyapps.com","love4single.com","origin.getprice.com.au","ohmydating.com","lp.want-to-win.com","yabuletchrome.ru","bamdad.net","gotositenow.com","vcrypt.pw","newtabtv.com","mon.setsu.xyz","youforgottorenewyourhosting.com","zone-telechargement.ws","land.pckeeper.software","ad.adpop-1.com","advancedpctools.com","videos.randolphcountyheraldtribune.com","web-start.org","softreadynow.installupgradenowfreshandforyou.website","uplod.ws","pornhubcasino.com","maxbet.ro","2016prizefeed.com","thevideo.me","wantubad.com","tavanero.com","xcusmy.club","daclips.in","gaymenofporn.online","jackpotcitycasino.com","italian-method.com","getsearchincognito.com","youjustwonprize.com","finanz-nachrichten.me","quizcliente.site","da.reimageplus.com","jkanime.net","britmoneymethod.com","uae.souq.com","ka.azzer.net","safensecure.xyz","8t.hootingrhejkz.online","www6.blinkx.com","wizzcaster.com","comparaison-prix.com","vodlocker.lol","fr.reimageplus.com","free.fromdoctopdf.com","userscloud.com","myprivatesearch.com","fanli90.cn","tutticodicisconto.it","mediadec.com","gogamego.thewhizproducts.com","download.weatherblink.com","free.videodownloadconverter.com","we-are-gamers.com","sesso.communityadult.net","lp.blpmovies.com","search.queryrouter.com","bbb-johannesburg.localspecific.com","lp.blpmovies.com","go.ppixelm.com","r0.ru","sesso.communityadult.net","bbb-johannesburg.localspecific.com","ppixelm.com","cyberguardianspe.info","we-are-gamers.com","loginfaster.com/new","www.alfacart.com","www.foresee.com","mobile-win.com","www.plusnetwork.com","www.amicafarmacia.com","www.ienjoyapps.com","cheapcheap.io","screenaddict.thewhizproducts.com","nova.rambler.ru","free.gamingwonderland.com","p9328ujeiw1.ru","mobilecasinoclub.co.uk","pfhsystem.com","regtuneup.com","theprofitsmaker.net","bodogpromotions.eu","heroesreplay.org","financialsecrets.info","mymoneymakingapp.com","sunmaker.com","888casino-promotions.com","vogliosesso.com","scienceremix.com","allinonedocs.com","arabia.starzplay.com","allirishcasino.com","advancepctools.info","movie.ienjoyapps.com","surveyform001.s3-website-us-east-1.amazonaws.com","mgs188.com","pfhsystem.com","lpeva.com","ddsh8.com","theprofitsmaker.net","b2.ijquery11.com","sporthero.thewhizmarketing.com","securefastmac.tech","seen-on-screen.thewhizmarketing.com","1000spins.com","search.queryrouter.com","pfhsystem.com","reimageplus.com","offer.alibaba.com","searchlistings.org","search.queryrouter.com","search.queryrouter.com","mybinaryoptionsrobot.com","duplicashapp.com","search.queryrouter.com","bestgame.directory","droidclub.net",".rivalo.com","yoursuperprize.com","mediaexplained.com","om.elvenar.com","shinar.club","revitoleczemacream.com","freelotto.com","screenaddict.thewhizproducts.com","download.bringmesports.com/","allinonedocs.com","driver-fixer.com","arabydeal.com","cleanyourcomputertoday.com","arabydeal.com","music.mixplugin.com","1se.info","survey12.com","freesoftwaredlul.com","pldist01.com","ad.adpop-1.com","searchanonymous.net","abrst.pro","muzikfury.thewhizmarketing.com","lp.mbtrx.com","th1.forfun.maxisize-pro.com","watchmygirlfriend.gfpornbox.com","new.freelotto.com","desktoptrack.com","search.queryrouter.com","offer.alibaba.com","1000spins.com","promotions.coral.co.uk","search.queryrouter.com","tbsia.com","tbsia.com","multtaepyo.com","search.queryrouter.com","czechmethod.com","consumerview.co","wayretail.com","72onbase.com","funsafetab.com","search.queryrouter.com","speedyfiledownload.com","driver-fixer.com","arabydeal.com","cleanyourcomputertoday.com","arabydeal.com","music.mixplugin.com","1se.info","survey12.com","freesoftwaredlul.com","pldist01.com","ad.adpop-1.com","searchanonymous.net","abrst.pro","muzikfury.thewhizmarketing.com","lp.mbtrx.com","th1.forfun.maxisize-pro.com","watchmygirlfriend.gfpornbox.com","new.freelotto.com","desktoptrack.com","search.queryrouter.com","offer.alibaba.com","1000spins.com","promotions.coral.co.uk","search.queryrouter.com","tbsia.com","tbsia.com","surveyform001.s3-website-us-east-1.amazonaws.com","mgs188.com","pfhsystem.com","lpeva.com","ddsh8.com","theprofitsmaker.net","quantomcoding.com","sporthero.thewhizmarketing.com","popads.net","onclkds.com","consumerview.co","12kotov.ru","ruhotpair2.fingta.com","easytelevisionaccessnow.com","ahwrd.com","lpeva.com","ppgzf.com","zjstx.com","kituure.xyz","join.pro-gaming-world.com","mackeeperapp.mackeeper.com","tracknotify.com","2075.cdn.beyondhosting.net","idollash.com","ds.moviegoat.com","fulltab.com","rackcdn.com","prestoris.com","adsterra.com","swampssovuuhusp.top","streesusa.info","freesoftwaredlul.com","adreactor.com","a-static.com","codeonclick.com","heheme.com","adf.ly","seen-on-screen.thewhizmarketing.com","openload.co"]}},,function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"a",(function(){return i}));var n=o(0),a=o(2);function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,o){return function step(n,a){try{var r=t[n](a),i=r.value}catch(e){return void o(e)}if(!r.done)return Promise.resolve(i).then((function(e){step("next",e)}),(function(e){step("throw",e)}));e(i)}("next")}))}}const r={init:({whitelist:e})=>(e&&(e.defaultPopups=a.a.defaultWhiteList.popups),e)},i={init:({userWhitelist:e})=>Object.assign({defaultSites:a.a.defaultWhiteList.sites,defaultPopups:a.a.defaultWhiteList.popups},{version:.1,userDefaultExclude:[],userWhitelist:e}),getDefaultPopups(){return new Promise((e=_asyncToGenerator((function*(e){e((yield n.a.pb_remoteWhitelist.get()).popups)})),function(t){return e.apply(this,arguments)}));var e},get(){return new Promise((e=_asyncToGenerator((function*(e){const{defaultSites:t,userDefaultExclude:o,userWhitelist:a,defaultPopups:r}=yield n.a.pb_whitelistManager.get();e({sites:{def:t.without(o),user:a,all:t.without(o).concat(a)},popups:r})})),function(t){return e.apply(this,arguments)}));var e},addDefaultUserExclude:(...e)=>n.a.pb_whitelistManager.update(t=>{const{userDefaultExclude:o=[]}=t;return t.userDefaultExclude=o.concat(e).unique(),t}),addUserWhitelist:(...e)=>n.a.pb_whitelistManager.update(t=>{const{userWhitelist:o=[]}=t;return t.userWhitelist=o.concat(e).unique(),t}),removeUserWhitelist:(...e)=>n.a.pb_whitelistManager.update(t=>{const{userWhitelist:o=[]}=t;return t.userWhitelist=o.without(e),t})}},function(e,t){Array.prototype.unique||(Array.prototype.unique=function(){const e={};return this.forEach(t=>{e[t]=1}),Object.keys(e)}),Array.prototype.without||(Array.prototype.without=function(e){return this.filter(t=>!e.includes(t))}),Array.prototype.remove||(Array.prototype.remove=function(e){this.splice(this.indexOf(e),1)}),Array.prototype.contains||(Array.prototype.contains=function(e){return this.includes(e)}),String.prototype.endsWith||(String.prototype.endsWith=function(e){return this.lastIndexOf(e)+e.length===this.length-1})},,function(e,t,o){"use strict";o.r(t);o(5);var n=o(1),a=o(0),r=o(4),i=o(2);function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,o){return function step(n,a){try{var r=t[n](a),i=r.value}catch(e){return void o(e)}if(!r.done)return Promise.resolve(i).then((function(e){step("next",e)}),(function(e){step("throw",e)}));e(i)}("next")}))}}_asyncToGenerator((function*(){let e,t,o,s=!1;const c=yield a.a.many(a.a.pb_detectOverlays,a.a.pb_tabswithoverlay,a.a.pb_numOfBlocks,a.a.pb_pause,a.a.pb_OneTimeEvents).get(),l=yield r.a.get();var u;if(chrome.tabs.query({active:!0,lastFocusedWindow:!0},(u=_asyncToGenerator((function*(o){let r=o[0];const i=new URL(location.href).searchParams.get("site");i&&("FF"==Object(n.f)()&&location.hostname===browser.tabs.getCurrent()||location.hostname===chrome.runtime.id)&&(r={url:i}),e=r.id,t=new URL(r.url).host;const s=Object(n.l)(t,l.sites.def),u=Object(n.l)(t,l.sites.all);Object(n.k)(a.a,t,(function(e){let o=$("#result-msg"),a=e?1*e:0,r=Math.ceil(5*Math.random()),i=Object(n.g)(a?"PP_XPopupsBlocked_"+r:"PP_NoPopupsBlocked");a?(o.addClass("found-msg"),o.find(".msg").html(Object(n.g)("PP_PopupsFound"+(1==a?"_X1":"")))):(o.addClass("not-found-msg"),o.find(".msg").html(Object(n.g)("PP_PopupsNotFound"))),$(".url").html(t),$("#count").addClass(a?"found":"not-found").html(i+"<span>"+(a||"")+"</span>")})),$("#pauseSwitch").data("is-active",!c.pb_pause),c.pb_pause&&$("#container").addClass("off"),u&&$("#container").addClass("white-listed "+(s?"internal":"")),sendGoogleAnalyticsEvent("Shown")})),function(e){return u.apply(this,arguments)})),$("html").addClass(Object(n.f)()),$("#pauseSwitch").on("click",(function(){let e=$(this).data("is-active");a.a.pb_pause.set(e),function setPausedMode(e){let t=$("#container"),o=$("#pauseSwitch");e?(t.addClass("off"),o.data("is-active",!1).addClass("off")):(t.removeClass("off"),o.data("is-active",!0).removeClass("off"))}(e),sendGoogleAnalyticsEvent(e?"Power_off":"Power_on",t),chrome.runtime.sendMessage({name:"createIconContextMenu",paused:e}),chrome.tabs.query({},t=>{$.each(t,(t,o)=>{chrome.tabs.sendMessage(o.id,{name:"toggleFunction",toggle:!e})})}),chrome.browserAction.setIcon({path:e?"/images/icon128_g.png":"/images/icon128.png"}),e&&sendToBackground("KeenIO",{event:"switch-off:popup",post:{domain:t,url:void 0}})})),$("#allow-pops").on("click",(function(){sendGoogleAnalyticsEvent("Allow_popups",t),r.a.addUserWhitelist(t),setWhiteListMode(!0),chrome.tabs.sendMessage(e,{name:"toggleFunction",toggle:!1})})),$("#block-pops").on("click",_asyncToGenerator((function*(){sendGoogleAnalyticsEvent("Block_popups",t),yield r.a.removeUserWhitelist(t),setWhiteListMode(!1),chrome.tabs.sendMessage(e,{name:"toggleFunction",toggle:!0})}))),$("#whitelist-block-pops").on("click",(function(){sendGoogleAnalyticsEvent("Block_popups_whitelist",t),r.a.addDefaultUserExclude(t),setWhiteListMode(!1),chrome.tabs.sendMessage(e,{name:"toggleFunction",toggle:!0})})),$("#report-button").on("click",(function(){let e=$(this),o=$("#footer"),n="open"==o.data("state"),a=n?"":"open",r=n?0:138;$.when(o.data({state:a}).animate({bottom:r})).then((function(){e.toggleClass("hvr-icon-bob").toggleClass("hvr-icon-hang").addClass("paused")})),sendGoogleAnalyticsEvent("Did_we_miss_one_up",t)})),$("#report-button").on("mouseenter",(function(){$(this).removeClass("paused")})),$("#report-pop").on("click",(function(){sendGoogleAnalyticsEvent("Report_popup",t),sendToBackground("reportPopup",{url:void 0,host:t,message:"Report Site"}),sendToBackground("KeenIO",{event:"report-pop-not-blocked",post:{domain:t,url:void 0}}),setTimeout(window.close,500)})),$("#report-over").on("click",(function(){var e;sendGoogleAnalyticsEvent("Remove_overlay",t),sendToBackground("KeenIO",{event:"remove-overlay:popup",post:{domain:t,url:void 0}}),a.a.pb_detectOverlays.get().then((e=_asyncToGenerator((function*(e){const t=yield Object(n.m)();e?t?Object(n.p)("overlay-not-active-incognito",{source:"menu"}):Object(n.p)("manual-remove-overlay",{source:"menu"}):Object(n.p)("overlay-not-active",{source:"menu"}),setTimeout(window.close,50)})),function(t){return e.apply(this,arguments)}))})),$("#menu-button").on("click",(function(){$("#container").is(".off")||(sendGoogleAnalyticsEvent("ThreeDotsMenu"),$(this).addClass("on"),$("#menu").show())})),c.pb_OneTimeEvents.GDPR){let e=$(".message-container.gdpr");$(".gdpr-gotit").on("click",(function(e){c.pb_OneTimeEvents.GDPR=!1,a.a.pb_OneTimeEvents.set(c.pb_OneTimeEvents),sendGoogleAnalyticsEvent("GDPR-Gotit")})),e.show(),sendGoogleAnalyticsEvent("GDPR-Shown")}function setWhiteListMode(e){let t=$("#container");e?t.addClass("white-listed"):t.removeClass("white-listed")}function sendGoogleAnalyticsEvent(e,t){chrome.runtime.sendMessage({name:"trackEvent",category:"Main_menu",action:e,label:t})}function sendToBackground(e,t){chrome.runtime.sendMessage({name:e,data:t||""})}$(document).on("click",(function(e){let t=$(e.target),o=$("#menu-button"),n=$("#menu");t.is(o)||(o.removeClass("on"),n.hide())})),$("#menu .stats").on("click",(function(){s||(sendGoogleAnalyticsEvent("ThreeDotsMenu_Stats"),function resetStatsBar(){let e=$("#bar-overlays"),t=e.parent().find(".block-count"),o=$("#bar-tabs"),n=o.parent().find(".block-count"),a=$("#bar-windows"),r=a.parent().find(".block-count");e.css({height:0}),o.css({height:0}),a.css({height:0}),t.html(0),n.html(0),r.html(0)}(),a.a.pb_totalBlocksByType.get().then(e=>{!function setStatsTotals(e){let t=(e=e||{}).overlay||0,o=e.tab||0,n=e.win||0,a=t+o+n,r=3*a;$("#stats-total-blocked").html(a),$("#stats-total-saved").html(function toHHMMSS(e){let t=Math.floor(e/3600),o=Math.floor((e-3600*t)/60);return t+"h "+o+"m "+(e-3600*t-60*o)+"s"}(r))}(e),$("#main-stats").off("transitionend").on("transitionend",()=>{setTimeout(()=>{!function setStatsBars(e){let t=(e=e||{}).overlay||0,o=e.tab||0,n=e.win||0,a=Math.max.apply(Math,[t,o,n]),r=Math.round(100/(a/t)*80/100),i=Math.round(100/(a/o)*80/100),s=Math.round(100/(a/n)*80/100),c=$("#bar-overlays"),l=c.parent().find(".block-count"),u=$("#bar-tabs"),m=u.parent().find(".block-count"),p=$("#bar-windows"),d=p.parent().find(".block-count");c.animate({height:r},{duration:1e3,easing:"easeOutQuad",progress:function(e,a,r){let i=Math.round(100/(1/a)*t/100),s=Math.round(100/(1/a)*o/100),c=Math.round(100/(1/a)*n/100);l.html(i),m.html(s),d.html(c)}}),u.animate({height:i},{duration:1e3,easing:"easeOutQuad"}),p.animate({height:s},{duration:1e3,easing:"easeOutQuad"})}(e)},250)}).addClass("on")}),s=!0)})),$("#stats-close").on("click",(function(){$("#main-stats").removeClass("on"),s=!1})),$("#menu .options").on("click",(function(){$("#container").is(".off")||(sendGoogleAnalyticsEvent("ThreeDotsMenu_Options"),chrome.tabs.create({url:"options.htm"}),window.close())})),$("#menu > li").on("click",(function(e){let t=e.target.className,o=$(".message-container."+t);o.length&&(sendGoogleAnalyticsEvent("ThreeDotsMenu_"+t),o.show())})),$(".message-container .close").on("click",(function(e){return $(e.target).closest(".message-container").hide()})),$("#rating > li").on("click",(function(e){let t=1*$(e.target).data("rate");t<=4?chrome.tabs.create({url:i.a.contact_page}):chrome.tabs.create({url:i.a["extension_review_page_"+Object(n.f)()]}),sendGoogleAnalyticsEvent("Rating",t),window.close()})),$("#share > li").on("click",(function(e){let t=$(e.target),o=t.offset(),a=t.data("media");switch(a){case"link":Object(n.c)(i.a["appStore_"+Object(n.f)()]),$("#pb-link-copied-message").remove();var r=$('<div id="pb-link-copied-message">'+Object(n.g)("PP_Share_LinkCopied")+"</div>").css({top:o.top+35,left:o.left-28}).appendTo("body").show().animate({opacity:1},250);setTimeout((function(){return r.animate({opacity:0},250,(function(){return r.remove()}))}),2e3);break;case"twitter":window.open(i.a.twitter_share_link,"poper_share","width=730,height=300,top=150,left="+(screen.availWidth/2-365));break;case"facebook":window.open(i.a.facebook_share_link,"poper_share","width=730,height=360,top=150,left="+(screen.availWidth/2-365))}sendGoogleAnalyticsEvent("Share",a)})),$(".js-link").on("click",(function(e){e.preventDefault(),chrome.tabs.create({url:$(e.target).data("url")})})),$("[data-tooltip]").on("mouseenter",(function(){let e=$(this),t=Object(n.g)(e.data("tooltip")),a=$("#tooltip"),r=null!=e.data("tooltip-delay")?1*e.data("tooltip-delay"):1500,i=!!e.data("tooltip-flex");o=setTimeout((function(){a.find(".st-content").html(t),a.css({top:0,left:5,width:i?"auto":"95%"}).show();let o,n,r,s,c=e.offset(),l=e.outerWidth(),u=a.outerWidth();o=a.outerHeight(),n=c.top-o-8,r=i?Math.max(5,c.left+l/2-u/2):5,s=c.left-r+l/2-7,a.find(".st-arrow").css({left:s}),a.css({top:n,left:r}).addClass("active")}),r)})),$("[data-tooltip]").on("mouseleave",(function(){let e=$("#tooltip");o&&clearTimeout(o),e.removeClass("active").hide()})),$("[data-translate]").each((function(){var e=$(this);e.html(Object(n.g)(e.data("translate")))})),$.easing.easeOutQuad=function(e){return 1-function(e){return Math.pow(e,2)}(1-e)}}))()}]);