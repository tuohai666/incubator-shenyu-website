"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9811],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,y=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15449:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={sidebar_position:1,title:"Local Quick Deployment",keywords:["Deployment"],description:"Local Quick Deployment"},p=void 0,c={unversionedId:"deployment/deployment-quick",id:"version-2.4.1/deployment/deployment-quick",isDocsHomePage:!1,title:"Local Quick Deployment",description:"Local Quick Deployment",source:"@site/versioned_docs/version-2.4.1/deployment/deployment-quick.md",sourceDirName:"deployment",slug:"/deployment/deployment-quick",permalink:"/docs/2.4.1/deployment/deployment-quick",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.1/deployment/deployment-quick.md",version:"2.4.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Local Quick Deployment",keywords:["Deployment"],description:"Local Quick Deployment"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Local Deployment",permalink:"/docs/2.4.1/deployment/deployment-local"},next:{title:"Binary Packages Deployment",permalink:"/docs/2.4.1/deployment/deployment-package"}},u=[{value:"Environmental preparation",id:"environmental-preparation",children:[]},{value:"Start Apache ShenYu Bootstrap",id:"start-apache-shenyu-bootstrap",children:[]},{value:"Selector and rule configuration",id:"selector-and-rule-configuration",children:[]},{value:"by postman",id:"by-postman",children:[]},{value:"by curl",id:"by-curl",children:[]}],s={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article introduces how to quick start the ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway in the standalone environment."),(0,o.kt)("h3",{id:"environmental-preparation"},"Environmental preparation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install JDK1.8+ locally")),(0,o.kt)("h3",{id:"start-apache-shenyu-bootstrap"},"Start Apache ShenYu Bootstrap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"download ",(0,o.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.1-bootstrap-bin.tar.gz"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"unzip ",(0,o.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.1-bootstrap-bin.tar.gz"),"\u3002 go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," directory."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")),(0,o.kt)("h3",{id:"selector-and-rule-configuration"},"Selector and rule configuration"),(0,o.kt)("p",null,"please refer to ",(0,o.kt)("a",{parentName:"p",href:"../developer/local-model#add-selector-and-rules"},"Developer Local Model")," add the selector and rule."),(0,o.kt)("p",null,"example\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"your service address is",(0,o.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:8080/helloworld")," and the response like follow:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name" : "Shenyu",\n  "data" : "hello world"\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use the follow data to add selector and rule")),(0,o.kt)("h3",{id:"by-postman"},"by postman"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"POST")," method\uff0caddress",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/shenyu/plugin/selectorAndRules"),",body use ",(0,o.kt)("inlineCode",{parentName:"p"},"raw json")," content\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "pluginName": "divide",\n    "selectorHandler": "[{\\"upstreamUrl\\":\\"127.0.0.1:8080\\"}]",\n    "conditionDataList": [{\n        "paramType": "uri",\n        "operator": "match",\n        "paramValue": "/**"\n    }],\n    "ruleDataList": [{\n        "ruleHandler": "{\\"loadBalance\\":\\"random\\"}",\n        "conditionDataList": [{\n            "paramType": "uri",\n            "operator": "match",\n            "paramValue": "/**"\n        }]\n    }]\n}\n')),(0,o.kt)("h3",{id:"by-curl"},"by curl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:9195/shenyu/plugin/selectorAndRules\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "pluginName": "divide",\n    "selectorHandler": "[{\\"upstreamUrl\\":\\"127.0.0.1:8080\\"}]",\n    "conditionDataList": [{\n        "paramType": "uri",\n        "operator": "match",\n        "paramValue": "/**"\n    }],\n    "ruleDataList": [{\n        "ruleHandler": "{\\"loadBalance\\":\\"random\\"}",\n        "conditionDataList": [{\n            "paramType": "uri",\n            "operator": "match",\n            "paramValue": "/**"\n        }]\n    }]\n}\'\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"open ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:9195/helloworld"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name" : "Shenyu",\n  "data" : "hello world"\n}\n')))}d.isMDXComponent=!0}}]);