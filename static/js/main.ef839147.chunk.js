(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(13),r=s.n(i),c=s(4),o=s.n(c),l=s(14),m=s(15),d=s(16),j=s(19),u=s(18),v=s(17),p=s.n(v),b=(s(43),s(44),s(45),s(0));var h=function(e){var t=e.year,s=e.title,a=e.summary,n=e.poster,i=e.genres;return Object(b.jsxs)("div",{className:"movie_item",children:[Object(b.jsx)("img",{src:n,alt:s,title:s}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h4",{className:"title",children:s}),Object(b.jsx)("span",{className:"year",children:t}),Object(b.jsx)("ul",{className:"list_genres",children:i.map((function(e,t){return Object(b.jsx)("li",{className:"genre",children:e},t)}))}),Object(b.jsxs)("p",{className:"summary",children:[a.slice(0,220),"..."]})]})]})},x=s.p+"static/media/Spinner-1s-200px.0aea8f9d.svg",O=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts.mx/api/v2/list_movies.json?sort=rating&limit=20");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(b.jsx)("div",{id:"wrap",children:t?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{className:"loader_text",children:Object(b.jsx)("img",{src:x,alt:"Loading"})})}):Object(b.jsx)("div",{className:"movies",children:s.map((function(e){return Object(b.jsx)(h,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component);r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.ef839147.chunk.js.map