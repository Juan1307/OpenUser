import{u as N,P as c,r as m,T as g,C as p}from"./vendor.c7380184.js";import{j as e,a as r}from"./index.0fda6833.js";import{N as y}from"./NotFound.47208df2.js";import{d as w}from"./UsersSrv.8c88fece.js";import{f as b}from"./HelpersDom.741977e8.js";f.propTypes={index:c.number,username:c.string,email:c.string,website:c.string};function f({index:a,username:l,email:n,website:o}){const[,t]=N();return e("div",{className:"col-sm-12 col-md-6 col-lg",children:r("div",{className:"card card-user",children:[r("header",{onClick:()=>t("/user/"+a),className:"card-header d-flex justify-content-between",children:[e("span",{children:l.toUpperCase()}),e("i",{className:"bx bx-sm bx-chevron-right"})]}),r("div",{className:"card-body",children:[e("article",{children:"Lorem ipsum dolor sit, amet consectetur nulla!"}),r("div",{className:"row",children:[e("div",{className:"col col-md-12 col-lg-12 col-xl",children:e("small",{children:e("a",{href:"",className:"link-primary",children:n})})}),e("div",{className:"col col-md-12 col-lg-12 col-xl text-end text-md-center text-xl-end",children:e("a",{href:"https://www."+o,className:"btn btn-sm btn-outline-primary",target:"_blank",rel:"noreferrer noopener",children:e("i",{className:"bx bx-link mt-1"})})})]})]})]})})}const h=a=>a.toUpperCase();function L(){const[a,l]=m.exports.useState([]),[n,o]=m.exports.useState([]);let t=localStorage.getItem("usersLocal");const u=s=>(l(s),o(s));return m.exports.useEffect(()=>{if(b("default-search"),t)return t=JSON.parse(t),u(t);(async()=>{const s=await w();u(s),localStorage.setItem("usersLocal",JSON.stringify(s))})()},[]),r("div",{className:"d-flex flex-column",children:[e("input",{type:"text",id:"default-search",className:"form-control control-search",onInput:s=>{const{target:{value:i}}=s;o(()=>a.filter(({username:d})=>h(d).includes(h(i))))},placeholder:"Buscar Usuario"}),r("section",{className:"App-section d-flex flex-column "+(n.length?"justify-content-start":"justify-content-center"),children:[e(g,{className:"justify-content-center mt-0 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3",children:n.map(({id:s,username:i,email:d,website:x})=>e(p,{timeout:800,classNames:"ani-fadeInUp",children:e(f,{index:s,username:i,email:d,website:x},s)},s))}),e(p,{in:!n.length,timeout:900,unmountOnExit:!0,classNames:"ani-fadeInDelay",exit:!1,children:e(y,{message:"Ooops datos no encontrados",custom:"text-center"})})]})]})}export{L as default};
//# sourceMappingURL=TheListUsers.0ddb0691.js.map