"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[90062],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,g=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38579:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Motan Plugin",keywords:["motan-plugin"],description:"motan-plugin"},p=void 0,u={unversionedId:"plugin-center/proxy/motan-plugin",id:"plugin-center/proxy/motan-plugin",isDocsHomePage:!1,title:"Motan Plugin",description:"motan-plugin",source:"@site/docs/plugin-center/proxy/motan-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/motan-plugin",permalink:"/docs/next/plugin-center/proxy/motan-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/plugin-center/proxy/motan-plugin.md",version:"current",frontMatter:{title:"Motan Plugin",keywords:["motan-plugin"],description:"motan-plugin"},sidebar:"tutorialSidebar",previous:{title:"gRPC Plugin",permalink:"/docs/next/plugin-center/proxy/grpc-plugin"},next:{title:"Mqtt Plugin",permalink:"/docs/next/plugin-center/proxy/mqtt-plugin"}},c=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Detail",id:"plugin-detail",children:[]},{value:"Metadata",id:"metadata",children:[]}],m={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The motan plugin is a plugin that converts the Http protocol into the motan protocol.")),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-motan"},"Quick start with Motan")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Motan")," client access, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/motan-proxy"},"Motan Proxy")," ."))),(0,i.kt)("h2",{id:"plugin-detail"},"Plugin Detail"),(0,i.kt)("p",null,"After the client accesses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, it will automatically register the selector and rule information."),(0,i.kt)("p",null,"You can see it in PluginList -> rpc proxy -> motan. For details about the selector and rule configuration, see ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," ."),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"motan")," interface method, will correspond to a metadata, when the ",(0,i.kt)("inlineCode",{parentName:"p"},"motan")," application client access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, will be automatically registered, can be viewed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," background management system of the BasicConfig --\x3e Metadata management."),(0,i.kt)("img",{src:"/img/shenyu/plugin/motan/metadata_en.png",width:"60%",height:"50%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AppName: specifies the name of the application to which the metadata belongs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MethodName: the name of the method to call.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Path: http request path.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PathDescribe: the description of the path is easy to view.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ParamsType: the parameters are separated by commas (,) in the order of interface parameter types.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RpcExpand: description of each interface in a ",(0,i.kt)("inlineCode",{parentName:"p"},"motan")," service. For example, here is the interface information for the ",(0,i.kt)("inlineCode",{parentName:"p"},"motan")," service:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "methodInfo": [\n    {\n      "methodName": "hello",\n      "params": [\n        {\n          "left": "java.lang.String",\n          "right": "name"\n        }\n      ]\n    }\n  ],\n  "group": "motan-shenyu-rpc"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface: The fully qualified class name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"motan")," interface.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RpcType\uff1achoose ",(0,i.kt)("inlineCode",{parentName:"p"},"motan"),"."))))}s.isMDXComponent=!0}}]);