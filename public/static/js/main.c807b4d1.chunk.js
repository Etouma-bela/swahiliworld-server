(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,a){},33:function(e,t,a){e.exports=a(69)},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),o=a.n(r),c=a(1),i=a(2),s=a(3),m=a(5),u=a(4),d=a(13),h=a.n(d),p=h.a.create({baseURL:"https://swahili-world.herokuapp.com",withCredentials:!0});function v(e){if(e.response.data)throw console.log(e.response&&e.response.data),e;throw e}var g={service:p,signup:function(e){return p.post("/api/auth/signup",e).then((function(e){return e.data})).catch(v)},signin:function(e){return p.post("/api/auth/signin",e).then((function(e){return e.data})).catch(v)},isLoggedIn:function(){return p.get("/api/auth/isLoggedIn").then((function(e){return e.data})).catch(v)},logout:function(){return p.get("/api/auth/logout").then((function(e){return e.data})).catch(v)},getVideos:function(){return p.get("/api/video").then((function(e){return e.data})).catch(v)},getVideo:function(e){return p.get("/api/video/"+e).then((function(e){return e.data})).catch(v)},addVideo:function(e){return p.post("api/video",e).then((function(e){return e.data})).catch(v)},updateVideo:function(e,t){return p.patch("api/video/".concat(e),t).then((function(e){return e.data})).catch(v)},removeVideo:function(e){return p.delete("api/video/".concat(e)).then((function(e){return e.data})).catch(v)},addFavoriteVideo:function(e){return p.patch("/api/users/me/videos",e).then((function(e){return e.data})).catch(v)}},E=l.a.createContext(),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={user:null,isLoggedIn:!1,isLoading:!0},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e.removeUser=function(){e.setState({user:null,isLoggedIn:!1})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.isLoggedIn().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){e.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return l.a.createElement(E.Provider,{value:e},this.props.children)}}]),a}(n.Component),b=a(6),y=function(e){return function(t){return l.a.createElement(E.Consumer,null,(function(a){return l.a.createElement(e,Object.assign({},t,{context:a}))}))}},N=(a(56),y((function(e){var t=e.context;return l.a.createElement("nav",{className:"NavMain"},l.a.createElement(c.c,{exact:!0,to:"/"},l.a.createElement("img",{src:"https://img.icons8.com/cute-clipart/64/000000/home.png",alt:""})),l.a.createElement("ul",{className:"nav-list"},t.isLoggedIn&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(c.c,{to:"/videos"},"Our Videos")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/profile"},"My Account")),l.a.createElement(c.c,{to:"/"},l.a.createElement("li",null,l.a.createElement("p",{onClick:function(){g.logout().then((function(){t.removeUser()})).catch((function(e){console.log(e)}))}},"Logout")))),!t.isLoggedIn&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(c.c,{to:"/signin"},"Log in")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/signup"},"Create account")))))}))),C=(a(62),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement("div",{className:"header"},l.a.createElement("h1",{className:"header__title"},"Swahili World")),l.a.createElement("section",{className:"belly"},l.a.createElement("div",{className:"belly__item"},l.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2016/03/31/19/56/antenna-1295400_1280.png",alt:"",className:"belly__item__img"}),l.a.createElement("div",{className:"belly__item__text"},l.a.createElement(c.b,{to:"/videos"},l.a.createElement("h2",{className:"belly__item__tile"},"Click here")),l.a.createElement("h3",{className:"belly__item__subtitle"},"To Discover"),l.a.createElement("p",{className:"belly__item__subtitle"},"Our Content"))),l.a.createElement("div",{className:"belly__item"},l.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2020/10/11/22/47/kids-5647233_1280.png",alt:"",className:"belly__item__img"}),l.a.createElement("div",{className:"belly__item__text"},l.a.createElement(c.b,{to:"/about"},l.a.createElement("h2",{className:"belly__item__tile"},"Learn")),l.a.createElement("h3",{className:"belly__item__subtitle"},"More About Us"),l.a.createElement("p",{className:"belly__item__subtitle"},"And Kiswahili ")))))}}]),a}(l.a.Component)),k=a(12),w=(a(16),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:""},e.handleChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(k.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault(),g.signin(e.state).then((function(t){e.context.setUser(t),e.props.history.push("/")})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return this.context.user?l.a.createElement(b.a,{to:"/"}):l.a.createElement("div",{className:"signup-form"},l.a.createElement("h1",{className:"title-form"},"Log in"),l.a.createElement("p",{className:"paragraphe-form"},"Discover Kiswahili!"),l.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{onChange:this.handleChange,type:"email",id:"email",name:"email"})),l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{onChange:this.handleChange,type:"password",id:"password",name:"password"})),l.a.createElement("button",{className:"btn-form"},"Submit"))))}}]),a}(n.Component));w.contextType=E;var O=Object(b.g)(w),j=function(e){return l.a.createElement(O,null)},_=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={username:"",email:"",password:"",country:"",profilePic:""},e.handleChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(k.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),g.signup(e.state).then((function(t){e.context.setUser(t)})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return this.context.user?l.a.createElement(b.a,{to:"/"}):l.a.createElement("div",{className:"signup-form"},l.a.createElement("h1",{className:"title-form"},"Sign Up For Free."),l.a.createElement("p",{className:"paragraphe-form"},"Have Fun in Kiswahili!"),l.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{onChange:this.handleChange,value:this.state.username,type:"text",id:"username",name:"username"})),l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{onChange:this.handleChange,value:this.state.email,type:"email",id:"email",name:"email"})),l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{onChange:this.handleChange,value:this.state.password,type:"password",id:"password",name:"password"})),l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:"country"},"Country"),l.a.createElement("input",{onChange:this.handleChange,value:this.state.country,type:"text",id:"country",name:"country"}))),l.a.createElement("button",{className:"btn-form"},"Submit")))}}]),a}(n.Component);_.contextType=E;var S=Object(b.g)(_),x=function(e){return l.a.createElement(S,null)},L=a(32),U=y((function(e){var t=e.component,a=e.context,n=Object(L.a)(e,["component","context"]);return a.isLoading?l.a.createElement("div",{style:{display:"flex",justifyItems:"center",alignContent:"center",height:"100vh",width:"100vw"}},l.a.createElement("h1",null,"Chargement ...")):a.isLoggedIn?l.a.createElement(b.b,Object.assign({},n,{render:function(e){return l.a.createElement(t,e)}})):l.a.createElement(b.a,{to:"/signin"})})),F=(a(63),y(function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={videos:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://swahili-world.herokuapp.com/api/users/myvideos",{withCredentials:!0}).then((function(t){console.log("helloooooo",t),e.setState({videos:t.data[0].favoriteVideos})}))}},{key:"render",value:function(){this.props.context.user.role;var e=this.state.videos;return console.log(e),console.log(this.props.context.user.role),l.a.createElement("div",null," ",l.a.createElement("h1",null," ","Hello ",this.props.context.user.username," and welcome to Swahili world!")," ",l.a.createElement("hr",null),l.a.createElement("h1",null,"My Favorite Videos"),e.map((function(e){return l.a.createElement("div",{key:e._id},l.a.createElement("iframe",{id:"videoProject",src:e.videoUrl}),l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.category)," ",l.a.createElement("br",null),l.a.createElement("p",null,e.description))})),l.a.createElement(c.b,{to:"/videos"},l.a.createElement("button",{className:"learn-more"},"Watch Our Videos")))}}]),a}(n.Component))),A=(a(64),y(function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={videos:[],checkedSong:!1,checkedTales:!1,checkedEducation:!1},e.handleDelete=function(t){h.a.delete("https://swahili-world.herokuapp.com"+"/api/video/".concat(t)).then((function(a){e.setState({videos:e.state.videos.filter((function(e){return e._id!==t}))})})).catch((function(e){console.log(e)}))},e.handlefavoriteVideo=function(e){console.log(e),g.addFavoriteVideo({id:e}).then((function(e){console.log("response api:",e)}))},e.handleCheck=function(t){console.log(t.target.checked),"song"===t.target.name?e.setState({checkedSong:t.target.checked}):"tales"===t.target.name?e.setState({checkedTales:t.target.checked}):"education"===t.target.name&&e.setState({checkedEducation:t.target.checked}),console.log(e.state)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://swahili-world.herokuapp.com/api/video").then((function(t){console.log("helloooooo",t),e.setState({videos:t.data})}))}},{key:"render",value:function(){var e,t=this;console.log(this.state.videos);var a=this.state.videos.filter((function(e){var a=!1;return t.state.checkedSong&&"song"===e.category&&(a=!0),t.state.checkedTales&&"tales"===e.category&&(a=!0),t.state.checkedEducation&&"education"===e.category&&(a=!0),t.state.checkedEducation||t.state.checkedSong||t.state.checkedTales||(a=!0),a}));return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("input",{className:"input-category",type:"checkbox",name:"song",onChange:this.handleCheck}),l.a.createElement("label",{className:"label-category",htmlFor:""},"song"),l.a.createElement("input",{type:"checkbox",name:"tales",onChange:this.handleCheck}),l.a.createElement("label",{htmlFor:""},"Tales"),l.a.createElement("input",{type:"checkbox",name:"education",onChange:this.handleCheck}),l.a.createElement("label",{htmlFor:""},"Education")),l.a.createElement("hr",null),l.a.createElement("h1",{className:"main-title"},"OUR PROGRAMMES"),l.a.createElement("div",{id:"grid-container"},a.map((function(e){var a,n;return l.a.createElement("div",{key:e._id,className:"grid-item"},l.a.createElement("div",{className:"video-wrapper"},l.a.createElement("iframe",{id:"videoProject",src:e.videoUrl})),l.a.createElement("h3",null,e.title),"admin"===(null===(a=t.props.context.user)||void 0===a?void 0:a.role)&&l.a.createElement("div",null,l.a.createElement(c.b,{to:"/videos/".concat(e._id,"/edit")},l.a.createElement("button",null,"Edit"))),l.a.createElement(c.b,{to:"/videos/".concat(e._id,"/details")},l.a.createElement("button",null,"See details")),"admin"===(null===(n=t.props.context.user)||void 0===n?void 0:n.role)&&l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return t.handleDelete(e._id)}},"Delete")),t.props.context.isLoggedIn&&l.a.createElement("div",null,l.a.createElement(c.b,{to:"/profile"},l.a.createElement("button",{onClick:function(){return t.handlefavoriteVideo(e._id)}},"Add to my account"))))}))),"admin"===(null===(e=this.props.context.user)||void 0===e?void 0:e.role)&&l.a.createElement("div",{className:"create-cat"},l.a.createElement(c.b,{to:"/videos/create"},l.a.createElement("button",null,"Create a new video"))))}}]),a}(n.Component))),V=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:"",videoUrl:"",description:"",vocabulary:"",category:""},e.handleChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(k.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault(),g.addVideo({title:e.state.title,videoUrl:e.state.videoUrl,description:e.state.description,vocabulary:e.state.vocabulary,category:e.state.category}).then((function(t){console.log(t),e.props.history.push("/videos")})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"signup-form"},l.a.createElement("h1",{className:"title-form"},"Add a New Video"),l.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:""},"Title"),l.a.createElement("input",{onChange:this.handleChange,type:"text",name:"title",placeholder:"video title"})),l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:""},"Add video link"),l.a.createElement("input",{onChange:this.handleChange,type:"url",name:"videoUrl",placeholder:"https://example.com"})),l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:""},"Select a category:"),l.a.createElement("select",{value:this.state.value,onChange:this.handleChange,name:"category"},l.a.createElement("option",{value:"song"},"song"),l.a.createElement("option",{value:"tales"},"tale"),l.a.createElement("option",{value:"education"},"education"))),l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:""},"Description"),l.a.createElement("textarea",{onChange:this.handleChange,name:"description",placeholder:"Tell us something about this video",value:this.state.description})),l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:""},"Vocabulary"),l.a.createElement("textarea",{onChange:this.handleChange,name:"vocabulary",placeholder:"Add vocabulary helper",value:this.state.vocabulary}))),l.a.createElement("button",{className:"btn-form"},"Submit !")))}}]),a}(n.Component),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:"",videoUrl:"",description:"",vocabulary:"",category:""},e.handleChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(k.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault();var a=e.props.match.params.id;g.updateVideo(a,e.state).then((function(t){console.log(t),e.props.history.push("/videos")})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log("videoId",t),g.getVideo(t).then((function(t){var a=t;console.log("video is",a),e.setState({title:a.title,videoUrl:a.videoUrl,description:a.description,vocabulary:a.vocabulary,category:a.category})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"signup-form"},l.a.createElement("h1",{className:"title-form"},"Edit New Video"),l.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:""},"title"),l.a.createElement("input",{onChange:this.handleChange,value:this.state.title,type:"text",name:"title",placeholder:"video title"})),l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:""},"add video link"),l.a.createElement("input",{onChange:this.handleChange,value:this.state.videoUrl,type:"url",name:"videoUrl",placeholder:"https://example.com"})),l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:""},"Select a category:"),l.a.createElement("select",{value:this.state.value,onChange:this.handleChange,name:"category"},l.a.createElement("option",{value:"song"},"song"),l.a.createElement("option",{value:"tales"},"tale"),l.a.createElement("option",{value:"education"},"education"))),l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:""},"description"),l.a.createElement("textarea",{onChange:this.handleChange,name:"description",placeholder:"Tell us something about this video",value:this.state.description})),l.a.createElement("div",{className:"form-group-item"},l.a.createElement("label",{htmlFor:""},"vocabulary"),l.a.createElement("textarea",{onChange:this.handleChange,name:"vocabulary",placeholder:"Add vocabulary helper",value:this.state.vocabulary}))),l.a.createElement("button",{className:"btn-form"},"Submit !")))}}]),a}(n.Component),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={likes:0},e.handleLike=function(){e.setState({likes:e.state.likes+1})},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("button",{onClick:this.handleLike},this.state.likes," Likes")}}]),a}(n.Component),M=(a(65),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:"",videoUrl:"",description:"",vocabulary:"",category:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log("videoId",t),g.getVideo(t).then((function(t){var a=t;console.log("video is",a),e.setState({title:a.title,videoUrl:a.videoUrl,description:a.description,vocabulary:a.vocabulary,category:a.category})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"grid-item"},l.a.createElement("div",{className:"video-wrapper"},l.a.createElement("iframe",{id:"oneVideo",src:this.state.videoUrl})),l.a.createElement("h1",null,this.state.title),l.a.createElement("p",null,this.state.category)," ",l.a.createElement("br",null),l.a.createElement("p",null,this.state.description)," ",l.a.createElement("br",null),l.a.createElement("p",null,this.state.vocabulary),l.a.createElement(D,null))}}]),a}(n.Component)),T=(a(66),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"about-body"},l.a.createElement("div",{className:"about-img"},l.a.createElement("img",{className:"children-duo",src:"https://www.pinclipart.com/picdir/big/527-5274829_crown-afro-baby-clipart-clip-black-and-white.png",alt:""})),l.a.createElement("div",{className:"text-about"},l.a.createElement("h1",null,"About Swahili World"),l.a.createElement("div",{className:"paragraphe-about"},"Watch the Best and Most Popular Stories in Swahili. ",l.a.createElement("br",null),"Are you familiar with some Swahili words or phrases like Jambo and Hakuna Matata? Now, learn how East-African ACTUALLY speak! I'd like to show you how to learn Swahili."))))}}]),a}(n.Component));var P=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement(b.d,null,l.a.createElement(b.b,{exact:!0,path:"/",component:C}),l.a.createElement(b.b,{exact:!0,path:"/signin",component:j}),l.a.createElement(b.b,{exact:!0,path:"/signup",component:x}),l.a.createElement(b.b,{exact:!0,path:"/videos",component:A}),l.a.createElement(b.b,{exact:!0,path:"/videos/create",component:V}),l.a.createElement(b.b,{exact:!0,path:"/videos/:id/edit",component:I}),l.a.createElement(b.b,{exact:!0,path:"/videos/:id/details",component:M}),l.a.createElement(b.b,{exact:!0,path:"/about",component:T}),l.a.createElement(U,{exact:!0,path:"/profile",component:F})))};a(67),a(68);o.a.render(l.a.createElement(c.a,null,l.a.createElement(f,null,l.a.createElement(P,null))),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c807b4d1.chunk.js.map