import{r as f,a as U,u as T,i as b,j as s,b as A,L as w,E as o,_ as l,T as u,R as g}from"./index-59e93b5a.js";import{r as h}from"./index-88dbd3cf.js";import{R as y,a as H,F as L,b as N}from"./Authentication.Service-1c0bf830.js";var D=h.GenIcon,P=function(e){return D({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}}]})(e)},_=h.GenIcon,$=function(e){return _({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M376 186h-20v-40c0-55-45-100-100-100S156 91 156 146v40h-20c-22.002 0-40 17.998-40 40v200c0 22.002 17.998 40 40 40h240c22.002 0 40-17.998 40-40V226c0-22.002-17.998-40-40-40zM256 368c-22.002 0-40-17.998-40-40s17.998-40 40-40 40 17.998 40 40-17.998 40-40 40zm62.002-182H193.998v-40c0-34.004 28.003-62.002 62.002-62.002 34.004 0 62.002 27.998 62.002 62.002v40z"}}]})(e)},k=h.GenIcon,F=function(e){return k({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"}}]})(e)},O=h.GenIcon,V=function(e){return O({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}}]})(e)};const j=f.memo(({icon:a,type:e,className:m,placeholder:i,name:c,formData:S,handleInput:d})=>A("li",{className:"flex items-center justify-between mb-2",children:[a==="HiUser"?s(F,{size:25}):a==="HiPhone"?s(V,{size:25}):a==="MdEmail"?s(P,{size:25}):a==="IoMdLock"?s($,{size:25}):"",s("input",{type:e,className:m,placeholder:i,required:!0,name:c,value:S[c]||"",onChange:v=>d(v)})]}));function J({tab:a,form:e,className:m,type:i,isLinkShow:c,navigateRoute:S,navigateTag:d,switchTabs:v}){const[r,p]=f.useState({}),{setUser:C}=U(),E=T(),{token:M}=b(),G=n=>{p(t=>({...t,[n.target.name]:n.target.value}))},I=async n=>{if(n.preventDefault(),i===o.AuthenticationType.Register){const{data:t}=await y(r);t&&t.SUCCESS&&(l.success(t==null?void 0:t.MESSAGE,u.success),p({}),v(o.AuthenticationType.Login))}else if(i===o.AuthenticationType.Login){const{data:t}=await H(r);t&&t.SUCCESS&&(l.success(t==null?void 0:t.MESSAGE,u.success),C(t.DATA),E(g.home))}else if(i===o.AuthenticationType.Forgot){const{data:t}=await L(r);t&&t.SUCCESS&&(l.success(t==null?void 0:t.MESSAGE,u.success),E(g.Authentication))}else{const{data:t}=await N(r,M);t&&t.SUCCESS&&(l.success(t==null?void 0:t.MESSAGE,u.success),E(g.Authentication))}};return s("form",{className:`transition-all duration-200 ease-linear grid place-items-center h-[80%] ${m}`,ref:a,onSubmit:n=>I(n),children:A("ul",{children:[f.Children.toArray(e==null?void 0:e.map(({icon:n,type:t,className:R,placeholder:z,name:x})=>s(j,{icon:n,type:t,className:R,placeholder:z,name:x,formData:r,handleInput:G}))),c&&s("div",{className:"text-end my-5",children:s(w,{className:"hover:text-red-600 transition-all duration-200 ease-linear",to:S,children:d})}),s("button",{type:"submit",className:"primary-button float-right",children:i})]})})}export{J as default};