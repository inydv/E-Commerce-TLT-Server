import{o as L,S as j,U as v,a2 as H,l as h,_ as t,V as E,X as F,a as B,f as l,n as O}from"./useTheme-e718d1d9.js";import{r as m,j as p}from"./index-27f57fcd.js";import{M as V,P as W,S as q}from"./Slide-85381f96.js";function X(o){return L("MuiDrawer",o)}const Y=j("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]),ir=Y,G=["BackdropProps"],J=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],M=(o,r)=>{const{ownerState:e}=o;return[r.root,(e.variant==="permanent"||e.variant==="persistent")&&r.docked,r.modal]},K=o=>{const{classes:r,anchor:e,variant:a}=o,s={root:["root"],docked:[(a==="permanent"||a==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${h(e)}`,a!=="temporary"&&`paperAnchorDocked${h(e)}`]};return O(s,X,r)},Q=v(V,{name:"MuiDrawer",slot:"Root",overridesResolver:M})(({theme:o})=>({zIndex:(o.vars||o).zIndex.drawer})),C=v("div",{shouldForwardProp:H,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:M})({flex:"0 0 auto"}),Z=v(W,{name:"MuiDrawer",slot:"Paper",overridesResolver:(o,r)=>{const{ownerState:e}=o;return[r.paper,r[`paperAnchor${h(e.anchor)}`],e.variant!=="temporary"&&r[`paperAnchorDocked${h(e.anchor)}`]]}})(({theme:o,ownerState:r})=>t({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(o.vars||o).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},r.anchor==="left"&&{left:0},r.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="right"&&{right:0},r.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="left"&&r.variant!=="temporary"&&{borderRight:`1px solid ${(o.vars||o).palette.divider}`},r.anchor==="top"&&r.variant!=="temporary"&&{borderBottom:`1px solid ${(o.vars||o).palette.divider}`},r.anchor==="right"&&r.variant!=="temporary"&&{borderLeft:`1px solid ${(o.vars||o).palette.divider}`},r.anchor==="bottom"&&r.variant!=="temporary"&&{borderTop:`1px solid ${(o.vars||o).palette.divider}`})),R={left:"right",right:"left",top:"down",bottom:"up"};function rr(o){return["left","right"].indexOf(o)!==-1}function or(o,r){return o.direction==="rtl"&&rr(r)?R[r]:r}const er=m.forwardRef(function(r,e){const a=E({props:r,name:"MuiDrawer"}),s=F(),b={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:D="left",BackdropProps:y,children:$,className:u,elevation:P=16,hideBackdrop:T=!1,ModalProps:{BackdropProps:N}={},onClose:z,open:f=!1,PaperProps:g={},SlideProps:I,TransitionComponent:S=q,transitionDuration:k=b,variant:c="temporary"}=a,U=B(a.ModalProps,G),d=B(a,J),x=m.useRef(!1);m.useEffect(()=>{x.current=!0},[]);const _=or(s,D),i=t({},a,{anchor:D,elevation:P,open:f,variant:c},d),n=K(i),w=p(Z,t({elevation:c==="temporary"?P:0,square:!0},g,{className:l(n.paper,g.className),ownerState:i,children:$}));if(c==="permanent")return p(C,t({className:l(n.root,n.docked,u),ownerState:i,ref:e},d,{children:w}));const A=p(S,t({in:f,direction:R[_],timeout:k,appear:x.current},I,{children:w}));return c==="persistent"?p(C,t({className:l(n.root,n.docked,u),ownerState:i,ref:e},d,{children:A})):p(Q,t({BackdropProps:t({},y,N,{transitionDuration:k}),className:l(n.root,n.modal,u),open:f,ownerState:i,onClose:z,hideBackdrop:T,ref:e},d,U,{children:A}))}),pr=er;export{pr as D,X as a,ir as d,or as g,rr as i};
