(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-index"],{"22ad":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},r=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return r}),i.d(e,"a",function(){return n})},"2a95":function(t,e,i){"use strict";i.r(e);var n=i("e3d6"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},"2b6b":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("6b5a")),r=n(i("2eef")),o={name:"UniNavBar",components:{uniStatusBar:a.default,uniIcons:r.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[String,Boolean],default:!1},border:{type:[String,Boolean],default:!0}},mounted:function(){uni.report&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};e.default=o},4148:function(t,e,i){var n=i("741f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2abbc3b2",n,!0,{sourceMap:!1,shadowMode:!1})},4665:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("9869")),r=n(i("4021"));function o(t){return(0,a.default)({url:r.default.home.banners,method:"get",data:t})}function s(t){return(0,a.default)({url:r.default.home.brandList,method:"get",data:t})}function c(t){return(0,a.default)({url:r.default.home.hotList,method:"get",data:t})}var d={getBannerList:o,getHotList:c,getBrandList:s};e.default=d},"48e4":function(t,e,i){"use strict";var n=i("7b21"),a=i.n(n);a.a},6714:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.home[data-v-0f0dc29c]{position:relative;padding-bottom:%?100?%}.home .home-header[data-v-0f0dc29c]{width:100%;position:absolute;left:0;top:0;z-index:10}.home .home-header[data-v-0f0dc29c] .uni-navbar__content.uni-navbar--border{border:none}.home .home-header[data-v-0f0dc29c] .uni-navbar__content .uni-navbar__header{height:auto;box-sizing:border-box;padding:0 %?20?%}.home .home-header[data-v-0f0dc29c] .uni-navbar__content .uni-navbar__header .uni-navbar__header-btns uni-view{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.home .home-header[data-v-0f0dc29c] .uni-navbar__content .uni-navbar__header .uni-navbar__header-btns{width:auto}.home .home-header .title[data-v-0f0dc29c]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.home .home-header .title .item-nav[data-v-0f0dc29c]{font-size:%?32?%;color:#fff;line-height:%?45?%;padding:%?13?% 0;margin:0 %?20?%}.home .home-header .title .item-nav.active[data-v-0f0dc29c]{border-bottom:%?6?% solid #fff}.home .home-header .icon[data-v-0f0dc29c]{max-width:%?42?%;max-height:%?42?%}.home .home-header .icon.icon-search[data-v-0f0dc29c]{margin-right:%?40?%}.home .swiper[data-v-0f0dc29c]{height:%?500?%}.home .swiper .swiper-item[data-v-0f0dc29c]{height:100%}.home .swiper .swiper-item .img[data-v-0f0dc29c]{width:100%;height:100%}.home .commin-title[data-v-0f0dc29c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;box-sizing:border-box;padding:%?40?% %?40?%}.home .commin-title .h[data-v-0f0dc29c]{font-size:%?32?%;color:#3e3e3e;letter-spacing:%?2.14?%;font-weight:700}.home .commin-title .p[data-v-0f0dc29c]{font-size:%?26?%;color:#8c8c8c;letter-spacing:%?2?%}.home .series .series-scrol[data-v-0f0dc29c]{white-space:nowrap;width:100%;box-sizing:border-box;padding:0 %?20?%}.home .series .series-scrol .img-text[data-v-0f0dc29c]{display:inline-block;width:%?200?%;margin-right:%?40?%;text-align:center;border-radius:%?10?%;overflow:hidden}.home .series .series-scrol .img-text .img[data-v-0f0dc29c]{width:100%;height:%?140?%;display:block}.home .series .series-scrol .img-text .text[data-v-0f0dc29c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;padding:0 %?20?%;margin-top:%?40?%}.home .series .series-scrol .img-text .text .h[data-v-0f0dc29c]{font-size:%?26?%;color:#3e3e3e;letter-spacing:%?2?%;font-weight:700}.home .series .series-scrol .img-text .text .p[data-v-0f0dc29c]{font-size:%?20?%;color:#b0b0b0;letter-spacing:%?1.4?%;white-space:nowrap;\n          /*强制一行显示*/overflow:hidden;\n          /*超出部分隐藏*/text-overflow:ellipsis\n          /*最后添加省略号*/}.home .hot .hot-swper[data-v-0f0dc29c]{height:%?314?%}.home .hot .hot-swper .swiper-item[data-v-0f0dc29c]{position:relative;width:100%;height:100%;box-sizing:border-box;padding-top:%?40?%;padding-right:%?40?%}.home .hot .hot-swper .swiper-item .img[data-v-0f0dc29c]{height:%?280?%;width:%?200?%;display:block;position:absolute;top:0;left:%?40?%;border-radius:%?30?%}.home .hot .hot-swper .swiper-item .text-block[data-v-0f0dc29c]{width:100%;height:100%;background-color:#fff;border-radius:%?30?%}.home .hot .hot-swper .swiper-item .text-block .text[data-v-0f0dc29c]{height:100%;box-sizing:border-box;padding-left:%?260?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.home .brand[data-v-0f0dc29c]{height:100%;width:100%;box-sizing:border-box;padding:%?80?% %?40?%;padding-top:%?120?%;background-color:#f1ece7}.home .brand .card[data-v-0f0dc29c]{width:100%;border-radius:%?30?%;background-color:#fff;margin-bottom:%?28?%;overflow:hidden}.home .brand .card .img[data-v-0f0dc29c]{height:%?420?%;width:100%;display:block}.home .brand .card .text[data-v-0f0dc29c]{width:100%;box-sizing:border-box;padding:%?56?%;padding-bottom:%?36?%}.home .brand .card .text .h[data-v-0f0dc29c]{display:block;font-size:%?32?%;color:#3e3e3e;letter-spacing:%?2.14?%;font-weight:700}.home .brand .card .text .P[data-v-0f0dc29c]{font-size:%?22?%;color:#b1b1b1;letter-spacing:%?1.6?%;margin-top:%?18?%}',""])},"6b5a":function(t,e,i){"use strict";i.r(e);var n=i("22ad"),a=i("c913");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("b0b9");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"a6c49796",null,!1,n["a"],o);e["default"]=c.exports},7085:function(t,e,i){var n=i("6714");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2a1cc8d6",n,!0,{sourceMap:!1,shadowMode:!1})},"741f":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-status-bar[data-v-a6c49796]{width:%?750?%;height:20px}',""])},"7b21":function(t,e,i){var n=i("9148");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4f9ebc27",n,!0,{sourceMap:!1,shadowMode:!1})},"89a3":function(t,e,i){"use strict";i.r(e);var n=i("c95d"),a=i("a574");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("48e4");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"be44445a",null,!1,n["a"],o);e["default"]=c.exports},9148:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-nav-bar-text[data-v-be44445a]{font-size:%?32?%}.uni-nav-bar-right-text[data-v-be44445a]{font-size:%?28?%}.uni-navbar[data-v-be44445a]{width:%?750?%}.uni-navbar__content[data-v-be44445a]{position:relative;width:%?750?%;background-color:#fff;overflow:hidden}.uni-navbar__content_view[data-v-be44445a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-navbar__header[data-v-be44445a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:%?750?%;height:44px;line-height:44px;font-size:16px}.uni-navbar__header-btns[data-v-be44445a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;width:%?120?%;padding:0 6px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-navbar__header-btns-left[data-v-be44445a]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?150?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-navbar__header-btns-right[data-v-be44445a]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?150?%;padding-right:%?30?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-navbar__header-container[data-v-be44445a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-navbar__header-container-inner[data-v-be44445a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.uni-navbar__placeholder-view[data-v-be44445a]{height:44px}.uni-navbar--fixed[data-v-be44445a]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-be44445a]{box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-be44445a]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#c8c7cc}',""])},a574:function(t,e,i){"use strict";i.r(e);var n=i("2b6b"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},aadc:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("7514");var a=n(i("9869")),r=n(i("4021"));function o(t){return(0,a.default)({url:r.default.find.list,method:"get",data:t})}function s(t){return(0,a.default)({url:r.default.find.detail,method:"get",data:t})}function c(t){return(0,a.default)({url:r.default.find.articleDetail,method:"get",data:t})}function d(t){return(0,a.default)({url:r.default.find.articleList,method:"get",data:t})}var l={getFindList:o,getFindDetail:s,getArticleDetail:c,getAritlceList:d};e.default=l},ad92:function(t,e,i){"use strict";var n=i("7085"),a=i.n(n);a.a},b0b9:function(t,e,i){"use strict";var n=i("4148"),a=i.n(n);a.a},c913:function(t,e,i){"use strict";i.r(e);var n=i("f09c"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},c95d:function(t,e,i){"use strict";var n={"uni-status-bar":i("6b5a").default,"uni-icons":i("2eef").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-navbar"},[i("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?i("uni-status-bar"):t._e(),i("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color,backgroundColor:t.backgroundColor}},[i("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftIcon.length?i("v-uni-view",{staticClass:"uni-navbar__content_view"},[i("uni-icons",{attrs:{color:t.color,type:t.leftIcon,size:"24"}})],1):t._e(),t.leftText.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[i("v-uni-text",{style:{color:t.color,fontSize:"14px"}},[t._v(t._s(t.leftText))])],1):t._e(),t._t("left")],2),i("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view"},[t.title.length?i("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[i("v-uni-text",{staticClass:"uni-nav-bar-text",style:{color:t.color}},[t._v(t._s(t.title))])],1):t._e(),t._t("default")],2),i("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",class:t.title.length?"uni-navbar__header-btns-right":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightIcon.length?i("v-uni-view",{staticClass:"uni-navbar__content_view"},[i("uni-icons",{attrs:{color:t.color,type:t.rightIcon,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[i("v-uni-text",{staticClass:"uni-nav-bar-right-text"},[t._v(t._s(t.rightText))])],1):t._e(),t._t("right")],2)],1)],1),t.fixed?i("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?i("uni-status-bar"):t._e(),i("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},r=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return r}),i.d(e,"a",function(){return n})},d2de:function(t,e,i){"use strict";var n={"uni-nav-bar":i("89a3").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"home"},[i("uni-nav-bar",{staticClass:"home-header",attrs:{backgroundColor:t.actColor}},[i("v-uni-view",{attrs:{slot:"left"},slot:"left"},[i("v-uni-image",{staticClass:"icon",attrs:{src:"../../static/icons/msg.png",mode:""}})],1),i("v-uni-view",{staticClass:"title"},[i("v-uni-text",{staticClass:"item-nav",class:{active:"0"==t.active},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.active="0"}}},[t._v("推介")]),i("v-uni-text",{staticClass:"item-nav",class:{active:"1"==t.active},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.active="1"}}},[t._v("品牌")])],1),i("v-uni-view",{attrs:{slot:"right"},slot:"right"},[i("v-uni-image",{staticClass:"icon icon-search",attrs:{src:"../../static/icons/search.png",mode:""}}),i("v-uni-image",{staticClass:"icon ",attrs:{src:"../../static/icons/buyCar.png",mode:""}})],1)],1),"0"==t.active?i("v-uni-view",{staticClass:"referral"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,"indicator-color":"#fff","indicator-active-color":"#22c522"}},t._l(t.bannerList,function(t,e){return i("v-uni-swiper-item",{key:e},[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{staticClass:"img",attrs:{src:t.img_url,mode:""}})],1)],1)}),1),i("v-uni-view",{staticClass:"series"},[i("v-uni-view",{staticClass:"commin-title"},[i("v-uni-text",{staticClass:"h"},[t._v("品类推介")]),i("v-uni-text",{staticClass:"p"},[t._v("更多>")])],1),i("v-uni-scroll-view",{staticClass:"series-scrol",attrs:{"scroll-x":"true"}},t._l(t.seriesList,function(e,n){return i("v-uni-view",{key:n,staticClass:"img-text",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goSeries(e.id)}}},[i("v-uni-image",{staticClass:"img",attrs:{src:e.bg_img,mode:""}}),i("v-uni-view",{staticClass:"text"},[i("v-uni-text",{staticClass:"h"},[t._v(t._s(e.cname))]),i("v-uni-text",{staticClass:"p"},[t._v(t._s(e.ename))])],1)],1)}),1)],1),i("v-uni-view",{staticClass:"hot"},[i("v-uni-view",{staticClass:"commin-title"},[i("v-uni-text",{staticClass:"h"},[t._v("特色优选")]),i("v-uni-text",{staticClass:"p"},[t._v("更多>")])],1),i("v-uni-swiper",{staticClass:"hot-swper",attrs:{"previous-margin":"20px","next-margin":"40px"}},t._l(t.hotList,function(e,n){return i("v-uni-swiper-item",{key:n,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e.id)}}},[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{staticClass:"img",attrs:{src:e.cover_img,mode:""}}),i("v-uni-view",{staticClass:"text-block"},[i("v-uni-view",{staticClass:"text"},[i("v-uni-text",[t._v(t._s(e.gname))]),i("v-uni-text",[t._v(t._s(e.detail_desc))])],1)],1)],1)],1)}),1)],1)],1):i("v-uni-view",{staticClass:"brand"},t._l(t.brandList,function(e,n){return i("v-uni-view",{key:n,staticClass:"card"},[i("v-uni-image",{staticClass:"img",attrs:{src:e.coverImg,mode:""}}),i("v-uni-view",{staticClass:"text"},[i("v-uni-text",{staticClass:"h"},[t._v(t._s(e.cname))]),i("v-uni-text",{staticClass:"p"},[t._v(t._s(e.descr))])],1)],1)}),1)],1)},r=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return r}),i.d(e,"a",function(){return n})},d688:function(t,e,i){"use strict";i.r(e);var n=i("d2de"),a=i("2a95");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("ad92");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"0f0dc29c",null,!1,n["a"],o);e["default"]=c.exports},e3d6:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("4665")),r=n(i("aadc")),o=n(i("89a3")),s={name:"",props:{},data:function(){return{active:"0",bannerList:[],seriesList:[],hotList:[],brandList:[]}},onLoad:function(){this.init()},methods:{init:function(){var t=this;a.default.getBannerList({use:0}).then(function(e){console.log(e),t.bannerList=e.data}),a.default.getHotList().then(function(e){t.hotList=e.data}),a.default.getBrandList().then(function(e){t.brandList=e.data,console.log("bran",e)}),r.default.getFindList().then(function(e){t.seriesList=e.data,console.log(e)})},goDetail:function(t){uni.navigateTo({url:"../sort/detail/detail?id="+t})},goSeries:function(t){uni.setStorageSync("tempId",t),uni.switchTab({url:"../guide/index"})}},computed:{actColor:function(){return"0"==this.active?"transparent":"1"==this.active?"#354E44":void 0}},components:{uniNavBar:o.default}};e.default=s},f09c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync().statusBarHeight+"px",a={name:"UniStatusBar",data:function(){return{statusBarHeight:n}}};e.default=a}}]);