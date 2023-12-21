import{r as l,j as s,a as e,bL as c,bM as m,F as d}from"./index-addfd89c.js";import{A as p,a as g}from"./index.esm-379afa01.js";import{a as h}from"./Products.Service-79f57a08.js";import{P as r}from"./ProductsCategoriesAndProducts.Component-902d7a22.js";import"./RSConversion.Pipe-ac2552a8.js";import"./Cart.Pipe-fd18fa2f.js";const n=[{img:"/dist/assets/carousel-1-3.png",title:"SUMMER SALE",desc:"DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",link:"/shop"},{img:"/dist/assets/carousel-2.png",title:"AUTUMN COLLECTION",desc:"DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF FOR NEW ARRIVALS.",link:"/shop"},{img:"/dist/assets/carousel-1-3.png",title:"LOUNGEWEAR LOVE",desc:"DON'T COMPROMISE ON STYLE! GET FLAT 70% OFF FOR NEW ARRIVALS.",link:"/shop"}];function u(){const[a,i]=l.useState(0);return l.useEffect(()=>{const t=setTimeout(()=>{i(a===2?0:a+1)},5e3);return()=>clearInterval(t)}),s("div",{className:"flex overflow-hidden relative",children:[e(p,{size:25,className:"absolute top-0 bottom-0 cursor-pointer z-10 m-auto left-2",onClick:()=>{i(a===0?2:a-1)}}),e("div",{className:"flex transition-all duration-1000 ease-in-out",style:{transform:`translate(${a*-100}vw)`},children:l.Children.toArray(n==null?void 0:n.map(t=>s("div",{className:"grid gap-5 grid-cols-2 items-center w-screen px-10 sm:px-14 bg-customBlack max-h-banner",children:[e("div",{className:"grid items-end justify-center max-h-banner h-full",children:e("img",{src:t.img,alt:"Carousel Image",className:"max-h-banner"})}),s("div",{children:[e("h1",{className:"font-semibold text-base sm:text-xl md:text-4xl mb-5",children:t.title}),e("p",{className:"hidden sm:block text-base md:text-xl mb-10",children:t.desc}),e(c,{className:"primary-button text-sm sm:text-base lg:text-lg",to:t.link,children:"SHOP NOW"})]})]})))}),e(g,{size:25,className:"absolute top-0 bottom-0 cursor-pointer z-10 m-auto right-2",onClick:()=>{i(a===2?0:a+1)}})]})}const o=[{to:m.shop+"?category=men",src:"/dist/assets/mensCollection.jpg",name:"Men"},{to:m.shop+"?category=women",src:"/dist/assets/womenCollection.jpg",name:"Women"}];function x(){return e("div",{className:"px-5 pt-5 sm:px-10",children:e("div",{className:"max-w-[1400px] mx-auto flex gap-x-2",children:l.Children.toArray(o==null?void 0:o.map(({name:a,src:i,to:t})=>s(c,{className:"flex-1 group overflow-hidden relative",to:t,children:[e("img",{src:i,alt:"Category Image",className:"aspect-square h-full w-full max-h-[400px] filter transition-all duration-200 ease-in-out group-hover:grayscale group-hover:blur-sm"}),e("p",{className:"text-xl md:text-5xl font-semibold text-center backdrop-filter backdrop-blur-lg bg-opacity-0 p-2 transition-all duration-200 ease-in-out absolute bottom-0 w-full translate-y-[-1000px] group-hover:translate-y-0",children:a})]})))})})}function b(){return e("div",{className:"py-1 my-5 lg:py-0",children:s("div",{className:"bg-customBlack grid grid-cols-2 place-items-center px-5",children:[s("div",{className:"h-[200px] sm:h-[380px] lg:h-[600px]",children:[e("div",{className:"h-[49%]",children:e("img",{src:"/dist/assets/banner/1.png",alt:"Banner Image",className:"h-[100%]"})}),s("div",{className:"h-[49%]",children:[s("div",{className:"h-[50%] flex gap-1 mt-1",children:[e("img",{src:"/dist/assets/banner/2.png",alt:"Banner Image",className:"h-[100%]"}),e("img",{src:"/dist/assets/banner/3.png",alt:"Banner Image",className:"h-[100%]"})]}),s("div",{className:"h-[50%] flex gap-1 mt-1",children:[e("img",{src:"/dist/assets/banner/4.png",alt:"Banner Image",className:"h-[100%]"}),e("img",{src:"/dist/assets/banner/5.png",alt:"Banner Image",className:"h-[100%]"})]})]})]}),e("div",{children:s("div",{className:"text-center p-6 sm:p-12 lg:p-28 bg-customGray border-radius",children:[e("h1",{className:"font-semibold text-sm sm:text-xl lg:text-4xl",children:"TRENDIEST STYLES AT A STEAL!"}),e("h2",{className:"font-semibold py-2 lg:py-5 text-xs sm:text-base lg:text-2xl",children:"50-80% OFF"}),e("h3",{className:"font-semibold text-xs sm:text-lg lg:text-3xl",children:"12,000+ Styles | 15,000+ Brands"})]})})]})})}function N(){return e("div",{className:"bg-[url('../dist/assets/newsLetter.png')] bg-no-repeat bg-cover bg-center bg-fixed h-[25vh] md:h-[40vh] grid place-items-center mt-5",children:s("div",{className:"p-5",children:[e("h1",{className:"font-semibold text-2xl md:text-5xl text-center",children:"THE LATEST"}),e("p",{className:"text-base md:text-2xl text-center mt-2 mb-4 md:mt-5 md:mb-5",children:"Sign up to receive news and updates."}),s("form",{className:"flex justify-center",children:[e("input",{type:"email",placeholder:"Email Address",className:"py-1 md:py-2 px-2 md:px-5 outline-none text-black text-sm md:text-base",required:!0}),e("button",{className:"primary-button text-sm md:text-base border border-customGray",children:"SIGN UP"})]})]})})}const f=[{img:"/dist/assets/men/shirt.jpg",title:"Shirt",link:"/shop?sub-category=shirt"},{img:"/dist/assets/men/tshirt.jpg",title:"T-Shirt",link:"/shop?sub-category=t-shirt"},{img:"/dist/assets/men/shoes.jpg",title:"Shoes",link:"/shop?sub-category=shoes"},{img:"/dist/assets/men/jacket.jpg",title:"Jacket",link:"/shop?sub-category=jacket"},{img:"/dist/assets/men/trouser.jpg",title:"Trouser",link:"/shop?sub-category=trouser"},{img:"/dist/assets/men/pullovers.jpg",title:"Pullovers",link:"/shop?sub-category=pullovers"},{img:"/dist/assets/men/glasses.jpg",title:"Glasses",link:"/shop?sub-category=glasses"},{img:"/dist/assets/men/watch.jpg",title:"Watches",link:"/shop?sub-category=watches"}],y=[{img:"/dist/assets/women/tops.jpg",title:"Tops",link:"/shop?sub-category=tops"},{img:"/dist/assets/women/skirt.jpg",title:"Skirt",link:"/shop?sub-category=skirt"},{img:"/dist/assets/women/jeans.jpg",title:"Jeans",link:"/shop?sub-category=jeans"},{img:"/dist/assets/women/dress.jpg",title:"Dresses",link:"/shop?sub-category=dress"},{img:"/dist/assets/women/kurti.jpg",title:"Kurti",link:"/shop?sub-category=kurti"},{img:"/dist/assets/women/flats.jpg",title:"Flats",link:"/shop?sub-category=flats"},{img:"/dist/assets/women/heels.jpg",title:"Heels",link:"/shop?sub-category=heels"},{img:"/dist/assets/women/shoes.jpg",title:"Shoes",link:"/shop?sub-category=shoes"}];function w(){const[a,i]=l.useState();return l.useEffect(()=>{window.scrollTo(0,0),async function(){const{data:t}=await h({});t&&t.SUCCESS&&i(t.DATA)}()},[]),s(d,{children:[e(u,{}),e(x,{}),e("div",{className:"px-5 sm:px-10",children:s("div",{className:"max-w-[1400px] mx-auto",children:[e(r,{type:"MENS",data:f,isHeading:!0}),e(r,{type:"WOMENS",data:y,isHeading:!0})]})}),e(b,{}),e("div",{className:"px-5 sm:px-10",children:e("div",{className:"max-w-[1400px] mx-auto",children:e(r,{data:a})})}),e(N,{})]})}export{w as default};