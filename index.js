!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lodash"),require("mobx-state-tree")):"function"==typeof define&&define.amd?define(["exports","lodash","mobx-state-tree"],n):n(t["trampss-mst-onaction"]={},t.lodash,t.mobxStateTree)}(this,function(t,n,e){"use strict";var r=function(t,e){return function(r,o){return!!(n.isString(t)&&t===r.fullpath||n.isFunction(t)&&t(r,o)||n.isRegExp(t)&&r.fullpath.match(t))&&e(r,o)}};r.ended=function(t,n){return function(e,o){return!!e.ended&&r(t,n)(e,o)}};var o=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}).constructor,u=function(t){return t instanceof o},i=function(t,n,e){t.forEach(function(t){return t(n,e)})},a=function(t,n,e){for(var r=t(n,e),o={done:!1};!o.done;)(o=r.next()).done||o.value(n,e)},c=function(t,e,r){var o=t(e,r);o&&n.isArray(o)&&o.forEach(function(t){return t(e,r)})},f=(function(){function t(t){this.value=t}function n(n){function e(o,u){try{var i=n[o](u),a=i.value;a instanceof t?Promise.resolve(a.value).then(function(t){e("next",t)},function(t){e("throw",t)}):r(i.done?"return":"normal",i.value)}catch(t){r("throw",t)}}function r(t,n){switch(t){case"return":o.resolve({value:n,done:!0});break;case"throw":o.reject(n);break;default:o.resolve({value:n,done:!1})}(o=o.next)?e(o.key,o.arg):u=null}var o,u;this._invoke=function(t,n){return new Promise(function(r,i){var a={key:t,arg:n,resolve:r,reject:i,next:null};u?u=u.next=a:(o=u=a,e(t,n))})},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(t){return this._invoke("next",t)},n.prototype.throw=function(t){return this._invoke("throw",t)},n.prototype.return=function(t){return this._invoke("return",t)}}(),Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}),s=function(t){var n=t.name,r=t.type,o=t.context,u=t.args,i=e.getPath(o),a={fullpath:i+"/"+n,path:i,name:n,args:u};switch(r){case"process_return":return f({},a,{ended:!0});case"action":return a;default:return}},l=function(t){return function(e,r){if(n.isFunction(t))return u(t)?a(t,e,r):c(t,e,r);if(n.isArray(t))return i(t,e,r);throw new Error("[trampss-mst-onaction] unknow dispatch type")}};t.default=function(t){var n=l(t);return function(t,e){var r=s(t);return r&&n(r,t.tree),e(t)}},t.take=r,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
