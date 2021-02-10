(this["webpackJsonpbb-app"]=this["webpackJsonpbb-app"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(6),o=n.n(s),i=n(9),u=n(8),l=n(7),j=n.n(l),b=n(15),d=n(25),p=n.n(d),h="/api/books",O={getAll:function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(h);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(b.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post(h,t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.put("".concat(h,"/").concat(t),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},x=(n(59),function(e){var t=e.errorType,n=e.errorInfo;return Object(r.jsxs)("div",{className:"errorContainer",children:[Object(r.jsx)("div",{children:"".concat(t," error!")}),Object(r.jsx)("div",{children:n})]})}),v=function(e){var t=e.setBooks,n=e.bookList,c=Object(a.useState)(""),s=Object(u.a)(c,2),o=s[0],i=s[1],l=Object(a.useState)(""),j=Object(u.a)(l,2),b=j[0],d=j[1],p=Object(a.useState)(""),h=Object(u.a)(p,2),v=h[0],f=h[1],m=Object(a.useState)(null),g=Object(u.a)(m,2),k=g[0],w=g[1],N=Object(a.useState)(null),S=Object(u.a)(N,2),y=S[0],C=S[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r,a={title:o,author:b,about:v};""===(r=a).title||""===r.author||""===r.about?(console.log(123),w("new book creation"),C("invalid input"),setTimeout((function(){w(null),C(null)}),3e3)):O.create(a).then((function(e){t(n.concat(e)),i(""),d(""),f("")})).catch((function(e){w("new book creation"),C("error"),setTimeout((function(){w(null),C(null)}),3e3)}))},children:[Object(r.jsx)("label",{htmlFor:"newTitle",children:"Title: "}),Object(r.jsx)("input",{value:o,id:"newTitle",onChange:function(e){e.preventDefault(),i(e.target.value)}}),Object(r.jsx)("label",{htmlFor:"newAuthor",children:"Author: "}),Object(r.jsx)("input",{value:b,id:"newAuthor",onChange:function(e){e.preventDefault(),d(e.target.value)}}),Object(r.jsx)("label",{htmlFor:"newAbout",children:"About: "}),Object(r.jsx)("input",{value:v,id:"newAbout",onChange:function(e){e.preventDefault(),f(e.target.value)}}),Object(r.jsx)("button",{type:"submit",children:"submit"})]}),null===k?Object(r.jsx)("div",{}):Object(r.jsx)(x,{errorType:k,errorInfo:y})]})},f=n(17),m=(n(60),function(e){var t=e.title,n=e.author,a=e.about,c=e.id;return Object(r.jsxs)("div",{className:"bookItemContainer",children:[Object(r.jsx)("h3",{className:"bookTitleContainer",children:Object(r.jsx)(f.b,{to:"/bookdetails/".concat(c),children:t})}),Object(r.jsxs)("small",{className:"bookAuthorContainer",children:["author: ",n]}),Object(r.jsx)("p",{className:"bookAboutContainer",children:a})]})}),g=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){return O.getAll().then((function(e){c(e)}))}),[]),console.log(n),null===n?Object(r.jsx)("div",{}):Object(r.jsxs)("div",{children:[n.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsx)(m,{title:e.title,author:e.author,about:e.about,id:e.id})},e.id)})),Object(r.jsx)(v,{setBooks:c,bookList:n})]})},k=n(61),w=n(10),N=n(131),S=n(132),y=n(49),C=n.n(y),I=Object(w.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(r.jsx)(N.a,Object(k.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),B=function(e){var t=e.user,n=e.logout,a=c.a.useState(null),s=Object(u.a)(a,2),o=s[0],i=s[1],l=function(e){i(e.currentTarget)},j=function(){i(null)},b={color:"black",textDecoration:"none"};return null===t?Object(r.jsxs)("div",{style:{marginRight:50},children:[Object(r.jsx)(C.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",onClick:l,style:{fontSize:50,color:"black",cursor:"pointer"}}),Object(r.jsxs)(I,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:j,children:[Object(r.jsx)(f.b,{to:"/login",style:b,children:Object(r.jsx)(S.a,{children:"Sign In"})}),Object(r.jsx)(S.a,{children:"My account"})]})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)(C.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",onClick:l,style:{fontSize:50,color:"black",cursor:"pointer"},children:"open"}),Object(r.jsxs)(I,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:j,children:[Object(r.jsx)(S.a,{children:"My account"}),Object(r.jsx)(f.b,{to:"/new-book",style:b,children:Object(r.jsx)(S.a,{children:"Add book"})}),Object(r.jsx)(S.a,{onClick:n,children:"Logout"})]})]})},T=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedNoteappUser");if(e){var t=JSON.parse(e);c(t)}}),[]);return Object(r.jsxs)("div",{className:"titleStatusContainer",children:[Object(r.jsx)(f.b,{to:"/",style:{color:"black",textDecoration:"none"},children:Object(r.jsx)("h1",{className:"webTitle",children:"Book Review Board"})}),Object(r.jsx)(B,{className:"status",user:n,logout:function(){c(null),window.localStorage.removeItem("loggedNoteappUser")}})]})},A=function(){return Object(r.jsx)("div",{className:"projectContainer",children:Object(r.jsx)("div",{className:"mainContentContainer",children:Object(r.jsxs)("div",{className:"titleBookContainer",children:[Object(r.jsx)(T,{}),Object(r.jsx)(g,{})]})})})},D=function(){var e=Object(i.g)().id;return Object(r.jsx)("div",{children:e})},L={login:function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F={signup:function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(e){var t=e.successInfo;return Object(r.jsx)("div",{className:"successContainer",children:Object(r.jsx)("div",{children:t})})},z=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),o=Object(u.a)(s,2),l=o[0],d=o[1],p=Object(a.useState)(""),h=Object(u.a)(p,2),O=h[0],v=h[1],m=Object(a.useState)(null),g=Object(u.a)(m,2),k=g[0],w=g[1],N=Object(a.useState)(null),S=Object(u.a)(N,2),y=S[0],C=S[1],I=Object(a.useState)(null),B=Object(u.a)(I,2),T=B[0],A=B[1],D=Object(a.useState)(!1),z=Object(u.a)(D,2),E=z[0],U=z[1],J=Object(i.f)(),M=function(){var e=Object(b.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,L.login({username:n,password:l});case 4:r=e.sent,window.localStorage.setItem("loggedNoteappUser",JSON.stringify(r)),c(""),d(""),J.push("/"),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),w("varify failed"),C("wrong username/password"),setTimeout((function(){w(null),C(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,F.signup({username:n,name:O,password:l});case 4:c(""),d(""),v(""),A("SignUp success!"),setTimeout((function(){A(null),J.push("/login")}),3e3),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),w("singup failed"),C("invalid username/password"),setTimeout((function(){w(null),C(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"loginContainer",children:!1===E?Object(r.jsxs)("form",{className:"loginForm",onSubmit:M,children:[Object(r.jsx)(f.b,{to:"/",style:{textDecoration:"none"},children:Object(r.jsx)("h2",{className:"appName",children:"Book Review Board"})}),null===k?Object(r.jsx)("div",{}):Object(r.jsx)(x,{errorType:k,errorInfo:y}),null===T?Object(r.jsx)("div",{}):Object(r.jsx)(R,{successInfo:T}),Object(r.jsx)("h3",{children:"Sign In"}),Object(r.jsx)("div",{className:"inputContainer",children:Object(r.jsx)("input",{type:"text",value:n,onChange:function(e){var t=e.target;return c(t.value)},placeholder:"username"})}),Object(r.jsx)("div",{className:"inputContainer",children:Object(r.jsx)("input",{type:"password",value:l,onChange:function(e){var t=e.target;return d(t.value)},placeholder:"password"})}),Object(r.jsx)("button",{className:"submitBtn",type:"submit",children:"Sign In"}),Object(r.jsx)("p",{className:"switchSign",onClick:function(){U(!0)},children:"create account"})]}):Object(r.jsxs)("form",{className:"signupForm",onSubmit:P,children:[Object(r.jsx)(f.b,{to:"/",style:{textDecoration:"none"},children:Object(r.jsx)("h2",{className:"appName",children:"Book Review Board"})}),null===k?Object(r.jsx)("div",{}):Object(r.jsx)(x,{errorType:k,errorInfo:y}),null===T?Object(r.jsx)("div",{}):Object(r.jsx)(R,{successInfo:T}),Object(r.jsx)("h3",{children:"Sign Up"}),Object(r.jsx)("div",{className:"inputContainer",children:Object(r.jsx)("input",{type:"text",value:n,onChange:function(e){var t=e.target;return c(t.value)},placeholder:"username"})}),Object(r.jsx)("div",{className:"inputContainer",children:Object(r.jsx)("input",{type:"text",value:O,onChange:function(e){var t=e.target;return v(t.value)},placeholder:"name"})}),Object(r.jsx)("div",{className:"inputContainer",children:Object(r.jsx)("input",{type:"password",value:l,onChange:function(e){var t=e.target;return d(t.value)},placeholder:"password"})}),Object(r.jsx)("button",{className:"submitBtn",type:"submit",children:"Sign In"}),Object(r.jsx)("p",{className:"switchSign",onClick:function(){U(!1)},children:"Have an account?"})]})})})},E=(n(99),function(){return Object(r.jsx)(z,{})}),U=n(130),J=(n(100),function(){return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)("div",{children:"You are in the wilderness of nowhere..."}),Object(r.jsx)("div",{children:"\u4f60\u4f3c\u4e4e\u6765\u5230\u4e86\u6ca1\u6709\u77e5\u8bc6\u5b58\u5728\u7684\u8352\u539f..."})]})}),M={search:function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(t,"&key=").concat("AIzaSyB836bPHtu0i7YDkubayM28T1VB8XfQQjk","&orderBy=relevance&maxResults=20"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(e){var t=e.book;return Object(r.jsxs)("div",{className:"searchItemContainer",children:[Object(r.jsxs)("div",{className:"searchItemTextPart",children:[Object(r.jsx)("h3",{style:{marginTop:"2rem"},children:t.title}),Object(r.jsxs)("small",{children:["author: ",t.authors]}),Object(r.jsxs)("p",{children:["ISBN-13: ",t.isbn]})]}),Object(r.jsx)("div",{className:"searchItemImgPart",children:Object(r.jsx)("img",{src:t.imgLink,alt:"book"})})]})},H=function(e){var t=e.bookResult;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{children:t.map((function(e,t){return null===e?Object(r.jsx)(c.a.Fragment,{}):Object(r.jsx)(P,{style:{maxWidth:"500px",marginBottom:"30px"},book:e},t)}))})})},Q=function(e){if(void 0===e.volumeInfo||e.volumeInfo<2e3)return e.volumeInfo=null,e;var t=e.volumeInfo;if(void 0===t.title&&(t.title="unavailable"),void 0===t.imageLinks||void 0===t.imageLinks.thumbnail?t.imgLink=null:t.imgLink=t.imageLinks.thumbnail,void 0===t.authors?t.authors="unavailable":t.authors=t.authors.join(),void 0===t.industryIdentifiers)t.isbn="unavailable";else{var n=t.industryIdentifiers.find((function(e){return"ISBN_13"===e.type}));t.isbn=n?n.identifier:"unavailable"}return e.volumeInfo=t,e},Y=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),o=Object(u.a)(s,2),i=o[0],l=o[1],d=Object(a.useState)([]),p=Object(u.a)(d,2),h=p[0],O=p[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedNoteappUser");if(e){var t=JSON.parse(e);c(t)}}),[]);var x=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==i){e.next=3;break}return O([]),e.abrupt("return");case 3:return e.prev=3,t.preventDefault(),e.next=7,M.search(i);case 7:n=e.sent,r=n.items,O(r.map((function(e){return Q(e).volumeInfo}))),console.log(h),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return n?Object(r.jsx)("div",{className:"rootContainer",children:Object(r.jsx)("div",{className:"searchToolContainer",children:Object(r.jsxs)("div",{className:"searchAndResult",children:[Object(r.jsx)(T,{}),Object(r.jsxs)("div",{className:"searchTool",children:[Object(r.jsx)("h2",{children:"Add New Book"}),Object(r.jsxs)("form",{onSubmit:x,children:[Object(r.jsx)("input",{className:"searchField",onChange:function(e){e.preventDefault(),l(e.target.value)},placeholder:"Title, Author, ISBN..."}),Object(r.jsx)(U.a,{variant:"contained",type:"submit",children:"Search"})]})]}),Object(r.jsx)(H,{bookResult:h})]})})}):Object(r.jsx)(J,{})},q=function(){return Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.a,{path:"/",exact:!0,children:Object(r.jsx)(A,{})}),Object(r.jsx)(i.a,{path:"/login",exact:!0,children:Object(r.jsx)(E,{})}),Object(r.jsx)(i.a,{path:"/bookdetails/:id",children:Object(r.jsx)(D,{})}),Object(r.jsx)(i.a,{path:"/new-book",children:Object(r.jsx)(Y,{})}),Object(r.jsx)(i.a,{component:J})]})};o.a.render(Object(r.jsx)(f.a,{children:Object(r.jsx)(q,{})}),document.getElementById("root"))},59:function(e,t,n){},60:function(e,t,n){},99:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.8f6e94c0.chunk.js.map