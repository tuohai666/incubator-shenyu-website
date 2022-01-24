"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1187],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(y,c(c({ref:t},l),{},{components:n})):r.createElement(y,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96252:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return l},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],s={sidebar_position:3,title:"Docker-compose Deployment",keywords:["docker-compose","Deployment"],description:"Docker-compose Deployment"},p=void 0,i={unversionedId:"deployment/deployment-docker-compose",id:"deployment/deployment-docker-compose",isDocsHomePage:!1,title:"Docker-compose Deployment",description:"Docker-compose Deployment",source:"@site/docs/deployment/deployment-docker-compose.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker-compose",permalink:"/docs/next/deployment/deployment-docker-compose",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/deployment/deployment-docker-compose.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker-compose Deployment",keywords:["docker-compose","Deployment"],description:"Docker-compose Deployment"},sidebar:"tutorialSidebar",previous:{title:"Binary Packages Deployment",permalink:"/docs/next/deployment/deployment-package"},next:{title:"Docker Deployment",permalink:"/docs/next/deployment/deployment-docker"}},l=[{value:"start admin and bootstrap",id:"start-admin-and-bootstrap",children:[]}],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article introduces the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," to deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."),(0,a.kt)("h3",{id:"start-admin-and-bootstrap"},"start admin and bootstrap"),(0,a.kt)("p",null,"Choose one as the data source. It can be ",(0,a.kt)("inlineCode",{parentName:"p"},"h2")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pg"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"h2"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://raw.githubusercontent.com/apache/incubator-shenyu/master/shenyu-dist/shenyu-docker-compose-dist/src/main/resources/install.sh | bash -s master h2\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://raw.githubusercontent.com/apache/incubator-shenyu/master/shenyu-dist/shenyu-docker-compose-dist/src/main/resources/install.sh | bash -s master mysql\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"pg"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://raw.githubusercontent.com/apache/incubator-shenyu/master/shenyu-dist/shenyu-docker-compose-dist/src/main/resources/install.sh | bash -s master pg\n")))}m.isMDXComponent=!0}}]);