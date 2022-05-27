"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[21508],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=i,g=s["".concat(d,".").concat(m)]||s[m]||p[m]||r;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=s;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},849:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],l={title:"Dictionary Management",keywords:["dict"],description:"dict management explanation"},d=void 0,c={unversionedId:"user-guide/admin-usage/dictionary-management",id:"user-guide/admin-usage/dictionary-management",isDocsHomePage:!1,title:"Dictionary Management",description:"dict management explanation",source:"@site/docs/user-guide/admin-usage/dictionary-management.md",sourceDirName:"user-guide/admin-usage",slug:"/user-guide/admin-usage/dictionary-management",permalink:"/docs/next/user-guide/admin-usage/dictionary-management",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/user-guide/admin-usage/dictionary-management.md",version:"current",frontMatter:{title:"Dictionary Management",keywords:["dict"],description:"dict management explanation"},sidebar:"tutorialSidebar",previous:{title:"Data Permission Management",permalink:"/docs/next/user-guide/admin-usage/data-permission"},next:{title:"Plugin Config",permalink:"/docs/next/user-guide/admin-usage/plugin-handle-explanation"}},u=[{value:"Explanation",id:"explanation",children:[]}],p={toc:u};function s(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("p",null,"This document will introduce the use of dictionary management in the Apache ShenYu background management system. Dictionary management is primarily used to maintain and manage common data dictionaries."),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," document, choose a way to start ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),". For example, ",(0,r.kt)("a",{parentName:"p",href:"../../deployment/deployment-local"},"local deployment"),". After startup, visit ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9095"),", the default username and password are: ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"123456")," ."),(0,r.kt)("p",null,"The current usage scenario is in the ",(0,r.kt)("a",{parentName:"p",href:"./plugin-handle-explanation"},"pluginHandle"),", when the data type is selected as the ",(0,r.kt)("inlineCode",{parentName:"p"},"dropdown"),":"),(0,r.kt)("img",{src:"/img/shenyu/basicConfig/dictionaryManagement/dictionary_pluginhandle_config_en.jpg",width:"80%",height:"50%"}),(0,r.kt)("p",null,"In dictionary management, you can add dictionary types for other places:"),(0,r.kt)("img",{src:"/img/shenyu/basicConfig/dictionaryManagement/dictionary_config_en.jpg",width:"80%",height:"50%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DictionaryType: The field name used in the ",(0,r.kt)("inlineCode",{parentName:"li"},"pluginHandle")," ."),(0,r.kt)("li",{parentName:"ul"},"DictionaryCode: Identify dictionary data."),(0,r.kt)("li",{parentName:"ul"},"DictionaryName: The name of the ",(0,r.kt)("inlineCode",{parentName:"li"},"handle")," field when adding plugins, selectors or rules."),(0,r.kt)("li",{parentName:"ul"},"DictionaryValue: The actual value of the dictionary data."),(0,r.kt)("li",{parentName:"ul"},"DictionaryDescribe: Description."),(0,r.kt)("li",{parentName:"ul"},"Sort: Dictionary data order.")),(0,r.kt)("p",null,"e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"degradeRuleGrade")," is one of fields of Sentinel's ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," json. When it adds rules, it automatically looks up all the general dictionaries of ",(0,r.kt)("inlineCode",{parentName:"p"},"type='degradeRuleGrade'")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu_dict")," table as a select-box when you edit the General rules field."),(0,r.kt)("img",{src:"/img/shenyu/basicConfig/dictionaryManagement/dictionary_add_rule_en.jpg",width:"80%",height:"50%"}))}s.isMDXComponent=!0}}]);