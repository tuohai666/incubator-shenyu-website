"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[28879],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),g=i,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21680:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={title:"Quick start with Spring Cloud",description:"Quick start with SpringCloud"},c=void 0,l={unversionedId:"quick-start/quick-start-springcloud",id:"quick-start/quick-start-springcloud",isDocsHomePage:!1,title:"Quick start with Spring Cloud",description:"Quick start with SpringCloud",source:"@site/docs/quick-start/quick-start-springcloud.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-springcloud",permalink:"/docs/next/quick-start/quick-start-springcloud",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/quick-start/quick-start-springcloud.md",version:"current",frontMatter:{title:"Quick start with Spring Cloud",description:"Quick start with SpringCloud"},sidebar:"tutorialSidebar",previous:{title:"Quick start with Sofa",permalink:"/docs/next/quick-start/quick-start-sofa"},next:{title:"Quick start with Tars",permalink:"/docs/next/quick-start/quick-start-tars"}},p=[{value:"Environment to prepare",id:"environment-to-prepare",children:[]},{value:"Run the shenyu-examples-springcloud project",id:"run-the-shenyu-examples-springcloud-project",children:[]},{value:"Test",id:"test",children:[]}],u={toc:p};function d(e){var n=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document introduces how to quickly access the Apache ShenYu gateway using Spring Cloud. You can get the code example of this document by clicking ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-springcloud"},"here")," ."),(0,o.kt)("h2",{id:"environment-to-prepare"},"Environment to prepare"),(0,o.kt)("p",null,"Please refer to the deployment to select a way to start shenyu-admin. For example, start the Apache ShenYu gateway management system through ",(0,o.kt)("a",{parentName:"p",href:"../deployment/deployment-local"},"local deployment")," ."),(0,o.kt)("p",null,"After successful startup, you need to open the springCloud plugin on in the BasicConfig ",(0,o.kt)("inlineCode",{parentName:"p"},"->")," Plugin."),(0,o.kt)("img",{src:"/img/shenyu/quick-start/springcloud/springcloud_open_en.png",width:"60%",height:"50%"}),(0,o.kt)("p",null,"If you are a startup gateway by means of source, can be directly run the ShenyuBootstrapApplication of shenyu-bootstrap module."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Before starting, make sure the gateway has added dependencies.")),(0,o.kt)("p",null,"Add the gateway proxy plugin for ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Cloud")," and add the your registry center dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu springCloud plugin start--\x3e\n               <dependency>\n                    <groupId>org.apache.shenyu</groupId>\n                    <artifactId>shenyu-spring-boot-starter-plugin-springcloud</artifactId>\n                    <version>${project.version}</version>\n                </dependency>\n\n                <dependency>\n                    <groupId>org.springframework.cloud</groupId>\n                    <artifactId>spring-cloud-commons</artifactId>\n                    <version>2.2.0.RELEASE</version>\n                </dependency>\n\n                <dependency>\n                    <groupId>org.apache.shenyu</groupId>\n                    <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n                    <version>${project.version}</version>\n                </dependency>\n        \x3c!-- springCloud if you config register center is eureka please dependency end--\x3e\n                <dependency>\n                    <groupId>org.springframework.cloud</groupId>\n                    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n                    <version>2.2.0.RELEASE</version>\n                </dependency>\n        \x3c!-- apache shenyu springCloud plugin end--\x3e\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"eureka")," config information:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"eureka:\n  client:\n    serviceUrl:\n      defaultZone: http://localhost:8761/eureka/\n  instance:\n    prefer-ip-address: true\n")),(0,o.kt)("p",null,"Note: Please ensure that the spring Cloud registry service discovery configuration is enabled"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configuration method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"spring:\n  cloud:\n    discovery:\n      enabled: true\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"code method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@SpringBootApplication\n@EnableDiscoveryClient\npublic class ShenyuBootstrapApplication {\n    \n    /**\n     * Main Entrance.\n     *\n     * @param args startup arguments\n     */\n    public static void main(final String[] args) {\n        SpringApplication.run(ShenyuBootstrapApplication.class, args);\n    }\n}\n")),(0,o.kt)("p",null,"Restart the ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap")," project."),(0,o.kt)("h2",{id:"run-the-shenyu-examples-springcloud-project"},"Run the shenyu-examples-springcloud project"),(0,o.kt)("p",null,"In the example project we used ",(0,o.kt)("inlineCode",{parentName:"p"},"Eureka")," as the registry for ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),". You can use the local ",(0,o.kt)("inlineCode",{parentName:"p"},"Eureka")," or the application provided in the example."),(0,o.kt)("p",null,"Download ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-eureka"},"shenyu-examples-eureka")," \u3001",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-examples/shenyu-examples-springcloud"},"shenyu-examples-springcloud")," ."),(0,o.kt)("p",null,"Startup the Eureka service:\nExecute the ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.eureka.EurekaServerApplication")," main method to start project."),(0,o.kt)("p",null,"Startup the Spring Cloud service:\nExecute the ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.springcloud.ShenyuTestSpringCloudApplication")," main method to start project."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"2.4.3"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu.client.springCloud.props.port")," can be non-configured if you like."),(0,o.kt)("p",null,"The following log appears when the startup is successful:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'2021-02-10 14:03:51.301  INFO 2860 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService \'applicationTaskExecutor\'\n2021-02-10 14:03:51.669  INFO 2860 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : springCloud client register success: {"appName":"springCloud-test","context":"/springcloud","path":"/springcloud/order/save","pathDesc":"","rpcType":"springCloud","ruleName":"/springcloud/order/save","enabled":true} \n2021-02-10 14:03:51.676  INFO 2860 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : springCloud client register success: {"appName":"springCloud-test","context":"/springcloud","path":"/springcloud/order/path/**","pathDesc":"","rpcType":"springCloud","ruleName":"/springcloud/order/path/**","enabled":true} \n2021-02-10 14:03:51.682  INFO 2860 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : springCloud client register success: {"appName":"springCloud-test","context":"/springcloud","path":"/springcloud/order/findById","pathDesc":"","rpcType":"springCloud","ruleName":"/springcloud/order/findById","enabled":true} \n2021-02-10 14:03:51.688  INFO 2860 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : springCloud client register success: {"appName":"springCloud-test","context":"/springcloud","path":"/springcloud/order/path/**/name","pathDesc":"","rpcType":"springCloud","ruleName":"/springcloud/order/path/**/name","enabled":true} \n2021-02-10 14:03:51.692  INFO 2860 --- [pool-1-thread-1] o.d.s.client.common.utils.RegisterUtils  : springCloud client register success: {"appName":"springCloud-test","context":"/springcloud","path":"/springcloud/test/**","pathDesc":"","rpcType":"springCloud","ruleName":"/springcloud/test/**","enabled":true} \n2021-02-10 14:03:52.806  WARN 2860 --- [           main] ockingLoadBalancerClientRibbonWarnLogger : You already have RibbonLoadBalancerClient on your classpath. It will be used by default. As Spring Cloud Ribbon is in maintenance mode. We recommend switching to BlockingLoadBalancerClient instead. In order to use it, set the value of `spring.cloud.loadbalancer.ribbon.enabled` to `false` or remove spring-cloud-starter-netflix-ribbon from your project.\n2021-02-10 14:03:52.848  WARN 2860 --- [           main] iguration$LoadBalancerCaffeineWarnLogger : Spring Cloud LoadBalancer is currently working with default default cache. You can switch to using Caffeine cache, by adding it to the classpath.\n2021-02-10 14:03:52.921  INFO 2860 --- [           main] o.s.c.n.eureka.InstanceInfoFactory       : Setting initial instance status as: STARTING\n2021-02-10 14:03:52.949  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Initializing Eureka in region us-east-1\n2021-02-10 14:03:53.006  INFO 2860 --- [           main] c.n.d.provider.DiscoveryJerseyProvider   : Using JSON encoding codec LegacyJacksonJson\n2021-02-10 14:03:53.006  INFO 2860 --- [           main] c.n.d.provider.DiscoveryJerseyProvider   : Using JSON decoding codec LegacyJacksonJson\n2021-02-10 14:03:53.110  INFO 2860 --- [           main] c.n.d.provider.DiscoveryJerseyProvider   : Using XML encoding codec XStreamXml\n2021-02-10 14:03:53.110  INFO 2860 --- [           main] c.n.d.provider.DiscoveryJerseyProvider   : Using XML decoding codec XStreamXml\n2021-02-10 14:03:53.263  INFO 2860 --- [           main] c.n.d.s.r.aws.ConfigClusterResolver      : Resolving eureka endpoints via configuration\n2021-02-10 14:03:53.546  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Disable delta property : false\n2021-02-10 14:03:53.546  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Single vip registry refresh property : null\n2021-02-10 14:03:53.547  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Force full registry fetch : false\n2021-02-10 14:03:53.547  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Application is null : false\n2021-02-10 14:03:53.547  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Registered Applications size is zero : true\n2021-02-10 14:03:53.547  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Application version is -1: true\n2021-02-10 14:03:53.547  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Getting all instance registry info from the eureka server\n2021-02-10 14:03:53.754  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : The response status is 200\n2021-02-10 14:03:53.756  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Starting heartbeat executor: renew interval is: 30\n2021-02-10 14:03:53.758  INFO 2860 --- [           main] c.n.discovery.InstanceInfoReplicator     : InstanceInfoReplicator onDemand update allowed rate per min is 4\n2021-02-10 14:03:53.761  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Discovery Client initialized at timestamp 1612937033760 with initial instances count: 0\n2021-02-10 14:03:53.762  INFO 2860 --- [           main] o.s.c.n.e.s.EurekaServiceRegistry        : Registering application SPRINGCLOUD-TEST with eureka with status UP\n2021-02-10 14:03:53.763  INFO 2860 --- [           main] com.netflix.discovery.DiscoveryClient    : Saw local status change event StatusChangeEvent [timestamp=1612937033763, current=UP, previous=STARTING]\n2021-02-10 14:03:53.765  INFO 2860 --- [nfoReplicator-0] com.netflix.discovery.DiscoveryClient    : DiscoveryClient_SPRINGCLOUD-TEST/host.docker.internal:springCloud-test:8884: registering service...\n2021-02-10 14:03:53.805  INFO 2860 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8884 (http) with context path \'\'\n2021-02-10 14:03:53.807  INFO 2860 --- [           main] .s.c.n.e.s.EurekaAutoServiceRegistration : Updating port to 8884\n2021-02-10 14:03:53.837  INFO 2860 --- [nfoReplicator-0] com.netflix.discovery.DiscoveryClient    : DiscoveryClient_SPRINGCLOUD-TEST/host.docker.internal:springCloud-test:8884 - registration status: 204\n2021-02-10 14:03:54.231  INFO 2860 --- [           main] o.d.s.e.s.ShenyuTestSpringCloudApplication : Started ShenyuTestSpringCloudApplication in 6.338 seconds (JVM running for 7.361) \n')),(0,o.kt)("h2",{id:"test"},"Test"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-examples-springcloud")," project will automatically register interface methods annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@ShenyuSpringCloudClient")," in the Apache ShenYu gateway after successful startup."),(0,o.kt)("p",null,"Open PluginList -> rpc proxy -> springCloud to see the list of plugin rule configurations:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(43671).Z})),(0,o.kt)("p",null,"Use PostMan to simulate HTTP to request your SpringCloud service:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(17921).Z})),(0,o.kt)("p",null,"Use IDEA HTTP Client Plugin to simulate HTTP to request your SpringCloud service","[local:no Shenyu proxy]",":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(37768).Z})),(0,o.kt)("p",null,"Use IDEA HTTP Client Plugin to simulate HTTP to request your SpringCloud service","[Shenyu proxy]",":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(41066).Z})))}d.isMDXComponent=!0},37768:function(e,n,t){n.Z=t.p+"assets/images/idea-http-test-local-bd2ea4b9e8ab5d867edc120e3946e00c.png"},41066:function(e,n,t){n.Z=t.p+"assets/images/idea-http-test-proxy-fc83eddb6fa4a74cc790258ac670a8ec.png"},17921:function(e,n,t){n.Z=t.p+"assets/images/postman-test-1bd985bc5b3dbe25e90f5c01d2ee1094.png"},43671:function(e,n,t){n.Z=t.p+"assets/images/rule-list-9a66ac71f764e2766fb7880c1811bae2.png"}}]);