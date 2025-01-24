import{o as f,A as h,_ as p,T as u,E as I,r as d,u as G,b as E,j as m,R as P}from"./index-ba53f85b.js";import{R as O}from"./RSConversion.Pipe-ac2552a8.js";import{M as w,F as V}from"./index-b0050ccf.js";const $=async n=>{var l,a,e,s;try{return await f.post(h.payment.verification,n)}catch(o){if((a=(l=o==null?void 0:o.response)==null?void 0:l.data)!=null&&a.MESSAGE)return p.error((s=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:s.MESSAGE,u.error)}},F=async n=>{var l,a,e,s;try{return await f.post(h.payment.createOrder,n)}catch(o){if((a=(l=o==null?void 0:o.response)==null?void 0:l.data)!=null&&a.MESSAGE)return p.error((s=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:s.MESSAGE,u.error)}},k=async()=>{var n,l,a,e;try{return await f.get(h.payment.keyId)}catch(s){if((l=(n=s==null?void 0:s.response)==null?void 0:n.data)!=null&&l.MESSAGE)return p.error((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.MESSAGE,u.error)}},D=[{type:"text",label:"Name *",name:"name",autoFocus:!0,placeholder:"Lokesh Yadav",className:"form-input-text",required:!0,labelClass:"form-label"},{type:"email",label:"Email *",name:"email",placeholder:"nitin@mail.com",className:"form-input-text",required:!0,labelClass:"form-label",containerClass:"mt-4"},{type:"number",label:"Phone *",name:"phone",placeholder:"1234567890",className:"form-input-text",required:!0,labelClass:"form-label",containerClass:"mt-4"},{type:"text",label:"Address *",name:"address",placeholder:"House no. 123, street no. 1",className:"form-input-text",required:!0,labelClass:"form-label",containerClass:"mt-4"},{type:"text",label:"City *",name:"city",placeholder:"New Delhi",className:"form-input-text",required:!0,labelClass:"form-label",containerClass:"mt-4"},{type:"text",label:"State *",name:"state",placeholder:"State",className:"form-input-text",required:!0,labelClass:"form-label",containerClass:"mt-4"},{type:"number",label:"Pincode *",name:"pincode",placeholder:"123456",className:"form-input-text",required:!0,labelClass:"form-label",containerClass:"mt-4"}];function N(n,l){for(const[a,e]of Object.entries(l)){const s=n[a];if(e!=null&&e.required&&!(s!=null&&s.length))return{STATUS:!1,MESSAGE:`${a.toUpperCase()} IS REQUIRED`};if((e==null?void 0:e.type)===I.Validation.Email){if(!/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/.test(s))return{STATUS:!1,MESSAGE:"EMAIL IS NOT VALID"};const S=s.split("@");if(S[0].length>64)return{STATUS:!1,MESSAGE:"EMAIL IS NOT VALID"};if(S[1].split(".").some(function(A){return A.length>63}))return{STATUS:!1,MESSAGE:"EMAIL IS NOT VALID"}}else if((e==null?void 0:e.type)===I.Validation.Number&&((s==null?void 0:s.length)<(e==null?void 0:e.minLength)||(s==null?void 0:s.length)>(e==null?void 0:e.maxLength)))return{STATUS:!1,MESSAGE:`${a.toUpperCase()} MUST HAVE ${e==null?void 0:e.minLength} CHAR`}}return{STATUS:!0}}const Z={name:{required:!0},email:{required:!0,type:"email"},phone:{required:!0,type:"number",minLength:10,maxLength:10},address:{required:!0},city:{required:!0},state:{required:!0},pincode:{required:!0,type:"number",minLength:6,maxLength:6}},R={AddressForm:Z},b=({title:n,price:l,containerClass:a,priceClass:e})=>E("div",{className:`flex justify-between gap-5 ${a}`,children:[m("h1",{className:"font-semibold text-base sm:text-lg",children:n}),m("p",{className:`text-base sm:text-lg ${e}`,children:O(l)})]});function K({cart:n,shippingCharges:l=0}){const[a,e]=d.useState(0),[s,o]=d.useState(!1),[t,S]=d.useState({}),[T,A]=d.useState(null),q=G(),M=r=>{r.preventDefault();const i=N(t,R.AddressForm);if(i.STATUS)localStorage.setItem("address",JSON.stringify(t)),o(!1);else return p.error(i==null?void 0:i.MESSAGE,u.error)},z=()=>{if(N(t,R.AddressForm).STATUS){if(!a)return p.error("ADD ATLEAST 1 PRODUCT",u.error)}else return p.error("ENTER VALID SHIPPING DETAILS",u.error);U()},L=r=>{const i={key:T,amount:l+a,currency:"INR",name:"The Little Things",description:"This is Simple but exciting E-commerce WebApp",image:"/src/Assets/logo.svg",order_id:r,prefill:{name:t==null?void 0:t.name,email:t==null?void 0:t.email,contact:t==null?void 0:t.phone},notes:{address:`${t==null?void 0:t.address}, ${t==null?void 0:t.city}, ${t==null?void 0:t.state}, ${t==null?void 0:t.pincode}`},theme:{color:"#000000"},handler:async function(c){const y={paymentInfo:{razorpay_payment_id:c.razorpay_payment_id,razorpay_order_id:c.razorpay_order_id,razorpay_signature:c.razorpay_signature},shippingInformation:t,orderItems:n==null?void 0:n.map(C=>({product:C.product._id,quantity:C.quantity}))},{data:x}=await $(y);x&&x.SUCCESS&&(localStorage.removeItem("cart"),q(P.myOrders))}};new window.Razorpay(i).open()},U=async()=>{var i;const{data:r}=await F({amount:l+a});r&&r.SUCCESS&&L((i=r==null?void 0:r.DATA)==null?void 0:i.id)},_=async()=>{var i;const{data:r}=await k();r&&r.SUCCESS&&A((i=r==null?void 0:r.DATA)==null?void 0:i.key_id)};return d.useEffect(()=>{const r=(g,c)=>{var y;return g+(c==null?void 0:c.quantity)*((y=c==null?void 0:c.product)==null?void 0:y.price)},i=n==null?void 0:n.reduce(r,0);e(i||0)},[n]),d.useEffect(()=>{const r=JSON.parse(localStorage.getItem("address"))||{};S(r),_()},[]),E("section",{className:"bg-customGray max-w-[400px] w-full p-5",children:[m(b,{price:a,title:"Sub Total",containerClass:"mb-3 sm:mb-5"}),m(b,{price:l,title:"Shipping Charges",containerClass:"mb-3 sm:mb-5"}),m(b,{price:l+a,title:"Gross Total",containerClass:"mb-5 sm:mb-10",priceClass:"text-green-500"}),E("div",{className:"flex justify-end gap-5",children:[m("button",{className:"font-semibold text-base py-2 px-4 bg-black",onClick:()=>o(!0),children:"Address"}),m("button",{className:"font-semibold text-base py-2 px-4 bg-black",onClick:()=>z(),children:"Payment"})]}),m(w,{open:s,setOpen:o,title:"Shipping Address",content:m(V,{submitForm:M,form:D,formData:t,setFormData:S})})]})}export{K as default};