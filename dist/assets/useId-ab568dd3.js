import{r as u,f as c}from"./index-59e93b5a.js";let n=0;function f(t){const[e,a]=u.useState(t),o=t||e;return u.useEffect(()=>{e==null&&(n+=1,a(`mui-${n}`))},[e]),o}const s=c["useId".toString()];function r(t){if(s!==void 0){const e=s();return t??e}return f(t)}export{r as u};