"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[4491],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65378:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={title:"Custom Response",keywords:["Custom Response"],description:"customising response structure"},l=void 0,u={unversionedId:"developer/custom-result",id:"version-2.4.1/developer/custom-result",isDocsHomePage:!1,title:"Custom Response",description:"customising response structure",source:"@site/versioned_docs/version-2.4.1/developer/custom-result.md",sourceDirName:"developer",slug:"/developer/custom-result",permalink:"/docs/2.4.1/developer/custom-result",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.1/developer/custom-result.md",version:"2.4.1",frontMatter:{title:"Custom Response",keywords:["Custom Response"],description:"customising response structure"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Custom Plugin",permalink:"/docs/2.4.1/developer/custom-plugin"},next:{title:"Custom Sign Algorithm",permalink:"/docs/2.4.1/developer/custom-sign-algorithm"}},c=[{value:"Description",id:"description",children:[]},{value:"Default Implementation",id:"default-implementation",children:[]},{value:"Extensions",id:"extensions",children:[]}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This doc offers examples for customising response structure in ",(0,a.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," gateway."),(0,a.kt)("li",{parentName:"ul"},"The response body structure in gateways should be unified, it is recommended for specify yours.")),(0,a.kt)("h2",{id:"default-implementation"},"Default Implementation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The default implementation class is ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.api.result.DefaultShenyuResult"),"."),(0,a.kt)("li",{parentName:"ul"},"Following is the response structure:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class ShenyuDefaultEntity implements Serializable {\n\n    private static final long serialVersionUID = -2792556188993845048L;\n\n    private Integer code;\n\n    private String message;\n\n    private Object data;\n\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The returned ",(0,a.kt)("inlineCode",{parentName:"li"},"json")," as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": -100, //response code,\n    "message": "Your parameter error, please check the relevant documentation!", //hint messages\n    "data": null  // business data\n}\n')),(0,a.kt)("h2",{id:"extensions"},"Extensions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Declare a new class named ",(0,a.kt)("inlineCode",{parentName:"li"},"CustomShenyuResult")," and implements ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.api.result.ShenyuResult"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"}," public interface ShenyuResult<T> {\n \n     /**\n      * Success t.\n      *\n      * @param code    the code\n      * @param message the message\n      * @param object  the object\n      * @return the t\n      */\n     T success(int code, String message, Object object);\n\n     /**\n      * Error t.\n      *\n      * @param code    the code\n      * @param message the message\n      * @param object  the object\n      * @return the t\n      */\n     T error(int code, String message, Object object);\n }\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"T")," is a generic parameter for your response data."),(0,a.kt)("li",{parentName:"ul"},"Register defined class as a ",(0,a.kt)("inlineCode",{parentName:"li"},"Spring Bean"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    @Bean\n    public ShenyuResult customShenyuResult() {\n          return new CustomShenyuResult();\n    }\n")))}m.isMDXComponent=!0}}]);