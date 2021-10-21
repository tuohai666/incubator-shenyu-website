"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[4461],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1149:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],l={sidebar_position:6,title:"Custom Sign Algorithm",keywords:["soul"],description:"specify sign plugins for examination"},s=void 0,u={unversionedId:"developer-guide/custom-sign-algorithm",id:"version-2.3.0/developer-guide/custom-sign-algorithm",isDocsHomePage:!1,title:"Custom Sign Algorithm",description:"specify sign plugins for examination",source:"@site/versioned_docs/version-2.3.0/developer-guide/custom-sign-algorithm.md",sourceDirName:"developer-guide",slug:"/developer-guide/custom-sign-algorithm",permalink:"/docs/2.3.0/developer-guide/custom-sign-algorithm",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/developer-guide/custom-sign-algorithm.md",version:"2.3.0",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Custom Sign Algorithm",keywords:["soul"],description:"specify sign plugins for examination"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Custom Response",permalink:"/docs/2.3.0/developer-guide/custom-result"},next:{title:"A multilingual HTTP client",permalink:"/docs/2.3.0/developer-guide/developer-soul-client"}},c=[{value:"Description",id:"description",children:[]},{value:"Extension",id:"extension",children:[]}],p={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users can customize the signature authentication algorithm to achieve verification.")),(0,o.kt)("h2",{id:"extension"},"Extension"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The default implementation is ",(0,o.kt)("inlineCode",{parentName:"li"},"org.dromara.soul.plugin.sign.service.DefaultSignService"),"."),(0,o.kt)("li",{parentName:"ul"},'Declare a new class named "A" and implements  ',(0,o.kt)("inlineCode",{parentName:"li"},"org.dromara.soul.plugin.api.SignService"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"}," public interface SignService {\n \n     /**\n      * Sign verify pair.\n      *\n      * @param exchange   the exchange\n      * @return the pair\n      */\n     Pair<Boolean, String> signVerify(ServerWebExchange exchange);\n }\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When returning true in Pair, the sign verification passes. If there's false, the String in Pair will be return to the frontend to show."),(0,o.kt)("li",{parentName:"ul"},"Register defined class as a Spring Bean.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"   @Bean\n   public SignService a() {\n         return new A\n   }\n")))}m.isMDXComponent=!0}}]);