(function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"243ffbd5"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t);var c=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/2019-thef2e/week9/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0957":function(t,e,n){"use strict";var r=n("e751"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Layout",[n("router-view")],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"sidebar-container"},[n("h1",{staticClass:"logo"},[t._v("FreeNote")]),n("BaseButton",[t._v("新增筆記")]),n("nav",{staticClass:"navbar"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("所有筆記")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("捷徑")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("標籤")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("月曆")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("與我共用")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("垃圾桶")])],1)])]),t._m(0)],1),n("div",{staticClass:"main-container"},[t._t("default")],2)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-bottom"},[n("div",[t._v("模式")]),n("div",[t._v("Anna Lu")])])}],u=function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("button",e._g({class:[e.$style.button,(t={},t[e.$style["button--"+e.type]]=e.type,t)]},e.$listeners),[e._t("default")],2)},c=[],l={props:{type:{type:String,default:""}}},f=l,p=n("a343"),d=n("2877");function v(t){this["$style"]=p["default"].locals||p["default"]}var b=Object(d["a"])(f,u,c,!1,v,null,null),_=b.exports,h={components:{BaseButton:_},data:function(){return{menuList:[]}}},m=h,y=(n("5e0f"),Object(d["a"])(m,i,s,!1,null,"04158483",null)),g=y.exports,O={components:{Layout:g}},w=O,j=(n("5c0b"),Object(d["a"])(w,o,a,!1,null,null,null)),k=j.exports,C=n("8c4f"),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-inner"},[n("div",{staticClass:"note-container"},[t._m(0),n("div",{staticClass:"note-list"},t._l(t.noteListWithKey,(function(e){return n("div",{key:e._key,staticClass:"note__item",on:{click:function(n){return t.viewNote(e)}}},[n("h3",{staticClass:"note__title"},[e.favorite?n("span",{staticClass:"note__star"},[t._v("*")]):t._e(),t._v("\n          "+t._s(e.title)+"\n        ")]),n("p",[t._v(t._s(e.content))]),n("div",[n("div"),n("div",[t._v(t._s(e.created))])])])})),0)]),n("div",{staticClass:"note-editor"},[n("quillEditor",{attrs:{options:t.editorOption},model:{value:t.activeNote.content,callback:function(e){t.$set(t.activeNote,"content",e)},expression:"activeNote.content"}})],1)])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note-toolbar"},[n("input",{staticClass:"toolbar__input",attrs:{type:"search",placeholder:"搜尋您的筆記"}})])}],E=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),$=(n("6b54"),n("953d"));function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(n,!0).forEach((function(e){Object(E["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function B(){return Math.random().toString(36).substring(2,15)}var N={name:"home",components:{quillEditor:$["quillEditor"]},data:function(){return{noteList:[{title:"你可以接受這個數據嗎？",content:"你可以接受這個數據嗎？你可以接受這個數據嗎？你可以接受這個數據嗎？",tags:["新聞"],favorite:!0,created:"2019/9/7",updated:"2019/9/15"},{title:"中秋烤肉食材這樣搭最好",content:"中秋烤肉食材這樣搭最好中秋烤肉食材這樣搭最好中秋烤肉食材這樣搭最好",tags:["健康"],favorite:!1,created:"2019/9/7",updated:"2019/9/15"},{title:"中秋烤肉食材這樣搭最好",content:"中秋烤肉食材這樣搭最好中秋烤肉食材這樣搭最好中秋烤肉食材這樣搭最好",tags:["健康"],favorite:!1,created:"2019/9/7",updated:"2019/9/15"},{title:"中秋烤肉食材這樣搭最好",content:"中秋烤肉食材這樣搭最好中秋烤肉食材這樣搭最好中秋烤肉食材這樣搭最好",tags:["健康"],favorite:!1,created:"2019/9/7",updated:"2019/9/15"}],activeNote:{},editorOption:{placeholder:"請輸入內容"}}},computed:{noteListWithKey:function(){return this.noteList.map((function(t){return S({},t,{_key:B()})}))}},methods:{viewNote:function(t){this.activeNote=t}}},M=N,T=(n("0957"),Object(d["a"])(M,P,x,!1,null,"6cd2ecea",null)),q=T.exports;r["a"].use(C["a"]);var D=new C["a"]({mode:"history",base:"/2019-thef2e/week9/",routes:[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),W=n("2f62");r["a"].use(W["a"]);var A=new W["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:D,store:A,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("e332"),o=n.n(r);o.a},"5e0f":function(t,e,n){"use strict";var r=n("9b23"),o=n.n(r);o.a},"9b23":function(t,e,n){},a343:function(t,e,n){"use strict";var r=n("beaa"),o=n.n(r);e["default"]=o.a},beaa:function(t,e,n){t.exports={button:"BaseButton_button_1yvW-","button--text":"BaseButton_button--text_1eRGg"}},e332:function(t,e,n){},e751:function(t,e,n){}});
//# sourceMappingURL=app.898ed809.js.map