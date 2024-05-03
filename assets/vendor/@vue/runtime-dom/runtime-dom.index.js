/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@vue/runtime-dom@3.4.26/dist/runtime-dom.esm-bundler.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{h as e,BaseTransition as t,BaseTransitionPropsValidators as n,getCurrentInstance as o,onMounted as s,watchPostEffect as r,onUnmounted as i,defineComponent as l,nextTick as a,createVNode as c,Fragment as u,Static as p,useTransitionState as f,onUpdated as d,toRaw as m,getTransitionRawChildren as h,setTransitionHooks as v,resolveTransitionHooks as g,createRenderer as b,createHydrationRenderer as _,camelize as y,callWithAsyncErrorHandling as S}from"@vue/runtime-core";export*from"@vue/runtime-core";import{extend as C,isObject as E,toNumber as A,isArray as w,camelize as T,hyphenate as x,EMPTY_OBJ as P,looseToNumber as L,looseIndexOf as N,isSet as k,looseEqual as M,isFunction as $,isString as R,invokeArrayFns as V,isOn as O,isModelListener as B,capitalize as I,isSpecialBooleanAttr as D,includeBooleanAttr as U}from"@vue/shared";
/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const F="undefined"!=typeof document?document:null,H=F&&F.createElement("template"),j={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s="svg"===t?F.createElementNS("http://www.w3.org/2000/svg",e):"mathml"===t?F.createElementNS("http://www.w3.org/1998/Math/MathML",e):F.createElement(e,n?{is:n}:void 0);return"select"===e&&o&&null!=o.multiple&&s.setAttribute("multiple",o.multiple),s},createText:e=>F.createTextNode(e),createComment:e=>F.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>F.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,r){const i=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),s!==r&&(s=s.nextSibling););else{H.innerHTML="svg"===o?`<svg>${e}</svg>`:"mathml"===o?`<math>${e}</math>`:e;const s=H.content;if("svg"===o||"mathml"===o){const e=s.firstChild;for(;e.firstChild;)s.appendChild(e.firstChild);s.removeChild(e)}t.insertBefore(s,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},K="transition",q="animation",z=Symbol("_vtc"),W=(n,{slots:o})=>e(t,Y(n),o);W.displayName="Transition";const G={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},X=W.props=C({},n,G),J=(e,t=[])=>{w(e)?e.forEach((e=>e(...t))):e&&e(...t)},Q=e=>!!e&&(w(e)?e.some((e=>e.length>1)):e.length>1);function Y(e){const t={};for(const n in e)n in G||(t[n]=e[n]);if(!1===e.css)return t;const{name:n="v",type:o,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:c=i,appearToClass:u=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=e,m=function(e){if(null==e)return null;if(E(e))return[Z(e.enter),Z(e.leave)];{const t=Z(e);return[t,t]}}(s),h=m&&m[0],v=m&&m[1],{onBeforeEnter:g,onEnter:b,onEnterCancelled:_,onLeave:y,onLeaveCancelled:S,onBeforeAppear:A=g,onAppear:w=b,onAppearCancelled:T=_}=t,x=(e,t,n)=>{te(e,t?u:l),te(e,t?c:i),n&&n()},P=(e,t)=>{e._isLeaving=!1,te(e,p),te(e,d),te(e,f),t&&t()},L=e=>(t,n)=>{const s=e?w:b,i=()=>x(t,e,n);J(s,[t,i]),ne((()=>{te(t,e?a:r),ee(t,e?u:l),Q(s)||se(t,o,h,i)}))};return C(t,{onBeforeEnter(e){J(g,[e]),ee(e,r),ee(e,i)},onBeforeAppear(e){J(A,[e]),ee(e,a),ee(e,c)},onEnter:L(!1),onAppear:L(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>P(e,t);ee(e,p),ee(e,f),ae(),ne((()=>{e._isLeaving&&(te(e,p),ee(e,d),Q(y)||se(e,o,v,n))})),J(y,[e,n])},onEnterCancelled(e){x(e,!1),J(_,[e])},onAppearCancelled(e){x(e,!0),J(T,[e])},onLeaveCancelled(e){P(e),J(S,[e])}})}function Z(e){return A(e)}function ee(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[z]||(e[z]=new Set)).add(t)}function te(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[z];n&&(n.delete(t),n.size||(e[z]=void 0))}function ne(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let oe=0;function se(e,t,n,o){const s=e._endId=++oe,r=()=>{s===e._endId&&o()};if(n)return setTimeout(r,n);const{type:i,timeout:l,propCount:a}=re(e,t);if(!i)return o();const c=i+"end";let u=0;const p=()=>{e.removeEventListener(c,f),r()},f=t=>{t.target===e&&++u>=a&&p()};setTimeout((()=>{u<a&&p()}),l+1),e.addEventListener(c,f)}function re(e,t){const n=window.getComputedStyle(e),o=e=>(n[e]||"").split(", "),s=o(`${K}Delay`),r=o(`${K}Duration`),i=ie(s,r),l=o(`${q}Delay`),a=o(`${q}Duration`),c=ie(l,a);let u=null,p=0,f=0;t===K?i>0&&(u=K,p=i,f=r.length):t===q?c>0&&(u=q,p=c,f=a.length):(p=Math.max(i,c),u=p>0?i>c?K:q:null,f=u?u===K?r.length:a.length:0);return{type:u,timeout:p,propCount:f,hasTransform:u===K&&/\b(transform|all)(,|$)/.test(o(`${K}Property`).toString())}}function ie(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>le(t)+le(e[n]))))}function le(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function ae(){return document.body.offsetHeight}const ce=Symbol("_vod"),ue=Symbol("_vsh"),pe={beforeMount(e,{value:t},{transition:n}){e[ce]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):fe(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),fe(e,!0),o.enter(e)):o.leave(e,(()=>{fe(e,!1)})):fe(e,t))},beforeUnmount(e,{value:t}){fe(e,t)}};function fe(e,t){e.style.display=t?e[ce]:"none",e[ue]=!t}const de=Symbol("");function me(e){const t=o();if(!t)return;const n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e=>ve(e,n)))},l=()=>{const o=e(t.proxy);he(t.subTree,o),n(o)};s((()=>{r(l);const e=new MutationObserver(l);e.observe(t.subTree.el.parentNode,{childList:!0}),i((()=>e.disconnect()))}))}function he(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{he(n.activeBranch,t)}))}for(;e.component;)e=e.component.subTree;if(1&e.shapeFlag&&e.el)ve(e.el,t);else if(e.type===u)e.children.forEach((e=>he(e,t)));else if(e.type===p){let{el:n,anchor:o}=e;for(;n&&(ve(n,t),n!==o);)n=n.nextSibling}}function ve(e,t){if(1===e.nodeType){const n=e.style;let o="";for(const e in t)n.setProperty(`--${e}`,t[e]),o+=`--${e}: ${t[e]};`;n[de]=o}}const ge=/(^|;)\s*display\s*:/;const be=/\s*!important$/;function _e(e,t,n){if(w(n))n.forEach((n=>_e(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=function(e,t){const n=Se[t];if(n)return n;let o=y(t);if("filter"!==o&&o in e)return Se[t]=o;o=I(o);for(let n=0;n<ye.length;n++){const s=ye[n]+o;if(s in e)return Se[t]=s}return t}(e,t);be.test(n)?e.setProperty(x(o),n.replace(be,""),"important"):e[o]=n}}const ye=["Webkit","Moz","ms"],Se={};const Ce="http://www.w3.org/1999/xlink";function Ee(e,t,n,o){e.addEventListener(t,n,o)}const Ae=Symbol("_vei");function we(e,t,n,o,s=null){const r=e[Ae]||(e[Ae]={}),i=r[t];if(o&&i)i.value=o;else{const[n,l]=function(e){let t;if(Te.test(e)){let n;for(t={};n=e.match(Te);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):x(e.slice(2));return[n,t]}(t);if(o){const i=r[t]=function(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();S(function(e,t){if(w(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=Le(),n}(o,s);Ee(e,n,i,l)}else i&&(!function(e,t,n,o){e.removeEventListener(t,n,o)}(e,n,i,l),r[t]=void 0)}}const Te=/(?:Once|Passive|Capture)$/;let xe=0;const Pe=Promise.resolve(),Le=()=>xe||(Pe.then((()=>xe=0)),xe=Date.now());const Ne=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123;
/*! #__NO_SIDE_EFFECTS__ */
function ke(e,t){const n=l(e);class o extends Re{constructor(e){super(n,e,t)}}return o.def=n,o}
/*! #__NO_SIDE_EFFECTS__ */const Me=e=>ke(e,gt),$e="undefined"!=typeof HTMLElement?HTMLElement:class{};class Re extends $e{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),a((()=>{this._connected||(vt(null,this.shadowRoot),this._instance=null)}))}_resolveDef(){this._resolved=!0;for(let e=0;e<this.attributes.length;e++)this._setAttr(this.attributes[e].name);this._ob=new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName)})),this._ob.observe(this,{attributes:!0});const e=(e,t=!1)=>{const{props:n,styles:o}=e;let s;if(n&&!w(n))for(const e in n){const t=n[e];(t===Number||t&&t.type===Number)&&(e in this._props&&(this._props[e]=A(this._props[e])),(s||(s=Object.create(null)))[T(e)]=!0)}this._numberProps=s,t&&this._resolveProps(e),this._applyStyles(o),this._update()},t=this._def.__asyncLoader;t?t().then((t=>e(t,!0))):e(this._def)}_resolveProps(e){const{props:t}=e,n=w(t)?t:Object.keys(t||{});for(const e of Object.keys(this))"_"!==e[0]&&n.includes(e)&&this._setProp(e,this[e],!0,!1);for(const e of n.map(T))Object.defineProperty(this,e,{get(){return this._getProp(e)},set(t){this._setProp(e,t)}})}_setAttr(e){let t=this.hasAttribute(e)?this.getAttribute(e):void 0;const n=T(e);this._numberProps&&this._numberProps[n]&&(t=A(t)),this._setProp(n,t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,o=!0){t!==this._props[e]&&(this._props[e]=t,o&&this._instance&&this._update(),n&&(!0===t?this.setAttribute(x(e),""):"string"==typeof t||"number"==typeof t?this.setAttribute(x(e),t+""):t||this.removeAttribute(x(e))))}_update(){vt(this._createVNode(),this.shadowRoot)}_createVNode(){const e=c(this._def,C({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0;const t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};e.emit=(e,...n)=>{t(e,n),x(e)!==e&&t(x(e),n)};let n=this;for(;n=n&&(n.parentNode||n.host);)if(n instanceof Re){e.parent=n._instance,e.provides=n._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach((e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)}))}}function Ve(e="$style"){{const t=o();if(!t)return P;const n=t.type.__cssModules;if(!n)return P;const s=n[e];return s||P}}const Oe=new WeakMap,Be=new WeakMap,Ie=Symbol("_moveCb"),De=Symbol("_enterCb"),Ue={name:"TransitionGroup",props:C({},X,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=o(),s=f();let r,i;return d((()=>{if(!r.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!function(e,t,n){const o=e.cloneNode(),s=e[z];s&&s.forEach((e=>{e.split(/\s+/).forEach((e=>e&&o.classList.remove(e)))}));n.split(/\s+/).forEach((e=>e&&o.classList.add(e))),o.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(o);const{hasTransform:i}=re(o);return r.removeChild(o),i}(r[0].el,n.vnode.el,t))return;r.forEach(He),r.forEach(je);const o=r.filter(Ke);ae(),o.forEach((e=>{const n=e.el,o=n.style;ee(n,t),o.transform=o.webkitTransform=o.transitionDuration="";const s=n[Ie]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",s),n[Ie]=null,te(n,t))};n.addEventListener("transitionend",s)}))})),()=>{const o=m(e),l=Y(o);let a=o.tag||u;if(r=[],i)for(let e=0;e<i.length;e++){const t=i[e];t.el&&t.el instanceof Element&&(r.push(t),v(t,g(t,l,s,n)),Oe.set(t,t.el.getBoundingClientRect()))}i=t.default?h(t.default()):[];for(let e=0;e<i.length;e++){const t=i[e];null!=t.key&&v(t,g(t,l,s,n))}return c(a,null,i)}}},Fe=Ue;function He(e){const t=e.el;t[Ie]&&t[Ie](),t[De]&&t[De]()}function je(e){Be.set(e,e.el.getBoundingClientRect())}function Ke(e){const t=Oe.get(e),n=Be.get(e),o=t.left-n.left,s=t.top-n.top;if(o||s){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${o}px,${s}px)`,t.transitionDuration="0s",e}}const qe=e=>{const t=e.props["onUpdate:modelValue"]||!1;return w(t)?e=>V(t,e):t};function ze(e){e.target.composing=!0}function We(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ge=Symbol("_assign"),Xe={created(e,{modifiers:{lazy:t,trim:n,number:o}},s){e[Ge]=qe(s);const r=o||s.props&&"number"===s.props.type;Ee(e,t?"change":"input",(t=>{if(t.target.composing)return;let o=e.value;n&&(o=o.trim()),r&&(o=L(o)),e[Ge](o)})),n&&Ee(e,"change",(()=>{e.value=e.value.trim()})),t||(Ee(e,"compositionstart",ze),Ee(e,"compositionend",We),Ee(e,"change",We))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:s}},r){if(e[Ge]=qe(r),e.composing)return;const i=null==t?"":t;if((!s&&"number"!==e.type||/^0\d/.test(e.value)?e.value:L(e.value))!==i){if(document.activeElement===e&&"range"!==e.type){if(n)return;if(o&&e.value.trim()===i)return}e.value=i}}},Je={deep:!0,created(e,t,n){e[Ge]=qe(n),Ee(e,"change",(()=>{const t=e._modelValue,n=tt(e),o=e.checked,s=e[Ge];if(w(t)){const e=N(t,n),r=-1!==e;if(o&&!r)s(t.concat(n));else if(!o&&r){const n=[...t];n.splice(e,1),s(n)}}else if(k(t)){const e=new Set(t);o?e.add(n):e.delete(n),s(e)}else s(nt(e,o))}))},mounted:Qe,beforeUpdate(e,t,n){e[Ge]=qe(n),Qe(e,t,n)}};function Qe(e,{value:t,oldValue:n},o){e._modelValue=t,w(t)?e.checked=N(t,o.props.value)>-1:k(t)?e.checked=t.has(o.props.value):t!==n&&(e.checked=M(t,nt(e,!0)))}const Ye={created(e,{value:t},n){e.checked=M(t,n.props.value),e[Ge]=qe(n),Ee(e,"change",(()=>{e[Ge](tt(e))}))},beforeUpdate(e,{value:t,oldValue:n},o){e[Ge]=qe(o),t!==n&&(e.checked=M(t,o.props.value))}},Ze={deep:!0,created(e,{value:t,modifiers:{number:n}},o){const s=k(t);Ee(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?L(tt(e)):tt(e)));e[Ge](e.multiple?s?new Set(t):t:t[0]),e._assigning=!0,a((()=>{e._assigning=!1}))})),e[Ge]=qe(o)},mounted(e,{value:t,modifiers:{number:n}}){et(e,t)},beforeUpdate(e,t,n){e[Ge]=qe(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||et(e,t)}};function et(e,t,n){const o=e.multiple,s=w(t);if(!o||s||k(t)){for(let n=0,r=e.options.length;n<r;n++){const r=e.options[n],i=tt(r);if(o)if(s){const e=typeof i;r.selected="string"===e||"number"===e?t.some((e=>String(e)===String(i))):N(t,i)>-1}else r.selected=t.has(i);else if(M(tt(r),t))return void(e.selectedIndex!==n&&(e.selectedIndex=n))}o||-1===e.selectedIndex||(e.selectedIndex=-1)}}function tt(e){return"_value"in e?e._value:e.value}function nt(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const ot={created(e,t,n){rt(e,t,n,null,"created")},mounted(e,t,n){rt(e,t,n,null,"mounted")},beforeUpdate(e,t,n,o){rt(e,t,n,o,"beforeUpdate")},updated(e,t,n,o){rt(e,t,n,o,"updated")}};function st(e,t){switch(e){case"SELECT":return Ze;case"TEXTAREA":return Xe;default:switch(t){case"checkbox":return Je;case"radio":return Ye;default:return Xe}}}function rt(e,t,n,o,s){const r=st(e.tagName,n.props&&n.props.type)[s];r&&r(e,t,n,o)}const it=["ctrl","shift","alt","meta"],lt={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>it.some((n=>e[`${n}Key`]&&!t.includes(n)))},at=(e,t)=>{const n=e._withMods||(e._withMods={}),o=t.join(".");return n[o]||(n[o]=(n,...o)=>{for(let e=0;e<t.length;e++){const o=lt[t[e]];if(o&&o(n,t))return}return e(n,...o)})},ct={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ut=(e,t)=>{const n=e._withKeys||(e._withKeys={}),o=t.join(".");return n[o]||(n[o]=n=>{if(!("key"in n))return;const o=x(n.key);return t.some((e=>e===o||ct[e]===o))?e(n):void 0})},pt=C({patchProp:(e,t,n,o,s,r,i,l,a)=>{const c="svg"===s;"class"===t?function(e,t,n){const o=e[z];o&&(t=(t?[t,...o]:[...o]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,o,c):"style"===t?function(e,t,n){const o=e.style,s=R(n);let r=!1;if(n&&!s){if(t)if(R(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&_e(o,t,"")}else for(const e in t)null==n[e]&&_e(o,e,"");for(const e in n)"display"===e&&(r=!0),_e(o,e,n[e])}else if(s){if(t!==n){const e=o[de];e&&(n+=";"+e),o.cssText=n,r=ge.test(n)}}else t&&e.removeAttribute("style");ce in e&&(e[ce]=r?o.display:"",e[ue]&&(o.display="none"))}(e,n,o):O(t)?B(t)||we(e,t,0,o,i):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):function(e,t,n,o){if(o)return"innerHTML"===t||"textContent"===t||!!(t in e&&Ne(t)&&$(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}if(Ne(t)&&R(n))return!1;return t in e}(e,t,o,c))?function(e,t,n,o,s,r,i){if("innerHTML"===t||"textContent"===t)return o&&i(o,s,r),void(e[t]=null==n?"":n);const l=e.tagName;if("value"===t&&"PROGRESS"!==l&&!l.includes("-")){const o=null==n?"":n;return("OPTION"===l?e.getAttribute("value")||"":e.value)===o&&"_value"in e||(e.value=o),null==n&&e.removeAttribute(t),void(e._value=n)}let a=!1;if(""===n||null==n){const o=typeof e[t];"boolean"===o?n=U(n):null==n&&"string"===o?(n="",a=!0):"number"===o&&(n=0,a=!0)}try{e[t]=n}catch(e){}a&&e.removeAttribute(t)}(e,t,o,r,i,l,a):("true-value"===t?e._trueValue=o:"false-value"===t&&(e._falseValue=o),function(e,t,n,o,s){if(o&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Ce,t.slice(6,t.length)):e.setAttributeNS(Ce,t,n);else{const o=D(t);null==n||o&&!U(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}(e,t,o,c))}},j);let ft,dt=!1;function mt(){return ft||(ft=b(pt))}function ht(){return ft=dt?ft:_(pt),dt=!0,ft}const vt=(...e)=>{mt().render(...e)},gt=(...e)=>{ht().hydrate(...e)},bt=(...e)=>{const t=mt().createApp(...e),{mount:n}=t;return t.mount=e=>{const o=St(e);if(!o)return;const s=t._component;$(s)||s.render||s.template||(s.template=o.innerHTML),o.innerHTML="";const r=n(o,!1,yt(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t},_t=(...e)=>{const t=ht().createApp(...e),{mount:n}=t;return t.mount=e=>{const t=St(e);if(t)return n(t,!0,yt(t))},t};function yt(e){return e instanceof SVGElement?"svg":"function"==typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function St(e){if(R(e)){return document.querySelector(e)}return e}let Ct=!1;const Et=()=>{Ct||(Ct=!0,Xe.getSSRProps=({value:e})=>({value:e}),Ye.getSSRProps=({value:e},t)=>{if(t.props&&M(t.props.value,e))return{checked:!0}},Je.getSSRProps=({value:e},t)=>{if(w(e)){if(t.props&&N(e,t.props.value)>-1)return{checked:!0}}else if(k(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},ot.getSSRProps=(e,t)=>{if("string"!=typeof t.type)return;const n=st(t.type.toUpperCase(),t.props&&t.props.type);return n.getSSRProps?n.getSSRProps(e,t):void 0},pe.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}})};export{W as Transition,Fe as TransitionGroup,Re as VueElement,bt as createApp,_t as createSSRApp,ke as defineCustomElement,Me as defineSSRCustomElement,gt as hydrate,Et as initDirectivesForSSR,vt as render,Ve as useCssModule,me as useCssVars,Je as vModelCheckbox,ot as vModelDynamic,Ye as vModelRadio,Ze as vModelSelect,Xe as vModelText,pe as vShow,ut as withKeys,at as withModifiers};export default null;
