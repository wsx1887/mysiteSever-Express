(function(t){function e(e){for(var r,o,a=e[0],c=e[1],s=e[2],f=0,l=[];f<a.length;f++)o=a[f],i[o]&&l.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={"shopping/shopping":0},i={"shopping/shopping":0},u=[];function a(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2fe164f2":"fb8301b6","chunk-61136b64":"062cb9d4","chunk-e6442808":"2d17903c"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-2fe164f2":1,"chunk-61136b64":1,"chunk-e6442808":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2fe164f2":"876d34e7","chunk-61136b64":"527a6908","chunk-e6442808":"0411b867"}[t]+".css",i=c.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var s=u[a],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===i))return e()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){s=l[a],f=s.getAttribute("data-href");if(f===r||f===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[t],d.parentNode.removeChild(d),n(u)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=a(t),s=function(e){f.onerror=f.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,u=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}i[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=f;u.push([1,"chunk-vendors"]),n()})({1:function(t,e,n){t.exports=n("9ca0")},5992:function(t,e,n){},"98c7":function(t,e,n){"use strict";var r=n("5992"),o=n.n(r);o.a},"9ca0":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[n("router-link",{staticClass:"header-title",attrs:{to:{name:"list"}}},[t._v("电商网站示例")]),n("div",{staticClass:"header-menu"},[n("router-link",{staticClass:"header-menu-cart",attrs:{to:{name:"cart"}}},[t._v("\n        购物车\n        "),t.cartList.length?n("span",[t._v(t._s(t.cartList.length))]):t._e()])],1)],1),n("router-view")],1)},i=[],u={computed:{cartList:function(){return this.$store.state.cartList}}},a=u,c=(n("98c7"),n("2877")),s=Object(c["a"])(a,o,i,!1,null,"7734dcd6",null),f=s.exports,l=n("8c4f");r["a"].use(l["a"]);var d=new l["a"]({mode:"history",base:"/shopping/",routes:[{path:"/list",name:"list",meta:{title:"商品列表"},component:function(){return n.e("chunk-e6442808").then(n.bind(null,"46d4"))}},{path:"/cart",name:"cart",meta:{title:"购物车"},component:function(){return n.e("chunk-2fe164f2").then(n.bind(null,"2c89"))}},{path:"/product/:id",name:"product",meta:{title:"商品详情"},component:function(){return n.e("chunk-61136b64").then(n.bind(null,"edbb"))}},{path:"*",redirect:"/list"}]});d.beforeEach(function(t,e,n){document.title=t.meta.title,n()}),d.afterEach(function(t,e){while(e)break;window.scrollTo(0,0)});var p=d,h=(n("456d"),n("ac6a"),n("20d6"),n("7514"),n("2f62")),m=n("bc3a"),v=n.n(m);r["a"].use(h["a"]);var b=new h["a"].Store({state:{productList:[],cartList:[]},getters:{brands:function(t){var e=t.productList.map(function(t){return t.brand});return g(e)},colors:function(t){var e=t.productList.map(function(t){return t.color});return g(e)}},mutations:{setProductList:function(t,e){t.productList=e},addCart:function(t,e){var n=t.cartList.find(function(t){return t.id===e});n?n.count++:t.cartList.push({id:e,count:1})},editCartCount:function(t,e){var n=t.cartList.find(function(t){return t.id===e.id});n.count+=e.count},deleteCart:function(t,e){var n=t.cartList.findIndex(function(t){return t.id===e});t.cartList.splice(n,1)},emptyCart:function(t){t.cartList=[]}},actions:{getProductList:function(t){v.a.get("/data/shopping-productList.json").then(function(e){t.commit("setProductList",e.data)})},buy:function(t){return new Promise(function(e){setTimeout(function(){t.commit("emptyCart"),e()},500)})}}});function g(t){var e={};return t.forEach(function(t){e[t]=1}),Object.keys(e)}r["a"].config.productionTip=!1,new r["a"]({el:"#app",router:p,store:b,render:function(t){return t(f)}})}});
//# sourceMappingURL=shopping.d4fd384b.js.map