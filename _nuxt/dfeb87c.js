(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{293:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAABNCAYAAACmJIZ3AAAABHNCSVQICAgIfAhkiAAAAaBJREFUeF7t3LENwjAARcGwEhMwDXMwBtuwADsBtpggz50vEqW/lJdraHw5juPz+3kUOFvgeoHobDvn/gUgQiEXgCgnNAARA7kARDmhgYnIo0AqAFHK5/AoABEHuQBEOaEBiBjIBSDKCQ1AxEAuAFFOaAAiBnIBiHJCAxAxkAtAlBMagIiBXACinNAARAzkAhDlhAYgYiAXgCgnNAARA7kARDmhAYgYyAUgygkNQMRALgBRTmgAIgZyAYhyQgMQMZALQJQTGoCIgVxgIHrkFQM7F3i6bm/nz7/m3d1PtKbj1isQbf3517w8RGs6br0C0daff83LT0T+na2JuevK/HfmUSAVgCjlc3gUgIiDXACinNAARAzkAhDlhAYgYiAXgCgnNAARA7kARDmhAYgYyAUgygkNQMRALgBRTmgAIgZyAYhyQgMQMZALQJQTGoCIgVwAopzQAEQM5AIQ5YQGIGIgF4AoJzQAEQO5AEQ5oQGIGMgFIMoJDQxENxkUCAXertsL9RydBdxPBEIuAFFOaAAiBnIBiHJCAxPRSwcFQoH7F9xOF7+MSuSfAAAAAElFTkSuQmCC"},294:function(t,e,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("1c70f5fa",content,!0,{sourceMap:!1})},295:function(t,e,n){t.exports=n.p+"img/menuopened.7632dcf.png"},296:function(t,e,n){"use strict";n(294)},297:function(t,e,n){var o=n(41)(!1);o.push([t.i,".header[data-v-654a6400]{position:fixed;height:max(50px,10vh);width:100vw;background-color:#fff;z-index:1000;font-family:toppan-bunkyu-midashi-go-std,sans-serif;font-weight:900;font-style:normal;display:flex;font-size:20px;align-items:center;border-color:#ff4e00;border-bottom-width:1px}.header p[data-v-654a6400]{left:calc(max(0px,15vw - 50px) + 10px)}.header .hb[data-v-654a6400],.header p[data-v-654a6400]{position:absolute;cursor:pointer}.header .hb[data-v-654a6400]{right:calc(max(0px,15vw - 50px) + 10px)}.header .hb img[data-v-654a6400]{width:37px;height:20px}.blank[data-v-654a6400]{height:max(50px,10vh)}.menu[data-v-654a6400]{position:fixed;top:max(50px,10vh);z-index:999;background-color:#fff;width:100vw;height:calc(100vh - max(50px,10vh));opacity:0;pointer-events:none;transition:all .3s}.ActivateMenu[data-v-654a6400]{pointer-events:all;opacity:1}.link[data-v-654a6400]{color:#ff4e00;border-bottom-width:1px;margin:0 10vw;padding:3vh 10vw;border-color:rgba(0,0,0,.2902);font-family:toppan-bunkyu-midashi-go-std,sans-serif;font-weight:900;font-style:normal}",""]),t.exports=o},298:function(t,e,n){"use strict";n.r(e);n(54),n(25),n(53);var o=n(2).a.extend({name:"Header",data:function(){return{MenuOpened:!1,imgsrc:n(293)}},mounted:function(){var a,t=document,e={kitId:"zlv1mor",scriptTimeout:3e3,async:!0},n=t.documentElement,o=setTimeout((function(){n.className="".concat(n.className.replace(/\bwf-loading\b/g,"")," wf-inactive")}),e.scriptTimeout),r=t.createElement("script"),c=!1,s=t.getElementsByTagName("script")[0];n.className+=" wf-loading",r.src="https://use.typekit.net/".concat(e.kitId,".js"),r.async=!0,r.onload=r.onreadystatechange=function(){if(a=this.readyState,!(c||a&&"complete"!=a&&"loaded"!=a)){c=!0,clearTimeout(o);try{Typekit.load(e)}catch(t){}}},s.parentNode.insertBefore(r,s)},methods:{hbClick:function(){this.MenuOpened=!this.MenuOpened,this.imgsrc=this.MenuOpened?n(295):n(293)}}}),r=(n(296),n(52)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[n("p",{on:{click:function(e){return t.$router.push("/")}}},[t._v("第93回灘校体育祭")]),t._v(" "),n("div",{staticClass:"hb",on:{click:t.hbClick}},[n("img",{attrs:{src:t.imgsrc,alt:""}})])]),t._v(" "),n("div",{staticClass:"blank"}),t._v(" "),n("div",{staticClass:"menu",class:{ActivateMenu:t.MenuOpened}},[n("div",{staticClass:"link"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("トップページ")])],1),t._v(" "),n("div",{staticClass:"link"},[n("nuxt-link",{attrs:{to:"/programs"}},[t._v("プログラム")])],1),t._v(" "),n("div",{staticClass:"link"},[n("nuxt-link",{attrs:{to:"/points"}},[t._v("競技得点")])],1),t._v(" "),n("div",{staticClass:"link"},[n("nuxt-link",{attrs:{to:"/articles"}},[t._v("記事特集")])],1),t._v(" "),n("div",{staticClass:"link"},[n("nuxt-link",{attrs:{to:"/news"}},[t._v("過去の情報")])],1)])])}),[],!1,null,"654a6400",null);e.default=component.exports},368:function(t,e,n){"use strict";n.r(e);var o=n(2).a.extend({name:"sumo",data:function(){return{}},head:function(){return{title:"相撲特集 - 第93回灘校体育祭「拓」",meta:[{hid:"description",name:"description",content:"2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。"},{hid:"og:description",name:"og:description",content:"2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。"},{hid:"og:url",name:"og:url",content:"".concat("https://sports.nada-sc.jp/2022/","article/sumo")}]}},methods:{}}),r=n(52),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg"},[e("Header")],1)}),[],!1,null,"1558e4f9",null);e.default=component.exports;installComponents(component,{Header:n(298).default})}}]);