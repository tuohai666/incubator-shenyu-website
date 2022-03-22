"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7618],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return g}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=p(a),g=r,k=s["".concat(m,".").concat(g)]||s[g]||d[g]||l;return a?n.createElement(k,i(i({ref:e},c),{},{components:a})):n.createElement(k,i({ref:e},c))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},61857:function(t,e,a){a.r(e),a.d(e,{contentTitle:function(){return m},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={title:"Metrics Plugin",keywords:["Metrics"],description:"Metrics plugin"},m=void 0,p={unversionedId:"plugin-center/observability/metrics-plugin",id:"plugin-center/observability/metrics-plugin",isDocsHomePage:!1,title:"Metrics Plugin",description:"Metrics plugin",source:"@site/docs/plugin-center/observability/metrics-plugin.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/metrics-plugin",permalink:"/docs/next/plugin-center/observability/metrics-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/plugin-center/observability/metrics-plugin.md",version:"current",frontMatter:{title:"Metrics Plugin",keywords:["Metrics"],description:"Metrics plugin"},sidebar:"tutorialSidebar",previous:{title:"Logging Plugin",permalink:"/docs/next/plugin-center/observability/logging-plugin"},next:{title:"GeneralContext Plugin",permalink:"/docs/next/plugin-center/common/general-context-plugin"}},c=[{value:"Description",id:"description",children:[]},{value:"Technical Solutions",id:"technical-solutions",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Metrics Detail",id:"metrics-detail",children:[{value:"shenyu gateway custom metrics",id:"shenyu-gateway-custom-metrics",children:[]},{value:"jmx metrics",id:"jmx-metrics",children:[]},{value:"jvm metrics",id:"jvm-metrics",children:[]}]},{value:"Collect metrics",id:"collect-metrics",children:[]},{value:"Panel Display",id:"panel-display",children:[]}],d={toc:c};function s(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Metrics plugin is used to monitor its own running status(JVM-related) by gateway, include request response delay, QPS, TPS, and other related metrics.")),(0,l.kt)("h2",{id:"technical-solutions"},"Technical Solutions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Flow Diagram\n",(0,l.kt)("img",{src:a(35729).Z}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Make even tracking in ShenYu Gateway by asynchronous or synchronous mode.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"prometheus")," server pulls metrics' through http request, and then displays it by ",(0,l.kt)("inlineCode",{parentName:"p"},"Grafana"),"."))),(0,l.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Introduce ",(0,l.kt)("inlineCode",{parentName:"li"},"metrics")," dependency in the pom.xml file of the gateway.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu metrics plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-metrics</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu metrics plugin end--\x3e\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"modify this config in shenyu gateway yaml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"shenyu:\n  metrics:\n    enabled: false  //false is close\uff0c true is open\n    name : prometheus \n    host: 127.0.0.1\n    port: 8090\n    jmxConfig:\n    props:\n")),(0,l.kt)("h2",{id:"metrics-detail"},"Metrics Detail"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"All JVM\uff0cthread\uff0cmemory\uff0cand other related information will be made event tracking\uff0cyou can add a JVM module in the Grafana' panel, and it will be fully displayed, please refer to\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/prometheus/jmx_exporter"},"https://github.com/prometheus/jmx_exporter"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"There are also the following custom ",(0,l.kt)("inlineCode",{parentName:"p"},"metrics")))),(0,l.kt)("h3",{id:"shenyu-gateway-custom-metrics"},"shenyu gateway custom metrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"shenyu_request_total"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Counter"),(0,l.kt)("td",{parentName:"tr",align:"left"},"none"),(0,l.kt)("td",{parentName:"tr",align:"left"},"collecting all requests of Apache ShenYu Gateway")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"shenyu_request_throw_total"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Counter"),(0,l.kt)("td",{parentName:"tr",align:"left"},"none"),(0,l.kt)("td",{parentName:"tr",align:"left"},"collecting all exception requests of Apache ShenYu Gateway")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"shenyu_request_type_total"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Counter"),(0,l.kt)("td",{parentName:"tr",align:"left"},"path,type"),(0,l.kt)("td",{parentName:"tr",align:"left"},"collecting all matched requests of monitor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"shenyu_execute_latency_millis"),(0,l.kt)("td",{parentName:"tr",align:"left"},"histogram"),(0,l.kt)("td",{parentName:"tr",align:"left"},"none"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ShenYu gateway execute time interval")))),(0,l.kt)("h3",{id:"jmx-metrics"},"jmx metrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labals"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_config_reload_success_total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"counter"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Number of times configuration have successfully been reloaded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_config_reload_failure_total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"counter"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Number of times configuration have failed to be reloaded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_scrape_duration_seconds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Time this JMX scrape took, in seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_scrape_error"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Non-zero if this scrape failed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_scrape_cached_beans"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Number of beans with their matching rule cached")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_scrape_duration_seconds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Time this JMX scrape took, in seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_scrape_error"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Non-zero if this scrape failed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jmx_scrape_cached_beans"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Number of beans with their matching rule cached")))),(0,l.kt)("h3",{id:"jvm-metrics"},"jvm metrics"),(0,l.kt)("h4",{id:"standardexports"},"StandardExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"process_cpu_seconds_total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"counter"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Total user and system CPU time spent in seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"process_start_time_seconds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Start time of the process since unix epoch in seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"process_open_fds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Number of open file descriptors.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"process_max_fds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Maximum number of open file descriptors.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"process_virtual_memory_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Virtual memory size in bytes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"process_resident_memory_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Resident memory size in bytes.")))),(0,l.kt)("h4",{id:"memorypoolsexports"},"MemoryPoolsExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_objects_pending_finalization"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},'{area="heap',"|",'nonheap"}'),(0,l.kt)("td",{parentName:"tr",align:"center"},"The number of objects waiting in the finalizer queue.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_bytes_used"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},'{area="heap',"|",'nonheap"}'),(0,l.kt)("td",{parentName:"tr",align:"center"},"Used bytes of a given JVM memory area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_bytes_committed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},'{area="heap',"|",'nonheap"}'),(0,l.kt)("td",{parentName:"tr",align:"center"},"Committed (bytes) of a given JVM memory area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_bytes_max"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},'{area="heap',"|",'nonheap"}'),(0,l.kt)("td",{parentName:"tr",align:"center"},"Max (bytes) of a given JVM memory area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_bytes_init"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},'{area="heap',"|",'nonheap"}'),(0,l.kt)("td",{parentName:"tr",align:"center"},"Initial bytes of a given JVM memory area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_bytes_used"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Used bytes of a given JVM memory pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_bytes_committed"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Committed bytes of a given JVM memory pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_bytes_max"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Max bytes of a given JVM memory pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_bytes_init"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Initial bytes of a given JVM memory pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_collection_used_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Used bytes after last collection of a given JVM memory pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_collection_committed_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Committed after last collection bytes of a given JVM memory pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_collection_max_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Max bytes after last collection of a given JVM memory pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_collection_init_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Initial after last collection bytes of a given JVM memory pool.")))),(0,l.kt)("h4",{id:"memoryallocationexports"},"MemoryAllocationExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_allocated_bytes_total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"counter"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Total bytes allocated in a given JVM memory pool. Only updated after GC, not continuously.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h4",{id:"bufferpoolsexports"},"BufferPoolsExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_buffer_pool_used_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Used bytes of a given JVM buffer pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_buffer_pool_capacity_bytes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Bytes capacity of a given JVM buffer pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_buffer_pool_used_buffers"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{pool}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Used buffers of a given JVM buffer pool.")))),(0,l.kt)("h4",{id:"garbagecollectorexports"},"GarbageCollectorExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_gc_collection_seconds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"summary"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{gc}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Time spent in a given JVM garbage collector in seconds.")))),(0,l.kt)("h4",{id:"threadexports"},"ThreadExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_threads_current"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Current thread count of a JVM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_threads_daemon"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Daemon thread count of a JVM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_threads_peak"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Peak thread count of a JVM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_threads_started_total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"counter"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Started thread count of a JVM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_threads_deadlocked"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Cycles of JVM-threads that are in deadlock waiting to acquire object monitors or ownable synchronizers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_threads_deadlocked_monitor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Cycles of JVM-threads that are in deadlock waiting to acquire object monitors")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_threads_state"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{state}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Current count of threads by state")))),(0,l.kt)("h4",{id:"classloadingexports"},"ClassLoadingExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_classes_loaded"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gauge"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"The number of classes that are currently loaded in the JVM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_classes_loaded_total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"counter"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"The total number of classes that have been loaded since the JVM has started execution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm_classes_unloaded_total"),(0,l.kt)("td",{parentName:"tr",align:"center"},"counter"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"The total number of classes that have been unloaded since the JVM has started execution")))),(0,l.kt)("h4",{id:"versioninfoexports"},"VersionInfoExports"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"labels"),(0,l.kt)("th",{parentName:"tr",align:"center"},"help"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"jvm"),(0,l.kt)("td",{parentName:"tr",align:"center"},"info"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{version(java.runtime.version),vendor(java.vm.vendor),runtime(java.runtime.name)}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"VM version info")))),(0,l.kt)("h2",{id:"collect-metrics"},"Collect metrics"),(0,l.kt)("p",null,"Users need to install ",(0,l.kt)("inlineCode",{parentName:"p"},"Prometheus")," service to collect"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Choose the corresponding environment ",(0,l.kt)("a",{parentName:"p",href:"https://prometheus.io/download/"},"download address")," to install")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Modify configuration file: ",(0,l.kt)("inlineCode",{parentName:"p"},"prometheus.yml")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'prometheus'\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n    static_configs:\n    - targets: ['localhost:9190']\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"After the configuration is completed, you can directly double-click ",(0,l.kt)("inlineCode",{parentName:"li"},"prometheus.exe")," in the window to start. The default boot port is ",(0,l.kt)("inlineCode",{parentName:"li"},"9090"),", Success can be verified at http://localhost:9090/")),(0,l.kt)("h2",{id:"panel-display"},"Panel Display"),(0,l.kt)("p",null,"It is recommended to use ",(0,l.kt)("inlineCode",{parentName:"p"},"Grafana"),", Users can customize the query to personalize the display panel."),(0,l.kt)("p",null,"Here's how to install and deploy ",(0,l.kt)("inlineCode",{parentName:"p"},"Grafana for Windows")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install Grafana")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://dl.grafana.com/oss/release/grafana-7.4.2.windows-amd64.zip"},"download")," Unzip it and enter the ",(0,l.kt)("inlineCode",{parentName:"p"},"bin")," directory and ",(0,l.kt)("inlineCode",{parentName:"p"},"double-click")," ",(0,l.kt)("inlineCode",{parentName:"p"},"grafana-server.exe")," to run it. Go to http://localhost:3000/?orgId=1 ",(0,l.kt)("inlineCode",{parentName:"p"},"admin/admin")," to verify the success"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Config Prometheus DataSource")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(3622).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Config JVM Dashboard")),(0,l.kt)("p",null,"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"Create")," - ",(0,l.kt)("inlineCode",{parentName:"p"},"Import")," and enter the dashboards ID (8563 recommended)."),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(13870).Z})),(0,l.kt)("p",null,"The final JVM monitor panel looks like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(46519).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Config Custom Metric Dashboard ",(0,l.kt)("inlineCode",{parentName:"li"},"request_total"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"http_request_total"))),(0,l.kt)("p",null,"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"Create")," - ",(0,l.kt)("inlineCode",{parentName:"p"},"Import")," and enter the ",(0,l.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/img/shenyu/monitor/request_metric_dashboard.json"},"panel config json")),(0,l.kt)("p",null,"The final custom HTTP request monitoring panel looks like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(73829).Z})))}s.isMDXComponent=!0},13870:function(t,e,a){e.Z=a.p+"assets/images/jvm-import-07851d0a4298b838f4940e1255a4b27b.png"},46519:function(t,e,a){e.Z=a.p+"assets/images/jvm-4ec37708e8560160feeece11efe12ac5.png"},3622:function(t,e,a){e.Z=a.p+"assets/images/prometheus-datasource-dc030a55d003f5aec547dd0756f94da1.png"},73829:function(t,e,a){e.Z=a.p+"assets/images/request-metric-668b020e651affd9dfd0399da7c8e008.png"},35729:function(t,e,a){e.Z=a.p+"assets/images/shenyu-metrics-805b9a2539e9808d934caae9b3a1404f.png"}}]);