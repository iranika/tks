(function(e){function t(t){for(var r,c,s=t[0],i=t[1],l=t[2],u=0,m=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&m.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(m.length)m.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"048a016a"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=c(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-app-bar-nav-icon"),n("v-toolbar-title",[e._v("TalK Sample")]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{text:"",href:"#/"}},[e._v("Home")]),n("v-btn",{attrs:{text:"",href:"#/room"}},[e._v("Room")])],1)],1),n("v-main",[n("router-view")],1)],1)},a=[],c={name:"App",components:{},data:function(){return{}}},s=c,i=n("2877"),l=n("6544"),u=n.n(l),d=n("7496"),m=n("40dc"),p=n("5bc1"),v=n("8336"),f=n("f6c4"),g=n("2fa4"),b=n("2a7f"),j=Object(i["a"])(s,o,a,!1,null,null,null),h=j.exports;u()(j,{VApp:d["a"],VAppBar:m["a"],VAppBarNavIcon:p["a"],VBtn:v["a"],VMain:f["a"],VSpacer:g["a"],VToolbarItems:b["a"],VToolbarTitle:b["b"]});n("d3b7");var y=n("8c4f"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"container",attrs:{align:"center"}},[n("h1",{staticClass:"heading"},[e._v("P2P Media example")]),n("p",{staticClass:"note"},[e._v("Enter remote peer ID to call.")]),n("div",{staticClass:"p2p-media"},[n("div",{staticClass:"remote-stream"},[n("video",{attrs:{id:"js-remote-stream",muted:""},domProps:{muted:!0}})]),n("div",{staticClass:"local-stream"},[n("video",{attrs:{id:"js-local-stream",muted:""},domProps:{muted:!0}}),e._m(0),n("v-text-field",{attrs:{type:"text",placeholder:"Remote Peer ID",id:"js-remote-id"}}),n("v-btn",{attrs:{id:"js-call-trigger"}},[e._v("Call")]),n("v-btn",{attrs:{id:"js-close-trigger"}},[e._v("Close")]),n("v-btn",{attrs:{id:"js-muted-trigger"}},[e._v("mic mute :WIP")])],1)]),n("p",{staticClass:"meta",attrs:{id:"js-meta"}})])])},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Your ID: "),n("span",{attrs:{id:"js-local-id"}})])}],E=(n("99af"),n("4160"),n("3ca3"),n("498a"),n("159b"),n("ddb0"),n("2b3d"),n("0b69")),x=n.n(E);window.__SKYWAY_KEY__="f2ed2aa7-54ce-4b4d-8710-625e8d8d886d",window.onload=function(){var e,t=document.getElementById("js-local-stream"),n=document.getElementById("js-local-id"),r=document.getElementById("js-call-trigger"),o=document.getElementById("js-close-trigger"),a=document.getElementById("js-remote-stream"),c=document.getElementById("js-remote-id"),s=document.getElementById("js-meta"),i=document.querySelector("script[src*=skyway]");s.innerText="\n    UA: ".concat(navigator.userAgent,"\n    SDK: ").concat(i?i.src:"unknown","\n  ").trim(),navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then((function(t){e=t})).catch(console.error),t.muted=!0,t.playsInline=!0;try{t.srcObject=e}catch(u){console.log(e),t.src=window.URL.createObjectURL(e)}t.play().catch(console.error);var l=window.peer=new x.a({key:window.__SKYWAY_KEY__,debug:3});r.addEventListener("click",(function(){if(l.open){var t=l.call(c.value,e);t.on("stream",(function(e){a.srcObject=e,a.playsInline=!0,a.play().catch(console.error)})),t.once("close",(function(){a.srcObject.getTracks().forEach((function(e){return e.stop()})),a.srcObject=null})),o.addEventListener("click",(function(){return t.close(!0)}))}})),l.once("open",(function(e){return n.textContent=e})),l.on("call",(function(t){t.answer(e),t.on("stream",(function(e){a.srcObject=e,a.playsInline=!0,a.play().catch(console.error)})),t.once("close",(function(){a.srcObject.getTracks().forEach((function(e){return e.stop()})),a.srcObject=null})),o.addEventListener("click",(function(){return t.close(!0)}))})),l.on("error",console.error)};var O={name:"Home",components:{},data:function(){return{}}},I=O,C=n("8654"),k=Object(i["a"])(I,_,w,!1,null,null,null),B=k.exports;u()(k,{VBtn:v["a"],VTextField:C["a"]});var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"container",attrs:{align:"center"}},[n("h1",{staticClass:"heading"},[e._v("Room example(sfu)")]),n("div",{staticClass:"room"},[n("div",[n("video",{attrs:{id:"js-local-stream"}}),n("v-btn",{attrs:{id:"js-muted-trigger"}},[e._v("mic mute :WIP")]),n("v-text-field",{attrs:{placeholder:"Room Name",id:"js-room-id"}}),n("v-btn",{attrs:{id:"js-join-trigger"}},[e._v("Join")]),n("v-btn",{attrs:{id:"js-leave-trigger"}},[e._v("Leave")])],1),n("div",{staticClass:"remote-streams",attrs:{id:"js-remote-streams"}},[n("v-btn",{attrs:{id:"js-muted-trigger"}},[e._v("mute :WIP")])],1)]),n("p",{staticClass:"meta",attrs:{id:"js-meta"}})])])},T=[],Y=(n("a630"),n("96cf"),n("1da1"));function A(){return S.apply(this,arguments)}function S(){return S=Object(Y["a"])(regeneratorRuntime.mark((function e(){var t,n,r,o,a,c,s,i,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=document.getElementById("js-local-stream"),n=document.getElementById("js-join-trigger"),r=document.getElementById("js-leave-trigger"),o=document.getElementById("js-remote-streams"),a=document.getElementById("js-room-id"),c=document.getElementById("js-local-text"),s=document.getElementById("js-send-trigger"),i=document.getElementById("js-messages"),e.next=10,navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).catch(console.error);case 10:return l=e.sent,t.muted=!0,t.srcObject=l,t.playsInline=!0,e.next=16,t.play().catch(console.error);case 16:u=window.peer=new x.a({key:window.__SKYWAY_KEY__,debug:3}),n.addEventListener("click",(function(){if(u.open){var e=u.joinRoom(a.value,{mode:"mesh",stream:l});e.once("open",(function(){i.textContent+="=== You joined ===\n"})),e.on("peerJoin",(function(e){i.textContent+="=== ".concat(e," joined ===\n")})),e.on("stream",function(){var e=Object(Y["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=document.createElement("video"),n.srcObject=t,n.playsInline=!0,n.setAttribute("data-peer-id",t.peerId),o.append(n),e.next=7,n.play().catch(console.error);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.on("data",(function(e){var t=e.data,n=e.src;i.textContent+="".concat(n,": ").concat(t,"\n")})),e.on("peerLeave",(function(e){var t=o.querySelector('[data-peer-id="'.concat(e,'"]'));t.srcObject.getTracks().forEach((function(e){return e.stop()})),t.srcObject=null,t.remove(),i.textContent+="=== ".concat(e," left ===\n")})),e.once("close",(function(){s.removeEventListener("click",t),i.textContent+="== You left ===\n",Array.from(o.children).forEach((function(e){e.srcObject.getTracks().forEach((function(e){return e.stop()})),e.srcObject=null,e.remove()}))})),s.addEventListener("click",t),r.addEventListener("click",(function(){return e.close()}),{once:!0})}function t(){e.send(c.value),i.textContent+="".concat(u.id,": ").concat(c.value,"\n"),c.value=""}})),u.on("error",console.error);case 19:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}window.__SKYWAY_KEY__="f2ed2aa7-54ce-4b4d-8710-625e8d8d886d";var L=A,R={name:"Home",components:{},data:function(){return{}},mounted:L},V=R,K=Object(i["a"])(V,P,T,!1,null,null,null),M=K.exports;u()(K,{VBtn:v["a"],VTextField:C["a"]}),r["a"].use(y["a"]);var W=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/room",name:"Room",component:M}],D=new y["a"]({routes:W}),U=D,$=n("f309");r["a"].use($["a"]);var H=new $["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:U,vuetify:H,render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.ebf8158b.js.map