(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{344:function(e,t,a){e.exports=a(691)},350:function(e,t,a){},691:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),o=(a(349),a(350),a(6)),s=a(698),i=a(123),u=a(121),m=a(79),d=a(341),E=a(696),p=function(e){var t=Object(n.useState)(e),a=Object(d.a)(t,2),r=a[0],c=a[1];return{resetFields:function(){c(e)},values:r,setValues:c,handleInputChange:function(e){var t=e.target,a=t.name,n=t.value;c(Object(m.a)({},r,Object(u.a)({},a,n)))}}},f=function(e){var t=e.children,a=Object(i.a)(e,["children"]);return r.a.createElement(E.a,Object.assign({className:"container mt-4",autoComplete:"off"},a),t)},b={Input:function(e){var t=e.label,a=e.name,n=e.value,c=e.type,l=e.placeholder,o=e.onChange;return r.a.createElement(E.a.Group,{className:"mt-4"},r.a.createElement(E.a.Label,null,t),r.a.createElement(E.a.Control,{name:a,value:n,type:c||"email",placeholder:l,onChange:o}))}},h=a(8),g={email:"",password:""};var v=function(){var e=p(g),t=e.values,a=e.handleInputChange,n=Object(h.b)(),c=Object(h.c)((function(e){return e.firebase.auth})).uid,l=t.email,i=t.password;return c?r.a.createElement(o.a,{to:"/"}):r.a.createElement(f,{onSubmit:function(e){var a;e.preventDefault(),n((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"SIGN_IN"})})).catch((function(t){e({type:"SIGN_IN_ERROR",err:t})}))}))}},r.a.createElement("h1",null,"Signin"),r.a.createElement(b.Input,{label:"Email Address",name:"email",value:l,placeholder:"Enter Email Address",onChange:a}),r.a.createElement(b.Input,{label:"Password",name:"password",type:"password",value:i,placeholder:"Enter Password",onChange:a}),r.a.createElement(s.a,{variant:"primary",type:"submit"},"Signin"))},O={email:"",password:""};var k=function(){var e=p(O),t=e.values,a=e.handleInputChange,n=Object(h.b)(),c=Object(h.c)((function(e){return e.firebase.auth})).uid,l=t.email,i=t.password;return c?r.a.createElement(o.a,{to:"/"}):r.a.createElement(f,{onSubmit:function(e){var a;e.preventDefault(),n((a=t,function(e,t,n){(0,n.getFirebase)().auth().createUserWithEmailAndPassword(a.email,a.password).then((function(){e({type:"SIGN_UP"})})).catch((function(t){e({type:"SIGN_UP_ERROR",err:t})}))}))}},r.a.createElement("h1",null,"Signup"),r.a.createElement(b.Input,{label:"Email Address",name:"email",value:l,placeholder:"Enter Email Address",onChange:a}),r.a.createElement(b.Input,{label:"Password",name:"password",type:"password",value:i,placeholder:"Enter Password",onChange:a}),r.a.createElement("div",{className:"d-flex"},r.a.createElement(s.a,{variant:"primary",type:"submit",className:"mr-2"},"Signup"),r.a.createElement(s.a,{variant:"primary",type:"submit",className:"ml-2"},"Sign-up with Google")))},R={task:""},y=function(){var e=Object(h.b)(),t=p(R),a=t.values,n=t.handleInputChange,c=t.resetFields,l=a.task;return r.a.createElement(f,{onSubmit:function(t){t.preventDefault(),e(function(e){return function(t,a,n){(0,n.getFirebase)().firestore().collection("tasks").add(Object(m.a)({},e,{date:new Date,isDone:!1})).then((function(){t({type:"ADD_TASK",task:e})})).catch((function(e){t({type:"ADD_TASK_ERROR",err:e})}))}}(a)),c()}},r.a.createElement("h1",null,"Add Task"),r.a.createElement(b.Input,{label:"Add Task",name:"task",value:l,placeholder:"Enter Some Task",onChange:n,type:"text"}),r.a.createElement(s.a,{variant:"primary",type:"submit"},"Add Task"))},S=a(695),_=a(25),N=a(334),I=a.n(N),A=function(e){var t=e.isDone,a=e.onClick;return t?r.a.createElement("span",{className:"material-icons text-success",style:{cursor:"pointer"},onClick:a},"check_circle_outline"):r.a.createElement("span",{className:"material-icons text-muted",style:{cursor:"pointer"},onClick:a},"check_circle_outline")},C=function(e){var t=e.title,a=e.date,n=e.onClick,c=e.onToggle,l=e.isDone,o=Object(i.a)(e,["title","date","onClick","onToggle","isDone"]);return r.a.createElement("tr",o,r.a.createElement("th",null,t),r.a.createElement("td",null,I()(a.toDate()).calendar()),r.a.createElement("td",null,r.a.createElement(A,{onClick:c,isDone:l})),r.a.createElement("td",null,r.a.createElement("span",{className:"material-icons text-danger",style:{cursor:"pointer"},onClick:n},"delete")))},D=function(){Object(_.useFirestoreConnect)({collection:"tasks",orderBy:["date","desc"]});var e=Object(h.c)((function(e){return e.firestore.ordered.tasks})),t=Object(h.b)();return r.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",className:"container mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"text-info"},r.a.createElement("th",null,"Tasks"),r.a.createElement("th",null,"Added On"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,e&&e.length>0?e.map((function(e){return r.a.createElement(C,{title:e.task,date:e.date,onClick:function(){return t((a=e.id,function(e,t,n){(0,n.getFirebase)().firestore().collection("tasks").doc(a).delete().then((function(){e({type:"REMOVE_TASK"})})).catch((function(t){e({type:"REMOVE_TASK_ERROR",err:t})}))}));var a},onToggle:function(){return t(function(e){return function(t,a,n){(0,n.getFirebase)().firestore().collection("tasks").doc(e.id).set(Object(m.a)({},e,{isDone:!e.isDone}),{merge:!0}).then((function(){t({type:"TOGGLE_CHECKED"})})).catch((function(e){t({type:"TOGGLE_CHECKED_ERROR",err:e})}))}}(e))},key:e.id,isDone:e.isDone})})):r.a.createElement("tr",{className:"text-muted"},r.a.createElement("td",null,"No tasks added"),r.a.createElement("td",null,"No tasks added"),r.a.createElement("td",null,"No tasks added"),r.a.createElement("td",null,"No tasks added"))))};var w=function(){return Object(h.c)((function(e){return e.firebase.auth})).uid?r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(D,null)):r.a.createElement(o.a,{to:"/signin"})},j=a(20);var T=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.firebase.auth})),a=t.uid,n=t.email;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.b,{to:"/signin",className:"nav-link",onClick:function(){e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGN_OUT"})}))}))}},"Logout"),r.a.createElement("p",{className:"mt-3"},n)):r.a.createElement(r.a.Fragment,null,r.a.createElement(j.b,{to:"/signin",className:"nav-link"},"Signin"),r.a.createElement(j.b,{to:"/signup",className:"nav-link"},"Signup"))},G=a(697);var F=function(){return r.a.createElement(G.a,{className:"d-flex bg-light justify-content-center",bg:"light",variant:"light"},r.a.createElement(j.b,{to:"/",className:"navbar-brand"},r.a.createElement("h3",null,"Todo App")),r.a.createElement(T,null))};var P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:w}),r.a.createElement(o.b,{path:"/signin",component:v}),r.a.createElement(o.b,{path:"/signup",component:k})))},K=a(32),x=a(122),L=a(13),U={},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return L.b.success("\ud83d\ude04 Task Added"),e;case"ADD_TASK_ERROR":return L.b.error("An error occured"),e;case"REMOVE_TASK":return L.b.warn("\ud83d\ude0b Task Deleted Successfully"),e;case"REMOVE_TASK_ERROR":return L.b.error("An error occured"),e;case"TOGGLE_CHECKED":return L.b.info("\ud83d\ude07 Status Changed"),e;case"TOGGLE_CHECKED_ERROR":return L.b.error("An error occured"),e;default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return L.b.success("Welcome back...."),e;case"SIGN_IN_ERROR":return L.b.error("An error occured"),e;case"SIGN_OUT":return L.b.warn("You signed Out"),e;case"SIGN_UP":return L.b.success("Welcome"),e;case"SIGN_UP_ERROR":return L.b.error("Error Signup"),e;default:return e}},B=Object(K.combineReducers)({firebase:_.firebaseReducer,firestore:x.firestoreReducer,task:M,auth:V}),H=a(337),W=a(338),J=Object(K.createStore)(B,Object(W.composeWithDevTools)(Object(K.applyMiddleware)(H.a.withExtraArgument({getFirebase:_.getFirebase})))),z=a(81),X=a.n(z);a(681),a(684);X.a.initializeApp({apiKey:"AIzaSyBJD9La1oIGjI7dGF0EauVXVHMagPAw83A",authDomain:"todo-fefcf.firebaseapp.com",databaseURL:"https://todo-fefcf.firebaseio.com",projectId:"todo-fefcf",storageBucket:"todo-fefcf.appspot.com",messagingSenderId:"318353273091",appId:"1:318353273091:web:dbcb1ec185ba1118733936"}),X.a.firestore(),X.a.auth();var Y=X.a,q=(a(686),a(339)),Q=a.n(q),Z={firebase:Y,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:J.dispatch,createFirestoreInstance:x.createFirestoreInstance},$=function(e){var t=e.children,a=Object(h.c)((function(e){return e.firebase})).auth;return Object(_.isLoaded)(a)?t:r.a.createElement("div",null,r.a.createElement(Q.a,{loading:_.isLoaded,color:"#f56a79",width:"100%",height:"5"}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:J},r.a.createElement(_.ReactReduxFirebaseProvider,Z,r.a.createElement(j.a,null,r.a.createElement(L.a,{hideProgressBar:!0,autoClose:2e3,newestOnTop:!0,limit:1}),r.a.createElement($,null,r.a.createElement(P,null)))))),document.getElementById("root"))}},[[344,1,2]]]);
//# sourceMappingURL=main.9db69a5b.chunk.js.map