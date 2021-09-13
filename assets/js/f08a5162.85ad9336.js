"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1068],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return b}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),l=c(a),b=n,m=l["".concat(s,".").concat(b)]||l[b]||p[b]||o;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=l;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}l.displayName="MDXCreateElement"},7582:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return l}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],u={title:"Quick start with Dubbo",description:"Quick start with Dubbo"},s=void 0,c={unversionedId:"quick-start/quick-start-dubbo",id:"quick-start/quick-start-dubbo",isDocsHomePage:!1,title:"Quick start with Dubbo",description:"Quick start with Dubbo",source:"@site/docs/quick-start/quick-start-dubbo.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-dubbo",permalink:"/docs/next/quick-start/quick-start-dubbo",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/quick-start/quick-start-dubbo.md",version:"current",frontMatter:{title:"Quick start with Dubbo",description:"Quick start with Dubbo"},sidebar:"tutorialSidebar",previous:{title:"Custom Deployment",permalink:"/docs/next/deployment/deployment-custom"},next:{title:"Quick start with gRPC",permalink:"/docs/next/quick-start/quick-start-grpc"}},d=[{value:"Environment to prepare",id:"environment-to-prepare",children:[]},{value:"Run the shenyu-examples-dubbo project",id:"run-the-shenyu-examples-dubbo-project",children:[]},{value:"Test",id:"test",children:[]}],p={toc:d};function l(e){var t=e.components,u=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document introduces how to quickly access the Apache ShenYu gateway using Dubbo. You can get the code example of this document by clicking ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-dubbo"},"here"),"."),(0,o.kt)("h2",{id:"environment-to-prepare"},"Environment to prepare"),(0,o.kt)("p",null,"Please refer to the deployment to select a way to start shenyu-admin. For example, start the Apache ShenYu gateway management system through ",(0,o.kt)("a",{parentName:"p",href:"../deployment/deployment-local"},"local deployment")," ."),(0,o.kt)("p",null,"After successful startup, you need to open the Dubbo plugin on in the BasicConfig ",(0,o.kt)("inlineCode",{parentName:"p"},"->")," Plugin, and set your registry address. Please make sure the registry center is open locally."),(0,o.kt)("img",{src:"/img/shenyu/quick-start/dubbo/dubbo_open_en.png",width:"60%",height:"50%"}),(0,o.kt)("p",null,"If you are a startup gateway by means of source, can be directly run the ShenyuBootstrapApplication of shenyu-bootstrap module."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Before starting, make sure the gateway has added dependencies.")),(0,o.kt)("p",null,"If client is ",(0,o.kt)("inlineCode",{parentName:"p"},"apache dubbo"),", registry center is ",(0,o.kt)("inlineCode",{parentName:"p"},"Zookeeper"),", please refer to the following configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu  apache dubbo plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-apache-dubbo</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.dubbo</groupId>\n            <artifactId>dubbo</artifactId>\n            <version>2.7.5</version>\n        </dependency>\n        \x3c!-- Dubbo zookeeper registry dependency start --\x3e\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-client</artifactId>\n            <version>4.0.1</version>\n            <exclusions>\n                <exclusion>\n                    <artifactId>log4j</artifactId>\n                    <groupId>log4j</groupId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-framework</artifactId>\n            <version>4.0.1</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-recipes</artifactId>\n            <version>4.0.1</version>\n        </dependency>\n        \x3c!-- Dubbo zookeeper registry dependency end --\x3e\n        \x3c!-- apache shenyu  apache dubbo plugin end--\x3e\n")),(0,o.kt)("p",null,"If client is ",(0,o.kt)("inlineCode",{parentName:"p"},"alibaba dubbo"),", registry center is ",(0,o.kt)("inlineCode",{parentName:"p"},"Zookeeper"),", please refer to the following configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu alibaba dubbo plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-alibaba-dubbo</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>com.alibaba</groupId>\n            <artifactId>dubbo</artifactId>\n            <version>${alibaba.dubbo.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-client</artifactId>\n            <version>${curator.version}</version>\n            <exclusions>\n                <exclusion>\n                    <artifactId>log4j</artifactId>\n                    <groupId>log4j</groupId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-framework</artifactId>\n            <version>${curator.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.curator</groupId>\n            <artifactId>curator-recipes</artifactId>\n            <version>${curator.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu  alibaba dubbo plugin end--\x3e\n")),(0,o.kt)("h2",{id:"run-the-shenyu-examples-dubbo-project"},"Run the shenyu-examples-dubbo project"),(0,o.kt)("p",null,"Download ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-dubbo"},"shenyu-examples-dubbo")," ."),(0,o.kt)("p",null,"replace the register address in ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-examples-alibaba-dubbo-service/src/main/resources/spring-dubbo.xml")," with your local zk address, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<dubbo:registry address="zookeeper://localhost:2181"/>\n')),(0,o.kt)("p",null,"Execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.alibaba.dubbo.service.TestAlibabaDubboApplication")," main method to start dubbo project."),(0,o.kt)("p",null,"The following log appears when the startup is successful:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'2021-02-06 20:58:01.807  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/insert","pathDesc":"Insert a row of data","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboTestService","methodName":"insert","ruleName":"/dubbo/insert","parameterTypes":"org.dromara.shenyu.examples.dubbo.api.entity.DubboTest","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.821  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findAll","pathDesc":"Get all data","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboTestService","methodName":"findAll","ruleName":"/dubbo/findAll","parameterTypes":"","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.833  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findById","pathDesc":"Query by Id","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboTestService","methodName":"findById","ruleName":"/dubbo/findById","parameterTypes":"java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.844  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByListId","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByListId","ruleName":"/dubbo/findByListId","parameterTypes":"java.util.List","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.855  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByIdsAndName","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByIdsAndName","ruleName":"/dubbo/findByIdsAndName","parameterTypes":"java.util.List,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.866  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/batchSave","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"batchSave","ruleName":"/dubbo/batchSave","parameterTypes":"java.util.List","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.876  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByArrayIdsAndName","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByArrayIdsAndName","ruleName":"/dubbo/findByArrayIdsAndName","parameterTypes":"[Ljava.lang.Integer;,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.889  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/saveComplexBeanTestAndName","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"saveComplexBeanTestAndName","ruleName":"/dubbo/saveComplexBeanTestAndName","parameterTypes":"org.dromara.shenyu.examples.dubbo.api.entity.ComplexBeanTest,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.901  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/batchSaveAndNameAndId","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"batchSaveAndNameAndId","ruleName":"/dubbo/batchSaveAndNameAndId","parameterTypes":"java.util.List,java.lang.String,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.911  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/saveComplexBeanTest","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"saveComplexBeanTest","ruleName":"/dubbo/saveComplexBeanTest","parameterTypes":"org.dromara.shenyu.examples.dubbo.api.entity.ComplexBeanTest","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.922  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByStringArray","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.shenyu.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByStringArray","ruleName":"/dubbo/findByStringArray","parameterTypes":"[Ljava.lang.String;","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n')),(0,o.kt)("h2",{id:"test"},"Test"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-examples-dubbo")," project will automatically register interface methods annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@ShenyuDubboClient")," in the Apache ShenYu gateway after successful startup."),(0,o.kt)("p",null,"Open PluginList -> rpc proxy -> dubbo to see the list of plugin rule configurations:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(151).Z})),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"PostMan")," to simulate ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP")," to request your ",(0,o.kt)("inlineCode",{parentName:"p"},"Dubbo")," service:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1597).Z})),(0,o.kt)("p",null,"Complex multi-parameter example: The related interface implementation class is ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.alibaba.dubbo.service.impl.DubboMultiParamServiceImpl#batchSaveAndNameAndId"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Override\n@ShenyuDubboClient(path = "/batchSaveAndNameAndId")\npublic DubboTest batchSaveAndNameAndId(List<DubboTest> dubboTestList, String id, String name) {\n    DubboTest test = new DubboTest();\n    test.setId(id);\n    test.setName("hello world shenyu alibaba dubbo param batchSaveAndNameAndId :" + name + ":" + dubboTestList.stream().map(DubboTest::getName).collect(Collectors.joining("-")));\n    return test;\n}\n')),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6864).Z})),(0,o.kt)("p",null,"When your arguments do not match, the following exception will occur:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"2021-02-07 22:24:04.015 ERROR 14860 --- [:20888-thread-3] o.d.shenyu.web.handler.GlobalErrorHandler  : [e47b2a2a] Resolved [ShenyuException: org.apache.dubbo.remoting.RemotingException: java.lang.IllegalArgumentException: args.length != types.length\njava.lang.IllegalArgumentException: args.length != types.length\n    at org.apache.dubbo.common.utils.PojoUtils.realize(PojoUtils.java:91)\n    at org.apache.dubbo.rpc.filter.GenericFilter.invoke(GenericFilter.java:82)\n    at org.apache.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:81)\n    at org.apache.dubbo.rpc.filter.ClassLoaderFilter.invoke(ClassLoaderFilter.java:38)\n    at org.apache.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:81)\n    at org.apache.dubbo.rpc.filter.EchoFilter.invoke(EchoFilter.java:41)\n    at org.apache.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:81)\n    at org.apache.dubbo.rpc.protocol.dubbo.DubboProtocol$1.reply(DubboProtocol.java:150)\n    at org.apache.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.handleRequest(HeaderExchangeHandler.java:100)\n    at org.apache.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.received(HeaderExchangeHandler.java:175)\n    at org.apache.dubbo.remoting.transport.DecodeHandler.received(DecodeHandler.java:51)\n    at org.apache.dubbo.remoting.transport.dispatcher.ChannelEventRunnable.run(ChannelEventRunnable.java:57)\n    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n    at java.lang.Thread.run(Thread.java:748)\n] for HTTP POST /dubbo/batchSaveAndNameAndId\n")))}l.isMDXComponent=!0},1597:function(e,t,a){t.Z=a.p+"assets/images/postman-findbyid-2db0a41b2665dfc615923b07b0d27221.jpg"},6864:function(e,t,a){t.Z=a.p+"assets/images/postman-multiparams-b5bf03d0e31f67a605b7f2b19775ba34.jpg"},151:function(e,t,a){t.Z=a.p+"assets/images/rule-list-826032a15f07a3e467617873e9ab894c.jpg"}}]);