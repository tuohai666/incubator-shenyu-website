"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[6696],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,g=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},57841:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Motan Plugin",keywords:["motan-plugin"],description:"motan-plugin"},p=void 0,c={unversionedId:"plugin-center/rpc-proxy/motan-plugin",id:"version-2.4.0/plugin-center/rpc-proxy/motan-plugin",isDocsHomePage:!1,title:"Motan Plugin",description:"motan-plugin",source:"@site/versioned_docs/version-2.4.0/plugin-center/rpc-proxy/motan-plugin.md",sourceDirName:"plugin-center/rpc-proxy",slug:"/plugin-center/rpc-proxy/motan-plugin",permalink:"/docs/2.4.0/plugin-center/rpc-proxy/motan-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.0/plugin-center/rpc-proxy/motan-plugin.md",version:"2.4.0",frontMatter:{title:"Motan Plugin",keywords:["motan-plugin"],description:"motan-plugin"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"gRPC Plugin",permalink:"/docs/2.4.0/plugin-center/rpc-proxy/grpc-plugin"},next:{title:"Sofa Plugin",permalink:"/docs/2.4.0/plugin-center/rpc-proxy/sofa-plugin"}},u=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Detail",id:"plugin-detail",children:[]},{value:"Metadata",id:"metadata",children:[]}],m={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The motan plugin is a plugin that converts the Http protocol into the motan protocol.")),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-motan"},"Quick start with Motan")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Motan")," client access, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/motan-proxy"},"Motan Proxy")," ."))),(0,i.kt)("h2",{id:"plugin-detail"},"Plugin Detail"),(0,i.kt)("p",null,"After the client accesses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, it will automatically register the selector and rule information."),(0,i.kt)("p",null,"You can see it in PluginList -> rpc proxy -> motan. For details about the selector and rule configuration, see ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," ."),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"motan")," interface method, will correspond to a metadata, when the ",(0,i.kt)("inlineCode",{parentName:"p"},"motan")," application client access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, will be automatically registered, can be viewed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," background management system of the BasicConfig --\x3e Metadata management."),(0,i.kt)("img",{src:"/img/shenyu/plugin/motan/metadata_en.png",width:"60%",height:"50%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AppName: specifies the name of the application to which the metadata belongs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MethodName: the name of the method to call.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Path: http request path.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PathDescribe: the description of the path is easy to view.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ParamsType: the parameters are separated by commas (,) in the order of interface parameter types.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RpcExpand: description of each interface in a ",(0,i.kt)("inlineCode",{parentName:"p"},"motan")," service. For example, here is the interface information for the ",(0,i.kt)("inlineCode",{parentName:"p"},"motan")," service:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "methodInfo": [\n    {\n      "methodName": "hello",\n      "params": [\n        {\n          "left": "java.lang.String",\n          "right": "name"\n        }\n      ]\n    }\n  ],\n  "group": "motan-shenyu-rpc"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface: The fully qualified class name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"motan")," interface.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RpcType\uff1achoose ",(0,i.kt)("inlineCode",{parentName:"p"},"motan"),"."))))}s.isMDXComponent=!0}}]);