(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb043010"],{"12ae":function(t,s,a){t.exports=a.p+"img/loading.0f6ddb71.gif"},a425:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}},[e("img",{attrs:{src:a("12ae"),alt:"",width:"200"}})]),e("div",{staticClass:"container py-5"},[e("div",{staticClass:"form-row"},[t._m(0),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"alert alert-primary alert-rounded-shadow-sm text-md-center",class:{"alert-success":t.order.is_paid},attrs:{role:"alert"}},[e("span",[t._v("2.確認付款")]),e("i",{staticClass:"far fa-money-bill-alt ml-2"})])]),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"alert alert-secondary alert-rounded-shadow-sm text-md-center",class:{"alert-success":t.order.is_paid},attrs:{role:"alert"}},[e("span",[t._v("3.完成")]),e("i",{staticClass:"fas fa-check-circle ml-2"})])])]),e("div",{staticClass:"row justify-content-center"},[e("form",{staticClass:"col-md-10 col-lg-8",on:{submit:function(s){return s.preventDefault(),t.payOrder(s)}}},[t._m(1),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover"},[t._m(2),e("tbody",{staticClass:"bg-white"},t._l(t.order.products,function(s){return e("tr",{key:s.id},[e("td",{staticClass:"align-middle"},[e("span",{staticClass:"badge d-none d-md-inline-block",class:t._f("prodCategory")(s.product.category)},[t._v(t._s(s.product.category))]),e("span",[t._v(t._s(s.product.title))]),s.coupon?e("div",{staticClass:"text-success"},[e("small",[t._v("已套用"+t._s(s.coupon.title))])]):t._e()]),e("td",{staticClass:"align-middle text-right"},[e("span",[t._v(t._s(s.qty)+"/"+t._s(s.product.unit))])]),s.total==s.final_total?e("td",{staticClass:"text-right text-nowrap align-middle"},[e("span",[t._v(t._s(t._f("currency")(s.final_total)))])]):e("td",{staticClass:"text-right text-nowrap align-middle"},[e("del",{staticClass:"text-muted"},[e("em",[t._v(t._s(t._f("currency")(s.total)))])]),e("div",[t._v("\n                    "+t._s(t._f("currency")(s.final_total))+"\n                  ")])])])}),0),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),e("td",{staticClass:"text-right text-danger font-weight-bold"},[t._v(t._s(t._f("currency")(t.order.total)))])])])])]),t._m(3),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered"},[e("tbody",[e("tr",[e("th",{staticClass:"table-success"},[t._v("Email")]),e("td",[t._v(t._s(t.order.user.email))])]),e("tr",[e("th",{staticClass:"table-success"},[t._v("姓名")]),e("td",[t._v(t._s(t.order.user.name))])]),e("tr",[e("th",{staticClass:"table-success"},[t._v("電話")]),e("td",[t._v(t._s(t.order.user.tel))])]),e("tr",[e("th",{staticClass:"table-success"},[t._v("地址")]),e("td",[t._v(t._s(t.order.user.address))])]),e("tr",[e("th",{staticClass:"table-success"},[t._v("付款狀態")]),e("td",[t.order.is_paid?e("span",{staticClass:"text-success font-weight-bold"},[t._v("付款完成")]):e("span",[t._v("尚未付款")])])])])])]),t.order.is_paid?e("router-link",{staticClass:"btn btn-primary btn-block btn-lg font-weight-bold",attrs:{to:"/products"}},[e("i",{staticClass:"fas fa-reply mr-1"}),t._v("繼續逛逛？\n        ")]):e("button",{staticClass:"btn btn-warning btn-block btn-lg font-weight-bold text-black",attrs:{type:"submit"}},[t.status.loading?e("i",{staticClass:"fas fa-spinner fa-spin mr-1"}):e("i",{staticClass:"fas fa-clipboard-check mr-1"}),t._v("\n          確認付款\n        ")])],1)])])],1)},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"alert alert-success alert-rounded-shadow-sm text-md-center",attrs:{role:"alert"}},[a("span",[t._v("1.輸入收件人資訊")]),a("i",{staticClass:"far fa-user ml-2"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{staticClass:"text-center mb-3"},[a("i",{staticClass:"fas fa-shopping-cart mr-2"}),t._v("購物商品清單")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",{staticClass:"table-warning"},[a("tr",{staticClass:"text-nowrap"},[a("th",[t._v("品名")]),a("th",{staticClass:"text-right",attrs:{width:"100"}},[t._v("數量")]),a("th",{staticClass:"text-center",attrs:{width:"100"}},[t._v("價格")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{staticClass:"text-center mb-3"},[a("i",{staticClass:"fas fa-user-circle mr-2"}),t._v("購買人資料")])}],i={data:function(){return{isLoading:!1,orderId:"",order:{user:{}},status:{loading:!1}}},methods:{getOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("cloudsu","/order/").concat(t.orderId);this.$http.get(s).then(function(s){console.log(s.data),t.order=s.data.order})},payOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("cloudsu","/pay/").concat(t.orderId);t.status.loading=!0,this.$http.post(s).then(function(s){console.log(s.data),s.data.success?(t.$bus.$emit("message:push",s.data.message,"success"),t.getOrder()):t.$bus.$emit("message:push","付款失敗 :( ","danger"),t.status.loading=!1})}},created:function(){var t=this;t.orderId=t.$route.params.orderId,t.getOrder()}},c=i,l=a("2877"),n=Object(l["a"])(c,e,r,!1,null,null,null);s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-cb043010.4c3fbdeb.js.map