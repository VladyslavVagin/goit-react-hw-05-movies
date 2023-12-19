"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[383],{2383:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a,o,i,c,u=t(5861),s=t(9439),p=t(7757),l=t.n(p),d=t(1087),f=t(7689),h=t(2791),v=t(36),x=t(5264),m=t(168),b=t(5867),g=b.ZP.input(r||(r=(0,m.Z)(["\n  width: 90%;\n  padding: 10px;\n  margin-top: 10px;\n  outline: none;\n  border-radius: 40px;\n  border: 1px solid black;\n  transition: all 600ms ease;\n  &:focus-within {\n    border-color: #048d8d;\n  }\n"]))),Z=b.ZP.form(a||(a=(0,m.Z)(["\n  position: relative;\n  max-width: 900px;\n  width: 100%;\n"]))),y=b.ZP.button(o||(o=(0,m.Z)(["\n  position: absolute;\n  top: 60%;\n  cursor: pointer;\n  left: 88%;\n  transform: translate(-50%, -50%);\n  padding: 10.6px 10px 10px 10px;\n  margin: 0;\n  background: #dddddd;\n  color: #ff9812;\n  text-transform: uppercase;\n  outline: none;\n  border: 1px solid black;\n  border-top-right-radius: 40px;\n  border-bottom-right-radius: 40px;\n  transition: all 600ms ease;\n  &:hover {\n    background: orange;\n    color: #dddddd;\n    font-weight: 700;\n  }\n"]))),w=t(184),k=function(n){var e=n.onSubmit;return(0,w.jsx)("div",{children:(0,w.jsxs)(Z,{onSubmit:e,children:[(0,w.jsx)(g,{type:"text",placeholder:"Search...",autoComplete:"false"}),(0,w.jsx)(y,{type:"submit",children:"Search"})]})})},j=b.ZP.div(i||(i=(0,m.Z)(["\n    max-width: 100%;\n"]))),C=t(630),P=t(6048),_=t.n(P),S=t(8820),N=t(9983),q=b.ZP.div(c||(c=(0,m.Z)(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),z=function(n){var e=n.totalPages,t=n.onPageChange;return(0,w.jsx)(q,{children:(0,w.jsx)(_(),{containerClassName:"pagination",pageClassName:"page-item",activeClassName:"active-page",onPageChange:t,pageCount:e,breakLabel:"...",previousLabel:(0,w.jsx)(N.Pd.Provider,{value:{color:"#B8C1CC",size:"36px"},children:(0,w.jsx)(S._u0,{})}),nextLabel:(0,w.jsx)(N.Pd.Provider,{value:{color:"#B8C1CC",size:"36px"},children:(0,w.jsx)(S.bBv,{})})})})},B=(0,h.lazy)((function(){return t.e(912).then(t.bind(t,912))})),L=function(){var n,e=(0,h.useState)([]),t=(0,s.Z)(e,2),r=t[0],a=t[1],o=(0,h.useState)(!1),i=(0,s.Z)(o,2),c=i[0],p=i[1],m=(0,h.useState)(0),b=(0,s.Z)(m,2),g=b[0],Z=b[1],y=(0,h.useState)(null),P=(0,s.Z)(y,2),_=P[0],S=P[1],N=(0,d.lr)(),q=(0,s.Z)(N,2),L=q[0],T=q[1],E=(0,f.TH)(),D=null!==(n=L.get("query"))&&void 0!==n?n:"";return(0,h.useEffect)((function(){if(""!==D.trim()&&0!==g){var n=function(){var n=(0,u.Z)(l().mark((function n(){var e,t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,(0,v.q)(D,g);case 4:e=n.sent,(t=e.data.results).length>0?(a(t),S(e.data.total_pages)):x.Notify.failure("Movies NOT found"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0),x.Notify.failure("Error, server not answer");case 13:return n.prev=13,p(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}}),[g,D]),(0,w.jsxs)(j,{children:[c&&(0,w.jsx)(C.Z,{}),"/movies"===E.pathname&&(0,w.jsx)(k,{onSubmit:function(n){var e;n.preventDefault();var t=n.target.children[0].value;if(""===t.trim())return T({});T({query:t}),Z(1),n.target.children[0].value="",null===(e=E.state)||void 0===e||e.to("/movies")}}),(0,w.jsx)(h.Suspense,{fallback:(0,w.jsx)(C.Z,{}),children:(0,w.jsx)(f.j3,{})}),D&&(0,w.jsx)(B,{searchResult:r}),_>1&&"/movies"===E.pathname&&(0,w.jsx)(z,{totalPages:_,onPageChange:function(n){return Z(n.selected+1)}})]})}},36:function(n,e,t){t.d(e,{TP:function(){return f},ap:function(){return s},bp:function(){return v},q:function(){return l},tx:function(){return m}});var r=t(5861),a=t(7757),o=t.n(a),i=t(5294),c="8c011024daf9ab6b31dbbb1d29e7525a",u="https://api.themoviedb.org/3";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(u,"/trending/movie/day?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(u,"/search/movie?query=").concat(e,"&page=").concat(t,"&api_key=").concat(c));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(u,"/movie/").concat(e,"?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=383.2c65c6af.chunk.js.map