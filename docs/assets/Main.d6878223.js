import{g as y,u as v,a as P}from"./api.cd297811.js";import{r as _,o as i,c,a as o,b as e,d as r,t as g,e as w,f as p,w as b,v as h,g as $,h as k,F as C,i as N}from"./index.7d37a87d.js";const I={class:"p-4 w-60 color-card rounded-lg border border-gray-200 m-4 box-shadow"},B={class:"mb-4 text-lg font-bold tracking-tight text-gray-900 dark:text-white"},D={class:"font-bold"},S={class:"my-2 h-24 font-normal text-gray-700 dark:text-gray-300"},V=o("b",null,"Description: ",-1),M={class:"flex justify-between"},j=r(" Go To Board "),T={class:"font-bold p-1"},A=r(" 0 "),F={__name:"CardProgram",props:{program:{type:Object,default:()=>({})}},setup(n){const s=async a=>{await y(),w.push("/board")};return(a,t)=>{const l=_("font-icon");return i(),c("div",I,[o("h5",B,[e(l,{icon:"fa-solid fa-code"}),r(" "+g(n.program.name),1)]),o("small",D,"# "+g(n.program.id),1),o("p",S,[V,r(g(n.program.description),1)]),o("div",M,[o("button",{class:"transition duration-300 p-1 rounded-lg font-bold border-2 bg-color hover:bg-blue-900",onClick:t[0]||(t[0]=m=>s(n.program.id))},[e(l,{icon:"fa-solid fa-laptop-code"}),j]),o("p",T,[e(l,{icon:"fa-solid fa-sitemap"}),A])])])}}};const O={class:"p-4 w-60 color-card rounded-lg border border-gray-200 m-4 box-shadow"},U={class:"mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"},q=r(" Create a New Program "),E={class:"flex flex-col justify-between"},G={for:"Identify",class:"mb-2 text-lg"},L=r(" Name : "),z={for:"Identify",class:"mb-2 text-lg"},H=r(" Description : "),J=r(" Create Program "),K={__name:"CardCreateProgram",setup(n){const s=p(""),a=p(""),t=v(),l=()=>{t.resetProgram(),t.nameProgram=s.value,t.descriptionProgram=a.value};return(m,d)=>{const f=_("font-icon"),x=_("router-link");return i(),c("div",O,[o("h5",U,[e(f,{icon:"fa-solid fa-square-plus"}),q]),o("div",E,[o("label",G,[L,b(o("input",{type:"text",id:"Identify",name:"Identify",class:"border-2 border-sky-800 w-full rounded-lg px-2 py-1 text-sm text-blue-900 focus:border-sky-600 focus:outline-none",placeholder:"Name of the Program",maxlength:"15","onUpdate:modelValue":d[0]||(d[0]=u=>s.value=u)},null,512),[[h,s.value]])]),o("label",z,[H,b(o("input",{type:"text",id:"Identify",name:"Identify",class:"border-2 border-sky-800 rounded-lg w-full px-2 py-1 text-sm text-blue-900 focus:border-sky-600 focus:outline-none",placeholder:"A Short Description of the Program",maxlength:"70","onUpdate:modelValue":d[1]||(d[1]=u=>a.value=u)},null,512),[[h,a.value]])]),e(x,{to:"/board"},{default:$(()=>[o("button",{class:"transition duration-300 p-1 rounded-lg font-bold border-2 my-2 mr-10 bg-color hover:bg-blue-900",onClick:l,type:"submit"},[e(f,{icon:"fa-solid fa-terminal"}),J])]),_:1})])])}}};const Q={class:"contend h-screen"},R={class:"w-full max-h border-2 border-white rounded-2xl overflow-y-scroll relative"},W={class:"sticky top-0 bg-color py-2 px-5"},X={class:"font-bold text-4xl tracking-tight text-white mb-1 text-center border-b-2 pb-2 border-sky-600"},Y=r(" Code:Node "),Z=o("p",{class:"text-xl font-medium mt-2"},"Select a Program or Create One",-1),oo={class:"grid grid-cols-4 px-6 place-items-center"},ro={__name:"Main",setup(n){const s=p([]);k(()=>{P(a)});const a=t=>{s.value=t};return(t,l)=>{const m=_("font-icon");return i(),c("div",Q,[o("div",R,[o("header",W,[o("h1",X,[e(m,{icon:"fa-solid fa-laptop-code",class:"mr-3"}),Y,Z])]),o("main",oo,[e(K),(i(!0),c(C,null,N(s.value,d=>(i(),c("div",null,[e(F,{program:d},null,8,["program"])]))),256))])])])}}};export{ro as default};
