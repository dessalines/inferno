!function(){"use strict";var e=Array.isArray;function n(e){var n=typeof e;return"string"===n||"number"===n}function t(e){return void 0===e||null===e}function r(e){return null===e||!1===e||!0===e||void 0===e}function l(e){return"function"===typeof e}function o(e){return"string"===typeof e}function i(e){return null===e}function u(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var l in n)t[l]=n[l];return t}function a(e,n){if(l(n))return{data:e,event:n};return null}function c(e){return!i(e)&&"object"===typeof e}var f={};function s(e){return e.substr(2).toLowerCase()}function d(e,n){e.appendChild(n)}function p(e,n,t){i(t)?d(e,n):e.insertBefore(n,t)}function v(e,n){e.removeChild(n)}function h(e,n,t){var r=e.children;if(4&t)return r.$LI;if(8192&t)return 2===e.childFlags?r:r[n?0:r.length-1];return r}function m(e,n){for(var t;e;){if(2033&(t=e.flags))return e.dom;e=h(e,n,t)}return null}function g(e,n){do{var t=e.flags;if(2033&t)return void v(n,e.dom);var r=e.children;if(4&t&&(e=r.$LI),8&t&&(e=r),8192&t){if(2!==e.childFlags){for(var l=0,o=r.length;l<o;++l)g(r[l],n);return}e=r}}while(e)}function y(e,n,t){do{var r=e.flags;if(2033&r)return void p(n,e.dom,t);var l=e.children;if(4&r&&(e=l.$LI),8&r&&(e=l),8192&r){if(2!==e.childFlags){for(var o=0,i=l.length;o<i;++o)y(l[o],n,t);return}e=l}}while(e)}function k(e,n,t){if(e.constructor.getDerivedStateFromProps)return u(t,e.constructor.getDerivedStateFromProps(n,t));return t}var b={componentComparator:null,createVNode:null,renderComplete:null};function w(e,n){e.textContent=n}function C(e,n){return c(e)&&e.event===n.event&&e.data===n.data}function $(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function F(e,n){return!!l(e)&&(e(n),!0)}var x="$";function P(e,n,t,r,l,o,i,u){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===l?null:l,this.props=void 0===o?null:o,this.ref=void 0===i?null:i,this.type=u}function V(t,l,u,a,c,f,s,d){var p=void 0===c?1:c,v=new P(p,a,u,t,s,f,d,l);return b.createVNode&&b.createVNode(v),0===p&&function(t,l){var u,a=1;if(r(l))u=l;else if(n(l))a=16,u=l;else if(e(l)){for(var c=l.length,f=0;f<c;++f){var s=l[f];if(r(s)||e(s)){u=u||l.slice(0,f),I(l,u,f,"");break}if(n(s))(u=u||l.slice(0,f)).push(S(s,x+f));else{var d=s.key,p=(81920&s.flags)>0,v=i(d),h=o(d)&&d[0]===x;p||v||h?(u=u||l.slice(0,f),(p||h)&&(s=M(s)),(v||h)&&(s.key=x+f),u.push(s)):u&&u.push(s),s.flags|=65536}}a=0===(u=u||l).length?1:8}else(u=l).flags|=65536,81920&l.flags&&(u=M(l)),a=2;t.children=u,t.childFlags=a}(v,v.children),v}function N(e,n,r,l,o){var i=new P(1,null,null,e=function(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}(e,n),l,function(e,n,r){var l=(32768&e?n.render:n).defaultProps;if(t(l))return r;if(t(r))return u(l,null);return $(r,l)}(e,n,r),function(e,n,r){if(4&e)return r;var l=(32768&e?n.render:n).defaultHooks;if(t(l))return r;if(t(r))return l;return $(r,l)}(e,n,o),n);return b.createVNode&&b.createVNode(i),i}function S(e,n){return new P(1,t(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function L(e,n,t){var r=V(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=U(),r.childFlags=2;break;case 16:r.children=[S(e)],r.childFlags=4}return r}function M(e){var n=-16385&e.flags,t=e.props;if(14&n&&!i(t)){var r=t;for(var l in t={},r)t[l]=r[l]}if(0===(8192&n))return new P(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return function(e){var n=e.children,t=e.childFlags;return L(2===t?M(n):n.map(M),t,e.key)}(e)}function U(){return S("",null)}function I(t,l,u,a){for(var c=t.length;u<c;u++){var f=t[u];if(!r(f)){var s=a+x+u;if(e(f))I(f,l,0,s);else{if(n(f))f=S(f,s);else{var d=f.key,p=o(d)&&d[0]===x;(81920&f.flags||p)&&(f=M(f)),f.flags|=65536,p?d.substring(0,a.length)!==a&&(f.key=a+d):i(d)?f.key=s:f.key=a+d}l.push(f)}}}}function A(t){if(r(t)||n(t))return S(t,null);if(e(t))return L(t,0,null);return 16384&t.flags?M(t):t}var E="http://www.w3.org/1999/xlink",D="http://www.w3.org/XML/1998/namespace",T={"xlink:actuate":E,"xlink:arcrole":E,"xlink:href":E,"xlink:role":E,"xlink:show":E,"xlink:title":E,"xlink:type":E,"xml:base":D,"xml:lang":D,"xml:space":D};function B(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var W=B(0),O=B(null),j=B(!0);function H(e,n){var t=n.$EV;return t||(t=n.$EV=B(null)),t[e]||1===++W[e]&&(O[e]=function(e){var n="onClick"===e||"onDblClick"===e?function(e){return function(n){if(0!==n.button)return void n.stopPropagation();X(n,!0,e,G(n))}}(e):function(e){return function(n){X(n,!1,e,G(n))}}(e);return document.addEventListener(s(e),n),n}(e)),t}function R(e,n){var t=n.$EV;t&&t[e]&&(0===--W[e]&&(document.removeEventListener(s(e),O[e]),O[e]=null),t[e]=null)}function X(e,n,t,r){var o=function(e){return l(e.composedPath)?e.composedPath()[0]:e.target}(e);do{if(n&&o.disabled)return;var u=o.$EV;if(u){var a=u[t];if(a&&(r.dom=o,a.event?a.event(a.data,e):a(e),e.cancelBubble))return}o=o.parentNode}while(!i(o))}function _(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function K(){return this.defaultPrevented}function q(){return this.cancelBubble}function G(e){var n={dom:document};return e.isDefaultPrevented=K,e.isPropagationStopped=q,e.stopPropagation=_,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function z(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var l=n.toLowerCase();e[l]&&e[l](t)}}function J(e,n){var t=function(t){var r=this.$V;if(!r)return;var i=r.props||f,u=r.dom;if(o(e))z(i,e,t);else for(var a=0;a<e.length;++a)z(i,e[a],t);if(l(n)){var c=this.$V,s=c.props||f;n(s,u,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function Q(e,n,t){var r="$"+n,o=e[r];if(o){if(o[1].wrapped)return;e.removeEventListener(o[0],o[1]),e[r]=null}l(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function Y(e){return"checkbox"===e||"radio"===e}var Z=J("onInput",te),ee=J(["onClick","onChange"],te);function ne(e){e.stopPropagation()}function te(e,n){var r=e.type,l=e.value,o=e.checked,i=e.multiple,u=e.defaultValue,a=!t(l);r&&r!==n.type&&n.setAttribute("type",r),t(i)||i===n.multiple||(n.multiple=i),t(u)||a||(n.defaultValue=u+""),Y(r)?(a&&(n.value=l),t(o)||(n.checked=o)):a&&n.value!==l?(n.defaultValue=l,n.value=l):t(o)||(n.checked=o)}function re(n,r){if("option"===n.type)!function(n,r){var l=n.props||f,o=n.dom;o.value=l.value,l.value===r||e(r)&&-1!==r.indexOf(l.value)?o.selected=!0:t(r)&&t(l.selected)||(o.selected=l.selected||!1)}(n,r);else{var l=n.children,o=n.flags;if(4&o)re(l.$LI,r);else if(8&o)re(l,r);else if(2===n.childFlags)re(l,r);else if(12&n.childFlags)for(var i=0,u=l.length;i<u;++i)re(l[i],r)}}ne.wrapped=!0;var le=J("onChange",oe);function oe(e,n,r,l){var o=Boolean(e.multiple);t(e.multiple)||o===n.multiple||(n.multiple=o);var i=e.selectedIndex;if(-1===i&&(n.selectedIndex=-1),1!==l.childFlags){var u=e.value;"number"===typeof i&&i>-1&&n.options[i]&&(u=n.options[i].value),r&&t(u)&&(u=e.defaultValue),re(l,u)}}var ie,ue,ae=J("onInput",fe),ce=J("onChange");function fe(e,n,r){var l=e.value,o=n.value;if(t(l)){if(r){var i=e.defaultValue;t(i)||i===o||(n.defaultValue=i,n.value=i)}}else o!==l&&(n.defaultValue=l,n.value=l)}function se(e,n,t,r,l,o){64&e?te(r,t):256&e?oe(r,t,l,n):128&e&&fe(r,t,l),o&&(t.$V=n)}function de(e){return e.type&&Y(e.type)?!t(e.checked):!t(e.value)}function pe(e){e&&!F(e,null)&&e.current&&(e.current=null)}function ve(e,n,t){e&&(l(e)||void 0!==e.current)&&t.push((function(){F(e,n)||void 0===e.current||(e.current=n)}))}function he(e,n){me(e),g(e,n)}function me(e){var n,r=e.flags,o=e.children;if(481&r){n=e.ref;var u=e.props;pe(n);var a=e.childFlags;if(!i(u))for(var c=Object.keys(u),s=0,d=c.length;s<d;s++){var p=c[s];j[p]&&R(p,e.dom)}12&a?ge(o):2===a&&me(o)}else o&&(4&r?(l(o.componentWillUnmount)&&o.componentWillUnmount(),pe(e.ref),o.$UN=!0,me(o.$LI)):8&r?(!t(n=e.ref)&&l(n.onComponentWillUnmount)&&n.onComponentWillUnmount(m(e,!0),e.props||f),me(o)):1024&r?he(o,e.ref):8192&r&&12&e.childFlags&&ge(o))}function ge(e){for(var n=0,t=e.length;n<t;++n)me(e[n])}function ye(e){e.textContent=""}function ke(e,n,t){ge(t),8192&n.flags?g(n,e):ye(e)}function be(e,n,r,u,a,f,d){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":u.autofocus=!!r;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":u[e]=!!r;break;case"defaultChecked":case"value":case"volume":if(f&&"value"===e)break;var p=t(r)?"":r;u[e]!==p&&(u[e]=p);break;case"style":!function(e,n,r){if(t(n))return void r.removeAttribute("style");var l,i,u=r.style;if(o(n))return void(u.cssText=n);if(t(e)||o(e))for(l in n)i=n[l],u.setProperty(l,i);else{for(l in n)(i=n[l])!==e[l]&&u.setProperty(l,i);for(l in e)t(n[l])&&u.removeProperty(l)}}(n,r,u);break;case"dangerouslySetInnerHTML":!function(e,n,r,l){var o=e&&e.__html||"",u=n&&n.__html||"";o!==u&&(t(u)||function(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}(l,u)||(i(r)||(12&r.childFlags?ge(r.children):2===r.childFlags&&me(r.children),r.children=null,r.childFlags=1),l.innerHTML=u))}(n,r,d,u);break;default:j[e]?function(e,n,t,r){if(l(t))H(e,r)[e]=t;else if(c(t)){if(C(n,t))return;H(e,r)[e]=t}else R(e,r)}(e,n,r,u):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?function(e,n,t,r){if(c(t)){if(C(n,t))return;t=function(e){var n=e.event;return function(t){n(e.data,t)}}(t)}Q(r,s(e),t)}(e,n,r,u):t(r)?u.removeAttribute(e):a&&T[e]?u.setAttributeNS(T[e],e,r):u.setAttribute(e,r)}}function we(e,n,t){var r=A(e.render(n,e.state,t)),o=t;return l(e.getChildContext)&&(o=u(t,e.getChildContext())),e.$CX=o,r}function Ce(e,n){var t=e.props||f;return 32768&e.flags?e.type.render(t,e.ref,n):e.type(t,n)}function $e(e,n,r,o,u,a){var c=e.flags|=16384;481&c?function(e,n,r,l,o,u){var a=e.flags,c=e.props,f=e.className,s=e.children,d=e.childFlags,v=e.dom=function(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}(e.type,l=l||(32&a)>0);if(t(f)||""===f||(l?v.setAttribute("class",f):v.className=f),16===d)w(v,s);else if(1!==d){var h=l&&"foreignObject"!==e.type;2===d?(16384&s.flags&&(e.children=s=M(s)),$e(s,v,r,h,null,u)):8!==d&&4!==d||xe(s,v,r,h,null,u)}i(n)||p(n,v,o),i(c)||function(e,n,t,r,l){var o=!1,i=(448&n)>0;for(var u in i&&(o=de(t))&&function(e,n,t){64&e?function(e,n){Y(n.type)?(Q(e,"change",ee),Q(e,"click",ne)):Q(e,"input",Z)}(n,t):256&e?function(e){Q(e,"change",le)}(n):128&e&&function(e,n){Q(e,"input",ae),n.onChange&&Q(e,"change",ce)}(n,t)}(n,r,t),t)be(u,null,t[u],r,l,o,null);i&&se(n,e,r,t,!0,o)}(e,a,c,v,l),ve(e.ref,v,u)}(e,n,r,o,u,a):4&c?function(e,n,t,r,o,u){var a=function(e,n,t,r,o,u){var a=new n(t,r),c=a.$N=Boolean(n.getDerivedStateFromProps||a.getSnapshotBeforeUpdate);if(a.$SVG=o,a.$L=u,e.children=a,a.$BS=!1,a.context=r,a.props===f&&(a.props=t),c)a.state=k(a,t,a.state);else if(l(a.componentWillMount)){a.$BR=!0,a.componentWillMount();var s=a.$PS;if(!i(s)){var d=a.state;if(i(d))a.state=s;else for(var p in s)d[p]=s[p];a.$PS=null}a.$BR=!1}return a.$LI=we(a,t,r),a}(e,e.type,e.props||f,t,r,u);$e(a.$LI,n,a.$CX,r,o,u),function(e,n,t){ve(e,n,t),l(n.componentDidMount)&&t.push(function(e){return function(){e.componentDidMount()}}(n))}(e.ref,a,u)}(e,n,r,o,u,a):8&c?(function(e,n,t,r,l,o){$e(e.children=A(Ce(e,t)),n,t,r,l,o)}(e,n,r,o,u,a),function(e,n){var r=e.ref;t(r)||(F(r.onComponentWillMount,e.props||f),l(r.onComponentDidMount)&&n.push(function(e,n){return function(){e.onComponentDidMount(m(n,!0),n.props||f)}}(r,e)))}(e,a)):512&c||16&c?Fe(e,n,u):8192&c?function(e,n,t,r,l,o){var i=e.children,u=e.childFlags;12&u&&0===i.length&&(u=e.childFlags=2,i=e.children=U()),2===u?$e(i,t,l,r,l,o):xe(i,t,n,r,l,o)}(e,r,n,o,u,a):1024&c&&function(e,n,t,r,l){$e(e.children,e.ref,n,!1,null,l);var o=U();Fe(o,t,r),e.dom=o.dom}(e,r,n,u,a)}function Fe(e,n,t){var r=e.dom=document.createTextNode(e.children);i(n)||p(n,r,t)}function xe(e,n,t,r,l,o){for(var i=0;i<e.length;++i){var u=e[i];16384&u.flags&&(e[i]=u=M(u)),$e(u,n,t,r,l,o)}}function Pe(e,n,o,a,c,s,p){var h=n.flags|=16384;e.flags!==h||e.type!==n.type||e.key!==n.key||2048&h?16384&e.flags?function(e,n,t,r,l,o){me(e),0!==(n.flags&e.flags&2033)?($e(n,null,r,l,null,o),function(e,n,t){e.replaceChild(n,t)}(t,n.dom,e.dom)):($e(n,t,r,l,m(e,!0),o),g(e,t))}(e,n,o,a,c,p):$e(n,o,a,c,s,p):481&h?function(e,n,r,l,o,i){var u,a=n.dom=e.dom,c=e.props,s=n.props,d=!1,p=!1;if(l=l||(32&o)>0,c!==s){var v=c||f;if((u=s||f)!==f)for(var h in(d=(448&o)>0)&&(p=de(u)),u){var m=v[h],g=u[h];m!==g&&be(h,m,g,a,l,p,e)}if(v!==f)for(var y in v)t(u[y])&&!t(v[y])&&be(y,v[y],null,a,l,p,e)}var k=n.children,b=n.className;e.className!==b&&(t(b)?a.removeAttribute("class"):l?a.setAttribute("class",b):a.className=b),4096&o?function(e,n){e.textContent!==n&&(e.textContent=n)}(a,k):Ve(e.childFlags,n.childFlags,e.children,k,a,r,l&&"foreignObject"!==n.type,null,e,i),d&&se(o,n,a,u,!1,p);var w=n.ref,C=e.ref;C!==w&&(pe(C),ve(w,a,i))}(e,n,a,c,h,p):4&h?function(e,n,t,r,o,a,c){var s=n.children=e.children;if(i(s))return;s.$L=c;var d=n.props||f,p=n.ref,v=e.ref,h=s.state;if(!s.$N){if(l(s.componentWillReceiveProps)){if(s.$BR=!0,s.componentWillReceiveProps(d,r),s.$UN)return;s.$BR=!1}i(s.$PS)||(h=u(h,s.$PS),s.$PS=null)}(function(e,n,t,r,o,i,a,c,f){var s=e.state,d=e.props,p=Boolean(e.$N),v=l(e.shouldComponentUpdate);if(p&&(n=k(e,t,n!==s?u(s,n):n)),!v||v&&e.shouldComponentUpdate(t,n,o)){!p&&l(e.componentWillUpdate)&&e.componentWillUpdate(t,n,o),e.props=t,e.state=n,e.context=o;var h=null,m=we(e,t,o);p&&l(e.getSnapshotBeforeUpdate)&&(h=e.getSnapshotBeforeUpdate(d,s)),Pe(e.$LI,m,r,e.$CX,i,c,f),e.$LI=m,l(e.componentDidUpdate)&&function(e,n,t,r,l){l.push((function(){e.componentDidUpdate(n,t,r)}))}(e,d,s,h,f)}else e.props=t,e.state=n,e.context=o})(s,h,d,t,r,o,0,a,c),v!==p&&(pe(v),ve(p,s,c))}(e,n,o,a,c,s,p):8&h?function(e,n,r,o,i,u,a){var c=!0,s=n.props||f,d=n.ref,p=e.props,v=!t(d),h=e.children;if(v&&l(d.onComponentShouldUpdate)&&(c=d.onComponentShouldUpdate(p,s)),!1!==c){v&&l(d.onComponentWillUpdate)&&d.onComponentWillUpdate(p,s);var m=A(Ce(n,o));Pe(h,m,r,o,i,u,a),n.children=m,v&&l(d.onComponentDidUpdate)&&d.onComponentDidUpdate(p,s)}else n.children=h}(e,n,o,a,c,s,p):16&h?function(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}(e,n):512&h?n.dom=e.dom:8192&h?function(e,n,t,r,l,o){var i=e.children,u=n.children,a=e.childFlags,c=n.childFlags,f=null;12&c&&0===u.length&&(c=n.childFlags=2,u=n.children=U());var s=0!==(2&c);if(12&a){var d=i.length;(8&a&&8&c||s||!s&&u.length>d)&&(f=m(i[d-1],!1).nextSibling)}Ve(a,c,i,u,t,r,l,f,e,o)}(e,n,o,a,c,p):function(e,n,t,l){var o=e.ref,i=n.ref,u=n.children;if(Ve(e.childFlags,n.childFlags,e.children,u,o,t,!1,null,e,l),n.dom=e.dom,o!==i&&!r(u)){var a=u.dom;v(o,a),d(i,a)}}(e,n,a,p)}function Ve(e,n,t,r,l,o,i,u,a,c){switch(e){case 2:switch(n){case 2:Pe(t,r,l,o,i,u,c);break;case 1:he(t,l);break;case 16:me(t),w(l,r);break;default:!function(e,n,t,r,l,o){me(e),xe(n,t,r,l,m(e,!0),o),g(e,t)}(t,r,l,o,i,c)}break;case 1:switch(n){case 2:$e(r,l,o,i,u,c);break;case 1:break;case 16:w(l,r);break;default:xe(r,l,o,i,u,c)}break;case 16:switch(n){case 16:!function(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:w(t,n))}(t,r,l);break;case 2:ye(l),$e(r,l,o,i,u,c);break;case 1:ye(l);break;default:ye(l),xe(r,l,o,i,u,c)}break;default:switch(n){case 16:ge(t),w(l,r);break;case 2:ke(l,a,t),$e(r,l,o,i,u,c);break;case 1:ke(l,a,t);break;default:var f=0|t.length,s=0|r.length;0===f?s>0&&xe(r,l,o,i,u,c):0===s?ke(l,a,t):8===n&&8===e?function(e,n,t,r,l,o,i,u,a,c){var f,s,d=o-1,p=i-1,v=0,h=e[v],g=n[v];e:{for(;h.key===g.key;){if(16384&g.flags&&(n[v]=g=M(g)),Pe(h,g,t,r,l,u,c),e[v]=g,++v>d||v>p)break e;h=e[v],g=n[v]}for(h=e[d],g=n[p];h.key===g.key;){if(16384&g.flags&&(n[p]=g=M(g)),Pe(h,g,t,r,l,u,c),e[d]=g,p--,v>--d||v>p)break e;h=e[d],g=n[p]}}if(v>d){if(v<=p)for(s=(f=p+1)<i?m(n[f],!0):u;v<=p;)16384&(g=n[v]).flags&&(n[v]=g=M(g)),++v,$e(g,t,r,l,s,c)}else if(v>p)for(;v<=d;)he(e[v++],t);else!function(e,n,t,r,l,o,i,u,a,c,f,s,d){var p,v,h,g=0,k=u,b=u,w=o-u+1,C=i-u+1,$=new Int32Array(C+1),F=w===r,x=!1,P=0,V=0;if(l<4||(w|C)<32)for(g=k;g<=o;++g)if(p=e[g],V<C){for(u=b;u<=i;u++)if(v=n[u],p.key===v.key){if($[u-b]=g+1,F)for(F=!1;k<g;)he(e[k++],a);P>u?x=!0:P=u,16384&v.flags&&(n[u]=v=M(v)),Pe(p,v,a,t,c,f,d),++V;break}!F&&u>i&&he(p,a)}else F||he(p,a);else{var N={};for(g=b;g<=i;++g)N[n[g].key]=g;for(g=k;g<=o;++g)if(p=e[g],V<C)if(void 0!==(u=N[p.key])){if(F)for(F=!1;g>k;)he(e[k++],a);$[u-b]=g+1,P>u?x=!0:P=u,16384&(v=n[u]).flags&&(n[u]=v=M(v)),Pe(p,v,a,t,c,f,d),++V}else F||he(p,a);else F||he(p,a)}if(F)ke(a,s,e),xe(n,a,t,c,f,d);else if(x){var S=function(e){var n=0,t=0,r=0,l=0,o=0,i=0,u=0,a=e.length;for(a>Ne&&(Ne=a,ie=new Int32Array(a),ue=new Int32Array(a));t<a;++t)if(0!==(n=e[t])){if(e[r=ie[l]]<n){ue[t]=r,ie[++l]=t;continue}for(o=0,i=l;o<i;)e[ie[u=o+i>>1]]<n?o=u+1:i=u;n<e[ie[o]]&&(o>0&&(ue[t]=ie[o-1]),ie[o]=t)}o=l+1;var c=new Int32Array(o);for(i=ie[o-1];o-- >0;)c[o]=i,i=ue[i],ie[o]=0;return c}($);for(u=S.length-1,g=C-1;g>=0;g--)0===$[g]?(16384&(v=n[P=g+b]).flags&&(n[P]=v=M(v)),$e(v,a,t,c,(h=P+1)<l?m(n[h],!0):f,d)):u<0||g!==S[u]?y(v=n[P=g+b],a,(h=P+1)<l?m(n[h],!0):f):u--}else if(V!==C)for(g=C-1;g>=0;g--)0===$[g]&&(16384&(v=n[P=g+b]).flags&&(n[P]=v=M(v)),$e(v,a,t,c,(h=P+1)<l?m(n[h],!0):f,d))}(e,n,r,o,i,d,p,v,t,l,u,a,c)}(t,r,l,o,i,f,s,u,a,c):function(e,n,t,r,l,o,i,u,a){for(var c,f,s=o>i?i:o,d=0;d<s;++d)c=n[d],f=e[d],16384&c.flags&&(c=n[d]=M(c)),Pe(f,c,t,r,l,u,a),e[d]=c;if(o<i)for(d=s;d<i;++d)16384&(c=n[d]).flags&&(c=n[d]=M(c)),$e(c,t,r,l,u,a);else if(o>i)for(d=s;d<o;++d)he(e[d],t)}(t,r,l,o,i,f,s,u,c)}}}var Ne=0;function Se(e,n,r,o){void 0===r&&(r=null),void 0===o&&(o=f),function(e,n,r,o){var i=[],u=n.$V;t(u)?t(e)||(16384&e.flags&&(e=M(e)),$e(e,n,o,!1,null,i),n.$V=e,u=e):t(e)?(he(u,n),n.$V=null):(16384&e.flags&&(e=M(e)),Pe(u,e,n,o,!1,null,i),u=n.$V=e),function(e){for(var n=0;n<e.length;n++)e[n]()}(i),l(r)&&r(),l(b.renderComplete)&&b.renderComplete(u,n)}(e,n,r,o)}function Le(e){console.log("ok",e)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!==typeof Promise&&Promise.resolve().then.bind(Promise.resolve());var Me=500,Ue=[function(){for(var e=[],n=0;n<Me;n++)e.push(V(1,"li",null,n,16,{onclick:Le},null,null));return V(1,"ul",null,e,4,null,null,null)},function(){for(var e=[],n=0;n<Me;n++)e.push(V(1,"li",null,n,16,{onclick:a(n,Le)},null,null));return V(1,"ul",null,e,4,null,null,null)},function(){for(var e=[],n=0;n<Me;n++)e.push(V(1,"li",null,n,16,{onClick:Le},null,null));return V(1,"ul",null,e,4,null,null,null)},function(){for(var e=[],n=0;n<Me;n++)e.push(V(1,"li",null,n,16,{onclick:function(){console.log("ok")}},null,null));return V(1,"ul",null,e,4,null,null,null)}],Ie=["hoistedNonSyntheticEvents","hoistedLinkEventNonSynthetic","hoistedSyntheticEvents","newFuncsNonSyntheticEvents"],Ae=function(e){return e.reduce((function(e,n){return e+n}),0)/e.length},Ee=function(e){return Math.min.apply(Math,e)},De=function(e){return Math.max.apply(Math,e)};function Te(e){for(var n=e.results,t=[],r=0;r<n.length;r++){var l=n[r],o=["mount","patch","unmount"];t.push(V(1,"div","test-name",l.name,0,null,null,null));for(var i=0;i<o.length;i++){var u=o[i],a=l[u];t.push(V(1,"div","test-part",u,0,null,null,null)),t.push(V(1,"div","test-result",[S("Avg: "),a.avg],0,null,null,null)),t.push(V(1,"div","test-result",[S("Min: "),a.min],0,null,null,null)),t.push(V(1,"div","test-result",[S("Max: "),a.max],0,null,null,null))}}return V(1,"div","results",t,4,null,null,null)}document.addEventListener("DOMContentLoaded",(function(e){for(var n=document.querySelector("#App"),t=[],r=[],l=[],o=[],i=0,u=0;u<3;u++)for(var a=0;a<Ue.length;a++)Se(N(8,Ue[a]),n);function c(e){var t=performance.now();Se(N(8,Ue[i]),n);var l=performance.now();r.push(l-t),setTimeout(f,30,e)}function f(e){for(var t=performance.now(),r=0;r<7;r++)Se(N(8,Ue[i]),n);var o=performance.now();l.push(o-t),setTimeout(s,30,e)}function s(e){var t=performance.now();Se(null,n);var r=performance.now();o.push(r-t),setTimeout(e,30)}Se(null,n);var d=0;!function e(){d<10&&i<Ue.length?(d++,setTimeout(c,30,e)):i<Ue.length?(t.push({name:Ie[i],mount:{min:Ee(r),avg:Ae(r),max:De(r)},patch:{min:Ee(l),avg:Ae(l),max:De(l)},unmount:{min:Ee(o),avg:Ae(o),max:De(o)}}),r=[],l=[],o=[],i++,d=0,e()):setTimeout((function(){Se(N(2,Te,{results:t},null,null),n)}),1e3)}()}))}();
