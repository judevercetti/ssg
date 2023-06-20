import{j as a,a as e}from"./jsx-runtime-e1341a81.js";import{a as d,r as m,L as h}from"./app-468f263b.js";import{B as u}from"./BlogListCard-314f7360.js";import"./index-f2ff8f6f.js";import"./ReactToastify-9a6f0096.js";import{L as p}from"./Layout-52ff230d.js";import{A as f}from"./AdsComponent-9ed096ab.js";function x({posts:r}){const{data:s,setData:o,get:l,processing:i}=d(),n=t=>{t.preventDefault(),l("/search",{preserveState:!0,preserveScroll:!0})};return m.useEffect(()=>{const t=new URLSearchParams(window.location.search);o("search_text",t.get("search_text"))},[]),a("div",{className:"flex flex-col lg:flex-row",children:[a("div",{className:"max-w-screen-md mt-5 ml-auto",children:[e("form",{onSubmit:n,children:a("div",{className:"flex rounded-md mb-10 mx-5",children:[e("input",{className:"shadow appearance-none border rounded-l-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"articleTitle",type:"text",placeholder:"Search for an article",value:s.search_text??"",onChange:t=>o("search_text",t.target.value)}),e("button",{type:"submit",disabled:i,className:"bg-primary px-4 rounded-r-md shadow text-white",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})]})}),r&&r.length==0?e("div",{className:"flex items-center text-center font-semibold text-lg w-full bg-gray-100 p-10",children:e("span",{className:"mx-auto",children:"No posts found matching that query"})}):r.map((t,c)=>e(h,{href:"/"+t.slug,children:e(u,{title:t.title,description:t.description,time:t.updated_at,image:t.imageurl})},c))]}),e("aside",{className:"w-full lg:w-1/4 pt-5",children:e("div",{className:"w-full sticky top-20",children:e(f,{dataAdSlot:"6063218924"})})})]})}x.layout=r=>e(p,{children:r});export{x as default};
