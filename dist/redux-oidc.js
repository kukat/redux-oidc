!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("prop-types"),require("react"),function(){try{return require("immutable")}catch(e){}}(),require("oidc-client"));else if("function"==typeof define&&define.amd)define(["prop-types","react","immutable","oidc-client"],r);else{var t="object"==typeof exports?r(require("prop-types"),require("react"),function(){try{return require("immutable")}catch(e){}}(),require("oidc-client")):r(e["prop-types"],e.react,e.immutable,e["oidc-client"]);for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(this,function(e,r,t,n){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=15)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.USER_EXPIRED="redux-oidc/USER_EXPIRED",r.REDIRECT_SUCCESS="redux-oidc/REDIRECT_SUCCESS",r.USER_LOADED="redux-oidc/USER_LOADED",r.SILENT_RENEW_ERROR="redux-oidc/SILENT_RENEW_ERROR",r.SESSION_TERMINATED="redux-oidc/SESSION_TERMINATED",r.USER_EXPIRING="redux-oidc/USER_EXPIRING",r.USER_FOUND="redux-oidc/USER_FOUND",r.LOADING_USER="redux-oidc/LOADING_USER",r.USER_SIGNED_OUT="redux-oidc/USER_SIGNED_OUT",r.LOAD_USER_ERROR="redux-oidc/LOAD_USER_ERROR"},function(e,r,t){"use strict";function n(){return{type:E.USER_EXPIRED}}function o(e){return{type:E.REDIRECT_SUCCESS,payload:e}}function i(e){return{type:E.USER_FOUND,payload:e}}function u(e){return{type:E.SILENT_RENEW_ERROR,payload:e}}function s(){return{type:E.SESSION_TERMINATED}}function a(){return{type:E.USER_EXPIRING}}function c(){return{type:E.LOADING_USER}}function d(){return{type:E.USER_SIGNED_OUT}}function l(){return{type:E.LOAD_USER_ERROR}}Object.defineProperty(r,"__esModule",{value:!0}),r.userExpired=n,r.redirectSuccess=o,r.userFound=i,r.silentRenewError=u,r.sessionTerminated=s,r.userExpiring=a,r.loadingUser=c,r.userSignedOut=d,r.loadUserError=l;var E=t(0)},function(e,r,t){"use strict";function n(e){return new o.UserManager(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(14)},function(e,r){e.exports=require("prop-types")},function(e,r){e.exports=require("react")},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.userSignedOut=r.loadingUser=r.userExpiring=r.sessionTerminated=r.silentRenewError=r.userFound=r.redirectSuccess=r.userExpired=r.LOAD_USER_ERROR=r.USER_SIGNED_OUT=r.LOADING_USER=r.USER_EXPIRING=r.SESSION_TERMINATED=r.SILENT_RENEW_ERROR=r.USER_NOT_FOUND=r.USER_FOUND=r.REDIRECT_SUCCESS=r.USER_EXPIRED=r.OidcProvider=r.reducer=r.immutableReducer=r.CallbackComponent=r.loadUser=r.processSilentRenew=r.createUserManager=void 0;var n=t(10),o=function(e){return e&&e.__esModule?e:{default:e}}(n);r.createUserManager=t(2).default,r.processSilentRenew=t(9).default,r.loadUser=t(8).default,r.CallbackComponent=t(6).default,r.immutableReducer=t(11).default,r.reducer=t(12).default,r.OidcProvider=t(7).default,r.USER_EXPIRED=t(0).USER_EXPIRED,r.REDIRECT_SUCCESS=t(0).REDIRECT_SUCCESS,r.USER_FOUND=t(0).USER_FOUND,r.USER_NOT_FOUND=t(0).USER_NOT_FOUND,r.SILENT_RENEW_ERROR=t(0).SILENT_RENEW_ERROR,r.SESSION_TERMINATED=t(0).SESSION_TERMINATED,r.USER_EXPIRING=t(0).USER_EXPIRING,r.LOADING_USER=t(0).LOADING_USER,r.USER_SIGNED_OUT=t(0).USER_SIGNED_OUT,r.LOAD_USER_ERROR=t(0).LOAD_USER_ERROR,r.userExpired=t(1).userExpired,r.redirectSuccess=t(1).redirectSuccess,r.userFound=t(1).userFound,r.silentRenewError=t(1).silentRenewError,r.sessionTerminated=t(1).sessionTerminated,r.userExpiring=t(1).userExpiring,r.loadingUser=t(1).loadingUser,r.userSignedOut=t(1).userSignedOut,r.default=o.default},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function u(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),a=t(3),c=n(a),d=t(4),l=n(d),E=(t(1),function(e){function r(){var e,t,n,u;o(this,r);for(var s=arguments.length,a=Array(s),c=0;c<s;c++)a[c]=arguments[c];return t=n=i(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(a))),n.onRedirectSuccess=function(e){n.props.successCallback(e)},n.onRedirectError=function(e){if(!n.props.errorCallback)throw new Error("Error handling redirect callback: "+e.message);n.props.errorCallback(e)},u=t,i(n,u)}return u(r,e),s(r,[{key:"componentDidMount",value:function(){var e=this;this.props.userManager.signinPopupCallback().then(function(r){return e.onRedirectSuccess(r)}).catch(function(r){return e.onRedirectError(r)})}},{key:"render",value:function(){return l.default.Children.only(this.props.children)}}]),r}(l.default.Component));E.propTypes={children:c.default.element.isRequired,userManager:c.default.object.isRequired,successCallback:c.default.func.isRequired,errorCallback:c.default.func},r.default=E},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function u(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),a=t(3),c=n(a),d=t(4),l=n(d),E=t(1),f=function(e){function r(e){o(this,r);var t=i(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.onUserLoaded=function(e){t.props.store.dispatch((0,E.userFound)(e))},t.onSilentRenewError=function(e){t.props.store.dispatch((0,E.silentRenewError)(e))},t.onAccessTokenExpired=function(){t.props.store.dispatch((0,E.userExpired)())},t.onUserUnloaded=function(){t.props.store.dispatch((0,E.sessionTerminated)())},t.onAccessTokenExpiring=function(){t.props.store.dispatch((0,E.userExpiring)())},t.onUserSignedOut=function(){t.props.store.dispatch((0,E.userSignedOut)())},t.userManager=e.userManager,t}return u(r,e),s(r,[{key:"componentWillMount",value:function(){this.userManager.events.addUserLoaded(this.onUserLoaded),this.userManager.events.addSilentRenewError(this.onSilentRenewError),this.userManager.events.addAccessTokenExpired(this.onAccessTokenExpired),this.userManager.events.addAccessTokenExpiring(this.onAccessTokenExpiring),this.userManager.events.addUserUnloaded(this.onUserUnloaded),this.userManager.events.addUserSignedOut(this.onUserSignedOut)}},{key:"componentWillUnmount",value:function(){this.userManager.events.removeUserLoaded(this.onUserLoaded),this.userManager.events.removeSilentRenewError(this.onSilentRenewError),this.userManager.events.removeAccessTokenExpired(this.onAccessTokenExpired),this.userManager.events.removeAccessTokenExpiring(this.onAccessTokenExpiring),this.userManager.events.removeUserUnloaded(this.onUserUnloaded),this.userManager.events.removeUserSignedOut(this.onUserSignedOut)}},{key:"render",value:function(){return l.default.Children.only(this.props.children)}}]),r}(l.default.Component);f.propTypes={userManager:c.default.object.isRequired,store:c.default.object.isRequired},r.default=f},function(e,r,t){"use strict";function n(e){c=e}function o(){return c}function i(e){return e&&!e.expired?c.dispatch((0,a.userFound)(e)):e&&e.expired&&c.dispatch((0,a.userExpired)()),e}function u(e){console.error("redux-oidc: Error in loadUser() function: "+e.message),c.dispatch((0,a.loadUserError)())}function s(e,r){if(!e||!e.dispatch)throw new Error("redux-oidc: You need to pass the redux store into the loadUser helper!");if(!r||!r.getUser)throw new Error("redux-oidc: You need to pass the userManager into the loadUser helper!");c=e,r.getUser().then(i).catch(u)}Object.defineProperty(r,"__esModule",{value:!0}),r.setReduxStore=n,r.getReduxStore=o,r.getUserCallback=i,r.errorCallback=u,r.default=s;var a=t(1),c=void 0},function(e,r,t){"use strict";function n(){(0,i.default)().signinSilentCallback()}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(2),i=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,r,t){"use strict";function n(e){r.nextMiddleware=p=e}function o(){return p}function i(e){r.storedUser=f=e}function u(){r.storedUser=f=null}function s(e){!e||e.expired?p((0,l.userExpired)()):(r.storedUser=f=e,p((0,l.userFound)(e)))}function a(e){console.error("redux-oidc: Error loading user in oidcMiddleware: "+e.message),p((0,l.loadUserError)())}function c(e,t,n){return t.type===E.USER_EXPIRED||t.type===E.LOADING_USER?e(t):(r.nextMiddleware=p=e,f&&!f.expired||(e((0,l.loadingUser)()),n.getUser().then(s).catch(a)),e(t))}function d(e){if(!e||!e.getUser)throw new Error("You must provide a user manager!");return function(r){return function(r){return function(t){c(r,t,e)}}}}Object.defineProperty(r,"__esModule",{value:!0}),r.nextMiddleware=r.storedUser=void 0,r.setNext=n,r.getNext=o,r.setStoredUser=i,r.removeStoredUser=u,r.getUserCallback=s,r.errorCallback=a,r.middlewareHandler=c,r.default=d;var l=t(1),E=t(0),f=r.storedUser=null,p=r.nextMiddleware=null},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(0),o=void 0;try{var i=t(13).fromJS,u=i({user:null,isLoadingUser:!1});o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,r=arguments[1];switch(r.type){case n.USER_EXPIRED:case n.SILENT_RENEW_ERROR:return i({user:null,isLoadingUser:!1});case n.SESSION_TERMINATED:case n.USER_SIGNED_OUT:return i({user:null,isLoadingUser:!1});case n.REDIRECT_SUCCESS:case n.USER_FOUND:return i({user:r.payload,isLoadingUser:!1});case n.LOADING_USER:return e.set("isLoadingUser",!0);default:return e}}}catch(e){o=function(){console.error("You must install immutable-js for the immutable reducer to work!")}}r.default=o},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,r=arguments[1];switch(r.type){case i.USER_EXPIRED:case i.SILENT_RENEW_ERROR:return Object.assign({},o({},e),{user:null,isLoadingUser:!1});case i.SESSION_TERMINATED:case i.USER_SIGNED_OUT:return Object.assign({},o({},e),{user:null,isLoadingUser:!1});case i.REDIRECT_SUCCESS:case i.USER_FOUND:return Object.assign({},o({},e),{user:r.payload,isLoadingUser:!1});case i.LOADING_USER:return Object.assign({},o({},e),{isLoadingUser:!0});default:return e}}Object.defineProperty(r,"__esModule",{value:!0});var o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};r.default=n;var i=t(0),u={user:null,isLoadingUser:!1}},function(e,r){e.exports=require("immutable")},function(e,r){e.exports=require("oidc-client")},function(e,r,t){e.exports=t(5)}])});