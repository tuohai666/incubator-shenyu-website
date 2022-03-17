"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1508],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},25121:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",description:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565"},p=void 0,c={unversionedId:"developer/spi/custom-load-balance",id:"version-2.4.2/developer/spi/custom-load-balance",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",description:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/developer/spi/custom-load-balance.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-load-balance",permalink:"/zh/docs/developer/spi/custom-load-balance",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/developer/spi/custom-load-balance.md",version:"2.4.2",frontMatter:{title:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",description:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"GeneralContext\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/common/general-context-plugin"},next:{title:"\u81ea\u5b9a\u4e49\u5339\u914d\u65b9\u5f0f",permalink:"/zh/docs/developer/spi/custom-match-mode"}},u=[],s={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.loadbalancer.spi.LoadBalancer")," \u8fdb\u884c\u81ea\u5b9a\u4e49\u6269\u5c55\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u4e2a\u5de5\u7a0b\uff0c\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,o.kt)("inlineCode",{parentName:"li"},"CustomLoadBalancer"),"\uff0c\u7ee7\u627f",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.loadbalancer.spi.AbstractLoadBalancer"),"\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class CustomLoadBalancer extends AbstractLoadBalancer {\n\n    @Override\n    public Upstream doSelect(final List<Upstream> upstreamList, final String ip) {\n        // \u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u5b9e\u73b0\u903b\u8f91\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u5de5\u7a0b\u7684META-INF/services\u76ee\u5f55\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.loadbalancer.spi.LoadBalancer"),"\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"${spi name}=${custom class path}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"${spi name}"),"\u8868\u793a",(0,o.kt)("inlineCode",{parentName:"p"},"spi"),"\u7684\u540d\u79f0\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"${custom class path}"),"\u8868\u793a\u8be5\u7c7b\u7684\u5168\u9650\u5b9a\u540d\u3002\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"custom=xxx.xxx.xxx.CustomLoadBalancer\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5c06\u5de5\u7a0b\u6253\u5305\uff0c\u62f7\u8d1d\u5230\u7f51\u5173 (bootstrap-bin) \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"lib")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"ext-lib")," \u76ee\u5f55\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u7ba1\u7406\u7cfb\u7edf --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u5b57\u5178\u7ba1\u7406\uff0c \u627e\u5230\u5b57\u5178\u7f16\u7801\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD_BALANCE"),"\uff0c\u65b0\u589e\u4e00\u6761\u6570\u636e\uff0c\u6ce8\u610f\u5b57\u5178\u540d\u79f0\u8981\u4e3a: ",(0,o.kt)("inlineCode",{parentName:"p"},"${spi name}"),"\uff0c\u56fe\u4e2d\u7684\u793a\u4f8b\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"custom"),"\u3002"))),(0,o.kt)("img",{src:"static/img/shenyu/241/custom_load_balancer_zh.png",width:"80%",height:"70%"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u7c7b\u578b\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"loadBalance"),"\uff1b"),(0,o.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u7f16\u7801\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD_BALANCE"),"\uff1b"),(0,o.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u540d\u79f0\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"${spi name}"),"\uff0c\u586b\u5199\u81ea\u5b9a\u4e49",(0,o.kt)("inlineCode",{parentName:"p"},"spi"),"\u7684\u540d\u79f0\uff1b"),(0,o.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u503c\uff1a\u4f7f\u7528\u65f6\uff0c\u4e0b\u62c9\u6846\u7684\u503c\uff0c\u4e0d\u8981\u548c\u73b0\u6709\u7684\u91cd\u590d\uff1b"),(0,o.kt)("p",{parentName:"blockquote"},"\u5b57\u5178\u63cf\u8ff0\u6216\u5907\u6ce8\u4fe1\u606f\uff1a\u63cf\u8ff0\u4fe1\u606f\uff1b"),(0,o.kt)("p",{parentName:"blockquote"},"\u6392\u5e8f\uff1a \u6392\u5e8f\uff1b")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u6dfb\u52a0\u9009\u62e9\u5668\u6216\u89c4\u5219\u65f6\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u5339\u914d\u65b9\u5f0f\uff1a")),(0,o.kt)("img",{src:"static/img/shenyu/241/use_custom_load_balancer_zh.png",width:"90%",height:"80%"}))}m.isMDXComponent=!0}}]);