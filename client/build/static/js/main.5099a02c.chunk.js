(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(12),i=n.n(c),o=(n(35),n(36),n(14)),s=n(2),j=n(1);function u(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Bienvenidos"}),Object(j.jsx)(o.b,{to:"/home",children:Object(j.jsx)("button",{children:"comencemos"})}),Object(j.jsx)("p",{children:"En esta web encontraran una libreria de juegos en la cual podran agregar nuevos, buscar, ordenarlos, filtrarlos por generos, creados o de internet y borrar los que sean creados por uno "})]})}var l=n(8),d=n(7),b=n(18),O=n(9),h=n.n(O),p=n(19),v=n.n(p),x="GET_GAME",g="FILTER_CREATED",f="ORDER_NAME",m="ORDER_RATING",y="GET_SEARCH";function E(e){var t=e.image,n=e.name,r=e.genres,a=e.rating;return Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:n}),Object(j.jsxs)("p",{children:["Generos: ",r]}),Object(j.jsxs)("p",{children:["Rating: ",a]}),Object(j.jsx)("img",{src:t,alt:"Not Found",width:"250px",height:"250"})]})}function C(){var e=Object(d.b)();function t(t){var n;e((n=t.target.value,{type:g,payload:n}))}return Object(j.jsx)("div",{children:Object(j.jsxs)("select",{name:"",id:"",onChange:function(e){t(e)},children:[Object(j.jsx)("option",{value:"All",children:"Creados/Internet"}),Object(j.jsx)("option",{value:"created",children:"Creados"}),Object(j.jsx)("option",{value:"api",children:"Internet"})]})})}function D(){return Object(j.jsx)("div",{children:Object(j.jsx)("select",{children:Object(j.jsx)("option",{children:"Filtrar por genero"})})})}function A(e){var t=e.setCurrentPage,n=e.setOrden,r=Object(d.b)();function a(e){var a;e.preventDefault(),r((a=e.target.value,{type:m,payload:a})),t(1),n("Ordenado ".concat(e.target.value))}return Object(j.jsx)("div",{children:Object(j.jsxs)("select",{onChange:function(e){a(e)},defaultValue:"DEFAULT",children:[Object(j.jsx)("option",{value:"DEFAULT",children:"Oredenar por rating"}),Object(j.jsx)("option",{value:"mejor",children:"Mejor Rating"}),Object(j.jsx)("option",{value:"peor",children:"Peor Rating"})]})})}function G(e){var t=e.setCurrentPage,n=e.setOrden,r=Object(d.b)();function a(e){var a;e.preventDefault(),r((a=e.target.value,{type:f,payload:a})),n("Ordenado ".concat(e.target.value)),t(1)}return Object(j.jsx)("div",{children:Object(j.jsxs)("select",{onChange:function(e){a(e)},defaultValue:"DEFAULT",children:[Object(j.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Ordenar Alfabeticamente"}),Object(j.jsx)("option",{value:"asc",children:"A/Z"}),Object(j.jsx)("option",{value:"desc",children:"Z/A"})]})})}function T(e){for(var t=e.gamePerPage,n=e.allGame,r=e.paginado,a=[],c=0;c<=Math.ceil(n/t);c++)a.push(c+1);return a.pop(),Object(j.jsx)("nav",{children:Object(j.jsx)("ul",{children:a&&a.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return r(e)},children:e})},e)}))},"alt")})}function F(){var e=Object(d.b)(),t=Object(r.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1];function i(t){t.preventDefault(),e(function(e){return function(){var t=Object(b.a)(h.a.mark((function t(n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("http://localhost:3001/videogames?name="+e);case 3:return r=t.sent,t.abrupt("return",n({type:y,payload:r.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(a)),c("")}return Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(e){i(e)},children:[Object(j.jsx)("input",{type:"text",placeholder:"Buscar",onChange:function(e){!function(e){e.preventDefault(),c(e.target.value)}(e)}},"unique")," ",Object(j.jsx)("button",{type:"Submit",children:"Enviar"})]})})})}function P(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.videogame})),n=Object(r.useState)(""),a=Object(l.a)(n,2),c=(a[0],a[1]),i=Object(r.useState)(1),o=Object(l.a)(i,2),s=o[0],u=o[1],O=Object(r.useState)(15),p=Object(l.a)(O,2),g=p[0],f=(p[1],s*g),m=f-g,y=t.slice(m,f);return Object(r.useEffect)((function(){e(function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://localhost:3001/videogames");case 2:return n=e.sent,e.abrupt("return",t({type:x,payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(F,{})}),Object(j.jsx)("div",{children:Object(j.jsx)(D,{})}),Object(j.jsx)("div",{children:Object(j.jsx)(C,{})}),Object(j.jsx)("div",{children:Object(j.jsx)(G,{setCurrentPage:u,setOrden:c})}),Object(j.jsx)("div",{children:Object(j.jsx)(A,{setCurrentPage:u,setOrden:c})}),Object(j.jsx)("div",{children:Object(j.jsx)(T,{gamePerPage:g,allGame:t.length,paginado:function(e){u(e)}})}),Object(j.jsx)("div",{children:null===y||void 0===y?void 0:y.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(E,{name:e.name,image:e.image,genres:e.genres,rating:e.rating})},e.id)}))})]})}var R=function(){return Object(j.jsx)(o.a,{children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/",element:Object(j.jsx)(u,{})}),Object(j.jsx)(s.a,{path:"/home",element:Object(j.jsx)(P,{})})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},S=n(13),I=n(29),L=n(30),M=n(6),k={videogame:[],auxGame:[]};var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return console.log(t.payload),Object(M.a)(Object(M.a)({},e),{},{videogame:t.payload,auxGame:t.payload});case g:var n=e.auxGame,r="created"===t.payload?n.filter((function(e){return e.createdInDb})):n.filter((function(e){return!e.createdInDb}));return Object(M.a)(Object(M.a)({},e),{},{videogame:"All"===t.payload?n:r});case f:var a=e.auxGame,c="asc"===t.payload?a.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})):a.sort((function(e,t){return e.name>t.name?-1:e.name<t.name?1:0}));return console.log(c),Object(M.a)(Object(M.a)({},e),{},{videogame:"n"===t.payload?a:c});case m:var i="mejor"===t.payload?e.auxGame.sort((function(e,t){return e.rating>t.rating?1:e.rating<t.rating?-1:0})):e.auxGame.sort((function(e,t){return t.rating>e.rating?1:t.rating<e.rating?-1:0}));return Object(M.a)(Object(M.a)({},e),{},{videogame:i});case y:return Object(M.a)(Object(M.a)({},e),{},{videogame:t.payload});default:return e}},B=Object(S.createStore)(_,Object(I.composeWithDevTools)(Object(S.applyMiddleware)(L.a)));i.a.render(Object(j.jsx)(d.a,{store:B,children:Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(R,{})})}),document.getElementById("root")),w()}},[[60,1,2]]]);
//# sourceMappingURL=main.5099a02c.chunk.js.map