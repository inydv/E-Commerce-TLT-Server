import{r as d,a as F,b as r,F as f,j as e,E as g}from"./index-3aafef44.js";import{b as M,I as N}from"./index-13f30b14.js";import{r as T}from"./index-f20ea7eb.js";const p=[{tagType:"input",label:"Username",type:"text",className:"myAccount-input",placeholder:"Lokesh Yadav",name:"username"},{tagType:"input",label:"Phone",type:"number",className:"myAccount-input",placeholder:"1234567890",name:"phone"},{tagType:"radio",label:"Gender",options:[{label:"Male",name:"gender"},{label:"Female",name:"gender"},{label:"Others",name:"gender"}]},{tagType:"password",options:[{placeholder:"Current Password",name:"currentPassword"},{placeholder:"New Password",name:"password"},{placeholder:"Confirm Password",name:"confirmPassword"}]}];var A=T.GenIcon,j=function(a){return A({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"}}]}]})(a)};const E=d.memo(({label:n,type:a,className:m,placeholder:s,name:l,handleInput:c,formData:i})=>r("div",{className:"xl:grid xl:grid-cols-2 mb-5",children:[e("label",{className:"font-semibold text-base sm:text-xl",children:n}),e("input",{type:a,className:m,placeholder:s,required:!0,name:l,onChange:o=>c(o),value:i[l]||""})]})),R=d.memo(({label:n,options:a,handleInput:m,formData:s})=>r("div",{className:"xl:grid xl:grid-cols-2 my-5 sm:my-10 items-center",children:[e("label",{className:"font-semibold text-base sm:text-xl",children:n}),e("div",{children:d.Children.toArray(a==null?void 0:a.map(({label:l,name:c})=>r(f,{children:[e("input",{type:"radio",className:"mr-2",id:l,name:c,value:l,onChange:i=>m(i),checked:(s==null?void 0:s.gender)===l}),e("label",{htmlFor:l,className:"mr-5 text-base",children:l})]})))})]})),U=d.memo(({placeholder:n,isDisabled:a,name:m,handleInput:s})=>e("input",{type:"password",className:"w-full xl:max-w-[300px] rounded-sm py-2 px-4 outline-none text-black text-sm sm:text-base mb-2 sm:mb-5 xl:mt-0",placeholder:n,disabled:a,name:m,onChange:l=>s(l)}));function q({handleSubmit:n,handleInput:a,handleImage:m,avatarPreview:s,formData:l,isDisabled:c,setIsDisabled:i}){var u;const o=d.useRef(null),{user:h}=F(),v=()=>{o.current.click()};return r(f,{children:[e("div",{className:"max-w-[1000px] mx-auto",children:r("div",{className:"flex xl:items-center justify-between flex-col md:flex-row xl:-translate-y-10",children:[r("div",{className:"flex items-center gap-5",children:[r("div",{className:"relative",children:[e(M.LazyLoadImage,{src:s||((u=h==null?void 0:h.avatar)==null?void 0:u.url)||N.userIcon,alt:"User Image",className:"rounded-full h-[80px] xl:h-[150px] w-[80px] xl:w-[150px] border-2 border-white mr-5",effect:"blur",onError:({currentTarget:t})=>{t.onerror=null,t.src=N.NoImageAvailable}}),e("input",{type:"file",className:"hidden",name:"avatar",accept:"image/*",onChange:t=>m(t),ref:o}),e(j,{className:"absolute right-2 bottom-0 sm:right-5 bg-white rounded-full p-1 xl:p-2 edit-icon cursor-pointer text-2xl xl:text-4xl border-2 border-black",onClick:()=>v()})]}),r("div",{children:[e("h1",{className:"font-semibold text-2xl xl:text-4xl",children:"Profile"}),e("p",{className:"text-base sm:text-lg mt-1",children:"Update your photo and personal details."})]})]}),e("div",{className:"mt-4 xl:mt-0 flex justify-end md:block",children:e("button",{type:"submit",className:"primary-button",onClick:t=>n(t),children:"SUBMIT"})})]})}),e("div",{className:"max-w-[650px] mx-auto mt-5",children:d.Children.toArray(p==null?void 0:p.map(({tagType:t,options:x,className:y,name:w,placeholder:C,label:b,type:P})=>t===g.FormTagType.Input?e(E,{label:b,type:P,className:y,placeholder:C,name:w,handleInput:a,formData:l}):t===g.FormTagType.Radio?e(R,{label:b,options:x,handleInput:a,formData:l}):r("div",{className:"xl:grid xl:grid-cols-2",children:[r("div",{className:"mb-5",children:[e("h6",{className:"font-semibold text-base sm:text-xl",children:"Change Password"}),r("p",{className:"text-xs ml-5 mt-1 xl:mt-2 font-semibold",children:["**",r("span",{className:"text-red-600 cursor-pointer",onClick:()=>i(!1),children:["Click Me"," "]}),"To Change Password **"]})]}),e("div",{className:"flex flex-col",children:d.Children.toArray(x==null?void 0:x.map(({placeholder:I,name:k})=>e(U,{placeholder:I,isDisabled:c,name:k,handleInput:a})))})]})))})]})}export{q as default};
