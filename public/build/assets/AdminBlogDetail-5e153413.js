import{a as e,j as l}from"./jsx-runtime-4801b7f6.js";import{a as v,r as N,e as w}from"./app-9f587164.js";import{c as S,C}from"./ckeditor-06686c10.js";import{A}from"./AdminLayout-91d359e7.js";import{Q as d}from"./ReactToastify-32d5ffd5.js";const k=({postData:n,comments:D,categories:g})=>{const{data:r,setData:c,post:p,put:h,errors:t,delete:x}=v(n),[m,u]=N.useState(null),i=a=>c(a.target.id,a.target.value),b=a=>{a.preventDefault(),r.slug?h("",{preserveScroll:!0,preserveState:!0,onSuccess:()=>{d.success("Changes saved")}}):p("/admin/blog",{preserveScroll:!0,preserveState:!0,onSuccess:()=>{d.success("Changes saved")}})},f=a=>{x("")};function y(a){const o=a.target.files[0],s=new FileReader;n?w.Inertia.post(`/admin/blog/${n.slug}/image`,{image:o},{preserveScroll:!0,preserveState:!0,onSuccess:()=>{s.readAsDataURL(o),s.onload=()=>u(s.result),d.success("Image saved")}}):(s.readAsDataURL(o),s.onload=()=>u(s.result),c("image",o))}return e("div",{className:"my-5",children:l("form",{onSubmit:b,className:"flex flex-col-reverse lg:flex-row lg:space-x-10 bg-white px-5",children:[l("div",{className:"lg:w-2/3 mt-10 lg:mt-0",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"articleContent",children:"Article Content"}),e(S.CKEditor,{editor:C,data:r.content,onChange:(a,o)=>c("content",o.getData())}),t.content&&e("span",{className:"text-xs text-red-500",children:t.content})]}),l("div",{className:"w-full lg:w-1/3",children:[l("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"articleTitle",children:"Article Title"}),e("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"title",type:"text",placeholder:"Article Title",value:r.title??"",onChange:i}),t.title&&e("span",{className:"text-xs text-red-500",children:t.title})]}),l("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"articleTitle",children:"Article Description or Summary"}),e("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"description",type:"text",rows:5,placeholder:"Article Description(Make very it Short about 50 words)",value:r.description,onChange:i}),t.description&&e("span",{className:"text-xs text-red-500",children:t.description})]}),l("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"articleCategory",children:"Article Category"}),l("select",{placeholder:"Article Category",id:"category",value:r.category,onChange:i,className:"w-full p-2.5 text-gray-700 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600",children:[e("option",{value:0,children:"Select a category...."}),g.map(a=>e("option",{value:a.id,children:a.name},a.id))]}),t.category&&e("span",{className:"text-xs text-red-500",children:t.category})]}),l("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"articleImage",children:"Article Image"}),(m||r.imageurl)&&e("img",{src:m??`/${r.imageurl}`,alt:"Selected image"}),e("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"image",type:"file",accept:"image/*",onChange:y}),t.image&&e("span",{className:"text-xs text-red-500",children:t.image})]}),l("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"image_description",children:"Image description"}),e("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"image_description",type:"text",placeholder:"Image description",value:r.image_description??"",onChange:i}),t.image_description&&e("span",{className:"text-xs text-red-500",children:t.image_description})]}),l("div",{className:"flex items-center justify-between",children:[e("button",{className:"bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Save Article"}),r.slug&&e("button",{onClick:f,className:"bg-red-500 hover:bg-primary-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",children:"Delete"})]})]})]})})};k.layout=n=>e(A,{children:n});export{k as default};