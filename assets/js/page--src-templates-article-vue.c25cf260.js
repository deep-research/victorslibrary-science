(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{NGBk:function(t,e,s){},ZqMZ:function(t,e,s){"use strict";s("NGBk")},xtqI:function(t,e,s){"use strict";s.r(e);var a={data:()=>({urlHover:!1,dismissSecs:5,dismissCountDown:0}),components:{Facebook:()=>s.e(1).then(s.t.bind(null,"rI/W",7)).then(t=>t.Facebook).catch(),Twitter:()=>s.e(1).then(s.t.bind(null,"rI/W",7)).then(t=>t.Twitter).catch(),WhatsApp:()=>s.e(1).then(s.t.bind(null,"rI/W",7)).then(t=>t.WhatsApp).catch(),Telegram:()=>s.e(1).then(s.t.bind(null,"rI/W",7)).then(t=>t.Telegram).catch(),Email:()=>s.e(1).then(s.t.bind(null,"rI/W",7)).then(t=>t.Email).catch()},metaInfo(){return{title:this.$page.post.title}},methods:{urlHoverTrue(){this.urlHover=!0},urlHoverFalse(){this.urlHover=!1},slug(){return this.$page.post.path.slice(10,-1).split("-").join(" ").replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})).split(" ").join("-")},getUrl(){return"https://liquidcrystalmembrane.com"+this.$page.post.path},clipboard(){return this.getUrl()},countDownChanged(t){this.dismissCountDown=t},showAlert(){this.dismissCountDown=this.dismissSecs},breadcrumbs(){return[{text:"Articles",to:"/articles"},{text:this.slug(),active:!0}]}}},i=(s("ZqMZ"),s("KHd+")),r=null,o=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("Layout",[e("article",{staticClass:"blogPost"},[e("b-breadcrumb",{attrs:{items:t.breadcrumbs()}}),e("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"my-4",domProps:{innerHTML:t._s(t.$page.post.title)}}),e("div",{staticClass:"mb-2"},[e("span",{staticStyle:{"font-size":"20.5px"}},[t._v("By "+t._s(t.$page.post.author)+" - "+t._s(t._f("luxon")(t.$page.post.date)))])]),t.$page.post.category?e("p",{staticClass:"mb-0 mt-1"},[e("span",{staticStyle:{"font-weight":"500"}},[e("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/categories",title:"Search By Category"}},[t._v("Category")]),t._v(":\n      ")],1),e("g-link",{attrs:{to:t.$page.post.category.path}},[t._v(t._s(t.$page.post.category.title))])],1):t._e(),t.$page.post.tags.length>0?e("p",{staticClass:"mb-0 mt-1"},[e("span",{staticStyle:{"font-weight":"500"}},[e("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/tags",title:"Search By Tag"}},[t._v("Tags")]),t._v(":\n      ")],1),t._l(t.$page.post.tags,(function(s,a){return e("span",{key:a},[e("g-link",{attrs:{to:s.path}},[t._v(t._s(s.title))]),a+1<t.$page.post.tags.length?e("span",[t._v(", ")]):t._e()],1)}))],2):t._e(),e("VueRemarkContent",{staticClass:"article-text mt-5"}),e("div",{staticStyle:{"margin-top":"38px"}},[e("ClientOnly",[e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline-block mr-3 social-span",attrs:{title:"Share on Facebook"}},[e("facebook",{staticClass:"social-btn",attrs:{url:t.getUrl(),scale:"3"}})],1),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline-block mr-3 social-span",attrs:{title:"Share on Twitter"}},[e("twitter",{staticClass:"social-btn",attrs:{url:t.getUrl(),title:t.$page.post.title,scale:"3"}})],1),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline-block mr-3 social-span",attrs:{title:"Share on WhatsApp"}},[e("whats-app",{staticClass:"social-btn",attrs:{url:t.getUrl(),title:t.$page.post.title,scale:"3"}})],1),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline-block mr-3 social-span",attrs:{title:"Share on Telegram"}},[e("telegram",{staticClass:"social-btn",attrs:{url:t.getUrl(),scale:"3"}})],1),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline-block mr-3 social-span",attrs:{title:"Share by Email"}},[e("email",{staticClass:"social-btn",attrs:{url:t.getUrl(),subject:t.$page.post.title,scale:"3"}})],1),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}},{name:"clipboard",rawName:"v-clipboard",value:t.clipboard(),expression:"clipboard()"}],staticClass:"d-inline-block mr-3 social-span",attrs:{title:"Copy Link"},on:{click:t.showAlert}},[e("div",{staticStyle:{height:"3px",cursor:"pointer"},on:{mouseover:function(e){return t.urlHoverTrue()},mouseleave:function(e){return t.urlHoverFalse()}}}),e("b-button",{staticClass:"url-btn",class:{urlHoverCss:t.urlHover},staticStyle:{height:"42px",width:"42px",padding:"0"},attrs:{variant:"secondary"}},[e("b-icon",{staticStyle:{width:"40px",height:"40px"},attrs:{icon:"link45deg"}})],1),e("div",{staticStyle:{height:"3px",cursor:"pointer"},on:{mouseover:function(e){return t.urlHoverTrue()},mouseleave:function(e){return t.urlHoverFalse()}}})],1)])],1),e("b-alert",{staticClass:"mt-3",attrs:{variant:"success",dismissible:"",fade:"",show:t.dismissCountDown},on:{"dismiss-count-down":t.countDownChanged}},[t._v("\n      The link has been copied.\n    ")]),e("Disqus",{staticClass:"mt-5",attrs:{shortname:"liquid-crystal-membrane",identifier:t.$page.post.title}})],1)])}),[],!1,null,"4a3f9da8",null);"function"==typeof r&&r(o);e.default=o.exports}}]);