"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{3485:function(n,t,e){e.r(t),e.d(t,{default:function(){return q}});var r,a,c,o,i,u,s=e(3433),p=e(5861),f=e(9439),l=e(168),d=e(7757),h=e.n(d),x=e(2791),v=e(36),w=e(5867),m=w.ZP.ul(r||(r=(0,l.Z)(["\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px 8px;\n  padding: 0 0 20px 0;\n  margin: 0 auto;\n  width: 100%;\n"]))),Z=w.ZP.li(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 32px;\n  font-weight: 700;\n  overflow: hidden;\n  margin: 0 auto;\n  width: 312px;\n  overflow: hidden;\n"]))),b=w.ZP.p(c||(c=(0,l.Z)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0;\n  padding: 0;\n  background-color: inherit;\n"]))),y=w.ZP.img(o||(o=(0,l.Z)(["\n  width: 300px;\n  border: 2px solid orange;\n  box-shadow: rgba(255, 255, 255, 0.3) 0px 1px 2px 0px, rgba(255, 255, 255, 0.15) 0px 2px 6px 2px;\n"]))),k=w.ZP.h1(i||(i=(0,l.Z)(["\n  text-align: center;\n  background-color: black;\n  animation: pulse 2000ms infinite;\n  @keyframes pulse {\n  0% {\n    color:  #ff9900;\n  }\n  25% {\n    color:  #ff8b8b;\n  }\n  50% {\n    color:  #4c00ff;\n  }\n  75% {\n    color: #48ff00;\n  }\n  100% {\n  color: #00fff2;\n  }\n}  \n"]))),g=e(1087),_=e(630),j=e(184),P=(0,w.ZP)(g.OL)(u||(u=(0,l.Z)(["\n  text-decoration: none;\n  color: #222020;\n"]))),q=function(){var n=(0,x.useState)(!1),t=(0,f.Z)(n,2),e=t[0],r=t[1],a=(0,x.useState)([]),c=(0,f.Z)(a,2),o=c[0],i=c[1];return(0,x.useEffect)((function(){var n=function(){var n=(0,p.Z)(h().mark((function n(){var t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),n.prev=1,n.next=4,(0,v.ap)();case 4:t=n.sent,i((0,s.Z)(t.data.results)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,r(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,j.jsxs)("div",{children:[(0,j.jsx)(k,{children:" DAILY TOP-20"}),e&&(0,j.jsx)(_.Z,{}),!e&&(0,j.jsx)(m,{children:o.map((function(n){return(0,j.jsx)(Z,{children:(0,j.jsxs)(P,{to:"movies/".concat(n.id),children:[(0,j.jsx)(y,{src:v.sU+n.poster_path,alt:n.name||n.title}),(0,j.jsx)(b,{children:n.title||n.name})]})},n.id)}))})]})}},36:function(n,t,e){e.d(t,{TP:function(){return h},ap:function(){return p},bp:function(){return v},q:function(){return l},sU:function(){return s},tx:function(){return m}});var r=e(5861),a=e(7757),c=e.n(a),o=e(5294),i="8c011024daf9ab6b31dbbb1d29e7525a",u="https://api.themoviedb.org/3",s="https://image.tmdb.org/t/p/w500/";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(u,"/trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(u,"/search/movie?query=").concat(t,"&page=").concat(e,"&api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(u,"/movie/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=485.03803fec.chunk.js.map