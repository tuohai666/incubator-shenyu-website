"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[19493],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(t),g=r,m=c["".concat(u,".").concat(g)]||c[g]||d[g]||i;return t?a.createElement(m,l(l({ref:n},p),{},{components:t})):a.createElement(m,l({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},34397:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],o={sidebar_position:2,title:"Custom Plugin",keywords:["soul"],description:"plugins"},u=void 0,s={unversionedId:"developer-guide/custom-plugin",id:"version-2.3.0/developer-guide/custom-plugin",isDocsHomePage:!1,title:"Custom Plugin",description:"plugins",source:"@site/versioned_docs/version-2.3.0/developer-guide/custom-plugin.md",sourceDirName:"developer-guide",slug:"/developer-guide/custom-plugin",permalink:"/docs/2.3.0/developer-guide/custom-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/developer-guide/custom-plugin.md",version:"2.3.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Custom Plugin",keywords:["soul"],description:"plugins"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Filter Extension",permalink:"/docs/2.3.0/developer-guide/custom-filter"},next:{title:"File Uploading And Downloading",permalink:"/docs/2.3.0/developer-guide/file-and-image"}},p=[{value:"Description",id:"description",children:[]},{value:"Single Responsibility Plugins",id:"single-responsibility-plugins",children:[]},{value:"Matching Traffic Processing Plugin",id:"matching-traffic-processing-plugin",children:[]},{value:"Subscribe your plugin data and do customized jobs",id:"subscribe-your-plugin-data-and-do-customized-jobs",children:[]},{value:"Do not use SelectorList and RulesList",id:"do-not-use-selectorlist-and-ruleslist",children:[]}],d={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plugins are core executors of soul gateway. Every plugin handles matched requests when enabled."),(0,i.kt)("li",{parentName:"ul"},"There are two kinds of plugins in the soul gateway."),(0,i.kt)("li",{parentName:"ul"},"The first type is a call chain with a single responsibility, and traffic cannot be customized."),(0,i.kt)("li",{parentName:"ul"},"The other one can do its own chain of responsibility for matched traffic."),(0,i.kt)("li",{parentName:"ul"},"You could reference from soul-plugin module and develop plugins by yourself. Please fire pull requests of your wonderful plugins without hesitate.")),(0,i.kt)("h2",{id:"single-responsibility-plugins"},"Single Responsibility Plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add following dependency:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," <dependency>\n        <groupId>org.dromara</groupId>\n        <artifactId>soul-plugin-api</artifactId>\n        <version>${last.version}</version>\n  </dependency>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Declare a new class named "A" and implements ',(0,i.kt)("inlineCode",{parentName:"li"},"org.dromara.soul.plugin.api.SoulPlugin"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public interface SoulPlugin {\n    \n    /**\n     * Process the Web request and (optionally) delegate to the next\n     * {@code WebFilter} through the given {@link SoulPluginChain}.\n     *\n     * @param exchange the current server exchange\n     * @param chain    provides a way to delegate to the next filter\n     * @return {@code Mono<Void>} to indicate when request processing is complete\n     */\n    Mono<Void> execute(ServerWebExchange exchange, SoulPluginChain chain);\n    \n    /**\n     * return plugin order .\n     * This attribute To determine the plugin execution order in the same type plugin.\n     *\n     * @return int order\n     */\n    int getOrder();\n    \n    /**\n     * acquire plugin name.\n     * this is plugin name define you must offer the right name.\n     * if you impl AbstractSoulPlugin this attribute not use.\n     *\n     * @return plugin name.\n     */\n    default String named() {\n        return "";\n    }\n    \n    /**\n     * plugin is execute.\n     * if return true this plugin can not execute.\n     *\n     * @param exchange the current server exchange\n     * @return default false.\n     */\n    default Boolean skip(ServerWebExchange exchange) {\n        return false;\n    }\n}\n\n')),(0,i.kt)("p",null,"Detailed instruction of interface methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"execute()")," core method, you can do any task here freely."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getOrder()")," get the order of current plugin."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"named()")," acquire the name of specific plugin."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skip()")," determines whether this plugin should be skipped under certain conditions."),(0,i.kt)("li",{parentName:"ul"},"Register plugin in Spring as a Bean, or simply apply ",(0,i.kt)("inlineCode",{parentName:"li"},"@Component")," in implementation class.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    @Bean\n    public SoulPlugin a() {\n        return new A();\n    }\n")),(0,i.kt)("h2",{id:"matching-traffic-processing-plugin"},"Matching Traffic Processing Plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Introduce the following dependency:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n        <groupId>org.dromara</groupId>\n        <artifactId>soul-plugin-base</artifactId>\n        <version>${last.version}</version>\n  </dependency>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add a new class A, inherit from ",(0,i.kt)("inlineCode",{parentName:"p"},"org.dromara.soul.plugin.base.AbstractSoulPlugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"examples down below:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * This is your custom plugin.\n * He is running in after before plugin, implement your own functionality.\n * extends AbstractSoulPlugin so you must user soul-admin And add related plug-in development.\n *\n * @author xiaoyu(Myth)\n */\npublic class CustomPlugin extends AbstractSoulPlugin {\n    \n    /**\n     * return plugin order .\n     * The same plugin he executes in the same order.\n     *\n     * @return int\n     */\n    @Override\n    public int getOrder() {\n        return 0;\n    }\n\n    /**\n     * acquire plugin name.\n     * return you custom plugin name.\n     * It must be the same name as the plug-in you added in the admin background.\n     *\n     * @return plugin name.\n     */\n    @Override\n    public String named() {\n        return "soul";\n    }\n\n    /**\n     * plugin is execute.\n     * Do I need to skip.\n     * if you need skip return true.\n     *\n     * @param exchange the current server exchange\n     * @return default false.\n     */\n    @Override\n    public Boolean skip(final ServerWebExchange exchange) {\n        return false;\n    }\n\n    @Override\n    protected Mono<Void> doExecute(ServerWebExchange exchange, SoulPluginChain chain, SelectorZkDTO selector, RuleZkDTO rule) {\n        LOGGER.debug(".......... function plugin start..............");\n        /*\n         * Processing after your selector matches the rule.\n         * rule.getHandle() is you Customize the json string to be processed.\n         * for this example.\n         * Convert your custom json string pass to an entity class.\n         */\n        final String ruleHandle = rule.getHandle();\n\n        final Test test = GsonUtils.getInstance().fromJson(ruleHandle, Test.class);\n\n        /*\n         * Then do your own business processing.\n         * The last execution  chain.execute(exchange).\n         * Let it continue on the chain until the end.\n         */\n        System.out.println(test.toString());\n        return chain.execute(exchange);\n    }\n}\n\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Detailed explanation:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Plugins will match the selector rule for customized plugins inherit from this abstract class. Following steps guide you to config your plugins.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Firstly define a new plugin in ",(0,i.kt)("inlineCode",{parentName:"p"},"soul-admin"),", please mind that your plugin name should match the named() method overridden in your class.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Re-login  ",(0,i.kt)("inlineCode",{parentName:"p"},"soul-admin"),", the plugin you added now showing on plugin-list page, you can choose selectors for matching.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There is a field named ",(0,i.kt)("inlineCode",{parentName:"p"},"handler")," in rules, it is customized json string to be processed. You can process data after acquiring a ruleHandle (",(0,i.kt)("inlineCode",{parentName:"p"},"final String ruleHandle = rule.getHandle();"),") in ",(0,i.kt)("inlineCode",{parentName:"p"},"doExecute()")," method. ")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Register plugin in Spring as a Bean, or simply apply ",(0,i.kt)("inlineCode",{parentName:"p"},"@Component")," in implementation class."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    @Bean\n    public SoulPlugin a() {\n        return new A();\n    }\n")),(0,i.kt)("h2",{id:"subscribe-your-plugin-data-and-do-customized-jobs"},"Subscribe your plugin data and do customized jobs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Declare a new class named "A" and implements ',(0,i.kt)("inlineCode",{parentName:"li"},"org.dromara.soul.plugin.base.handler.PluginDataHandler"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface PluginDataHandler {\n    \n    /**\n     * Handler plugin.\n     *\n     * @param pluginData the plugin data\n     */\n    default void handlerPlugin(PluginData pluginData) {\n    }\n    \n    /**\n     * Remove plugin.\n     *\n     * @param pluginData the plugin data\n     */\n    default void removePlugin(PluginData pluginData) {\n    }\n    \n    /**\n     * Handler selector.\n     *\n     * @param selectorData the selector data\n     */\n    default void handlerSelector(SelectorData selectorData) {\n    }\n    \n    /**\n     * Remove selector.\n     *\n     * @param selectorData the selector data\n     */\n    default void removeSelector(SelectorData selectorData) {\n    }\n    \n    /**\n     * Handler rule.\n     *\n     * @param ruleData the rule data\n     */\n    default void handlerRule(RuleData ruleData) {\n    }\n    \n    /**\n     * Remove rule.\n     *\n     * @param ruleData the rule data\n     */\n    default void removeRule(RuleData ruleData) {\n    }\n    \n    /**\n     * Plugin named string.\n     *\n     * @return the string\n     */\n    String pluginNamed();\n    \n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure ",(0,i.kt)("inlineCode",{parentName:"li"},"pluginNamed()")," is same as the plugin name you defined."),(0,i.kt)("li",{parentName:"ul"},"Register defined class as a Spring Bean, or simply apply ",(0,i.kt)("inlineCode",{parentName:"li"},"@Component")," in implementation class.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    @Bean\n    public PluginDataHandler a() {\n        return new A();\n    }\n")),(0,i.kt)("h2",{id:"do-not-use-selectorlist-and-ruleslist"},"Do not use SelectorList and RulesList"),(0,i.kt)("p",null,"Not all plugins need both."),(0,i.kt)("p",null,"Therefore, we provide the following two methods, written in ",(0,i.kt)("strong",{parentName:"p"},"CustomPlugin"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    protected Mono<Void> handleSelectorIsNull(final String pluginName, \n                                              final ServerWebExchange exchange, \n                                              final SoulPluginChain chain) {\n        return doExecute(exchange, chain, null, null);\n    }\n\n    @Override\n    protected Mono<Void> handleRuleIsNull(final String pluginName, \n                                          final ServerWebExchange exchange, \n                                          final SoulPluginChain chain) {\n        return doExecute(exchange, chain, null, null);\n    }\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Note that if there is no rewriting, your plug-in will be invalid due to the absence of ",(0,i.kt)("strong",{parentName:"li"},"SelectorList")," and ",(0,i.kt)("strong",{parentName:"li"},"RulesList"),".")))}c.isMDXComponent=!0}}]);