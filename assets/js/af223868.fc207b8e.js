"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[67919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46973:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1,title:"Database Design",keywords:["db"],description:"Database Design"},o=void 0,s={unversionedId:"design/database-design",id:"version-2.3.0-Legacy/design/database-design",isDocsHomePage:!1,title:"Database Design",description:"Database Design",source:"@site/versioned_docs/version-2.3.0-Legacy/design/database-design.md",sourceDirName:"design",slug:"/design/database-design",permalink:"/docs/2.3.0-Legacy/design/database-design",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/design/database-design.md",version:"2.3.0-Legacy",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Database Design",keywords:["db"],description:"Database Design"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Team Introduction",permalink:"/docs/2.3.0-Legacy/team"},next:{title:"Configuration Flow Introduction",permalink:"/docs/2.3.0-Legacy/design/config"}},l=[],c={toc:l};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Plugin use database to store plugin, selector, rule configuration data and relationship.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Database Table UML Diagram:\n",(0,a.kt)("img",{src:n(59591).Z}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Detailed design:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"One plugin corresponds to multiple selectors,one selector corresponds to multiple rules.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"One selector corresponds to multiple match conditions,one rule corresponds to multiple match conditions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Each rule handles differently in corresponding plugin according to field handler,field handler is a kind of data of JSON string type.You can view detail during the use of admin.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Plugin use database to store user name,role,resource data and relationship. ")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Permission Table UML Diagram:\n",(0,a.kt)("img",{src:n(13272).Z}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Detailed design:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"one user corresponds to multiple role,one role corresponds to multiple resources.")))))}p.isMDXComponent=!0},59591:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/soul-db-0847449c4fb817f83e61abad7125ae4a.png"},13272:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/soul-permission-db-90c870eefea0da663079cdf6638c7ce7.png"}}]);