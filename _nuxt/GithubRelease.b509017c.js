import{d as s,$ as n,ay as i,a4 as f}from"./entry.ddeac67e.js";import{u as d}from"./useGithub.ad28d676.js";import"./index.44051479.js";const h=s({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(a){const{fetchRelease:r}=d();if(!a.query.tag)return;const{data:u,refresh:e,pending:t}=await n(`github-release-${i(a.query)}`,()=>r(a.query));return{release:u,refresh:e,pending:t}},render({release:a,refresh:r,pending:u}){var t;const e=f();return(t=e==null?void 0:e.default)==null?void 0:t.call(e,{release:a,refresh:r,pending:u})}});export{h as default};
