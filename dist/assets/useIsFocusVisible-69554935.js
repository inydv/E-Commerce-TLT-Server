import{r as n}from"./index-59e93b5a.js";function T({controlled:e,default:t,name:u,state:l="value"}){const{current:r}=n.useRef(e!==void 0),[c,f]=n.useState(t),d=r?e:c,h=n.useCallback(y=>{r||f(y)},[]);return[d,h]}let i=!0,a=!1,o;const b={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function m(e){const{type:t,tagName:u}=e;return!!(u==="INPUT"&&b[t]&&!e.readOnly||u==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function w(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function s(){i=!1}function p(){this.visibilityState==="hidden"&&a&&(i=!0)}function v(e){e.addEventListener("keydown",w,!0),e.addEventListener("mousedown",s,!0),e.addEventListener("pointerdown",s,!0),e.addEventListener("touchstart",s,!0),e.addEventListener("visibilitychange",p,!0)}function E(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return i||m(t)}function F(){const e=n.useCallback(r=>{r!=null&&v(r.ownerDocument)},[]),t=n.useRef(!1);function u(){return t.current?(a=!0,window.clearTimeout(o),o=window.setTimeout(()=>{a=!1},100),t.current=!1,!0):!1}function l(r){return E(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:l,onBlur:u,ref:e}}export{F as a,T as u};