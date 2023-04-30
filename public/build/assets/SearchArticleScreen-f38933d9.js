import{j as t,a as o}from"./jsx-runtime-6d11cb2e.js";import{a as d,r as m,L as h}from"./app-5fae919e.js";import{B as u}from"./BlogListCard-399a91c2.js";import"./ReactToastify-b07b1eab.js";import{L as p}from"./Layout-d7f57122.js";function x({posts:r}){const{data:n,setData:a,get:s,processing:i}=d(),l=e=>{e.preventDefault(),s("/search",{preserveState:!0,preserveScroll:!0})};return m.useEffect(()=>{const e=new URLSearchParams(window.location.search);a("search_text",e.get("search_text"))},[]),t("div",{children:o("div",{className:"max-w-screen-md mx-auto mt-5",children:[t("form",{onSubmit:l,children:o("div",{className:"flex rounded-md mb-10",children:[t("input",{className:"shadow appearance-none border rounded-l-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"articleTitle",type:"text",placeholder:"Search for an article",value:n.search_text??"",onChange:e=>a("search_text",e.target.value)}),t("button",{type:"submit",disabled:i,className:"bg-primary px-4 rounded-r-md shadow text-white",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:t("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})]})}),r&&r.length==0?t("div",{className:"flex items-center text-center font-semibold text-lg w-full bg-gray-100 p-10",children:t("span",{className:"mx-auto",children:"No posts found matching that query"})}):r.map((e,c)=>t(h,{href:"/"+e.slug,children:t(u,{title:e.title,description:e.description,time:e.updated_at,image:e.imageurl})},c))]})})}x.layout=r=>t(p,{children:r});export{x as default};
