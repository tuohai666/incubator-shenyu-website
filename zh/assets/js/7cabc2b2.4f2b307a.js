"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[5599],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6061:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:1,title:"\u6570\u636e\u5e93\u8bbe\u8ba1",keywords:["db"],description:"\u6570\u636e\u5e93\u8bbe\u8ba1"},l=void 0,p={unversionedId:"design/database-design",id:"version-2.3.0/design/database-design",isDocsHomePage:!1,title:"\u6570\u636e\u5e93\u8bbe\u8ba1",description:"\u6570\u636e\u5e93\u8bbe\u8ba1",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0/design/database-design.md",sourceDirName:"design",slug:"/design/database-design",permalink:"/zh/docs/2.3.0/design/database-design",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0/design/database-design.md",version:"2.3.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u6570\u636e\u5e93\u8bbe\u8ba1",keywords:["db"],description:"\u6570\u636e\u5e93\u8bbe\u8ba1"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"\u56e2\u961f\u4ecb\u7ecd",permalink:"/zh/docs/2.3.0/team"},next:{title:"\u6570\u636e\u540c\u6b65\u8bbe\u8ba1",permalink:"/zh/docs/2.3.0/design/data-sync"}},u=[],c={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u63d2\u4ef6\u91c7\u7528\u6570\u636e\u5e93\u8bbe\u8ba1\uff0c\u6765\u5b58\u50a8\u63d2\u4ef6\uff0c\u9009\u62e9\u5668\uff0c\u89c4\u5219\u914d\u7f6e\u6570\u636e\uff0c\u4ee5\u53ca\u5bf9\u5e94\u5173\u7cfb\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6570\u636e\u5e93\u8868UML\u7c7b\u56fe:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(9591).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8bbe\u8ba1\u8be6\u89e3:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e00\u4e2a\u63d2\u4ef6\u5bf9\u5e94\u591a\u4e2a\u9009\u62e9\u5668\uff0c\u4e00\u4e2a\u9009\u62e9\u5668\u5bf9\u5e94\u591a\u4e2a\u89c4\u5219\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e00\u4e2a\u9009\u62e9\u5668\u5bf9\u5e94\u591a\u4e2a\u5339\u914d\u6761\u4ef6\uff0c\u4e00\u4e2a\u89c4\u5219\u5bf9\u5e94\u591a\u4e2a\u5339\u914d\u6761\u4ef6\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6bcf\u4e2a\u89c4\u5219\u5728\u5bf9\u5e94\u63d2\u4ef6\u4e0b\uff0c\u4e0d\u540c\u7684\u5904\u7406\u8868\u73b0\u4e3ahandle\u5b57\u6bb5\uff0chandle\u5b57\u6bb5\u5c31\u662f\u4e00\u4e2ajson\u5b57\u7b26\u4e32\u3002\u5177\u4f53\u7684\u53ef\u4ee5\u5728admin\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u67e5\u770b\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8d44\u6e90\u6743\u9650\u8bbe\u8ba1\u7528\u6765\u5b58\u50a8\u7528\u6237\u540d\u79f0\u3001\u89d2\u8272\u3001\u8d44\u6e90\u6570\u636e\u4ee5\u53ca\u5bf9\u5e94\u5173\u7cfb")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6570\u636e\u5e93UML\u7c7b\u56fe\uff1a"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3272).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u8be6\u60c5:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7528\u6237\u5bf9\u5e94\u591a\u4e2a\u89d2\u8272,\u4e00\u4e2a\u89d2\u8272\u5bf9\u5e94\u591a\u4e2a\u8d44\u6e90\u3002")))))}d.isMDXComponent=!0},9591:function(e,t,n){t.Z=n.p+"assets/images/soul-db-0847449c4fb817f83e61abad7125ae4a.png"},3272:function(e,t,n){t.Z=n.p+"assets/images/soul-permission-db-90c870eefea0da663079cdf6638c7ce7.png"}}]);