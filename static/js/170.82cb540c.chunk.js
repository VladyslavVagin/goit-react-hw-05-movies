"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[170],{5170:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var t,a,c,o,i,s,p,u,l,d=r(5861),x=r(9439),f=r(168),h=r(7757),v=r.n(h),m=r(2791),b=r(5867),g=r(1087),Z=r(7689),w=r(36),j=b.ZP.img(t||(t=(0,f.Z)(["\n  max-width: 300px;\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,\n    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,\n    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;\n"]))),y=b.ZP.div(a||(a=(0,f.Z)(["\n  display: flex;\n  align-items: flex-start;\n  column-gap: 16px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid gray;\n  @media screen and (max-width: 680px) {\n    flex-direction: column;\n    max-width: 300px;\n    margin: 0 auto;\n  }\n"]))),k=b.ZP.ul(c||(c=(0,f.Z)(["\n  list-style-type: none;\n  display: flex;\n  column-gap: 20px;\n  padding: 0;\n  font-size: 20px;\n"]))),P=b.ZP.div(o||(o=(0,f.Z)(["\n  padding: 20px;\n"]))),_=b.ZP.h4(i||(i=(0,f.Z)(["\n  font-size: 1.5rem;\n"]))),C=b.ZP.h4(s||(s=(0,f.Z)(["\n  font-size: 2rem;\n"]))),S=b.ZP.span(p||(p=(0,f.Z)(["\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 6px;\n  font-weight: 700;\n"]))),U=r(7377),z=r(630),O=r(184),T=(0,b.ZP)(g.OL)(u||(u=(0,f.Z)(["\n  display: inline-flex;\n  padding: 8px 20px;\n  color: #000000;\n  text-decoration: none;\n  text-transform: uppercase;\n  border: 1px solid black;\n  border-radius: 20px;\n  transition: all 400ms ease;\n  &.active {\n    color: #e0921c;\n    transform: scale(1.2);\n    border: 1px solid #e0921c;\n  }\n"]))),q=(0,b.ZP)(g.rU)(l||(l=(0,f.Z)(["\n  text-decoration: none;\n  color: black;\n  font-size: 24px;\n  transition: all 400ms ease;\n  &:hover {\n    color: orange;\n    transform: scale(1.2);\n  }\n"]))),F=function(){var n,e,r=(0,m.useState)({}),t=(0,x.Z)(r,2),a=t[0],c=t[1],o=(0,m.useState)(!1),i=(0,x.Z)(o,2),s=i[0],p=i[1],u=(0,Z.UO)().movieId,l=(0,Z.TH)(),f=(0,m.useRef)(null!==(n=null===(e=l.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,m.useEffect)((function(){if(u){var n=function(){var n=(0,d.Z)(v().mark((function n(){var e,r;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,(0,w.TP)(u);case 4:e=n.sent,r=e.data,c({poster:r.poster_path,title:r.title,userScore:r.vote_average,overview:r.overview,genres:r.genres,year:r.release_date}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:return n.prev=12,p(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}}),[u]);var h=a.poster,b=a.title,g=a.userScore,F=a.overview,R=a.genres,A=a.year;return(0,O.jsxs)("div",{children:[s&&(0,O.jsx)(z.Z,{}),!s&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(P,{children:(0,O.jsx)(q,{to:f.current,children:"<<< Back"})}),(0,O.jsxs)(y,{children:[(0,O.jsx)(j,{src:h?w.sU+h:U,alt:"Poster for movie ".concat(b)}),(0,O.jsxs)("div",{children:[(0,O.jsxs)(C,{children:[b,"\xa0",A?"(".concat(A.slice(0,4),")"):""]}),(0,O.jsxs)("p",{children:["User score: ",(0,O.jsxs)(S,{style:g>=7?{color:"green",borderColor:"green"}:{color:"orange",borderColor:"orange"},children:[(10*g).toFixed(0),"%"]})]}),(0,O.jsx)("h3",{children:"Overview"}),(0,O.jsx)("p",{children:F||"Description will be added later"}),(0,O.jsx)("h3",{children:"Genres"}),(0,O.jsx)("p",{children:R&&R.map((function(n){return n.name})).join(" / ")})]})]}),(0,O.jsxs)("div",{children:[(0,O.jsx)(_,{children:"Additional information"}),(0,O.jsxs)(k,{children:[(0,O.jsx)("li",{children:(0,O.jsx)(T,{to:"cast",children:"Cast"})}),(0,O.jsx)("li",{children:(0,O.jsx)(T,{to:"reviews",children:"Reviews"})})]}),(0,O.jsx)(m.Suspense,{fallback:(0,O.jsx)(z.Z,{}),children:(0,O.jsx)(Z.j3,{})})]})]})]})}},36:function(n,e,r){r.d(e,{TP:function(){return f},ap:function(){return u},bp:function(){return v},q:function(){return d},sU:function(){return p},tx:function(){return b}});var t=r(5861),a=r(7757),c=r.n(a),o=r(5294),i="8c011024daf9ab6b31dbbb1d29e7525a",s="https://api.themoviedb.org/3",p="https://image.tmdb.org/t/p/w500/";function u(){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(s,"/trending/movie/day?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,e){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(c().mark((function n(e,r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(s,"/search/movie?query=").concat(e,"&page=").concat(r,"&api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(s,"/movie/").concat(e,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},7377:function(n,e,r){n.exports=r.p+"static/media/noimage.4565712a9558a64f1cc3.jpg"}}]);
//# sourceMappingURL=170.82cb540c.chunk.js.map