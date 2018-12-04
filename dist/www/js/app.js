!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="../",s(s.s=4)}([function(t,e){t.exports=Vue},function(t,e){t.exports=function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=1)}([function(t,e,s){},function(t,e,s){"use strict";s.r(e),s(0);var i=function(t,e,s,i,n,a,o,r){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=[],l._compiled=!0),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,c):[c]}return{exports:t,options:l}}({data:()=>({items:[],defaults:{title:"Message",position:"top-right",timeout:8e3,btn:{ok:" OK ",cancel:" Cancel"},callback:null},msg:null,pool:{"top-right":[],"top-left":[],"top-center":[],"bottom-left":[],"bottom-right":[],"bottom-center":[]}}),methods:{success(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.add(t,Object.assign(e,{theme:"v-notify-success"}))},info(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.add(t,Object.assign(e,{theme:"v-notify-info"}))},warning(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.add(t,Object.assign(e,{theme:"v-notify-warning"}))},error(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.add(t,Object.assign(e,{theme:"v-notify-error"}))},alert(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.add(t,Object.assign(e,{type:"alert"}))},confirm(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.add(t,Object.assign(e,{type:"confirm"}))},add(t,e){return new Promise((s,i)=>{this.$parent||(this.$mount(),document.body.appendChild(this.$el));var n=Object.assign({},this.defaults,e,{message:t,key:`${Date.now()}-${Math.random()}`,callback:s});"alert"==n.type||"confirm"==n.type?this.msg=n:(this.pool[n.position].push(n),n.timeout>0&&setTimeout(()=>this.remove(n),n.timeout))})},close(t){this.msg.callback&&this.msg.callback({data:t}),this.msg=null},remove(t){let e=this.pool[t.position].indexOf(t);e>=0&&this.pool[t.position].splice(e,1)}}},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v-msg-container"},[s("div",{staticClass:"v-msg-container v-msg-top-right"},[s("transition-group",{attrs:{"enter-active-class":"animated quick fadeInRight","leave-active-class":"animated quick fadeOutRight"}},t._l(t.pool["top-right"],function(e){return s("div",{key:e.key,staticClass:"v-msg-box",class:(i={},i[e.theme]=e.theme,i)},[s("button",{staticClass:"close",attrs:{"aria-label":"Close","data-dismiss":"alert",type:"button"},on:{click:function(s){t.remove(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),e.title?s("h6",{staticClass:"v-msg-title"},[t._v(t._s(e.title))]):t._e(),t._v("\n                "+t._s(e.message)+"\n            ")]);var i}))],1),t._v(" "),s("div",{staticClass:"v-msg-container v-msg-top-left"},[s("transition-group",{attrs:{"enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutLeft"}},t._l(t.pool["top-left"],function(e){return s("div",{key:e.key,staticClass:"v-msg-box",class:(i={},i[e.theme]=e.theme,i)},[s("button",{staticClass:"close",attrs:{"aria-label":"Close","data-dismiss":"alert",type:"button"},on:{click:function(s){t.remove(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),e.title?s("h6",{staticClass:"v-msg-title"},[t._v(t._s(e.title))]):t._e(),t._v("\n                "+t._s(e.message)+"\n            ")]);var i}))],1),t._v(" "),s("div",{staticClass:"v-msg-container v-msg-bottom-left"},[s("transition-group",{attrs:{"enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutLeft"}},t._l(t.pool["bottom-left"],function(e){return s("div",{key:e.key,staticClass:"v-msg-box",class:(i={},i[e.theme]=e.theme,i)},[s("button",{staticClass:"close",attrs:{"aria-label":"Close","data-dismiss":"alert",type:"button"},on:{click:function(s){t.remove(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),e.title?s("h6",{staticClass:"v-msg-title"},[t._v(t._s(e.title))]):t._e(),t._v("\n                "+t._s(e.message)+"\n            ")]);var i}))],1),t._v(" "),s("div",{staticClass:"v-msg-container v-msg-bottom-right"},[s("transition-group",{attrs:{"enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight"}},t._l(t.pool["bottom-right"],function(e){return s("div",{key:e.key,staticClass:"v-msg-box",class:(i={},i[e.theme]=e.theme,i)},[s("button",{staticClass:"close",attrs:{"aria-label":"Close","data-dismiss":"alert",type:"button"},on:{click:function(s){t.remove(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),e.title?s("h6",{staticClass:"v-msg-title"},[t._v(t._s(e.title))]):t._e(),t._v("\n                "+t._s(e.message)+"\n            ")]);var i}))],1),t._v(" "),s("div",{staticClass:"v-msg-container v-msg-top-center"},[s("transition-group",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},t._l(t.pool["top-center"],function(e){return s("div",{key:e.key,staticClass:"v-msg-box",class:(i={},i[e.theme]=e.theme,i)},[s("button",{staticClass:"close",attrs:{"aria-label":"Close","data-dismiss":"alert",type:"button"},on:{click:function(s){t.remove(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),e.title?s("h6",{staticClass:"v-msg-title"},[t._v(t._s(e.title))]):t._e(),t._v("\n                "+t._s(e.message)+"\n            ")]);var i}))],1),t._v(" "),s("div",{staticClass:"v-msg-container v-msg-bottom-center"},[s("transition-group",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOut"}},t._l(t.pool["bottom-center"],function(e){return s("div",{key:e.key,staticClass:"v-msg-box",class:(i={},i[e.theme]=e.theme,i)},[s("button",{staticClass:"close",attrs:{"aria-label":"Close","data-dismiss":"alert",type:"button"},on:{click:function(s){t.remove(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),e.title?s("h6",{staticClass:"v-msg-title"},[t._v(t._s(e.title))]):t._e(),t._v("\n                "+t._s(e.message)+"\n            ")]);var i}))],1),t._v(" "),t.msg?s("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[s("div",{staticClass:"v-msg-backdrop"})]):t._e(),t._v(" "),t.msg?s("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOut"}},[s("div",{staticClass:"v-msg-container v-msg-alert"},[s("div",{staticClass:"v-msg-box"},[s("button",{staticClass:"close",attrs:{"aria-label":"Close",type:"button"},on:{click:function(e){t.close(1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),t.msg.title?s("h6",{staticClass:"v-msg-title"},[t._v(t._s(t.msg.title))]):t._e(),t._v(" "),s("p",{staticClass:"v-msg-content"},[t._v(t._s(t.msg.message))]),t._v(" "),s("div",{staticClass:"v-msg-bottom"},[s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.close(1)}}},[t._v(t._s(t.msg.btn.ok))]),t._v(" "),"confirm"==t.msg.type?s("button",{staticClass:"btn btn-light float-right",on:{click:function(e){t.close(0)}}},[t._v(t._s(t.msg.btn.cancel))]):t._e()])])])]):t._e()],1)});i.options.__file="msg.vue";var n=i.exports;n.install=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.prototype.$msg=new(t.extend(n))({propsData:e})},e.default=n}])},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var i=s(0),n=s.n(i);var a=function(t,e,s,i,n,a,o,r){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),i&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):n&&(c=r?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,c):[c]}return{exports:t,options:l}}({methods:{show(t){this.$msg.success("This is a notification",{position:t})},error(){this.$msg.error("This is a notification")},info(){this.$msg.info("This is a notification")},warning(){this.$msg.warning("This is a notification")},alert(){this.$msg.alert("This is a notification")},timeout(){this.$msg.info("This is a notification",{timeout:3e3})},confirm(){this.$msg.confirm("Are you sure want to delete this item?").then(t=>{let e=t.data;this.$msg.alert("You choose: "+e)})}}},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("a",{staticClass:"github-corner",attrs:{"aria-label":"View source on GitHub",href:"https://github.com/nasa8x/v-msg",target:"_blank"}},[s("svg",{staticStyle:{fill:"#34495e",color:"#ECEFF1",position:"absolute",top:"0",border:"0",right:"0"},attrs:{"aria-hidden":"true",height:"80",viewbox:"0 0 250 250",width:"80"}},[s("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),t._v(" "),s("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),t._v(" "),s("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]),t._v(" "),s("div",{staticClass:"container"},[s("p",[s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.show("top-left")}}},[t._v("top-left")]),t._v(" "),t._m(1)]),t._v(" "),s("p",[s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.show("top-right")}}},[t._v("top-right")]),t._v(" "),t._m(2)]),t._v(" "),s("p",[s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.show("top-center")}}},[t._v("top-center")]),t._v(" "),t._m(3)]),t._v(" "),s("p",[s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.show("bottom-left")}}},[t._v("bottom-left")]),t._v(" "),t._m(4)]),t._v(" "),s("p",[s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.show("bottom-right")}}},[t._v("bottom-right")]),t._v(" "),t._m(5)]),t._v(" "),s("p",[s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.show("bottom-center")}}},[t._v("bottom-center")]),t._v(" "),t._m(6)]),t._v(" "),s("p",[s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.alert()}}},[t._v("alert")]),t._v(" "),t._m(7)]),t._v(" "),s("p",[s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.confirm()}}},[t._v("confirm")]),t._v(" "),t._m(8)]),t._v(" "),s("p",[s("button",{staticClass:"btn btn-info",on:{click:function(e){t.info()}}},[t._v("info")]),t._v(" "),t._m(9)]),t._v(" "),s("p",[s("button",{staticClass:"btn btn-warning",on:{click:function(e){t.warning()}}},[t._v("warning")]),t._v(" "),t._m(10)]),t._v(" "),s("p",[s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.error()}}},[t._v("error")]),t._v(" "),t._m(11)]),t._v(" "),s("p",[s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.timeout()}}},[t._v("timeout")]),t._v(" "),t._m(12)])]),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",[this._v("V-MSG")]),this._v(" "),e("h4",[this._v("Simple notify handler component for Vue.js")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{attrs:{"data-lang":"js"}},[e("code",[this._v("this.$msg.success('This is a notification', { position: 'top-left' });")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{attrs:{"data-lang":"js"}},[e("code",[this._v("this.$msg.success('This is a notification', { position: 'top-right' });")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{attrs:{"data-lang":"js"}},[e("code",[this._v("this.$msg.success('This is a notification', { position: 'top-center' });")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{attrs:{"data-lang":"js"}},[e("code",[this._v("this.$msg.success('This is a notification', { position: 'bottom-left' });")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{attrs:{"data-lang":"js"}},[e("code",[this._v("this.$msg.success('This is a notification', { position: 'bottom-right' });")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{attrs:{"data-lang":"js"}},[e("code",[this._v("this.$msg.success('This is a notification', { position: 'bottom-center' });")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{attrs:{"data-lang":"js"}},[e("code",[this._v("this.$msg.alert('This is a notification');")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{attrs:{"data-lang":"js"}},[e("code",[this._v("this.$msg.confirm('Are you sure want to delete this item?').then(({ data }) => {\n                    alert('You choose: ' + data);\n                })")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{attrs:{"data-lang":"js"}},[e("code",[this._v("this.$msg.info('This is a notification');")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{attrs:{"data-lang":"js"}},[e("code",[this._v("this.$msg.warning('This is a notification');")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{attrs:{"data-lang":"js"}},[e("code",[this._v("this.$msg.error('This is a notification');")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{attrs:{"data-lang":"js"}},[e("code",[this._v("this.$msg.info('This is a notification',{timeout: 3000});")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[e("a",{staticClass:"social-icon",attrs:{href:"https://github.com/nasa8x",target:"_blank"}},[e("i",{staticClass:"fa-3x fab fa-github-square"})])]),this._v(" "),e("p",[this._v("Developed under the "),e("a",{attrs:{href:"https://opensource.org/licenses/MIT",target:"_blank"}},[this._v("MIT License")]),e("br"),this._v("\n            Made Love by Nasa8x"),e("br"),this._v(" "),e("strong",[this._v("Donate")]),e("br"),this._v(" "),e("a",{attrs:{href:"http://vrl.to/ec5cfbae",target:"_blank"}},[e("img",{attrs:{src:"https://i.imgur.com/z0p6RvA.png"}})]),e("a",{attrs:{href:"http://vrl.to/ec5cfbae",target:"_blank"}},[e("img",{attrs:{src:"https://i.imgur.com/bEUNBGz.png"}})])])])}],!1,null,null,null);a.options.__file="app.vue";var o=a.exports,r=(s(2),s(3),s(1)),c=s.n(r);n.a.use(c.a),new n.a({el:"#app",render:t=>t(o)})}]);