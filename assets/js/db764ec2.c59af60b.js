"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[18415],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(o,".").concat(d)]||m[d]||s[d]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71832:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],p={title:"Tars Plugin",keywords:["tars-plugin"],description:"tars-plugin"},o=void 0,u={unversionedId:"plugin-center/rpc-proxy/tars-plugin",id:"version-2.4.0/plugin-center/rpc-proxy/tars-plugin",isDocsHomePage:!1,title:"Tars Plugin",description:"tars-plugin",source:"@site/versioned_docs/version-2.4.0/plugin-center/rpc-proxy/tars-plugin.md",sourceDirName:"plugin-center/rpc-proxy",slug:"/plugin-center/rpc-proxy/tars-plugin",permalink:"/docs/2.4.0/plugin-center/rpc-proxy/tars-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.0/plugin-center/rpc-proxy/tars-plugin.md",version:"2.4.0",frontMatter:{title:"Tars Plugin",keywords:["tars-plugin"],description:"tars-plugin"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Spring Cloud Plugin",permalink:"/docs/2.4.0/plugin-center/rpc-proxy/spring-cloud-plugin"},next:{title:"Hystrix Plugin",permalink:"/docs/2.4.0/plugin-center/fault-tolerance/hystrix-plugin"}},c=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Detail",id:"plugin-detail",children:[{value:"Selector Handler",id:"selector-handler",children:[]}]},{value:"Metadata",id:"metadata",children:[]}],s={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The tars plugin is a plugin that converts the Http protocol into the tars protocol.")),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-tars"},"Quick start with Tars")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Tars")," client access, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/tars-proxy"},"Tars Proxy")," ."))),(0,i.kt)("h2",{id:"plugin-detail"},"Plugin Detail"),(0,i.kt)("p",null,"After the client accesses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, it will automatically register the selector and rule information. You can see it in PluginList -> rpc proxy -> tars. For details about the selector and rule configuration, see ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," ."),(0,i.kt)("h3",{id:"selector-handler"},"Selector Handler"),(0,i.kt)("img",{src:"/img/shenyu/plugin/tars/selector_en.png",width:"80%",height:"80%"}),(0,i.kt)("p",null,"Selector Handler, the ",(0,i.kt)("inlineCode",{parentName:"p"},"handle")," field is the tars service that is actually invoked after the gateway matches the traffic. You can configure multiple load balancing weights and specify the specific load balancing policy in the rules. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/plugin-handle-explanation"},"Plugin Handle Management")," ."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"config details\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"host"),"\uff1agenerally, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ip:port"),"\uff1aenter the ip:port of your real service .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"protocol"),"\uff1aindicates the Http protocol. Generally, the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"http://")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"https://"),". If the value is not specified, the default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"http://")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"startupTime"),"\uff1a start up time.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"weight"),"\uff1a load balancing weight.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"warmupTime"),"\uff1awarm up time.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"status"),"\uff1aopen or close."))))),(0,i.kt)("h4",{id:"rule-handle"},"Rule Handle"),(0,i.kt)("img",{src:"/img/shenyu/plugin/tars/rule_en.png",width:"80%",height:"80%"}),(0,i.kt)("p",null,"Rule Handle, the ",(0,i.kt)("inlineCode",{parentName:"p"},"handle")," field indicates the processing rule adopted by the gateway after the final matching of traffic. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/plugin-handle-explanation"},"Plugin Handle Management")," ."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"config details:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loadStrategy"),": if the ",(0,i.kt)("inlineCode",{parentName:"li"},"Http")," client is a cluster, Apache ShenYu gateway uses the load balancing policy when calling, currently supporting ",(0,i.kt)("inlineCode",{parentName:"li"},"roundRobin"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"random"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"hash"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retryCount"),": the number of retries to invoke the client."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout"),": time out to invoke the client.")))),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"tars")," interface method, will correspond to a metadata, when the ",(0,i.kt)("inlineCode",{parentName:"p"},"tars")," application client access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, will be automatically registered, can be viewed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," background management system of the BasicConfig --\x3e Metadata management."),(0,i.kt)("img",{src:"/img/shenyu/plugin/tars/metadata_en.png",width:"80%",height:"80%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AppName: specifies the name of the application to which the metadata belongs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MethodName: the name of the method to call.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Path: http request path.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PathDescribe: the description of the path is easy to view.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ParamsType: the parameters are separated by commas (,) in the order of interface parameter types.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RpcExpand: describes each interface in a ",(0,i.kt)("inlineCode",{parentName:"p"},"tars")," service. For example, here are the two interfaces for the ",(0,i.kt)("inlineCode",{parentName:"p"},"tars")," service:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "methodInfo": [\n    {\n      "methodName": "helloInt",\n      "params": [\n        {\n          "left": "int",\n          "right": "no"\n        },\n        {\n          "left": "java.lang.String",\n          "right": "name"\n        }\n      ],\n      "returnType": "int"\n    },\n    {\n      "methodName": "hello",\n      "params": [\n        {\n          "left": "int",\n          "right": "no"\n        },\n        {\n          "left": "java.lang.String",\n          "right": "name"\n        }\n      ],\n      "returnType": "java.lang.String"\n    }\n  ]\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface: The ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceName")," specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ShenyuTarsService")," annotation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RpcType\uff1achoose ",(0,i.kt)("inlineCode",{parentName:"p"},"tars"),"."))))}m.isMDXComponent=!0}}]);