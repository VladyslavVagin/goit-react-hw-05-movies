"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[170],{5170:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var t,a,o,c,i,s,p,u,d,x=r(5861),l=r(9439),f=r(168),h=r(7757),v=r.n(h),b=r(2791),m=r(5867),g=r(1087),w=r(7689),Z=r(36),j=m.ZP.img(t||(t=(0,f.Z)(["\n  max-width: 300px;\n  border-radius: 20px;\n  -webkit-box-shadow: 1px 8px 21px 1px rgba(255, 153, 0, 1);\n  -moz-box-shadow: 1px 8px 21px 1px rgba(255, 153, 0, 1);\n  box-shadow: 1px 8px 21px 1px rgba(255, 153, 0, 1);\n"]))),y=m.ZP.div(a||(a=(0,f.Z)(["\n  display: flex;\n  align-items: flex-start;\n  column-gap: 16px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid gray;\n  @media screen and (max-width: 680px) {\n    flex-direction: column;\n    max-width: 300px;\n    margin: 0 auto;\n  }\n"]))),k=m.ZP.ul(o||(o=(0,f.Z)(["\n  list-style-type: none;\n  display: flex;\n  column-gap: 20px;\n  padding: 0;\n  font-size: 20px;\n"]))),P=m.ZP.div(c||(c=(0,f.Z)(["\n  padding: 20px;\n"]))),_=m.ZP.h4(i||(i=(0,f.Z)(["\n  font-size: 1.5rem;\n"]))),z=m.ZP.h4(s||(s=(0,f.Z)(["\n  font-size: 2rem;\n"]))),C=m.ZP.span(p||(p=(0,f.Z)(["\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 6px;\n  font-weight: 700;\n  background-color: #fdeeee;\n  -webkit-box-shadow: 1px 8px 21px 1px rgba(255, 153, 0, 1);\n  -moz-box-shadow: 1px 8px 21px 1px rgba(255, 153, 0, 1);\n  box-shadow: 1px 8px 21px 1px rgba(255, 153, 0, 1);\n"]))),S=r(7377),U=r(630),O=r(184),T=(0,m.ZP)(g.OL)(u||(u=(0,f.Z)(["\n  display: inline-flex;\n  padding: 8px 20px;\n  color: #000000;\n  text-decoration: none;\n  text-transform: uppercase;\n  border: 1px solid black;\n  border-radius: 20px;\n  transition: all 400ms ease;\n  &.active {\n    color: #e0921c;\n    transform: scale(1.2);\n    border: 1px solid #e0921c;\n  }\n"]))),q=(0,m.ZP)(g.rU)(d||(d=(0,f.Z)(["\n  text-decoration: none;\n  color: black;\n  font-size: 24px;\n  transition: all 400ms ease;\n  &:hover {\n    color: orange;\n    transform: scale(1.2);\n  }\n"]))),F=function(){var n,e,r=(0,b.useState)({}),t=(0,l.Z)(r,2),a=t[0],o=t[1],c=(0,b.useState)(!1),i=(0,l.Z)(c,2),s=i[0],p=i[1],u=(0,w.UO)().movieId,d=(0,w.TH)(),f=(0,b.useRef)(null!==(n=null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,b.useEffect)((function(){if(u){var n=function(){var n=(0,x.Z)(v().mark((function n(){var e,r;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,(0,Z.TP)(u);case 4:e=n.sent,r=e.data,o({poster:r.poster_path,title:r.title,userScore:r.vote_average,overview:r.overview,genres:r.genres,year:r.release_date}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:return n.prev=12,p(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}}),[u]);var h=a.poster,m=a.title,g=a.userScore,F=a.overview,R=a.genres,A=a.year;return(0,O.jsxs)("div",{children:[s&&(0,O.jsx)(U.Z,{}),!s&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(P,{children:(0,O.jsx)(q,{to:f.current,children:"<<< Back"})}),(0,O.jsxs)(y,{children:[(0,O.jsx)(j,{src:h?Z.sU+h:S,alt:"Poster for movie ".concat(m)}),(0,O.jsxs)("div",{children:[(0,O.jsxs)(z,{children:[m,"\xa0",A?"(".concat(A.slice(0,4),")"):""]}),(0,O.jsxs)("p",{children:[(0,O.jsx)("strong",{children:"User score: "}),(0,O.jsxs)(C,{style:g>=7?{color:"green",borderColor:"green"}:g<4?{color:"red",borderColor:"red"}:{color:"orange",borderColor:"orange"},children:[(10*g).toFixed(0),"%"]})]}),(0,O.jsx)("h3",{children:"Overview"}),(0,O.jsx)("p",{children:F||"Description will be added later"}),(0,O.jsx)("h3",{children:"Genres"}),(0,O.jsx)("p",{children:(0,O.jsx)("i",{children:R&&R.map((function(n){return n.name})).join(" / ")})})]})]}),(0,O.jsxs)("div",{children:[(0,O.jsx)(_,{children:"Additional information"}),(0,O.jsxs)(k,{children:[(0,O.jsx)("li",{children:(0,O.jsx)(T,{to:"cast",children:"Cast"})}),(0,O.jsx)("li",{children:(0,O.jsx)(T,{to:"reviews",children:"Reviews"})})]}),(0,O.jsx)(b.Suspense,{fallback:(0,O.jsx)(U.Z,{}),children:(0,O.jsx)(w.j3,{})})]})]})]})}},36:function(n,e,r){r.d(e,{TP:function(){return f},ap:function(){return u},bp:function(){return v},q:function(){return x},sU:function(){return p},tx:function(){return m}});var t=r(5861),a=r(7757),o=r.n(a),c=r(5294),i="8c011024daf9ab6b31dbbb1d29e7525a",s="https://api.themoviedb.org/3",p="https://image.tmdb.org/t/p/w500/";function u(){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("".concat(s,"/trending/movie/day?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,e){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(o().mark((function n(e,r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("".concat(s,"/search/movie?query=").concat(e,"&page=").concat(r,"&api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("".concat(s,"/movie/").concat(e,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return b.apply(this,arguments)}function b(){return(b=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},7377:function(n,e,r){n.exports=r.p+"static/media/noimage.4565712a9558a64f1cc3.jpg"}}]);
//# sourceMappingURL=170.b4e1e615.chunk.js.map