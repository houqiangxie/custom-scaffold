import{d as e,r as l,E as o,o as t,c as a,a as s,w as n,b as r,F as u,e as c,f as d,g as i,h as p,t as m,p as f,i as v,j as h,k as g,l as k}from"./vendor.6c959871.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&l(e)})).observe(document,{childList:!0,subtree:!0})}function l(e){if(e.ep)return;e.ep=!0;const l=function(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerpolicy&&(l.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?l.credentials="include":"anonymous"===e.crossorigin?l.credentials="omit":l.credentials="same-origin",l}(e);fetch(e.href,l)}}();const V=c("click to open the Dialog"),y=r("span",null,"This is a message??",-1),b={class:"dialog-footer"},_=c("Cancel"),C=c("Confirm"),w=e({setup(e){const c=l(!1),p=e=>{d.confirm("Are you sure to close this dialog?").then((()=>{e()})).catch((()=>{}))};return(e,l)=>{const d=i,m=o;return t(),a(u,null,[s(d,{type:"text",onClick:l[0]||(l[0]=e=>c.value=!0)},{default:n((()=>[V])),_:1}),s(m,{modelValue:c.value,"onUpdate:modelValue":l[3]||(l[3]=e=>c.value=e),title:"Tips",width:"30%","before-close":p},{footer:n((()=>[r("span",b,[s(d,{onClick:l[1]||(l[1]=e=>c.value=!1)},{default:n((()=>[_])),_:1}),s(d,{type:"primary",onClick:l[2]||(l[2]=e=>c.value=!1)},{default:n((()=>[C])),_:1})])])),default:n((()=>[y])),_:1},8,["modelValue"])],64)}}}),D={class:"demo-date-picker"},E={class:"container"},j={class:"block"},x=r("span",{class:"demonstration"},"Week",-1),N={class:"block"},P=r("span",{class:"demonstration"},"Month",-1),S={class:"container"},U={class:"block"},L=r("span",{class:"demonstration"},"Year",-1),M={class:"block"},A=r("span",{class:"demonstration"},"Dates",-1),I=e({setup(e){const o=l(""),n=l(""),u=l(""),c=l("");return(e,l)=>{const d=p;return t(),a("div",D,[r("div",E,[r("div",j,[x,s(d,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o.value=e),type:"week",format:"[Week] ww",placeholder:"Pick a week"},null,8,["modelValue"])]),r("div",N,[P,s(d,{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=e=>n.value=e),type:"month",placeholder:"Pick a month"},null,8,["modelValue"])])]),r("div",S,[r("div",U,[L,s(d,{modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=e=>u.value=e),type:"year",placeholder:"Pick a year"},null,8,["modelValue"])]),r("div",M,[A,s(d,{modelValue:c.value,"onUpdate:modelValue":l[3]||(l[3]=e=>c.value=e),type:"dates",placeholder:"Pick one or more dates"},null,8,["modelValue"])])])])}}}),T=r("div",{class:"text-[18px]"},"我是我大大实打实",-1),W=r("div",{text:"[40px] ",bg:"[#f00]"},"dsdsds",-1),H=e({setup(e){const o=l(333);return(e,l)=>(t(),a(u,null,[T,W,c(" "+m(o.value),1)],64))}});var O=(e,l)=>{const o=e.__vccOpts||e;for(const[t,a]of l)o[t]=a;return o};const R=e=>(f("data-v-8203a322"),e=e(),v(),e),q=R((()=>r("p",null,[c(" Recommended IDE setup: "),r("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),c(" + "),r("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1))),F=R((()=>r("p",null,[c("See "),r("code",null,"README.md"),c(" for more information.")],-1))),K=R((()=>r("p",null,[r("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),c(" | "),r("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1))),Y=R((()=>r("p",null,[c(" Edit "),r("code",null,"components/HelloWorld.vue"),c(" to test hot module replacement. ")],-1)));var z=O(e({props:{msg:null},setup(e){const o=l(0);return(l,s)=>(t(),a(u,null,[r("h1",null,m(e.msg),1),q,F,K,r("button",{type:"button",onClick:s[0]||(s[0]=e=>o.value++)},"count is: "+m(o.value),1),Y],64))}}),[["__scopeId","data-v-8203a322"]]);const B=c("Show message"),G=c("VNode"),J=e({setup(e){const l=()=>{h("this is a message.")},o=()=>{h({message:g("p",null,[g("span",null,"Message can be "),g("i",{style:"color: teal"},"VNode")])})};return(e,r)=>{const c=i;return t(),a(u,null,[s(c,{plain:!0,onClick:l},{default:n((()=>[B])),_:1}),s(c,{plain:!0,onClick:o},{default:n((()=>[G])),_:1})],64)}}});const Q=r("img",{alt:"Vue logo",src:"/custom-scaffold/assets/logo.03d6d6da.png"},null,-1),X=c("dsdsd");k(e({setup:e=>(e,l)=>{const o=z,r=H,c=I,d=i,p=w;return t(),a(u,null,[Q,s(o,{msg:"Hello Vue 3 + TypeScript + Vite"}),s(r),s(c),s(d,null,{default:n((()=>[X])),_:1}),s(p),s(J)],64)}})).mount("#app");
