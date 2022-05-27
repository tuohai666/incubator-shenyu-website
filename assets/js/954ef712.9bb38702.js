"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[56929],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=l(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return r?n.createElement(m,o(o({ref:e},u),{},{components:r})):n.createElement(m,o({ref:e},u))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90725:function(t,e,r){r.r(e),r.d(e,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={title:"Quick start with http",description:"Quick start with http"},s=void 0,l={unversionedId:"quick-start/quick-start-http",id:"version-2.3.0/quick-start/quick-start-http",isDocsHomePage:!1,title:"Quick start with http",description:"Quick start with http",source:"@site/versioned_docs/version-2.3.0/quick-start/quick-start-http.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-http",permalink:"/docs/2.3.0/quick-start/quick-start-http",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/quick-start/quick-start-http.md",version:"2.3.0",frontMatter:{title:"Quick start with http",description:"Quick start with http"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Quick start with grpc",permalink:"/docs/2.3.0/quick-start/quick-start-grpc"},next:{title:"Quick start with sofa",permalink:"/docs/2.3.0/quick-start/quick-start-sofa"}},u=[{value:"Environment to prepare",id:"environment-to-prepare",children:[]},{value:"Run the soul-examples-http project",id:"run-the-soul-examples-http-project",children:[]},{value:"Enable the Divide plugin to handle HTTP requests",id:"enable-the-divide-plugin-to-handle-http-requests",children:[]},{value:"Testing http request",id:"testing-http-request",children:[]}],c={toc:u};function d(t){var e=t.components,p=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,p,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document introduces how to quickly access the Soul Gateway using Http. You can get the code example of this document by clicking ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-http"},"here"),"."),(0,i.kt)("h2",{id:"environment-to-prepare"},"Environment to prepare"),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"../users-guide/soul-set-up"},"setup")," and launch ",(0,i.kt)("inlineCode",{parentName:"p"},"soul-admin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"soul-bootstrap"),"."),(0,i.kt)("p",null,"Introducing gateway to HTTP proxy plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add the following dependencies to the ",(0,i.kt)("inlineCode",{parentName:"li"},"soul-bootstrap"),"'s ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")," file:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--if you use http proxy start this--\x3e\n<dependency>\n    <groupId>org.dromara</groupId>\n    <artifactId>soul-spring-boot-starter-plugin-divide</artifactId>\n    <version>${last.version}</version>\n</dependency>\n\n<dependency>\n    <groupId>org.dromara</groupId>\n    <artifactId>soul-spring-boot-starter-plugin-httpclient</artifactId>\n    <version>${last.version}</version>\n</dependency>\n")),(0,i.kt)("h2",{id:"run-the-soul-examples-http-project"},"Run the soul-examples-http project"),(0,i.kt)("p",null,"Download",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-http"},"soul-examples-http")),(0,i.kt)("p",null,"Execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.dromara.soul.examples.http.SoulTestHttpApplication")," main method to start project."),(0,i.kt)("p",null,"The following log appears when the startup is successful:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'2021-02-10 00:57:07.561  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/test/**","pathDesc":"","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/test/**","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.577  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/save","pathDesc":"Save order","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/save","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.587  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/path/**/name","pathDesc":"","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/path/**/name","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.596  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/findById","pathDesc":"Find by id","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/findById","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.606  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/path/**","pathDesc":"","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/path/**","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:08.023  INFO 3700 --- [           main] o.s.b.web.embedded.netty.NettyWebServer  : Netty started on port(s): 8188\n2021-02-10 00:57:08.026  INFO 3700 --- [           main] o.d.s.e.http.SoulTestHttpApplication     : Started SoulTestHttpApplication in 2.555 seconds (JVM running for 3.411) \n')),(0,i.kt)("h2",{id:"enable-the-divide-plugin-to-handle-http-requests"},"Enable the Divide plugin to handle HTTP requests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"enabled the ",(0,i.kt)("inlineCode",{parentName:"li"},"divide")," plugin in the ",(0,i.kt)("inlineCode",{parentName:"li"},"soul-admin")," plugin management.")),(0,i.kt)("h2",{id:"testing-http-request"},"Testing http request"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"soul-examples-http")," project will automatically register interface methods annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@SoulSpringMvcClient")," in the soul gateway after successful startup."),(0,i.kt)("p",null,"Open Plugin Management -> divide to see the list of plugin rule configurations"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(59770).Z})),(0,i.kt)("p",null,"Use PostMan to simulate HTTP to request your http service"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(61537).Z})))}d.isMDXComponent=!0},61537:function(t,e,r){e.Z=r.p+"assets/images/postman-test-ffc28736280dc05a51162a4db2a0a7df.png"},59770:function(t,e,r){e.Z=r.p+"assets/images/rule-list-44d335cb7d35496ced765ebf3751ac55.png"}}]);