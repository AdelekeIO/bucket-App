(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"26b5":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Header"),e("div",{staticClass:"container"},[e("div",{staticClass:"col-lg-12 border"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"col-8 float-center border pr-5 pl-5 pb-5  pt-0"},[e("h3",[t._v("Post Bucket")]),e("hr"),e("b-form",{attrs:{action:""}},[e("div",[e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(s){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v("\n    "+t._s(t.msg)+"\n  ")])],1),e("div",{staticClass:"form-group d-flex col-lg-2 col-lg-12"},[e("b-form-input",{attrs:{placeholder:"Enter bucket name"},model:{value:t.name,callback:function(s){t.name=s},expression:"name"}})],1),e("div",{staticClass:"col-lg-2 col-lg-12"},[e("div"),e("b-button",{staticClass:"float-right form-control",attrs:{variant:"outline-primary"},on:{click:t.postBucket}},[t._v("Add")])],1)])],1)])])])],1)},n=[],o=(e("7f7f"),e("96c7")),i=e("bc3a"),c=e.n(i),r={name:"PostBucket",components:{Header:o["a"]},data:function(){return{name:"",token:localStorage.getItem("token"),success_status:!1,success_msg:"",err_status:!1,msg:"",dismissSecs:5,dismissCountDown:0}},methods:{postBucket:function(){var t=this,s=this.name,e=new FormData;e.append("name",s);var a="http://127.0.0.1:3000/bucketlists?jwt="+this.token;c.a.post(a,e).then(function(s){var e=s.data;!0===e.status?(t.msg=e.message,t.showAlert(),t.name=""):!1===e.status&&(t.msg=e.message,t.showAlert())}).catch(function(t){console.log(res)})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},l=r,u=e("2877"),d=Object(u["a"])(l,a,n,!1,null,"fdc9b986",null);s["default"]=d.exports},2841:function(t,s,e){},"2c02":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Header"),e("div",{staticClass:"container"},[e("div",{staticClass:"col-lg-12 border"},[e("div",{staticClass:"col-lg-12"},[e("h2",{staticClass:"mt-2 text-left"},[t._v("Bucket's id "+t._s(this.$route.params.id)+" Items")]),e("div")])]),e("div",[e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(s){t.dismissCountDown=0}}},[t._v("\n                                "+t._s(t.msg)+"\n                                ")]),e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v(t._s(t.fields[0]))]),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.fields[1]))]),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.fields[2]))]),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.fields[3]))]),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.fields[4]))])])]),e("tbody",t._l(t.items,function(s){return e("tr",{key:s.id},[e("td",[t._v(t._s(s.name))]),e("td",[t._v(t._s(s.date_created))]),e("td",[t._v(t._s(s.date_modified))]),e("td",[t._v(t._s(s.created_by))])])}),0)])],1)])],1)},n=[],o=e("96c7"),i=e("bc3a"),c=e.n(i),r={name:"ItemView",components:{Header:o["a"]},data:function(){return{token:localStorage.getItem("token"),bid:this.$route.params.id,msg:"",dismissSecs:5,dismissCountDown:0,fields:["name","date_created","date_modified","done"],items:[]}},methods:{showAlert:function(){this.dismissCountDown=this.dismissSecs}},created:function(){var t=this,s=new FormData;s.append("jwt",this.token),c.a.get("http://127.0.0.1:3000/bucketlists/"+this.bid+"/items/?jwt="+this.token).then(function(s){var e=s.data;!0===e.status?(t.msg=e.message,t.showAlert(),t.items=e.data):!1===e.status&&(t.msg=e.message,t.showAlert())}).catch(function(t){})}},l=r,u=e("2877"),d=Object(u["a"])(l,a,n,!1,null,"300d8afe",null);s["default"]=d.exports},7277:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",[e("Header",{on:{selpage:t.processSelected}}),e("div",{staticClass:"container"},[t._m(0),e("GetBuckets")],1),e("div",{staticClass:"container d-flex border"})],1)])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-lg-12 border"},[e("div",{staticClass:"col-lg-12"},[e("h2",{staticClass:"mt-2 text-left"},[t._v("Welcome")]),e("div",[e("table")])])])}],o=e("96c7"),i=e("dcb7"),c={name:"Dashboard",components:{Header:o["a"],GetBuckets:i["a"]},methods:{triggerAction:function(t){console.log(t)},processSelected:function(t){console.log(t)}},created:function(){}},r=c,l=(e("e0c8"),e("2877")),u=Object(l["a"])(r,a,n,!1,null,"1c31bdc6",null);s["default"]=u.exports},"73cf":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"app flex-row align-items-center"},[e("div",{staticClass:"container"},[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{attrs:{md:"6",sm:"8"}},[e("b-card",{staticClass:"mx-4",attrs:{"no-body":""}},[e("b-card-body",{staticClass:"p-4"},[e("b-form",[e("h1",[t._v("Register")]),e("p",{staticClass:"text-muted"},[t._v("Create your account")]),e("b-input-group",{staticClass:"mb-3"},[e("b-input-group-prepend",[e("b-input-group-text",[e("i",{staticClass:"icon-user"})])],1),e("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Username",autocomplete:"username"}})],1),e("b-input-group",{staticClass:"mb-3"},[e("b-input-group-prepend",[e("b-input-group-text",[t._v("@")])],1),e("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Email",autocomplete:"email"}})],1),e("b-input-group",{staticClass:"mb-3"},[e("b-input-group-prepend",[e("b-input-group-text",[e("i",{staticClass:"icon-lock"})])],1),e("b-form-input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Password",autocomplete:"new-password"}})],1),e("b-input-group",{staticClass:"mb-4"},[e("b-input-group-prepend",[e("b-input-group-text",[e("i",{staticClass:"icon-lock"})])],1),e("b-form-input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Repeat password",autocomplete:"new-password"}})],1),e("b-button",{attrs:{variant:"success",block:""}},[t._v("Create Account")])],1)],1),e("b-card-footer",{staticClass:"p-4"},[e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("router-link",{attrs:{to:"/"}},[e("b-button",{staticClass:"btn btn-facebook",attrs:{block:""}},[e("span",[t._v("Login")])])],1)],1)],1)],1)],1)],1)],1)],1)])},n=[],o={name:"Register"},i=o,c=e("2877"),r=Object(c["a"])(i,a,n,!1,null,null,null);s["default"]=r.exports},"7f7f":function(t,s,e){var a=e("86cc").f,n=Function.prototype,o=/^\s*function ([^ (]*)/,i="name";i in n||e("9e1e")&&a(n,i,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},a523:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Header"),e("div",{staticClass:"container"},[e("div",{staticClass:"col-lg-12 border"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"col-8 float-center border pr-5 pl-5 pb-5  pt-0"},[e("h3",[t._v("Edit Bucket")]),e("hr"),e("b-form",{attrs:{action:""}},[e("div",[e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(s){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v("\n    "+t._s(t.msg)+"\n  ")])],1),e("div",{staticClass:"form-group d-flex col-lg-2 col-lg-12"},[e("b-form-input",{attrs:{placeholder:"Enter bucket name",value:t.name},model:{value:t.name,callback:function(s){t.name=s},expression:"name"}})],1),e("div",{staticClass:"col-lg-2 col-lg-12"},[e("div"),e("b-button",{staticClass:"float-right form-control",attrs:{variant:"outline-primary"},on:{click:t.postBucket}},[t._v("Update")])],1)])],1)])])])],1)},n=[],o=(e("7f7f"),e("96c7")),i=e("bc3a"),c=e.n(i),r={name:"EditBucket",components:{Header:o["a"]},data:function(){return{name:"",id:"",bucketId:this.$route.params.id,token:localStorage.getItem("token"),success_status:!1,success_msg:"",err_status:!1,msg:"",dismissSecs:5,dismissCountDown:0}},methods:{postBucket:function(){var t=this,s=this.name,e=new FormData;e.append("name",s);var a="http://127.0.0.1:3000/bucketlists/"+this.bucketId+"?jwt="+this.token;c.a.post(a,e).then(function(s){var e=s.data;console.log(e),!0===e.status?(t.msg=e.message,t.showAlert(),t.name=""):!1===e.status&&(t.msg=e.message,t.showAlert())}).catch(function(t){console.log(t)})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}},created:function(){var t=this,s=(this.$route.params.id,"http://127.0.0.1:3000/bucketlists/"+this.bucketId+"?jwt="+this.token);c.a.get(s).then(function(s){var e=s.data.data;console.log(e),t.name=e[0].name,t.id=e[0].id,!0===e.status||!1===e.status&&(t.msg=e.message,t.showAlert())}).catch(function(t){console.log(t)})}},l=r,u=e("2877"),d=Object(u["a"])(l,a,n,!1,null,"34094422",null);s["default"]=d.exports},c441:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Header"),e("GetBuckets")],1)},n=[],o=e("96c7"),i=e("dcb7"),c={name:"BucketList",components:{Header:o["a"],GetBuckets:i["a"]}},r=c,l=e("2877"),u=Object(l["a"])(r,a,n,!1,null,"77b86e63",null);s["default"]=u.exports},dcb7:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v(t._s(t.fields[0]))]),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.fields[1]))]),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.fields[2]))]),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.fields[3]))]),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.fields[4]))])])]),e("tbody",t._l(t.items,function(s){return e("tr",{key:s.id},[e("td",[t._v(t._s(s.name))]),e("td",[t._v(t._s(s.date_created))]),e("td",[t._v(t._s(s.date_modified))]),e("td",[t._v(t._s(s.created_by))]),e("td",[e("router-link",{attrs:{to:{path:"/editBucket/"+s.id}}},[e("b-button",{attrs:{variant:"outline-success",append:""}},[t._v("edit")])],1),e("b-button",{attrs:{to:{path:"/PostItem/"+s.id},variant:"outline-primary"}},[t._v("Add Item")]),e("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){return t.deleteBucket(s.id)}}},[t._v("delete")]),e("b-button",{attrs:{to:{path:"/ItemView/"+s.id},variant:""}},[t._v("View Items")])],1)])}),0)])])])},n=[],o=e("bc3a"),i=e.n(o),c={name:"GetBuckets",components:{},data:function(){return{token:localStorage.getItem("token"),id:0,fields:["name","date_created","date_modified","created_by","actions"],items:[]}},methods:{deleteBucket:function(t){var s=this,e=new FormData;e.append("jwt",this.token),i.a.get("http://127.0.0.1:3000/del_bucketlists/"+t+"?jwt="+this.token).then(function(e){console.log(e),s.items=s.items.filter(function(s){return s.id!==t})}).catch(function(t){})}},created:function(){var t=this,s=new FormData;s.append("jwt",this.token),i.a.get("http://127.0.0.1:3000/bucketlists?jwt="+this.token).then(function(s){var e=s.data.data;t.items=e}).catch(function(t){console.log(t)})}},r=c,l=e("2877"),u=Object(l["a"])(r,a,n,!1,null,"011362da",null);s["a"]=u.exports},df17:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{},[e("Header"),e("div",{staticClass:"container"},[e("div",{staticClass:"col-8 float-center border pr-5 pl-5 pb-5  pt-0"},[e("h3",[t._v("Post Items")]),e("hr"),e("b-form",{attrs:{action:""},on:{submit:t.postItem}},[e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(s){t.dismissCountDown=0}}},[t._v("\n                            "+t._s(t.msg)+"\n                            ")]),e("div",{staticClass:"form-group d-flex col-lg-2 col-lg-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.itemName,expression:"itemName"}],staticClass:"form-control ml-1",attrs:{type:"text",placeholder:"Enter item name",name:"itemName",id:"",required:""},domProps:{value:t.itemName},on:{input:function(s){s.target.composing||(t.itemName=s.target.value)}}}),e("b-select",{attrs:{required:""},model:{value:t.selected,callback:function(s){t.selected=s},expression:"selected"}},[e("option",{attrs:{value:""}},[t._v("Done Status")]),e("option",{attrs:{value:"True"}},[t._v("True")]),e("option",{attrs:{value:"False"}},[t._v("False")])])],1),e("div",{staticClass:"col-lg-2 col-lg-12"},[e("div"),e("input",{staticClass:"btn-sm form-control btn btn-primary",attrs:{type:"submit",value:"Submit"}})])],1)],1)])],1)},n=[],o=e("96c7"),i=e("bc3a"),c=e.n(i),r={name:"PostItem",components:{Header:o["a"]},data:function(){return{token:localStorage.getItem("token"),itemName:"",selected:"",msg:"",dismissSecs:5,dismissCountDown:0}},methods:{showAlert:function(){this.dismissCountDown=this.dismissSecs},postItem:function(t){var s=this;t.preventDefault();var e=this.$route.params.id,a=new FormData;a.append("name",this.itemName),a.append("done",this.selected);var n="http://127.0.0.1:3000/bucketlists/"+e+"/items/?jwt="+this.token;c.a.post(n,a).then(function(t){var e=t.data;!0===e.status?(s.msg=e.message,s.showAlert()):!1===e.status&&(s.msg=e.message,s.showAlert()),s.itemName="",s.selected=""}).catch(function(t){console.log(t)})}},created:function(){console.log(123),console.log(this.$route.params.id)}},l=r,u=e("2877"),d=Object(u["a"])(l,a,n,!1,null,"82719a88",null);s["default"]=d.exports},e0c8:function(t,s,e){"use strict";var a=e("2841"),n=e.n(a);n.a},f820:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],o=e("2877"),i={},c=Object(o["a"])(i,a,n,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=about.98f7f9f7.js.map