import{r as n,j as e,b as r,_ as l,T as m}from"./index-27f57fcd.js";function i(){const s=n.useRef(null),a=t=>(t.preventDefault(),s.current.value="",l.error("You Will Be Notified",m.success));return e("section",{className:"bg-[url('../src/Assets/newsLetter.png')] bg-no-repeat bg-cover bg-center bg-fixed h-[25vh] md:h-[40vh] grid place-items-center mt-5",children:r("div",{className:"p-5",children:[e("h1",{className:"font-semibold text-2xl md:text-5xl text-center",children:"THE LATEST"}),e("p",{className:"text-base md:text-2xl text-center mt-2 mb-4 md:mt-5 md:mb-5",children:"Sign up to receive news and updates."}),r("form",{onSubmit:t=>a(t),className:"flex justify-center",children:[e("input",{ref:s,type:"email",name:"email",placeholder:"Email Address",className:"py-1 md:py-2 px-2 md:px-5 outline-none text-black text-sm md:text-base",required:!0}),e("button",{type:"submit",className:"primary-button border border-customGray",children:"SIGN UP"})]})]})})}export{i as default};
