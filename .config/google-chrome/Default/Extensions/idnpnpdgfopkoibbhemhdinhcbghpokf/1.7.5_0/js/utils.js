var CommonUtils=function(){return this.isEmpty=function(a){return null==a||null==a||0==a.trim().length},this.isNotEmpty=function(a){return!this.isEmpty(a)},this.isSid=function(a){return!!(this.isNotEmpty(a)&&64==a.trim().length)},this.isLength=function(a,b){return!!(this.isNotEmpty(a)&&a.length==b)},this.isEqual=function(a,b){return!!(this.isNotEmpty(a)&&this.isNotEmpty(b)&&a==b)},this.isTrue=function(a){return null!=a&&null!=a&&!0==a},this.isFalse=function(a){return!this.isTrue(a)},this.isEqualIgnoreCase=function(a,b){return!!(this.isNotEmpty(a)&&this.isNotEmpty(b)&&a.toUpperCase()==b.toUpperCase())},this.isEmptyArray=function(a){return!(null!=a&&0<a.length)},this.isContains=function(a,b){return!this.isEmptyArray(a)&&this.isNotEmpty(b)&&-1!=a.indexOf(b)},this.isStringContains=function(a,b){return!!(this.isNotEmpty(a)&&this.isNotEmpty(b)&&0<=a.toUpperCase().indexOf(b.toUpperCase()))},this.isEmail=function(a){var b=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\	".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return this.isNotEmpty(a)&&b.test(a)},this.isStringStartsWith=function(a,b){return!!(this.isNotEmpty(a)&&this.isNotEmpty(b)&&0==a.indexOf(b))},this.getUniqueId=function(){function a(){var a=Math.floor;return a(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()},this.isObject=function(a){return"object"==typeof a},this.isEmptyObject=function(a){return!!(null==a||""==a||this.isObject(a)&&0>=Object.getOwnPropertyNames(a).length)},this.isNotEmptyObject=function(a){return!this.isEmptyObject(a)},this.getBrowserName=function(){var a,b=navigator.userAgent,c=b.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return /trident/i.test(c[1])?(a=/\brv[ :]+(\d+)/g.exec(b)||[],"IE "+(a[1]||"")):"Chrome"===c[1]&&(a=b.match(/\b(OPR|Edge)\/(\d+)/),null!=a)?a.slice(1).join(" ").replace("OPR","Opera"):(c=c[2]?[c[1],c[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(a=b.match(/version\/(\d+)/i))&&c.splice(1,1,a[1]),c.join(" "))},this.isMobile=function(){return /Mobile/i.test(navigator.userAgent)},this.getBrowserInfo=function(){var a={platform:navigator.platform,name:CommonUtils.getBrowserName(),isMobile:CommonUtils.isMobile(),language:navigator.language,ip:navigator.language};return a},this.cloneAsObject=function a(b){if(null===b||!(b instanceof Object))return b;var c=b instanceof Array?[]:{};for(var d in b)c[d]=a(b[d]);return c},this.getColor=function(){return"#"+(16777215*Math.random()<<0).toString(16)},this.runRegesp=function(){},this}();