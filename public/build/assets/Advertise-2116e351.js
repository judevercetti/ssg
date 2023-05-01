import{a as e,j as r}from"./jsx-runtime-3bd19ed4.js";import{d}from"./app-2b8926cf.js";import{r as s,L as h}from"./Layout-4952f28b.js";import{Q as u}from"./ReactToastify-55504e39.js";function p(){const{data:t,setData:n,processing:o,post:m,reset:i,errors:a}=d(),c=l=>{l.preventDefault(),m("/advertise",{preserveScroll:!0,preserveState:!0,onSuccess:()=>{u.success("We have received you request, we shall contact you shortly"),i(),n({})}})};return e("div",{className:"container max-w-screen-xl mx-auto flex flex-col md:flex-row py-16",children:r("div",{className:"md:w-1/2 px-5",children:[e("h1",{className:"text-2xl font-semibold",children:"ADVERTISE WITH US"}),e("div",{className:"flex flex-col space-y-3 border-t-2 pt-5",children:r(s.Card,{color:"transparent",shadow:!1,className:"",children:[e(s.Typography,{color:"gray",className:"mt-1 font-normal",children:"Fill in your details and we will contact you soon."}),r("form",{onSubmit:c,className:"mt-8 mb-2 w-80 max-w-screen-lg sm:w-96",children:[r("div",{className:"mb-4 flex flex-col gap-6",children:[r("div",{children:[e(s.Input,{size:"md",label:"Name",value:t.name??"",onChange:l=>n("name",l.target.value),error:a.name}),a.name&&e("span",{className:"text-xs text-red-500",children:a.name})]}),r("div",{children:[e(s.Input,{size:"md",label:"Email",value:t.email??"",onChange:l=>n("email",l.target.value),error:a.email}),a.email&&e("span",{className:"text-xs text-red-500",children:a.email})]}),r("div",{children:[e(s.Input,{size:"md",label:"Telephone",value:t.telephone??"",onChange:l=>n("telephone",l.target.value),error:a.telephone}),a.telephone&&e("span",{className:"text-xs text-red-500",children:a.telephone})]}),r("div",{children:[e(s.Textarea,{size:"md",label:"Message",value:t.message??"",onChange:l=>n("message",l.target.value),error:a.message}),a.message&&e("span",{className:"text-xs text-red-500",children:a.message})]})]}),e(s.Button,{type:"submit",disabled:o,className:"mt-6 bg-primary hover:bg-primary-hover",fullWidth:!0,children:"SEND"}),e(s.Typography,{color:"gray",className:"mt-4 font-normal",children:"South Sudan Global (SSG) is an online news leader focusing on South Sudan, Africa & Beyond."})]})]})})]})})}p.layout=t=>e(h,{children:t});export{p as default};
