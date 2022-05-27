"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[59584],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),g=i,m=d["".concat(p,".").concat(g)]||d[g]||s[g]||a;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80363:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],o={title:"Spring Cloud Plugin",keywords:["SpringCloud"],description:"SpringCloud Plugin"},p=void 0,u={unversionedId:"plugin-center/proxy/spring-cloud-plugin",id:"version-2.4.1/plugin-center/proxy/spring-cloud-plugin",isDocsHomePage:!1,title:"Spring Cloud Plugin",description:"SpringCloud Plugin",source:"@site/versioned_docs/version-2.4.1/plugin-center/proxy/spring-cloud-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/spring-cloud-plugin",permalink:"/docs/2.4.1/plugin-center/proxy/spring-cloud-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.1/plugin-center/proxy/spring-cloud-plugin.md",version:"2.4.1",frontMatter:{title:"Spring Cloud Plugin",keywords:["SpringCloud"],description:"SpringCloud Plugin"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Sofa Plugin",permalink:"/docs/2.4.1/plugin-center/proxy/sofa-plugin"},next:{title:"Tars Plugin",permalink:"/docs/2.4.1/plugin-center/proxy/tars-plugin"}},c=[{value:"Explanation",id:"explanation",children:[]},{value:"Introducing Plugin Support of SpringCould Gateway",id:"introducing-plugin-support-of-springcould-gateway",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Detail",id:"plugin-detail",children:[]}],s={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"explanation"},"Explanation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This plugin is the core of transforming ",(0,a.kt)("inlineCode",{parentName:"li"},"http")," protocol into ",(0,a.kt)("inlineCode",{parentName:"li"},"springCloud protocol"),".")),(0,a.kt)("h2",{id:"introducing-plugin-support-of-springcould-gateway"},"Introducing Plugin Support of SpringCould Gateway"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Introducing those dependencies in the pom.xml file of the gateway.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu springCloud plugin start--\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-springcloud</artifactId>\n    <version>${project.version}</version>\n</dependency>\n\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n    <version>${project.version}</version>\n</dependency>\n        \x3c!-- apache shenyu springCloud plugin end--\x3e\n\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-commons</artifactId>\n    <version>2.2.0.RELEASE</version>\n</dependency>\n")),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-springcloud"},"Quick start with Spring Cloud")," .")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud")," client access, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/spring-cloud-proxy"},"Spring Cloud Proxy")," ."))),(0,a.kt)("h2",{id:"plugin-detail"},"Plugin Detail"),(0,a.kt)("p",null,"After the client accesses the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShenYu")," gateway, it will automatically register the selector and rule information. For details about the selector and rule configuration, see ",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector and Rule Config")," ."),(0,a.kt)("h4",{id:"selector-handler"},"Selector Handler"),(0,a.kt)("img",{src:"/img/shenyu/plugin/springcloud/selector_en_new.png",width:"80%",height:"80%"}),(0,a.kt)("p",null,"Selector Handler, the ",(0,a.kt)("inlineCode",{parentName:"p"},"handle")," field, is an operation that can be processed by the gateway after matching the traffic. For more information, please refer to ",(0,a.kt)("a",{parentName:"p",href:"../plugin-handle-explanation"},"Plugin handle management")," in Plugin Config."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"details\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"serviceId"),"\uff1aservice id.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"gray"),"\uff1aenable gray routing."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"protocol"),"\uff1aprotocol default is 'http'.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"upstreamUrl"),"\uff1athe server instance host.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"weight"),"\uff1athe server instance and participate in load balancing calculation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"status"),"\uff1atrue: the server is available\uff0cfalse: the server is unavailable.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"timestamp"),"\uff1athe server's start time.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"warmup"),"\uff1athe server's warm up time and and participate in load balancing calculation."))))))),(0,a.kt)("p",null,"Gray routing"),(0,a.kt)("p",null,"if you want to user gray route in springCloud-plugin, you can click the ",(0,a.kt)("inlineCode",{parentName:"p"},"gray")," button."),(0,a.kt)("img",{src:"/img/shenyu/plugin/springcloud/gray_en.png",width:"80%",height:"80%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gray level publishing can customize and control the traffic proportion of new version applications when publishing new version applications, gradually complete the full launch of new version applications, maximize the business risk caused by new version publishing, reduce the impact surface caused by faults, and support rapid roll back.")),(0,a.kt)("p",null,"when the gray is open,Gateway load balancing will select one node from the current node list for routing and you can modify node weights to change the weight of nodes in the load balancing algorithm."),(0,a.kt)("img",{src:"/img/shenyu/plugin/springcloud/gray.png",width:"80%",height:"80%"}),(0,a.kt)("p",null,"It should be noted that,if your business instance not use the client jar of 'shenyu-client-springcloud', You should add gray node information manually on this selector page."),(0,a.kt)("h4",{id:"rule-handler"},"Rule Handler"),(0,a.kt)("img",{src:"/img/shenyu/plugin/springcloud/rule_en.png",width:"80%",height:"80%"}),(0,a.kt)("p",null,"Rule Handler, the ",(0,a.kt)("inlineCode",{parentName:"p"},"handle")," field, can be performed by the gateway after the final matching of traffic. For more information, please refer to ",(0,a.kt)("a",{parentName:"p",href:"../plugin-handle-explanation"},"Plugin handle management")," in Plugin Config."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"details\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path"),"\uff1arequest path."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout"),"\uff1aset time out."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Application name: it is your specific application name that needs to be invoked after the conditions are matched.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Apache ShenYu will obtain the real IP of the corresponding service and initiate http proxy calls from registration center of springCloud."))))}d.isMDXComponent=!0}}]);