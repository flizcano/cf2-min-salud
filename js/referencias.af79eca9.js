(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias","chunk-4e410830"],{"2e6c":function(t,e,n){},"3cd8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid banner-interno",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}})},s=[],i={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},r=i,c=(n("8385"),n("2877")),o=Object(c["a"])(r,a,s,!1,null,null,null);e["default"]=o.exports},4408:function(t,e,n){"use strict";n("2e6c")},"4e82":function(t,e,n){"use strict";var a=n("23e7"),s=n("1c0b"),i=n("7b0b"),r=n("d039"),c=n("a640"),o=[],l=o.sort,u=r((function(){o.sort(void 0)})),f=r((function(){o.sort(null)})),d=c("sort"),p=u||!f||!d;a({target:"Array",proto:!0,forced:p},{sort:function(t){return void 0===t?l.call(i(this)):l.call(i(this),s(t))}})},"79ad":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"curso-main-container pb-3"},[n("BannerInterno",{attrs:{icono:"fas fa-sitemap",titulo:"Síntesis"}}),n("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[t._m(0),n("p",{staticClass:"mb-5"},[t._v("El siguiente esquema le presenta una síntesis de los temas y contenidos desarrollados y analizados en este componente formativo. ")]),n("div",{staticClass:"row justify-content-center"},[t._m(1),n("div",{staticClass:"col-auto"},[n("a",{staticClass:"anexo mb-5",attrs:{href:t.obtenerLink("/downloads/Sintesis.pdf"),target:"_blank"}},[t._m(2),t._m(3)])])])])],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"titulo-principal"},[n("div",{staticClass:"titulo-principal__numero"},[n("span",[n("i",{staticClass:"fas fa-sitemap"})])]),n("h1",[t._v("Síntesis")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-10 mb-5"},[a("figure",[a("img",{attrs:{src:n("cc8e"),alt:"alt"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"anexo__icono"},[a("img",{attrs:{src:n("f906")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"anexo__texto"},[n("p",[t._v("Anexo. Síntesis")])])}],i={name:"Sintesis",data:function(){return{}},mounted:function(){var t=this;this.$nextTick((function(){t.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},r=i,c=n("2877"),o=Object(c["a"])(r,a,s,!1,null,null,null);e["default"]=o.exports},"7c1e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"curso-main-container referencias"},[n("BannerInterno",{attrs:{icono:"fas fa-book",titulo:"Referencias bibliográficas"}}),n("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(e){return n("div",{key:e.link,staticClass:"referencias__item"},[n("span",{domProps:{innerHTML:t._s(e.referencia)}}),e.link?n("a",{staticClass:"ms-1",attrs:{href:e.link,target:"_blank"}},[n("span",{domProps:{innerHTML:t._s(e.link)}}),n("i",{staticClass:"ms-1 fas fa-external-link-alt"})]):t._e(),n("hr",{staticClass:"my-3"})])})),0)],1)},s=[],i=n("2909"),r=(n("4e82"),n("3cd8")),c=n("ff6a"),o={name:"Referencias",components:{BannerInterno:r["default"]},mixins:[c["a"]],computed:{referenciasData:function(){return this.$config.referencias},orderedData:function(){var t=this,e=Object(i["a"])(this.referenciasData).sort((function(e,n){var a=t.quitarAcentos(e.referencia.split(" ")[0].toLowerCase()),s=t.quitarAcentos(n.referencia.split(" ")[0].toLowerCase());return a<s?-1:a>s?1:0}));return e}}},l=o,u=(n("4408"),n("2877")),f=Object(u["a"])(l,a,s,!1,null,null,null);e["default"]=f.exports},8385:function(t,e,n){"use strict";n("d36b")},cc8e:function(t,e,n){t.exports=n.p+"img/sintesis.3819435c.svg"},d36b:function(t,e,n){},f906:function(t,e,n){t.exports=n.p+"img/icono-pdf.82f139cb.svg"}}]);
//# sourceMappingURL=referencias.af79eca9.js.map