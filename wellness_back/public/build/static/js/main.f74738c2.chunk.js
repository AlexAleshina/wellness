(this.webpackJsonpwellness=this.webpackJsonpwellness||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},202:function(e,t,a){},215:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(71),c=a.n(l),s=(a(83),a(2)),o=a(4),i=a(6),u=a(5),m=a(7),d=(a(84),a(1)),p=(a(85),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainConteiner"},r.a.createElement("div",{className:"divForName"},r.a.createElement("h1",{className:"mainH1"},"FITNESS ACT")),r.a.createElement("div",null,r.a.createElement("div",{className:"started"},r.a.createElement(d.b,{to:"/signup"},"GET STARTED")),r.a.createElement("div",{className:"login"},r.a.createElement(d.b,{to:"/login"},"LOGIN"))))}}]),t}(n.Component)),h=a(10),E=a.n(h),f=(a(106),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("".concat("https://fitnessappwellness.herokuapp.com/","/places")).then((function(t){e.setState({isLoaded:!0,places:t.data.places})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.places;return t?r.a.createElement("div",null,"error: ",t.message):a?r.a.createElement("div",{className:"placeContainer"},n.map((function(e){return r.a.createElement(d.b,{to:"/workout/place/".concat(e._id)},r.a.createElement("div",{key:e._id},r.a.createElement("img",{className:"placeImg",src:e.img_url,alt:"place"})))}))):r.a.createElement("div",null,"loading...")}}]),t}(n.Component)),g=(a(107),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.placeId;E.a.get("".concat("https://fitnessappwellness.herokuapp.com/","/workout/").concat(t)).then((function(t){e.setState({isLoaded:!0,workout:t.data.workout})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.workout;return t?r.a.createElement("div",null,"error: ",t.message):a?r.a.createElement("div",{className:"workoutContainer"},r.a.createElement("div",{className:"flexForHeader"},r.a.createElement(d.b,{to:"/places"},r.a.createElement("img",{className:"icons",src:"/icons/back.png",alt:"back"})),r.a.createElement("h1",null,"WORKOUTS"),r.a.createElement("p",{className:"empty"},"Hi, You")),n.map((function(e){return r.a.createElement(d.b,{to:"/workout/".concat(e._id)},r.a.createElement("div",{className:"elemContainer",key:e._id},r.a.createElement("div",{className:"thumbnailContaner"},r.a.createElement("img",{className:"workoutImg",src:e.img_url,alt:"workout"}),r.a.createElement("span",null,e.duration)),r.a.createElement("div",{className:"nameContainer"},r.a.createElement("h2",null,e.workout_name),r.a.createElement("span",null,e.short_description)),r.a.createElement("div",null,r.a.createElement("img",{className:"icons",src:"/icons/forward.png",alt:"back"}))))}))):r.a.createElement("div",null,"loading...")}}]),t}(n.Component)),v=a(29);a(108);function b(e){return r.a.createElement("div",{className:"popup"},r.a.createElement("div",{className:"flexPopup"},r.a.createElement("a",{onClick:e.closePopup},r.a.createElement("img",{className:"icons",src:"/icons/back.png",alt:"back"})),r.a.createElement("h1",null,"Overview"),r.a.createElement("p",{className:"empty"})),r.a.createElement("img",{className:"ImgPopup",src:e.img_url}),r.a.createElement("div",{className:"flexPopup"},r.a.createElement("h2",null,e.exercise_name),r.a.createElement("div",null,r.a.createElement("h2",null,"Equipment"),r.a.createElement("p",null,e.equipment.join(", ")))),r.a.createElement("p",null,e.description),r.a.createElement(d.b,{className:"buttonPopup",to:"/start-exercise/".concat(e._id)},"Start"))}var N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[],showDiv:!1},a.handleClick=a.handleClick.bind(Object(v.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){this.setState({showDiv:e})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.workoutId;E.a.get("".concat("https://fitnessappwellness.herokuapp.com/","/workout/placeId/").concat(t)).then((function(t){e.setState({isLoaded:!0,workout:t.data})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"closePopup",value:function(){this.setState({showDiv:null})}},{key:"goBack",value:function(){this.props.history.goBack()}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,l=t.workout;return a?r.a.createElement("div",null,"error: ",a.message):n?r.a.createElement("div",null,r.a.createElement("div",{className:"flexForHeader"},r.a.createElement(d.b,{to:"#",onClick:function(){return e.goBack()}},r.a.createElement("img",{className:"icons",src:"/icons/back.png",alt:"back"})),r.a.createElement("div",{className:"nameforHeader"},r.a.createElement("h1",null,l.workout_name),r.a.createElement("span",{className:"exerciseSpan"},l.short_description)),r.a.createElement("p",{className:"empty"},"Hi, You")),r.a.createElement("div",{className:"paddingForExercises"},l.exercises.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",null,r.a.createElement("div",{className:"exerciseFlex",onClick:function(){return e.handleClick(t._id)},key:t._id},r.a.createElement("img",{className:"exerciseImg",src:t.img_url,alt:"exercise"}),r.a.createElement("p",{className:"exerciseP"},t.exercise_name),r.a.createElement("img",{className:"icons",src:"/icons/forward.png",alt:"back"}))),e.state.showDiv===t._id?r.a.createElement(b,Object.assign({},t,{closePopup:function(){return e.closePopup()}})):null)})))):r.a.createElement("div",null,"loading...")}}]),t}(n.Component),k=a(30),y=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e,a,n){return t.service.post("/signup",{email:e,password:a,firstName:n}).then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/loggedin").then((function(e){return e.data}))},this.login=function(e,a){return t.service.post("/login",{email:e,password:a}).then((function(e){return e.data}))},this.logout=function(){return t.service.post("/logout",{}).then((function(e){return e.data}))};var a=E.a.create({baseURL:"https://fitnessappwellness.herokuapp.com/",withCredentials:!0});this.service=a},w=(a(55),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password,l=t.firstName;a.service.signup(n,r,l).then((function(e){a.setState({email:"",password:"",firstName:""}),a.props.getUser(e)})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(k.a)({},n,r))},a.state={email:"",password:"",firstName:""},a.service=new y,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginContainer"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",{className:"loginLabel"},"Email:"),r.a.createElement("input",{className:"formInput",type:"text",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{className:"loginLabel"},"First Name:"),r.a.createElement("input",{className:"formInput",name:"firstName",value:this.state.firstName,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{className:"loginLabel"},"Password:"),r.a.createElement("input",{className:"formInput",type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{className:"button",type:"submit",value:"Signup"})),r.a.createElement("span",{className:"loginspan"},"Already have account? ",r.a.createElement(d.b,{to:"/login"}," Login")))}}]),t}(n.Component)),x=a(16),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.email,n=a.state.password;a.service.login(t,n).then((function(e){a.setState({email:"",password:""}),a.props.getUser(e)})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(k.a)({},n,r))},a.state={email:"",password:""},a.service=new y,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginContainer"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",{className:"loginLabel"},"Email:"),r.a.createElement("input",{className:"formInput",type:"text",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{className:"loginLabel"},"Password:"),r.a.createElement("input",{className:"formInput",type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{className:"button",type:"submit",value:"Login"})),r.a.createElement("span",{className:"loginspan"},"Don't have account?  ",r.a.createElement(d.b,{to:"/signup"}," Sign up")))}}]),t}(n.Component),O=(a(109),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footerContainer"},r.a.createElement(d.b,{to:"/stats"},r.a.createElement("div",{className:"footerElementContainer"},r.a.createElement("img",{className:"footerImg",src:"/footer/stat.png",alt:"workouts"}),r.a.createElement("p",{className:"elementP"},"Statistic"))),r.a.createElement(d.b,{to:"/places"},r.a.createElement("div",{className:"footerElementContainer"},r.a.createElement("img",{className:"footerImg",src:"/footer/workout.png",alt:"workouts"}),r.a.createElement("p",{className:"elementP"},"Workouts"))),r.a.createElement(d.b,{onClick:this.props.logout},r.a.createElement("div",{className:"footerElementContainer"},r.a.createElement("img",{className:"footerImg",src:"/footer/logout.png",alt:"logout"}),r.a.createElement("p",{className:"elementP"},"Log out "))))}}]),t}(n.Component)),j=a(74),S=function(){return n.createElement(j.a,{seconds:0,minutes:0,hours:0,limit:"00:59:00",onChange:function(e){e.hours,e.minutes,e.seconds},onCallback:function(){return console.log("Finish")},render:function(e){var t=e.formatted;e.hours,e.minutes,e.seconds;return n.createElement("div",null,n.createElement("p",null,t))}})},I=(a(110),a(76));a(202);function L(e){var t={labels:e.xAxis,datasets:[{label:e.exercise_name,fill:!0,lineTension:.1,backgroundColor:"rgba(255, 59, 1, 0.3)",borderColor:"rgba(255, 59, 1, 1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(255, 59, 1, 0.8)",pointBackgroundColor:"#fff",pointBorderWidth:3,pointHoverRadius:10,pointHoverBackgroundColor:"rgba(255, 59, 1, 0.8)",pointHoverBorderColor:"rgba(255, 90, 1, 0.8)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e.yAxis}]};return r.a.createElement(I.a,{data:t})}var P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={data:null,isLoaded:!1,chosenExercise:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onExerciseChanged",value:function(e){this.setState({chosenExercise:e.target.value})}},{key:"render",value:function(){var e=this;if(this.state.isLoaded){return r.a.createElement("div",{className:"mainContainerChart"},r.a.createElement("div",{className:"flexChart"},r.a.createElement("h1",null,"YOUR PROGRESS"),r.a.createElement("form",null,r.a.createElement("select",{className:"listOfExercises",onChange:function(t){return e.onExerciseChanged(t)}},this.state.data.map((function(e){return r.a.createElement("option",{key:e.exerciseId,value:e.exerciseId},e.exercise_name)}))))),r.a.createElement("div",{className:"chart"},function(){if(e.state.chosenExercise){var t=[],a=[],n=e.state.data.find((function(t){return t.exerciseId===e.state.chosenExercise})),l=!0,c=!1,s=void 0;try{for(var o,i=n.values[Symbol.iterator]();!(l=(o=i.next()).done);l=!0){var u=o.value;a.push(new Date(u.creationTime).toDateString()),t.push(u.value)}}catch(m){c=!0,s=m}finally{try{l||null==i.return||i.return()}finally{if(c)throw s}}return r.a.createElement(L,{xAxis:a,yAxis:t,exercise_name:n.exercise_name})}}()))}return r.a.createElement("h1",null,"Loading...")}},{key:"componentDidMount",value:function(){var e=this;E.a.get("".concat("https://fitnessappwellness.herokuapp.com/","/results/available"),{withCredentials:!0}).then((function(t){e.setState({data:t.data,isLoaded:!0,chosenExercise:t.data.length>0?t.data[0].exerciseId:null})}))}}]),t}(n.Component),_=(a(203),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={data:null,isLoaded:!1,error:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"getExerciseId",value:function(){return this.props.match.params.id}},{key:"componentDidMount",value:function(){var e=this;E.a.get("".concat("https://fitnessappwellness.herokuapp.com/","/exercises/").concat(this.getExerciseId()),{withCredentials:!0}).then((function(t){e.setState({isLoaded:!0,data:t.data})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"submit",value:function(e){var t=this;e.preventDefault();for(var a=e.target,n=[],r=1;r<a.length;r+=3)a[r+2].checked&&n.push({weight:parseInt(a[r+0].value)||0,reps:parseInt(a[r+1].value)||0});var l={exerciseId:this.getExerciseId(),duration:1,sets:n};E.a.post("".concat("https://fitnessappwellness.herokuapp.com/","/results/save"),l,{withCredentials:!0}).then((function(e){console.log("Success: ".concat(JSON.stringify(e))),t.props.history.goBack()}),(function(e){console.log("Error: ".concat(JSON.stringify(e)))}))}},{key:"isNumberKey",value:function(e){var t=e.which?e.which:e.keyCode;t>31&&(t<48||t>57)&&e.preventDefault()}},{key:"render",value:function(){var e=this;return this.state.isLoaded?this.state.error?r.a.createElement("h1",null,"ERROR: ",this.state.error):r.a.createElement("div",{className:"startContainer"},r.a.createElement("img",{className:"startImg",src:this.state.data.img_url,alt:"photo of exercise"}),r.a.createElement("div",null,r.a.createElement("p",{className:"watchColor"},r.a.createElement(S,null)),r.a.createElement("p",{className:"duration"},"Duration")),r.a.createElement("form",{className:"formStart",onSubmit:function(t){return e.submit(t)}},r.a.createElement("button",{className:"submit",type:"submit"},"Finish"),r.a.createElement("table",{className:"startTable"},r.a.createElement("th",null,"Set"),r.a.createElement("th",null,"Weight"),r.a.createElement("th",null,"Reps"),r.a.createElement("th",null,"done"),r.a.createElement("tr",null,r.a.createElement("td",null,"1"),r.a.createElement("td",null,r.a.createElement("input",{placeholder:"0",type:"text",name:"weight",onKeyPress:this.isNumberKey})),r.a.createElement("td",null,r.a.createElement("input",{placeholder:"0",type:"text",name:"Reps",onKeyPress:this.isNumberKey})),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",className:"checkRound",name:"done"}))),r.a.createElement("tr",null,r.a.createElement("td",null,"2"),r.a.createElement("td",null,r.a.createElement("input",{placeholder:"0",type:"text",name:"weight",onKeyPress:this.isNumberKey})),r.a.createElement("td",null,r.a.createElement("input",{placeholder:"0",type:"text",name:"Reps",onKeyPress:this.isNumberKey})),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",className:"checkRound",name:"done"}))),r.a.createElement("tr",null,r.a.createElement("td",null,"3"),r.a.createElement("td",null,r.a.createElement("input",{placeholder:"0",type:"text",name:"weight",onKeyPress:this.isNumberKey})),r.a.createElement("td",null,r.a.createElement("input",{placeholder:"0",type:"text",name:"Reps",onKeyPress:this.isNumberKey})),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",className:"checkRound",name:"done"}))),r.a.createElement("tr",null,r.a.createElement("td",null,"4"),r.a.createElement("td",null,r.a.createElement("input",{placeholder:"0",type:"text",name:"weight",onKeyPress:this.isNumberKey})),r.a.createElement("td",null,r.a.createElement("input",{placeholder:"0",type:"text",name:"Reps",onKeyPress:this.isNumberKey})),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",className:"checkRound",name:"done"})))))):r.a.createElement("h1",null,"LOADING...")}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getTheUser=function(e){a.setState({loggedInUser:e})},a.logout=function(){a.service.logout(),a.setState({loggedInUser:!1})},a.state={loggedInUser:null},a.service=new y,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then((function(t){e.setState({loggedInUser:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"render",value:function(){var e=this;return this.fetchUser(),null===this.state.loggedInUser?r.a.createElement("p",null,"Loading..."):this.state.loggedInUser?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"mainContent"},r.a.createElement(x.d,null,r.a.createElement(x.b,{exact:!0,path:"/places",component:f}),r.a.createElement(x.b,{exact:!0,path:"/workout/place/:placeId",component:g}),r.a.createElement(x.b,{exact:!0,path:"/workout/:workoutId",component:N}),r.a.createElement(x.b,{exact:!0,path:"/start-exercise/:id",component:_}),r.a.createElement(x.b,{exact:!0,path:"/stats",render:function(){return r.a.createElement(P,{exerciseId:"5db17f019788334dfc3bcc0e"})}}),r.a.createElement(x.a,{path:"*",to:"/places"}))),r.a.createElement("div",{className:"footer"},r.a.createElement(O,{logout:this.logout}))):r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"mainContent"},r.a.createElement(x.d,null,r.a.createElement(x.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(w,{getUser:e.getTheUser})}}),r.a.createElement(x.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(C,{getUser:e.getTheUser})}}),r.a.createElement(x.b,{exact:!0,path:"/",component:p}),r.a.createElement(x.a,{path:"*",to:"/"}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d.a,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,t,a){},78:function(e,t,a){e.exports=a(215)},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.f74738c2.chunk.js.map