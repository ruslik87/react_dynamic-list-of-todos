(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(6),s=c.n(a),n=c(4),r=c(2),l=c(3),i=c.n(l),o=c(1),d=c.n(o),j=(c(13),c(14),c(7)),u=c.n(j),b=c(0),h=d.a.memo((function(e){var t=e.todos,c=e.onClick;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(b.jsx)("td",{className:"is-vcentered",children:e.id}),Object(b.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:u()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})})),m=function(e){var t=e.status,c=e.query,a=e.onChangeStatus,s=e.onChangeQuery,n=e.onChangeApplyQuery;return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return a(e.target.value)},children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){var t=e.target.value.trimStart();s(t),n(t)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){n(""),s("")}})})]})]})};function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x=function(e){return O("/users/".concat(e))},f=(c(16),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})}),p=function(e){var t=e.todo,c=e.closeModal,a=Object(o.useState)(null),s=Object(r.a)(a,2),l=s[0],d=s[1],j=t.id,u=t.title,h=t.completed,m=t.userId,O=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(m);case 3:t=e.sent,d(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),alert("User not found"),c();case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){O()}),[]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),l?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(j)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c()}})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:u}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[h?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(l.email),children:l.name})]})]})]}):Object(b.jsx)(f,{})]})},v=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(o.useState)("all"),l=Object(r.a)(s,2),d=l[0],j=l[1],u=Object(o.useState)(""),x=Object(r.a)(u,2),v=x[0],N=x[1],y=Object(o.useState)(""),g=Object(r.a)(y,2),k=g[0],C=g[1],w=Object(o.useState)(!1),S=Object(r.a)(w,2),T=S[0],A=S[1],_=Object(o.useState)(null),E=Object(r.a)(_,2),L=E[0],Q=E[1],B=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(!0),e.next=4,O("/todos");case 4:t=e.sent,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:return e.prev=11,A(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){B()}),[]);var I=Object(o.useCallback)(function(e,t){var c;return function(){clearTimeout(c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];c=setTimeout.apply(void 0,[e,t].concat(s))}}(C,500),[]),M=Object(o.useMemo)((function(){var e=c.filter((function(e){return e.title.toLowerCase().includes(k.toLowerCase())}));switch(d){case"active":return e.filter((function(e){return!e.completed}));case"completed":return e.filter((function(e){return e.completed}));default:return e}}),[c,d,k]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(m,{status:d,query:v,onChangeStatus:j,onChangeQuery:N,onChangeApplyQuery:I})}),Object(b.jsx)("div",{className:"block",children:T?Object(b.jsx)(f,{}):Object(b.jsx)(h,{todos:M,onClick:Q})})]})})}),L&&Object(b.jsx)(p,{closeModal:function(){return Q(null)},todo:L})]})};s.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.fb507b91.chunk.js.map