"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[838],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=i,m=p["".concat(d,".").concat(h)]||p[h]||s[h]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6780:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={title:"Thread Model",keywords:["Thread"],description:"thread model"},d=void 0,u={unversionedId:"developer/thread-model",id:"version-2.4.0/developer/thread-model",isDocsHomePage:!1,title:"Thread Model",description:"thread model",source:"@site/versioned_docs/version-2.4.0/developer/thread-model.md",sourceDirName:"developer",slug:"/developer/thread-model",permalink:"/docs/developer/thread-model",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.0/developer/thread-model.md",version:"2.4.0",frontMatter:{title:"Thread Model",keywords:["Thread"],description:"thread model"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"ShenYu Optimize",permalink:"/docs/developer/shenyu-optimize"},next:{title:"Download",permalink:"/docs/download"}},c=[{value:"Description",id:"description",children:[]},{value:"IO And Work Thread",id:"io-and-work-thread",children:[]},{value:"Business Thread",id:"business-thread",children:[]},{value:"Type Switching",id:"type-switching",children:[]}],s={toc:c};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This article gives an introduction to thread models in ShenYu and usage in various scenarios.")),(0,o.kt)("h2",{id:"io-and-work-thread"},"IO And Work Thread"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spring-webflux")," is one of dependencies of ShenYu, and it uses Netty thread model in lower layer.")),(0,o.kt)("h2",{id:"business-thread"},"Business Thread"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use scheduling thread to execute by default."),(0,o.kt)("li",{parentName:"ul"},"A fixed thread pool manages business threads, the number of threads is count in this formula: cpu * 2 + 1.")),(0,o.kt)("h2",{id:"type-switching"},"Type Switching"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reactor.core.scheduler.Schedulers"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-Dshenyu.scheduler.type=fixed")," is a default config. If set to other value, a flexible thread pool will take place it.",(0,o.kt)("inlineCode",{parentName:"li"},"Schedulers.elastic()"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-Dshenyu.work.threads = xx")," is for configuring number of threads, the default value calculates in following formula ",(0,o.kt)("inlineCode",{parentName:"li"},"cpu * 2 + 1")," with a minimum of 16 threads.")))}p.isMDXComponent=!0}}]);