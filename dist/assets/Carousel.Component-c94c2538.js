import{r as l,b as r,j as a,L as n}from"./index-27f57fcd.js";import{r as c}from"./index-289c162c.js";import{b as o,I as m}from"./index-3af4be7d.js";var d=c.GenIcon,u=function(e){return d({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 0 1 0-12.9l246-178a8 8 0 0 1 12.7 6.5v46.8z"}}]})(e)},x=c.GenIcon,h=function(e){return x({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z"}}]})(e)};const i=[{img:"carousel13",title:"SUMMER SALE",desc:"DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",link:"/shop"},{img:"carousel2",title:"AUTUMN COLLECTION",desc:"DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF FOR NEW ARRIVALS.",link:"/shop"},{img:"carousel13",title:"LOUNGEWEAR LOVE",desc:"DON'T COMPROMISE ON STYLE! GET FLAT 70% OFF FOR NEW ARRIVALS.",link:"/shop"}];function b(){const[t,e]=l.useState(0);return l.useEffect(()=>{const s=setTimeout(()=>{e(t===2?0:t+1)},5e3);return()=>clearInterval(s)}),r("section",{className:"flex overflow-hidden relative",children:[a(u,{size:25,className:"absolute top-0 bottom-0 cursor-pointer z-10 m-auto left-2",onClick:()=>{e(t===0?2:t-1)}}),a("div",{className:"flex transition-all duration-1000 ease-in-out",style:{transform:`translate(${t*-100}vw)`},children:l.Children.toArray(i==null?void 0:i.map(s=>r("div",{className:"grid gap-5 grid-cols-2 items-center w-screen px-10 sm:px-14 bg-customBlack max-h-banner",children:[a("div",{className:"grid items-end justify-center max-h-banner h-full",children:a(o.LazyLoadImage,{src:m[s.img],alt:"Carousel Image",className:"max-h-banner",effect:"blur"})}),r("div",{children:[a("h1",{className:"font-semibold text-base sm:text-xl md:text-4xl mb-3 md::mb-5",children:s.title}),a("p",{className:"hidden sm:block text-base md:text-xl mb-5 md:mb-10",children:s.desc}),a(n,{className:"primary-button !text-xs sm:!text-base md:px-6 md:py-4",to:s.link,children:"SHOP NOW"})]})]})))}),a(h,{size:25,className:"absolute top-0 bottom-0 cursor-pointer z-10 m-auto right-2",onClick:()=>{e(t===2?0:t+1)}})]})}export{b as default};
