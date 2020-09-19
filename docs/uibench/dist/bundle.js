!function(){"use strict";var e=Array.isArray;function n(e){var n=typeof e;return"string"===n||"number"===n}function t(e){return void 0===e||null===e}function r(e){return null===e||!1===e||!0===e||void 0===e}function l(e){return"function"===typeof e}function o(e){return"string"===typeof e}function i(e){return null===e}function a(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var l in n)t[l]=n[l];return t}function u(e,n){if(l(n))return{data:e,event:n};return null}function c(e){return!i(e)&&"object"===typeof e}var f={};function s(e){return e.substr(2).toLowerCase()}function d(e,n){e.appendChild(n)}function p(e,n,t){i(t)?d(e,n):e.insertBefore(n,t)}function v(e,n){e.removeChild(n)}function h(e,n,t){var r=e.children;if(4&t)return r.$LI;if(8192&t)return 2===e.childFlags?r:r[n?0:r.length-1];return r}function g(e,n){for(var t;e;){if(2033&(t=e.flags))return e.dom;e=h(e,n,t)}return null}function m(e,n){do{var t=e.flags;if(2033&t)return void v(n,e.dom);var r=e.children;if(4&t&&(e=r.$LI),8&t&&(e=r),8192&t){if(2!==e.childFlags){for(var l=0,o=r.length;l<o;++l)m(r[l],n);return}e=r}}while(e)}function k(e,n,t){do{var r=e.flags;if(2033&r)return void p(n,e.dom,t);var l=e.children;if(4&r&&(e=l.$LI),8&r&&(e=l),8192&r){if(2!==e.childFlags){for(var o=0,i=l.length;o<i;++o)k(l[o],n,t);return}e=l}}while(e)}function b(e,n,t){if(e.constructor.getDerivedStateFromProps)return a(t,e.constructor.getDerivedStateFromProps(n,t));return t}var y={componentComparator:null,createVNode:null,renderComplete:null};function C(e,n){e.textContent=n}function w(e,n){return c(e)&&e.event===n.event&&e.data===n.data}function $(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function F(e,n){return!!l(e)&&(e(n),!0)}var P="$";function x(e,n,t,r,l,o,i,a){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===l?null:l,this.props=void 0===o?null:o,this.ref=void 0===i?null:i,this.type=a}function V(t,l,a,u,c,f,s,d){var p=void 0===c?1:c,v=new x(p,u,a,t,s,f,d,l);return y.createVNode&&y.createVNode(v),0===p&&function(t,l){var a,u=1;if(r(l))a=l;else if(n(l))u=16,a=l;else if(e(l)){for(var c=l.length,f=0;f<c;++f){var s=l[f];if(r(s)||e(s)){a=a||l.slice(0,f),A(l,a,f,"");break}if(n(s))(a=a||l.slice(0,f)).push(L(s,P+f));else{var d=s.key,p=(81920&s.flags)>0,v=i(d),h=o(d)&&d[0]===P;p||v||h?(a=a||l.slice(0,f),(p||h)&&(s=U(s)),(v||h)&&(s.key=P+f),a.push(s)):a&&a.push(s),s.flags|=65536}}u=0===(a=a||l).length?1:8}else(a=l).flags|=65536,81920&l.flags&&(a=U(l)),u=2;t.children=a,t.childFlags=u}(v,v.children),v}function N(e,n,r,l,o){var i=new x(1,null,null,e=function(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}(e,n),l,function(e,n,r){var l=(32768&e?n.render:n).defaultProps;if(t(l))return r;if(t(r))return a(l,null);return $(r,l)}(e,n,r),function(e,n,r){if(4&e)return r;var l=(32768&e?n.render:n).defaultHooks;if(t(l))return r;if(t(r))return l;return $(r,l)}(e,n,o),n);return y.createVNode&&y.createVNode(i),i}function L(e,n){return new x(1,t(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function S(e,n,t){var r=V(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=I(),r.childFlags=2;break;case 16:r.children=[L(e)],r.childFlags=4}return r}function U(e){var n=-16385&e.flags,t=e.props;if(14&n&&!i(t)){var r=t;for(var l in t={},r)t[l]=r[l]}if(0===(8192&n))return new x(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return function(e){var n=e.children,t=e.childFlags;return S(2===t?U(n):n.map(U),t,e.key)}(e)}function I(){return L("",null)}function A(t,l,a,u){for(var c=t.length;a<c;a++){var f=t[a];if(!r(f)){var s=u+P+a;if(e(f))A(f,l,0,s);else{if(n(f))f=L(f,s);else{var d=f.key,p=o(d)&&d[0]===P;(81920&f.flags||p)&&(f=U(f)),f.flags|=65536,p?d.substring(0,u.length)!==u&&(f.key=u+d):i(d)?f.key=s:f.key=u+d}l.push(f)}}}}function M(t){if(r(t)||n(t))return L(t,null);if(e(t))return S(t,0,null);return 16384&t.flags?U(t):t}var T="http://www.w3.org/1999/xlink",D="http://www.w3.org/XML/1998/namespace",B={"xlink:actuate":T,"xlink:arcrole":T,"xlink:href":T,"xlink:role":T,"xlink:show":T,"xlink:title":T,"xlink:type":T,"xml:base":D,"xml:lang":D,"xml:space":D};function E(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var W=E(0),H=E(null),O=E(!0);function R(e,n){var t=n.$EV;return t||(t=n.$EV=E(null)),t[e]||1===++W[e]&&(H[e]=function(e){var n="onClick"===e||"onDblClick"===e?function(e){return function(n){if(0!==n.button)return void n.stopPropagation();X(n,!0,e,G(n))}}(e):function(e){return function(n){X(n,!1,e,G(n))}}(e);return document.addEventListener(s(e),n),n}(e)),t}function j(e,n){var t=n.$EV;t&&t[e]&&(0===--W[e]&&(document.removeEventListener(s(e),H[e]),H[e]=null),t[e]=null)}function X(e,n,t,r){var o=function(e){return l(e.composedPath)?e.composedPath()[0]:e.target}(e);do{if(n&&o.disabled)return;var a=o.$EV;if(a){var u=a[t];if(u&&(r.dom=o,u.event?u.event(u.data,e):u(e),e.cancelBubble))return}o=o.parentNode}while(!i(o))}function _(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function K(){return this.defaultPrevented}function q(){return this.cancelBubble}function G(e){var n={dom:document};return e.isDefaultPrevented=K,e.isPropagationStopped=q,e.stopPropagation=_,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function J(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var l=n.toLowerCase();e[l]&&e[l](t)}}function z(e,n){var t=function(t){var r=this.$V;if(!r)return;var i=r.props||f,a=r.dom;if(o(e))J(i,e,t);else for(var u=0;u<e.length;++u)J(i,e[u],t);if(l(n)){var c=this.$V,s=c.props||f;n(s,a,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function Q(e,n,t){var r="$"+n,o=e[r];if(o){if(o[1].wrapped)return;e.removeEventListener(o[0],o[1]),e[r]=null}l(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function Y(e){return"checkbox"===e||"radio"===e}var Z=z("onInput",te),ee=z(["onClick","onChange"],te);function ne(e){e.stopPropagation()}function te(e,n){var r=e.type,l=e.value,o=e.checked,i=e.multiple,a=e.defaultValue,u=!t(l);r&&r!==n.type&&n.setAttribute("type",r),t(i)||i===n.multiple||(n.multiple=i),t(a)||u||(n.defaultValue=a+""),Y(r)?(u&&(n.value=l),t(o)||(n.checked=o)):u&&n.value!==l?(n.defaultValue=l,n.value=l):t(o)||(n.checked=o)}function re(n,r){if("option"===n.type)!function(n,r){var l=n.props||f,o=n.dom;o.value=l.value,l.value===r||e(r)&&-1!==r.indexOf(l.value)?o.selected=!0:t(r)&&t(l.selected)||(o.selected=l.selected||!1)}(n,r);else{var l=n.children,o=n.flags;if(4&o)re(l.$LI,r);else if(8&o)re(l,r);else if(2===n.childFlags)re(l,r);else if(12&n.childFlags)for(var i=0,a=l.length;i<a;++i)re(l[i],r)}}ne.wrapped=!0;var le=z("onChange",oe);function oe(e,n,r,l){var o=Boolean(e.multiple);t(e.multiple)||o===n.multiple||(n.multiple=o);var i=e.selectedIndex;if(-1===i&&(n.selectedIndex=-1),1!==l.childFlags){var a=e.value;"number"===typeof i&&i>-1&&n.options[i]&&(a=n.options[i].value),r&&t(a)&&(a=e.defaultValue),re(l,a)}}var ie,ae,ue=z("onInput",fe),ce=z("onChange");function fe(e,n,r){var l=e.value,o=n.value;if(t(l)){if(r){var i=e.defaultValue;t(i)||i===o||(n.defaultValue=i,n.value=i)}}else o!==l&&(n.defaultValue=l,n.value=l)}function se(e,n,t,r,l,o){64&e?te(r,t):256&e?oe(r,t,l,n):128&e&&fe(r,t,l),o&&(t.$V=n)}function de(e){return e.type&&Y(e.type)?!t(e.checked):!t(e.value)}function pe(e){e&&!F(e,null)&&e.current&&(e.current=null)}function ve(e,n,t){e&&(l(e)||void 0!==e.current)&&t.push((function(){F(e,n)||void 0===e.current||(e.current=n)}))}function he(e,n){ge(e),m(e,n)}function ge(e){var n,r=e.flags,o=e.children;if(481&r){n=e.ref;var a=e.props;pe(n);var u=e.childFlags;if(!i(a))for(var c=Object.keys(a),s=0,d=c.length;s<d;s++){var p=c[s];O[p]&&j(p,e.dom)}12&u?me(o):2===u&&ge(o)}else o&&(4&r?(l(o.componentWillUnmount)&&o.componentWillUnmount(),pe(e.ref),o.$UN=!0,ge(o.$LI)):8&r?(!t(n=e.ref)&&l(n.onComponentWillUnmount)&&n.onComponentWillUnmount(g(e,!0),e.props||f),ge(o)):1024&r?he(o,e.ref):8192&r&&12&e.childFlags&&me(o))}function me(e){for(var n=0,t=e.length;n<t;++n)ge(e[n])}function ke(e){e.textContent=""}function be(e,n,t){me(t),8192&n.flags?m(n,e):ke(e)}function ye(e,n,r,a,u,f,d){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":a.autofocus=!!r;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":a[e]=!!r;break;case"defaultChecked":case"value":case"volume":if(f&&"value"===e)break;var p=t(r)?"":r;a[e]!==p&&(a[e]=p);break;case"style":!function(e,n,r){if(t(n))return void r.removeAttribute("style");var l,i,a=r.style;if(o(n))return void(a.cssText=n);if(t(e)||o(e))for(l in n)i=n[l],a.setProperty(l,i);else{for(l in n)(i=n[l])!==e[l]&&a.setProperty(l,i);for(l in e)t(n[l])&&a.removeProperty(l)}}(n,r,a);break;case"dangerouslySetInnerHTML":!function(e,n,r,l){var o=e&&e.__html||"",a=n&&n.__html||"";o!==a&&(t(a)||function(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}(l,a)||(i(r)||(12&r.childFlags?me(r.children):2===r.childFlags&&ge(r.children),r.children=null,r.childFlags=1),l.innerHTML=a))}(n,r,d,a);break;default:O[e]?function(e,n,t,r){if(l(t))R(e,r)[e]=t;else if(c(t)){if(w(n,t))return;R(e,r)[e]=t}else j(e,r)}(e,n,r,a):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?function(e,n,t,r){if(c(t)){if(w(n,t))return;t=function(e){var n=e.event;return function(t){n(e.data,t)}}(t)}Q(r,s(e),t)}(e,n,r,a):t(r)?a.removeAttribute(e):u&&B[e]?a.setAttributeNS(B[e],e,r):a.setAttribute(e,r)}}function Ce(e,n,t){var r=M(e.render(n,e.state,t)),o=t;return l(e.getChildContext)&&(o=a(t,e.getChildContext())),e.$CX=o,r}function we(e,n){var t=e.props||f;return 32768&e.flags?e.type.render(t,e.ref,n):e.type(t,n)}function $e(e,n,r,o,a,u){var c=e.flags|=16384;481&c?function(e,n,r,l,o,a){var u=e.flags,c=e.props,f=e.className,s=e.children,d=e.childFlags,v=e.dom=function(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}(e.type,l=l||(32&u)>0);if(t(f)||""===f||(l?v.setAttribute("class",f):v.className=f),16===d)C(v,s);else if(1!==d){var h=l&&"foreignObject"!==e.type;2===d?(16384&s.flags&&(e.children=s=U(s)),$e(s,v,r,h,null,a)):8!==d&&4!==d||Pe(s,v,r,h,null,a)}i(n)||p(n,v,o),i(c)||function(e,n,t,r,l){var o=!1,i=(448&n)>0;for(var a in i&&(o=de(t))&&function(e,n,t){64&e?function(e,n){Y(n.type)?(Q(e,"change",ee),Q(e,"click",ne)):Q(e,"input",Z)}(n,t):256&e?function(e){Q(e,"change",le)}(n):128&e&&function(e,n){Q(e,"input",ue),n.onChange&&Q(e,"change",ce)}(n,t)}(n,r,t),t)ye(a,null,t[a],r,l,o,null);i&&se(n,e,r,t,!0,o)}(e,u,c,v,l),ve(e.ref,v,a)}(e,n,r,o,a,u):4&c?function(e,n,t,r,o,a){var u=function(e,n,t,r,o,a){var u=new n(t,r),c=u.$N=Boolean(n.getDerivedStateFromProps||u.getSnapshotBeforeUpdate);if(u.$SVG=o,u.$L=a,e.children=u,u.$BS=!1,u.context=r,u.props===f&&(u.props=t),c)u.state=b(u,t,u.state);else if(l(u.componentWillMount)){u.$BR=!0,u.componentWillMount();var s=u.$PS;if(!i(s)){var d=u.state;if(i(d))u.state=s;else for(var p in s)d[p]=s[p];u.$PS=null}u.$BR=!1}return u.$LI=Ce(u,t,r),u}(e,e.type,e.props||f,t,r,a);$e(u.$LI,n,u.$CX,r,o,a),function(e,n,t){ve(e,n,t),l(n.componentDidMount)&&t.push(function(e){return function(){e.componentDidMount()}}(n))}(e.ref,u,a)}(e,n,r,o,a,u):8&c?(function(e,n,t,r,l,o){$e(e.children=M(we(e,t)),n,t,r,l,o)}(e,n,r,o,a,u),function(e,n){var r=e.ref;t(r)||(F(r.onComponentWillMount,e.props||f),l(r.onComponentDidMount)&&n.push(function(e,n){return function(){e.onComponentDidMount(g(n,!0),n.props||f)}}(r,e)))}(e,u)):512&c||16&c?Fe(e,n,a):8192&c?function(e,n,t,r,l,o){var i=e.children,a=e.childFlags;12&a&&0===i.length&&(a=e.childFlags=2,i=e.children=I()),2===a?$e(i,t,l,r,l,o):Pe(i,t,n,r,l,o)}(e,r,n,o,a,u):1024&c&&function(e,n,t,r,l){$e(e.children,e.ref,n,!1,null,l);var o=I();Fe(o,t,r),e.dom=o.dom}(e,r,n,a,u)}function Fe(e,n,t){var r=e.dom=document.createTextNode(e.children);i(n)||p(n,r,t)}function Pe(e,n,t,r,l,o){for(var i=0;i<e.length;++i){var a=e[i];16384&a.flags&&(e[i]=a=U(a)),$e(a,n,t,r,l,o)}}function xe(e,n,o,u,c,s,p){var h=n.flags|=16384;e.flags!==h||e.type!==n.type||e.key!==n.key||2048&h?16384&e.flags?function(e,n,t,r,l,o){ge(e),0!==(n.flags&e.flags&2033)?($e(n,null,r,l,null,o),function(e,n,t){e.replaceChild(n,t)}(t,n.dom,e.dom)):($e(n,t,r,l,g(e,!0),o),m(e,t))}(e,n,o,u,c,p):$e(n,o,u,c,s,p):481&h?function(e,n,r,l,o,i){var a,u=n.dom=e.dom,c=e.props,s=n.props,d=!1,p=!1;if(l=l||(32&o)>0,c!==s){var v=c||f;if((a=s||f)!==f)for(var h in(d=(448&o)>0)&&(p=de(a)),a){var g=v[h],m=a[h];g!==m&&ye(h,g,m,u,l,p,e)}if(v!==f)for(var k in v)t(a[k])&&!t(v[k])&&ye(k,v[k],null,u,l,p,e)}var b=n.children,y=n.className;e.className!==y&&(t(y)?u.removeAttribute("class"):l?u.setAttribute("class",y):u.className=y),4096&o?function(e,n){e.textContent!==n&&(e.textContent=n)}(u,b):Ve(e.childFlags,n.childFlags,e.children,b,u,r,l&&"foreignObject"!==n.type,null,e,i),d&&se(o,n,u,a,!1,p);var C=n.ref,w=e.ref;w!==C&&(pe(w),ve(C,u,i))}(e,n,u,c,h,p):4&h?function(e,n,t,r,o,u,c){var s=n.children=e.children;if(i(s))return;s.$L=c;var d=n.props||f,p=n.ref,v=e.ref,h=s.state;if(!s.$N){if(l(s.componentWillReceiveProps)){if(s.$BR=!0,s.componentWillReceiveProps(d,r),s.$UN)return;s.$BR=!1}i(s.$PS)||(h=a(h,s.$PS),s.$PS=null)}(function(e,n,t,r,o,i,u,c,f){var s=e.state,d=e.props,p=Boolean(e.$N),v=l(e.shouldComponentUpdate);if(p&&(n=b(e,t,n!==s?a(s,n):n)),!v||v&&e.shouldComponentUpdate(t,n,o)){!p&&l(e.componentWillUpdate)&&e.componentWillUpdate(t,n,o),e.props=t,e.state=n,e.context=o;var h=null,g=Ce(e,t,o);p&&l(e.getSnapshotBeforeUpdate)&&(h=e.getSnapshotBeforeUpdate(d,s)),xe(e.$LI,g,r,e.$CX,i,c,f),e.$LI=g,l(e.componentDidUpdate)&&function(e,n,t,r,l){l.push((function(){e.componentDidUpdate(n,t,r)}))}(e,d,s,h,f)}else e.props=t,e.state=n,e.context=o})(s,h,d,t,r,o,0,u,c),v!==p&&(pe(v),ve(p,s,c))}(e,n,o,u,c,s,p):8&h?function(e,n,r,o,i,a,u){var c=!0,s=n.props||f,d=n.ref,p=e.props,v=!t(d),h=e.children;if(v&&l(d.onComponentShouldUpdate)&&(c=d.onComponentShouldUpdate(p,s)),!1!==c){v&&l(d.onComponentWillUpdate)&&d.onComponentWillUpdate(p,s);var g=M(we(n,o));xe(h,g,r,o,i,a,u),n.children=g,v&&l(d.onComponentDidUpdate)&&d.onComponentDidUpdate(p,s)}else n.children=h}(e,n,o,u,c,s,p):16&h?function(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}(e,n):512&h?n.dom=e.dom:8192&h?function(e,n,t,r,l,o){var i=e.children,a=n.children,u=e.childFlags,c=n.childFlags,f=null;12&c&&0===a.length&&(c=n.childFlags=2,a=n.children=I());var s=0!==(2&c);if(12&u){var d=i.length;(8&u&&8&c||s||!s&&a.length>d)&&(f=g(i[d-1],!1).nextSibling)}Ve(u,c,i,a,t,r,l,f,e,o)}(e,n,o,u,c,p):function(e,n,t,l){var o=e.ref,i=n.ref,a=n.children;if(Ve(e.childFlags,n.childFlags,e.children,a,o,t,!1,null,e,l),n.dom=e.dom,o!==i&&!r(a)){var u=a.dom;v(o,u),d(i,u)}}(e,n,u,p)}function Ve(e,n,t,r,l,o,i,a,u,c){switch(e){case 2:switch(n){case 2:xe(t,r,l,o,i,a,c);break;case 1:he(t,l);break;case 16:ge(t),C(l,r);break;default:!function(e,n,t,r,l,o){ge(e),Pe(n,t,r,l,g(e,!0),o),m(e,t)}(t,r,l,o,i,c)}break;case 1:switch(n){case 2:$e(r,l,o,i,a,c);break;case 1:break;case 16:C(l,r);break;default:Pe(r,l,o,i,a,c)}break;case 16:switch(n){case 16:!function(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:C(t,n))}(t,r,l);break;case 2:ke(l),$e(r,l,o,i,a,c);break;case 1:ke(l);break;default:ke(l),Pe(r,l,o,i,a,c)}break;default:switch(n){case 16:me(t),C(l,r);break;case 2:be(l,u,t),$e(r,l,o,i,a,c);break;case 1:be(l,u,t);break;default:var f=0|t.length,s=0|r.length;0===f?s>0&&Pe(r,l,o,i,a,c):0===s?be(l,u,t):8===n&&8===e?function(e,n,t,r,l,o,i,a,u,c){var f,s,d=o-1,p=i-1,v=0,h=e[v],m=n[v];e:{for(;h.key===m.key;){if(16384&m.flags&&(n[v]=m=U(m)),xe(h,m,t,r,l,a,c),e[v]=m,++v>d||v>p)break e;h=e[v],m=n[v]}for(h=e[d],m=n[p];h.key===m.key;){if(16384&m.flags&&(n[p]=m=U(m)),xe(h,m,t,r,l,a,c),e[d]=m,p--,v>--d||v>p)break e;h=e[d],m=n[p]}}if(v>d){if(v<=p)for(s=(f=p+1)<i?g(n[f],!0):a;v<=p;)16384&(m=n[v]).flags&&(n[v]=m=U(m)),++v,$e(m,t,r,l,s,c)}else if(v>p)for(;v<=d;)he(e[v++],t);else!function(e,n,t,r,l,o,i,a,u,c,f,s,d){var p,v,h,m=0,b=a,y=a,C=o-a+1,w=i-a+1,$=new Int32Array(w+1),F=C===r,P=!1,x=0,V=0;if(l<4||(C|w)<32)for(m=b;m<=o;++m)if(p=e[m],V<w){for(a=y;a<=i;a++)if(v=n[a],p.key===v.key){if($[a-y]=m+1,F)for(F=!1;b<m;)he(e[b++],u);x>a?P=!0:x=a,16384&v.flags&&(n[a]=v=U(v)),xe(p,v,u,t,c,f,d),++V;break}!F&&a>i&&he(p,u)}else F||he(p,u);else{var N={};for(m=y;m<=i;++m)N[n[m].key]=m;for(m=b;m<=o;++m)if(p=e[m],V<w)if(void 0!==(a=N[p.key])){if(F)for(F=!1;m>b;)he(e[b++],u);$[a-y]=m+1,x>a?P=!0:x=a,16384&(v=n[a]).flags&&(n[a]=v=U(v)),xe(p,v,u,t,c,f,d),++V}else F||he(p,u);else F||he(p,u)}if(F)be(u,s,e),Pe(n,u,t,c,f,d);else if(P){var L=function(e){var n=0,t=0,r=0,l=0,o=0,i=0,a=0,u=e.length;for(u>Ne&&(Ne=u,ie=new Int32Array(u),ae=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=ie[l]]<n){ae[t]=r,ie[++l]=t;continue}for(o=0,i=l;o<i;)e[ie[a=o+i>>1]]<n?o=a+1:i=a;n<e[ie[o]]&&(o>0&&(ae[t]=ie[o-1]),ie[o]=t)}o=l+1;var c=new Int32Array(o);for(i=ie[o-1];o-- >0;)c[o]=i,i=ae[i],ie[o]=0;return c}($);for(a=L.length-1,m=w-1;m>=0;m--)0===$[m]?(16384&(v=n[x=m+y]).flags&&(n[x]=v=U(v)),$e(v,u,t,c,(h=x+1)<l?g(n[h],!0):f,d)):a<0||m!==L[a]?k(v=n[x=m+y],u,(h=x+1)<l?g(n[h],!0):f):a--}else if(V!==w)for(m=w-1;m>=0;m--)0===$[m]&&(16384&(v=n[x=m+y]).flags&&(n[x]=v=U(v)),$e(v,u,t,c,(h=x+1)<l?g(n[h],!0):f,d))}(e,n,r,o,i,d,p,v,t,l,a,u,c)}(t,r,l,o,i,f,s,a,u,c):function(e,n,t,r,l,o,i,a,u){for(var c,f,s=o>i?i:o,d=0;d<s;++d)c=n[d],f=e[d],16384&c.flags&&(c=n[d]=U(c)),xe(f,c,t,r,l,a,u),e[d]=c;if(o<i)for(d=s;d<i;++d)16384&(c=n[d]).flags&&(c=n[d]=U(c)),$e(c,t,r,l,a,u);else if(o>i)for(d=s;d<o;++d)he(e[d],t)}(t,r,l,o,i,f,s,a,c)}}}var Ne=0;function Le(e,n,r,o){void 0===r&&(r=null),void 0===o&&(o=f),function(e,n,r,o){var i=[],a=n.$V;t(a)?t(e)||(16384&e.flags&&(e=U(e)),$e(e,n,o,!1,null,i),n.$V=e,a=e):t(e)?(he(a,n),n.$V=null):(16384&e.flags&&(e=U(e)),xe(a,e,n,o,!1,null,i),a=n.$V=e),function(e){for(var n=0;n<e.length;n++)e[n]()}(i),l(r)&&r(),l(y.renderComplete)&&y.renderComplete(a,n)}(e,n,r,o)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!==typeof Promise&&Promise.resolve().then.bind(Promise.resolve()),uibench.init("Inferno","7.4.4");var Se={onComponentShouldUpdate:function(e,n){return e!==n}};function Ue(e){return V(1,"li","TreeLeaf",e.children,16,null,null,null)}function Ie(e){for(var n=e.data,t=n.children.length,r=new Array(t),l=0;l<t;l++){var o=n.children[l],i=o.id;o.container?r[l]=N(2,Ie,{data:o},i,null):r[l]=N(2,Ue,{children:i},i,null)}return V(1,"ul","TreeNode",r,8,null,null,null)}function Ae(e){var n=e.data,t=n.time%10,r="border-radius:"+t+"px;background:rgba(0,0,0,"+(.5+t/10)+")";return V(1,"div","AnimBox",null,1,{"data-id":n.id,style:r},null,null)}function Me(e,n){console.log("Clicked",e),n.stopPropagation()}function Te(e){var n=e.children;return V(1,"td","TableCell",n,16,{onClick:u(n,Me)},null,null)}function De(e){var n=e.data,t="TableRow";n.active&&(t="TableRow active");for(var r=n.props,l=r.length+1,o=[N(2,Te,{children:"#"+n.id},null,null)],i=1;i<l;i++)o.push(N(2,Te,{children:r[i-1]},null,null));return V(1,"tr",t,o,4,{"data-id":n.id},null,null)}Ue.defaultHooks=Se,Ie.defaultHooks=Se,Ae.defaultHooks=Se,Te.defaultHooks=Se,De.defaultHooks=Se,document.addEventListener("DOMContentLoaded",(function(e){var n=document.querySelector("#App");uibench.run((function(e){var t,r,l;Le(("table"===(l=(t=e).location)?r=function(e){for(var n=e.items,t=n.length,r=[],l=0;l<t;l++){var o=n[l];r.push(N(2,De,{data:o},o.id,null))}return V(1,"table","Table",r,8,null,null,null)}(t.table):"anim"===l?r=function(e){for(var n=e.items,t=n.length,r=[],l=0;l<t;l++){var o=n[l];r.push(N(2,Ae,{data:o},o.id,null))}return V(1,"div","Anim",r,8,null,null,null)}(t.anim):"tree"===l&&(r=function(e){return V(1,"div","Tree",N(2,Ie,{data:e.root},null,null),2,null,null,null)}(t.tree)),V(1,"div","Main",r,2,null,null,null)),n)}),(function(e){Le(V(1,"pre",null,JSON.stringify(e,null," "),16,null,null,null),n)}))}))}();
