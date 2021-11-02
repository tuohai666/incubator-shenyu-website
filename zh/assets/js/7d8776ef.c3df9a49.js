"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[5589],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=i,g=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(g,u(u({ref:t},c),{},{components:n})):r.createElement(g,u({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,u=new Array(a);u[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,u[1]=o;for(var p=2;p<a;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},54161:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),u=["components"],o={title:"\u6743\u9650\u7ba1\u7406",keywords:["\u6743\u9650","authority"],description:"\u6743\u9650\u7ba1\u7406\u8be6\u89e3"},l=void 0,p={unversionedId:"user-guide/admin-usage/authority-management",id:"user-guide/admin-usage/authority-management",isDocsHomePage:!1,title:"\u6743\u9650\u7ba1\u7406",description:"\u6743\u9650\u7ba1\u7406\u8be6\u89e3",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/admin-usage/authority-management.md",sourceDirName:"user-guide/admin-usage",slug:"/user-guide/admin-usage/authority-management",permalink:"/zh/docs/next/user-guide/admin-usage/authority-management",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/admin-usage/authority-management.md",version:"current",frontMatter:{title:"\u6743\u9650\u7ba1\u7406",keywords:["\u6743\u9650","authority"],description:"\u6743\u9650\u7ba1\u7406\u8be6\u89e3"},sidebar:"tutorialSidebar",previous:{title:"Tars\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/next/quick-start/quick-start-tars"},next:{title:"\u6570\u636e\u6743\u9650\u7ba1\u7406",permalink:"/zh/docs/next/user-guide/admin-usage/data-permission"}},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u4f7f\u7528\u6559\u7a0b",id:"\u4f7f\u7528\u6559\u7a0b",children:[]}],m={toc:c};function s(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u548c\u63a7\u5236\u7ecf\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u7f51\u5173\u7684\u8bf7\u6c42\u7684\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u751f\u6210\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"AK/SK")," \uff0c\u914d\u5408 ",(0,a.kt)("inlineCode",{parentName:"li"},"sign")," \u63d2\u4ef6\u4f7f\u7528\uff0c\u5b9e\u73b0\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"URI"),"\u7ea7\u522b\u7684\u7cbe\u51c6\u6743\u9650\u7ba1\u63a7\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u6559\u7a0b"},"\u4f7f\u7528\u6559\u7a0b"),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b65\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u57fa\u7840\u914d\u7f6e")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8ba4\u8bc1\u7ba1\u7406")," \u65b0\u589e\u4e00\u6761\u8ba4\u8bc1\u4fe1\u606f \u3002"),(0,a.kt)("img",{src:"/img/shenyu/basicConfig/authorityManagement/auth_manages_add_zh.jpg",width:"100%",height:"70%"}),(0,a.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff0c\u914d\u7f6e\u8fd9\u6761\u8ba4\u8bc1\u4fe1\u606f \u3002"),(0,a.kt)("img",{src:"/img/shenyu/basicConfig/authorityManagement/auth_param_zh.jpg",width:"50%",height:"40%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e94\u7528\u540d\u79f0\uff1a\u8fd9\u4e2a\u8d26\u53f7\u5173\u8054\u7684\u5e94\u7528\u540d\u79f0\uff0c\u53ef\u624b\u52a8\u586b\u5199\u6216\u4e0b\u62c9\u9009\u62e9\uff08\u6570\u636e\u6765\u81ea\u5143\u6570\u636e\u7ba1\u7406\u4e2d\u914d\u7f6e\u7684\u5e94\u7528\u540d\u79f0\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u624b\u673a\u53f7\uff1a\u4ec5\u4f5c\u4e3a\u4fe1\u606f\u8bb0\u5f55\uff0c\u5728shenyu\u4e2d\u65e0\u5b9e\u9645\u4f7f\u7528\u903b\u8f91\u3002"),(0,a.kt)("li",{parentName:"ul"},"APP\u53c2\u6570\uff1a\u5f53\u8bf7\u6c42\u7684context path\u4e0e\u5e94\u7528\u540d\u79f0\u76f8\u540c\u65f6\uff0c\u5411header\u4e2d\u6dfb\u52a0\u8be5\u503c\uff0c\u952e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"appParam"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237ID\uff1a\u7ed9\u8be5\u7528\u6237\u53d6\u4e00\u4e2a\u540d\u5b57\uff0c\u4ec5\u4f5c\u4e3a\u4fe1\u606f\u8bb0\u5f55\uff0c\u5728shenyu\u4e2d\u65e0\u5b9e\u9645\u4f7f\u7528\u903b\u8f91\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u62d3\u5c55\u4fe1\u606f\uff1a\u4ec5\u4f5c\u4e3a\u4fe1\u606f\u8bb0\u5f55\uff0c\u5728shenyu\u4e2d\u65e0\u5b9e\u9645\u4f7f\u7528\u903b\u8f91\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8def\u5f84\u8ba4\u8bc1\uff1a\u5f00\u542f\u540e\uff0c\u8be5\u8d26\u53f7\u4ec5\u5141\u8bb8\u8bbf\u95ee\u4ee5\u4e0b\u914d\u7f6e\u7684\u8d44\u6e90\u8def\u5f84\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u8def\u5f84\uff1a\u5141\u8bb8\u8bbf\u95ee\u7684\u8d44\u6e90\u8def\u5f84\uff0c\u652f\u6301\u8def\u5f84\u5339\u914d\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"/order/**")," \u3002")),(0,a.kt)("p",null,"\u70b9\u51fb\u786e\u8ba4\u540e\uff0c\u751f\u6210\u4e00\u6761\u8ba4\u8bc1\u4fe1\u606f\uff0c\u8be5\u4fe1\u606f\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"AppKey")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"\u52a0\u5bc6\u79d8\u94a5")," \uff0c\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"Sign")," \u63d2\u4ef6\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"AK/SK"),"  \u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Sign"),"\u63d2\u4ef6\u7684\u8be6\u7ec6\u4f7f\u7528\u8bf4\u660e\u8bf7\u53c2\u8003\uff1a ",(0,a.kt)("a",{parentName:"p",href:"../../plugin-center/authority-and-certification/sign-plugin"},"Sign\u63d2\u4ef6")," \u3002"),(0,a.kt)("h4",{id:"\u8def\u5f84\u64cd\u4f5c"},"\u8def\u5f84\u64cd\u4f5c"),(0,a.kt)("p",null,"\u5bf9\u5df2\u521b\u5efa\u7684\u8ba4\u8bc1\u4fe1\u606f\uff0c\u53ef\u4ee5\u5728\u8ba4\u8bc1\u4fe1\u606f\u5217\u8868\u7684\u672b\u5c3e\u8fdb\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8def\u5f84\u64cd\u4f5c")," \u3002"),(0,a.kt)("img",{src:"/img/shenyu/basicConfig/authorityManagement/auth_manage_modifyPath_zh.jpg",width:"90%",height:"80%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5de6\u4fa7\u4e3a\u53ef\u914d\u7f6e\u7684\u8def\u5f84\u5217\u8868\uff0c\u53f3\u4fa7\u4e3a\u5141\u8bb8\u8be5\u8d26\u53f7\u8bbf\u95ee\u7684\u8def\u5f84\u5217\u8868 \u3002"),(0,a.kt)("li",{parentName:"ul"},"\u52fe\u9009\u8d44\u6e90\u8def\u5f84\uff0c\u70b9\u51fb\u4e2d\u95f4\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},">")," \u6216  ",(0,a.kt)("inlineCode",{parentName:"li"},"<")," \u5c06\u52fe\u9009\u7684\u6570\u636e\u79fb\u52a8\u5230\u5bf9\u5e94\u5217\u8868\u4e2d \u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5de6\u4fa7\u53ef\u914d\u7f6e\u8def\u5f84\u5217\u8868\u53ef\u5728\u8d26\u53f7\u4fe1\u606f\u884c\u672b\u5c3e\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"\u7f16\u8f91"),"\uff0c\u5728\u5f39\u6846\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u8d44\u6e90\u8def\u5f84")," \u4e2d\u8fdb\u884c\u6dfb\u52a0 \u3002")))}s.isMDXComponent=!0}}]);