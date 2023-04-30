import{j as t,F as d,a as e}from"./jsx-runtime-3611cead.js";import{u as g,R as m,a as f,L as a,r as v}from"./app-2a384167.js";import{k as N,r,Q as y}from"./ReactToastify-b6d83cce.js";function C(){const{errors:i}=g().props,[n,h]=m.useState(!1),x=()=>h(l=>!l),[u,p]=m.useState(!1),{auth:c}=g().props,o=f(),s=f(),w=l=>{l.preventDefault(),s.clearErrors(),s.post("/subscribe",{preserveScroll:!0,preserveState:!0,onSuccess:()=>{s.reset(),h(!1),y.success("Thank you for subscribing!")}})},b=l=>{l.preventDefault(),o.get("/search",{preserveState:!0,preserveScroll:!0})};return t(d,{children:[e(N,{}),e("div",{className:"hidden md:block bg-gray-900 h-8 sticky top-0 z-50",children:t("div",{className:"flex justify-between content-center pt-1",children:[t("div",{className:"flex items-center justify-center ml-4",children:[e(a,{href:"#",className:"mx-2 text-white transition-colors duration-300  hover:text-primary","aria-label":"Facebook",children:e("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"})})}),e(a,{href:"/",className:"mx-2 text-white transition-colors duration-300  hover:text-primary ",children:e("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"w-5 h-5 fill-current",children:e("path",{d:"M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"})})}),e(a,{href:"/",className:"mx-2 text-white transition-colors duration-300  hover:text-primary",children:t("svg",{viewBox:"0 0 30 30",fill:"currentColor",className:"w-5 h-5 fill-current",children:[e("circle",{cx:"15",cy:"15",r:"4"}),e("path",{d:"M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"})]})}),e(a,{href:"/advertise",className:"ml-10 text-sm text-white transition-colors duration-300  hover:text-primary",children:"Advertise"}),e(a,{href:"/about-us",className:"ml-10 text-sm text-white transition-colors duration-300  hover:text-primary",children:"About us"}),e(a,{href:"/contact-us",className:"ml-10 text-sm text-white transition-colors duration-300  hover:text-primary",children:"Contact us"})]}),t("div",{className:"flex mr-10",children:[c.user&&t(d,{children:[e("span",{className:"ml-10 text-white text-md transition-colors duration-300  hover:text-primary",children:e(a,{href:c.user.role==1?"/admin":"/",children:c.user.name})}),e(a,{href:"/logout",method:"post",as:"button",className:"ml-10 text-white text-md transition-colors duration-300  hover:text-primary",children:"Logout"})]}),!c.user&&t(d,{children:[e(a,{href:"/login",className:"ml-10 text-white text-md transition-colors duration-300  hover:text-primary",children:"Login"}),t(m.Fragment,{children:[e("button",{onClick:x,className:"ml-10 text-white px-5 text-md transition-colors duration-300 bg-primary rounded-xl  hover:bg-yellow-700",children:"Subscribe"}),e(r.Dialog,{size:"md",open:n,handler:x,className:"bg-transparent shadow-none",children:e("form",{onSubmit:w,children:t(r.Card,{className:"mx-auto w-full",children:[e(r.CardHeader,{variant:"gradient",className:"mb-4 grid h-20 place-items-center bg-primary",children:e(r.Typography,{variant:"h5",color:"white",children:"Subscribe to our news letter"})}),t(r.CardBody,{className:"flex flex-col gap-4",children:[e(r.Typography,{children:"By subscribing to our newsletter, you'll gain access to exclusive content, stay updated with the latest news, receive special promotions, and be the first to know about our exciting events, product launches, and industry insights delivered straight to your inbox."}),e(r.Input,{label:"Email",size:"lg",value:s.data.email??"",onChange:l=>s.setData("email",l.target.value),error:i.email}),i.email&&e("span",{className:"text-xs text-red-500",children:i.email})]}),e(r.CardFooter,{className:"pt-2",children:e(r.Button,{variant:"gradient",type:"submit",disabled:s.processing,fullWidth:!0,className:"bg-primary",children:"Subscribe now"})})]})})})]})]})]})]})}),e("nav",{className:"flex flex-wrap items-center justify-between shadow-lg bg-primary sticky top-0 z-50",children:t("div",{className:"container flex flex-wrap items-center justify-between",children:[t("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[t("div",{className:"flex lg:hidden items-center py-2 px-4 bg-white",children:[e(a,{href:"/",children:e("img",{className:"h-8 object-contain",src:"/images/logo.png",alt:""})}),e(a,{href:"/",children:e("h1",{className:"relative pl-5 text-lg text-gray-900 font-bold tracking-tight",children:"South Sudan Global"})})]}),e("button",{className:"text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:()=>p(!u),children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"white",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})})})]}),t("div",{onClick:()=>p(!1),className:"lg:flex flex-grow flex-col md:flex-row"+(u?" flex":" hidden"),id:"example-navbar-danger",children:[t("div",{className:"hidden lg:flex items-center py-2 px-8 bg-white",children:[e(a,{href:"/",children:e("img",{className:"h-12 object-contain",src:"/images/logo.png",alt:""})}),e(a,{href:"/",children:e("h1",{className:"relative pl-5 xl:text-2xl ml-3 text-gray-900 font-bold tracking-tight",children:"South Sudan Global"})})]}),t("div",{className:"w-full flex justify-around py-4 mb-4 border-b border-white lg:hidden items-center",children:[e(a,{href:"/advertise",className:"text-white transition-colors duration-300",children:"Advertise"}),e(a,{href:"/about-us",className:"text-white transition-colors duration-300",children:"About us"}),e(a,{href:"/login",className:"text-white transition-colors duration-300",children:"Login"})]}),t("ul",{className:"flex flex-col lg:flex-row items-center list-none lg:ml-auto",children:[e("li",{className:"nav-item",children:e(a,{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",href:"/",children:e("span",{className:"ml-2",children:"Home"})})}),e("li",{className:"nav-item cursor-pointer",children:t(r.Menu,{children:[e(r.MenuHandler,{children:e("div",{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",children:"News"})}),t(r.MenuList,{className:"flex flex-col space-y-5 w-32 py-4 font-semibold text-base text-start text-gray-600",children:[t(r.Menu,{placement:"right-start",offset:5,children:[e(r.MenuHandler,{children:t(r.MenuItem,{className:"flex justify-between items-center",children:[e("span",{children:"National"}),e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})]})}),t(r.MenuList,{className:"flex flex-col space-y-5 w-40 py-4 font-semibold text-base text-start text-gray-600",children:[e(r.MenuItem,{children:e(a,{href:"/category/Economy",children:"Economy"})}),t(r.MenuItem,{children:[e(a,{href:"/category/Education"}),"Education"]}),e(r.MenuItem,{children:e(a,{href:"/category/Health",children:"Health"})}),e(r.MenuItem,{children:e(a,{href:"/category/Entertainment",children:"Entertainment"})})]})]}),e(r.MenuItem,{children:"Regional"}),e(r.MenuItem,{children:"Africa"}),e(r.MenuItem,{children:"World"})]})]})}),e("li",{className:"nav-item",children:t(a,{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",href:"/category/opinion",children:[e("i",{className:"fab fa-pinterest text-lg leading-lg text-white opacity-75"}),e("span",{className:"ml-2",children:"Opinion"})]})}),e("li",{className:"nav-item",children:t("a",{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",href:"https://www.youtube.com/@SSGTVSouthSudanGlobal",target:"_blank",children:[e("i",{className:"fab fa-pinterest text-lg leading-lg text-white opacity-75"}),e("span",{className:"ml-2",children:"SSGTV"})]})}),e("li",{className:"nav-item",children:t(a,{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",href:"/category/diaspora",children:[e("i",{className:"fab fa-pinterest text-lg leading-lg text-white opacity-75"}),e("span",{className:"ml-2",children:"Diaspora"})]})}),e("li",{className:"nav-item cursor-pointer",children:t(r.Menu,{children:[e(r.MenuHandler,{children:e("div",{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",children:"Economy"})}),t(r.MenuList,{className:"flex flex-col space-y-5 w-40 py-4 font-semibold text-base text-start text-gray-600",children:[e(r.MenuItem,{children:e(a,{href:"/category/agribusiness",children:"Agribusiness"})}),e(r.MenuItem,{children:e(a,{href:"/category/mining",children:"Mining"})})]})]})}),e("li",{className:"nav-item cursor-pointer",children:t(r.Menu,{children:[e(r.MenuHandler,{children:e("div",{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",children:"Lifestyle"})}),t(r.MenuList,{className:"flex flex-col space-y-5 w-40 py-4 font-semibold text-base text-start text-gray-600",children:[e(r.MenuItem,{children:e(a,{href:"/category/fashion",children:"Fashion"})}),e(r.MenuItem,{children:e(a,{href:"/category/health-and-fitness",children:"Health & Fitness"})})]})]})}),e("li",{className:"nav-item md:hidden",children:t(a,{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",href:"/search",children:[e("i",{className:"fab fa-pinterest text-lg leading-lg text-white opacity-75"}),e("span",{className:"ml-2",children:"Search"})]})}),e("li",{className:"nav-item hidden md:block",children:t("span",{className:"px-3 py-2 flex items-center uppercase font-semibold leading-snug text-white hover:opacity-75",href:"#pablo",children:[e("i",{className:"fab fa-pinterest text-lg leading-lg text-white opacity-75"}),e("span",{className:"ml-2",children:t(r.Popover,{children:[e(r.PopoverHandler,{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})}),e(r.PopoverContent,{children:e("form",{onSubmit:b,children:t("div",{className:"flex rounded-md",children:[e("input",{className:"shadow appearance-none border rounded-l-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"articleTitle",type:"text",placeholder:"Search for an article",value:o.data.search_text??"",onChange:l=>o.setData("search_text",l.target.value)}),e("button",{type:"submit",disabled:o.processing,className:"bg-primary px-4 rounded-r-md shadow text-white",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})]})})})]})})]})})]})]})]})})]})}const k=()=>{const[i,n]=v.useState(!0);return localStorage.getItem("cookiesAccepted"),e(d,{children:i&&t("div",{className:"bg-gray-100 flex items-center justify-center px-5 py-5 relative",children:[e("section",{className:"w-full p-5 lg:px-24 absolute top-0 bg-gray-200",children:t("div",{className:"md:flex items-center -mx-3",children:[e("div",{className:"md:flex-1 px-3 mb-5 md:mb-0",children:e("p",{className:"text-center md:text-left text-gray-600 text-xs leading-tight md:pr-12",children:"We use cookies to improve your online experience. At any time, you can go to settings in your browser and manage your cookies settings."})}),t("div",{className:"px-3 text-center",children:[e("button",{id:"btn",className:"py-2 px-8 bg-gray-400 hover:bg-gray-900 text-white rounded font-bold text-sm shadow-xl mr-3",children:"Cookie settings"}),e("button",{id:"btn",onClick:()=>{localStorage.setItem("cookiesAccepted",!0),n(!1)},className:"py-2 px-8 bg-primary hover:bg-primary text-white rounded font-bold text-sm shadow-xl",children:"Accept cookies"})]})]})}),e("dialog",{id:"cookiesModal",className:"h-auto w-11/12 md:w-1/2 bg-white overflow-hidden rounded-md p-0",children:t("div",{className:"flex flex-col w-full h-auto",children:[t("div",{className:"flex w-full h-auto items-center px-5 py-3",children:[e("div",{className:"w-10/12 h-auto text-lg font-bold",children:"Cookie settings"}),e("div",{className:"flex w-2/12 h-auto justify-end",children:e("button",{className:"cursor-pointer focus:outline-none text-gray-400 hover:text-gray-800",children:e("i",{className:"mdi mdi-close-circle-outline text-2xl"})})})]}),t("div",{className:"flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm",children:[e("div",{className:"flex-1",children:e("p",{children:"Strictly necessary cookies"})}),e("div",{className:"w-10 text-right",children:e("i",{className:"mdi mdi-check-circle text-2xl text-green-400 leading-none"})})]}),t("div",{className:"flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm",children:[e("div",{className:"flex-1",children:e("p",{children:"Cookies that remember your settings"})}),e("div",{className:"w-10 text-right",children:e("i",{className:"mdi mdi-check-circle text-2xl text-green-400 leading-none"})})]}),t("div",{className:"flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm",children:[e("div",{className:"flex-1",children:e("p",{children:"Cookies that measure website use"})}),e("div",{className:"w-10 text-right",children:e("i",{className:"mdi mdi-check-circle text-2xl text-green-400 leading-none"})})]}),t("div",{className:"flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm",children:[e("div",{className:"flex-1",children:e("p",{children:"Cookies that help with our communications and marketing"})}),e("div",{className:"w-10 text-right",children:e("i",{className:"mdi mdi-check-circle text-2xl text-green-400 leading-none"})})]}),e("div",{className:"flex w-full px-5 py-3 justify-end",children:e("button",{className:"py-2 px-8 bg-gray-800 hover:bg-gray-900 text-white rounded font-bold text-sm shadow-xl",children:"Save settings"})})]})})]})})},M=()=>e("footer",{className:"bg-primary",children:t("div",{className:"container p-6 mx-auto",children:[t("div",{className:"lg:flex",children:[e("div",{className:"w-full -mx-6 lg:w-2/5",children:t("div",{className:"px-6",children:[t("div",{className:"flex space-x-5 items-center",children:[e(a,{href:"/",className:"bg-white p-3 rounded",children:e("img",{className:"w-40 h-24",src:"/images/logo.png",alt:""})}),t("div",{className:"text-start pr-5",children:[e("h1",{className:"text-2xl text-gray-900 font-bold tracking-tight",children:"South Sudan Global"}),e("p",{className:"lg:max-w-sm mt-2 text-white",children:"Join 31,000+ other and never miss out on new tips, tutorials, and more."})]})]}),t("div",{className:"flex mt-6 -mx-2",children:[e("a",{href:"#",className:"mx-2 white transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400","aria-label":"Reddit",children:e("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"})})}),e("a",{href:"#",className:"mx-2 white transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400","aria-label":"Facebook",children:e("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"})})}),e("a",{href:"#",className:"mx-2 white transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400","aria-label":"Github",children:e("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"})})})]})]})}),e("div",{className:"mt-6 lg:mt-0 lg:flex-1",children:t("div",{className:"grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:[t("div",{children:[e("h3",{className:"text-gray-300 uppercase dark:text-white",children:"About"}),e("a",{href:"/about-us",className:"block mt-2 text-sm white text-white hover:underline",children:"About us"}),e("a",{href:"/contact-us",className:"block mt-2 text-sm white text-white hover:underline",children:"Contact us"}),e("a",{href:"/advertise",className:"block mt-2 text-sm white text-white hover:underline",children:"Advertise"})]}),t("div",{children:[e("h3",{className:"text-gray-300 uppercase dark:text-white",children:"News"}),e("a",{href:"#",className:"block mt-2 text-sm white text-white hover:underline",children:"National"}),e("a",{href:"#",className:"block mt-2 text-sm white text-white hover:underline",children:"Africa"}),e("a",{href:"#",className:"block mt-2 text-sm white text-white hover:underline",children:"World"})]}),t("div",{children:[e("h3",{className:"text-gray-300 uppercase dark:text-white",children:"Categories"}),e("a",{href:"/diaspora",className:"block mt-2 text-sm white text-white hover:underline",children:"Diaspora"}),e("a",{href:"/health-and-fitness",className:"block mt-2 text-sm white text-white hover:underline",children:"Health & Fitness"}),e("a",{href:"/education",className:"block mt-2 text-sm white text-white hover:underline",children:"Education"})]}),t("div",{children:[e("h3",{className:"text-gray-300 uppercase dark:text-white",children:"Contact"}),e("a",{href:"tel:+15266548965",className:"block mt-2 text-sm white text-white hover:underline",children:"+1 526 654 8965"}),e("a",{href:"mailto:southsudanglobal@gmail.com",className:"block mt-2 text-xs md:text-sm white text-white hover:underline",children:"southsudanglobal@gmail.com"})]})]})})]}),e("hr",{className:"h-px my-6 bg-gray-200 border-none dark:bg-gray-700"}),e("div",{children:t("p",{className:"text-center text-white text-sm",children:["Copyright © South Sudan Global 2023. All rights reserved •",e(a,{href:"/terms-of-use",className:"hover:underline",children:" Terms of Use"})," •",e(a,{href:"/privacy-policy",className:"hover:underline",children:" Privacy Policy"})]})})]})});function A({children:i}){const n=localStorage.getItem("cookiesAccepted");return t("div",{style:{fontFamily:"Roboto"},children:[e(C,{}),e("main",{className:"min-h-screen",children:i}),!n&&e("div",{className:"sticky bottom-10 transform transition-all duration-5000 ease-out",children:e(k,{})}),e(M,{})]})}export{A as L};
