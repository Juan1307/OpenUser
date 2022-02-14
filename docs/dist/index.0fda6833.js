import{j as b,R as m,r as a,u as N,C as y,a as _,S as k,b as h,c as S}from"./vendor.c7380184.js";const T=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}};T();const E="modulepreload",x={},L="/OpenUser/",u=function(c,i){return!i||i.length===0?c():Promise.all(i.map(n=>{if(n=`${L}${n}`,n in x)return;x[n]=!0;const t=n.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":E,t||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),t)return new Promise((f,s)=>{o.addEventListener("load",f),o.addEventListener("error",s)})})).then(()=>c())};const e=b.exports.jsx,l=b.exports.jsxs,j=b.exports.Fragment,O=m.lazy(()=>u(()=>import("./RandomPosts.bc1aad27.js"),["dist/RandomPosts.bc1aad27.js","dist/vendor.c7380184.js","dist/UserHook.bdaf98fc.js","dist/UsersSrv.8c88fece.js","dist/HelpersDom.741977e8.js"])),g=m.lazy(()=>u(()=>import("./TheListUsers.0ddb0691.js"),["dist/TheListUsers.0ddb0691.js","dist/vendor.c7380184.js","dist/NotFound.47208df2.js","dist/UsersSrv.8c88fece.js","dist/HelpersDom.741977e8.js"])),R=m.lazy(()=>u(()=>import("./TheUserMain.3c436232.js"),["dist/TheUserMain.3c436232.js","dist/vendor.c7380184.js","dist/UserHook.bdaf98fc.js","dist/UsersSrv.8c88fece.js","dist/Dynamic.4af3e651.js"])),w=m.lazy(()=>u(()=>import("./TheModuleUser.5ef608fe.js"),["dist/TheModuleUser.5ef608fe.js","dist/UserHook.bdaf98fc.js","dist/vendor.c7380184.js","dist/UsersSrv.8c88fece.js","dist/Dynamic.4af3e651.js","dist/UserCardMini.6bc24ab7.js"])),P=m.lazy(()=>u(()=>import("./ThePostUser.53cd44bf.js"),["dist/ThePostUser.53cd44bf.js","dist/UserHook.bdaf98fc.js","dist/vendor.c7380184.js","dist/UsersSrv.8c88fece.js","dist/UserCardMini.6bc24ab7.js","dist/HelpersDom.741977e8.js"]));function A(){const[p,c]=a.exports.useState(0),[,i]=N(),n=a.exports.useRef(null),t=a.exports.useRef(null),r={setTheme(){localStorage.setItem("theme-page","dark-theme")},removeTheme(){localStorage.removeItem("theme-page")}};a.exports.useEffect((s=document)=>{const d=localStorage.getItem("theme-page");d&&(s.body.classList.add(d),t.current.checked=!0)},[]),a.exports.useEffect((s=window)=>{const d=()=>{const{round:v}=Math;c(v(s.scrollY))};return s.addEventListener("scroll",d,{passive:!0}),()=>s.removeEventListener("scroll",d)},[p]);const o=({target:{checked:s}})=>{document.body.classList.toggle("dark-theme"),s?r.setTheme():r.removeTheme()},f=()=>window.scrollTo({top:0,behavior:"smooth"});return l(j,{children:[e(y,{appear:!0,in:!0,timeout:1e3,unmountOnExit:!0,classNames:"ani-fade",nodeRef:n,children:l("main",{className:"App container-md",ref:n,children:[l("header",{className:"d-flex justify-content-between align-items-center",children:[l("div",{className:"App-title",children:[e("h1",{className:"App-title-text display-3 mb-0",onClick:()=>i("/OpenUser"),children:"Demo Open User"}),l("p",{children:["Una demo que provee datos abiertos de APIs publicas como :\xA0",e("a",{href:"https://jsonplaceholder.typicode.com/",className:"link-priamry",target:"_blank",rel:"noreferrer noopener",children:"JSON placeholder"})]})]}),l("div",{className:"text-center cursor",children:[e("label",{htmlFor:"switch-theme",children:e("small",{children:"Tema."})}),e("div",{className:"form-check form-switch d-flex justify-content-center",children:e("input",{type:"checkbox",ref:t,onClick:o,className:"form-check-input App-theme",id:"switch-theme"})})]})]}),l("section",{className:"row",children:[e("section",{className:"col-12 col-sm-7 col-md-8 col-lg-9",children:e(_,{base:"/OpenUser",children:l(k,{children:[e(h,{path:"/",children:e(a.exports.Suspense,{fallback:null,children:e(g,{})})}),e(h,{path:"/user/:index",children:s=>e(a.exports.Suspense,{fallback:null,children:e(R,{params:s})})}),e(h,{path:"/user/:index/:path",children:s=>e(a.exports.Suspense,{fallback:null,children:e(w,{params:s})})}),e(h,{path:"/user/:index/post/:sindex",children:s=>e(a.exports.Suspense,{fallback:null,children:e(P,{params:s})})}),e(h,{path:"/:rest*",children:()=>e(a.exports.Suspense,{fallback:null,children:e(g,{})})})]})})}),l("aside",{className:"col overflow-auto scroll-primary pe-1",children:[e("p",{children:"Posts interesantes :"}),e(a.exports.Suspense,{fallback:null,children:e(O,{limit:8})})]})]})]})}),l("div",{className:"position-fixed top-50 start-0 translate-middle-y z-index-20",children:[e("a",{href:"https://github.com/Juan1307",target:"_blank",rel:"noreferrer noopener",className:"btn btn-dark rounded-0 rounded-end d-block",children:e("i",{className:"bx bxl-github align-middle"})}),e("a",{href:"https://www.linkedin.com/in/juan-antoni-cabanillas-chuquiruna-20a449174/",target:"_blank",rel:"noreferrer noopener",className:"btn btn-primary rounded-0 rounded-end mt-2",children:e("i",{className:"bx bxl-linkedin align-middle"})})]}),e("div",{className:"position-fixed button-scroll "+(p>200?"active":""),children:e("button",{className:"btn btn-sm btn-primary px-2 py-2 rounded-3",onClick:f,children:e("i",{className:"bx bx-sm bx-chevron-up align-middle"})})}),l("footer",{className:"py-5 px-2 d-flex flex-column align-items-center bg-gray-100",children:[e("div",{className:"text-center",children:e("p",{children:"Aplicacion Demo JS, React, Bootstrap 5 y m\xE1s"})}),l("div",{className:"mt-2 row gx-2",children:[e("div",{className:"col",children:e("a",{href:"https://es.reactjs.org/docs/getting-started.html",target:"_blank",rel:"noreferrer noopener",className:"btn btn-sm btn-outline-dark",children:e("i",{className:"bx bxl-react bx-md align-middle"})})}),e("div",{className:"col",children:e("a",{href:"https://developer.mozilla.org/en-US/docs",target:"_blank",rel:"noreferrer noopener",className:"btn btn-sm btn-outline-dark",children:e("i",{className:"bx bxl-javascript bx-md align-middle"})})}),e("div",{className:"col",children:e("a",{href:"https://getbootstrap.com/docs/5.1/",target:"_blank",rel:"noreferrer noopener",className:"btn btn-sm btn-outline-dark",children:e("i",{className:"bx bxl-bootstrap bx-md align-middle"})})})]})]})]})}S.render(e(A,{}),document.getElementById("root"));export{j as F,u as _,l as a,e as j};
//# sourceMappingURL=index.0fda6833.js.map
