function r(e,i=!1){let t=localStorage.getItem("cart");t=t&&t.length>0?JSON.parse(t):[];const a=t.findIndex(n=>n.product._id===e.product._id);i?t.splice(a,1):a>=0?t[a].quantity=e.quantity:t.push(e),localStorage.setItem("cart",JSON.stringify(t)),window.dispatchEvent(new Event("storage"))}export{r as U};
