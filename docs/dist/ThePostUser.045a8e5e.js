var P=Object.defineProperty,V=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var E=(a,s,r)=>s in a?P(a,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[s]=r,p=(a,s)=>{for(var r in s||(s={}))F.call(s,r)&&E(a,r,s[r]);if(I)for(var r of I(s))H.call(s,r)&&E(a,r,s[r]);return a},h=(a,s)=>V(a,$(s));import{a as O,b as R,L as q}from"./UserHook.4fcb275f.js";import{U as M}from"./UserCardMini.7a470a5f.js";import{p as z,s as w,f as j}from"./HelpersDom.c86d0e35.js";import{a as t,j as e,F as x}from"./index.7355d09c.js";import{r as c}from"./vendor.83e283a6.js";import"./UsersSrv.8c88fece.js";function A({item:a}){const{id:s,title:r,body:i}=a;return t("div",{className:"card border border-dark shadow",children:[t("header",{className:"card-header ",children:[t("p",{className:"fw-bolder mb-1",children:["Post nro : ",z(s)]}),t("p",{className:"mb-1 text-uppercase",children:[" ",w(r,45,!0)]})]}),t("article",{className:"card-body",children:[e("p",{children:i}),e("p",{children:"- Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus id incidunt dolor minima eos, nihil est inventore temporibus magnam autem at sint quod corporis obcaecati dignissimos error sunt similique,"}),e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing, elit. Praesentium ad quos nemo, quibusdam adipisci quod iure quaerat nobis possimus laudantium voluptas laboriosam error assumenda iste aliquid esse corporis nihil consequuntur."}),e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing, elit. Praesentium ad quos nemo, quibusdam adipisci quod iure quaerat nobis possimus laudantium voluptas laboriosam error assumenda iste aliquid esse corporis nihil consequuntur."})]})]})}const B={StringNormal:([a,s])=>new RegExp(`^[a-zA-Z0-9\xF1\xD1\xE1\xE9\xED\xF3\xFA\xC1\xC9\xCD\xD3\xDA.#-\\s]{${a},${s}}$`,"g"),StringEmail:()=>new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$","g")},k=(a,{value:s,range:r})=>(s=s.trim(),B[a](r).test(s));function D({callback:a}){const[s,r]=c.exports.useState({name:"",email:"",body:""}),[i,o]=c.exports.useState({name:!1,email:!1,body:!1}),[l,m]=c.exports.useState(!0),[d,N]=c.exports.useState(!1),f=c.exports.useRef(null);c.exports.useEffect(()=>j("name"),[]),c.exports.useEffect(()=>{!l&&v(i)&&(a(s),N(!0),j("body"),f.current.value="")},[l]);const v=n=>{m(!0);const u=Object.entries(n).find(([,b])=>b);return u?(j(u[0]),!1):!0},L={name:n=>!k("StringNormal",{value:n,range:[2,10]}),email:n=>!k("StringEmail",{value:n,range:[2,30]}),body:n=>!k("StringNormal",{value:n,range:[2,70]})},g=(n,u)=>L[n](u),y=({target:n})=>{const{value:u,id:b}=n;o(S=>h(p({},S),{[b]:g(b,u)})),r(S=>h(p({},S),{[b]:u})),m(!0)},U=()=>{o(n=>h(p({},n),{name:g("name",s.name)})),o(n=>h(p({},n),{email:g("email",s.email)})),o(n=>h(p({},n),{body:g("body",s.body)})),m(!1)},C=n=>n?"is-invalid":"";return t(x,{children:[t("div",{className:"d-flex flex-wrap justify-content-between",children:[e("label",{htmlFor:d?"body":"name",className:"mb-2",children:"Escribe un comentario:"}),d?t("span",{children:[e("small",{className:"text-uppercase",children:w(s.name,10,!0)}),"- ",e("small",{className:"text-primary",children:s.email})]}):null]}),t("form",{className:"row g-2",children:[d?null:t(x,{children:[e("div",{className:"col-6",children:e("input",{onInput:y,className:`form-control ${C(i.name)}`,type:"text",id:"name",placeholder:"Ingrese nombre",maxLength:"10"})}),e("div",{className:"col-6",children:e("input",{onInput:y,className:`form-control ${C(i.email)}`,type:"text",id:"email",placeholder:"Ingrese email",maxLength:"30"})})]}),e("div",{className:"col-10",children:e("textarea",{ref:f,onInput:y,className:`form-control ${C(i.body)}`,type:"text",id:"body",rows:"2",placeholder:"Escribe un commentario",maxLength:"70"})}),e("div",{className:"col-2 d-flex",children:e("button",{onClick:U,type:"button",className:"btn btn-outline-primary w-100",children:e("i",{className:"bx bx-sm bx-send"})})})]})]})}function K({items:a}){const[s,r]=c.exports.useState(a);return t(x,{children:[e("div",{className:"my-2",children:e(D,{callback:({name:o,email:l,body:m})=>{const{postId:d,id:N}=s[s.length-1],f={postId:d,id:N+1,name:o,email:l,body:m};r(v=>[f,...v])}})}),e("hr",{}),e("div",{className:"my-2 max-h-30 overflow-auto scroll-primary pe-2",children:s.map(({name:o,email:l,body:m},d)=>t("div",{className:"card mb-2 border border-primary",children:[t("header",{className:"card-header p-1 d-flex justify-content-between align-items-center",children:[t("small",{className:"text-uppercase link-hover cursor",children:[e("i",{className:"bx bx-user-pin align-middle me-1"}),w(o,12,!0)]}),e("small",{className:"link-hover",children:l})]}),e("article",{className:"card-body",children:m})]},d))})]})}function Y({params:a}){const{index:s,sindex:r}=a,[i]=O(s),{post:o,comments:l}=R(r);return t(x,{children:[e("div",{className:"card min-h-3 mb-3",children:i.username?e(M,{item:i}):e(q,{message:"Cargando Usuario ...",state:!0})}),t("div",{className:"row g-3",children:[e("div",{className:"col-12 col-md-12 col-lg-6 col-xl-5",children:e("div",{className:"position-relative min-h-25",children:o.body?e(A,{item:o}):e(q,{message:"Cargando Post ..."})})}),e("div",{className:"col-12 col-md-12 col-lg-6 col-xl-7",children:e("div",{className:"position-relative min-h-25",children:l.length?e(K,{items:l}):e(q,{message:"Cargando Comentarios ..."})})})]})]})}export{Y as default};
//# sourceMappingURL=ThePostUser.045a8e5e.js.map