import{j as r,F as x,a as e}from"./jsx-runtime-a3f8762a.js";import{u as p,R as u,a as k,L as a,d as l,r as S}from"./app-977f3f54.js";import{r as t}from"./index-50fc3732.js";import{k as M,Q as I}from"./ReactToastify-b943f05b.js";function L(){const{errors:n}=p().props,[d,g]=u.useState(!1),y=()=>g(i=>!i),[h,f]=u.useState(!1),[b,v]=u.useState(!1),{auth:m}=p().props,s=k(),o=k(),{url:N}=p(),c=i=>i.includes(N)&&N!="/"?"border-b-2 border-gray-800":"",C=i=>{i.preventDefault(),o.clearErrors(),o.post("/subscribe",{preserveScroll:!0,preserveState:!0,onSuccess:()=>{o.reset(),g(!1),I.success("Thank you for subscribing!")}})},w=i=>{i.preventDefault(),s.get("/search",{preserveState:!0,preserveScroll:!0})};return r(x,{children:[e(M,{}),e("div",{className:"bg-gray-50 h-9 sticky top-0 z-50",children:r("div",{className:"flex justify-between content-center py-1 border-b",children:[r("div",{className:"flex items-center justify-center",children:[e(a,{href:"/advertise",className:"hidden md:block ml-10 text-sm text-black transition-colors duration-300  hover:text-primary",children:"Advertise"}),e(a,{href:"/about-us",className:"hidden md:block ml-10 text-sm text-black transition-colors duration-300  hover:text-primary",children:"About Us"}),e(a,{href:"/contact-us",className:"hidden md:block ml-10 text-sm text-black transition-colors duration-300  hover:text-primary",children:"Contact Us"})]}),r("div",{className:"flex items-center justify-center",children:[e("a",{href:"https://www.facebook.com/SouthSudanGlobal.SSGTV",title:"Visit our Facebook",className:"mx-2 text-black transition-colors duration-300  hover:text-primary","aria-label":"Facebook",children:e("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"})})}),e("a",{href:"https://twitter.com/ssgglobal-ssg",title:"Visit our Twitter",className:"mx-2 text-black transition-colors duration-300  hover:text-primary ",children:e("svg",{className:"h-4 w-4 fill-current",viewBox:"0 0 1200 1227",fill:"currentColor",children:e("path",{d:"M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"})})}),e("a",{href:"https://youtube.com/@SSGTVSouthSudanGlobal",title:"Visit our Youtube",className:"mx-2 text-black transition-colors duration-300  hover:text-primary",children:r("svg",{viewBox:"0 0 30 30",fill:"currentColor",className:"w-5 h-5 fill-current",children:[e("circle",{cx:"15",cy:"15",r:"4"}),e("path",{d:"M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"})]})})]}),r("div",{className:"flex md:mr-5",children:[m.user&&r("div",{className:"block",children:[e("span",{className:"ml-10 text-black text-md transition-colors duration-300  hover:text-primary",children:e(a,{href:m.user.role==1?"/admin":"/",children:m.user.name})}),e(a,{href:"/logout",method:"post",as:"button",className:"mx-5 md:ml-10 text-black text-md transition-colors duration-300  hover:text-primary",children:"Logout"})]}),!m.user&&r(x,{children:[e(a,{href:"/login",className:"md:block ml-10 text-black text-md transition-colors duration-300  hover:text-primary",children:"Login"}),r(u.Fragment,{children:[e("button",{onClick:y,className:" ml-5 md:ml-10 mr-2 text-white px-5 text-md transition-colors duration-300 bg-primary rounded-xl  hover:bg-primary-hover",children:"Subscribe"}),e(t.Dialog,{size:"lg",open:d,handler:y,className:"bg-transparent shadow-none w-full",children:e("form",{onSubmit:C,children:r(t.Card,{className:"mx-auto w-full",children:[e(t.CardHeader,{variant:"gradient",className:"mb-4 grid h-20 place-items-center bg-primary",children:e(t.Typography,{variant:"h5",color:"white",children:"Subscribe to our news letter"})}),r(t.CardBody,{className:"flex flex-col gap-4",children:[e(t.Typography,{children:"By subscribing to our newsletter, you'll gain access to exclusive content, stay updated with the latest news, receive special promotions, and be the first to know about our exciting events, product launches, and industry insights delivered straight to your inbox."}),e(t.Input,{label:"Email",size:"lg",value:o.data.email??"",onChange:i=>o.setData("email",i.target.value),error:n.email}),n.email&&e("span",{className:"text-xs text-red-500",children:n.email})]}),e(t.CardFooter,{className:"pt-2",children:e(t.Button,{variant:"gradient",type:"submit",disabled:o.processing,fullWidth:!0,className:"bg-primary",children:"Subscribe now"})})]})})})]})]})]})]})}),r("nav",{className:"items-center justify-between border-b bg-gray-50 sticky top-0 z-50",children:[r("div",{className:"flex items-center justify-center py-2 px-4 border-b",children:[e(a,{href:"/",children:e("img",{className:"h-8 md:h-14 object-contain",src:"/images/logo.png",alt:"SSG logo"})}),e(a,{href:"/",children:e("h1",{className:"relative pl-5 text-xl md:text-3xl text-gray-800 font-bold tracking-tight",children:"South Sudan Global"})})]}),r("div",{className:"flex flex-wrap items-center justify-between",children:[e("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:r("div",{className:"flex items-center",children:[e("button",{className:"text-gray-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:()=>v(!b),children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})}),e("span",{className:"text-gray-800 ml-2 cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",children:h?e("form",{onSubmit:w,className:"transition-all duration-500 ease-in-out transform translate-x-0 opacity-100",children:r("div",{className:"flex rounded-md",children:[e("input",{className:"shadow appearance-none border rounded-l-md w-full py-1.5 px-3 text-gray-700 text-sm font-normal leading-tight focus:outline-none focus:shadow-outline",id:"articleTitle",type:"text",placeholder:"Search for an article",value:s.data.search_text??"",onChange:i=>s.setData("search_text",i.target.value)}),e("button",{type:"submit",disabled:s.processing,className:"bg-primary px-4 rounded-r-md shadow text-white",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})]})}):e("button",{onClick:()=>f(!h),children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})})]})}),r("div",{onClick:()=>v(!1),className:"lg:flex flex-grow flex-col md:flex-row"+(b?" flex":" hidden"),id:"example-navbar-danger",children:[r("div",{className:"w-full flex justify-around py-4 mb-4 border-b lg:hidden items-center",children:[e(a,{href:"/advertise",className:"text-gray-800 transition-colors duration-300",children:"Advertise"}),e(a,{href:"/about-us",className:"text-gray-800 transition-colors duration-300",children:"About Us"}),e(a,{href:"/contact-us",className:"text-gray-800 transition-colors duration-300",children:"Contact Us"}),!m.user&&e(a,{href:"/login",className:"text-gray-800 transition-colors duration-300",children:"Login"})]}),r("ul",{className:"flex flex-col lg:flex-row items-end justify-center list-none lg:mx-auto",children:[e("li",{className:"",children:e(a,{className:"px-3 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary",href:"/",children:e("span",{className:"ml-2",children:"Home"})})}),e("li",{className:" cursor-pointer",children:r(t.Menu,{children:[e(t.MenuHandler,{children:e("div",{className:`px-3 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary ${c(["/category/regional","/category/africa","/category/world"])}`,children:"News"})}),r(t.MenuList,{className:"w-32 font-semibold text-base text-start text-primary",children:[r(t.Menu,{placement:"right-start",offset:5,children:[e(t.MenuHandler,{children:r(t.MenuItem,{className:"flex justify-between items-center",children:[e("span",{children:"National"}),e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})]})}),r(t.MenuList,{className:"w-62 font-semibold text-base text-start text-primary hover:text-primary",children:[e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/politics"),children:"Politics"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/Economy"),children:"Business"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/Education"),children:"Education"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/Health"),children:"Health"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/agriculture"),children:"Agriculture"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/sports"),children:"Sports"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/entertainment"),children:"Entertainment"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/technology"),children:"Technology"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/environment"),children:"Environment"}),r(t.Menu,{placement:"right-start",offset:5,children:[e(t.MenuHandler,{children:r(t.MenuItem,{className:"flex justify-between items-center",children:[e("span",{children:"Lifestyle"}),e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})]})}),r(t.MenuList,{className:"w-62 font-semibold text-base text-start text-primary hover:text-primary",children:[e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/fashion"),children:"Fashion"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/health-and-fitness"),children:"Health & Fitness"})]})]}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/arts-culture-and-beauty"),children:"Arts, Culture & Beauty"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/peace-and-justice"),children:"Peace & Justice"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/states"),children:"States"})]})]}),e(t.MenuItem,{children:e(a,{href:"/category/regional",children:"Regional"})}),e(t.MenuItem,{children:e(a,{href:"/category/africa",children:"Africa"})}),e(t.MenuItem,{children:e(a,{href:"/category/world",children:"World"})})]})]})}),e("li",{className:"",children:e(a,{className:`px-3 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary ${c("/category/opinion")}`,href:"/category/opinion",children:e("span",{className:"ml-2",children:"Opinion"})})}),e("li",{className:"",children:e("a",{className:"px-3 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary",href:"https://www.youtube.com/@SSGTVSouthSudanGlobal",target:"_blank",children:e("span",{className:"ml-2",children:"SSGTV"})})}),e("li",{className:"",children:e(a,{className:`px-3 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary ${c("/category/diaspora")}`,href:"/category/diaspora",children:e("span",{className:"ml-2",children:"Diaspora"})})}),e("li",{className:"",children:e(a,{className:`px-3 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary ${c("/category/editorial")}`,href:"/category/editorial",children:e("span",{className:"ml-2",children:"Editorial"})})}),e("li",{className:"",children:e(a,{className:`px-3 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary ${c("/category/economy")}`,href:"/category/economy",children:e("span",{className:"ml-2",children:"Economy"})})}),e("li",{className:"",children:e(a,{className:`px-3 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary ${c("/category/sports")}`,href:"/category/sports",children:e("span",{className:"ml-2",children:"Sport"})})}),e("li",{className:"hidden md:block",children:e("span",{className:"px-3 py-1 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary",href:"#pablo",children:e("span",{className:"ml-2",children:h?e("form",{onSubmit:w,className:"transition-all duration-500 ease-in-out transform translate-x-0 opacity-100",children:r("div",{className:"flex rounded-md",children:[e("input",{className:"shadow appearance-none border rounded-l-md w-full py-1.5 px-3 text-gray-700 text-sm font-normal leading-tight focus:outline-none focus:shadow-outline",id:"articleTitle",type:"text",placeholder:"Search for an article",value:s.data.search_text??"",onChange:i=>s.setData("search_text",i.target.value)}),e("button",{type:"submit",disabled:s.processing,className:"bg-primary px-4 rounded-r-md shadow text-white",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})]})}):e("button",{onClick:()=>f(!h),children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})})})})]})]})]})]})]})}const H=()=>{const[n,d]=S.useState(!0);return localStorage.getItem("cookiesAccepted"),e(x,{children:n&&r("div",{className:"bg-gray-100 flex items-center justify-center px-5 py-5 relative",children:[e("section",{className:"w-full p-5 lg:px-24 absolute top-0 bg-gray-200",children:r("div",{className:"md:flex items-center -mx-3",children:[e("div",{className:"md:flex-1 px-3 mb-5 md:mb-0",children:e("p",{className:"text-center md:text-left text-gray-600 text-xs leading-tight md:pr-12",children:"We use cookies to improve your online experience. At any time, you can go to settings in your browser and manage your cookies settings."})}),e("div",{className:"px-3 text-center",children:e("button",{onClick:()=>{localStorage.setItem("cookiesAccepted",!0),d(!1)},className:"py-2 px-8 bg-primary hover:bg-primary text-white rounded font-bold text-sm shadow-xl",children:"GOT IT!"})})]})}),e("dialog",{id:"cookiesModal",className:"h-auto w-11/12 md:w-1/2 bg-white overflow-hidden rounded-md p-0",children:r("div",{className:"flex flex-col w-full h-auto",children:[r("div",{className:"flex w-full h-auto items-center px-5 py-3",children:[e("div",{className:"w-10/12 h-auto text-lg font-bold",children:"Cookie settings"}),e("div",{className:"flex w-2/12 h-auto justify-end",children:e("button",{className:"cursor-pointer focus:outline-none text-gray-400 hover:text-gray-800",children:e("i",{className:"mdi mdi-close-circle-outline text-2xl"})})})]}),r("div",{className:"flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm",children:[e("div",{className:"flex-1",children:e("p",{children:"Strictly necessary cookies"})}),e("div",{className:"w-10 text-right",children:e("i",{className:"mdi mdi-check-circle text-2xl text-green-400 leading-none"})})]}),r("div",{className:"flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm",children:[e("div",{className:"flex-1",children:e("p",{children:"Cookies that remember your settings"})}),e("div",{className:"w-10 text-right",children:e("i",{className:"mdi mdi-check-circle text-2xl text-green-400 leading-none"})})]}),r("div",{className:"flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm",children:[e("div",{className:"flex-1",children:e("p",{children:"Cookies that measure website use"})}),e("div",{className:"w-10 text-right",children:e("i",{className:"mdi mdi-check-circle text-2xl text-green-400 leading-none"})})]}),r("div",{className:"flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm",children:[e("div",{className:"flex-1",children:e("p",{children:"Cookies that help with our communications and marketing"})}),e("div",{className:"w-10 text-right",children:e("i",{className:"mdi mdi-check-circle text-2xl text-green-400 leading-none"})})]}),e("div",{className:"flex w-full px-5 py-3 justify-end",children:e("button",{className:"py-2 px-8 bg-gray-800 hover:bg-gray-900 text-white rounded font-bold text-sm shadow-xl",children:"Save settings"})})]})})]})})},j=()=>e("footer",{className:"bg-gray-50",children:r("div",{className:"container p-3 md:p-6 mx-auto",children:[r("div",{className:"lg:flex mx-auto",children:[e("div",{className:"w-full md:-mx-6 lg:w-2/5",children:e("div",{className:"md:px-6",children:r("div",{className:"flex space-x-5 items-center",children:[e(a,{href:"/",className:"p-3 rounded",children:e("img",{className:"w-40",src:"/images/logo.png",alt:"SSG logo"})}),r("div",{className:"text-start mg:pr-5",children:[e("h1",{className:"text-2xl text-gray-900 font-bold tracking-tight",children:"South Sudan Global"}),e("p",{className:"lg:max-w-sm mt-2 mr-2",children:"Africa's News Leader"}),r("div",{className:"flex mt-6 -mx-2",children:[e("a",{href:"https://www.facebook.com/SouthSudanGlobal.SSGTV",title:"Visit our Facebook",className:"mx-2 hover:text-primary transition-colors duration-300","aria-label":"Facebook",children:e("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"})})}),e("a",{href:"https://twitter.com/ssgglobal-ssg",title:"Visit our Twitter",className:"mx-2 hover:text-primary transition-colors duration-300 ",children:e("svg",{className:"h-4 w-4 fill-current",viewBox:"0 0 1200 1227",fill:"currentColor",children:e("path",{d:"M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"})})}),e("a",{href:"https://youtube.com/@SSGTVSouthSudanGlobal",title:"Visit our Youtube",className:"mx-2 hover:text-primary transition-colors duration-300",children:r("svg",{viewBox:"0 0 30 30",fill:"currentColor",className:"w-5 h-5 fill-current",children:[e("circle",{cx:"15",cy:"15",r:"4"}),e("path",{d:"M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"})]})})]})]})]})})}),e("div",{className:"mt-6 lg:mt-0 lg:flex-1",children:r("div",{className:"grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:[r("div",{children:[e("h2",{className:"uppercase dark:hover:text-primary font-semibold",children:"About"}),e(a,{href:"/about-us",className:"block mt-2 text-sm white hover:text-primary hover:underline",children:"About Us"}),e(a,{href:"/contact-us",className:"block mt-2 text-sm white hover:text-primary hover:underline",children:"Contact Us"}),e(a,{href:"/advertise",className:"block mt-2 text-sm white hover:text-primary hover:underline",children:"Advertise"})]}),r("div",{children:[e("h2",{className:"uppercase dark:hover:text-primary font-semibold",children:"News"}),e(a,{href:"/category/national",className:"block mt-2 text-sm white hover:text-primary hover:underline",children:"National"}),e(a,{href:"/category/regional",className:"block mt-2 text-sm white hover:text-primary hover:underline",children:"Regional"}),e(a,{href:"/category/africa",className:"block mt-2 text-sm white hover:text-primary hover:underline",children:"Africa"}),e(a,{href:"/category/world",className:"block mt-2 text-sm white hover:text-primary hover:underline",children:"World"})]}),r("div",{children:[e("h2",{className:"uppercase dark:hover:text-primary font-semibold",children:"Categories"}),e(a,{href:"/category/diaspora",className:"block mt-2 text-sm white hover:text-primary hover:underline",children:"Diaspora"}),e(a,{href:"/category/health-and-fitness",className:"block mt-2 text-sm white hover:text-primary hover:underline",children:"Health & Fitness"}),e(a,{href:"/category/education",className:"block mt-2 text-sm white hover:text-primary hover:underline",children:"Education"}),r(t.Menu,{placement:"top",offset:5,children:[e(t.MenuHandler,{children:e("span",{className:"cursor-pointer block mt-2 text-sm white hover:text-primary hover:underline",children:"More Categories"})}),r(t.MenuList,{className:"w-62 font-semibold text-base text-start text-gray-600",children:[e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/politics"),children:"Politics"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/Economy"),children:"Economy"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/Education"),children:"Education"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/Health"),children:"Health"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/agriculture"),children:"Agriculture"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/sports"),children:"Sports"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/entertainment"),children:"Entertainment"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/technology"),children:"Technology"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/environment"),children:"Environment"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/arts-culture-and-beauty"),children:"Arts, Culture & Beauty"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/peace-and-justice"),children:"Peace & Justice"}),e(t.MenuItem,{onClick:()=>l.Inertia.get("/category/states"),children:"States"})]})]})]}),r("div",{children:[e("h2",{className:"uppercase dark:hover:text-primary font-semibold",children:"Legal"}),e(a,{href:"/terms-of-use",className:"block mt-2 text-sm white hover:text-primary hover:underline",children:"Terms Of Use"}),e(a,{href:"/privacy-policy",className:"block mt-2 text-sm white hover:text-primary hover:underline",children:"Privacy Policy"}),e(a,{href:"/cookie-policy",className:"block mt-2 text-sm white hover:text-primary hover:underline",children:"Cookie Policy"})]})]})})]}),e("hr",{className:"h-px my-6 bg-gray-200 border-none dark:bg-gray-700"}),e("div",{children:e("p",{className:"text-center text-sm",children:"©️2024 South Sudan Global. All Rights Reserved."})})]})});function T({children:n}){const d=localStorage.getItem("cookiesAccepted");return r("div",{style:{fontFamily:"Roboto"},children:[e(L,{}),e("main",{className:"min-h-screen",children:n}),e(j,{}),!d&&e("div",{className:"absolute sticky bottom-16 md:bottom-8 rounded-mb transform transition-all duration-5000 ease-out",children:e(H,{})})]})}export{T as L};
