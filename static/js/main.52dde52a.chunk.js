(this["webpackJsonpapp-redux"]=this["webpackJsonpapp-redux"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},34:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),s=a.n(r),i=(a(28),a(29),a(8)),d=a(3),o=a(9),j=a(1),l=function(e){var t=e.titulo,a=e.fecha,n=e.hora,c=e.autor,r=e.cuerpo;return Object(j.jsxs)("div",{className:"entrada",children:[Object(j.jsx)("div",{className:"titulo--entrada",children:t}),Object(j.jsx)("span",{className:"line"}),Object(j.jsxs)("p",{className:"fecha--entrada",children:[a," ",n]}),Object(j.jsxs)("div",{className:"cuerpo--entrada",children:[r.slice(0,200),"..."]}),Object(j.jsx)("p",{className:"autor--entrada",children:c})]})},u=a(10),b=(a(34),Object(u.b)((function(e){return{entradas:e.entradas}}),(function(e){return{}}))((function(e){var t=e.entradas;return Object(j.jsxs)("div",{className:"entradas",children:[Object(j.jsx)(i.b,{to:"/nueva-entrada",className:"nueva-entrada",children:"Nueva"}),Object(j.jsx)("div",{className:"titulo",children:"Entradas"}),t.length>0?t.map((function(e){return Object(j.jsx)(i.b,{to:"/detalle-entrada/".concat(e.id),children:Object(j.jsx)(l,Object(o.a)({},e))},e.id)})):Object(j.jsx)("div",{children:"Loading"})]})}))),O=function(){return Object(j.jsxs)("div",{className:"not-found",children:[Object(j.jsx)("p",{className:"number",children:"404"}),Object(j.jsx)("p",{className:"text",children:"Page not found"}),Object(j.jsx)(i.b,{to:"/",children:"Ir al inicio"})]})},h=a(17),p=(a(37),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAUklEQVQ4je3RIRKAIAAF0YcX5RSiTaPKKTylEYsGI1jZvn925tP5kNO51jrDRy6WpoFWGcIf+S24WmUIkNM5KTYYcwy1BcYj7oL5T4mnpPrGDjeBfheGsMENrQAAAABJRU5ErkJggg=="),x=Object(u.b)((function(e){return{}}),(function(e){return{agregarEntrada:function(t){e({type:"AGREGAR_ENTRADA",payload:t})}}}))((function(e){var t=e.agregarEntrada,a=Object(n.useState)(""),c=Object(h.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(""),l=Object(h.a)(o,2),u=l[0],b=l[1],O=Object(n.useState)(""),x=Object(h.a)(O,2),m=x[0],f=x[1],A=Object(d.f)();return Object(j.jsx)("div",{className:"form-nueva-entrada",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=new Date,n={titulo:r,autor:u,cuerpo:m,fecha:a.toLocaleDateString(),hora:a.toLocaleTimeString()};console.log(n),t(n),A.push("/")},children:[Object(j.jsx)(i.b,{className:"return",to:"/",children:Object(j.jsx)("img",{src:p,alt:"flecha izquierda"})}),Object(j.jsx)("div",{className:"titulo",children:"Nueva Entrada"}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"text",name:"titulo",value:r,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("span",{children:"Titulo"})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"text",name:"autor",value:u,onChange:function(e){return b(e.target.value)}}),Object(j.jsx)("span",{children:"Autor"})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("textarea",{col:"3",row:"4",value:m,onChange:function(e){return f(e.target.value)}}),Object(j.jsx)("span",{children:"Cuerpo"})]}),Object(j.jsx)("button",{className:"btn-guardar",children:"Guardar"})]})})})),m=(a(38),a.p+"static/media/no-entrada.4ae9af7b.gif"),f=Object(u.b)((function(e){return{entradas:e.entradas}}),(function(e){return{deleteEntrada:function(t){e({type:"DELETE_ENTRADA",payload:t})}}}))((function(e){var t=e.entradas,a=e.deleteEntrada,n=Object(d.g)().id,c=Object(d.f)(),r=t.filter((function(e){return e.id===parseInt(n)}))[0];return Object(j.jsx)("div",{className:"detalles-entrada",children:Object(j.jsxs)("div",{className:"entrada",children:[Object(j.jsx)(i.b,{to:"/",className:"regresar",children:Object(j.jsx)("img",{src:p,alt:"return"})}),r?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"head",children:[Object(j.jsxs)("div",{className:"fecha",children:[r.fecha," - ",r.hora]}),Object(j.jsx)("div",{className:"autor",children:r.autor})]}),Object(j.jsx)("div",{className:"titulo",children:r.titulo}),Object(j.jsx)("div",{className:"cuerpo",children:r.cuerpo}),Object(j.jsx)("button",{className:"btn-delete",onClick:function(){a(r.id),c.push("/")},children:"Eliminar"})]}):Object(j.jsxs)("div",{className:"sin-entrada",children:[Object(j.jsx)("img",{src:m,alt:"icono no entrada"}),Object(j.jsx)("p",{children:"Lo sentimos pero no hay datos para esta entrada"})]})]})})})),A=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{exact:!0,path:"/",component:b}),Object(j.jsx)(d.a,{exact:!0,path:"/nueva-entrada",component:x}),Object(j.jsx)(d.a,{exact:!0,path:"/detalle-entrada/:id",component:f}),Object(j.jsx)(d.a,{component:O})]})})};var v=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(A,{})})},N=a(23),g=a(22),E={entradas:[{id:0,titulo:"Ejemplo",fecha:"12-02-2021",hora:"13:50",autor:"Daniel Radlif",cuerpo:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus saepe voluptatem asperiores sequi excepturi nisi numquam error consectetur, dolorum aperiam, quo eaque ratione. Deserunt facere quod eos adipisci impedit."}]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AGREGAR_ENTRADA":return Object(o.a)(Object(o.a)({},e),{},{entradas:[].concat(Object(g.a)(e.entradas),[Object(o.a)(Object(o.a)({},t.payload),{},{id:e.entradas.length+1})])});case"DELETE_ENTRADA":return Object(o.a)(Object(o.a)({},e),{},{entradas:e.entradas.filter((function(e){return e.id!==t.payload}))});default:return e}},R=Object(N.a)(D,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(u.a,{store:R,children:Object(j.jsx)(v,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.52dde52a.chunk.js.map