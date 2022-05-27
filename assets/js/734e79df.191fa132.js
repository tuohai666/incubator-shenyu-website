"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[33425],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43979:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"Custom Rate Limiter",keywords:["RateLimiter"],description:"Custom Rate Limiter"},s=void 0,c={unversionedId:"developer/spi/custom-rate-limiter",id:"version-2.4.0/developer/spi/custom-rate-limiter",isDocsHomePage:!1,title:"Custom Rate Limiter",description:"Custom Rate Limiter",source:"@site/versioned_docs/version-2.4.0/developer/spi/custom-rate-limiter.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-rate-limiter",permalink:"/docs/2.4.0/developer/spi/custom-rate-limiter",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.0/developer/spi/custom-rate-limiter.md",version:"2.4.0",frontMatter:{title:"Custom Rate Limiter",keywords:["RateLimiter"],description:"Custom Rate Limiter"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Custom Predicate Judge",permalink:"/docs/2.4.0/developer/spi/custom-predicate-judge"},next:{title:"Custom Filter",permalink:"/docs/2.4.0/developer/custom-filter"}},p=[{value:"Explanation",id:"explanation",children:[]},{value:"Extension",id:"extension",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"explanation"},"Explanation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Before custom development, please customize and build the gateway environment first, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"../deployment-custom"},"custom deployment"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This article describes how to customize the extension of ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.ratelimiter.algorithm.RateLimiterAlgorithm")," ."))),(0,a.kt)("h2",{id:"extension"},"Extension"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new class ",(0,a.kt)("inlineCode",{parentName:"li"},"${you class}"),", implements ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.ratelimiter.algorithm.RateLimiterAlgorithm"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class ${you class} implements RateLimiterAlgorithm<T> {\n   \n    /**\n     * Gets script.\n     *\n     * @return the script\n     */\n    public RedisScript<T> getScript() {\n        //coding and return\n    }   \n    \n    /**\n     * Gets keys.\n     *\n     * @param id the id\n     * @return the keys\n     */\n    public List<String> getKeys(String id) {\n        //coding and return\n    }\n    \n    /**\n     * Callback string.\n     *\n     * @param script the script\n     * @param keys the keys\n     * @param scriptArgs the script args\n     */\n    public void callback(final RedisScript<?> script, final List<String> keys, final List<String> scriptArgs) {\n        //coding and return\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the project  ",(0,a.kt)("inlineCode",{parentName:"li"},"resources")," directory\uff0cCreate a new ",(0,a.kt)("inlineCode",{parentName:"li"},"META-INF/shenyu")," directory\uff0c and the new file name is : ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.ratelimiter.algorithm.RateLimiterAlgorithm"),".\nadd ",(0,a.kt)("inlineCode",{parentName:"li"},"${you spi name}")," = ",(0,a.kt)("inlineCode",{parentName:"li"},"${you class path}"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"${you spi name} = ${you class path}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"Admin")," service ---\x3e BasicConfig ---\x3e Dictionary ,  Find the dictionary code as ",(0,a.kt)("inlineCode",{parentName:"li"},"ALGORITHM_*"),", add a new piece of data, pay attention to the dictionary name: ",(0,a.kt)("inlineCode",{parentName:"li"},"${you spi name}"),".")),(0,a.kt)("img",{src:"/img/shenyu/custom/custom-rate-limiter-en.jpg",width:"40%",height:"30%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Or execute the following custom ",(0,a.kt)("inlineCode",{parentName:"li"},"SQL")," statement\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT IGNORE INTO `shenyu_dict` (\n        `id`,\n        `type`,\n        `dict_code`,\n        `dict_name`,\n        `dict_value`,\n        `desc`,\n        `sort`,\n        `enabled`,\n        `date_created`,\n        `date_updated`\n    )\nVALUES (\n        'you id',\n        'matchMode',\n        'MATCH_MODE',\n        'you spi name',\n        'you value',\n        'you spi name',\n        0,\n        1,\n        '2021-08-30 19:29:10',\n        '2021-08-30 20:15:23'\n    );\n")))}m.isMDXComponent=!0}}]);