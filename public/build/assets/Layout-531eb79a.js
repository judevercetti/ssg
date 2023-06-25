import{j as r,F as u,a as e}from"./jsx-runtime-2f1d627e.js";import{u as w,R as m,a as b,L as i,d as a,r as v}from"./app-5ba9b971.js";import{r as t}from"./index-faf77743.js";import{k as N,Q as k}from"./ReactToastify-f9f2c7e5.js";function C(){const{errors:n}=w().props,[o,h]=m.useState(!1),g=()=>h(l=>!l),[x,p]=m.useState(!1),{auth:d}=w().props,s=b(),c=b(),y=l=>{l.preventDefault(),c.clearErrors(),c.post("/subscribe",{preserveScroll:!0,preserveState:!0,onSuccess:()=>{c.reset(),h(!1),k.success("Thank you for subscribing!")}})},f=l=>{l.preventDefault(),s.get("/search",{preserveState:!0,preserveScroll:!0})};return r(u,{children:[e(N,{}),e("div",{className:"bg-gray-900 h-8 sticky top-0 z-50",children:r("div",{className:"flex justify-between content-center pt-1",children:[r("div",{className:"flex items-center justify-center ml-4",children:[e("a",{href:"https://www.facebook.com/SouthSudanGlobal.SSGTV",title:"Visit our Facebook",className:"mx-2 text-white transition-colors duration-300  hover:text-primary","aria-label":"Facebook",children:e("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"})})}),e("a",{href:"https://twitter.com/ssgglobal-ssg",title:"Visit our Twitter",className:"mx-2 text-white transition-colors duration-300  hover:text-primary ",children:e("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"w-5 h-5 fill-current",children:e("path",{d:"M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"})})}),e("a",{href:"https://youtube.com/@SSGTVSouthSudanGlobal",title:"Visit our Youtube",className:"mx-2 text-white transition-colors duration-300  hover:text-primary",children:r("svg",{viewBox:"0 0 30 30",fill:"currentColor",className:"w-5 h-5 fill-current",children:[e("circle",{cx:"15",cy:"15",r:"4"}),e("path",{d:"M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"})]})}),e(i,{href:"/advertise",className:"hidden md:block ml-10 text-sm text-white transition-colors duration-300  hover:text-primary",children:"Advertise"}),e(i,{href:"/about-us",className:"hidden md:block ml-10 text-sm text-white transition-colors duration-300  hover:text-primary",children:"About Us"}),e(i,{href:"/contact-us",className:"hidden md:block ml-10 text-sm text-white transition-colors duration-300  hover:text-primary",children:"Contact Us"})]}),r("div",{className:"flex md:mr-5",children:[d.user&&r("div",{className:"block",children:[e("span",{className:"ml-10 text-white text-md transition-colors duration-300  hover:text-primary",children:e(i,{href:d.user.role==1?"/admin":"/",children:d.user.name})}),e(i,{href:"/logout",method:"post",as:"button",className:"mx-5 md:ml-10 text-white text-md transition-colors duration-300  hover:text-primary",children:"Logout"})]}),!d.user&&r(u,{children:[e(i,{href:"/login",className:"md:block ml-10 text-white text-md transition-colors duration-300  hover:text-primary",children:"Login"}),r(m.Fragment,{children:[e("button",{onClick:g,className:" ml-5 md:ml-10 text-white px-5 text-md transition-colors duration-300 bg-primary rounded-xl  hover:bg-primary-hover",children:"Subscribe"}),e(t.Dialog,{size:"lg",open:o,handler:g,className:"bg-transparent shadow-none w-full",children:e("form",{onSubmit:y,children:r(t.Card,{className:"mx-auto w-full",children:[e(t.CardHeader,{variant:"gradient",className:"mb-4 grid h-20 place-items-center bg-primary",children:e(t.Typography,{variant:"h5",color:"white",children:"Subscribe to our news letter"})}),r(t.CardBody,{className:"flex flex-col gap-4",children:[e(t.Typography,{children:"By subscribing to our newsletter, you'll gain access to exclusive content, stay updated with the latest news, receive special promotions, and be the first to know about our exciting events, product launches, and industry insights delivered straight to your inbox."}),e(t.Input,{label:"Email",size:"lg",value:c.data.email??"",onChange:l=>c.setData("email",l.target.value),error:n.email}),n.email&&e("span",{className:"text-xs text-red-500",children:n.email})]}),e(t.CardFooter,{className:"pt-2",children:e(t.Button,{variant:"gradient",type:"submit",disabled:c.processing,fullWidth:!0,className:"bg-primary",children:"Subscribe now"})})]})})})]})]})]})]})}),e("nav",{className:"flex flex-wrap items-center justify-between shadow-lg bg-primary sticky top-0 z-50",children:r("div",{className:"container flex flex-wrap items-center justify-between",children:[r("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[r("div",{className:"flex lg:hidden items-center py-2 px-4 bg-white",children:[e(i,{href:"/",children:e("img",{className:"h-8 object-contain",src:"/images/logo.png",alt:"SSG logo"})}),e(i,{href:"/",children:e("h1",{className:"relative pl-5 text-lg text-gray-800 font-bold tracking-tight",children:"South Sudan Global"})})]}),r("div",{className:"flex items-center",children:[e("span",{className:"text-white cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",children:r(t.Popover,{children:[e(t.PopoverHandler,{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})}),e(t.PopoverContent,{className:"w-full",children:e("form",{onSubmit:f,children:r("div",{className:"flex rounded-md",children:[e("input",{className:"shadow appearance-none border rounded-l-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"articleTitle",type:"text",placeholder:"Search for an article",value:s.data.search_text??"",onChange:l=>s.setData("search_text",l.target.value)}),e("button",{type:"submit",disabled:s.processing,className:"bg-primary px-4 rounded-r-md shadow text-white",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})]})})})]})}),e("button",{className:"text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:()=>p(!x),children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})})]})]}),r("div",{onClick:()=>p(!1),className:"lg:flex flex-grow flex-col md:flex-row"+(x?" flex":" hidden"),id:"example-navbar-danger",children:[r("div",{className:"hidden lg:flex items-center py-2 px-8 bg-white",children:[e(i,{href:"/",children:e("img",{className:"h-12 object-contain",src:"/images/logo.png",alt:"SSG logo"})}),e(i,{href:"/",children:e("h1",{className:"relative pl-5 xl:text-2xl ml-3 text-gray-800 font-bold tracking-tight",children:"South Sudan Global"})})]}),r("div",{className:"w-full flex justify-around py-4 mb-4 border-b border-white lg:hidden items-center",children:[e(i,{href:"/advertise",className:"text-white transition-colors duration-300",children:"Advertise"}),e(i,{href:"/about-us",className:"text-white transition-colors duration-300",children:"About Us"}),e(i,{href:"/contact-us",className:"text-white transition-colors duration-300",children:"Contact Us"}),!d.user&&e(i,{href:"/login",className:"text-white transition-colors duration-300",children:"Login"})]}),r("ul",{className:"flex flex-col lg:flex-row items-center list-none lg:ml-auto",children:[e("li",{className:"nav-item",children:e(i,{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",href:"/",children:e("span",{className:"ml-2",children:"Home"})})}),e("li",{className:"nav-item cursor-pointer",children:r(t.Menu,{children:[e(t.MenuHandler,{children:e("div",{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",children:"News"})}),r(t.MenuList,{className:"w-32 font-semibold text-base text-start text-gray-600",children:[r(t.Menu,{placement:"right-start",offset:5,children:[e(t.MenuHandler,{children:r(t.MenuItem,{className:"flex justify-between items-center",children:[e("span",{children:"National"}),e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})]})}),r(t.MenuList,{className:"w-62 font-semibold text-base text-start text-gray-600",children:[e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/politics"),children:"Politics"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/Economy"),children:"Economy"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/Education"),children:"Education"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/Health"),children:"Health"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/agriculture"),children:"Agriculture"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/sports"),children:"Sports"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/entertainment"),children:"Entertainment"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/technology"),children:"Technology"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/environment"),children:"Environment"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/arts-culture-and-beauty"),children:"Arts, Culture & Beauty"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/peace-and-justice"),children:"Peace & Justice"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/states"),children:"States"})]})]}),e(t.MenuItem,{children:e(i,{href:"/category/regional",children:"Regional"})}),e(t.MenuItem,{children:e(i,{href:"/category/africa",children:"Africa"})}),e(t.MenuItem,{children:e(i,{href:"/category/world",children:"World"})})]})]})}),e("li",{className:"nav-item",children:r(i,{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",href:"/category/opinion",children:[e("i",{className:"fab fa-pinterest text-lg leading-lg text-white opacity-75"}),e("span",{className:"ml-2",children:"Opinion"})]})}),e("li",{className:"nav-item",children:r("a",{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",href:"https://www.youtube.com/@SSGTVSouthSudanGlobal",target:"_blank",children:[e("i",{className:"fab fa-pinterest text-lg leading-lg text-white opacity-75"}),e("span",{className:"ml-2",children:"SSGTV"})]})}),e("li",{className:"nav-item",children:r(i,{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",href:"/category/diaspora",children:[e("i",{className:"fab fa-pinterest text-lg leading-lg text-white opacity-75"}),e("span",{className:"ml-2",children:"Diaspora"})]})}),e("li",{className:"nav-item",children:r(i,{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",href:"/category/editorial",children:[e("i",{className:"fab fa-pinterest text-lg leading-lg text-white opacity-75"}),e("span",{className:"ml-2",children:"Editorial"})]})}),e("li",{className:"nav-item cursor-pointer",children:r(t.Menu,{children:[e(t.MenuHandler,{children:e("div",{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",children:"Economy"})}),r(t.MenuList,{className:"flex flex-col space-y-5 w-40 py-4 font-semibold text-base text-start text-gray-600",children:[e(t.MenuItem,{children:e(i,{href:"/category/agribusiness",children:"Agribusiness"})}),e(t.MenuItem,{children:e(i,{href:"/category/mining",children:"Mining"})})]})]})}),e("li",{className:"nav-item cursor-pointer",children:r(t.Menu,{children:[e(t.MenuHandler,{children:e("div",{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",children:"Lifestyle"})}),r(t.MenuList,{className:"flex flex-col space-y-5 w-40 py-4 font-semibold text-base text-start text-gray-600",children:[e(t.MenuItem,{children:e(i,{href:"/category/fashion",children:"Fashion"})}),e(t.MenuItem,{children:e(i,{href:"/category/health-and-fitness",children:"Health & Fitness"})})]})]})}),e("li",{className:"nav-item hidden md:block",children:r("span",{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",href:"#pablo",children:[e("i",{className:"fab fa-pinterest text-lg leading-lg text-white opacity-75"}),e("span",{className:"ml-2",children:r(t.Popover,{children:[e(t.PopoverHandler,{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})}),e(t.PopoverContent,{children:e("form",{onSubmit:f,children:r("div",{className:"flex rounded-md",children:[e("input",{className:"shadow appearance-none border rounded-l-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"articleTitle",type:"text",placeholder:"Search for an article",value:s.data.search_text??"",onChange:l=>s.setData("search_text",l.target.value)}),e("button",{type:"submit",disabled:s.processing,className:"bg-primary px-4 rounded-r-md shadow text-white",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})]})})})]})})]})})]})]})]})})]})}const S=()=>{const[n,o]=v.useState(!0);return localStorage.getItem("cookiesAccepted"),e(u,{children:n&&r("div",{className:"bg-gray-100 flex items-center justify-center px-5 py-5 relative",children:[e("section",{className:"w-full p-5 lg:px-24 absolute top-0 bg-gray-200",children:r("div",{className:"md:flex items-center -mx-3",children:[e("div",{className:"md:flex-1 px-3 mb-5 md:mb-0",children:e("p",{className:"text-center md:text-left text-gray-600 text-xs leading-tight md:pr-12",children:"We use cookies to improve your online experience. At any time, you can go to settings in your browser and manage your cookies settings."})}),e("div",{className:"px-3 text-center",children:e("button",{onClick:()=>{localStorage.setItem("cookiesAccepted",!0),o(!1)},className:"py-2 px-8 bg-primary hover:bg-primary text-white rounded font-bold text-sm shadow-xl",children:"GOT IT!"})})]})}),e("dialog",{id:"cookiesModal",className:"h-auto w-11/12 md:w-1/2 bg-white overflow-hidden rounded-md p-0",children:r("div",{className:"flex flex-col w-full h-auto",children:[r("div",{className:"flex w-full h-auto items-center px-5 py-3",children:[e("div",{className:"w-10/12 h-auto text-lg font-bold",children:"Cookie settings"}),e("div",{className:"flex w-2/12 h-auto justify-end",children:e("button",{className:"cursor-pointer focus:outline-none text-gray-400 hover:text-gray-800",children:e("i",{className:"mdi mdi-close-circle-outline text-2xl"})})})]}),r("div",{className:"flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm",children:[e("div",{className:"flex-1",children:e("p",{children:"Strictly necessary cookies"})}),e("div",{className:"w-10 text-right",children:e("i",{className:"mdi mdi-check-circle text-2xl text-green-400 leading-none"})})]}),r("div",{className:"flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm",children:[e("div",{className:"flex-1",children:e("p",{children:"Cookies that remember your settings"})}),e("div",{className:"w-10 text-right",children:e("i",{className:"mdi mdi-check-circle text-2xl text-green-400 leading-none"})})]}),r("div",{className:"flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm",children:[e("div",{className:"flex-1",children:e("p",{children:"Cookies that measure website use"})}),e("div",{className:"w-10 text-right",children:e("i",{className:"mdi mdi-check-circle text-2xl text-green-400 leading-none"})})]}),r("div",{className:"flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm",children:[e("div",{className:"flex-1",children:e("p",{children:"Cookies that help with our communications and marketing"})}),e("div",{className:"w-10 text-right",children:e("i",{className:"mdi mdi-check-circle text-2xl text-green-400 leading-none"})})]}),e("div",{className:"flex w-full px-5 py-3 justify-end",children:e("button",{className:"py-2 px-8 bg-gray-800 hover:bg-gray-900 text-white rounded font-bold text-sm shadow-xl",children:"Save settings"})})]})})]})})},M=()=>e("footer",{className:"bg-primary",children:r("div",{className:"container p-3 md:p-6 mx-auto",children:[r("div",{className:"lg:flex mx-auto",children:[e("div",{className:"w-full md:-mx-6 lg:w-2/5",children:e("div",{className:"md:px-6",children:r("div",{className:"flex space-x-5 items-center",children:[e(i,{href:"/",className:"bg-white p-3 rounded",children:e("img",{className:"w-40",src:"/images/logo.png",alt:"SSG logo"})}),r("div",{className:"text-start mg:pr-5",children:[e("h1",{className:"text-2xl text-gray-900 font-bold tracking-tight",children:"South Sudan Global"}),e("p",{className:"lg:max-w-sm mt-2 mr-2 text-white",children:"Africa's News Leader"}),r("div",{className:"flex mt-6 -mx-2",children:[e("a",{href:"https://www.facebook.com/SouthSudanGlobal.SSGTV",title:"Visit our Facebook",className:"mx-2 text-white transition-colors duration-300  hover:text-primary-hover","aria-label":"Facebook",children:e("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"})})}),e("a",{href:"https://twitter.com/ssgglobal-ssg",title:"Visit our Twitter",className:"mx-2 text-white transition-colors duration-300  hover:text-primary-hover ",children:e("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"w-5 h-5 fill-current",children:e("path",{d:"M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"})})}),e("a",{href:"https://youtube.com/@SSGTVSouthSudanGlobal",title:"Visit our Youtube",className:"mx-2 text-white transition-colors duration-300  hover:text-primary-hover",children:r("svg",{viewBox:"0 0 30 30",fill:"currentColor",className:"w-5 h-5 fill-current",children:[e("circle",{cx:"15",cy:"15",r:"4"}),e("path",{d:"M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"})]})})]})]})]})})}),e("div",{className:"mt-6 lg:mt-0 lg:flex-1",children:r("div",{className:"grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:[r("div",{children:[e("h2",{className:"uppercase dark:text-white",children:"About"}),e(i,{href:"/about-us",className:"block mt-2 text-sm white text-white hover:underline",children:"About Us"}),e(i,{href:"/contact-us",className:"block mt-2 text-sm white text-white hover:underline",children:"Contact Us"}),e(i,{href:"/advertise",className:"block mt-2 text-sm white text-white hover:underline",children:"Advertise"})]}),r("div",{children:[e("h2",{className:"uppercase dark:text-white",children:"News"}),e(i,{href:"/category/regional",className:"block mt-2 text-sm white text-white hover:underline",children:"Regional"}),e(i,{href:"/category/africa",className:"block mt-2 text-sm white text-white hover:underline",children:"Africa"}),e(i,{href:"/category/world",className:"block mt-2 text-sm white text-white hover:underline",children:"World"})]}),r("div",{children:[e("h2",{className:"uppercase dark:text-white",children:"Categories"}),e(i,{href:"/category/diaspora",className:"block mt-2 text-sm white text-white hover:underline",children:"Diaspora"}),e(i,{href:"/category/health-and-fitness",className:"block mt-2 text-sm white text-white hover:underline",children:"Health & Fitness"}),e(i,{href:"/category/education",className:"block mt-2 text-sm white text-white hover:underline",children:"Education"}),r(t.Menu,{placement:"top",offset:5,children:[e(t.MenuHandler,{children:e("span",{className:"cursor-pointer block mt-2 text-sm white text-white hover:underline",children:"More Categories"})}),r(t.MenuList,{className:"w-62 font-semibold text-base text-start text-gray-600",children:[e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/politics"),children:"Politics"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/Economy"),children:"Economy"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/Education"),children:"Education"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/Health"),children:"Health"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/agriculture"),children:"Agriculture"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/sports"),children:"Sports"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/entertainment"),children:"Entertainment"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/technology"),children:"Technology"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/environment"),children:"Environment"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/arts-culture-and-beauty"),children:"Arts, Culture & Beauty"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/peace-and-justice"),children:"Peace & Justice"}),e(t.MenuItem,{onClick:()=>a.Inertia.get("/category/states"),children:"States"})]})]})]}),r("div",{children:[e("h2",{className:"uppercase dark:text-white",children:"Legal"}),e(i,{href:"/terms-of-use",className:"block mt-2 text-sm white text-white hover:underline",children:"Terms Of Use"}),e(i,{href:"/privacy-policy",className:"block mt-2 text-sm white text-white hover:underline",children:"Privacy Policy"}),e(i,{href:"/cookie-policy",className:"block mt-2 text-sm white text-white hover:underline",children:"Cookie Policy"})]})]})})]}),e("hr",{className:"h-px my-6 bg-gray-200 border-none dark:bg-gray-700"}),e("div",{children:e("p",{className:"text-center text-white text-sm",children:"© 2023 South Sudan Global. All Rights Reserved"})})]})});function j({children:n}){const o=localStorage.getItem("cookiesAccepted");return r("div",{style:{fontFamily:"Roboto"},children:[e(C,{}),e("main",{className:"min-h-screen",children:n}),e(M,{}),!o&&e("div",{className:"absolute sticky bottom-16 md:bottom-8 rounded-mb transform transition-all duration-5000 ease-out",children:e(S,{})})]})}export{j as L};
