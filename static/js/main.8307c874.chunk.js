(this.webpackJsonptodoliststate=this.webpackJsonptodoliststate||[]).push([[0],{11:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(6),s=n.n(a),d=(n(11),n(19),n(13)),l=n(10),r=n(4),j=n.p+"static/media/todo.a70a343e.jpeg",o=(n(9),n(20),n(1)),u=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),s=Object(r.a)(a,2),u=s[0],b=s[1],f=Object(c.useState)(!1),m=Object(r.a)(f,2),O=m[0],h=m[1],x=Object(c.useState)(null),v=Object(r.a)(x,2),g=v[0],p=v[1],N=function(){if(n&&O)b(u.map((function(e){if(e.id===g)return Object(l.a)(Object(l.a)({},e),{},{name:n})}))),i(""),h(!1);else if(n){var e={id:(new Date).getTime().toString(),name:n};b([].concat(Object(d.a)(u),[e])),i("")}};return Object(o.jsx)("div",{className:"main-div",children:Object(o.jsxs)("div",{className:"child-div",children:[Object(o.jsxs)("figure",{children:[Object(o.jsx)("img",{src:j,alt:"todolog"}),Object(o.jsx)("figcaption",{children:"Add your List here \ud83d\udc47"})]}),Object(o.jsxs)("div",{className:"addItems",children:[Object(o.jsx)("input",{type:"text",placeholder:"\u270dWrite Here...",value:n,onChange:function(e){i(e.target.value)}}),O?Object(o.jsx)("i",{className:"fa fa-edit",title:"Edit Item",onClick:N}):Object(o.jsx)("i",{className:"fa fa-plus add-btn",title:"Add item",onClick:N})]}),Object(o.jsx)("div",{className:"showItems",children:u.map((function(e){return Object(o.jsxs)("div",{className:"eachItem",children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsxs)("div",{className:"todo-btn",children:[Object(o.jsx)("i",{className:"fa fa-edit",title:"Edit Item",onClick:function(){return function(e){var t=u.find((function(t){return t.id===e}));i(t.name),h(!0),p(e)}(e.id)}}),Object(o.jsx)("i",{className:"fa fa-trash-o fa-lg",title:"Delete Item",onClick:function(){return t=e.id,void b((function(e){return e.filter((function(e){return t!=e.id}))}));var t}})]})]},e.id)}))}),Object(o.jsx)("div",{className:"showItems ",children:Object(o.jsx)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){b([])},children:Object(o.jsx)("span",{children:"CheckList"})})})]})})};var b=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(u,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),f()}},[[31,1,2]]]);
//# sourceMappingURL=main.8307c874.chunk.js.map