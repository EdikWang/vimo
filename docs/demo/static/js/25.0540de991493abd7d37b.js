webpackJsonp([25],{633:function(t,e,a){a(900);var o=a(0)(a(902),a(903),"data-v-2d04b8cc",null);t.exports=o.exports},900:function(t,e,a){var o=a(901);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(590)("2921d1f5",o,!0)},901:function(t,e,a){e=t.exports=a(589)(),e.push([t.i,"",""])},902:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"name",data:function(){return{timer:null}},computed:{tabsComponent:function(){return this.$refs.tabs}},methods:{onTabChange:function(t){console.debug("事件 -> onTabChange-selectedIndex:"+t),console.debug("当前选择index的tab实例:"),console.debug(this.tabsComponent.getByIndex(t)),console.debug("获取当前在激活状态的tab实例:"),console.debug(this.tabsComponent.getSelected()),console.debug("由Tabs组件获取当前激活的index:"+this.tabsComponent.getActivatedIndex())}}}},903:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Page",[a("Header",[a("Navbar",[a("Title",[t._v("Tabs在底部")])],1)],1),t._v(" "),a("Tabs",{ref:"tabs",attrs:{tabsLayout:"icon-top",tabsPlacement:"bottom"},on:{onTabChange:t.onTabChange}},[a("router-view"),t._v(" "),a("Tab",{attrs:{to:{name:"tabsBottom.demoTab1"},tabBadge:"13",tabTitle:"User",tabBadgeStyle:"danger",tabIcon:"person"},slot:"tab"}),t._v(" "),a("Tab",{attrs:{to:{name:"tabsBottom.demoTab2"},tabBadge:"2",tabTitle:"Cars",tabBadgeStyle:"dark",tabIcon:"car"},slot:"tab"}),t._v(" "),a("Tab",{attrs:{to:{name:"tabsBottom.demoTab3"},tabBadge:"7",tabTitle:"Star",tabIcon:"star",enabled:!0},slot:"tab"})],1)],1)},staticRenderFns:[]}}});