import{r as t,b as l,j as e}from"./index-27f57fcd.js";import{f as c,N as i,g as m}from"./index-15ba628b.js";import{A as h}from"./TableHeader-071249c9.js";function b(){var s,d;const[a,n]=t.useState([]);return t.useEffect(()=>{window.scrollTo(0,0);const r=()=>{const o=JSON.parse(localStorage.getItem("cart"));n(o)};return window.addEventListener("storage",()=>{r()}),r(),()=>window.removeEventListener("storage",r())},[]),l("section",{className:"page-padding",children:[e("div",{className:"rounded mb-5",children:e("div",{className:"p-2",children:l("table",{className:"w-full",children:[e("thead",{children:e("tr",{children:t.Children.toArray((d=(s=h)==null?void 0:s.cart)==null?void 0:d.map(r=>e("th",{className:"td-border p-2",children:r})))})}),e("tbody",{children:(a==null?void 0:a.length)>0?t.Children.toArray(a==null?void 0:a.map(r=>e(c,{data:r}))):e("tr",{children:e("td",{colSpan:"100%",className:"td-border px-5 py-10",children:e(i,{})})})})]})})}),e("div",{className:"flex justify-end",children:e(m,{cart:a})})]})}export{b as default};
