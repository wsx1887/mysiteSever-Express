(function(t){function e(e){for(var r,o,c=e[0],u=e[1],s=e[2],d=0,f=[];d<c.length;d++)o=c[d],i[o]&&f.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={"shopping/shopping":0},i={"shopping/shopping":0},a=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2fe164f2":"30e7ba00","chunk-ad34f304":"f8522bca","chunk-e35d4d56":"4325bc15"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-2fe164f2":1,"chunk-ad34f304":1,"chunk-e35d4d56":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2fe164f2":"876d34e7","chunk-ad34f304":"116db68d","chunk-e35d4d56":"e84c0ea0"}[t]+".css",i=u.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var s=a[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===i))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],d=s.getAttribute("data-href");if(d===r||d===i)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var r=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[t],l.parentNode.removeChild(l),n(a)},l.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){o[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(t),s=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[t]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var l=d;a.push([2,"chunk-vendors"]),n()})({2:function(t,e,n){t.exports=n("9ca0")},5992:function(t,e,n){},"98c7":function(t,e,n){"use strict";var r=n("5992"),o=n.n(r);o.a},"9ca0":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[n("router-link",{staticClass:"header-title",attrs:{to:{name:"list"}}},[t._v("电商网站示例")]),n("div",{staticClass:"header-menu"},[n("router-link",{staticClass:"header-menu-cart",attrs:{to:{name:"cart"}}},[t._v("\n        购物车\n        "),t.cartList.length?n("span",[t._v(t._s(t.cartList.length))]):t._e()])],1)],1),n("router-view")],1)},i=[],a={computed:{cartList:function(){return this.$store.state.cartList}}},c=a,u=(n("98c7"),n("2877")),s=Object(u["a"])(c,o,i,!1,null,"7734dcd6",null),d=s.exports,f=n("8c4f");r["a"].use(f["a"]);var l=new f["a"]({mode:"history",base:"/shopping/",routes:[{path:"/list",name:"list",meta:{title:"商品列表"},component:function(){return n.e("chunk-e35d4d56").then(n.bind(null,"46d4"))}},{path:"/cart",name:"cart",meta:{title:"购物车"},component:function(){return n.e("chunk-2fe164f2").then(n.bind(null,"2c89"))}},{path:"/product/:id",name:"product",meta:{title:"商品详情"},component:function(){return n.e("chunk-ad34f304").then(n.bind(null,"edbb"))}},{path:"*",redirect:"/list"}]});l.beforeEach(function(t,e,n){document.title=t.meta.title,n()}),l.afterEach(function(t,e){while(e)break;window.scrollTo(0,0)});var p=l,h=(n("456d"),n("ac6a"),n("20d6"),n("7514"),n("2f62")),m=n("bc3a"),v=n.n(m);r["a"].use(h["a"]);var g=new h["a"].Store({state:{productList:[],cartList:[]},getters:{brands:function(t){var e=t.productList.map(function(t){return t.brand});return b(e)},colors:function(t){var e=t.productList.map(function(t){return t.color});return b(e)}},mutations:{setProductList:function(t,e){t.productList=e},addCart:function(t,e){var n=t.cartList.find(function(t){return t.id===e});n?n.count++:t.cartList.push({id:e,count:1})},editCartCount:function(t,e){var n=t.cartList.find(function(t){return t.id===e.id});n.count+=e.count},deleteCart:function(t,e){var n=t.cartList.findIndex(function(t){return t.id===e});t.cartList.splice(n,1)},emptyCart:function(t){t.cartList=[]}},actions:{getProductList:function(t){v.a.get("/data/shopping-productList.json").then(function(e){t.commit("setProductList",e.data)})},buy:function(t){return new Promise(function(e){setTimeout(function(){t.commit("emptyCart"),e()},500)})}}});function b(t){var e={};return t.forEach(function(t){e[t]=1}),Object.keys(e)}r["a"].config.productionTip=!1,window.shoppingVM=new r["a"]({el:"#app",router:p,store:g,render:function(t){return t(d)}})}});
//# sourceMappingURL=shopping.64e2301d.js.map