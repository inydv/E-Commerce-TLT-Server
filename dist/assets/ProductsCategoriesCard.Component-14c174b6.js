import{b as o,j as e,L as s}from"./index-3aafef44.js";import{b as t,I as r}from"./index-13f30b14.js";function n({item:a}){return o("article",{className:"aspect-square h-full w-full max-h-[344px] max-w-[48%] md:max-w-[344px] overflow-hidden relative group",children:[e(t.LazyLoadImage,{src:r[a.img],alt:"Category Image",className:"h-full w-full transition-all duration-200 ease-in-out group-hover:scale-125 group-hover:opacity-25",onError:({currentTarget:l})=>{l.onerror=null,l.src=r.NoImageAvailable}}),e(s,{to:a.link,className:"absolute top-0 h-full w-full hidden items-center justify-center group-hover:flex",children:e("p",{className:"text-2xl md:text-4xl font-semibold",children:a.title})})]})}export{n as default};