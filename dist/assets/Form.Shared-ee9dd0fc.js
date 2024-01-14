import{r as p,b as v,j as r,E as f}from"./index-8d768b91.js";import{b as T,I as q}from"./index-ced14196.js";import{D as P}from"./Date.Pipe-a7fb7a4a.js";import{R as k}from"./RSConversion.Pipe-ac2552a8.js";const L=p.memo(({legend:g,children_prop:c,formData:u,handleInput:a})=>v("fieldset",{className:"flex justify-between",children:[r("legend",{className:"text-lg font-semibold",children:g}),p.Children.toArray(c==null?void 0:c.map(({type:s,className:n,placeholder:t,autoFocus:i,name:l,label:e,required:o})=>v("div",{className:"w-[45%]",children:[r("input",{type:s,className:n,placeholder:t,autoFocus:i||!1,required:o||!0,name:l,value:u[l]||"",onChange:m=>a(m)}),r("div",{className:"text-base",children:e})]})))]})),B=p.memo(({containerClass:g,labelClass:c,label:u,className:a,placeholder:s,required:n,autoFocus:t,rows:i,name:l,formData:e,handleInput:o})=>v("div",{className:g,children:[r("label",{className:c,children:u}),r("textarea",{className:a,placeholder:s,required:n||!1,autoFocus:t||!1,rows:i,name:l,value:e[l]||"",onChange:m=>o(m)})]})),U=p.memo(({containerClass:g,labelClass:c,label:u,name:a,formData:s,className:n,handleInput:t,options:i})=>v("div",{className:g,children:[r("label",{className:c,children:u}),v("select",{name:a,value:s[a]||"",className:n,onChange:l=>t(l),children:[r("option",{hidden:!0,value:"",children:"Select"}),p.Children.toArray(i==null?void 0:i.map(({name:l,value:e})=>r("option",{value:e,children:l})))]})]})),z=p.memo(({containerClass:g,labelClass:c,label:u,imageInput:a,type:s,name:n,multiple:t,handleImage:i,isView:l,onImageSelectButtonClicked:e,formData:o})=>{var m;return v("div",{className:g,children:[r("label",{className:c,children:u}),r("input",{ref:a,type:s,name:n,multiple:t,accept:"image/*",className:"hidden",onChange:d=>i(d)}),v("div",{className:"flex gap-2 overflow-x-scroll max-w-[300px] w-full items-center pb-2",children:[!l&&r("button",{className:"aspect-square h-16 w-16 border border-gray text-3xl",onClick:d=>e(d),children:"+"}),p.Children.toArray(o&&((m=o[n])==null?void 0:m.map(d=>r(T.LazyLoadImage,{src:l?d==null?void 0:d.url:d,alt:"Product Image",className:"aspect-square h-16 w-16 border border-gray",effect:"blur",onError:({currentTarget:h})=>{h.onerror=null,h.src=q.NoImageAvailable}}))))]})]})}),G=p.memo(({containerClass:g,labelClass:c,label:u,isView:a,formData:s,textType:n,name:t,name2:i,type:l,className:e,placeholder:o,required:m,autoFocus:d,handleInput:h})=>v("div",{className:g,children:[r("label",{className:c,children:u}),a?s&&(n===f.View.Date?P(s[t]):n===f.View.Price?k(s[t]):i?s[t][i]:s[t]):r("input",{type:l,className:e,placeholder:o,required:m||!1,autoFocus:d||!1,name:t,value:s[t]||"",onChange:N=>h(N)})]}));function Q({submitForm:g,setFormData:c,form:u,formData:a,ViewForm:s=!1}){const n=p.useRef(null),t=e=>{e.preventDefault(),n.current.click()},i=async e=>{const o=Array.from(e.target.files),m=[],d=o.map(h=>new Promise(N=>{const x=new FileReader;x.onload=()=>{x.readyState===2&&(m.push(x.result),N())},x.readAsDataURL(h)}));await Promise.all(d),c(h=>({...h,[e.target.name]:m}))},l=e=>{c(o=>({...o,[e.target.name]:e.target.value}))};return v("form",{onSubmit:e=>g(e),className:"min-w-[300px]",children:[p.Children.toArray(u==null?void 0:u.map(({isView:e,isFieldset:o,legend:m,children:d,tagType:h,type:N,className:x,placeholder:F,name:b,name2:C,label:y,rows:M,required:S,autoFocus:A,options:j,multiple:E,labelClass:w,containerClass:I,textType:R})=>o?r(L,{legend:m,children_prop:d,formData:a,handleInput:l}):h===f.FormTagType.TextArea?r(B,{containerClass:I,labelClass:w,label:y,className:x,placeholder:F,required:S,autoFocus:A,rows:M,name:b,formData:a,handleInput:l}):h===f.FormTagType.Select?r(U,{containerClass:I,labelClass:w,label:y,name:b,formData:a,className:x,handleInput:l,options:j}):h===f.FormTagType.File?r(z,{containerClass:I,labelClass:w,label:y,imageInput:n,type:N,name:b,multiple:E,handleImage:i,isView:e,onImageSelectButtonClicked:t,formData:a}):r(G,{containerClass:I,labelClass:w,label:y,isView:e,formData:a,textType:R,name:b,name2:C,type:N,className:x,placeholder:F,required:S,autoFocus:A,handleInput:l}))),!s&&r("div",{className:"flex justify-end",children:r("button",{className:"primary-button",type:"submit",children:"SUBMIT"})})]})}export{Q as default};