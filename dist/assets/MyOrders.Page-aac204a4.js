import{r as n,a as r,j as l,bQ as j,bR as m}from"./index-addfd89c.js";import{G as R}from"./Order.Service-148a5d02.js";import{R as v}from"./RSConversion.Pipe-ac2552a8.js";import{N as T}from"./NotAvailable.Component-62ad9905.js";import{A as B}from"./TableHeader-334b072f.js";function S(s){return s==null?void 0:s.slice(0,10)}function Q(){var o,c;const[s,w]=n.useState([]),[E,C]=n.useState(!1),[D,G]=n.useState(null),M=async()=>{const{data:a}=await R();a&&a.SUCCESS&&w(a.DATA)};return n.useEffect(()=>{window.scrollTo(0,0),M()},[]),r("div",{className:"p-5 sm:px-10",children:r("div",{className:"overflow-x-auto pb-2",children:l("table",{className:"min-w-[800px] w-full",children:[r("thead",{children:r("tr",{children:n.Children.toArray((c=(o=B)==null?void 0:o.myOrder)==null?void 0:c.map(a=>r("th",{className:"border border-gray-500 p-2",children:a})))})}),r("tbody",{children:(s==null?void 0:s.length)>0?n.Children.toArray(s==null?void 0:s.map(a=>{var d,h,i,b,p,f,g,N;return l("tr",{children:[r("td",{className:"border border-gray-500 p-2",children:n.Children.toArray((d=a==null?void 0:a.orderItems)==null?void 0:d.map(({quantity:y,product:e},O)=>{var x,t,A;return l("div",{className:O===((x=a==null?void 0:a.orderItems)==null?void 0:x.length)-1?"flex gap-5 items-center":"flex gap-5 items-center mb-4",children:[r("img",{src:((t=e==null?void 0:e.images)==null?void 0:t.length)>0&&((A=e==null?void 0:e.images[0])==null?void 0:A.url),alt:e==null?void 0:e.name,className:"h-14 w-14 aspect-square",onError:({currentTarget:I})=>{I.onerror=null,I.src="/dist/assets/NoImageAvailable.jpg"}}),l("div",{children:[r("h1",{className:"line-clamp mb-1",children:e==null?void 0:e.name}),l("h1",{children:[v(e==null?void 0:e.price)," x ",y," ="," ",v((e==null?void 0:e.price)*y)]})]})]})}))}),r("td",{className:"border border-gray-500 p-2",children:l("p",{className:"text-center",children:["Name: ",(h=a==null?void 0:a.shippingInformation)==null?void 0:h.name," ",r("br",{}),"Phone: ",(i=a==null?void 0:a.shippingInformation)==null?void 0:i.phone," ",r("br",{}),"Email: ",(b=a==null?void 0:a.shippingInformation)==null?void 0:b.email]})}),r("td",{className:"border border-gray-500 p-2",children:r("p",{className:"text-center",children:((p=a==null?void 0:a.shippingInformation)==null?void 0:p.address)+", "+((f=a==null?void 0:a.shippingInformation)==null?void 0:f.city)+", "+((g=a==null?void 0:a.shippingInformation)==null?void 0:g.state)+", "+((N=a==null?void 0:a.shippingInformation)==null?void 0:N.pincode)})}),r("td",{className:"border border-gray-500 p-2",children:r("p",{className:"text-center",children:a==null?void 0:a.orderStatus})}),r("td",{className:"border border-gray-500 p-2",children:l("p",{className:"text-center",children:["Created At: ",S(a==null?void 0:a.createdAt)," ",r("br",{}),"Delivery At: ",S(a==null?void 0:a.deliveredAt)]})}),r("td",{className:"border border-gray-500 p-2",children:r("div",{className:"flex gap-5 justify-center items-center",children:r(j,{size:20,className:"cursor-pointer"})})})]})})):r("tr",{children:r("td",{colSpan:"100%",className:"border border-gray-500 px-5 py-10",children:r(T,{})})})}),r(m,{setOpen:C,open:E,openForDelete:!0,content:`Do you really want to delete this ${name}? This process cannot be undone.`,handleBtn:()=>handleBtn(D),name})]})})})}export{Q as default};