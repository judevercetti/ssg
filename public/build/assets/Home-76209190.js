import{a as e,j as t,F as s}from"./jsx-runtime-9a3232fc.js";import{L as r}from"./app-38797170.js";import{B as x}from"./BlogListCard-ae693e1d.js";import{B as g}from"./BlogAsideCard-764120a7.js";import{L as f}from"./Layout-23d8cd13.js";import{A as u}from"./adsense-bad36a0d.js";import"./index-fd75a90a.js";import"./ReactToastify-59d3e5fd.js";function p({title:i,content:a,time:c,image:d}){return e("div",{children:t("div",{className:"w-full rounded-lg lg:max-w-sm",children:[e("img",{className:"object-cover w-full h-48",src:"/"+d,alt:"image"}),t("div",{className:"p-4",children:[e("h3",{className:"text-lg font-bold mb-1 line-clamp-2 hover:underline",children:i}),e("p",{className:"mb-2 leading-normal text-gray-500 line-clamp-2",children:a}),e("p",{className:"text-gray-500 mb-1",children:e("small",{children:e("u",{children:new Date(c).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})})})]})]})})}function w({title:i,time:a,image:c}){return e("div",{children:e("div",{className:"py-2 border-t border-gray-400",children:t("div",{className:"flex flex-wrap lg:flex-nowrap items-center",children:[e("div",{className:"w-full lg:w-auto mr-2 mb-8 lg:mb-0",children:e("img",{className:"block w-40 h-16 object-cover",src:"/"+c,alt:""})}),e("div",{className:"w-full lg:w-9/12 mr-2 mb-10 lg:mb-0",children:e("div",{className:"max-w-2xl",children:e("h3",{className:"text-sm font-semibold line-clamp-3 hover:underline",children:i})})})]})})})}function b({latest:i,latests:a,blog:c,blog_category:d,trending_posts:o}){return t(s,{children:[t("section",{className:"flex flex-col lg:flex-row lg:space-x-5 justify-between items-center bg-gray-50 p-2 lg:p-10",children:[e("div",{className:"w-full lg:w-2/4",children:e(r,{href:"/"+i.slug,title:i.title,children:e("img",{src:i.imageurl,alt:i.title,className:"h-72 lg:h-96 w-full object-cover"})})}),t("div",{className:"lg:flex-1 space-y-4 mt-2 sm:text-center text-left",children:[e("h1",{className:"text-2xl lg:text-3xl font-bold text-primary hover:underline text-left line-clamp-4",children:e(r,{href:"/"+i.slug,children:i.title})}),e("p",{className:"max-w-xl text-lg leading-relaxed text-gray-800 sm:mx-auto lg:ml-0 text-left line-clamp-5",children:i.description}),e(r,{href:"/"+i.slug,className:"block text-primary rounded-md hover:underline text-left",children:"Read more"})]}),t("div",{className:"hidden md:block w-full lg:w-1/4 text-gray-800",children:[e("h2",{className:"font-semibold text-lg",children:"LATEST ARTICLES"}),a&&a.map((l,m)=>e(r,{href:"/"+l.slug,children:e(w,{image:l.imageurl,title:l.title})},m)),t(r,{href:"https://www.youtube.com/@SSGTVSouthSudanGlobal",className:"flex space-x-2 items-center font-semibold text-base text-primary float-right hover:underline",children:[e("span",{children:"See more videos"}),e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5 animate-pulse",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"})})]})]})]}),t("div",{id:"whole-page",className:"container mx-auto flex flex-wrap pb-6",children:[t("section",{id:"left",className:"w-full md:w-2/3 flex flex-col items-center px-3 divide-y-2 divide-yellow-200",children:[t("div",{className:"w-full justify-start mb-5",children:[e("h2",{className:"ml-6 mb-2 mt-5 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl",children:e("span",{className:"text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500",children:"Latest"})}),e("div",{className:"grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-5",children:a&&a.map((l,m)=>e(r,{href:"/"+l.slug,children:e(p,{title:l.title,content:l.description,time:l.updated_at,image:l.imageurl})},m))})]}),e("div",{className:"w-full justify-start",children:d&&d.map((l,m)=>e("div",{children:l.blog.length==0?e(s,{}):t(s,{children:[e("h2",{className:"ml-6 mb-2 my-10 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl",children:t("span",{className:"text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500",children:["  ",l.name]})}),l.blog.map((n,h)=>e(r,{href:"/"+n.slug,children:e(x,{image:n.imageurl,title:n.title,description:n.description,time:n.created_at},n.id)},h)),e(r,{href:"/category/"+l.slug,type:"submit",className:"m-2 p-2 text-sm font-medium text-white bg-gradient-to-r to-black from-yellow-500  focus:ring-4 focus:outline-none",children:"More "+l.name})]})},m))})]}),t("aside",{id:"right",className:"w-full md:w-1/3 flex flex-col items-center px-3",children:[e("div",{className:"text-sm py-6 sticky top-20",children:e("div",{className:"w-full text-center",children:e(u,{client:"ca-pub-8694698492521431",slot:"6063218924",adTest:"on",style:{display:"block"},format:"auto",responsive:"true"})})}),t("div",{className:"sticky top-20",children:[e("h2",{className:"ml-6 mb-2 mt-5 text-sm font-extrabold text-gray-900 dark:text-white md:text-xs lg:text-sm",children:e("span",{className:"text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500",children:"Trending Posts"})}),o&&o.map((l,m)=>e(r,{href:"/"+l.slug,children:e(g,{image:l.imageurl,title:l.title,time:l.created_at})},m))]})]})]})]})}b.layout=i=>e(f,{children:i});export{b as default};