/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@vue/compiler-dom@3.4.26/dist/compiler-dom.esm-bundler.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{registerRuntimeHelpers as e,createSimpleExpression as t,createCompilerError as n,noopDirectiveTransform as o,baseCompile as r,baseParse as i,createObjectProperty as s,getConstantType as l,createCallExpression as _,TO_DISPLAY_STRING as a,transformModel as c,findProp as p,hasDynamicKeyVBind as m,transformOn as E,isStaticExp as d,createCompoundExpression as u,checkCompatEnabled as N}from"@vue/compiler-core";export*from"@vue/compiler-core";import{isVoidTag as h,isHTMLTag as T,isSVGTag as f,isMathMLTag as g,parseStringStyle as v,extend as y,capitalize as O,makeMap as I}from"@vue/shared";
/**
* @vue/compiler-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const S=Symbol(""),L=Symbol(""),M=Symbol(""),X=Symbol(""),x=Symbol(""),V=Symbol(""),D=Symbol(""),R=Symbol(""),b=Symbol(""),H=Symbol("");let C;e({[S]:"vModelRadio",[L]:"vModelCheckbox",[M]:"vModelText",[X]:"vModelSelect",[x]:"vModelDynamic",[V]:"withModifiers",[D]:"withKeys",[R]:"vShow",[b]:"Transition",[H]:"TransitionGroup"});const k={parseMode:"html",isVoidTag:h,isNativeTag:e=>T(e)||f(e)||g(e),isPreTag:e=>"pre"===e,decodeEntities:function(e,t=!1){return C||(C=document.createElement("div")),t?(C.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,C.children[0].getAttribute("foo")):(C.innerHTML=e,C.textContent)},isBuiltInComponent:e=>"Transition"===e||"transition"===e?b:"TransitionGroup"===e||"transition-group"===e?H:void 0,getNamespace(e,t,n){let o=t?t.ns:n;if(t&&2===o)if("annotation-xml"===t.tag){if("svg"===e)return 1;t.props.some((e=>6===e.type&&"encoding"===e.name&&null!=e.value&&("text/html"===e.value.content||"application/xhtml+xml"===e.value.content)))&&(o=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&"mglyph"!==e&&"malignmark"!==e&&(o=0);else t&&1===o&&("foreignObject"!==t.tag&&"desc"!==t.tag&&"title"!==t.tag||(o=0));if(0===o){if("svg"===e)return 1;if("math"===e)return 2}return o}},A=e=>{1===e.type&&e.props.forEach(((n,o)=>{6===n.type&&"style"===n.name&&n.value&&(e.props[o]={type:7,name:"bind",arg:t("style",!0,n.loc),exp:w(n.value.content,n.loc),modifiers:[],loc:n.loc})}))},w=(e,n)=>{const o=v(e);return t(JSON.stringify(o),!1,n,3)};function P(e,t){return n(e,t,void 0)}const G={X_V_HTML_NO_EXPRESSION:53,53:"X_V_HTML_NO_EXPRESSION",X_V_HTML_WITH_CHILDREN:54,54:"X_V_HTML_WITH_CHILDREN",X_V_TEXT_NO_EXPRESSION:55,55:"X_V_TEXT_NO_EXPRESSION",X_V_TEXT_WITH_CHILDREN:56,56:"X_V_TEXT_WITH_CHILDREN",X_V_MODEL_ON_INVALID_ELEMENT:57,57:"X_V_MODEL_ON_INVALID_ELEMENT",X_V_MODEL_ARG_ON_ELEMENT:58,58:"X_V_MODEL_ARG_ON_ELEMENT",X_V_MODEL_ON_FILE_INPUT_ELEMENT:59,59:"X_V_MODEL_ON_FILE_INPUT_ELEMENT",X_V_MODEL_UNNECESSARY_VALUE:60,60:"X_V_MODEL_UNNECESSARY_VALUE",X_V_SHOW_NO_EXPRESSION:61,61:"X_V_SHOW_NO_EXPRESSION",X_TRANSITION_INVALID_CHILDREN:62,62:"X_TRANSITION_INVALID_CHILDREN",X_IGNORED_SIDE_EFFECT_TAG:63,63:"X_IGNORED_SIDE_EFFECT_TAG",__EXTEND_POINT__:64,64:"__EXTEND_POINT__"},U={53:"v-html is missing expression.",54:"v-html will override element children.",55:"v-text is missing expression.",56:"v-text will override element children.",57:"v-model can only be used on <input>, <textarea> and <select> elements.",58:"v-model argument is not supported on plain elements.",59:"v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",60:"Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",61:"v-show is missing expression.",62:"<Transition> expects exactly one child element or component.",63:"Tags with side effect (<script> and <style>) are ignored in client component templates."},F=I("passive,once,capture"),W=I("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),$=I("left,right"),J=I("onkeyup,onkeydown,onkeypress",!0),K=(e,n)=>d(e)&&"onclick"===e.content.toLowerCase()?t(n,!0):4!==e.type?u(["(",e,`) === "onClick" ? "${n}" : (`,e,")"]):e,j=(e,t)=>{1!==e.type||0!==e.tagType||"script"!==e.tag&&"style"!==e.tag||t.removeNode()},Y=[A],q={cloak:o,html:(e,n,o)=>{const{exp:r,loc:i}=e;return r||o.onError(P(53,i)),n.children.length&&(o.onError(P(54,i)),n.children.length=0),{props:[s(t("innerHTML",!0,i),r||t("",!0))]}},text:(e,n,o)=>{const{exp:r,loc:i}=e;return r||o.onError(P(55,i)),n.children.length&&(o.onError(P(56,i)),n.children.length=0),{props:[s(t("textContent",!0),r?l(r,o)>0?r:_(o.helperString(a),[r],i):t("",!0))]}},model:(e,t,n)=>{const o=c(e,t,n);if(!o.props.length||1===t.tagType)return o;e.arg&&n.onError(P(58,e.arg.loc));const{tag:r}=t,i=n.isCustomElement(r);if("input"===r||"textarea"===r||"select"===r||i){let s=M,l=!1;if("input"===r||i){const o=p(t,"type");if(o){if(7===o.type)s=x;else if(o.value)switch(o.value.content){case"radio":s=S;break;case"checkbox":s=L;break;case"file":l=!0,n.onError(P(59,e.loc))}}else m(t)&&(s=x)}else"select"===r&&(s=X);l||(o.needRuntime=n.helper(s))}else n.onError(P(57,e.loc));return o.props=o.props.filter((e=>!(4===e.key.type&&"modelValue"===e.key.content))),o},on:(e,n,o)=>E(e,n,o,(n=>{const{modifiers:r}=e;if(!r.length)return n;let{key:i,value:l}=n.props[0];const{keyModifiers:a,nonKeyModifiers:c,eventOptionModifiers:p}=((e,t,n,o)=>{const r=[],i=[],s=[];for(let l=0;l<t.length;l++){const _=t[l];"native"===_&&N("COMPILER_V_ON_NATIVE",n,o)||F(_)?s.push(_):$(_)?d(e)?J(e.content)?r.push(_):i.push(_):(r.push(_),i.push(_)):W(_)?i.push(_):r.push(_)}return{keyModifiers:r,nonKeyModifiers:i,eventOptionModifiers:s}})(i,r,o,e.loc);if(c.includes("right")&&(i=K(i,"onContextmenu")),c.includes("middle")&&(i=K(i,"onMouseup")),c.length&&(l=_(o.helper(V),[l,JSON.stringify(c)])),!a.length||d(i)&&!J(i.content)||(l=_(o.helper(D),[l,JSON.stringify(a)])),p.length){const e=p.map(O).join("");i=d(i)?t(`${i.content}${e}`,!0):u(["(",i,`) + "${e}"`])}return{props:[s(i,l)]}})),show:(e,t,n)=>{const{exp:o,loc:r}=e;return o||n.onError(P(61,r)),{props:[],needRuntime:n.helper(R)}}};function B(e,t={}){return r(e,y({},k,t,{nodeTransforms:[j,...Y,...t.nodeTransforms||[]],directiveTransforms:y({},q,t.directiveTransforms||{}),transformHoist:null}))}function z(e,t={}){return i(e,y({},k,t))}export{q as DOMDirectiveTransforms,G as DOMErrorCodes,U as DOMErrorMessages,Y as DOMNodeTransforms,b as TRANSITION,H as TRANSITION_GROUP,L as V_MODEL_CHECKBOX,x as V_MODEL_DYNAMIC,S as V_MODEL_RADIO,X as V_MODEL_SELECT,M as V_MODEL_TEXT,D as V_ON_WITH_KEYS,V as V_ON_WITH_MODIFIERS,R as V_SHOW,B as compile,P as createDOMCompilerError,z as parse,k as parserOptions,A as transformStyle};export default null;