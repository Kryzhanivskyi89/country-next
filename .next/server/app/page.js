(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},1825:()=>{},1564:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>x,tree:()=>c}),r(2782),r(2029),r(5866);var s=r(3191),n=r(8716),i=r(7922),a=r.n(i),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2782)),"/Users/andrew/Documents/DOC/IT/Репозиторії/country-next/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7232))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2029)),"/Users/andrew/Documents/DOC/IT/Репозиторії/country-next/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7232))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/andrew/Documents/DOC/IT/Репозиторії/country-next/src/app/page.tsx"],d="/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1246:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},7450:()=>{},7144:(e,t,r)=>{Promise.resolve().then(r.bind(r,2331))},2331:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var s=r(326),n=r(434);let i=({page:e,setPage:t,maxPage:r})=>(0,s.jsxs)("div",{children:[e>1&&s.jsx("button",{type:"button",onClick:()=>t(e-1),children:"Previous page"}),s.jsx("span",{children:e}),e<r&&s.jsx("button",{type:"button",onClick:()=>t(e+1),children:"Next page"})]});var a=r(7577),o=r(9478),l=r.n(o);let c=({countries:e})=>{let[t,r]=(0,a.useState)(1),o=Math.ceil(e.length/10);return(0,s.jsxs)(s.Fragment,{children:[s.jsx("h1",{className:l().title,children:"Country list"}),s.jsx("ul",{className:l().list,children:e.slice(10*t-10,10*t).map(e=>s.jsx("li",{className:l().listItem,children:s.jsx(n.default,{className:l().link,href:`/country/info/${e.countryCode}`,children:e.name})},e.countryCode))}),s.jsx(i,{page:t,setPage:r,maxPage:o})]})}},9478:e=>{e.exports={title:"countryList_title__UbFv7",list:"countryList_list__KryrD",listItem:"countryList_listItem__ASIyL",link:"countryList_link__gN4HI"}},2029:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>l});var s=r(9510),n=r(5326),i=r.n(n),a=r(1409),o=r.n(a);r(1287);let l={title:"Country Info App",description:"Generated by create next app"};function c({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:`${i().variable} ${o().variable}`,children:e})})}},2782:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(9510),n=r(9712);let i=(0,r(8570).createProxy)(String.raw`/Users/andrew/Documents/DOC/IT/Репозиторії/country-next/src/app/components/CountriesList.tsx#default`);async function a(){try{let{data:e}=await n.Z.get("https://country-backend-l12p.onrender.com/countries/getAvailableCountries");return s.jsx("main",{className:"section",children:s.jsx("div",{className:"container",children:s.jsx(i,{countries:e.countries})})})}catch(e){return console.error("Error fetching countries:",e),s.jsx(i,{countries:[]})}}},7232:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(6621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)("/country-next",e.params,"favicon.ico")+""}]},1287:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,201,750],()=>r(1564));module.exports=s})();