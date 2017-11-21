webpackJsonp([0],{145:function(e,t,n){var r=n(264),o={all:{env:"production",isDev:!1,basename:"/ext-app",isBrowser:"undefined"!=typeof window,apiUrl:"https://jsonplaceholder.typicode.com"},test:{},development:{},production:{apiUrl:"https://jsonplaceholder.typicode.com"}};e.exports=r(o.all,o[o.all.env])},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(762),o=(n.n(r),n(300)),a=(n.n(o),n(5)),i=n.n(a),u=n(759),c=(n.n(u),n(58)),s=n(271),f=n(145),d=(n.n(f),n(516)),l=n(515),p=n(511),h=n.i(d.a)({},{api:l.a.create()}),v=function(){return i.a.createElement(c.a,{store:h},i.a.createElement(s.a,{basename:f.basename},i.a.createElement(p.a,null)))},m=document.getElementById("app");n.i(u.render)(v(),m)},511:function(e,t,n){"use strict";var r=n(5),o=n.n(r),a=n(271),i=n(877),u=n(512),c=(n.n(u),n(514)),s=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  body {\n    margin: 0;\n  }\n"],["\n  body {\n    margin: 0;\n  }\n"]);n.i(i.a)(s);var f=function(){return o.a.createElement(i.b,{theme:c.a},o.a.createElement(a.b,null,o.a.createElement(a.c,{path:"/",component:u.HomePage,exact:!0})))};t.a=f},512:function(e,t,n){var r=n(885);r.keys().forEach(function(t){var n=t.replace(/^.+\/([^\/]+)\/index\.js/,"$1");e.exports[n]=r(t).default})},513:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=n.n(r),a=function(){return o.a.createElement("div",null,"Hello World")};t.default=a},514:function(e,t,n){"use strict";var r=n(878),o=(n.n(r),{});o.palette={primary:["#1976d2","#2196f3","#71bcf7","#c2e2fb"],secondary:["#c2185b","#e91e63","#f06292","#f8bbd0"],danger:["#d32f2f","#f44336","#f8877f","#ffcdd2"],alert:["#ffa000","#ffc107","#ffd761","#ffecb3"],success:["#388e3c","#4caf50","#7cc47f","#c8e6c9"],white:["#fff","#fff","#eee"],grayscale:["#212121","#414141","#616161","#9e9e9e","#bdbdbd","#e0e0e0","#eeeeee","#ffffff"]},o.reversePalette=n.i(r.reversePalette)(o.palette),o.fonts={primary:"Helvetica Neue, Helvetica, Roboto, sans-serif",pre:"Consolas, Liberation Mono, Menlo, Courier, monospace",quote:"Georgia, serif"},o.sizes={maxWidth:"1100px"},t.a=o},515:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var o=n(884),a=(n.n(o),n(757)),i=(n.n(a),n(264)),u=n.n(i),c=n(145),s=(n.n(c),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),f=function(e){if(e.ok)return e;var t=new Error(e.status+" "+e.statusText);throw t.response=e,t},d=function(e){return e.json()},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,n=void 0===t?"get":t,o=e.data,a=e.locale,i=r(e,["method","data","locale"]),c={Accept:"application/json","Content-Type":"application/json","Accept-Language":a};return u()({body:o?JSON.stringify(o):void 0,method:n,headers:c},i)},p=function(e,t){return(0===e.indexOf("http")?e:c.apiUrl+e)+(t?"?"+n.i(a.stringify)(t):"")},h={};h.request=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.params,o=r(t,["params"]);return fetch(p(e,n),l(o)).then(f).then(d)},["delete","get"].forEach(function(e){h[e]=function(t,n){return h.request(t,s({method:e},n))}}),["post","put","patch"].forEach(function(e){h[e]=function(t,n,r){return h.request(t,s({method:e,data:n},r))}}),h.create=function(){return{settings:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},setToken:function(e){this.settings.headers=s({},this.settings.headers,{Authorization:"Bearer "+e})},unsetToken:function(){this.settings.headers=s({},this.settings.headers,{Authorization:void 0})},request:function(e,t){return h.request(e,u()({},this.settings,t))},post:function(e,t,n){return this.request(e,s({method:"post",data:t},n))},get:function(e,t){return this.request(e,s({method:"get"},t))},put:function(e,t,n){return this.request(e,s({method:"put",data:t},n))},patch:function(e,t,n){return this.request(e,s({method:"patch",data:t},n))},delete:function(e,t){return this.request(e,s({method:"delete"},t))}}},t.a=h},516:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o=n(80),a=n(866),i=n(145),u=(n.n(i),n(517)),c=n.n(u),s=n(518),f=n(519),d=i.isDev&&i.isBrowser&&window.devToolsExtension?window.devToolsExtension:function(){return function(e){return e}},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.i(a.a)(),u=[o.b.apply(void 0,r(c.a).concat([i])),d()],l=n.i(o.c)(s.a,e,o.d.apply(void 0,u));i.run(f.a,t);return l};t.a=l},517:function(e,t,n){var r=n(288),o=r.middleware,a=n(886);e.exports=a.keys().map(function(e){return a(e).default}).concat([o])},518:function(e,t,n){"use strict";var r=n(734),o=n.n(r),a=n(80),i=n(830),u=n(288),c=(n.n(u),{form:i.a,thunk:u.reducer}),s=n(887);s.keys().forEach(function(e){var t=o()(e.replace(/\.\/(.+)\/.+$/,"$1"));c[t]=s(e).default}),t.a=n.i(a.e)(c)},519:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(o.a)(u.map(function(t){return n.i(o.b)(t,e)}));case 2:case"end":return t.stop()}},a,this)}t.a=r;var o=n(289),a=regeneratorRuntime.mark(r),i=n(888),u=i.keys().map(function(e){return i(e).default})},885:function(e,t,n){function r(e){return n(o(e))}function o(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./pages/HomePage/index.js":513};r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=885},886:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=886},887:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=887},888:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=888},889:function(e,t,n){e.exports=n(299)}},[889]);