!function(){"use strict";var e=Array.isArray;function n(e){var n=typeof e;return"string"===n||"number"===n}function t(e){return void 0===e||null===e}function r(e){return null===e||!1===e||!0===e||void 0===e}function l(e){return"function"===typeof e}function o(e){return"string"===typeof e}function i(e){return null===e}function a(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var l in n)t[l]=n[l];return t}function u(e,n){if(l(n))return{data:e,event:n};return null}function c(e){return!i(e)&&"object"===typeof e}var f={};function s(e){return e.substr(2).toLowerCase()}function d(e,n){e.appendChild(n)}function p(e,n,t){i(t)?d(e,n):e.insertBefore(n,t)}function v(e,n){e.removeChild(n)}function h(e,n,t){var r=e.children;if(4&t)return r.$LI;if(8192&t)return 2===e.childFlags?r:r[n?0:r.length-1];return r}function m(e,n){for(var t;e;){if(2033&(t=e.flags))return e.dom;e=h(e,n,t)}return null}function g(e,n){do{var t=e.flags;if(2033&t)return void v(n,e.dom);var r=e.children;if(4&t&&(e=r.$LI),8&t&&(e=r),8192&t){if(2!==e.childFlags){for(var l=0,o=r.length;l<o;++l)g(r[l],n);return}e=r}}while(e)}function y(e,n,t){do{var r=e.flags;if(2033&r)return void p(n,e.dom,t);var l=e.children;if(4&r&&(e=l.$LI),8&r&&(e=l),8192&r){if(2!==e.childFlags){for(var o=0,i=l.length;o<i;++o)y(l[o],n,t);return}e=l}}while(e)}function b(e,n,t){if(e.constructor.getDerivedStateFromProps)return a(t,e.constructor.getDerivedStateFromProps(n,t));return t}var k={componentComparator:null,createVNode:null,renderComplete:null};function C(e,n){e.textContent=n}function w(e,n){return c(e)&&e.event===n.event&&e.data===n.data}function $(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function F(e,n){return!!l(e)&&(e(n),!0)}function P(e,n,t,r,l,o,i,a){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===l?null:l,this.props=void 0===o?null:o,this.ref=void 0===i?null:i,this.type=a}function S(t,l,a,u,c,f,s,d){var p=void 0===c?1:c,v=new P(p,u,a,t,s,f,d,l);return k.createVNode&&k.createVNode(v),0===p&&function(t,l){var a,u=1;if(r(l))a=l;else if(n(l))u=16,a=l;else if(e(l)){for(var c=l.length,f=0;f<c;++f){var s=l[f];if(r(s)||e(s)){a=a||l.slice(0,f),A(l,a,f,"");break}if(n(s))(a=a||l.slice(0,f)).push(U(s,"$"+f));else{var d=s.key,p=(81920&s.flags)>0,v=i(d),h=o(d)&&"$"===d[0];p||v||h?(a=a||l.slice(0,f),(p||h)&&(s=N(s)),(v||h)&&(s.key="$"+f),a.push(s)):a&&a.push(s),s.flags|=65536}}u=0===(a=a||l).length?1:8}else(a=l).flags|=65536,81920&l.flags&&(a=N(l)),u=2;t.children=a,t.childFlags=u}(v,v.children),v}function x(e,n,r,l,o){var i=new P(1,null,null,e=function(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}(e,n),l,function(e,n,r){var l=(32768&e?n.render:n).defaultProps;if(t(l))return r;if(t(r))return a(l,null);return $(r,l)}(e,n,r),function(e,n,r){if(4&e)return r;var l=(32768&e?n.render:n).defaultHooks;if(t(l))return r;if(t(r))return l;return $(r,l)}(e,n,o),n);return k.createVNode&&k.createVNode(i),i}function U(e,n){return new P(1,t(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function V(e,n,t){var r=S(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=L(),r.childFlags=2;break;case 16:r.children=[U(e)],r.childFlags=4}return r}function N(e){var n=-16385&e.flags,t=e.props;if(14&n&&!i(t)){var r=t;for(var l in t={},r)t[l]=r[l]}if(0===(8192&n))return new P(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return function(e){var n,t=e.children,r=e.childFlags;if(2===r)n=N(t);else if(12&r){n=[];for(var l=0,o=t.length;l<o;++l)n.push(N(t[l]))}return V(n,r,e.key)}(e)}function L(){return U("",null)}function A(t,l,a,u){for(var c=t.length;a<c;a++){var f=t[a];if(!r(f)){var s=u+"$"+a;if(e(f))A(f,l,0,s);else{if(n(f))f=U(f,s);else{var d=f.key,p=o(d)&&"$"===d[0];(81920&f.flags||p)&&(f=N(f)),f.flags|=65536,p?d.substring(0,u.length)!==u&&(f.key=u+d):i(d)?f.key=s:f.key=u+d}l.push(f)}}}}function I(t){if(r(t)||n(t))return U(t,null);if(e(t))return V(t,0,null);return 16384&t.flags?N(t):t}var M="http://www.w3.org/1999/xlink",T="http://www.w3.org/XML/1998/namespace",D={"xlink:actuate":M,"xlink:arcrole":M,"xlink:href":M,"xlink:role":M,"xlink:show":M,"xlink:title":M,"xlink:type":M,"xml:base":T,"xml:lang":T,"xml:space":T};function B(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var E=B(0),W=B(null),O=B(!0);function R(e,n){var t=n.$EV;return t||(t=n.$EV=B(null)),t[e]||1===++E[e]&&(W[e]=function(e){var n="onClick"===e||"onDblClick"===e?function(e){return function(n){if(0!==n.button)return void n.stopPropagation();H(n,!0,e,q(n))}}(e):function(e){return function(n){H(n,!1,e,q(n))}}(e);return document.addEventListener(s(e),n),n}(e)),t}function j(e,n){var t=n.$EV;t&&t[e]&&(0===--E[e]&&(document.removeEventListener(s(e),W[e]),W[e]=null),t[e]=null)}function H(e,n,t,r){var o=function(e){return l(e.composedPath)?e.composedPath()[0]:e.target}(e);do{if(n&&o.disabled)return;var a=o.$EV;if(a){var u=a[t];if(u&&(r.dom=o,u.event?u.event(u.data,e):u(e),e.cancelBubble))return}o=o.parentNode}while(!i(o))}function X(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function _(){return this.defaultPrevented}function K(){return this.cancelBubble}function q(e){var n={dom:document};return e.isDefaultPrevented=_,e.isPropagationStopped=K,e.stopPropagation=X,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function z(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var l=n.toLowerCase();e[l]&&e[l](t)}}function G(e,n){var t=function(t){var r=this.$V;if(!r)return;var i=r.props||f,a=r.dom;if(o(e))z(i,e,t);else for(var u=0;u<e.length;++u)z(i,e[u],t);if(l(n)){var c=this.$V,s=c.props||f;n(s,a,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function J(e,n,t){var r="$"+n,o=e[r];if(o){if(o[1].wrapped)return;e.removeEventListener(o[0],o[1]),e[r]=null}l(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function Q(e){return"checkbox"===e||"radio"===e}var Y=G("onInput",ne),Z=G(["onClick","onChange"],ne);function ee(e){e.stopPropagation()}function ne(e,n){var r=e.type,l=e.value,o=e.checked,i=e.multiple,a=e.defaultValue,u=!t(l);r&&r!==n.type&&n.setAttribute("type",r),t(i)||i===n.multiple||(n.multiple=i),t(a)||u||(n.defaultValue=a+""),Q(r)?(u&&(n.value=l),t(o)||(n.checked=o)):u&&n.value!==l?(n.defaultValue=l,n.value=l):t(o)||(n.checked=o)}ee.wrapped=!0;var te=G("onChange",re);function re(n,r,l,o){var i=Boolean(n.multiple);t(n.multiple)||i===r.multiple||(r.multiple=i);var a=n.selectedIndex;if(-1===a&&(r.selectedIndex=-1),1!==o.childFlags){var u=n.value;"number"===typeof a&&a>-1&&r.options[a]&&(u=r.options[a].value),l&&t(u)&&(u=n.defaultValue),function n(r,l){if("option"===r.type)!function(n,r){var l=n.props||f,o=n.dom;o.value=l.value,l.value===r||e(r)&&-1!==r.indexOf(l.value)?o.selected=!0:t(r)&&t(l.selected)||(o.selected=l.selected||!1)}(r,l);else{var o=r.children,i=r.flags;if(4&i)n(o.$LI,l);else if(8&i)n(o,l);else if(2===r.childFlags)n(o,l);else if(12&r.childFlags)for(var a=0,u=o.length;a<u;++a)n(o[a],l)}}(o,u)}}var le,oe,ie=G("onInput",ue),ae=G("onChange");function ue(e,n,r){var l=e.value,o=n.value;if(t(l)){if(r){var i=e.defaultValue;t(i)||i===o||(n.defaultValue=i,n.value=i)}}else o!==l&&(n.defaultValue=l,n.value=l)}function ce(e,n,t,r,l,o){64&e?ne(r,t):256&e?re(r,t,l,n):128&e&&ue(r,t,l),o&&(t.$V=n)}function fe(e){return e.type&&Q(e.type)?!t(e.checked):!t(e.value)}function se(e){e&&!F(e,null)&&e.current&&(e.current=null)}function de(e,n,t){e&&(l(e)||void 0!==e.current)&&t.push((function(){F(e,n)||void 0===e.current||(e.current=n)}))}function pe(e,n){ve(e),g(e,n)}function ve(e){var n,r=e.flags,o=e.children;if(481&r){n=e.ref;var a=e.props;se(n);var u=e.childFlags;if(!i(a))for(var c=Object.keys(a),s=0,d=c.length;s<d;s++){var p=c[s];O[p]&&j(p,e.dom)}12&u?he(o):2===u&&ve(o)}else o&&(4&r?(l(o.componentWillUnmount)&&o.componentWillUnmount(),se(e.ref),o.$UN=!0,ve(o.$LI)):8&r?(!t(n=e.ref)&&l(n.onComponentWillUnmount)&&n.onComponentWillUnmount(m(e,!0),e.props||f),ve(o)):1024&r?pe(o,e.ref):8192&r&&12&e.childFlags&&he(o))}function he(e){for(var n=0,t=e.length;n<t;++n)ve(e[n])}function me(e){e.textContent=""}function ge(e,n,t){he(t),8192&n.flags?g(n,e):me(e)}function ye(e,n,r,a,u,f,d){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":a.autofocus=!!r;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":a[e]=!!r;break;case"defaultChecked":case"value":case"volume":if(f&&"value"===e)break;var p=t(r)?"":r;a[e]!==p&&(a[e]=p);break;case"style":!function(e,n,r){if(t(n))return void r.removeAttribute("style");var l,i,a=r.style;if(o(n))return void(a.cssText=n);if(t(e)||o(e))for(l in n)i=n[l],a.setProperty(l,i);else{for(l in n)(i=n[l])!==e[l]&&a.setProperty(l,i);for(l in e)t(n[l])&&a.removeProperty(l)}}(n,r,a);break;case"dangerouslySetInnerHTML":!function(e,n,r,l){var o=e&&e.__html||"",a=n&&n.__html||"";o!==a&&(t(a)||function(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}(l,a)||(i(r)||(12&r.childFlags?he(r.children):2===r.childFlags&&ve(r.children),r.children=null,r.childFlags=1),l.innerHTML=a))}(n,r,d,a);break;default:O[e]?function(e,n,t,r){if(l(t))R(e,r)[e]=t;else if(c(t)){if(w(n,t))return;R(e,r)[e]=t}else j(e,r)}(e,n,r,a):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?function(e,n,t,r){if(c(t)){if(w(n,t))return;t=function(e){var n=e.event;return function(t){n(e.data,t)}}(t)}J(r,s(e),t)}(e,n,r,a):t(r)?a.removeAttribute(e):u&&D[e]?a.setAttributeNS(D[e],e,r):a.setAttribute(e,r)}}function be(e,n,t){var r=I(e.render(n,e.state,t)),o=t;return l(e.getChildContext)&&(o=a(t,e.getChildContext())),e.$CX=o,r}function ke(e,n,r,o,a,u){var c=e.flags|=16384;481&c?function(e,n,r,l,o,a){var u=e.flags,c=e.props,f=e.className,s=e.children,d=e.childFlags,v=e.dom=function(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}(e.type,l=l||(32&u)>0);if(t(f)||""===f||(l?v.setAttribute("class",f):v.className=f),16===d)C(v,s);else if(1!==d){var h=l&&"foreignObject"!==e.type;2===d?(16384&s.flags&&(e.children=s=N(s)),ke(s,v,r,h,null,a)):8!==d&&4!==d||we(s,v,r,h,null,a)}i(n)||p(n,v,o),i(c)||function(e,n,t,r,l){var o=!1,i=(448&n)>0;for(var a in i&&(o=fe(t))&&function(e,n,t){64&e?function(e,n){Q(n.type)?(J(e,"change",Z),J(e,"click",ee)):J(e,"input",Y)}(n,t):256&e?function(e){J(e,"change",te)}(n):128&e&&function(e,n){J(e,"input",ie),n.onChange&&J(e,"change",ae)}(n,t)}(n,r,t),t)ye(a,null,t[a],r,l,o,null);i&&ce(n,e,r,t,!0,o)}(e,u,c,v,l),de(e.ref,v,a)}(e,n,r,o,a,u):4&c?function(e,n,t,r,o,a){var u=function(e,n,t,r,o,a){var u=new n(t,r),c=u.$N=Boolean(n.getDerivedStateFromProps||u.getSnapshotBeforeUpdate);if(u.$SVG=o,u.$L=a,e.children=u,u.$BS=!1,u.context=r,u.props===f&&(u.props=t),c)u.state=b(u,t,u.state);else if(l(u.componentWillMount)){u.$BR=!0,u.componentWillMount();var s=u.$PS;if(!i(s)){var d=u.state;if(i(d))u.state=s;else for(var p in s)d[p]=s[p];u.$PS=null}u.$BR=!1}return u.$LI=be(u,t,r),u}(e,e.type,e.props||f,t,r,a);ke(u.$LI,n,u.$CX,r,o,a),function(e,n,t){de(e,n,t),l(n.componentDidMount)&&t.push(function(e){return function(){e.componentDidMount()}}(n))}(e.ref,u,a)}(e,n,r,o,a,u):8&c?(function(e,n,t,r,l,o){ke(e.children=I(function(e,n){return 32768&e.flags?e.type.render(e.props||f,e.ref,n):e.type(e.props||f,n)}(e,t)),n,t,r,l,o)}(e,n,r,o,a,u),function(e,n){var r=e.ref;t(r)||(F(r.onComponentWillMount,e.props||f),l(r.onComponentDidMount)&&n.push(function(e,n){return function(){e.onComponentDidMount(m(n,!0),n.props||f)}}(r,e)))}(e,u)):512&c||16&c?Ce(e,n,a):8192&c?function(e,n,t,r,l,o){var i=e.children,a=e.childFlags;12&a&&0===i.length&&(a=e.childFlags=2,i=e.children=L()),2===a?ke(i,t,l,r,l,o):we(i,t,n,r,l,o)}(e,r,n,o,a,u):1024&c&&function(e,n,t,r,l){ke(e.children,e.ref,n,!1,null,l);var o=L();Ce(o,t,r),e.dom=o.dom}(e,r,n,a,u)}function Ce(e,n,t){var r=e.dom=document.createTextNode(e.children);i(n)||p(n,r,t)}function we(e,n,t,r,l,o){for(var i=0;i<e.length;++i){var a=e[i];16384&a.flags&&(e[i]=a=N(a)),ke(a,n,t,r,l,o)}}function $e(e,n,o,u,c,s,p){var h=n.flags|=16384;e.flags!==h||e.type!==n.type||e.key!==n.key||2048&h?16384&e.flags?function(e,n,t,r,l,o){ve(e),0!==(n.flags&e.flags&2033)?(ke(n,null,r,l,null,o),function(e,n,t){e.replaceChild(n,t)}(t,n.dom,e.dom)):(ke(n,t,r,l,m(e,!0),o),g(e,t))}(e,n,o,u,c,p):ke(n,o,u,c,s,p):481&h?function(e,n,r,l,o,i){var a,u=n.dom=e.dom,c=e.props,s=n.props,d=!1,p=!1;if(l=l||(32&o)>0,c!==s){var v=c||f;if((a=s||f)!==f)for(var h in(d=(448&o)>0)&&(p=fe(a)),a){var m=v[h],g=a[h];m!==g&&ye(h,m,g,u,l,p,e)}if(v!==f)for(var y in v)t(a[y])&&!t(v[y])&&ye(y,v[y],null,u,l,p,e)}var b=n.children,k=n.className;e.className!==k&&(t(k)?u.removeAttribute("class"):l?u.setAttribute("class",k):u.className=k),4096&o?function(e,n){e.textContent!==n&&(e.textContent=n)}(u,b):Fe(e.childFlags,n.childFlags,e.children,b,u,r,l&&"foreignObject"!==n.type,null,e,i),d&&ce(o,n,u,a,!1,p);var C=n.ref,w=e.ref;w!==C&&(se(w),de(C,u,i))}(e,n,u,c,h,p):4&h?function(e,n,t,r,o,u,c){var s=n.children=e.children;if(i(s))return;s.$L=c;var d=n.props||f,p=n.ref,v=e.ref,h=s.state;if(!s.$N){if(l(s.componentWillReceiveProps)){if(s.$BR=!0,s.componentWillReceiveProps(d,r),s.$UN)return;s.$BR=!1}i(s.$PS)||(h=a(h,s.$PS),s.$PS=null)}(function(e,n,t,r,o,i,u,c,f){var s=e.state,d=e.props,p=Boolean(e.$N),v=l(e.shouldComponentUpdate);if(p&&(n=b(e,t,n!==s?a(s,n):n)),!v||v&&e.shouldComponentUpdate(t,n,o)){!p&&l(e.componentWillUpdate)&&e.componentWillUpdate(t,n,o),e.props=t,e.state=n,e.context=o;var h=null,m=be(e,t,o);p&&l(e.getSnapshotBeforeUpdate)&&(h=e.getSnapshotBeforeUpdate(d,s)),$e(e.$LI,m,r,e.$CX,i,c,f),e.$LI=m,l(e.componentDidUpdate)&&function(e,n,t,r,l){l.push((function(){e.componentDidUpdate(n,t,r)}))}(e,d,s,h,f)}else e.props=t,e.state=n,e.context=o})(s,h,d,t,r,o,0,u,c),v!==p&&(se(v),de(p,s,c))}(e,n,o,u,c,s,p):8&h?function(e,n,r,o,i,a,u){var c=!0,s=n.props||f,d=n.ref,p=e.props,v=!t(d),h=e.children;if(v&&l(d.onComponentShouldUpdate)&&(c=d.onComponentShouldUpdate(p,s)),!1!==c){v&&l(d.onComponentWillUpdate)&&d.onComponentWillUpdate(p,s);var m=n.type,g=I(32768&n.flags?m.render(s,d,o):m(s,o));$e(h,g,r,o,i,a,u),n.children=g,v&&l(d.onComponentDidUpdate)&&d.onComponentDidUpdate(p,s)}else n.children=h}(e,n,o,u,c,s,p):16&h?function(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}(e,n):512&h?n.dom=e.dom:8192&h?function(e,n,t,r,l,o){var i=e.children,a=n.children,u=e.childFlags,c=n.childFlags,f=null;12&c&&0===a.length&&(c=n.childFlags=2,a=n.children=L());var s=0!==(2&c);if(12&u){var d=i.length;(8&u&&8&c||s||!s&&a.length>d)&&(f=m(i[d-1],!1).nextSibling)}Fe(u,c,i,a,t,r,l,f,e,o)}(e,n,o,u,c,p):function(e,n,t,l){var o=e.ref,i=n.ref,a=n.children;if(Fe(e.childFlags,n.childFlags,e.children,a,o,t,!1,null,e,l),n.dom=e.dom,o!==i&&!r(a)){var u=a.dom;v(o,u),d(i,u)}}(e,n,u,p)}function Fe(e,n,t,r,l,o,i,a,u,c){switch(e){case 2:switch(n){case 2:$e(t,r,l,o,i,a,c);break;case 1:pe(t,l);break;case 16:ve(t),C(l,r);break;default:!function(e,n,t,r,l,o){ve(e),we(n,t,r,l,m(e,!0),o),g(e,t)}(t,r,l,o,i,c)}break;case 1:switch(n){case 2:ke(r,l,o,i,a,c);break;case 1:break;case 16:C(l,r);break;default:we(r,l,o,i,a,c)}break;case 16:switch(n){case 16:!function(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:C(t,n))}(t,r,l);break;case 2:me(l),ke(r,l,o,i,a,c);break;case 1:me(l);break;default:me(l),we(r,l,o,i,a,c)}break;default:switch(n){case 16:he(t),C(l,r);break;case 2:ge(l,u,t),ke(r,l,o,i,a,c);break;case 1:ge(l,u,t);break;default:var f=0|t.length,s=0|r.length;0===f?s>0&&we(r,l,o,i,a,c):0===s?ge(l,u,t):8===n&&8===e?function(e,n,t,r,l,o,i,a,u,c){var f,s,d=o-1,p=i-1,v=0,h=e[v],g=n[v];e:{for(;h.key===g.key;){if(16384&g.flags&&(n[v]=g=N(g)),$e(h,g,t,r,l,a,c),e[v]=g,++v>d||v>p)break e;h=e[v],g=n[v]}for(h=e[d],g=n[p];h.key===g.key;){if(16384&g.flags&&(n[p]=g=N(g)),$e(h,g,t,r,l,a,c),e[d]=g,p--,v>--d||v>p)break e;h=e[d],g=n[p]}}if(v>d){if(v<=p)for(s=(f=p+1)<i?m(n[f],!0):a;v<=p;)16384&(g=n[v]).flags&&(n[v]=g=N(g)),++v,ke(g,t,r,l,s,c)}else if(v>p)for(;v<=d;)pe(e[v++],t);else!function(e,n,t,r,l,o,i,a,u,c,f,s,d){var p,v,h,g=0,b=a,k=a,C=o-a+1,w=i-a+1,$=new Int32Array(w+1),F=C===r,P=!1,S=0,x=0;if(l<4||(C|w)<32)for(g=b;g<=o;++g)if(p=e[g],x<w){for(a=k;a<=i;a++)if(v=n[a],p.key===v.key){if($[a-k]=g+1,F)for(F=!1;b<g;)pe(e[b++],u);S>a?P=!0:S=a,16384&v.flags&&(n[a]=v=N(v)),$e(p,v,u,t,c,f,d),++x;break}!F&&a>i&&pe(p,u)}else F||pe(p,u);else{var U={};for(g=k;g<=i;++g)U[n[g].key]=g;for(g=b;g<=o;++g)if(p=e[g],x<w)if(void 0!==(a=U[p.key])){if(F)for(F=!1;g>b;)pe(e[b++],u);$[a-k]=g+1,S>a?P=!0:S=a,16384&(v=n[a]).flags&&(n[a]=v=N(v)),$e(p,v,u,t,c,f,d),++x}else F||pe(p,u);else F||pe(p,u)}if(F)ge(u,s,e),we(n,u,t,c,f,d);else if(P){var V=function(e){var n=0,t=0,r=0,l=0,o=0,i=0,a=0,u=e.length;for(u>Pe&&(Pe=u,le=new Int32Array(u),oe=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=le[l]]<n){oe[t]=r,le[++l]=t;continue}for(o=0,i=l;o<i;)e[le[a=o+i>>1]]<n?o=a+1:i=a;n<e[le[o]]&&(o>0&&(oe[t]=le[o-1]),le[o]=t)}o=l+1;var c=new Int32Array(o);for(i=le[o-1];o-- >0;)c[o]=i,i=oe[i],le[o]=0;return c}($);for(a=V.length-1,g=w-1;g>=0;g--)0===$[g]?(16384&(v=n[S=g+k]).flags&&(n[S]=v=N(v)),ke(v,u,t,c,(h=S+1)<l?m(n[h],!0):f,d)):a<0||g!==V[a]?y(v=n[S=g+k],u,(h=S+1)<l?m(n[h],!0):f):a--}else if(x!==w)for(g=w-1;g>=0;g--)0===$[g]&&(16384&(v=n[S=g+k]).flags&&(n[S]=v=N(v)),ke(v,u,t,c,(h=S+1)<l?m(n[h],!0):f,d))}(e,n,r,o,i,d,p,v,t,l,a,u,c)}(t,r,l,o,i,f,s,a,u,c):function(e,n,t,r,l,o,i,a,u){for(var c,f,s=o>i?i:o,d=0;d<s;++d)c=n[d],f=e[d],16384&c.flags&&(c=n[d]=N(c)),$e(f,c,t,r,l,a,u),e[d]=c;if(o<i)for(d=s;d<i;++d)16384&(c=n[d]).flags&&(c=n[d]=N(c)),ke(c,t,r,l,a,u);else if(o>i)for(d=s;d<o;++d)pe(e[d],t)}(t,r,l,o,i,f,s,a,c)}}}var Pe=0;function Se(e,n,r,o){void 0===r&&(r=null),void 0===o&&(o=f),function(e,n,r,o){var i=[],a=n.$V;t(a)?t(e)||(16384&e.flags&&(e=N(e)),ke(e,n,o,!1,null,i),n.$V=e,a=e):t(e)?(pe(a,n),n.$V=null):(16384&e.flags&&(e=N(e)),$e(a,e,n,o,!1,null,i),a=n.$V=e),i.length>0&&function(e){for(var n;void 0!==(n=e.shift());)n()}(i),l(r)&&r(),l(k.renderComplete)&&k.renderComplete(a,n)}(e,n,r,o)}function xe(e){return S(1,"li","TreeLeaf",e.children,0,null,null,null)}function Ue(e,n){return e!==n}function Ve(e){for(var n=e.data,t=n.children.length,r=new Array(t),l=0;l<t;l++){var o=n.children[l],i=o.id;o.container?r[l]=x(2,Ve,{data:o},i,{onComponentShouldUpdate:Ue}):r[l]=x(2,xe,{children:i},i,{onComponentShouldUpdate:Ue})}return S(1,"ul","TreeNode",r,0,null,null,null)}function Ne(e){var n=e.data,t=n.time%10,r="border-radius:"+t+"px;background:rgba(0,0,0,"+(.5+t/10)+")";return S(1,"div","AnimBox",null,1,{"data-id":n.id,style:r},null,null)}function Le(e,n){console.log("Clicked",e),n.stopPropagation()}function Ae(e){var n=e.children;return S(1,"td","TableCell",[null,!1,[n]],0,{onClick:u(n,Le)},null,null)}function Ie(e){var n=e.data,t="TableRow";n.active&&(t="TableRow active");var r=n.props,l=r.length+1,o=new Array(l);o[0]=x(2,Ae,{children:"#"+n.id},null,{onComponentShouldUpdate:Ue});for(var i=1;i<l;i++)o[i]=x(2,Ae,{children:r[i-1]},null,{onComponentShouldUpdate:Ue});return S(1,"tr",t,[null,o,!1],0,{"data-id":n.id},null,null)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!==typeof Promise&&Promise.resolve().then.bind(Promise.resolve()),uibench.init("Inferno (normalization test)","7.3.3"),document.addEventListener("DOMContentLoaded",(function(e){var n=document.querySelector("#App");uibench.run((function(e){var t,r,l;Se(("table"===(l=(t=e).location)?r=function(e){for(var n=e.items,t=n.length,r=new Array(t),l=0;l<t;l++){var o=n[l];r[l]=x(2,Ie,{data:o,children:o},o.id,{onComponentShouldUpdate:Ue})}return S(1,"table","Table",[[],r,[[]]],0,null,null,null)}(t.table):"anim"===l?r=function(e){for(var n=e.items,t=n.length,r=new Array(t),l=0;l<t;l++){var o=n[l];r[l]=x(2,Ne,{data:o},o.id,{onComponentShouldUpdate:Ue})}return S(1,"div","Anim",r,0,null,null,null)}(t.anim):"tree"===l&&(r=function(e){return S(1,"div","Tree",x(2,Ve,{data:e.root},null,{onComponentShouldUpdate:Ue}),2,null,null,null)}(t.tree)),S(1,"div","Main",r,0,null,null,null)),n)}),(function(e){Se(S(1,"pre",null,JSON.stringify(e,null," "),0,null,null,null),n)}))}))}();
