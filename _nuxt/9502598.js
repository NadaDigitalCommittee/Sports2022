(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,4],{294:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("ba81e73e",content,!0,{sourceMap:!1})},295:function(t,e,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("fb0d2cfe",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";var r=n(294),o=n.n(r);n.d(e,"default",(function(){return o.a}))},298:function(t,e,n){var r=n(41)(!1);r.push([t.i,".container_fvPqg{border-radius:.5rem;box-shadow:.5rem .5rem 1rem -.25rem rgba(0,0,0,.1);max-width:56rem;padding:1.5rem;background-color:#fff;overflow:hidden}",""]),r.locals={container:"container_fvPqg"},t.exports=r},301:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({name:"CardContainer"}),o=n(297),l=n(52);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.container},[t._t("default")],2)}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports},302:function(t,e,n){"use strict";var r=n(295),o=n.n(r);n.d(e,"default",(function(){return o.a}))},303:function(t,e,n){var r=n(41)(!1);r.push([t.i,".title_mJYqY{margin-bottom:1rem;font-size:1.5rem;line-height:1.5rem;font-weight:600}",""]),r.locals={title:"title_mJYqY"},t.exports=r},308:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(53),n(2).a.extend({name:"ContentPage",props:{content:String},data:function(){return{page:{title:"Loading..."}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content(t.content).fetch();case 2:t.page=e.sent;case 3:case"end":return e.stop()}}),e)})))()}})),l=n(302),c=n(52);var component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{class:t.$style.title},[t._v(t._s(t.page.title))]),t._v(" "),n("nuxt-content",{attrs:{document:t.page}})],1)}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports},325:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({name:"About"}),o=n(52),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("CardContainer",[e("ContentPage",{attrs:{content:"about"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentPage:n(308).default,CardContainer:n(301).default})}}]);