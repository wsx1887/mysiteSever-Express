(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],l=0,f=[];l<o.length;l++)r=o[l],i[r]&&f.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={"vueapp/vueapp":0},i={"vueapp/vueapp":0},s=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"925655e0","chunk-2d230f9d":"4a4f61c9","chunk-2fb4ef40":"c0b0b863","chunk-3335eb96":"fbc22e6c","chunk-3bd8ab70":"ceb7ef95","chunk-3f9af0f9":"6986b512","chunk-54997d98":"64d14ec8","chunk-7e247cc2":"291a02ab"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-2fb4ef40":1,"chunk-3335eb96":1,"chunk-3bd8ab70":1,"chunk-54997d98":1,"chunk-7e247cc2":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-2d230f9d":"31d6cfe0","chunk-2fb4ef40":"abe071bb","chunk-3335eb96":"a8da954b","chunk-3bd8ab70":"c6f7fff0","chunk-3f9af0f9":"31d6cfe0","chunk-54997d98":"4877690e","chunk-7e247cc2":"cf7f4dad"}[t]+".css",i=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],l=u.getAttribute("data-href");if(l===a||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],d.parentNode.removeChild(d),n(s)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){r[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t),u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");s.type=a,s.request=r,n[1](s)}i[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("42fd")},"211e":function(t,e,n){},"28ec":function(t,e,n){},"42fd":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",{attrs:{id:"header"}},[n("a",{staticClass:"brand",attrs:{href:"/"}},[t._v("A")]),n("navbar")],1),n("main",{attrs:{id:"main"}},[n("router-view")],1),n("footer")])},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{id:"nav"}},[n("ul",{staticClass:"navul"},[n("li",[n("router-link",{attrs:{to:{name:"css"}}},[t._v("CSS")]),n("span",{staticClass:"arrow"}),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{attrs:{to:{name:"gradient"}}},[t._v("渐变")])],1),n("li",[n("router-link",{attrs:{to:{name:"textshadow"}}},[t._v("文字阴影")])],1)])],1),n("li",[n("a",[t._v("JS")]),n("span",{staticClass:"arrow"}),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{attrs:{to:{name:"ball"}}},[t._v("弹球游戏")])],1),n("li",[n("router-link",{attrs:{to:{name:"jigsaw"}}},[t._v("拼图游戏")])],1),n("li",[n("router-link",{attrs:{to:{name:"snake"}}},[t._v("贪吃蛇")])],1)])]),t._m(0),t._m(1),t._m(2),n("li",[n("router-link",{attrs:{to:{name:"tools"}}},[t._v("工具")])],1),n("li",[n("router-link",{attrs:{to:{name:"about"}}},[t._v("关于")])],1),n("li",[n("router-link",{attrs:{to:{name:"login"}}},[t._v("登录/注册")]),n("span",{staticClass:"arrow"}),n("div",{staticClass:"dropdown-menu"},[t._m(3),t._m(4),t._m(5),n("div",{staticClass:"input-group"},[n("router-link",{attrs:{to:{name:"login"}}},[t._v("忘记密码")]),n("router-link",{attrs:{to:{name:"login"}}},[t._v("注册")])],1)])],1)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",[t._v("VUE")]),n("span",{staticClass:"arrow"}),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("a",{attrs:{href:"/shopping"}},[t._v("电商网简单实例")])]),n("li",[n("a",{attrs:{href:"/zhihuribao"}},[t._v("知乎日报网页版")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/x4工厂计算器.html"}},[t._v("X4工厂计算器")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/bootstrap4简略文档.html"}},[t._v("Bootstrap4")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group"},[n("label",[t._v("\n            用户名：\n            "),n("input",{attrs:{type:"text"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group"},[n("label",[t._v("\n            密码：\n            "),n("input",{attrs:{type:"password"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group"},[n("button",[t._v("登录")])])}],c={},u=c,l=(n("f0ac"),n("2877")),f=Object(l["a"])(u,s,o,!1,null,"06d9beb8",null),d=f.exports,p={components:{navbar:d}},v=p,h=(n("99be"),n("aefd"),Object(l["a"])(v,r,i,!1,null,"4bf7d181",null)),b=h.exports,m=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"css"},[n("router-view")],1)},g=[],k={},C=Object(l["a"])(k,_,g,!1,null,null,null),w=C.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"gradient"}},[n("h1",[t._v("css 3 渐变背景")]),n("div",{staticClass:"bp1"},[t._v("1")]),n("div",{staticClass:"bp2"},[t._v("2")]),n("div",{staticClass:"bp3"},[t._v("3")]),n("div",{staticClass:"bp4"},[t._v("4")]),n("div",{staticClass:"bp5"},[t._v("5")]),n("div",{staticClass:"bp6"},[t._v("6")]),n("div",{staticClass:"bp7"},[t._v("7")]),n("div",{staticClass:"bp8"},[t._v("8")]),n("div",{staticClass:"bp9"},[t._v("9")]),n("div",{staticClass:"bp10"},[t._v("10")]),n("div",{staticClass:"bp11"},[t._v("11")]),n("div",{staticClass:"bp12"},[t._v("12")]),n("div",{staticClass:"bp13"},[t._v("13")]),n("div",{staticClass:"bp14"},[t._v("14")]),n("div",{staticClass:"bp15"},[t._v("15")]),n("div",{staticClass:"bp16"},[t._v("16")]),n("div",{staticClass:"bp17"},[t._v("17")])])}],j=(n("9be3"),{}),x=Object(l["a"])(j,y,E,!1,null,"68644840",null),O=x.exports;a["a"].use(m["a"]);var S=new m["a"]({mode:"history",base:"/vueapp/",routes:[{path:"/",redirect:{name:"css"}},{path:"/css",name:"css",component:w,redirect:{name:"gradient"},children:[{path:"",redirect:{name:"gradient"}},{path:"gradient",name:"gradient",meta:{title:"渐变"},component:O},{path:"textshadow",name:"textshadow",meta:{title:"文字阴影"},component:function(){return n.e("chunk-3bd8ab70").then(n.bind(null,"7265"))}}]},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"0648"))},meta:{title:"关于"}},{path:"/js",name:"js",component:function(){return n.e("chunk-2d230f9d").then(n.bind(null,"ef28"))},children:[{path:"ball",name:"ball",meta:{title:"弹球游戏"},component:function(){return n.e("chunk-3f9af0f9").then(n.bind(null,"5175"))}},{path:"jigsaw",name:"jigsaw",meta:{title:"拼图游戏"},component:function(){return n.e("chunk-54997d98").then(n.bind(null,"174a"))}},{path:"snake",name:"snake",meta:{title:"贪吃蛇"},component:function(){return n.e("chunk-2fb4ef40").then(n.bind(null,"fc91"))}}]},{path:"/tools",name:"tools",component:function(){return n.e("chunk-7e247cc2").then(n.bind(null,"073f"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-3335eb96").then(n.bind(null,"3b52"))}}]});S.beforeEach(function(t,e,n){t.meta.title&&(document.title=t.meta.title),n()});var $=S,P=n("2f62");a["a"].use(P["a"]);var T=new P["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:$,store:T,render:function(t){return t(b)}}).$mount("#app")},"56f1":function(t,e,n){},"99be":function(t,e,n){"use strict";var a=n("eebd"),r=n.n(a);r.a},"9be3":function(t,e,n){"use strict";var a=n("28ec"),r=n.n(a);r.a},aefd:function(t,e,n){"use strict";var a=n("56f1"),r=n.n(a);r.a},eebd:function(t,e,n){},f0ac:function(t,e,n){"use strict";var a=n("211e"),r=n.n(a);r.a}});
//# sourceMappingURL=vueapp.5c3d5375.js.map