(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,s){},102:function(e,t,s){},109:function(e,t,s){},110:function(e,t,s){},111:function(e,t,s){},112:function(e,t,s){},113:function(e,t,s){},115:function(e,t,s){},116:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(19),a=s.n(n),i=s(14),r=(s(76),s(77),s(11)),l=s(3),o=s(121),j=s(118),u=s(120),d="SUBMIT_POST",b="SET_USER",h="SET_SHOW",O=function(e){return{type:b,payload:{user:e}}},g=function(e){return{type:h,payload:{show:e}}},x=s(10),m=s(20),p=s(21),f=s(13),v=s.n(f),N="http://localhost:8080/user",k=new(function(){function e(){Object(m.a)(this,e)}return Object(p.a)(e,[{key:"login",value:function(e,t){v.a.post(N+"/signin",{username:e,password:t}).then((function(e){e.data.accessToken&&(localStorage.setItem("user",JSON.stringify(e.data)),ie.dispatch(O(JSON.stringify(e.data))),console.log(window.localStorage.getItem("user")))})).catch((function(e){console.log(e)}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t){v.a.post("".concat(N,"/signup"),{username:e,password:t}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("user"))}}]),e}()),w=s(119),S=(s(101),s.p+"static/media/register.21ed9c01.png"),y=(s(102),s(1));function P(){Object(x.c)((function(e){return e.logged})).user;var e=Object(x.c)((function(e){return e.show})).show,t=Object(x.b)(),s=Object(r.g)(),n=Object(c.useState)(""),a=Object(l.a)(n,2),i=a[0],o=a[1],j=Object(c.useState)(""),d=Object(l.a)(j,2),b=d[0],h=d[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(u.a.Link,{className:"nav-item",onClick:function(){return t(g(!0))},children:"Login"}),Object(y.jsxs)(w.a,{show:e,onHide:function(){return t(g(!1))},backdrop:"static",keyboard:!1,children:[Object(y.jsx)(w.a.Header,{closeButton:!0,children:Object(y.jsx)(w.a.Title,{children:"Login"})}),Object(y.jsx)("div",{className:"login",children:Object(y.jsxs)("div",{className:"hero",children:[Object(y.jsx)("ul",{children:Object(y.jsx)("h1",{children:" Login "})}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("label",{for:"register_username",children:"Username: "}),Object(y.jsx)("input",{type:"text",onChange:function(e){o(e.target.value)}})]}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("label",{for:"login_password",children:"Password: "}),Object(y.jsx)("input",{type:"password",onChange:function(e){h(e.target.value)}})]}),Object(y.jsx)("ul",{children:Object(y.jsx)("button",{className:"button",type:"submit",onClick:function(){t(g(!1)),s.push("/"),k.login(i,b)},children:"Submit"})})]})})]})]})}var C=function(){var e=Object(r.g)(),t=Object(x.b)(),s=Object(c.useState)(""),n=Object(l.a)(s,2),a=n[0],i=n[1],o=Object(c.useState)(""),j=Object(l.a)(o,2),u=j[0],d=j[1];return console.log(u),Object(y.jsx)("div",{className:"register",children:Object(y.jsxs)("div",{className:"hero",children:[Object(y.jsx)("img",{className:"register1",alt:"register1",src:S}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"Registration"}),Object(y.jsxs)("form",{children:[Object(y.jsxs)("ul",{children:[Object(y.jsx)("label",{for:"register_username",children:"Username: "}),Object(y.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)}})]}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("label",{for:"register_password",children:"Password: "}),Object(y.jsx)("input",{type:"password",onChange:function(e){d(e.target.value)}})]}),Object(y.jsx)("ul",{children:Object(y.jsx)("input",{className:"button",type:"button",value:"Submit",onClick:function(){var s=a,c=u;k.register(s,c),e.push("/"),window.alert("".concat(s," has been registered.")),t(g(!0))}})})]})]})]})})};s(109);var T=s.p+"static/media/logo.ac08c986.png";function I(){var e=Object(r.g)(),t=Object(x.b)(),s=Object(x.c)((function(e){return e.logged})).user,n=Object(c.useState)(""),a=Object(l.a)(n,2),i=(a[0],a[1],Object(c.useState)((function(){k.logout()}))),d=Object(l.a)(i,2),b=d[0];d[1];return Object(y.jsx)(o.a,{expand:"lg",variant:"light",className:"navbar",children:Object(y.jsxs)(j.a,{children:[Object(y.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(y.jsxs)(o.a.Collapse,{id:"basic-navbar-nav",children:[Object(y.jsx)(u.a,{className:"me-auto",children:Object(y.jsx)(o.a.Brand,{href:"/",children:Object(y.jsx)("img",{src:T,width:"30",height:"30",className:"d-inline-block align-top",alt:"OmniConnx Logo"})})}),Object(y.jsxs)(u.a,{children:[s&&Object(y.jsxs)(u.a.Link,{className:"welcome",children:["Welcome Back ",function(){if(s){var e=JSON.parse(window.localStorage.getItem("USER_STATE"));return JSON.parse(e.logged.user)}}().username," :)"]}),Object(y.jsx)(u.a.Link,{className:"nav-item",href:"/posts",children:"Posts"}),s&&Object(y.jsx)(u.a.Link,{className:"nav-item",href:"/skill",children:"Skills"}),s&&Object(y.jsx)(u.a.Link,{className:"nav-item",href:"/prof",children:"Profile"}),!s&&Object(y.jsx)(P,{}),!s&&Object(y.jsx)(u.a.Link,{className:"log",href:"/register",children:"Register"}),s&&Object(y.jsx)(u.a.Link,{className:"log",onClick:function(){return window.alert("Signed out"),t(O(null)),e.push("/"),b},children:"Logout"})]})]})]})})}s(110);var E=function(){return Object(y.jsx)("div",{className:"footer",children:Object(y.jsx)("h2",{children:"Omniconnx"})})},L=(s(111),s.p+"static/media/logo1.be188a87.png"),U=s.p+"static/media/landing1.386878e2.png",R=s.p+"static/media/mentor.788f9af8.png",J=s.p+"static/media/financial.64dc1be7.png",B=s.p+"static/media/reviews.d2e76b70.png",_=s.p+"static/media/skills.a48c239f.png";var F=function(){return Object(y.jsxs)("div",{className:"landing",children:[Object(y.jsxs)("div",{className:"hero",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{className:"logo1",alt:"logo1",src:L}),Object(y.jsxs)("p",{children:["Connecting medical ",Object(y.jsx)("br",{})," professionals across the world"]}),Object(y.jsx)("button",{children:"Get Started"})]}),Object(y.jsx)("img",{className:"landing1",alt:"landing1",src:U})]}),Object(y.jsx)("div",{children:Object(y.jsxs)("svg",{class:"waves",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none","shape-rendering":"auto",children:[Object(y.jsx)("defs",{children:Object(y.jsx)("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})}),Object(y.jsxs)("g",{class:"parallax",children:[Object(y.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:"#3C5487"}),Object(y.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:"#76C9BF"}),Object(y.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:"#EAD2FF"}),Object(y.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"8",fill:"#fff"})]})]})}),Object(y.jsxs)("div",{className:"hero2",children:[Object(y.jsx)("h1",{children:"MISSION"}),Object(y.jsxs)("p",{children:["OmniConnx is established to form a global healthcare community ",Object(y.jsx)("br",{})," through which crowdsourced knowledge will support each other in three main areas:"," "]}),Object(y.jsxs)("div",{className:"blurbs",children:[Object(y.jsxs)("div",{className:"blurb",children:[Object(y.jsx)("img",{className:"mentor",src:R}),Object(y.jsxs)("h2",{children:["Guided ",Object(y.jsx)("br",{})," Mentorship"]})]}),Object(y.jsxs)("div",{className:"blurb",children:[Object(y.jsx)("img",{className:"financial",src:J}),Object(y.jsxs)("h2",{children:["Financial ",Object(y.jsx)("br",{}),"Independence"]})]}),Object(y.jsxs)("div",{className:"blurb",children:[Object(y.jsx)("img",{className:"reviews",src:B}),Object(y.jsxs)("h2",{children:["Reliability of ",Object(y.jsx)("br",{}),"Reviews"]})]})]}),Object(y.jsx)("button",{children:"Learn More"})]}),Object(y.jsxs)("div",{className:"hero",children:[Object(y.jsx)("img",{className:"skills",src:_}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"SKILLS"}),Object(y.jsx)("h2",{children:" COMING SOON! "}),Object(y.jsxs)("p",{children:["Through the use of Skills Update, you will be able to ",Object(y.jsx)("br",{})," find and connect with professionals who share your skills"]}),Object(y.jsx)("button",{children:"Other Features"})]})]})]})},A=(s(112),s.p+"static/media/usericon.51d9af7d.png");function H(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var D=new(function(){function e(){Object(m.a)(this,e)}return Object(p.a)(e,[{key:"getSkills",value:function(){return v.a.get("http://localhost:8080/skill")}}]),e}());document.getElementById("selectSkill");var M=function(){var e=Object(x.c)((function(e){return e.logged})).user,t=Object(y.jsxs)("div",{className:"userProfile",children:[Object(y.jsx)("div",{className:"prof",children:Object(y.jsx)("h1",{children:"Profile"})}),Object(y.jsxs)("div",{className:"profmain",children:[Object(y.jsx)("img",{className:"usericon",src:A}),Object(y.jsxs)("div",{className:"profinfo",children:[Object(y.jsx)("h5",{children:function(){if(e){var t=JSON.parse(window.localStorage.getItem("USER_STATE"));return JSON.parse(t.logged.user).username}}()}),Object(y.jsx)("h5",{children:"Degree"}),Object(y.jsx)("h5",{children:"Gender"}),Object(y.jsx)("h5",{children:"Other"})]}),Object(y.jsx)("div",{className:"skill",children:Object(y.jsx)("div",{className:"skillcard",children:Object(y.jsx)("p",{children:"Skills Feature coming soon!"})})}),Object(y.jsx)("div",{className:"stat",children:Object(y.jsx)("div",{className:"statcard",children:Object(y.jsx)("p",{children:"User statistics under development"})})})]}),Object(y.jsx)("div",{className:"bio",children:Object(y.jsx)("div",{className:"biocard",children:Object(y.jsx)("p",{children:"Bio Area"})})}),Object(y.jsxs)("div",{className:"userposts",children:[Object(y.jsxs)("div",{className:"postinfo",children:[Object(y.jsx)("div",{className:"yourpost",children:Object(y.jsx)("h1",{children:"Your Posts"})}),Object(y.jsx)("div",{className:"newpost",children:Object(y.jsx)("button",{children:Object(y.jsxs)(i.b,{className:"createPost",to:"/makepost",children:[" ","+ Post"]})})})]}),Object(y.jsx)("div",{className:"noposts",children:Object(y.jsx)("div",{className:"nopostscard",children:Object(y.jsx)("p",{children:"Create your first post!"})})})]})]}),s=Object(y.jsxs)("div",{children:[Object(y.jsx)(r.a,{to:"/"}),"ERROR: Must be logged in to view this page"]});return e?t:s},G=(s(113),s.p,s.p,s.p,"http://localhost:8080/post"),W=new(function(){function e(){Object(m.a)(this,e)}return Object(p.a)(e,[{key:"submitPost",value:function(e,t,s,c){v.a.post("".concat(G,"/create"),{title:e,content:t,skills:s},{headers:{"x-access-token":c}}).then((function(e){"200"==e.status&&console.log("Post was successfully submitted")})).catch((function(e){console.log(e)}))}},{key:"updatePost",value:function(e,t,s,c,n){v.a.put("/update/"+c,{title:e,content:t,skills:n},{headers:{"x-access-token":s}}).then((function(e){"200"==e.status&&console.log("Post was successfully updated")})).catch((function(e){console.log(e)}))}},{key:"deletePost",value:function(e,t){v.a.delete(G+"/delete/"+e,{headers:{"x-access-token":t},data:e})}},{key:"getPosts",value:function(){return v.a.get(G)}}]),e}()),K="http://localhost:8080/",Y=new(function(){function e(){Object(m.a)(this,e)}return Object(p.a)(e,[{key:"getPublicContent",value:function(){return v.a.get(K+"all")}},{key:"getUserBoard",value:function(){return v.a.get(K+"user",{headers:H()})}},{key:"getUserID",value:function(e){return v.a.get(K+"user/"+e)}},{key:"updateUser",value:function(e,t,s,c){v.a.put("/update/"+c,{username:e,skills:t},{headers:{"x-access-token":s}}).then((function(e){"200"==e.status&&console.log("Post was successfully submitted")})).catch((function(e){console.log(e)}))}}]),e}());var z=function(){var e=Object(x.c)((function(e){return e.logged})).user,t=function(){if(e){var t=JSON.parse(window.localStorage.getItem("USER_STATE"));return JSON.parse(t.logged.user).accessToken}},s=Object(c.useState)(null),n=Object(l.a)(s,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){W.getPosts().then((function(e){var t=e.data,s=t.map((function(e){return Y.getUserID(e.author).then((function(t){e.username=t.data.username}))}));Promise.all(s).then((function(){return r(t)}))}))})),Object(y.jsxs)("div",{className:"posts",children:[Object(y.jsx)("h1",{children:"POSTS"}),t()&&Object(y.jsx)("button",{children:Object(y.jsxs)(i.b,{className:"createPost",to:"/createPost",children:[" ","+ Post"]})}),Object(y.jsx)("div",{style:{},children:Object(y.jsx)("div",{className:"displayPosts",children:a?a.map((function(e){for(var s="",c=0;c<e.skills.length;c++)s+=e.skills[c]+" ";return Object(y.jsx)("div",{className:"cards",children:Object(y.jsxs)("div",{className:"card",children:[Object(y.jsxs)("div",{className:"postName",children:[Object(y.jsx)("p",{children:e.username}),Object(y.jsx)("h4",{children:e.title})]}),Object(y.jsxs)("div",{className:"postBody",children:[Object(y.jsxs)("h5",{children:["Skill: ",s]}),Object(y.jsx)("p",{children:e.content})]}),Object(y.jsx)("input",{className:"button",type:"button",value:"Delete",onClick:function(){return W.deletePost(e._id,t())}})]})})})):"loading"})})]})},X=s(2);var $=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),s=t[0],n=t[1];return Object(c.useEffect)((function(){D.getSkills().then((function(e){n(e.data)}))})),Object(y.jsxs)("div",{className:"skills",children:[Object(y.jsx)("h1",{children:"SKILLS"}),Object(y.jsx)("div",{className:"displaySkills",children:s?s.map((function(e){return Object(y.jsx)("div",{className:"blurbs",children:Object(y.jsx)("div",{className:"postHead",children:Object(y.jsx)("h1",{children:e.skillName})})})})):"loading"})]})},q=(s(114),s(47));var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(X.a)(Object(X.a)({},e),{},{user:t.payload.user});default:return e}},V=s(49),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var s=t.payload,c=s.title,n=s.desc,a=s.image,i=s.tag1,r=s.tag2,l=s.tag3;return[].concat(Object(V.a)(e),[{title:c,desc:n,image:a,tag1:i,tag2:r,tag3:l}]);default:return e}};var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{show:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(X.a)(Object(X.a)({},e),{},{show:t.payload.show});default:return e}},te=Object(q.a)({posts:Z,logged:Q,show:ee}),se=s(70);s(115);var ce=function(){Object(x.c)((function(e){return e.logged})).user;var e=Object(r.g)(),t=Object(c.useState)([]),s=Object(l.a)(t,2),n=s[0],a=s[1],i=Object(se.a)({accept:"image/*",onDrop:function(e){a(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),o=(i.getRootProps,i.getInputProps,n.map((function(e){return Object(y.jsx)("div",{children:Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:e.preview,style:{width:200,height:200},alt:"preview"})})},e.name)})),Object(c.useState)(null)),j=Object(l.a)(o,2),u=j[0],d=j[1],b=Object(c.useState)({}),h=Object(l.a)(b,2),O=h[0],g=h[1],m=Object(c.useState)(""),p=Object(l.a)(m,2),f=p[0],v=p[1],N=Object(c.useState)(""),k=Object(l.a)(N,2),w=k[0],S=k[1],P=Object(c.useState)(""),C=Object(l.a)(P,2),T=(C[0],C[1],Object(c.useState)([])),I=Object(l.a)(T,2),E=I[0];I[1],Object(c.useEffect)((function(){D.getSkills().then((function(e){var t=e.data;d(t)}))}));var L=JSON.parse(window.localStorage.getItem("USER_STATE")).logged.user,U=JSON.parse(L).accessToken,R=function(){return u.map((function(e){return Object(y.jsxs)("div",{className:"showskill",children:[Object(y.jsx)("input",{type:"checkbox",id:e.skillName,onChange:function(){var t=Object(X.a)({},O);t[e.skillName]?t[e.skillName]=!t[e.skillName]:t[e.skillName]=!0,g(t)}}),Object(y.jsxs)("label",{for:e.skillName,children:[" ",e.skillName," "]})]})}))},J=function(){for(var e=[],t=0,s=Object.entries(O);t<s.length;t++){var c=Object(l.a)(s[t],2),n=c[0];c[1];e.push(n)}return e};return Object(y.jsx)("div",{className:"main",children:Object(y.jsxs)("form",{className:"form",children:[Object(y.jsx)("h1",{className:"title",children:"Create a post"}),Object(y.jsx)("input",{type:"text",placeholder:"Title...",className:"titleInput",onChange:function(e){v(e.target.value)}}),Object(y.jsx)("textarea",{type:"text",className:"text",placeholder:"Post Content",onChange:function(e){S(e.target.value)}}),Object(y.jsxs)("div",{className:"skills",children:[Object(y.jsx)("h3",{children:"Skills: "}),u?R():"loading",E.map((function(e){return{tag:e}}))]}),Object(y.jsxs)("div",{className:"button-bottoms",children:[Object(y.jsx)("button",{className:"button-hover",type:"submit",children:"Cancel"}),u?R():"loading",Object(y.jsx)("button",{className:"button-hover",value:"Submit",onClick:function(){!function(){e.push("/posts");var t=J(O);W.submitPost(f,w,t,U)}(),window.alert("Your post was successfully created.")},children:"Submit"})]})]})})},ne="USER_STATE",ae=function(){try{var e=localStorage.getItem(ne);if(null===e)return;return JSON.parse(e)}catch(t){return}}(),ie=Object(q.b)(te,ae);ie.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem(ne,t)}catch(s){console.log("Error saving data:"+s)}}(ie.getState())}));var re=function(){return Object(y.jsx)(x.a,{store:ie,children:Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(r.b,{component:I}),Object(y.jsxs)(r.d,{children:[Object(y.jsx)(r.b,{exact:!0,path:"/",component:F}),Object(y.jsx)(r.b,{path:"/prof",component:M}),Object(y.jsx)(r.b,{path:"/posts",component:z}),Object(y.jsx)(r.b,{path:"/createPost",component:ce}),Object(y.jsx)(r.b,{path:"/register",component:C}),Object(y.jsx)(r.b,{path:"/skill",component:$})]}),Object(y.jsx)(E,{})]})})},le=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,122)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(y.jsx)(i.a,{children:Object(y.jsx)(re,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),le()},76:function(e,t,s){},77:function(e,t,s){}},[[116,1,2]]]);
//# sourceMappingURL=main.7ab8b660.chunk.js.map