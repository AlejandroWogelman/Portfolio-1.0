(this.webpackJsonpperforaciones=this.webpackJsonpperforaciones||[]).push([[0],{46:function(e,a,c){},76:function(e,a,c){"use strict";c.r(a);var t=c(0),s=c(38),n=c.n(s),r=c(77),i=(c(46),c(16)),o=c(7),j=c(10),l=c(6),b=c.n(l),d=c(11),m=c(8),h=c(23),O=c.n(h),u=c(78),x=c(79),p=c(80),f=c(41),N=c(1),g=function(){var e=Object(t.useState)(!1),a=Object(m.a)(e,2),c=a[0],s=a[1],n=Object(t.useRef)(),i=Object(f.a)(),o=i.handleSubmit,l=i.register,h=i.formState.errors,g=function(){var e=Object(d.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("https://formsubmit.co/ajax/alehellamn@gmail.com",a);case 2:n.current.reset(),s(!0);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(N.jsx)(r.a,{children:Object(N.jsxs)(u.a,{className:"caja-formulario justify-content-center",children:[Object(N.jsxs)("div",{className:"formulario col-md-7 col-sm-12",children:[Object(N.jsxs)(x.a,{onSubmit:o(g),ref:n,children:[Object(N.jsxs)(x.a.Group,{children:[Object(N.jsx)(x.a.Label,{className:"m-0",htmlFor:"nombre",children:"Nombre completo"}),Object(N.jsx)(x.a.Control,Object(j.a)(Object(j.a)({},l("nombre",{required:!0,minLength:3,maxLength:25})),{},{type:"text",id:"nombre"})),h.nombre&&Object(N.jsx)("span",{className:"alert-form",children:"caracteres min 3 / max 20"})]}),Object(N.jsxs)(x.a.Group,{children:[Object(N.jsx)(x.a.Label,{className:"m-0",htmlFor:"asunto",children:"Asunto"}),Object(N.jsx)(x.a.Control,Object(j.a)(Object(j.a)({},l("asunto")),{},{type:"text",id:"asunto"}))]}),Object(N.jsxs)(x.a.Group,{children:[Object(N.jsx)(x.a.Label,{className:"m-0",htmlFor:"email",children:" Email"}),Object(N.jsx)(x.a.Control,Object(j.a)(Object(j.a)({},l("email",{required:!0})),{},{type:"email",id:"email"})),h.email&&Object(N.jsx)("span",{className:"alert-form",children:"email requerido"})]}),Object(N.jsxs)(x.a.Group,{children:[Object(N.jsx)(x.a.Label,{className:"m-0",htmlFor:"detalles",children:"Detalles"}),Object(N.jsx)(x.a.Control,Object(j.a)(Object(j.a)({},l("detalles",{required:!0})),{},{as:"textarea",rows:3,id:"detalles"})),h.detalles&&Object(N.jsx)("span",{className:"alert-form",children:"Detalles :)"})]}),Object(N.jsx)(p.a,{type:"submit",children:"Enviar"})]}),c&&Object(N.jsx)("span",{className:"msg-enviado",children:"Mensaje enviado"})]}),Object(N.jsxs)("div",{className:"col-contactos col-md-2",children:[Object(N.jsx)("div",{className:"caja-links",children:Object(N.jsx)("a",{href:"https://github.com/AlejandroWogelman",target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)("span",{children:Object(N.jsx)("i",{className:"fab fa-github"})})})}),Object(N.jsx)("div",{className:"caja-links",children:Object(N.jsx)("a",{href:"https://www.facebook.com/AlejandroWogel/",target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)("span",{children:Object(N.jsx)("i",{className:"fab fa-facebook"})})})}),Object(N.jsx)("div",{className:"caja-links",children:Object(N.jsx)("a",{href:"https://www.linkedin.com/in/alejandro-wogelman-6a5a101b8/",target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)("span",{children:Object(N.jsx)("i",{className:"fab fa-linkedin"})})})})]})]})})},v=c(15),y="HOBBIES",k="GENERAL",w="ESTUDIOS",C=[{general:{nombre:"Alejandro",ubicacion:"Buenos Aires",estudios:"Cursos/Autodidacta",orientacion_IT:"Programacion Web"}},{estudios:{punchIt:["Javascript 0-100","React 0-100"],direccion:"https://punchit.com.ar"}},{hobbies:["Futbol","Series"]}],S=function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k:return[C[0]];case y:return[C[2]];case w:return[C[1]]}},I=function(e){switch(Object.keys(e)[0]){case"general":var a=e.general,c=a.nombre,t=a.ubicacion,s=a.estudios,n=a.orientacion_IT;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("h5",{className:"mt-2",children:[Object(N.jsx)("span",{children:Object(N.jsx)("i",{className:"fas fa-user p-3 "})}),"  ",c]}),Object(N.jsxs)("h5",{className:"mt-2",children:[Object(N.jsx)("span",{children:Object(N.jsx)("i",{className:"fas fa-home p-3"})})," Vive en ",t]}),Object(N.jsxs)("h5",{className:"mt-2",children:[Object(N.jsx)("span",{children:Object(N.jsx)("i",{className:"fas fa-graduation-cap p-3"})})," ",n]}),Object(N.jsxs)("h5",{className:"mt-2",children:[Object(N.jsx)("span",{children:Object(N.jsx)("i",{className:"fas fa-graduation-cap p-3"})}),s]})]});case"estudios":var r=e.estudios,i=r.punchIt,o=r.direccion;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("h5",{className:"mt-2",children:[Object(N.jsx)("span",{children:Object(N.jsx)("i",{className:"fas fa-university p-3 "})}),Object(N.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",children:"Punch-IT"})]}),Object(N.jsxs)("h5",{className:"mt-2",children:[Object(N.jsx)("span",{children:Object(N.jsx)("i",{className:"fas fa-graduation-cap p-3 "})}),"PunchIt - ",i[0]]}),Object(N.jsxs)("h5",{className:"mt-2",children:[Object(N.jsx)("span",{children:Object(N.jsx)("i",{className:"fas fa-graduation-cap p-3 "})}),"PunchIt - ",i[1]]})]});case"hobbies":var j=Object(m.a)(e.hobbies,2),l=j[0],b=j[1];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("h5",{className:"mt-2",children:[Object(N.jsx)("span",{children:Object(N.jsx)("i",{className:"far fa-futbol p-3 "})}),"Jugar y ver ",l,"\ud83c\udfc3\u200d\u2642\ufe0f"]}),Object(N.jsxs)("h5",{className:"mt-2",children:[Object(N.jsx)("span",{children:Object(N.jsx)("i",{className:"fas fa-film p-3 "})}),b," \ud83d\udc40 Attack of titans, One piece, Breaking bad, Game of Thrones, etc "]})]})}},A=function(){var e={general:!1,estudios:!1,hobbies:!1},a=Object(t.useState)(e),c=Object(m.a)(a,2),s=c[0],n=c[1],o=Object(t.useReducer)(S,C),l=Object(m.a)(o,2),b=l[0],d=l[1],h=function(a){d({type:a,payload:[]}),n(Object(j.a)(Object(j.a)({},e),{},Object(v.a)({},a.toLowerCase(),!0)))};return Object(t.useEffect)((function(){n(Object(j.a)(Object(j.a)({},e),{},{general:!0})),d({type:k,payload:[]})}),[]),Object(N.jsx)(r.a,{className:" p-3 justify-content-center d-flex caja-general-info",children:Object(N.jsxs)(u.a,{className:"caja-informacion",children:[Object(N.jsxs)("div",{className:"p-1 border-end col-md-4 col-lg-5 col-sm-12",children:[Object(N.jsx)("h4",{children:"Informaci\xf3n"}),Object(N.jsx)(i.b,{to:"#",onClick:function(){return h(k)},className:s.general?"general":"div-categorias",children:Object(N.jsx)("h6",{children:"General"})}),Object(N.jsx)(i.b,{to:"#",onClick:function(){return h(w)},className:s.estudios?"estudios":"div-categorias",children:Object(N.jsx)("h6",{children:"Estudios"})}),Object(N.jsx)(i.b,{to:"#",onClick:function(){return h(y)},className:s.hobbies?"hobbies":"div-categorias",children:Object(N.jsx)("h6",{children:"Hobbies"})})]}),Object(N.jsx)("div",{className:"col-lg-7 col-md-6 ",children:b.map((function(e){return Object(N.jsx)(I,Object(j.a)({},e),Math.random())}))})]})})},E=Object(t.memo)((function(){var e=Object(t.useState)([]),a=Object(m.a)(e,2),c=a[0],s=a[1],n=function(){var e=Object(d.a)(b.a.mark((function e(){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()("https://api.github.com/users/AlejandroWogelman/repos");case 2:a=e.sent,c=a.data,s(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(t.useEffect)((function(){n()}),[]),Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(u.a,{className:"caja-cards mt-2",style:{height:"620px"},children:c.length>1&&c.map((function(e){var a=e.name,c=e.html_url,t=e.description,s=e.id,n=e.homepage;return Object(N.jsxs)("div",{className:"cartas row",children:[Object(N.jsxs)("h3",{className:"title-card",children:[a," "]}),Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("p",{children:t}),Object(N.jsxs)("a",{href:n,rel:"noopener noreferrer",target:"_blank",children:[" ",Object(N.jsx)("i",{className:"fab fa-google"})]}),Object(N.jsx)("a",{href:c,rel:"noopener noreferrer",target:"_blank",children:Object(N.jsx)("i",{className:"fab fa-github"})})]})]},s)}))})})})),F=c.p+"static/media/perfil.99531d39.jpg",L=c(39),_=function(){var e=Object(o.g)(),a={proyectos:!1,informacion:!1,contacto:!1},c=Object(t.useState)(a),s=Object(m.a)(c,2),n=s[0],l=s[1],b=function(e){l(Object(j.a)(Object(j.a)({},a),{},Object(v.a)({},e,!0)))};return Object(t.useEffect)((function(){if(e.location.pathname.length>1){var a=e.location.pathname.substring(1);l(Object(v.a)({},a,!0))}}),[e]),Object(N.jsx)(r.a,{className:"caja-cards",children:Object(N.jsxs)("ul",{className:"nav justify-content-center p-0",children:[Object(N.jsx)("li",{className:"p-3",children:Object(N.jsx)(i.b,{to:"/proyectos",onClick:function(){return b("proyectos")},className:n.proyectos?"proyectos":"navSuperior",children:Object(N.jsx)("span",{className:"span-nav",children:"Proyectos"})})}),Object(N.jsx)("li",{className:"p-3",children:Object(N.jsx)(i.b,{to:"/informacion",onClick:function(){return b("informacion")},className:n.informacion?"informacion":"navSuperior",children:Object(N.jsx)("span",{className:"span-nav",children:"Informacion"})})}),Object(N.jsx)("li",{className:"p-3",children:Object(N.jsx)(i.b,{to:"/contacto",onClick:function(){return b("contacto")},className:n.contacto?"contacto":"navSuperior",children:Object(N.jsx)("span",{className:"span-nav",children:"Contacto "})})})]})})},G=function(e){var a=e.history,c=Object(t.useRef)(),s=Object(t.useRef)();return Object(N.jsxs)(r.a,{fluid:!0,className:"background-superior",children:[Object(N.jsx)("header",{className:"d-flex justify-content-center header",children:Object(N.jsxs)(u.a,{className:"background-header justify-content-center",children:[Object(N.jsx)(L.a,{md:12,children:Object(N.jsxs)("div",{className:"developer",children:[Object(N.jsx)("h1",{children:"Web developer"}),Object(N.jsx)("h2",{className:"titulo-2",children:"Desarrollador web"})]})}),Object(N.jsx)(L.a,{className:"caja-perfil",children:Object(N.jsx)("img",{src:F,alt:"perfil"})})]})}),Object(N.jsxs)("div",{className:"text-center",children:[Object(N.jsx)("h2",{className:"name",children:"Alejandro Wogelman"}),Object(N.jsx)(i.b,{to:"#",onClick:function(e){"ver presentacion"===s.current.textContent?(s.current.textContent="cerrar",c.current.style.display="block"):(s.current.textContent="ver presentacion",c.current.style.display="none")},ref:s,className:"presentacion",children:"ver presentacion"}),Object(N.jsx)("span",{ref:c,className:"DisplayPresentacion",children:Object(N.jsx)("p",{children:"Hola! Soy alejandro, actualmente me encuentro cada vez mas metido en el aprendizaje sobre el desarrollo web. Aprendiendo a trav\xe9s de cursos y por cuenta propia. Manejo HTML-CSS-Javascript y encantado con React! Sin lugar a dudas lo que quiero seguir haciendo de ac\xe1 en adelante, practicando y aprendiendo. \ud83d\ude01"})}),Object(N.jsx)("hr",{className:"mb-1"})]}),Object(N.jsx)(_,{history:a})]})},R=function(){return Object(N.jsxs)(i.a,{children:[Object(N.jsx)(G,{}),Object(N.jsxs)(o.d,{children:[Object(N.jsx)(o.b,{path:"/proyectos",component:E}),Object(N.jsx)(o.b,{path:"/contacto",component:g}),Object(N.jsx)(o.b,{path:"/informacion",component:A}),Object(N.jsx)(o.a,{to:"/informacion"})]})]})};var q=function(){return Object(N.jsx)(r.a,{fluid:!0,children:Object(N.jsx)(R,{})})};n.a.render(Object(N.jsx)(q,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.286de8cd.chunk.js.map