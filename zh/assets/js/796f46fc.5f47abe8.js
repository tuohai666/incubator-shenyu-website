"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[5512],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,p=function(t,e){if(null==t)return{};var n,r,p={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(p[n]=t[n]);return p}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(p[n]=t[n])}return p}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,p=t.mdxType,a=t.originalType,s=t.parentName,l=o(t,["components","mdxType","originalType","parentName"]),h=c(n),d=p,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(m,i(i({ref:e},l),{},{components:n})):r.createElement(m,i({ref:e},l))}));function d(t,e){var n=arguments,p=e&&e.mdxType;if("string"==typeof t||p){var a=n.length,i=new Array(a);i[0]=h;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:p,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},35279:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var r=n(87462),p=n(63366),a=(n(67294),n(3905)),i=["components"],o={title:"Http\u5feb\u901f\u5f00\u59cb",description:"Http\u5feb\u901f\u5f00\u59cb"},s=void 0,c={unversionedId:"quick-start/quick-start-http",id:"version-2.4.0/quick-start/quick-start-http",isDocsHomePage:!1,title:"Http\u5feb\u901f\u5f00\u59cb",description:"Http\u5feb\u901f\u5f00\u59cb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/quick-start/quick-start-http.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-http",permalink:"/zh/docs/quick-start/quick-start-http",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/quick-start/quick-start-http.md",version:"2.4.0",frontMatter:{title:"Http\u5feb\u901f\u5f00\u59cb",description:"Http\u5feb\u901f\u5f00\u59cb"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"gRPC\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/quick-start/quick-start-grpc"},next:{title:"Motan\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/quick-start/quick-start-motan"}},l=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u8fd0\u884cshenyu-examples-http\u9879\u76ee",id:"\u8fd0\u884cshenyu-examples-http\u9879\u76ee",children:[]},{value:"\u6d4b\u8bd5Http\u8bf7\u6c42",id:"\u6d4b\u8bd5http\u8bf7\u6c42",children:[]}],u={toc:l};function h(t){var e=t.components,o=(0,p.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u6863\u6f14\u793a\u5982\u4f55\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"Http"),"\u670d\u52a1\u63a5\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u3002\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u5de5\u7a0b\u4e0b\u627e\u5230\u672c\u6587\u6863\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-http"},"\u793a\u4f8b\u4ee3\u7801")," \u3002"),(0,a.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("p",null,"\u8bf7\u53c2\u8003\u8fd0\u7ef4\u90e8\u7f72\u7684\u5185\u5bb9\uff0c\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u542f\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u3002\u6bd4\u5982\uff0c\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"../deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72")," \u542f\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,a.kt)("p",null,"\u542f\u52a8\u6210\u529f\u540e\uff0c\u9700\u8981\u5728\u57fa\u7840\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"->"),"\u63d2\u4ef6\u7ba1\u7406\u4e2d\uff0c\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"divide")," \u63d2\u4ef6\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Http"),"\u8bf7\u6c42\u662f\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"divide"),"\u63d2\u4ef6\u8fdb\u884c\u5904\u7406\u3002"),(0,a.kt)("img",{src:"/img/shenyu/quick-start/http/http-plugin-enable.png",width:"60%",height:"50%"}),(0,a.kt)("p",null,"\u542f\u52a8\u7f51\u5173\uff0c\u5982\u679c\u662f\u901a\u8fc7\u6e90\u7801\u7684\u65b9\u5f0f\uff0c\u76f4\u63a5\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),"\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"ShenyuBootstrapApplication"),"\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u5728\u542f\u52a8\u524d\uff0c\u8bf7\u786e\u4fdd\u7f51\u5173\u5df2\u7ecf\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002")),(0,a.kt)("p",null,"\u5f15\u5165\u7f51\u5173\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"Http"),"\u7684\u4ee3\u7406\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!--if you use http proxy start this--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-divide</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,a.kt)("h2",{id:"\u8fd0\u884cshenyu-examples-http\u9879\u76ee"},"\u8fd0\u884cshenyu-examples-http\u9879\u76ee"),(0,a.kt)("p",null,"\u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http")),(0,a.kt)("p",null,"\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.http.ShenyuTestHttpApplication"),"main\u65b9\u6cd5\u542f\u52a8\u9879\u76ee\u3002"),(0,a.kt)("p",null,"\u6210\u529f\u542f\u52a8\u4f1a\u6709\u5982\u4e0b\u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'2021-02-10 00:57:07.561  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/test/**","pathDesc":"","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/test/**","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.577  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/save","pathDesc":"Save order","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/save","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.587  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/path/**/name","pathDesc":"","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/path/**/name","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.596  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/findById","pathDesc":"Find by id","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/findById","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:07.606  INFO 3700 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : http client register success: {"appName":"http","context":"/http","path":"/http/order/path/**","pathDesc":"","rpcType":"http","host":"192.168.50.13","port":8188,"ruleName":"/http/order/path/**","enabled":true,"registerMetaData":false} \n2021-02-10 00:57:08.023  INFO 3700 --- [           main] o.s.b.web.embedded.netty.NettyWebServer  : Netty started on port(s): 8188\n2021-02-10 00:57:08.026  INFO 3700 --- [           main] o.d.s.e.http.ShenyuTestHttpApplication     : Started ShenyuTestHttpApplication in 2.555 seconds (JVM running for 3.411) \n')),(0,a.kt)("h2",{id:"\u6d4b\u8bd5http\u8bf7\u6c42"},"\u6d4b\u8bd5Http\u8bf7\u6c42"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-examples-http"),"\u9879\u76ee\u6210\u529f\u542f\u52a8\u4e4b\u540e\u4f1a\u81ea\u52a8\u628a\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"@ShenyuSpringMvcClient")," \u6ce8\u89e3\u7684\u63a5\u53e3\u65b9\u6cd5\u6ce8\u518c\u5230\u7f51\u5173\u3002"),(0,a.kt)("p",null,"\u6253\u5f00",(0,a.kt)("inlineCode",{parentName:"p"},"\u63d2\u4ef6\u5217\u8868 -> http process -> divide"),"\u53ef\u4ee5\u770b\u5230\u63d2\u4ef6\u89c4\u5219\u914d\u7f6e\u5217\u8868\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(91029).Z})),(0,a.kt)("p",null,"\u4e0b\u9762\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"postman"),"\u6a21\u62df",(0,a.kt)("inlineCode",{parentName:"p"},"http"),"\u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"http"),"\u670d\u52a1\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(42064).Z})))}h.isMDXComponent=!0},42064:function(t,e,n){e.Z=n.p+"assets/images/postman-test-ffc28736280dc05a51162a4db2a0a7df.png"},91029:function(t,e,n){e.Z=n.p+"assets/images/rule-list-44d335cb7d35496ced765ebf3751ac55.png"}}]);