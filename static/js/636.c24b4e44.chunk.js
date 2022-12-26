"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[636],{636:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,o,i,a,c,u,l,s=t(885),f=t(168),d=t(402),m=t(731),p=d.Z.section(r||(r=(0,f.Z)(["\n  margin-top: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 30px;\n  position: relative;\n  border: 1px grey solid;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-bottom: 30px;\n  text-align: center;\n"]))),h=d.Z.form(o||(o=(0,f.Z)(["\n  width: 400px;\n  display: flex;\n  height: 30px;\n"]))),x=d.Z.input(i||(i=(0,f.Z)(["\n  width: 100%;\n  margin-right: 10px;\n"]))),g=d.Z.button(a||(a=(0,f.Z)(["\n  font-size: 20px;\n  cursor: pointer;\n  border: none;\n  background-color: #afaff0;\n  border-radius: 4px;\n  &:hover,\n  &:focus {\n    color: orange;\n  }\n"]))),v=d.Z.ul(c||(c=(0,f.Z)(["\n  padding: 0;\n  list-style: none;\n"]))),b=d.Z.li(u||(u=(0,f.Z)(["\n  margin-bottom: 10px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),Z=(0,d.Z)(m.rU)(l||(l=(0,f.Z)(["\n  font-weight: 600;\n  font-size: 24px;\n  color: black;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    color: orange;\n  }\n"]))),j=t(791),y=t(184),k=function(n){var e=n.onSubmit,t=(0,j.useState)(""),r=(0,s.Z)(t,2),o=r[0],i=r[1];return(0,y.jsxs)(h,{onSubmit:function(n){n.preventDefault(),""!==o&&(e(o.toLowerCase().trim()),i(""))},children:[(0,y.jsx)(x,{type:"text",autoComplete:"off",name:"movieName",value:o,onChange:function(n){i(n.currentTarget.value)},autoFocus:!0,placeholder:"Search movie by name"}),(0,y.jsx)(g,{children:"Search"})]})},w=t(689),S=t(982),q=function(n){var e=n.title,t=n.id,r=n.query;return(0,y.jsx)(b,{children:(0,y.jsx)(Z,{to:"".concat(t),state:{from:"/movies?query=".concat(r)},children:e})})},C=function(n){var e=n.movieQuery,t=(0,j.useState)([]),r=(0,s.Z)(t,2),o=r[0],i=r[1];return(0,j.useEffect)((function(){e?(i([]),fetch("https://api.themoviedb.org/3/search/movie?api_key=2eb857a72ef08fb512c529b6c9a18227&query=".concat(e)).then((function(n){return n.json()})).then((function(n){n.results.map((function(n){var e=n.title,t=n.id;return i((function(n){return[].concat((0,S.Z)(n),[{title:e,id:t}])}))}))}))):i([])}),[e]),(0,y.jsx)(y.Fragment,{children:0!==o.length&&(0,y.jsx)(v,{children:o.map((function(n){var t=n.id,r=n.title;return(0,y.jsx)(q,{title:r,id:t,query:e},t)}))})})},_=function(){var n=(0,w.UO)().movieId,e=(0,m.lr)(),t=(0,s.Z)(e,2),r=t[0],o=t[1],i=r.get("query");return(0,y.jsxs)(p,{children:[!n&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{onSubmit:function(n){o({query:n})}}),(0,y.jsx)(C,{movieQuery:i})]}),(0,y.jsx)(w.j3,{})]})}}}]);
//# sourceMappingURL=636.c24b4e44.chunk.js.map