"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[59779],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=s(a),p=o,m=c["".concat(l,".").concat(p)]||c[p]||b[p]||n;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},46636:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),i=["components"],u={title:"Quick start with Dubbo",description:"Quick start with Dubbo"},l=void 0,s={unversionedId:"quick-start/quick-start-dubbo",id:"version-2.3.0/quick-start/quick-start-dubbo",isDocsHomePage:!1,title:"Quick start with Dubbo",description:"Quick start with Dubbo",source:"@site/versioned_docs/version-2.3.0/quick-start/quick-start-dubbo.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-dubbo",permalink:"/docs/2.3.0/quick-start/quick-start-dubbo",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/quick-start/quick-start-dubbo.md",version:"2.3.0",frontMatter:{title:"Quick start with Dubbo",description:"Quick start with Dubbo"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Register Center Design",permalink:"/docs/2.3.0/register-center/register-center-design"},next:{title:"Quick start with grpc",permalink:"/docs/2.3.0/quick-start/quick-start-grpc"}},d=[{value:"Environment to prepare",id:"environment-to-prepare",children:[]},{value:"Run the soul-examples-dubbo project",id:"run-the-soul-examples-dubbo-project",children:[]},{value:"Dubbo plugin settings",id:"dubbo-plugin-settings",children:[]},{value:"Testing",id:"testing",children:[]}],b={toc:d};function c(e){var t=e.components,u=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},b,u,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This document introduces how to quickly access the Soul Gateway using Dubbo. You can get the code example of this document by clicking ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-dubbo"},"here"),"."),(0,n.kt)("h2",{id:"environment-to-prepare"},"Environment to prepare"),(0,n.kt)("p",null,"Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"../users-guide/soul-set-up"},"setup")," and launch ",(0,n.kt)("inlineCode",{parentName:"p"},"soul-admin")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"soul-bootstrap"),", In addition, if you use ZooKeeper for Dubbo, you need to download it in advance."),(0,n.kt)("h2",{id:"run-the-soul-examples-dubbo-project"},"Run the soul-examples-dubbo project"),(0,n.kt)("p",null,"Download",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-dubbo"},"soul-examples-dubbo"),", replace the register address in ",(0,n.kt)("inlineCode",{parentName:"p"},"spring-dubbo.xml")," with your local zk address, such as:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<dubbo:registry address="zookeeper://localhost:2181"/>\n')),(0,n.kt)("p",null,"Execute the ",(0,n.kt)("inlineCode",{parentName:"p"},"TestApacheDubboApplication")," main method to start dubbo project."),(0,n.kt)("p",null,"The following log appears when the startup is successful:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'2021-02-06 20:58:01.807  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/insert","pathDesc":"Insert a row of data","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboTestService","methodName":"insert","ruleName":"/dubbo/insert","parameterTypes":"org.dromara.soul.examples.dubbo.api.entity.DubboTest","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.821  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findAll","pathDesc":"Get all data","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboTestService","methodName":"findAll","ruleName":"/dubbo/findAll","parameterTypes":"","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.833  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findById","pathDesc":"Query by Id","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboTestService","methodName":"findById","ruleName":"/dubbo/findById","parameterTypes":"java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.844  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByListId","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByListId","ruleName":"/dubbo/findByListId","parameterTypes":"java.util.List","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.855  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByIdsAndName","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByIdsAndName","ruleName":"/dubbo/findByIdsAndName","parameterTypes":"java.util.List,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.866  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/batchSave","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"batchSave","ruleName":"/dubbo/batchSave","parameterTypes":"java.util.List","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.876  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByArrayIdsAndName","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByArrayIdsAndName","ruleName":"/dubbo/findByArrayIdsAndName","parameterTypes":"[Ljava.lang.Integer;,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.889  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/saveComplexBeanTestAndName","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"saveComplexBeanTestAndName","ruleName":"/dubbo/saveComplexBeanTestAndName","parameterTypes":"org.dromara.soul.examples.dubbo.api.entity.ComplexBeanTest,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.901  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/batchSaveAndNameAndId","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"batchSaveAndNameAndId","ruleName":"/dubbo/batchSaveAndNameAndId","parameterTypes":"java.util.List,java.lang.String,java.lang.String","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.911  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/saveComplexBeanTest","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"saveComplexBeanTest","ruleName":"/dubbo/saveComplexBeanTest","parameterTypes":"org.dromara.soul.examples.dubbo.api.entity.ComplexBeanTest","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n2021-02-06 20:58:01.922  INFO 3724 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : dubbo client register success: {"appName":"dubbo","contextPath":"/dubbo","path":"/dubbo/findByStringArray","pathDesc":"","rpcType":"dubbo","serviceName":"org.dromara.soul.examples.dubbo.api.service.DubboMultiParamService","methodName":"findByStringArray","ruleName":"/dubbo/findByStringArray","parameterTypes":"[Ljava.lang.String;","rpcExt":"{\\"group\\":\\"\\",\\"version\\":\\"\\",\\"loadbalance\\":\\"random\\",\\"retries\\":2,\\"timeout\\":10000,\\"url\\":\\"\\"}","enabled":true} \n')),(0,n.kt)("h2",{id:"dubbo-plugin-settings"},"Dubbo plugin settings"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"first enabled the ",(0,n.kt)("inlineCode",{parentName:"li"},"dubbo")," plugin in the ",(0,n.kt)("inlineCode",{parentName:"li"},"soul-admin")," plugin management."),(0,n.kt)("li",{parentName:"ul"},"then configure your registry address in ",(0,n.kt)("inlineCode",{parentName:"li"},"dubbo"),".")),(0,n.kt)("h2",{id:"testing"},"Testing"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"soul-examples-dubbo")," project will automatically register interface methods annotated with ",(0,n.kt)("inlineCode",{parentName:"p"},"@SoulDubboClient")," in the soul gateway after successful startup."),(0,n.kt)("p",null,"Open Plugin Management -> dubbo to see the list of plugin rule configurations"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(16190).Z})),(0,n.kt)("p",null,"Use PostMan to simulate HTTP to request your Dubbo service"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(35540).Z})),(0,n.kt)("p",null,"Complex multi-parameter example: The related interface implementation class is ",(0,n.kt)("inlineCode",{parentName:"p"},"org.dromara.soul.examples.apache.dubbo.service.impl.DubboMultiParamServiceImpl#batchSaveAndNameAndId"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@Override\n@SoulDubboClient(path = "/batchSaveAndNameAndId")\npublic DubboTest batchSaveAndNameAndId(List<DubboTest> dubboTestList, String id, String name) {\n    DubboTest test = new DubboTest();\n    test.setId(id);\n    test.setName("hello world soul apache dubbo param batchSaveAndNameAndId :" + name + ":" + dubboTestList.stream().map(DubboTest::getName).collect(Collectors.joining("-")));\n    return test;\n}\n')),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(66854).Z})),(0,n.kt)("p",null,"When your arguments do not match, the following exception will occur:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"2021-02-07 22:24:04.015 ERROR 14860 --- [:20888-thread-3] o.d.soul.web.handler.GlobalErrorHandler  : [e47b2a2a] Resolved [SoulException: org.apache.dubbo.remoting.RemotingException: java.lang.IllegalArgumentException: args.length != types.length\njava.lang.IllegalArgumentException: args.length != types.length\n    at org.apache.dubbo.common.utils.PojoUtils.realize(PojoUtils.java:91)\n    at org.apache.dubbo.rpc.filter.GenericFilter.invoke(GenericFilter.java:82)\n    at org.apache.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:81)\n    at org.apache.dubbo.rpc.filter.ClassLoaderFilter.invoke(ClassLoaderFilter.java:38)\n    at org.apache.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:81)\n    at org.apache.dubbo.rpc.filter.EchoFilter.invoke(EchoFilter.java:41)\n    at org.apache.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:81)\n    at org.apache.dubbo.rpc.protocol.dubbo.DubboProtocol$1.reply(DubboProtocol.java:150)\n    at org.apache.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.handleRequest(HeaderExchangeHandler.java:100)\n    at org.apache.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.received(HeaderExchangeHandler.java:175)\n    at org.apache.dubbo.remoting.transport.DecodeHandler.received(DecodeHandler.java:51)\n    at org.apache.dubbo.remoting.transport.dispatcher.ChannelEventRunnable.run(ChannelEventRunnable.java:57)\n    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n    at java.lang.Thread.run(Thread.java:748)\n] for HTTP POST /dubbo/batchSaveAndNameAndId\n")))}c.isMDXComponent=!0},35540:function(e,t,a){t.Z=a.p+"assets/images/postman-findbyid-2db0a41b2665dfc615923b07b0d27221.jpg"},66854:function(e,t,a){t.Z=a.p+"assets/images/postman-multiparams-b5bf03d0e31f67a605b7f2b19775ba34.jpg"},16190:function(e,t,a){t.Z=a.p+"assets/images/rule-list-826032a15f07a3e467617873e9ab894c.jpg"}}]);