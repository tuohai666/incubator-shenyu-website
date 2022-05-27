"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[27528],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return s}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=o(t),s=r,g=d["".concat(u,".").concat(s)]||d[s]||c[s]||i;return t?a.createElement(g,p(p({ref:n},m),{},{components:t})):a.createElement(g,p({ref:n},m))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var o=2;o<i;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50830:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),p=["components"],l={title:"Param-mapping Plugin",keywords:["param-mapping-plugin"],description:"param-mapping-plugin"},u=void 0,o={unversionedId:"plugin-center/http-handle/param-mapping-plugin",id:"version-2.4.1/plugin-center/http-handle/param-mapping-plugin",isDocsHomePage:!1,title:"Param-mapping Plugin",description:"param-mapping-plugin",source:"@site/versioned_docs/version-2.4.1/plugin-center/http-handle/param-mapping-plugin.md",sourceDirName:"plugin-center/http-handle",slug:"/plugin-center/http-handle/param-mapping-plugin",permalink:"/docs/2.4.1/plugin-center/http-handle/param-mapping-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.1/plugin-center/http-handle/param-mapping-plugin.md",version:"2.4.1",frontMatter:{title:"Param-mapping Plugin",keywords:["param-mapping-plugin"],description:"param-mapping-plugin"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"ModifyResponse Plugin",permalink:"/docs/2.4.1/plugin-center/http-handle/modify-response-plugin"},next:{title:"Redirect Plugin",permalink:"/docs/2.4.1/plugin-center/http-handle/redirect-plugin"}},m=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Use",id:"plugin-use",children:[]},{value:"ParamMappingPlugin Guide",id:"parammappingplugin-guide",children:[]}],c={toc:m};function d(e){var n=e.components,l=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"param_mapping")," is a native plugin of Apache ShenYu Gateway and is used to edit your request param.")),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"param_mapping")," , set to enable.")),(0,i.kt)("h2",{id:"plugin-use"},"Plugin Use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Introduce ",(0,i.kt)("inlineCode",{parentName:"li"},"param_mapping")," dependency in the pom.xml file of the gateway.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu param_mapping plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-param-mapping</artifactId>\n  <version>${project.version}</version>\n</dependency>\n        \x3c!-- apache shenyu param_mapping plugin end--\x3e\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Selectors and rules, please refer to:",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Only those matched requests can be modified your request body.")))),(0,i.kt)("h2",{id:"parammappingplugin-guide"},"ParamMappingPlugin Guide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1.Configuration selector"),(0,i.kt)("li",{parentName:"ul"},"2.Configuration rule"),(0,i.kt)("li",{parentName:"ul"},"3.modify request body\n",(0,i.kt)("img",{src:t(64591).Z})),(0,i.kt)("li",{parentName:"ul"},"param details:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addParameterKeys"),": add a new ",(0,i.kt)("inlineCode",{parentName:"li"},"key-value")," on body"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replaceParameterKeys"),": replace request body's ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," \uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"key")," is the value to be replaced\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"value")," is the value after replacement"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"removeParameterKeys"),": remove a body ",(0,i.kt)("inlineCode",{parentName:"li"},"key"))))),(0,i.kt)("p",null,"param_mapping modify the request body is achieved through ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONPath")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"$.")," represents the root directory."),(0,i.kt)("p",null,"use the configuration\uff0cunopened the plugin\uff0crequest body is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"id":3,"data":{"value":"18","age":"36"}}\n')),(0,i.kt)("p",null,"open the plugin\uff0cthe final request body is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"name":"shenyu","userId":3,"data":{"age":"36"}}\n')),(0,i.kt)("p",null,"add a new key-value ",(0,i.kt)("inlineCode",{parentName:"p"},"name:shenyu"),",replace the key ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),", remove the key ",(0,i.kt)("inlineCode",{parentName:"p"},"data.value")," ."))}d.isMDXComponent=!0},64591:function(e,n,t){n.Z=t.p+"assets/images/param-mapping-48f0bc50c54e2044a1904fe4870ba9b5.png"}}]);