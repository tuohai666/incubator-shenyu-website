"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[46171],{3905:function(e,t,i){i.d(t,{Zo:function(){return s},kt:function(){return d}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(i),d=a,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return i?n.createElement(k,l(l({ref:t},s),{},{components:i})):n.createElement(k,l({ref:t},s))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},8449:function(e,t,i){i.r(t),i.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=i(87462),a=i(63366),r=(i(67294),i(3905)),l=["components"],o={title:"RateLimiter Plugin",keywords:["rateLimiter"],description:"rateLimiter plugin"},u=void 0,p={unversionedId:"plugin-center/fault-tolerance/rate-limiter-plugin",id:"version-2.4.0/plugin-center/fault-tolerance/rate-limiter-plugin",isDocsHomePage:!1,title:"RateLimiter Plugin",description:"rateLimiter plugin",source:"@site/versioned_docs/version-2.4.0/plugin-center/fault-tolerance/rate-limiter-plugin.md",sourceDirName:"plugin-center/fault-tolerance",slug:"/plugin-center/fault-tolerance/rate-limiter-plugin",permalink:"/docs/2.4.0/plugin-center/fault-tolerance/rate-limiter-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.0/plugin-center/fault-tolerance/rate-limiter-plugin.md",version:"2.4.0",frontMatter:{title:"RateLimiter Plugin",keywords:["rateLimiter"],description:"rateLimiter plugin"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Hystrix Plugin",permalink:"/docs/2.4.0/plugin-center/fault-tolerance/hystrix-plugin"},next:{title:"Resilience4j Plugin",permalink:"/docs/2.4.0/plugin-center/fault-tolerance/resilience4j-plugin"}},s=[{value:"Description",id:"description",children:[]},{value:"Technical Solution",id:"technical-solution",children:[{value:"Using redis token bucket algorithm to limit traffic.",id:"using-redis-token-bucket-algorithm-to-limit-traffic",children:[]},{value:"Using redis leaky bucket algorithm to limit traffic.",id:"using-redis-leaky-bucket-algorithm-to-limit-traffic",children:[]},{value:"Using redis sliding time window algorithm to limit traffic.",id:"using-redis-sliding-time-window-algorithm-to-limit-traffic",children:[]}]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Detail",id:"plugin-detail",children:[]}],c={toc:s};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RateLimiter is core implementation of gateway restrictions on network traffic.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"the Apache ShenYu gateway provides a variety of current limiting algorithms, including ",(0,r.kt)("inlineCode",{parentName:"p"},"token bucket algorithm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"concurrent token bucket algorithm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"leaky bucket algorithm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sliding time window algorithm"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The implementation of current limiting algorithm of Apache ShenYu gateway is based on ",(0,r.kt)("inlineCode",{parentName:"p"},"redis"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can set to the interface level, or the parameter level. How to use it depends on your traffic configuration."))),(0,r.kt)("h2",{id:"technical-solution"},"Technical Solution"),(0,r.kt)("h3",{id:"using-redis-token-bucket-algorithm-to-limit-traffic"},"Using redis token bucket algorithm to limit traffic."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The system generates the token at a constant rate, and then puts the token into the token bucket."),(0,r.kt)("li",{parentName:"ul"},"The token bucket's capacity. When the bucket is full, the token put into it will be discarded."),(0,r.kt)("li",{parentName:"ul"},"Each time requests come, you need to obtain a token from the token bucket. If there are tokens, the service will be provided; if there are no tokens, the service will be rejected.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flow Diagram\uff1a\n",(0,r.kt)("img",{src:i(66861).Z}))),(0,r.kt)("h3",{id:"using-redis-leaky-bucket-algorithm-to-limit-traffic"},"Using redis leaky bucket algorithm to limit traffic."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"water (request) go to the leaky bucket first. The leaky bucket goes out at a fixed speed. When the flow speed is too fast, it will overflow directly (reject service)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flow Diagram\uff1a\n",(0,r.kt)("img",{src:i(4166).Z}))),(0,r.kt)("h3",{id:"using-redis-sliding-time-window-algorithm-to-limit-traffic"},"Using redis sliding time window algorithm to limit traffic."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The sliding time window maintains the count value of unit time. Whenever a requests pass, the count value will be increased by 1. When the count value exceeds the preset threshold, other requests in unit time will be rejected. If the unit time has ended, clear the counter to zero and start the next round counting.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flow Diagram\uff1a\n",(0,r.kt)("img",{src:i(98046).Z}))),(0,r.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"--\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"p"},"rate_limiter")," set to enable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure redis in the plugin.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Currently, supporting redis patterns of single, sentinel, and cluster.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If it is a sentinel, cluster and other multi-node configuration in URL, please use ",(0,r.kt)("inlineCode",{parentName:"p"},";")," for each instance; Division. For example, 192.168.1.1:6379; 192.168.1.2:6379\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the user don't use, please disable the plugin in the background."))),(0,r.kt)("h2",{id:"plugin-detail"},"Plugin Detail"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"rateLimiter")," dependency in ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu ratelimiter plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-ratelimiter</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu ratelimiter plugin end--\x3e\n")),(0,r.kt)("p",null,"For more information on selectors and rules configuration, see ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," , only some of the fields are covered here."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rules Handler Details")),(0,r.kt)("img",{src:"/img/shenyu/plugin/ratelimiter/ratelimiter-plugin-en-1.png",width:"80%",height:"80%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TokenBucket/Concurrent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"algorithmName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenBucket"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"concurrent"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"replenishRate"),": It is how many requests you allow users to execute per second, while not discarding any requests. This is the filling rate of token bucket.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"burstCapacity"),": it is the maximum number of requests that users are allowed to execute in one second. This is token bucket can save the number of token.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"keyResolverName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"whole")," indicates that the traffic is limited by gateway per second, and ",(0,r.kt)("inlineCode",{parentName:"p"},"remoteAddress")," indicates that the traffic is limited by IP per second.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"LeakyBucket"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"algorithmName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"leakyBucket"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"replenishRate"),": The rate at which requests are executed per unit time, and the rate at which water droplets leak out of the leaky bucket.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"burstCapacity"),": The maximum number of requests that users are allowed to execute in one second. This is the amount of water in the bucket.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"keyResolverName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"whole")," indicates that the traffic is limited by gateway per second, and ",(0,r.kt)("inlineCode",{parentName:"p"},"remoteAddress")," indicates that the traffic is limited by IP per second.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SlidingWindow"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"algorithmName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"slidingWindow"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"replenishRate"),": The rate of requests per unit time, used to calculate the size of the time window.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"burstCapacity"),": The maximum number of requests in the time window (per unit time).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"keyResolverName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"whole")," indicates that the traffic is limited by gateway per second, and ",(0,r.kt)("inlineCode",{parentName:"p"},"remoteAddress")," indicates that the traffic is limited by IP per second."))))))}m.isMDXComponent=!0},4166:function(e,t,i){t.Z=i.p+"assets/images/leakybucket-cc829d5529e0847152a90793867e9f96.png"},98046:function(e,t,i){t.Z=i.p+"assets/images/sldingwindow-c529b50727afb275845585edb72b0215.png"},66861:function(e,t,i){t.Z=i.p+"assets/images/tokenbucket-a11a51776844dc57cb9ba82904dc4ca6.png"}}]);