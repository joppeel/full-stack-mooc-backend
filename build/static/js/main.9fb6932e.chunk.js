(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),u=n.n(r),o=n(14),l=n(2),i=n(3),s=n.n(i),m="/api/persons",f=function(e){var t=e.setFilter;return c.a.createElement("div",null,"filter shown with",c.a.createElement("input",{onChange:function(e){return t(e.target.value)}}))},d=function(e){var t=e.setName,n=e.setNumber,a=e.submit;return c.a.createElement("form",null,c.a.createElement("div",null,"name: ",c.a.createElement("input",{onChange:function(e){return t(e.target.value)}})),c.a.createElement("div",null,"number: ",c.a.createElement("input",{onChange:function(e){return n(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit",onClick:a},"add")))},E=function(e){var t=e.persons,n=e.handleDelete;return c.a.createElement("div",null,t.map((function(e){return c.a.createElement("div",{key:e.name},e.name," ",e.number," ",c.a.createElement("button",{onClick:function(){return n(e)}},"delete"))})))},p={ADD:"ADD",DELETE:"DELETE",UPDATE:"UPDATE"},b=(n(37),function(e){var t=e.notification;if(null===t)return null;var n=t.successful,a="";switch(t.action){case p.ADD:a=n?"Added ".concat(t.personName):t.message;break;case p.DELETE:a=n?"Deleted ".concat(t.personName):"Failed to delete ".concat(t.personName);break;case p.UPDATE:a=n?"Updated ".concat(t.personName,"'s number"):"Failed to update ".concat(t.personName,"'s number")}return c.a.createElement("div",{className:t.successful?"success":"error"},a)}),h=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),h=i[0],v=i[1],D=Object(a.useState)(""),N=Object(l.a)(D,2),w=N[0],j=N[1],A=Object(a.useState)(""),O=Object(l.a)(A,2),g=O[0],T=O[1],k=Object(a.useState)(null),C=Object(l.a)(k,2),L=C[0],P=C[1];Object(a.useEffect)((function(){s.a.get(m).then((function(e){return e.data})).then((function(e){r(e)}))}),[]);var S=function(e){var t,a=Object(o.a)({},e,{number:w});(t=a,s.a.put(m+"/"+t.id,t).then((function(e){return e.data}))).then((function(e){r(n.map((function(t){return e.id!==t.id?t:e}))),U({action:p.UPDATE,personName:a.name,successful:!0})})).catch((function(e){U({action:p.UPDATE,personName:a.name,successful:!1})}))},U=function(e){P(e),setTimeout((function(){return P(null)}),5e3)};return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(b,{notification:L}),c.a.createElement(f,{setFilter:T}),c.a.createElement("h2",null,"Add a new"),c.a.createElement(d,{setName:v,setNumber:j,submit:function(e){e.preventDefault();var t,a=n.filter((function(e){return e.name===h}));if(a.length>0){var c=a[0];window.confirm("".concat(c.name," is already added to phonebook, replace the old number with a new one?"))&&S(c)}else{var u={name:h,number:w};(t=u,s.a.post(m,t).then((function(e){return e.data}))).then((function(){r(n.concat(u)),v(""),U({action:p.ADD,personName:u.name,successful:!0})})).catch((function(e){U({action:p.ADD,message:e.response.data.error,successful:!1})}))}}}),c.a.createElement("h2",null,"Numbers"),c.a.createElement(E,{persons:n.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase())})),handleDelete:function(e){var t;if(window.confirm("Delete ".concat(e.name,"?"))){var a=n.filter((function(t){return t.id!==e.id}));r(a),(t=e.id,s.a.delete(m+"/"+t).then((function(e){return e.data}))).then((function(){U({action:p.DELETE,personName:e.name,successful:!0})})).catch((function(t){U({action:p.DELETE,personName:e.name,successful:!1})}))}}}))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9fb6932e.chunk.js.map