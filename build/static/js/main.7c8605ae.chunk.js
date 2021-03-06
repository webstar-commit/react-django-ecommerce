(this["webpackJsonpdjango-react-boilerplate"]=this["webpackJsonpdjango-react-boilerplate"]||[]).push([[0],{200:function(e,t,a){e.exports=a(358)},358:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),l=a.n(o),i=a(25),c=a(26),s=a(28),u=a(27),m=a(34),d=a(33),h=a(17),g=function(e){return e.children},p=a(63),f=a(379),E=a(380),v=a(371),b=a(381),y=a(377),w=a(376),k=a(45),S=a.n(k),C=function(e){return{type:"AUTH_SUCCESS",token:e}},O=function(e){return{type:"AUTH_FAIL",error:e}},T=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},I=function(e){return function(t){setTimeout((function(){t(T())}),1e3*e)}},A=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleChange=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;e.props.login(n,r)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.error,a=e.loading,n=e.token,o=this.state,l=o.username,i=o.password;return n?r.a.createElement(h.a,{to:"/"}):r.a.createElement(f.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle"},r.a.createElement(f.a.Column,{style:{maxWidth:450}},r.a.createElement(E.a,{as:"h2",color:"teal",textAlign:"center"},"Log-in to your account"),t&&r.a.createElement("p",null,this.props.error.message),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{size:"large",onSubmit:this.handleSubmit},r.a.createElement(b.a,{stacked:!0},r.a.createElement(v.a.Input,{onChange:this.handleChange,value:l,name:"username",fluid:!0,icon:"user",iconPosition:"left",placeholder:"Username"}),r.a.createElement(v.a.Input,{onChange:this.handleChange,fluid:!0,value:i,name:"password",icon:"lock",iconPosition:"left",placeholder:"Password",type:"password"}),r.a.createElement(y.a,{color:"teal",fluid:!0,size:"large",loading:a,disabled:a},"Login"))),r.a.createElement(w.a,null,"New to us? ",r.a.createElement(m.c,{to:"/signup"},"Sign Up")))))}}]),a}(r.a.Component),j=Object(d.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,token:e.auth.token}}),(function(e){return{login:function(t,a){return e(function(e,t){return function(a){a({type:"AUTH_START"}),S.a.post("http://127.0.0.1:8000/rest-auth/login/",{username:e,password:t}).then((function(e){var t=e.data.key,n=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",n),a(C(t)),a(I(3600))})).catch((function(e){a(O(e))}))}}(t,a))}}}))(A),L=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",email:"",password1:"",password2:""},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.email,o=a.password1,l=a.password2;e.props.signup(n,r,o,l)},e.handleChange=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.password1,o=e.password2,l=this.props,i=l.error,c=l.loading;return l.token?r.a.createElement(h.a,{to:"/"}):r.a.createElement(f.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle"},r.a.createElement(f.a.Column,{style:{maxWidth:450}},r.a.createElement(E.a,{as:"h2",color:"teal",textAlign:"center"},"Signup to your account"),i&&r.a.createElement("p",null,this.props.error.message),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{size:"large",onSubmit:this.handleSubmit},r.a.createElement(b.a,{stacked:!0},r.a.createElement(v.a.Input,{onChange:this.handleChange,value:t,name:"username",fluid:!0,icon:"user",iconPosition:"left",placeholder:"Username"}),r.a.createElement(v.a.Input,{onChange:this.handleChange,value:a,name:"email",fluid:!0,icon:"mail",iconPosition:"left",placeholder:"E-mail address"}),r.a.createElement(v.a.Input,{onChange:this.handleChange,fluid:!0,value:n,name:"password1",icon:"lock",iconPosition:"left",placeholder:"Password",type:"password"}),r.a.createElement(v.a.Input,{onChange:this.handleChange,fluid:!0,value:o,name:"password2",icon:"lock",iconPosition:"left",placeholder:"Confirm password",type:"password"}),r.a.createElement(y.a,{color:"teal",fluid:!0,size:"large",loading:c,disabled:c},"Signup"))),r.a.createElement(w.a,null,"Already have an account? ",r.a.createElement(m.c,{to:"/login"},"Login")))))}}]),a}(r.a.Component),x=Object(d.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,token:e.auth.token}}),(function(e){return{signup:function(t,a,n,r){return e(function(e,t,a,n){return function(r){r({type:"AUTH_START"}),S.a.post("http://127.0.0.1:8000/rest-auth/registration/",{username:e,email:t,password1:a,password2:n}).then((function(e){var t=e.data.key,a=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",a),r(C(t)),r(I(3600))})).catch((function(e){r(O(e))}))}}(t,a,n,r))}}}))(L),_=a(383),z=a(367),D=a(382),U=a(192),W=a(368),R=a(369),F=function(){return"undefined"===typeof window?_.a.onlyTablet.minWidth:window.innerWidth},M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.hideFixedMenu=function(){return e.setState({fixed:!1})},e.showFixedMenu=function(){return e.setState({fixed:!0})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.children;this.state.fixed;return r.a.createElement(_.a,{getWidth:F,minWidth:_.a.onlyTablet.minWidth},r.a.createElement(z.a,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu}),e)}}]),a}(n.Component),H=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleSidebarHide=function(){return e.setState({sidebarOpened:!1})},e.handleToggle=function(){return e.setState({sidebarOpened:!0})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.children;this.state.sidebarOpened;return r.a.createElement(_.a,{as:D.a.Pushable,getWidth:F,maxWidth:_.a.onlyMobile.maxWidth},e)}}]),a}(n.Component),P=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(M,null,t),r.a.createElement(H,null,t))},N=function(){return r.a.createElement(P,null,r.a.createElement(b.a,{style:{padding:"8em 0em"},vertical:!0},r.a.createElement(f.a,{container:!0,stackable:!0,verticalAlign:"middle"},r.a.createElement(f.a.Row,null,r.a.createElement(f.a.Column,{width:8},r.a.createElement(E.a,{as:"h3",style:{fontSize:"2em"}},"We Help Companies and Companions"),r.a.createElement("p",{style:{fontSize:"1.33em"}},"We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics."),r.a.createElement(E.a,{as:"h3",style:{fontSize:"2em"}},"We Make Bananas That Can Dance"),r.a.createElement("p",{style:{fontSize:"1.33em"}},"Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.")),r.a.createElement(f.a.Column,{floated:"right",width:6},r.a.createElement(U.a,{bordered:!0,rounded:!0,size:"large",src:"/images/wireframe/white-image.png"}))),r.a.createElement(f.a.Row,null,r.a.createElement(f.a.Column,{textAlign:"center"},r.a.createElement(y.a,{size:"huge"},"Check Them Out"))))),r.a.createElement(b.a,{style:{padding:"0em"},vertical:!0},r.a.createElement(f.a,{celled:"internally",columns:"equal",stackable:!0},r.a.createElement(f.a.Row,{textAlign:"center"},r.a.createElement(f.a.Column,{style:{paddingBottom:"5em",paddingTop:"5em"}},r.a.createElement(E.a,{as:"h3",style:{fontSize:"2em"}},'"What a Company"'),r.a.createElement("p",{style:{fontSize:"1.33em"}},"That is what they all say about us")),r.a.createElement(f.a.Column,{style:{paddingBottom:"5em",paddingTop:"5em"}},r.a.createElement(E.a,{as:"h3",style:{fontSize:"2em"}},'"I shouldn\'t have gone with their competitor."'),r.a.createElement("p",{style:{fontSize:"1.33em"}},r.a.createElement(U.a,{avatar:!0,src:"/images/avatar/large/nan.jpg"}),r.a.createElement("b",null,"Nan")," Chief Fun Officer Acme Toys"))))),r.a.createElement(b.a,{style:{padding:"8em 0em"},vertical:!0},r.a.createElement(W.a,{text:!0},r.a.createElement(E.a,{as:"h3",style:{fontSize:"2em"}},"Breaking The Grid, Grabs Your Attention"),r.a.createElement("p",{style:{fontSize:"1.33em"}},"Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention."),r.a.createElement(y.a,{as:"a",size:"large"},"Read More"),r.a.createElement(R.a,{as:"h4",className:"header",horizontal:!0,style:{margin:"3em 0em",textTransform:"uppercase"}},r.a.createElement("a",{href:"#"},"Case Studies")),r.a.createElement(E.a,{as:"h3",style:{fontSize:"2em"}},"Did We Tell You About Our Bananas?"),r.a.createElement("p",{style:{fontSize:"1.33em"}},"Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance."),r.a.createElement(y.a,{as:"a",size:"large"},"I'm Still Quite Interested"))))},B=a(375),G=a(370),Y=a(372),q=a(96),J=a(47),X="".concat("http://127.0.0.1:8000").concat("/api"),Q="".concat(X,"/product-list/"),V="".concat(X,"/add-to-cart/"),$="".concat(X,"/order-summary/"),K=S.a.create({baseURL:X,headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}),Z=function(){return function(e){e({type:"CART_START"}),K.get($).then((function(t){var a;e((a=t.data,console.log(a),{type:"CART_SUCCESS",data:a}))})).catch((function(t){e({type:"CART_FAIL",error:t})}))}},ee=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,error:null,data:[]},e.handleAddToCart=function(t){e.setState({loading:!0}),K.post(V,{slug:t}).then((function(t){console.log(t.data),e.setState({loading:!1})})).catch((function(t){e.setState({error:t,loading:!1})}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),S.a.get(Q).then((function(t){console.log(t.data),e.setState({data:t.data,loading:!1})})).catch((function(t){e.setState({error:t,loading:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.error,o=t.loading;return r.a.createElement(W.a,null,n&&r.a.createElement(w.a,{error:!0,header:"There was some errors with your submission",content:JSON.stringify(n)}),o&&r.a.createElement(b.a,null,r.a.createElement(B.a,{active:!0,inverted:!0},r.a.createElement(G.a,{inverted:!0},"Loading")),r.a.createElement(U.a,{src:"/images/wireframe/short-paragraph.png"})),r.a.createElement(Y.a.Group,{divided:!0},a.map((function(t){return r.a.createElement(Y.a,{key:t.id},r.a.createElement(Y.a.Image,{src:t.image}),r.a.createElement(Y.a.Content,null,r.a.createElement(Y.a.Header,{as:"a"},t.title),r.a.createElement(Y.a.Meta,null,r.a.createElement("span",{className:"cinema"},t.category)),r.a.createElement(Y.a.Description,null,t.description),r.a.createElement(Y.a.Extra,null,r.a.createElement(q.a,null,"IMAX"),r.a.createElement(q.a,{icon:"globe",content:"Additional Languages"}),r.a.createElement(y.a,{primary:!0,floated:"right",onClick:function(){return e.handleAddToCart(t.slug)}},"Add to Cart",r.a.createElement(J.a,{name:"right shopping bag"})),t.discount_price&&r.a.createElement(q.a,{color:"primary"===t.label?"blue":"secondary"===t.label?"green":"olive"},t.label))))}))))}}]),a}(r.a.Component),te=Object(d.b)(null,(function(e){return{fetchCart:function(){return e(Z())}}}))(ee),ae=function(){return r.a.createElement(g,null,r.a.createElement(h.b,{path:"/products",component:te}),r.a.createElement(h.b,{path:"/login",component:j}),r.a.createElement(h.b,{path:"/signup",component:x}),r.a.createElement(h.b,{exact:!0,path:"/",component:N}))},ne=(a(346),a(378)),re=a(373),oe=a(374),le=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchCart()}},{key:"render",value:function(){var e=this,t=this.props,a=t.authenticated,n=t.cart,o=t.loading;return console.log(n),r.a.createElement("div",null,r.a.createElement(ne.a,{inverted:!0},r.a.createElement(W.a,null,r.a.createElement(m.b,{to:"/"},r.a.createElement(ne.a.Item,{header:!0},"Home")),r.a.createElement(m.b,{to:"/products"},r.a.createElement(ne.a.Item,{header:!0},"Product")),r.a.createElement(ne.a.Menu,{inverted:!0,position:"right"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement(re.a,{icon:"cart",loading:o,text:"".concat(n&&n.order_items?n.order_items.length:0),pointing:!0,className:"link item"},r.a.createElement(re.a.Menu,null,n&&n.order_items&&n.order_items.map((function(e){return r.a.createElement(re.a.Item,{key:e.id},e.quantity," *",e.item)})),n&&n.order_items&&n.order_items.length<1?r.a.createElement(re.a.Item,null,"No items in your cart"):null,r.a.createElement(re.a.Divider,null),r.a.createElement(re.a.Header,null,"Header Item"),r.a.createElement(re.a.Item,null,r.a.createElement("i",{className:"dropdown icon"}),r.a.createElement("span",{className:"text"},"Submenu"),r.a.createElement(re.a.Menu,null,r.a.createElement(re.a.Item,null,"List Item"),r.a.createElement(re.a.Item,null,"List Item"))),r.a.createElement(re.a.Item,null,"List Item"))),r.a.createElement(ne.a.Item,{header:!0,onClick:function(){return e.props.logout()}},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(m.b,{to:"/login"},r.a.createElement(ne.a.Item,{header:!0},"Login")),r.a.createElement(m.b,{to:"/signup"},r.a.createElement(ne.a.Item,{header:!0},"Signup")))))),this.props.children,r.a.createElement(b.a,{inverted:!0,vertical:!0,style:{margin:"5em 0em 0em",padding:"5em 0em"}},r.a.createElement(W.a,{textAlign:"center"},r.a.createElement(f.a,{divided:!0,inverted:!0,stackable:!0},r.a.createElement(f.a.Column,{width:3},r.a.createElement(E.a,{inverted:!0,as:"h4",content:"Group 1"}),r.a.createElement(oe.a,{link:!0,inverted:!0},r.a.createElement(oe.a.Item,{as:"a"},"Link One"),r.a.createElement(oe.a.Item,{as:"a"},"Link Two"),r.a.createElement(oe.a.Item,{as:"a"},"Link Three"),r.a.createElement(oe.a.Item,{as:"a"},"Link Four"))),r.a.createElement(f.a.Column,{width:3},r.a.createElement(E.a,{inverted:!0,as:"h4",content:"Group 2"}),r.a.createElement(oe.a,{link:!0,inverted:!0},r.a.createElement(oe.a.Item,{as:"a"},"Link One"),r.a.createElement(oe.a.Item,{as:"a"},"Link Two"),r.a.createElement(oe.a.Item,{as:"a"},"Link Three"),r.a.createElement(oe.a.Item,{as:"a"},"Link Four"))),r.a.createElement(f.a.Column,{width:3},r.a.createElement(E.a,{inverted:!0,as:"h4",content:"Group 3"}),r.a.createElement(oe.a,{link:!0,inverted:!0},r.a.createElement(oe.a.Item,{as:"a"},"Link One"),r.a.createElement(oe.a.Item,{as:"a"},"Link Two"),r.a.createElement(oe.a.Item,{as:"a"},"Link Three"),r.a.createElement(oe.a.Item,{as:"a"},"Link Four"))),r.a.createElement(f.a.Column,{width:7},r.a.createElement(E.a,{inverted:!0,as:"h4",content:"Footer Header"}),r.a.createElement("p",null,"Extra space for a call to action inside the footer that could help re-engage users."))),r.a.createElement(R.a,{inverted:!0,section:!0}),r.a.createElement(U.a,{centered:!0,size:"mini",src:"/logo.png"}),r.a.createElement(oe.a,{horizontal:!0,inverted:!0,divided:!0,link:!0,size:"small"},r.a.createElement(oe.a.Item,{as:"a",href:"#"},"Site Map"),r.a.createElement(oe.a.Item,{as:"a",href:"#"},"Contact Us"),r.a.createElement(oe.a.Item,{as:"a",href:"#"},"Terms and Conditions"),r.a.createElement(oe.a.Item,{as:"a",href:"#"},"Privacy Policy")))))}}]),a}(r.a.Component),ie=Object(h.f)(Object(d.b)((function(e){return{authenticated:null!==e.auth.token,cart:e.cart.shoppingCart,loading:e.cart.loading}}),(function(e){return{logout:function(){return e(T())},fetchCart:function(){return e(Z())}}}))(le)),ce=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(ie,this.props,r.a.createElement(ae,null)))}}]),a}(n.Component),se=Object(d.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(void 0===t)e(T());else{var a=new Date(localStorage.getItem("expirationDate"));a<=new Date?e(T()):(e(C(t)),e(I((a.getTime()-(new Date).getTime())/1e3)))}}))}}}))(ce),ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var de=a(52),he=a(191),ge=a(125),pe=function(e,t){return Object(ge.a)(Object(ge.a)({},e),t)},fe={token:null,error:null,loading:!1},Ee=function(e,t){return pe(e,{error:null,loading:!0})},ve=function(e,t){return pe(e,{token:t.token,error:null,loading:!1})},be=function(e,t){return pe(e,{error:t.error,loading:!1})},ye=function(e,t){return pe(e,{token:null})},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Ee(e);case"AUTH_SUCCESS":return ve(e,t);case"AUTH_FAIL":return be(e,t);case"AUTH_LOGOUT":return ye(e);default:return e}},ke={shoppingCart:null,error:null,loading:!1},Se=function(e,t){return pe(e,{error:null,loading:!0})},Ce=function(e,t){return pe(e,{shoppingCart:t.data,error:null,loading:!1})},Oe=function(e,t){return pe(e,{error:t.error,loading:!1})},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CART_START":return Se(e);case"CART_SUCCESS":return Ce(e,t);case"CART_FAIL":return Oe(e,t);default:return e}},Ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.d,Ae=Object(de.c)({auth:we,cart:Te}),je=Object(de.e)(Ae,Ie(Object(de.a)(he.a))),Le=r.a.createElement(d.a,{store:je},r.a.createElement(se,null));l.a.render(Le,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");ue?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):me(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):me(e)}))}}()}},[[200,1,2]]]);
//# sourceMappingURL=main.7c8605ae.chunk.js.map