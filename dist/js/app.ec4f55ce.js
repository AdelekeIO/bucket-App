(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)r=i[u],s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"98f7f9f7"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"0192cbc0"}[t]+".css",s=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[t],p.parentNode.removeChild(p),a(o)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){r[t]=0}));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,a){n=s[t]=[e,a]});e.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");o.type=n,o.request=r,a[1](o)}s[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o={name:"app",components:{}},i=o,c=(a("034f"),a("2877")),l=Object(c["a"])(i,r,s,!1,null,null,null),u=l.exports,d=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Login",{attrs:{msg:"Login Page"}})],1)},m=[],f=a("96c7"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    Footer V1.0.0\n")])},h=[],v={name:"Footer"},g=v,w=Object(c["a"])(g,b,h,!1,null,"29e16f4f",null),y=w.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app flex-row align-items-center mt-5"},[a("div",{staticClass:"container"},[a("b-row",{staticClass:"justify-content-center"},[a("b-col",{attrs:{md:"8"}},[a("b-card-group",[a("b-card",{staticClass:"p-4",attrs:{"no-body":""}},[a("b-card-body",[a("b-form",[a("h1",[t._v("Login")]),a("p",{staticClass:"text-muted"},[t._v("Sign In to your account")]),a("div",{staticClass:"alert  msgs",class:["true"==t.msgs["status"]?"alert-success":"","false"==t.msgs["status"]?"alert-danger":""],attrs:{id:"msgs"}},[t._v(t._s(t.msgs["message"]))]),a("b-input-group",{staticClass:"mb-3"},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-user"})])],1),a("b-form-input",{staticClass:"form-control",attrs:{type:"text",required:"",name:"email",placeholder:"Username",autocomplete:"username email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("b-input-group",{staticClass:"mb-4"},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-lock"})])],1),a("b-form-input",{staticClass:"form-control",attrs:{type:"password",required:"",name:"password",placeholder:"Password",autocomplete:"current-password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("b-row",[a("b-col",{attrs:{cols:"6"}},[a("b-button",{staticClass:"px-4",attrs:{variant:"primary"},on:{click:t.processLogin}},[t._v("Login")])],1),a("b-col",{staticClass:"text-right",attrs:{cols:"6"}})],1)],1)],1)],1),a("b-card",{staticClass:"text-white bg-primary py-5 d-md-down-none",staticStyle:{width:"44%"},attrs:{"no-body":""}},[a("b-card-body",{staticClass:"text-center"},[a("div",[a("h2",[t._v("Sign up")]),a("p",[t._v("Bucket Is an application that models real life bucket where by users can create bucket, add item to it, manage and delete items in the bucket and even the bucket.")]),a("router-link",{attrs:{to:"/register"}},[a("b-button",{staticClass:"active mt-3",attrs:{variant:"primary"}},[t._v("Register Now!")])],1)],1)])],1)],1)],1)],1)],1)])},C=[],_=(a("a481"),a("bc3a")),x=a.n(_),P={headers:{"Content-Type":"application/x-www-form-urlencoded"}},S={name:"Login",props:{msg:String},data:function(){return{email:"",password:"",msgs:[{message:"",status:""}]}},methods:{processLogin:function(){var t=this;if(this.email.length<=0||""===this.email.trim)return this.msgs.message="User email is required",void(this.msgs.status="false");if(this.password.length<=0||""===this.email.trim)return this.msgs.message="User password is required",void(this.msgs.status="false");var e={email:this.email,password:this.password},a=new FormData;a.append("email",e.email),a.append("password",e.password),x.a.post("http://127.0.0.1:3000/auth/login?",a,P).then(function(e){var a=e.data.status,n=e.data.data,r=e.data.message;!0===a&&(localStorage.setItem("token",n),t.msgs.message=r,t.msgs.status=a,t.$router.replace("/Dashboard"))}).catch(function(t){alert(t)})}}},B=S,L=Object(c["a"])(B,k,C,!1,null,"70b4c7cc",null),j=L.exports,E={name:"home",components:{Login:j,Header:f["a"],Footer:y}},O=E,I=Object(c["a"])(O,p,m,!1,null,null,null),T=I.exports;n["default"].use(d["a"]);var $=new d["a"]({routes:[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/Register",name:"Register",component:function(){return a.e("about").then(a.bind(null,"73cf"))}},{path:"/Dashboard",name:"Dashboard",component:function(){return a.e("about").then(a.bind(null,"7277"))}},{path:"/PostBucket",name:"PostBucket",component:function(){return a.e("about").then(a.bind(null,"26b5"))}},{path:"/BucketList",name:"BucketList",component:function(){return a.e("about").then(a.bind(null,"c441"))}},{path:"/ItemView/:id",params:"id",name:"ItemView",component:function(){return a.e("about").then(a.bind(null,"2c02"))}},{path:"/PostItem/:id",params:"id",name:"PostItem",component:function(){return a.e("about").then(a.bind(null,"df17"))}},{path:"/EditBucket/:id",params:"id",name:"EditBucket",component:function(){return a.e("about").then(a.bind(null,"a523"))}}]}),A=a("5f5b");a("f9e3"),a("2dd8");n["default"].use(A["a"]),n["default"].config.productionTip=!1,new n["default"]({router:$,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,a){},"816c":function(t,e,a){},"96c7":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"nav"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark static-top"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand logo",attrs:{to:"dashboard"}},[t._v("Bucket")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[a("div",{staticClass:"navbar-nav mr-auto"}),a("form",{staticClass:"form-inline mt-2 mt-md-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search","aria-label":"Search",required:""},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),a("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"},on:{click:t.serchFunction}},[t._v("Search")])])])],1)]),a("div",{staticClass:"container"},[a("div",{staticClass:"row-lg-12 "},[a("router-link",{staticClass:"p-3 ",attrs:{to:"/Dashboard"}},[t._v("Buckets")]),t._v("|\n                    "),a("router-link",{staticClass:"p-3 ",attrs:{to:"/PostBucket"}},[t._v("Add Bucket")]),t._v("|\n                    "),a("span",{on:{click:t.deleteToken}},[a("router-link",{staticClass:"p-3 ",attrs:{to:"/"}},[t._v("Logout")]),t._v("|")],1)],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],s=(a("a481"),a("386d"),a("bc3a")),o={name:"Header",data:function(){return{selected:"1",options:[{value:"0",text:"Bucket List"},{value:"1",text:"Post Bucket"},{value:"2",text:"Item List"},{value:"3",text:"Add Item"}],selectedPage:null,search:""}},methods:{processSelected:function(){var t=this.selected,e=[{1:"bucketlists"},{2:"Post Bucket"}];this.selectedPage=e[t],this.$emit("selpage",t)},deleteToken:function(){localStorage.setItem("token","")},serchFunction:function(){console.log(123);var t=this.search;s["axios"].get().then(function(t){}).catch(function(t){}),console.log(t)}},created:function(){var t=localStorage.getItem("token");null!=t&&void 0!=t&&""!==t||this.$router.replace("/")}},i=o,c=(a("cd5f"),a("2877")),l=Object(c["a"])(i,n,r,!1,null,"510f9968",null);e["a"]=l.exports},cd5f:function(t,e,a){"use strict";var n=a("816c"),r=a.n(n);r.a}});
//# sourceMappingURL=app.ec4f55ce.js.map