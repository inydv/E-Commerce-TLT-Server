import{bW as E,bX as o,_ as S,T as c}from"./index-addfd89c.js";const i=async()=>{var n,t,s,e;try{return await E.get(o.admin.order)}catch(a){if((t=(n=a==null?void 0:a.response)==null?void 0:n.data)!=null&&t.MESSAGE)return S.error((e=(s=a==null?void 0:a.response)==null?void 0:s.data)==null?void 0:e.MESSAGE,c.error)}},p=async()=>{var n,t,s,e;try{return await E.get(o.user.order)}catch(a){if((t=(n=a==null?void 0:a.response)==null?void 0:n.data)!=null&&t.MESSAGE)return S.error((e=(s=a==null?void 0:a.response)==null?void 0:s.data)==null?void 0:e.MESSAGE,c.error)}},u=async n=>{var t,s,e,a;try{return await E.delete(o.user.order+"/"+n)}catch(r){if((s=(t=r==null?void 0:r.response)==null?void 0:t.data)!=null&&s.MESSAGE)return S.error((a=(e=r==null?void 0:r.response)==null?void 0:e.data)==null?void 0:a.MESSAGE,c.error)}};export{u as D,p as G,i as a};