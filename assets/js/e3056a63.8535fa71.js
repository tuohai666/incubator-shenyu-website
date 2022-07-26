"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[67133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),y=o,g=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89560:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"WebSocket Plugin",keywords:["WebSocket"],description:"websocket plugin"},a=void 0,p={unversionedId:"plugin-center/proxy/websocket-plugin",id:"version-2.4.3/plugin-center/proxy/websocket-plugin",isDocsHomePage:!1,title:"WebSocket Plugin",description:"websocket plugin",source:"@site/versioned_docs/version-2.4.3/plugin-center/proxy/websocket-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/websocket-plugin",permalink:"/docs/plugin-center/proxy/websocket-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.3/plugin-center/proxy/websocket-plugin.md",version:"2.4.3",frontMatter:{title:"WebSocket Plugin",keywords:["WebSocket"],description:"websocket plugin"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Tars Plugin",permalink:"/docs/plugin-center/proxy/tars-plugin"},next:{title:"Hystrix Plugin",permalink:"/docs/plugin-center/fault-tolerance/hystrix-plugin"}},l=[{value:"Environment to prepare",id:"environment-to-prepare",children:[]},{value:"Request Path",id:"request-path",children:[]}],c={toc:l};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Apache ShenYu gateway implements support for the WebSocket proxy."),(0,o.kt)("h2",{id:"environment-to-prepare"},"Environment to prepare"),(0,o.kt)("p",null,"Please refer to the deployment to select a way to start shenyu-admin. For example, start the Apache ShenYu gateway management system through ",(0,o.kt)("a",{parentName:"p",href:"../../deployment/deployment-local"},"local deployment")," ."),(0,o.kt)("p",null,"After successful startup, you need to open the Websocket plugin on in the BasicConfig ",(0,o.kt)("inlineCode",{parentName:"p"},"->")," Plugin. For ",(0,o.kt)("inlineCode",{parentName:"p"},"Websocket")," plugin details."),(0,o.kt)("p",null,"You can see it in PluginList -> rpc proxy -> Websocket. For details about the selector and rule configuration, see ",(0,o.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," ."),(0,o.kt)("p",null,"Add the following dependencies to the gateway's ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!--if you use websocket proxy start this--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-websocket</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\n")),(0,o.kt)("h2",{id:"request-path"},"Request Path"),(0,o.kt)("p",null,"When using Apache ShenYu proxy websocket, assume that the request path is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ws://localhost:9195/wesocket\n")))}s.isMDXComponent=!0}}]);