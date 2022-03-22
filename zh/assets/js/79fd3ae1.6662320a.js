"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[667],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,y=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return r?t.createElement(y,p(p({ref:n},l),{},{components:r})):t.createElement(y,p({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=r[u];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75457:function(e,n,r){r.r(n),r.d(n,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),p=["components"],i={sidebar_position:3,title:"Docker\u90e8\u7f72",keywords:["Docker","\u90e8\u7f72"],description:"docker\u90e8\u7f72"},c=void 0,u={unversionedId:"deployment/deployment-docker",id:"deployment/deployment-docker",isDocsHomePage:!1,title:"Docker\u90e8\u7f72",description:"docker\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/deployment/deployment-docker.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker",permalink:"/zh/docs/next/deployment/deployment-docker",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/deployment/deployment-docker.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker\u90e8\u7f72",keywords:["Docker","\u90e8\u7f72"],description:"docker\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"Docker-compose \u90e8\u7f72",permalink:"/zh/docs/next/deployment/deployment-docker-compose"},next:{title:"k8s\u90e8\u7f72",permalink:"/zh/docs/next/deployment/deployment-k8s"}},l=[{value:"\u542f\u52a8Apache ShenYu Admin",id:"\u542f\u52a8apache-shenyu-admin",children:[]},{value:"\u542f\u52a8Apache ShenYu Bootstrap",id:"\u542f\u52a8apache-shenyu-bootstrap",children:[]}],s={toc:l};function d(e){var n=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," \u6765\u90e8\u7f72 ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,a.kt)("h3",{id:"\u542f\u52a8apache-shenyu-admin"},"\u542f\u52a8Apache ShenYu Admin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> docker pull apache/shenyu-admin:${current.version}\n> docker network create shenyu\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"h2")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> docker run -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"MySQL")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e,\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"mysql-connector.jar")," \u62f7\u8d1d\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"/${your_work_dir}/ext-lib"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -e "SPRING_PROFILES_ACTIVE=mysql" -e "spring.datasource.url=jdbc:mysql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,a.kt)("p",null,"\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f, \u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/blob/master/shenyu-admin/src/main/resources/"},"\u914d\u7f6e\u6587\u4ef6\u5730\u5740")," \u4e2d\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"application-mysql.yml"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"application-pg.yml")," \u914d\u7f6e\u653e\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"${your_work_dir}/conf")," \uff0c \u7136\u540e\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"PostgreSql")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e, \u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=pg" -e "spring.datasource.url=jdbc:postgresql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.username=${your_username}" -e "spring.datasource.password=${your_password}" -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,a.kt)("p",null,"\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f, \u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/blob/master/shenyu-admin/src/main/resources/"},"\u914d\u7f6e\u6587\u4ef6\u5730\u5740")," \u4e2d\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"application-mysql.yml"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"application-pg.yml")," \u914d\u7f6e\u653e\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"${your_work_dir}/conf")," \uff0c \u7136\u540e\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,a.kt)("h3",{id:"\u542f\u52a8apache-shenyu-bootstrap"},"\u542f\u52a8Apache ShenYu Bootstrap"),(0,a.kt)("p",null,"\u5bbf\u4e3b\u673a\u4e2d\uff0cbootstrap\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-bootstrap/src/main/resources"},"\u914d\u7f6e\u6587\u4ef6"),"\u6240\u5728\u76ee\u5f55\u8bb0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"$BOOTSTRAP_CONF"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> docker network create shenyu\n> docker pull apache/shenyu-bootstrap:${current.version}\n> docker run -d \\\n  -p 9195:9195 \\\n  -v $BOOTSTRAP_CONF:/opt/shenyu-bootstrap/conf \\\n  apache/shenyu-bootstrap:${current.version}\n")))}d.isMDXComponent=!0}}]);