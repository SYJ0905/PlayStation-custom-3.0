(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f1b8a2b"],{"12ae":function(t,a,s){t.exports=s.p+"img/loading.0f6ddb71.gif"},"4b3f":function(t,a,s){t.exports=s.p+"img/switch-2.ff4d0181.jpg"},"67ed":function(t,a,s){t.exports=s.p+"img/Mario.53ebcbef.png"},"6ad3":function(t,a,s){t.exports=s.p+"img/link.415a562a.png"},"6d59":function(t,a,s){t.exports=s.p+"img/eve.a7e8f9d1.png"},a522:function(t,a,s){},b1c2:function(t,a,s){t.exports=s.p+"img/switch-3.4cd6df31.jpg"},e4fe:function(t,a,s){"use strict";var e=s("a522"),i=s.n(e);i.a},e915:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card mt-0 bg-white rounded-0 prod-card"},[s("div",{staticClass:"product-img",staticStyle:{"padding-bottom":"55%","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+t.cardData.imageUrl+")"}}),s("div",{staticClass:"card-body"},[s("div",{staticClass:"prod-info mb-3"},[s("h5",{staticClass:"card-title mb-3 font-weight-bold text-truncate"},[t._v(t._s(t.cardData.title))]),s("p",{staticClass:"card-text"},[t._v(t._s(t.cardData.description))])]),s("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.cardData.price?t._e():s("div",{staticClass:"h5"},[t._v(t._s(t._f("currency")(t.cardData.origin_price))+"元")]),t.cardData.price?s("del",{staticClass:"font-italic"},[t._v("原價 "+t._s(t._f("currency")(t.cardData.origin_price)))]):t._e(),t.cardData.price?s("div",{staticClass:"h5 text-danger font-weight-bold"},[t._v("售價 "+t._s(t._f("currency")(t.cardData.price)))]):t._e()])]),s("div",{staticClass:"card-footer d-flex"},[s("button",{staticClass:"btn btn-outline-info btn-sm",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.goSingleProduct(t.cardData.id)}}},[s("i",{staticClass:"fas fa-info d-none d-md-inline-block"}),t._v("\n      查看商品\n    ")]),s("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.addCart(t.cardData.id,1)}}},[t.status.loading?s("i",{staticClass:"fas fa-spinner fa-spin d-none d-md-inline-block"}):s("i",{staticClass:"fas fa-shopping-cart d-none d-md-inline-block"}),t._v("\n      加入購物車\n    ")])])])},i=[],c={data:function(){return{status:{loading:!1}}},props:{cardData:{type:Object,default:function(){return{}}}},methods:{goSingleProduct:function(t){var a=this;console.log(t),a.$router.push("/productDetail/".concat(t))},addCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("cloudsu","/cart");s.status.loading=!0;var i={product_id:t,qty:a};this.$http.post(e,{data:i}).then(function(t){console.log(t.data),t.data.success&&(s.$bus.$emit("shopCart:update"),s.$bus.$emit("message:push","【".concat(t.data.data.product.title,"】").concat(t.data.data.qty," ").concat(t.data.data.product.unit," ").concat(t.data.message),"success")),s.status.loading=!1})}}},n=c,r=s("2877"),o=Object(r["a"])(n,e,i,!1,null,null,null);a["a"]=o.exports},efe1:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-3"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("img",{attrs:{src:s("12ae"),alt:"",width:"200"}})]),e("div",{staticClass:"swiper-container",attrs:{id:"prodSwiper"}},[e("div",{staticClass:"swiper-wrapper"},t._l(t.filterData,function(t){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("ProductCard",{staticClass:"h-100",attrs:{cardData:t}})],1)}),0)])],1)},i=[],c=s("41d6"),n=s("e915"),r={data:function(){return{products:[],isLoading:!1}},components:{ProductCard:n["a"]},props:{prodCategory:{type:String,default:""},searchFilter:{type:String,default:""},searchResult:{type:Array,default:function(){return[]}}},methods:{getProducts:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("cloudsu","/products/all");t.isLoading=!0,this.$http.get(a).then(function(a){console.log(a.data),a.data.success&&(t.products=a.data.products,t.isLoading=!1,t.showSwiper())})},showSwiper:function(){new c["a"]("#prodSwiper",{slidesPerView:4,slidesPerGroup:4,spaceBetween:10,grabCursor:!0,speed:600,autoplay:{delay:5e3},observer:!0,breakpoints:{480:{slidesPerView:1,slidesPerGroup:1,spaceBetween:20},767:{slidesPerView:2,slidesPerGroup:2,spaceBetween:30},992:{slidesPerView:3,slidesPerGroup:3,spaceBetween:30}},pagination:{el:".swiper-pagination",clickable:!0}})}},computed:{filterData:function(){var t=this;return t.searchFilter||t.searchResult.length?t.searchResult:t.products.filter(function(a){return"all"==t.prodCategory?a:a.category==t.prodCategory})}},created:function(){var t=this;t.getProducts()}},o=r,d=(s("e4fe"),s("2877")),l=Object(d["a"])(o,e,i,!1,null,"7ad2bfe7",null);a["a"]=l.exports},f4fa:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container py-3"},[t._m(0),t._m(1),s("section",[s("h2",{staticClass:"page_title my-3"},[t._v("相關遊戲特惠中")]),s("ProdSlider",{attrs:{prodCategory:"Switch"}})],1),s("section",{staticClass:"my-3"},[s("h2",{staticClass:"page_title"},[t._v("想看更多？")]),s("div",{staticClass:"d-flex justify-content-center py-3"},[s("router-link",{staticClass:"toShopping font-weight-bold",attrs:{to:"/products"}},[t._v("\n        前往 PlayStation Store\n        "),s("i",{staticClass:"fas fa-caret-right ml-1"})])],1)])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-10"},[e("img",{staticClass:"img-fluid",attrs:{src:s("4b3f"),alt:""}})])]),e("h2",{staticClass:"page_title my-3"},[t._v("關於 Switch")]),e("p",{staticClass:"px-3 text-justify"},[t._v("\n      任天堂Switch（日語：ニンテンドースイッチ，英語：Nintendo Switch）是日本任天堂公司出品的電子遊戲機，\n      於2017年3月3日在日本、北美、歐洲和香港發售，同年12月1日在韓國和台灣發售。\n      擁有可拆卸控制器和可分離式主機，遊戲載體使用了專用卡匣。\n      主機處理器使用了NVIDIA客制的Tegra X1系統晶片，這是任天堂首次採用NVIDIA的系統晶片。\n      開發期中的主機於2015年3月17日以「NX」代號首次公布，在2016年10月20日首次於網路影片上公開正式名稱任天堂Switch和其造型。\n    ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-10"},[e("img",{staticClass:"img-fluid",attrs:{src:s("b1c2"),alt:""}})])]),e("h2",{staticClass:"page_title my-3"},[t._v("買 Switch 的理由")]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-6"},[e("ul",{staticClass:"buy-reason reason-switch mb-3 text-center"},[e("li",{staticClass:"py-1"},[e("img",{staticClass:"img-fluid",attrs:{src:s("67ed"),alt:"",width:"50"}}),e("span",[t._v("陪伴你童年的瑪莉歐大叔")])]),e("li",{staticClass:"py-1"},[e("img",{staticClass:"img-fluid",attrs:{src:s("6d59"),alt:"",width:"50"}}),e("span",[t._v("全世界火紅的精靈寶可夢")])]),e("li",{staticClass:"py-1"},[e("img",{staticClass:"img-fluid",attrs:{src:s("6ad3"),alt:"",width:"50"}}),e("span",[t._v("耐玩性超高的「薩爾達」系列")])])])])])])}],c=s("efe1"),n={components:{ProdSlider:c["a"]}},r=n,o=s("2877"),d=Object(o["a"])(r,e,i,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-1f1b8a2b.68477b04.js.map