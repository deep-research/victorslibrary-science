(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{F3eR:function(t,e,a){"use strict";a.r(e);a("FNk8");var s={metaInfo:{title:"Articles"},components:{Pager:a("Wsvf").a},data:()=>({search:"",currentPage:1,perPage:3,categoryFilter:"All Categories",tagFilter:"All Tags",dateFilter:"All Dates",selected:"A",options:[{item:"A",name:"Sort By Newest"},{item:"B",name:"Sort By Oldest"},{item:"C",name:"Sort By Title"}]}),methods:{getTagsLowercaseArray(t){let e=[];return t.forEach(t=>{e.push(t.title.toLowerCase())}),e},getCategoriesArray(t){let e=[];return t.forEach(t=>{e.push(t.node.title)}),e.unshift("All Categories"),e},getTagsArray(t){let e=[];return t.forEach(t=>{e.push(t.node.title)}),e.unshift("All Tags"),e},getMonthsArray(t){let e=[];return t.forEach(t=>{e.push(this.$luxon(t.node.date,"MMMM yyyy"))}),e.unshift("All Dates"),e=[...new Set(e)]},resetData(){Object.assign(this.$data,this.$options.data.apply(this)),this.mounted=!0}},computed:{searchResults(){return this.$page.posts.edges.filter(t=>{let e=this.search.toLowerCase().trim(),a=!1,s=!1,r=!1;if(("All Categories"==this.categoryFilter||t.node.category.title.toLowerCase().includes(this.categoryFilter.toLowerCase()))&&(a=!0),(""==this.tagFilter||"All Tags"==this.tagFilter||this.getTagsLowercaseArray(t.node.tags).find(t=>t.includes(this.tagFilter.toLowerCase())))&&(s=!0),("All Dates"==this.dateFilter||this.$luxon(t.node.date,"MMMM yyyy").includes(this.dateFilter))&&(r=!0),a&&s&&r){if(t.node.title.toLowerCase().includes(e))return t.node.title.toLowerCase().includes(e);if(t.node.excerpt.toLowerCase().includes(e))return t.node.excerpt.toLowerCase().includes(e);if(t.node.author.toLowerCase().includes(e))return t.node.author.toLowerCase().includes(e);if(t.node.content.toLowerCase().includes(e))return t.node.content.toLowerCase().includes(e);if(t.node.category.title.toLowerCase().includes(e))return t.node.category.title.toLowerCase().includes(e);if(this.getTagsLowercaseArray(t.node.tags).find(t=>t.includes(e)))return this.getTagsLowercaseArray(t.node.tags).find(t=>t.includes(e));if(this.$luxon(t.node.date).includes(e))return this.$luxon(t.node.date).includes(e)}})},lists(){const t=this.searchResults;return console.log(t),"A"==this.selected?t.sort((t,e)=>t.node.date>e.node.date?-1:0):"B"==this.selected?t.sort((t,e)=>t.node.date>e.node.date?1:-1):"C"==this.selected&&t.sort((t,e)=>t.node.title>e.node.title?1:-1),t.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},totalRows(){return this.searchResults.length}}},r=(a("mLIT"),a("KHd+")),i=null,l=Object(r.a)(s,(function(){var t=this,e=t._self._c;return e("Layout",[e("h1",{staticClass:"my-4"},[t._v("Articles")]),e("div",{staticStyle:{"max-width":"400px"}},[e("b-input-group",{attrs:{size:"md"}},[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("b-icon",{attrs:{icon:"search"}})],1),e("b-form-input",{attrs:{type:"search",name:"search",id:"search",placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e("v-select",{staticClass:"mt-2",attrs:{options:t.getCategoriesArray(t.$page.categories.edges),clearable:!1},model:{value:t.categoryFilter,callback:function(e){t.categoryFilter=e},expression:"categoryFilter"}}),e("v-select",{staticClass:"mt-2",attrs:{options:t.getTagsArray(t.$page.tags.edges),clearable:!1},model:{value:t.tagFilter,callback:function(e){t.tagFilter=e},expression:"tagFilter"}}),e("v-select",{staticClass:"mt-2",attrs:{options:t.getMonthsArray(t.$page.posts.edges),clearable:!1},model:{value:t.dateFilter,callback:function(e){t.dateFilter=e},expression:"dateFilter"}})],1),e("div",[e("b-button",{staticClass:"mr-2 mt-2",on:{click:t.resetData}},[t._v("Clear")]),e("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"primary","g-link":"",to:"/articles/categories"}},[t._v("Search by Category")]),e("b-button",{staticClass:"mt-2",attrs:{variant:"primary","g-link":"",to:"/articles/tags"}},[t._v("Search by Tag")])],1),e("b-form-radio-group",{staticClass:"mt-4",attrs:{options:t.options,"value-field":"item","text-field":"name","disabled-field":"notEnabled",stacked:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t.searchResults.length>0?e("div",[1==t.searchResults.length?e("div",[e("p",{staticClass:"mt-4 mb-0"},[t._v("1 article found.")])]):e("div",[e("p",{staticClass:"mt-4 mb-0"},[t._v(t._s(t.searchResults.length)+" articles found.")])]),t._l(t.lists,(function(a){return e("article",{key:a.node.id},[e("div",{staticClass:"media my-5"},[e("div",{staticClass:"media-body"},[e("g-link",{attrs:{to:a.node.path}},[e("h3",{staticClass:"mt-0"},[t._v(t._s(a.node.title))])]),e("div",{staticClass:"mb-2"},[e("span",{staticStyle:{"font-size":"20.5px"}},[t._v("By "+t._s(a.node.author)+" - "+t._s(t._f("luxon")(a.node.date)))])]),e("p",{staticClass:"mb-0"},[t._v(t._s(a.node.excerpt))]),a.node.category?e("p",{staticClass:"mb-0 mt-1"},[e("span",{staticStyle:{"font-weight":"500"}},[e("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/categories",title:"Search By Category"}},[t._v("Category")]),t._v(":\n            ")],1),e("g-link",{attrs:{to:a.node.category.path}},[t._v(t._s(a.node.category.title))])],1):t._e(),a.node.tags.length>0?e("p",{staticClass:"mb-0 mt-1"},[e("span",{staticStyle:{"font-weight":"500"}},[e("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/tags",title:"Search By Tag"}},[t._v("Tags")]),t._v(":\n            ")],1),t._l(a.node.tags,(function(s,r){return e("span",{key:r},[e("g-link",{attrs:{to:s.path}},[t._v(t._s(s.title))]),r+1<a.node.tags.length?e("span",[t._v(", ")]):t._e()],1)}))],2):t._e()],1)])])})),t.searchResults.length>t.perPage?e("b-pagination",{staticClass:"mb-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2):e("div",{staticClass:"my-4"},[e("p",[t._v("Your search didn't return any results. Please try again.")])])],1)}),[],!1,null,"13e1d4f1",null);"function"==typeof i&&i(l);e.default=l.exports},Wsvf:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("Kw5r");var s=a("DOVJ"),r=(a("Y6W1"),a("FNk8"),a("fVfk")),i={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:(t,{props:e,data:a,parent:i})=>{const{info:n,showLinks:o,showNavigation:c,ariaLabel:d}=e,{current:u,total:g,pages:p,start:h,end:f}=function({currentPage:t=1,totalPages:e=1},a){const s=Math.ceil(a/2);let r=Math.floor(t-s),i=Math.floor(t+s);e<=a?(r=0,i=e):t<=s?(r=0,i=a):t+s>=e&&(r=e-a,i=e);const l=[];for(let t=r+1;t<=i;t++)l.push(t);return{current:t,total:e,start:r,end:i,pages:l}}(n,e.range),y=Object(r.d)(i.$route),v=(a,r=a,i=r,n="")=>{a===u&&(i=e.ariaCurrentLabel);const o={to:l(y,a),exact:!0};return e.activeLinkClass&&(o.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(o.exactActiveClass=e.exactActiveLinkClass),t(s.a,{class:[e.linkClass,n],attrs:{...o,"aria-label":i.replace("%n",a),"aria-current":u===a}},[r])},b=o?p.map(t=>v(t,t,e.ariaLinkLabel)):[];if(c){const{firstLabel:t,prevLabel:a,nextLabel:s,lastLabel:r}=e,{ariaFirstLabel:i,ariaPrevLabel:l,ariaNextLabel:n,ariaLastLabel:o}=e,{firstClass:c,prevClass:d,nextClass:p,lastClass:y,navClass:C}=e;u>1&&b.unshift(v(u-1,a,l,[d,C])),h>0&&b.unshift(v(1,t,i,[c,C])),u<g&&b.push(v(u+1,s,n,[p,C])),f<g&&b.push(v(g,r,o,[y,C]))}return b.length<2?null:t("nav",{...a,attrs:{role:"navigation","aria-label":d}},b)}};function l(t,e){const a=/\/$/.test(t)?"/":"";return e>1?Object(r.g)(t)+`/${e}${a}`:t}a("6NbQ")},mLIT:function(t,e,a){"use strict";a("zpfU")},zpfU:function(t,e,a){}}]);