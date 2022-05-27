"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[64571],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30544:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Http Proxy",keywords:["Http"],description:"Integrate Http with shenyu gateway"},p=void 0,s={unversionedId:"user-guide/http-proxy",id:"version-2.4.0/user-guide/http-proxy",isDocsHomePage:!1,title:"Http Proxy",description:"Integrate Http with shenyu gateway",source:"@site/versioned_docs/version-2.4.0/user-guide/http-proxy.md",sourceDirName:"user-guide",slug:"/user-guide/http-proxy",permalink:"/docs/2.4.0/user-guide/http-proxy",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.0/user-guide/http-proxy.md",version:"2.4.0",frontMatter:{title:"Http Proxy",keywords:["Http"],description:"Integrate Http with shenyu gateway"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"gRPC Proxy",permalink:"/docs/2.4.0/user-guide/grpc-proxy"},next:{title:"Motan Proxy",permalink:"/docs/2.4.0/user-guide/motan-proxy"}},u=[{value:"Add divide plugin in gateway",id:"add-divide-plugin-in-gateway",children:[]},{value:"Http request access gateway (for springMvc)",id:"http-request-access-gateway-for-springmvc",children:[]},{value:"Http request access gateway(other framework)",id:"http-request-access-gatewayother-framework",children:[]},{value:"User request",id:"user-request",children:[]}],d={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document is intended to help the ",(0,i.kt)("inlineCode",{parentName:"p"},"Http")," service access the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Divide")," plugin to handle ",(0,i.kt)("inlineCode",{parentName:"p"},"Http")," requests."),(0,i.kt)("p",null,"Before the connection, start ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,i.kt)("inlineCode",{parentName:"p"},"Divide")," plugin, and add related dependencies on the gateway and ",(0,i.kt)("inlineCode",{parentName:"p"},"Http")," application client. Refer to the previous ",(0,i.kt)("a",{parentName:"p",href:"../quick-start/quick-start-http"},"Quick start with Http")," ."),(0,i.kt)("p",null,"For details about client access configuration, see ",(0,i.kt)("a",{parentName:"p",href:"./register-center-access"},"Application Client Access Config")," ."),(0,i.kt)("p",null,"For details about data synchronization configurations, see ",(0,i.kt)("a",{parentName:"p",href:"./use-data-sync"},"Data Synchronization Config")," ."),(0,i.kt)("h2",{id:"add-divide-plugin-in-gateway"},"Add divide plugin in gateway"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add the following dependencies to the gateway's ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")," file:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-divide</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,i.kt)("h2",{id:"http-request-access-gateway-for-springmvc"},"Http request access gateway (for springMvc)"),(0,i.kt)("p",null,"Please refer this\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SpringBoot"),(0,i.kt)("p",{parentName:"li"},"Add the following dependencies to the ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," file in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Http")," service:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-client-springmvc</artifactId>\n        <version>${shenyu.version}</version>\n    </dependency>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SpringMvc"),(0,i.kt)("p",{parentName:"li"},"Add the following dependencies to the ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," file in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Http")," service:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"       <dependency>\n           <groupId>org.apache.shenyu</groupId>\n           <artifactId>shenyu-client-springmvc</artifactId>\n           <version>${shenyu.version}</version>\n       </dependency>\n")),(0,i.kt)("p",null,"Add the following to the ",(0,i.kt)("inlineCode",{parentName:"p"},"XML")," file defined by your ",(0,i.kt)("inlineCode",{parentName:"p"},"bean")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'   <bean id ="springMvcClientBeanPostProcessor" class ="org.apache.shenyu.client.springmvc.init.SpringMvcClientBeanPostProcessor">\n        <constructor-arg  ref="shenyuRegisterCenterConfig"/>\n   </bean>\n\n   <bean id="shenyuRegisterCenterConfig" class="org.apache.shenyu.register.common.config.ShenyuRegisterCenterConfig">\n        <property name="registerType" value="http"/>\n        <property name="serverList" value="http://localhost:9095"/>\n        <property name="props">\n             <map>\n               <entry key="contextPath" value="/your contextPath"/>\n               <entry key="appName" value="your name"/>\n               <entry key="port" value="your port"/>\n               <entry key="isFull" value="false"/>\n             </map>\n        </property>\n   </bean>\n')),(0,i.kt)("p",null,"Add this annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"@ShenyuSpringMvcClient")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"controller")," interface."),(0,i.kt)("p",null,"You can apply the annotation to class-level in a controller. The name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," variable is prefix and ",(0,i.kt)("inlineCode",{parentName:"p"},"/**")," will apply proxy for entire interfaces."),(0,i.kt)("p",null,"Example(1)"),(0,i.kt)("p",null,"The following indicates that ",(0,i.kt)("inlineCode",{parentName:"p"},"/test/payment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/test/findByUserId")," will be proxy by the gateway."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("/test")\n  @ShenyuSpringMvcClient(path = "/test/**")\n  public class HttpTestController {\n\n      @PostMapping("/payment")\n      public UserDTO post(@RequestBody final UserDTO userDTO) {\n          return userDTO;\n      }\n\n      @GetMapping("/findByUserId")\n      public UserDTO findByUserId(@RequestParam("userId") final String userId) {\n          UserDTO userDTO = new UserDTO();\n          userDTO.setUserId(userId);\n          userDTO.setUserName("hello world");\n          return userDTO;\n      }\n   }\n')),(0,i.kt)("p",null,"Example(2)"),(0,i.kt)("p",null,"The following indicates that ",(0,i.kt)("inlineCode",{parentName:"p"},"/order/save")," is proxied by the gateway, while ",(0,i.kt)("inlineCode",{parentName:"p"},"/order/findById")," is not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("/order")\n  @ShenyuSpringMvcClient(path = "/order")\n  public class OrderController {\n\n      @PostMapping("/save")\n      @ShenyuSpringMvcClient(path = "/save")\n      public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n          orderDTO.setName("hello world save order");\n          return orderDTO;\n      }\n\n      @GetMapping("/findById")\n      public OrderDTO findById(@RequestParam("id") final String id) {\n          OrderDTO orderDTO = new OrderDTO();\n          orderDTO.setId(id);\n          orderDTO.setName("hello world findById");\n          return orderDTO;\n      }\n  }\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start your project, your service interface is connected to the gateway, go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," management system plugin list ",(0,i.kt)("inlineCode",{parentName:"li"},"->")," HTTP process ",(0,i.kt)("inlineCode",{parentName:"li"},"->")," Divide, see automatically created selectors and rules.")),(0,i.kt)("h2",{id:"http-request-access-gatewayother-framework"},"Http request access gateway(other framework)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, find ",(0,i.kt)("inlineCode",{parentName:"li"},"divide")," plugin in ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),", add selector, and rules, and filter traffic matching."),(0,i.kt)("li",{parentName:"ul"},"If you don't know how to configure, please refer to ",(0,i.kt)("a",{parentName:"li",href:"../user-guide/admin-usage/selector-and-rule"},"Selector Detailed Explanation"),"."),(0,i.kt)("li",{parentName:"ul"},"You can also develop your customized http-client\uff0crefer to ",(0,i.kt)("a",{parentName:"li",href:"../developer/developer-shenyu-client"},"multi-language Http client development"),"\u3002")),(0,i.kt)("h2",{id:"user-request"},"User request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Send the request as before, only two points need to notice."),(0,i.kt)("li",{parentName:"ul"},"Firstly, the domain name that requested before in your service, now need to replace with gateway's domain name."),(0,i.kt)("li",{parentName:"ul"},"Secondly, ",(0,i.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," Gateway needs a route prefix which comes from ",(0,i.kt)("inlineCode",{parentName:"li"},"contextPath"),", it configured during the integration with gateway, you can change it freely in ",(0,i.kt)("inlineCode",{parentName:"li"},"divide")," plugin of ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),", if you are familiar with it.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"for example, if you have an ",(0,i.kt)("inlineCode",{parentName:"li"},"order")," service, and it has an interface, the request url: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/test/save")),(0,i.kt)("li",{parentName:"ul"},"Now need to change to:  ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:9195/order/test/save")),(0,i.kt)("li",{parentName:"ul"},"We can see ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:9195")," is your gateway's ",(0,i.kt)("inlineCode",{parentName:"li"},"ip")," port\uff0cdefault port number is ",(0,i.kt)("inlineCode",{parentName:"li"},"9195")," \uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"/order")," is your ",(0,i.kt)("inlineCode",{parentName:"li"},"contextPath")," which you configured with gateway."),(0,i.kt)("li",{parentName:"ul"},"Other parameters doesn't change in request method."))),(0,i.kt)("li",{parentName:"ul"},"Then you can visit, very easy and simple.")))}c.isMDXComponent=!0}}]);