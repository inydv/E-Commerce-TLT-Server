import{r as i,b as t,F as o,j as e}from"./index-59e93b5a.js";import{C as c,a as d,b as m,B as p,c as g,d as h}from"./index-3758a81c.js";import{a as u}from"./Products.Service-d182c129.js";const r=[{img:"womenTops",title:"Tops",link:"/shop?subCategories=tops"},{img:"womenDress",title:"Dresses",link:"/shop?subCategories=dress"},{img:"womenKurti",title:"Kurti",link:"/shop?subCategories=kurti"},{img:"womenSaree",title:"Saree",link:"/shop?subCategories=saree"},{img:"womenTunic",title:"Tunic",link:"/shop?subCategories=tunic"}],f=({heading:a})=>t("div",{className:"flex items-center gap-x-5 py-5 sm:py-10",children:[e("div",{className:"heading-line"}),e("span",{className:"heading",children:a}),e("div",{className:"heading-line"})]});function S(){const[a,l]=i.useState([]);return i.useEffect(()=>{window.scrollTo(0,0),async function(){var n;const{data:s}=await u({});s&&s.SUCCESS&&l((n=s.DATA)==null?void 0:n.LISTS)}()},[]),t(o,{children:[e(c,{}),e(d,{}),e("div",{className:"page-padding",children:t("div",{className:"page-width",children:[e(f,{heading:"WOMENS CATEGORIES"}),e("div",{className:"flex flex-wrap gap-2 justify-center items-center",children:i.Children.toArray(r==null?void 0:r.map(s=>e(m,{item:s})))})]})}),e(p,{}),e("div",{className:"page-padding",children:e("div",{className:"page-width",children:e("div",{className:"flex flex-wrap gap-2 justify-center items-center",children:i.Children.toArray(a==null?void 0:a.map(s=>e(g,{item:s})))})})}),e(h,{})]})}export{S as default};