import{a as e,j as r}from"./jsx-runtime-a3f8762a.js";import{L as s}from"./app-977f3f54.js";import{L as d}from"./Layout-759a151d.js";import{B as n}from"./BlogListCard-83b99937.js";import{B as o}from"./BlogAsideCard-a218ce35.js";import{A as m}from"./AdsComponent-c25e3d3c.js";import"./index-50fc3732.js";import"./ReactToastify-b943f05b.js";function x({blogs:a,category:c,trending_posts:i}){return e("div",{children:r("div",{className:"container mx-auto flex flex-wrap py-6",children:[e("section",{className:"w-full md:w-2/3 flex flex-col items-center px-3",children:r("div",{className:"w-full justify-start mb-5",children:[e("h2",{className:"mb-4 mt-5 text-2xl font-extrabold text-gray-900 dark:text-white",children:e("span",{className:"text-transparent bg-clip-text bg-primary",children:c})}),a&&a.map((t,l)=>e(s,{href:"/"+t.slug,children:e(n,{title:t.title,description:t.description,time:t.updated_at,image:t.imageurl})},l)),a&&a.length==0&&e("div",{className:"flex items-center text-center font-semibold text-lg w-full bg-gray-100 p-10",children:e("span",{className:"mx-auto",children:"No posts found in this category"})}),e("div",{className:"w-full",children:e(m,{dataAdSlot:"6063218924"})})]})}),r("aside",{className:"w-full md:w-1/3 flex flex-col items-center px-3",children:[e("div",{className:"w-full",children:e(m,{dataAdSlot:"6063218924"})}),r("div",{className:"sticky top-32",children:[e("h2",{className:"mb-2 mt-5 text-sm font-extrabold text-gray-900 dark:text-white md:text-xs lg:text-base",children:e("span",{className:"text-transparent bg-clip-text bg-primary",children:"Most Popular"})}),i&&i.map((t,l)=>e(s,{href:"/"+t.slug,children:e(o,{image:t.imageurl,title:t.title,time:t.created_at},l)},l))]})]})]})})}x.layout=a=>e(d,{children:a});export{x as default};