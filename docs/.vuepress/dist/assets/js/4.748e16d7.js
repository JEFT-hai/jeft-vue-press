(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{377:function(t,e,o){},406:function(t,e,o){"use strict";o(377)},413:function(t,e,o){"use strict";o.r(e);o(118),o(28),o(59),o(200);var a={data:function(){return{urlPrefix:"http://jeft-vue-example.xuhaichao.cn/#/"}},mounted:function(){console.log("path",this.$page.path),console.log("frontmatter",this.$frontmatter);var t=this.$refs.iframe;t&&(t.onload=function(){console.log("change",t)})},computed:{layout:function(){return this.$page.path?(console.log("pathC",this.$page),this.$frontmatter.layout?(console.log("frontmatterC",this.$frontmatter),this.$frontmatter.layout):"Layout"):"NotFound"},showMobile:function(){return-1!=this.$page.path.indexOf("components")},exampleUrl:function(){if(this.showMobile){var t=this.$page.path.replace(".html","").split("/").pop();return this.urlPrefix+t}return""}}},i=(o(406),o(36)),n=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"global-layout"}},[e("div",{class:["main",{showMobile:this.showMobile}]},[e(this.layout,{tag:"component"}),this._v(" "),this.showMobile?e("div",{staticClass:"mobile"},[e("iframe",{ref:"iframe",staticClass:"demo",attrs:{src:this.exampleUrl,frameborder:"0"}})]):this._e()],1)])}),[],!1,null,"51025be0",null);e.default=n.exports}}]);