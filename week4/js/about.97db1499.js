(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"02f4":function(e,t,a){var r=a("4588"),n=a("be13");e.exports=function(e){return function(t,a){var i,s,o=String(n(t)),c=r(a),d=o.length;return c<0||c>=d?e?"":void 0:(i=o.charCodeAt(c),i<55296||i>56319||c+1===d||(s=o.charCodeAt(c+1))<56320||s>57343?e?o.charAt(c):i:e?o.slice(c,c+2):s-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var r=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},"0bfb":function(e,t,a){"use strict";var r=a("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,a){"use strict";a("b0c5");var r=a("2aba"),n=a("32e9"),i=a("79e5"),s=a("be13"),o=a("2b4c"),c=a("520a"),d=o("species"),l=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),u=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var v=o(e),m=!i(function(){var t={};return t[v]=function(){return 7},7!=""[e](t)}),p=m?!i(function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[d]=function(){return a}),a[v](""),!t}):void 0;if(!m||!p||"replace"===e&&!l||"split"===e&&!u){var f=/./[v],b=a(s,v,""[e],function(e,t,a,r,n){return t.exec===c?m&&!n?{done:!0,value:f.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}}),g=b[0],h=b[1];r(String.prototype,e,g),n(RegExp.prototype,v,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)})}}},"3dac":function(e,t,a){"use strict";var r=a("c6b2"),n=a.n(r);n.a},4484:function(e,t,a){},"520a":function(e,t,a){"use strict";var r=a("0bfb"),n=RegExp.prototype.exec,i=String.prototype.replace,s=n,o="lastIndex",c=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e[o]||0!==t[o]}(),d=void 0!==/()??/.exec("")[1],l=c||d;l&&(s=function(e){var t,a,s,l,u=this;return d&&(a=new RegExp("^"+u.source+"$(?!\\s)",r.call(u))),c&&(t=u[o]),s=n.call(u,e),c&&s&&(u[o]=u.global?s.index+s[0].length:t),d&&s&&s.length>1&&i.call(s[0],a,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)}),s}),e.exports=s},"5f1b":function(e,t,a){"use strict";var r=a("23c6"),n=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var i=a.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"6b16":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"message"},[r("img",{staticClass:"message__image",attrs:{src:a("8cbf")("./product_"+(Math.floor(5*Math.random())+1)+".svg")}}),r("transition",{attrs:{"enter-active-class":"animated  zoomIn",appear:""}},[r("div",{staticClass:"message__body"},[r("h3",[e._v("Thank you for the purchase!")]),r("div",{staticClass:"message__meta"},[e._v("Ref."+e._s(+new Date))]),r("p",[e._v("The food will soon be delivered to your designated place.")])])]),r("transition",{attrs:{"enter-active-class":"animated slideInUp","leave-active-class":"animated  slideOutDown",appear:""}},[r("BaseButton",{attrs:{type:"outline"},on:{click:function(t){return e.$router.push({name:"home"})}}},[e._v("Back")])],1)],1)])},n=[],i=a("82ea"),s={name:"PaymentSuccess",components:{BaseButton:i["a"]}},o=s,c=(a("3dac"),a("2877")),d=Object(c["a"])(o,r,n,!1,null,null,null);t["default"]=d.exports},"8cbf":function(e,t,a){var r={"./product_1.svg":"f752","./product_2.svg":"9424","./product_3.svg":"61d4","./product_4.svg":"40b2","./product_5.svg":"b4f4"};function n(e){var t=i(e);return a(t)}function i(e){var t=r[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id="8cbf"},9225:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"navbar"},[r("div",{staticClass:"navbar__back",on:{click:function(t){return e.$router.push({name:"home"})}}}),r("div",{staticClass:"navbar__title"},[e._v("Please select a card")])]),r("transition-group",{staticClass:"card__list",attrs:{tag:"div","enter-active-class":"animated  slideInRight slideInRightDelay",appear:""}},e._l(e.cards,function(t,n){return r("div",{key:t.name,staticClass:"card__item",style:{"--index":n},on:{click:function(a){e.selected=t.name}}},[r("img",{attrs:{src:a("d5b2")("./card_bg"+(n+1)%3+".svg"),alt:t.name}}),r("div",{staticClass:"card__info"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"card__radio",attrs:{id:t.name,type:"radio"},domProps:{value:t.name,checked:e._q(e.selected,t.name)},on:{change:function(a){e.selected=t.name}}}),r("label",{staticClass:"card__label",attrs:{for:t.name}},[e._v(e._s(t.name))])]),r("div",{staticClass:"card__number"},[e._v(e._s(e._f("numberMask")(t.number)))]),r("div",{staticClass:"card__footer"},[r("div",[e._v(e._s(t.bank))]),r("div",[e._v(e._s(t.expired))])])])])}),0),r("BaseButton",{staticClass:"button--add",attrs:{type:"outline"},on:{click:function(t){e.addCardFormVisible=!e.addCardFormVisible}}},[e._v("Add ＋")]),r("BaseButton",{staticClass:"button--pay",attrs:{disabled:e.nextDisabled,loading:e.paying},on:{click:e.handleToPay}},[e._v("Pay")]),r("transition",{attrs:{"enter-active-class":"animated  slideInUp","leave-active-class":"animated  slideOutDown",appear:""}},[e.addCardFormVisible?r("div",{staticClass:"add-card"},[r("div",[e._v("Add a card")]),r("form",{staticClass:"form"},[r("div",{staticClass:"form__item"},[r("label",{attrs:{for:""}},[e._v("Card Number")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.addCardForm.number,expression:"addCardForm.number"}],attrs:{type:"number",placeholder:"Enter here"},domProps:{value:e.addCardForm.number},on:{input:function(t){t.target.composing||e.$set(e.addCardForm,"number",t.target.value)}}})]),r("div",{staticClass:"form__split"},[r("div",{staticClass:"form__item"},[r("label",{attrs:{for:""}},[e._v("Expiration Date")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.addCardForm.expired,expression:"addCardForm.expired"}],attrs:{type:"month",placeholder:"MM/YY"},domProps:{value:e.addCardForm.expired},on:{input:function(t){t.target.composing||e.$set(e.addCardForm,"expired",t.target.value)}}})]),r("div",{staticClass:"form__item"},[r("label",{attrs:{for:""}},[e._v("CVC")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.addCardForm.cvc,expression:"addCardForm.cvc"}],attrs:{type:"number",placeholder:"3-4 digits"},domProps:{value:e.addCardForm.cvc},on:{input:function(t){t.target.composing||e.$set(e.addCardForm,"cvc",t.target.value)}}})])]),r("div",{staticClass:"form__item"},[r("label",{attrs:{for:""}},[e._v("First Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.addCardForm.firstName,expression:"addCardForm.firstName"}],attrs:{type:"text",placeholder:"Enter here"},domProps:{value:e.addCardForm.firstName},on:{input:function(t){t.target.composing||e.$set(e.addCardForm,"firstName",t.target.value)}}})]),r("div",{staticClass:"form__item"},[r("label",{attrs:{for:""}},[e._v("Last Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.addCardForm.lastName,expression:"addCardForm.lastName"}],attrs:{type:"text",placeholder:"Enter here"},domProps:{value:e.addCardForm.lastName},on:{input:function(t){t.target.composing||e.$set(e.addCardForm,"lastName",t.target.value)}}})]),r("div",{staticClass:"form__item"},[r("label",{attrs:{for:""}},[e._v("Card Nickname")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.addCardForm.name,expression:"addCardForm.name"}],attrs:{type:"text",placeholder:"Enter here"},domProps:{value:e.addCardForm.name},on:{input:function(t){t.target.composing||e.$set(e.addCardForm,"name",t.target.value)}}})])]),r("BaseButton",{staticClass:"button--add",on:{click:e.handleAddCard}},[e._v("Add & Select")])],1):e._e()])],1)},n=[],i=(a("a481"),a("82ea")),s={name:"SelectCard",components:{BaseButton:i["a"]},filters:{numberMask:function(e){var t=/\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm,a="**** **** **** ";return e.replace(t,a)}},data:function(){return{addCardFormVisible:!1,addCardForm:{number:"",expired:"",cvc:"",firstName:"",lastName:"",name:""},paying:!1,cards:[{name:"Koko",number:"7777777777777777",expired:"02/29",bank:"Cathay United Bank"},{name:"U bear",number:"7777777777777777",expired:"02/29",bank:"E.SUN Commercial Bank"},{name:"@GoGo",number:"7777777777777777",expired:"02/29",bank:"Taishin International Bank"}],selected:""}},computed:{nextDisabled:function(){return""===this.selected}},methods:{handleToPay:function(){var e=this;this.paying=!0,setTimeout(function(){e.paying=!1,e.$router.push({name:"payment-success"})},2e3)},handleAddCard:function(){this.addCardFormVisible=!this.addCardFormVisible}}},o=s,c=(a("dc67"),a("2877")),d=Object(c["a"])(o,r,n,!1,null,null,null);t["default"]=d.exports},a481:function(e,t,a){"use strict";var r=a("cb7c"),n=a("4bf8"),i=a("9def"),s=a("4588"),o=a("0390"),c=a("5f1b"),d=Math.max,l=Math.min,u=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,m=/\$([$&`']|\d\d?)/g,p=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,function(e,t,a,f){return[function(r,n){var i=e(this),s=void 0==r?void 0:r[t];return void 0!==s?s.call(r,i,n):a.call(String(i),r,n)},function(e,t){var n=f(a,e,this,t);if(n.done)return n.value;var u=r(e),v=String(this),m="function"===typeof t;m||(t=String(t));var g=u.global;if(g){var h=u.unicode;u.lastIndex=0}var _=[];while(1){var C=c(u,v);if(null===C)break;if(_.push(C),!g)break;var x=String(C[0]);""===x&&(u.lastIndex=o(v,i(u.lastIndex),h))}for(var y="",F=0,k=0;k<_.length;k++){C=_[k];for(var w=String(C[0]),N=d(l(s(C.index),v.length),0),E=[],$=1;$<C.length;$++)E.push(p(C[$]));var B=C.groups;if(m){var S=[w].concat(E,N,v);void 0!==B&&S.push(B);var O=String(t.apply(void 0,S))}else O=b(w,v,N,E,B,t);N>=F&&(y+=v.slice(F,N)+O,F=N+w.length)}return y+v.slice(F)}];function b(e,t,r,i,s,o){var c=r+e.length,d=i.length,l=m;return void 0!==s&&(s=n(s),l=v),a.call(o,l,function(a,n){var o;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(c);case"<":o=s[n.slice(1,-1)];break;default:var l=+n;if(0===l)return a;if(l>d){var v=u(l/10);return 0===v?a:v<=d?void 0===i[v-1]?n.charAt(1):i[v-1]+n.charAt(1):a}o=i[l-1]}return void 0===o?"":o})}})},b0c5:function(e,t,a){"use strict";var r=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},c6b2:function(e,t,a){},d5b2:function(e,t,a){var r={"./card_bg0.svg":"5a21","./card_bg1.svg":"6e42","./card_bg2.svg":"4adc"};function n(e){var t=i(e);return a(t)}function i(e){var t=r[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id="d5b2"},dc67:function(e,t,a){"use strict";var r=a("4484"),n=a.n(r);n.a}}]);
//# sourceMappingURL=about.97db1499.js.map