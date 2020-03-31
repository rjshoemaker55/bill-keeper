(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,n){e.exports=n(61)},50:function(e,t,n){},52:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(35),c=n.n(l),u=n(20),i=n(18),o=n(14),d=n(9),s=n(4),m=n(13),b=n(17);function p(){var e=Object(b.a)(["\n  mutation($id: Int!) {\n    deleteBill(id: $id) {\n      id\n    }\n  }\n"]);return p=function(){return e},e}function g(){var e=Object(b.a)(["\n  mutation(\n    $id: Int!\n    $newBillName: String\n    $newCategory: String\n    $newAmount: Int\n    $newDueDate: Int\n  ) {\n    updateBill(\n      id: $id\n      newBillName: $newBillName\n      newCategory: $newCategory\n      newAmount: $newAmount\n      newDueDate: $newDueDate\n    ) {\n      id\n    }\n  }\n"]);return g=function(){return e},e}function f(){var e=Object(b.a)(["\n  mutation(\n    $billname: String!\n    $amount: Int!\n    $duedate: Int!\n    $category: String\n    $user: Int!\n  ) {\n    addBill(\n      billname: $billname\n      amount: $amount\n      duedate: $duedate\n      category: $category\n      user: $user\n    ) {\n      id\n    }\n  }\n"]);return f=function(){return e},e}function E(){var e=Object(b.a)(["\n  mutation($name: String!, $username: String!, $password: String!) {\n    addUser(uname: $name, username: $username, upassword: $password) {\n      id\n    }\n  }\n"]);return E=function(){return e},e}function v(){var e=Object(b.a)(["\n  query($billId: Int!) {\n    bill(billId: $billId) {\n      id\n      billname\n      amount\n      category\n      duedate\n    }\n  }\n"]);return v=function(){return e},e}function j(){var e=Object(b.a)(["\n  query($userId: Int!) {\n    user(userId: $userId) {\n      id\n      uname\n      username\n      bills {\n        id\n        billname\n        amount\n        duedate\n        category\n      }\n    }\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(b.a)(["\n  {\n    users {\n      id\n      uname\n      username\n    }\n  }\n"]);return O=function(){return e},e}function w(){var e=Object(b.a)(["\n  query($username: String!, $password: String!) {\n    loginUser(username: $username, password: $password) {\n      id\n    }\n  }\n"]);return w=function(){return e},e}var h=Object(o.b)(w()),y=(Object(o.b)(O()),Object(o.b)(j())),N=Object(o.b)(v()),C=Object(o.b)(E()),$=Object(o.b)(f()),S=Object(o.b)(g()),B=Object(o.b)(p()),I=(n(50),function(e){var t=Object(a.useState)(!0),n=Object(s.a)(t,2),l=n[0],c=n[1],u=Object(a.useState)(""),i=Object(s.a)(u,2),o=i[0],d=i[1],b=Object(a.useState)(""),p=Object(s.a)(b,2),g=p[0],f=p[1],E=Object(a.useState)(""),v=Object(s.a)(E,2),j=v[0],O=v[1],w=Object(a.useState)(!1),y=Object(s.a)(w,2),N=y[0],$=y[1];console.log(o,g);var S=Object(m.a)(h,{onError:function(e){d(""),f(""),$(!0)},onCompleted:function(t){$(!1),e.history.push({pathname:"/home",state:t.loginUser})}}),B=Object(s.a)(S,1)[0],I=Object(m.b)(C,{onCompleted:function(t){e.history.push({pathname:"/home",state:t.addUser})}}),k=Object(s.a)(I,1)[0];return r.a.createElement("div",{id:"login-wrapper"},r.a.createElement("div",{id:"login-header-wrapper"},r.a.createElement("div",{id:"login-header"},"Bill Keeper."),r.a.createElement("div",{id:"login-subheader"},"Login or Register:")),N&&r.a.createElement("div",{id:"login-error"},"Incorrect username or password."),!l&&r.a.createElement("input",{value:j,onChange:function(e){return O(e.target.value)},type:"text",placeholder:"Name",className:"login-field",autoComplete:"new-password",required:!0}),r.a.createElement("input",{value:o,onChange:function(e){return d(e.target.value)},type:"text",placeholder:"Username",className:"login-field",autoComplete:"new-password",required:!0}),r.a.createElement("input",{value:g,onChange:function(e){return f(e.target.value)},type:"password",placeholder:"Password",className:"login-field",autoComplete:"new-password",required:!0}),r.a.createElement("button",{id:"register-login-button",onClick:function(e){l?B({variables:{username:o,password:g}}):k({variables:{name:j,username:o,password:g}})}},l?"Login":"Register"),r.a.createElement("div",{id:"register-login-switch",onClick:function(){return c(!l)}},l?"Register":"Login"))}),k=n(26),D=n.n(k),x=n(29),L=n(40),q=(n(52),function(e){return r.a.createElement("div",{id:"navbar-wrapper"},r.a.createElement("div",{id:"navbar-left-display",className:"navbar-item"},r.a.createElement("div",{id:"logged-in-display"},e.uname)),r.a.createElement("div",{id:"navbar-center-display",className:"navbar-item"},r.a.createElement("div",{id:"navbar-title"},"Bill Keeper.")),r.a.createElement("div",{id:"navbar-right-display",className:"navbar-item"},r.a.createElement("div",{id:"logout-button"},r.a.createElement(u.b,{to:"/",id:"logout-text"},"Logout"))))}),A=(n(57),function(e){var t=e.id,n=e.className,l=e.billname,c=e.amount,u=e.category,i=e.duedate,o=e.deleteBill,d=e.updateBill,m=Object(a.useState)(l),b=Object(s.a)(m,2),p=b[0],g=b[1],f=Object(a.useState)(c),E=Object(s.a)(f,2),v=E[0],j=E[1],O=Object(a.useState)(u),w=Object(s.a)(O,2),h=w[0],y=w[1],N=Object(a.useState)(i),C=Object(s.a)(N,2),$=C[0],S=C[1],B=Object(a.useState)("table-delete-button"),I=Object(s.a)(B,2),k=I[0],D=I[1],x=function(e,t){switch(e.preventDefault(),D("table-update-button"),t){case"billname":g(e.target.value);break;case"category":y(e.target.value);break;case"amount":j(Number(e.target.value));break;case"duedate":S(Number(e.target.value))}};return r.a.createElement("tr",{className:n},r.a.createElement("td",null,r.a.createElement("input",{className:"bill-item",value:p,onChange:function(e){return x(e,"billname")}})),r.a.createElement("td",null,u?r.a.createElement("input",{className:"bill-item",value:h,onChange:function(e){return x(e,"category")}}):"None"),r.a.createElement("td",null,r.a.createElement("div",{className:"dollar"},r.a.createElement("input",{className:"bill-item centered",value:v,type:"number",onChange:function(e){return x(e,"amount")}}))),r.a.createElement("td",null,r.a.createElement("input",{className:"bill-item centered",value:$,type:"number",onChange:function(e){return x(e,"duedate")}})),r.a.createElement("td",{className:"centered"},r.a.createElement("button",{id:k,className:"table-button",onClick:function(){"table-delete-button"==k?o():(d({variables:{id:t,newBillName:p,newCategory:h,newAmount:v,newDueDate:$}}),D("table-delete-button"))}},"table-delete-button"==k?"X":"\u2713"),"table-update-button"==k&&r.a.createElement("button",{id:"table-revert-button",className:"table-button",onClick:function(){D("table-delete-button"),g(l),j(c),y(u),S(i)}},"\u27f2")))}),U=(n(58),function(e){var t=Object(a.useState)({}),n=Object(s.a)(t,2),l=n[0],c=n[1],u=Object(a.useState)([]),i=Object(s.a)(u,2),o=i[0],d=i[1],b=Object(a.useState)(""),p=Object(s.a)(b,2),g=p[0],f=p[1],E=Object(a.useState)(""),v=Object(s.a)(E,2),j=v[0],O=v[1],w=Object(a.useState)(""),h=Object(s.a)(w,2),C=h[0],I=h[1],k=Object(a.useState)(""),U=Object(s.a)(k,2),R=U[0],F=U[1],J=Object(a.useState)(""),K=Object(s.a)(J,2),P=K[0],Q=K[1],X=0,z=o.sort((function(e,t){return e.billname.toLowerCase().localeCompare(t.billname.toLowerCase())})),G=e.history.location.state.id,H=Object(m.c)(y,{variables:{userId:G},onError:function(e){return console.log("getUserQuery Error: ".concat(e))},onCompleted:function(e){c(e.user),d(e.user.bills)}}).loading,M=Object(m.a)(N,{onError:function(e){return console.log("getBill Error: ".concat(e))},onCompleted:function(e){return te(P,e)}}),T=Object(s.a)(M,1)[0],V=Object(m.b)($,{onError:function(e){return console.log("addBill Error: ".concat(e))},onCompleted:function(e){Q("add"),T({variables:{billId:e.addBill.id}})}}),W=Object(s.a)(V,1)[0],Y=Object(m.b)(S,{onError:function(e){return console.log("updateBill error: ".concat(e))},onCompleted:function(e){Q("update"),T({variables:{billId:e.updateBill.id}})}}),Z=Object(s.a)(Y,1)[0],_=Object(m.b)(B,{onError:function(e){return console.log("deleteBill Error: ".concat(e))},onCompleted:function(e){Q("delete"),te("delete",e)}}),ee=Object(s.a)(_,1)[0],te=function(){var e=Object(L.a)(D.a.mark((function e(t,n){var a,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="delete"===e.t0?3:"add"===e.t0?5:"update"===e.t0?11:18;break;case 3:return d(o.filter((function(e){return e.id!==n.deleteBill.id}))),e.abrupt("break",18);case 5:return d([].concat(Object(x.a)(o),[n.bill])),f(""),O(""),F(""),I(""),e.abrupt("break",18);case 11:return e.next=13,o.findIndex((function(e){return e.id==n.bill.id}));case 13:return a=e.sent,(r=Object(x.a)(o))[a]=n.bill,d(r),e.abrupt("break",18);case 18:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return H?r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{uname:"Loading"}),r.a.createElement("h2",null,"Loading...")):r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{uname:l.uname}),r.a.createElement("div",{id:"home-wrapper"},r.a.createElement("div",{id:"instructions"},"Click on bill data to edit."),r.a.createElement("div",{id:"scroll-instructions"},"Scroll to see all data on smaller screens."),r.a.createElement("div",{id:"table-scroll"},r.a.createElement("table",{align:"center",id:"bill-table"},r.a.createElement("thead",null,r.a.createElement("tr",{id:"table-header-row"},r.a.createElement("th",null,"Bill Name"),r.a.createElement("th",null,"Category"),r.a.createElement("th",{className:"centered"},"Amount"),r.a.createElement("th",{className:"centered"},"Due Date"),r.a.createElement("th",{id:"table-delete-column"}))),r.a.createElement("tbody",null,!H&&z.map((function(e){return X++,r.a.createElement(A,{key:e.id,id:e.id,className:X%2?"reg-row":"green-row",billname:e.billname,amount:e.amount,category:e.category,duedate:e.duedate,deleteBill:function(){ee({variables:{id:e.id}})},updateBill:Z})})),r.a.createElement("tr",{id:"new-bill-row"},r.a.createElement("td",null,r.a.createElement("input",{className:"new-bill-field",value:g,placeholder:"New Bill",onChange:function(e){return f(e.target.value)}})),r.a.createElement("td",null,r.a.createElement("input",{className:"new-bill-field",value:j,placeholder:"Category",onChange:function(e){return O(e.target.value)}})),r.a.createElement("td",{className:"centered"},r.a.createElement("input",{className:"new-bill-field centered",value:C,type:"number",placeholder:"Amount",onChange:function(e){return I(parseInt(e.target.value))}})),r.a.createElement("td",{className:"centered"},r.a.createElement("input",{className:"new-bill-field centered",value:R,placeholder:"Due Date",type:"number",onChange:function(e){return F(parseInt(e.target.value))}})),r.a.createElement("td",{className:"centered"},r.a.createElement("button",{id:"add-bill-button",className:"table-button",onClick:function(){W({variables:{billname:g,amount:C,category:j,duedate:R,user:G}})}},"+"))))))))}),R=(n(59),new o.a({uri:"/graphql"}));var F=function(){return r.a.createElement(d.a,{client:R},r.a.createElement(u.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:I}),r.a.createElement(i.a,{exact:!0,path:"/home",component:U})))};c.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.9342c255.chunk.js.map