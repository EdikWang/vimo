webpackJsonp([42],{1138:function(t,e,n){var o=n(1139);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(592)("739b1bc2",o,!0)},1139:function(t,e,n){e=t.exports=n(591)(),e.push([t.i,"",""])},1140:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(104),a=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={data:function(){return{myInput:"",cityList:[],filteredList:[]}},watch:{myInput:function(){console.debug("myInput changed outer:"+this.myInput)}},computed:{},methods:{onInputHandler:function(){var t=this;this.filteredList=this.cityList.filter(function(e){return!t.myInput||e.spell.toString().toLowerCase().indexOf(t.myInput.toLowerCase())>-1})}},created:function(){this.cityList=a.default,this.onInputHandler()},mounted:function(){},activated:function(){}}},1141:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Page",[n("Header",[n("Navbar",[n("Title",[t._v("Searchbar")])],1),t._v(" "),n("Toolbar",[n("Searchbar",{attrs:{animated:!0,placeholder:"Search",debounce:100,showCancelButton:!0,cancelButtonText:"取消"},on:{onInput:t.onInputHandler},model:{value:t.myInput,callback:function(e){t.myInput=e},expression:"myInput"}})],1)],1),t._v(" "),n("Content",{staticClass:"outer-content"},[n("div",{attrs:{padding:""}},[n("p",[t._v("Search debounce: 100")]),t._v(" "),n("p",{attrs:{"no-margin":""}},[t._v("Search Value: "+t._s(t.myInput))])]),t._v(" "),n("List",[n("ItemGroup",t._l(t.filteredList,function(e,o){return n("Item",{key:o,attrs:{button:""}},[t._v(t._s(e.city))])}))],1)],1)],1)},staticRenderFns:[]}},691:function(t,e,n){n(1138);var o=n(0)(n(1140),n(1141),"data-v-8d2acfea",null);t.exports=o.exports}});