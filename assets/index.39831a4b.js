import{d as e,r as t,a as r,t as o,b as n,c as s,e as i,o as l,m as a,v as c,f as d,g as u}from"./vendor.4846de37.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const f=e("test",(()=>({testA:t("0"),testB:()=>{console.log("ssss")},testC:t("0")})));const m=r({setup(e){const t=f();return o(t),setTimeout((()=>{console.log("testA: ")}),5e3),(e,t)=>{const r=n("router-view");return l(),s("div",null,[i(r)])}}});function p(e={}){const{immediate:t=!1,onNeedRefresh:r,onOfflineReady:o,onRegistered:n,onRegisterError:s}=e;let i;return"serviceWorker"in navigator&&(i=new c("/custom-scaffold/sw.js",{scope:"/custom-scaffold/",type:"classic"}),i.addEventListener("activated",(e=>{e.isUpdate?window.location.reload():null==o||o()})),i.register({immediate:t}).then((e=>{null==n||n(e)})).catch((e=>{null==s||s(e)}))),(e=!0)=>{return t=this,r=null,o=function*(){},new Promise(((e,n)=>{var s=e=>{try{l(o.next(e))}catch(t){n(t)}},i=e=>{try{l(o.throw(e))}catch(t){n(t)}},l=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,i);l((o=o.apply(t,r)).next())}));var t,r,o}}a.start({plugins:{modules:{microappchild1:[{loader:e=>e}]}}}),function(e={}){const{immediate:r=!0,onNeedRefresh:o,onOfflineReady:n,onRegistered:s,onRegisterError:i}=e,l=t(!1),a=t(!1);p({immediate:r,onNeedRefresh(){l.value=!0,null==o||o()},onOfflineReady(){a.value=!0,null==n||n()},onRegistered:s,onRegisterError:i})}(),d(m).use(u()).mount("#app");