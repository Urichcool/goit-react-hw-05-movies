"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[19],{19:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var i,r,o,a,c,l=e(982),u=e(885),d=e(168),s=e(402),f=e(731),p=s.Z.section(i||(i=(0,d.Z)(["\n  padding-top: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px grey solid;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-bottom: 30px;\n  margin-top: 5px;\n"]))),m=s.Z.ul(r||(r=(0,d.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin-top: 10px;\n"]))),h=s.Z.li(o||(o=(0,d.Z)(["\n  margin-bottom: 10px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),g=s.Z.h1(a||(a=(0,d.Z)(["\n  margin: 0;\n"]))),x=(0,s.Z)(f.OL)(c||(c=(0,d.Z)(["\n  font-weight: 600;\n  font-size: 24px;\n  color: black;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    color: orange;\n  }\n"]))),Z=e(791),b=e(184),k=function(n){var t=n.title,e=n.id;return(0,b.jsx)(h,{children:(0,b.jsx)(x,{to:"movies/".concat(e),state:{from:"/"},children:t})})},v=function(){var n=(0,Z.useState)([]),t=(0,u.Z)(n,2),e=t[0],i=t[1];return(0,Z.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=2eb857a72ef08fb512c529b6c9a18227").then((function(n){return n.json()})).then((function(n){n.results.map((function(n){var t=n.title,e=n.id;return i((function(n){return[].concat((0,l.Z)(n),[{title:t,id:e}])}))}))}))}),[]),(0,b.jsxs)(p,{children:[(0,b.jsx)(g,{children:"Trending today"}),(0,b.jsx)(m,{children:e.map((function(n){var t=n.id,e=n.title;return(0,b.jsx)(k,{title:e,id:t},t)}))})]})}}}]);
//# sourceMappingURL=19.ba999696.chunk.js.map