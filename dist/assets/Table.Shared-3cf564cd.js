import{r as m,c as C,j as e,b as w,E as D}from"./index-71041327.js";import{F as M,V as _,A as z,M as T}from"./EditForm.Constant-f4e8b5f6.js";import{A as V}from"./AiFillDelete-9ac49335.js";import{M as g,F as E}from"./index-a93b39b8.js";import{N as k}from"./index-1c3bfd3c.js";import{b as L,I as O}from"./index-dcef02ab.js";import{P}from"./AddProductForm.Constant-a9d3a40d.js";import"./index-977ab6e2.js";const B=({item:n,objkey:o})=>{var s,t,c;return e("td",{className:"td-border p-2",children:e("div",{className:"grid place-content-center",children:e(L.LazyLoadImage,{src:((s=n[o])==null?void 0:s.url)||(((t=n[o])==null?void 0:t.length)>0?(c=n[o][0])==null?void 0:c.url:""),alt:"Image",className:"h-10 w-10",effect:"blur",onError:({currentTarget:i})=>{i.onerror=null,i.src=O.NoImageAvailable}})})})},U=({isViewEnabled:n,isEditEnabled:o,isDeleteEnabled:s,handleInput:t,setId:c,setFormData:i,item:l})=>{const{pathname:h}=C(),p=h.split("/")[2];return e("td",{className:"td-border p-2",children:w("div",{className:"flex gap-5 justify-center items-center",children:[n&&e(z,{size:20,className:"cursor-pointer",onClick:()=>{t({displayName:"View "+p,openForDelete:!1,openForEdit:!1,viewData:l})}}),o&&e(T,{size:20,className:"cursor-pointer",onClick:()=>{c(l==null?void 0:l._id),i(l),t({displayName:"Edit "+p,openForDelete:!1,openForEdit:!0})}}),s&&e(V,{size:20,className:"cursor-pointer",onClick:()=>{t({displayName:"Delete "+p,openForDelete:!0,openForEdit:!1,id:l==null?void 0:l._id})}})]})})},$=({item:n,objkey:o})=>{var s;return e("td",{className:"td-border p-2",children:e("p",{className:"text-center line-clamp",children:((s=n[o])==null?void 0:s.toString())||"-"})})};function X({header:n,data:o,body:s,handleBtn:t,handleSubmit:c,formData:i,setFormData:l,setId:h,isApiSuccessfull:p,setIsApiSuccessfull:b}){const[x,N]=m.useState(!1),[r,y]=m.useState({id:null,viewData:null,displayName:"",openForDelete:!1,openForEdit:!1}),{pathname:v}=C(),d=v.split("/")[2],A=a=>{for(const[f,u]of Object.entries(a))y(F=>({...F,[f]:u}));N(!0)};return m.useEffect(()=>{p&&(N(!1),b(!1))},[p,b]),e("section",{className:"overflow-x-auto pb-2",children:w("table",{className:"table-width",children:[e("thead",{children:e("tr",{children:m.Children.toArray(n==null?void 0:n.map(a=>e("th",{className:"td-border p-2",children:a})))})}),e("tbody",{children:(o==null?void 0:o.length)>0?m.Children.toArray(o==null?void 0:o.map(a=>e("tr",{children:m.Children.toArray(s==null?void 0:s.map(({key:f,type:u,isViewEnabled:F,isEditEnabled:I,isDeleteEnabled:j})=>u===D.Table.Image?e(B,{item:a,objkey:f}):u===D.Table.Action?e(U,{isViewEnabled:F,isEditEnabled:I,isDeleteEnabled:j,handleInput:A,setId:h,setFormData:l,item:a}):e($,{item:a,objkey:f})))}))):e("tr",{children:e("td",{colSpan:"100%",className:"td-border px-5 py-10",children:e(k,{})})})}),e(g,{open:x,setOpen:N,title:r==null?void 0:r.displayName,content:r!=null&&r.openForDelete?`Do you really want to delete this ${d}? This process cannot be undone.`:r!=null&&r.openForEdit?e(E,{submitForm:c,form:d==="product"?P:M[d],formData:i,setFormData:l}):e(E,{formData:r==null?void 0:r.viewData,form:_[d],ViewForm:!0}),handleBtn:r!=null&&r.openForDelete?()=>t(r==null?void 0:r.id):null})]})})}export{X as default};
