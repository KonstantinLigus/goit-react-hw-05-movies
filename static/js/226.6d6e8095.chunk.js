"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[226],{226:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(885),a=r(2791),c=r(501),u=r(6871),i=r(1414),s=r(184),o=function(e){var t=e.movie,r=t.poster_path,n=t.original_title,a=t.release_date,c=t.vote_average,u=t.overview,i=t.genres;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w300"+r,alt:""}),(0,s.jsxs)("h3",{children:[n," (",a.slice(0,4),")"]}),(0,s.jsxs)("p",{children:["Vote average: ",c.toFixed(2)]}),(0,s.jsx)("h3",{children:"Overview"}),(0,s.jsx)("p",{children:u}),(0,s.jsx)("h3",{children:"Genres"}),(0,s.jsx)("p",{children:i.map((function(e){return e.name})).join(", ")})]})},f=function(){var e,t,r=(0,u.UO)().movieId,f=(0,a.useState)(null),p=(0,n.Z)(f,2),v=p[0],l=p[1],d=null!==(e=null===(t=(0,u.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,a.useEffect)((function(){(0,i.Mc)(r).then((function(e){return l(e.data)}))}),[r]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.rU,{to:d,children:"Back to movies list"}),v&&(0,s.jsx)(o,{movie:v}),(0,s.jsx)(c.rU,{to:"cast",state:{from:d},children:"Cast"}),(0,s.jsx)(c.rU,{to:"reviews",state:{from:d},children:"Previews"}),(0,s.jsx)(a.Suspense,{fallback:(0,s.jsx)("p",{children:"Loading..."}),children:(0,s.jsx)(u.j3,{})})]})}},1414:function(e,t,r){r.d(t,{FE:function(){return f},Fz:function(){return l},GH:function(){return v},Mc:function(){return p},cq:function(){return o}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),i=r.n(u),s="d09586658ff77be7f5ce53c1437aa9f2";i().defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/trending/all/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=226.6d6e8095.chunk.js.map