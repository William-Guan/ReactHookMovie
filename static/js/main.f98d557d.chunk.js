(this.webpackJsonphooked=this.webpackJsonphooked||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),o=a.n(r),l=a(7),i=a(10),s=function(e){return c.a.createElement("header",{className:"App-header"},c.a.createElement("h2",null,e.text))},m=function(e){var t=e.movie,a="N/A"===t.Poster?"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg":t.Poster;return c.a.createElement("div",{className:"movie"},c.a.createElement("h2",null,t.Title),c.a.createElement("div",null,c.a.createElement("img",{src:a,width:"200",alt:"The movie tilte: ".concat(t.Title)})),c.a.createElement("p",null,t.Year))},u=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],o=a[1];return c.a.createElement("form",{className:"search"},c.a.createElement("input",{value:r,onChange:function(e){o(e.target.value)},type:"text"}),c.a.createElement("input",{onClick:function(t){t.preventDefault(),e.search(r),o("")},type:"submit",value:"SEARCH"}))},E=a(5),p=function(e){var t=Object(E.f)().id,a=Object(n.useState)({}),r=Object(l.a)(a,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){fetch("http://www.omdbapi.com/?apikey=b5236c5c&i=".concat(t)).then((function(e){return e.json()})).then((function(e){i(e)}))})),c.a.createElement("div",{className:"detail"},c.a.createElement("h2",null,o.Title),c.a.createElement("div",null,c.a.createElement("img",{width:"400",src:o.Poster,alt:"poster"})),c.a.createElement("p",null,o.Plot))},d=a(9),h=(a(29),{loading:!0,movies:[],errorMessage:null}),f=function(e,t){switch(console.log(t),t.type){case"SEARCH_MOVIE_REQUEST":return Object(i.a)({},e,{loading:!0,errorMessage:null});case"SEARCH_MOVIE_SUCCESS":return Object(i.a)({},e,{loading:!1,movies:t.payload});case"SEARCH_MOVIE_FAILURE":return Object(i.a)({},e,{loading:!1,errorMessage:t.error});default:return e}},v=function(){var e=Object(n.useReducer)(f,h),t=Object(l.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){fetch("https://www.omdbapi.com/?s=man&apikey=b5236c5c").then((function(e){return e.json()})).then((function(e){r({type:"SEARCH_MOVIE_SUCCESS",payload:e.Search})}))}),[]);var o=a.movies,i=a.errorMessage,v=a.loading;return c.a.createElement(d.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(E.c,null,c.a.createElement(E.a,{exact:!0,path:"/"},c.a.createElement(s,{text:"Hooked"}),c.a.createElement(u,{search:function(e){r({type:"SEARCH_MOVIE_REQUEST"}),fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=b5236c5c")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?r({type:"SEARCH_MOVIE_SUCCESS",payload:e.Search}):r({type:"SEARCH_MOVIE_FAILURE",error:e.Error})}))}}),c.a.createElement("p",{className:"App-intro"},"Sharing a few of our favourite movies"),c.a.createElement("div",{className:"movies"},v&&!i?c.a.createElement("span",null,"loading..."):i?c.a.createElement("div",{className:"errorMessage"},i):o.map((function(e,t){return c.a.createElement(d.b,{to:"/detail/".concat(e.imdbID)},c.a.createElement(m,{key:"".concat(t,"-").concat(e.Title),movie:e}))})))),c.a.createElement(E.a,{path:"/detail/:id"},c.a.createElement(s,{text:"Hooked"}),c.a.createElement(p,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.f98d557d.chunk.js.map