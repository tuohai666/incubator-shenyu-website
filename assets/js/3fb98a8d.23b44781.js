"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[6708],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},757:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={title:"Quick start with SpringCloud",description:"Quick start with SpringCloud"},l=void 0,c={unversionedId:"quick-start/quick-start-springcloud",id:"version-2.3.0/quick-start/quick-start-springcloud",isDocsHomePage:!1,title:"Quick start with SpringCloud",description:"Quick start with SpringCloud",source:"@site/versioned_docs/version-2.3.0/quick-start/quick-start-springcloud.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-springcloud",permalink:"/docs/2.3.0/quick-start/quick-start-springcloud",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/quick-start/quick-start-springcloud.md",version:"2.3.0",frontMatter:{title:"Quick start with SpringCloud",description:"Quick start with SpringCloud"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Quick start with sofa",permalink:"/docs/2.3.0/quick-start/quick-start-sofa"},next:{title:"Quick start with Tars",permalink:"/docs/2.3.0/quick-start/quick-start-tars"}},u=[{value:"Environment to prepare",id:"environment-to-prepare",children:[]},{value:"Run the soul-examples-springcloud and soul-examples-eureka project",id:"run-the-soul-examples-springcloud-and-soul-examples-eureka-project",children:[]},{value:"Enable the springCloud plugin",id:"enable-the-springcloud-plugin",children:[]},{value:"Testing http request",id:"testing-http-request",children:[]}],p={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document introduces how to quickly access the Soul Gateway using SpringCloud. You can get the code example of this document by clicking ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-springcloud"},"here"),"."),(0,o.kt)("h2",{id:"environment-to-prepare"},"Environment to prepare"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../users-guide/soul-set-up"},"setup")," and launch ",(0,o.kt)("inlineCode",{parentName:"p"},"soul-admin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"soul-bootstrap"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add the following dependencies to the ",(0,o.kt)("inlineCode",{parentName:"li"},"soul-bootstrap"),"'s ",(0,o.kt)("inlineCode",{parentName:"li"},"pom.xml")," file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--soul springCloud plugin start--\x3e\ndependency>\n    <groupId>org.dromara</groupId>\n    <artifactId>soul-spring-boot-starter-plugin-springcloud</artifactId>\n    <version>${project.version}</version>\n</dependency>\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-commons</artifactId>\n    <version>2.2.0.RELEASE</version>\n</dependency>\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>\n    <version>2.2.0.RELEASE</version>\n</dependency>\n\n\x3c!-- If using Eureka as a registry needs to be introduced --\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    <version>2.2.0.RELEASE</version>\n</dependency>\n\n\x3c!--soul springCloud plugin start end--\x3e\n")),(0,o.kt)("p",null,"Startup the ",(0,o.kt)("inlineCode",{parentName:"p"},"soul-bootstrap")," project"),(0,o.kt)("h2",{id:"run-the-soul-examples-springcloud-and-soul-examples-eureka-project"},"Run the soul-examples-springcloud and soul-examples-eureka project"),(0,o.kt)("p",null,"In the example project we use ",(0,o.kt)("inlineCode",{parentName:"p"},"eureka")," as the SpringCloud registry"),(0,o.kt)("p",null,"Download ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-eureka"},"soul-examples-eureka")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-springcloud"},"soul-examples-springcloud")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Startup the Eureka service")),(0,o.kt)("p",null,"Execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"org.dromara.soul.examples.eureka.EurekaServerApplication")," main method to start project."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Startup the Spring Cloud service")),(0,o.kt)("p",null,"Execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"org.dromara.soul.examples.springcloud.SoulTestSpringCloudApplication")," main method to start project."),(0,o.kt)("p",null,"The following log appears when the startup is successful:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'2021-02-10 14:03:51.301  INFO 2860 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService \'applicationTaskExecutor\'\n2021-02-10 14:03:51.669  INFO 2860 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : springCloud client register success: {"appName":"springCloud-test","context":"/springcloud","path":"/springcloud/order/save","pathDesc":"","rpcType":"springCloud","ruleName":"/springcloud/order/save","enabled":true} \n2021-02-10 14:03:51.676  INFO 2860 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : springCloud client register success: {"appName":"springCloud-test","context":"/springcloud","path":"/springcloud/order/path/**","pathDesc":"","rpcType":"springCloud","ruleName":"/springcloud/order/path/**","enabled":true} \n2021-02-10 14:03:51.682  INFO 2860 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : springCloud client register success: {"appName":"springCloud-test","context":"/springcloud","path":"/springcloud/order/findById","pathDesc":"","rpcType":"springCloud","ruleName":"/springcloud/order/findById","enabled":true} \n2021-02-10 14:03:51.688  INFO 2860 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : springCloud client register success: {"appName":"springCloud-test","context":"/springcloud","path":"/springcloud/order/path/**/name","pathDesc":"","rpcType":"springCloud","ruleName":"/springcloud/order/path/**/name","enabled":true} \n2021-02-10 14:03:51.692  INFO 2860 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : springCloud client register success: {"appName":"springCloud-test","context":"/springcloud","path":"/springcloud/test/**","pathDesc":"","rpcType":"springCloud","ruleName":"/springcloud/test/**","enabled":true} \n2021-02-10 14:03:52.806  WARN 2860 --- [           main] ockingLoadBalancerClientRibbonWarnLogger : You already have RibbonLoadBalancerClient on your classpath. It will be used by default. As Spring Cloud Ribbon is in maintenance mode. We recommend switching to BlockingLoadBalancerClient instead. In order to use it, set the value of `spring.cloud.loadbalancer.ribbon.enabled` to `false` or remove spring-cloud-starter-netflix-ribbon from your project.\n2021-02-10 14:03:52.848  WARN 2860 --- [           main] iguration$LoadBalancerCaffeineWarnLogger : Spring Cloud LoadBalancer is currently working with default default cache. You can switch to using Caffeine cache, by adding it to the classpath.\n2021-02-10 14:03:52.921  INFO 2860 --- [           main] o.s.c.n.eureka.InstanceInfoFactory       : Setting initial instance status as: STARTING\n2021-02-10 14:03:52.949  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Initializing Eureka in region us-east-1\n2021-02-10 14:03:53.006  INFO 2860 --- [           main] c.n.d.provider.DiscoveryJerseyProvider   : Using JSON encoding codec LegacyJacksonJson\n2021-02-10 14:03:53.006  INFO 2860 --- [           main] c.n.d.provider.DiscoveryJerseyProvider   : Using JSON decoding codec LegacyJacksonJson\n2021-02-10 14:03:53.110  INFO 2860 --- [           main] c.n.d.provider.DiscoveryJerseyProvider   : Using XML encoding codec XStreamXml\n2021-02-10 14:03:53.110  INFO 2860 --- [           main] c.n.d.provider.DiscoveryJerseyProvider   : Using XML decoding codec XStreamXml\n2021-02-10 14:03:53.263  INFO 2860 --- [           main] c.n.d.s.r.aws.ConfigClusterResolver      : Resolving eureka endpoints via configuration\n2021-02-10 14:03:53.546  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Disable delta property : false\n2021-02-10 14:03:53.546  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Single vip registry refresh property : null\n2021-02-10 14:03:53.547  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Force full registry fetch : false\n2021-02-10 14:03:53.547  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Application is null : false\n2021-02-10 14:03:53.547  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Registered Applications size is zero : true\n2021-02-10 14:03:53.547  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Application version is -1: true\n2021-02-10 14:03:53.547  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Getting all instance registry info from the eureka server\n2021-02-10 14:03:53.754  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : The response status is 200\n2021-02-10 14:03:53.756  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Starting heartbeat executor: renew interval is: 30\n2021-02-10 14:03:53.758  INFO 2860 --- [           main] c.n.discovery.InstanceInfoReplicator     : InstanceInfoReplicator onDemand update allowed rate per min is 4\n2021-02-10 14:03:53.761  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Discovery Client initialized at timestamp 1612937033760 with initial instances count: 0\n2021-02-10 14:03:53.762  INFO 2860 --- [           main] o.s.c.n.e.s.EurekaServiceRegistry        : Registering application SPRINGCLOUD-TEST with eureka with status UP\n2021-02-10 14:03:53.763  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Saw local status change event StatusChangeEvent [timestamp=1612937033763, current=UP, previous=STARTING]\n2021-02-10 14:03:53.765  INFO 2860 --- [nfoReplicator-0] com.netflix.discovery.DiscoveryClient    : DiscoveryClient_SPRINGCLOUD-TEST/host.docker.internal:springCloud-test:8884: registering service...\n2021-02-10 14:03:53.805  INFO 2860 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8884 (http) with context path \'\'\n2021-02-10 14:03:53.807  INFO 2860 --- [           main] .s.c.n.e.s.EurekaAutoServiceRegistration : Updating port to 8884\n2021-02-10 14:03:53.837  INFO 2860 --- [nfoReplicator-0] com.netflix.discovery.DiscoveryClient    : DiscoveryClient_SPRINGCLOUD-TEST/host.docker.internal:springCloud-test:8884 - registration status: 204\n2021-02-10 14:03:54.231  INFO 2860 --- [           main] o.d.s.e.s.SoulTestSpringCloudApplication : Started SoulTestSpringCloudApplication in 6.338 seconds (JVM running for 7.361) \n')),(0,o.kt)("h2",{id:"enable-the-springcloud-plugin"},"Enable the springCloud plugin"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"enabled the ",(0,o.kt)("inlineCode",{parentName:"li"},"springCloud")," plugin in the ",(0,o.kt)("inlineCode",{parentName:"li"},"soul-admin")," plugin management.")),(0,o.kt)("h2",{id:"testing-http-request"},"Testing http request"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"soul-examples-springcloud")," project will automatically register interface methods annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@SoulSpringCloudClient")," in the soul gateway after successful startup."),(0,o.kt)("p",null,"Open Plugin Management -> springcloud to see the list of plugin rule configurations"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9488).Z})),(0,o.kt)("p",null,"Use PostMan to simulate HTTP to request your SpringCloud service"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2967).Z})))}d.isMDXComponent=!0},2967:function(e,t,n){t.Z=n.p+"assets/images/postman-test-1bd985bc5b3dbe25e90f5c01d2ee1094.png"},9488:function(e,t,n){t.Z=n.p+"assets/images/rule-list-9a66ac71f764e2766fb7880c1811bae2.png"}}]);