(this["webpackJsonptruth-checker-client"]=this["webpackJsonptruth-checker-client"]||[]).push([[0],{21:function(e,t,n){},28:function(e,t,n){},33:function(e,t,n){e.exports=n(48)},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),l=n.n(c),o=n(5),u=n(1),i=n(2),s=Object(a.createContext)(),m={fetched:!1,facts:[],reports:[],all:[],error:null},d=function(e,t){switch(t.type){case"set-items":return Object(i.a)(Object(i.a)({},e),{},{fetched:!0,facts:t.payload.facts,reports:t.payload.reports,all:t.payload.all});case"set-facts":return Object(i.a)(Object(i.a)({},e),{},{facts:t.payload});case"set-reports":return Object(i.a)(Object(i.a)({},e),{},{reports:t.payload,fetched:!0});case"set-all":return Object(i.a)(Object(i.a)({},e),{},{all:t.payload});case"refetch":return Object(i.a)(Object(i.a)({},e),{},{fetched:!1});case"set-error":return Object(i.a)(Object(i.a)({},e),{},{error:t.payload});default:return m}},f=function(e){var t=Object(a.useReducer)(d,m),n=Object(u.a)(t,2),c={state:n[0],dispatch:n[1]};return r.a.createElement(s.Provider,{value:c},e.children)},p=(s.Consumer,Object(a.createContext)()),b={menu:{open:!1,toggleMenu:function(){}}},E=function(e,t){switch(t.type){case"start-session":return Object(i.a)({},e);case"toggle-menu":return Object(i.a)(Object(i.a)({},e),{},{menu:{open:!e.menu.open}});default:return Object(i.a)({},b)}},h=function(e){var t=Object(a.useReducer)(E,b),n=Object(u.a)(t,2),c={state:n[0],dispatch:n[1]};return r.a.createElement(p.Provider,{value:c},e.children)},j=(p.Consumer,function(e){return r.a.createElement(h,null,r.a.createElement(f,null,e.children))}),O={TOKEN_KEY:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_TOKEN_KEY,API_ENDPOINT:"https://serene-chamber-88335.herokuapp.com"},v={saveAuthToken:function(e,t){window.localStorage.setItem(O.TOKEN_KEY,e),window.localStorage.setItem("user_id",t)},getAuthToken:function(){return window.localStorage.getItem(O.TOKEN_KEY)},clearAuthToken:function(){window.localStorage.removeItem(O.TOKEN_KEY),window.localStorage.removeItem("user_id")},hasAuthToken:function(){return!!v.getAuthToken()},makeBasicAuthToken:function(e,t){return window.btoa("".concat(e,":").concat(t))}},g=v,y=Object(a.createContext)(),_={name:"Admin",isLoggedIn:!1,fetched:!1},w=function(e,t){switch(t.type){case"login":return{isLoggedIn:!0,fetched:!0};case"logout":return g.clearAuthToken(),{name:"",isLoggedIn:!1,fetched:!1};default:return _}},T=function(e){var t=Object(a.useReducer)(w,_),n=Object(u.a)(t,2),c={state:n[0],dispatch:n[1]};return r.a.createElement(y.Provider,{value:c},e.children)},C=(y.Consumer,n(4)),N=n(19),S=function(e){var t=e.component,n=Object(N.a)(e,["component"]),a=t;return r.a.createElement(C.b,Object.assign({},n,{render:function(e){return g.hasAuthToken()?r.a.createElement(a,e):r.a.createElement(C.a,{to:{pathname:"/admin-login"}})}}))},k={getFacts:function(){return fetch("".concat(O.API_ENDPOINT,"/facts"),{headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},addFact:function(e){return fetch("".concat(O.API_ENDPOINT,"/facts"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},updateFact:function(e,t){return fetch("".concat(O.API_ENDPOINT,"/facts/id/").concat(e),{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deleteFact:function(e){return fetch("".concat(O.API_ENDPOINT,"/facts/id/").concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?"":e.json().then((function(e){return Promise.reject(e)}))}))},reportFact:function(e){return fetch("".concat(O.API_ENDPOINT,"/reports"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},getReports:function(){return fetch("".concat(O.API_ENDPOINT,"/reports"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deleteReport:function(e){return fetch("".concat(O.API_ENDPOINT,"/reports/id/").concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},A=n(52),x=function(e){return Object(A.a)(new Date(e),"MMM d, yyyy")},F=function(e){return Object(A.a)(new Date(e),"yyyy-MM-dd")},P=function(e){var t=Object(a.useContext)(s),n=Object(a.useContext)(y).dispatch,c=function(){return g.getAuthToken?n({type:"login",data:e}):function(e){return n({type:"logout",data:e})}();var e};return Object(a.useEffect)((function(){Promise.all([k.getFacts(),k.getReports()]).then((function(e){var n=Object(u.a)(e,2),a=n[0],r=n[1];t.dispatch({type:"set-facts",payload:a}),t.dispatch({type:"set-reports",payload:r}),c()}))}),[t.state.fetched]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,e.children))},I=n(18),D=n(15);function R(){var e=Object(I.a)(["\n  position: absolute;\n  top: 5%;\n  left: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n  \n  &:focus {\n    outline: none;\n  }\n  \n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n  }\n\n  :nth-child(2) {\n    opacity: ",";\n    transform: ",";\n  }\n\n  :nth-child(3) {\n    transform: ",";\n  }\n\n"]);return R=function(){return e},e}D.a.button(R(),(function(e){var t=e.theme;return e.open?t.primaryDark:t.primaryLight}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"0":"1"}),(function(e){return e.open?"translateX(20px)":"translateX(0)"}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"}));function L(){var e=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: ",";\n  height: 100vh;\n  text-align: left;\n  padding: 2rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.3s ease-in-out;\n  transform: translateX(-100%);\n  \n  @media (max-width: ",") {\n    width: 100%;\n  }\n\n  a {\n    font-size: 2rem;\n    text-transform: uppercase;\n    padding: 2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.5rem;\n    color: ",";\n    text-decoration: none;\n    transition: color 0.3s linear;\n    \n    @media (max-width: ",") {\n      font-size: 1.5rem;\n      text-align: center;\n    }\n\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return L=function(){return e},e}D.a.nav(L(),(function(e){return e.theme.primaryLight}),(function(e){return e.theme.mobile}),(function(e){return e.theme.primaryDark}),(function(e){return e.theme.mobile}),(function(e){return e.theme.primaryHover})),n(28);var U=function(){var e=Object(C.g)(),t=Object(a.useContext)(y);return r.a.createElement("header",{className:"header Header_wrapper ".concat(t.state.isLoggedIn?"":"launch")},r.a.createElement("div",{className:"app-header-div"},r.a.createElement(o.b,{to:"/"},r.a.createElement("h1",null,"TRUTH CHECKER"))),r.a.createElement("div",{className:"app-header-div"},t.state.isLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{to:"/"},r.a.createElement("p",null,"View Facts")),r.a.createElement(o.b,{to:"/reports"},r.a.createElement("p",null,"View Reports")),r.a.createElement("button",{className:"header-button",onClick:function(){t.dispatch({type:"logout"})}},"Logout")):r.a.createElement("button",{className:"log-in",onClick:function(){e.push("/admin-login")}},"Admin Login")))},K=function(){return r.a.createElement("header",{className:"footer"},r.a.createElement("div",{className:"footer-label"},"FOOTER"))},B=function(e){var t=Object(a.useContext)(p),n=(t.state,t.dispatch,e.fact_id);return r.a.createElement("button",{onClick:function(t){return function(e){if(window.confirm("Are you sure you want to report Fact #".concat(n,"?"))){var t={fact_id:e};k.reportFact(t).then((function(e){window.alert("Your report has been submitted")}))}}(e.fact_id)}},"Report Fact # ",n)},V=(n(43),function(){var e=Object(a.useContext)(y),t=Object(a.useContext)(s),n=Object(C.g)(),c="main-feed-fact-label",l=Object(a.useState)(""),o=Object(u.a)(l,2),i=o[0],m=o[1],d=Object(a.useState)([]),f=Object(u.a)(d,2),p=f[0],b=f[1],E=Object(a.useState)("All"),h=Object(u.a)(E,2),j=h[0],O=h[1];return Object(a.useEffect)((function(){var e=t.state.facts.filter((function(e){return e.title.toLowerCase().includes(i.toLowerCase())})),n="All"===j?e:e.filter((function(e){return e.status===j}));b(n)}),[i]),Object(a.useEffect)((function(){var e=t.state.facts.filter((function(e){return e.title.toLowerCase().includes(i.toLowerCase())})),n="All"===j?e:e.filter((function(e){return e.status===j}));b(n)}),[j]),Object(a.useEffect)((function(){var e=t.state.facts;b(e)}),[t.state.fetched]),r.a.createElement("div",{className:"main-feed"},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("label",null,"Search"),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Search for Fact",type:"text",value:i,onChange:function(e){m(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Status"),r.a.createElement("br",null),r.a.createElement("select",{value:j,onChange:function(e){O(e.target.value)}},r.a.createElement("option",{value:"All"},"Show All"),r.a.createElement("option",{value:"Pending"},"Pending"),r.a.createElement("option",{value:"Under Review"},"Under Review"),r.a.createElement("option",{value:"Approved"},"Approved"),r.a.createElement("option",{value:"Not True"},"Not True"))),r.a.createElement("br",null),r.a.createElement("div",{className:"center"},r.a.createElement("button",{onClick:function(){n.push("/submit-fact")}},"Add New Fact")),(0===p.length&&""===i?t.state.facts:p).sort((function(e,t){return e.fact_id-t.fact_id})).map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-feed-fact",onClick:function(){return n.push("/facts/id/".concat(t.fact_id))}},r.a.createElement("p",null,r.a.createElement("span",{className:c},"Fact"),t.title),r.a.createElement("p",null,r.a.createElement("span",{className:c},"Status"),t.status),r.a.createElement("p",null,r.a.createElement("span",{className:c},"Date"),"Pending"===t.status||"Under Review"===t.status?x(t.date_submitted):"Approved"===t.status?x(t.date_approved):"Not True"===t.status?x(t.date_not_true):""),r.a.createElement("p",null,r.a.createElement("span",{className:c},"Id"),t.fact_id)),e.state.isLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(e){return n.push("/facts/id/".concat(t.fact_id,"/edit"))}},"Edit")):r.a.createElement("div",null,r.a.createElement(B,{fact_id:t.fact_id})))})))}),Y=(n(21),function(e){var t=e.component,n=Object(N.a)(e,["component"]),a=t;return r.a.createElement(C.b,Object.assign({},n,{render:function(e){return r.a.createElement(a,e)}}))}),H=n(16),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(u.a)(t,2),r=n[0],c=n[1],l=function(e){"checkbox"===e.currentTarget.type?c(Object(i.a)(Object(i.a)({},r),{},Object(H.a)({},e.currentTarget.name,e.currentTarget.checked))):c(Object(i.a)(Object(i.a)({},r),{},Object(H.a)({},e.currentTarget.name,e.currentTarget.value)))};return[r,l]},W=function(){return r.a.createElement("span",{className:"approved-fact-label"},"Approved Fact \u221a AF-122-A-022WE")},z=function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:"form-error-label"},e.message))},J=function(){var e=Object(C.g)(),t=M(),n=Object(u.a)(t,2),c=n[0],l=n[1],o=Object(a.useContext)(s),m=Object(a.useState)(!1),d=Object(u.a)(m,2),f=d[0],p=d[1],b=Object(a.useState)(!1),E=Object(u.a)(b,2),h=E[0],j=E[1],O=Object(a.useState)(!1),v=Object(u.a)(O,2),g=v[0],y=v[1],_=Object(a.useState)({}),w=Object(u.a)(_,2),T=w[0],N=w[1],S=function(){var t=Object(i.a)(Object(i.a)({},c),{},{user_id:2});k.addFact(t).then((function(t){o.dispatch({type:"refetch"}),e.push("/")}))};return r.a.createElement("form",{id:"Add_Fact_Form",onSubmit:function(e){return function(e){e.preventDefault();var t={};if(void 0===c.title||""===c.title?t.title={message:"Title is required"}:f&&h&&g||(t.title={message:"Must select all checkboxes"}),0!==Object.keys(t).length)return N(t);S()}(e)}},r.a.createElement("legend",null,r.a.createElement("h2",null,"Fact Submission Page")),r.a.createElement("label",{htmlFor:"title-field"},"Fact"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"title-field",name:"title",onChange:l,placeholder:"All firetrucks are red"}),T.title?r.a.createElement(z,{message:T.title.message}):"",r.a.createElement("label",null,"Reference/Citation (Not Applicable)"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"align-left"},r.a.createElement("label",null,"To Submit, you must agree to the following"),r.a.createElement("br",null),r.a.createElement("input",{name:"citizen",type:"checkbox",checked:f,onChange:function(e){return p(!f)}}),r.a.createElement("label",null,"I am a U.S. Citizen"),r.a.createElement("br",null),r.a.createElement("input",{name:"not-terrorist-1",type:"checkbox",checked:h,onChange:function(e){return j(!h)}}),r.a.createElement("label",null,"I am not a Terrorist"),r.a.createElement("br",null),r.a.createElement("input",{name:"terms-conditions",type:"checkbox",checked:g,onChange:function(e){return y(!g)}}),r.a.createElement("label",null,"I agree to Terms and Conditions")),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Submit"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.push("/")}},"Cancel"),r.a.createElement("br",null),r.a.createElement("p",null,"Terms and Conditions"),r.a.createElement("ul",{className:"terms-and-conditions"},r.a.createElement("li",null,"You relinquish any and all privacy for the puropse of community and national safety. ",r.a.createElement(W,null)),r.a.createElement("li",null,"Not Agreeing to these Terms and Conditions means you want to see the destruction of the U.S.A. ",r.a.createElement(W,null)),r.a.createElement("li",null,"All data submitted is the property of the U.S. Government. ",r.a.createElement(W,null)),r.a.createElement("li",null,"Any submission in violation of these Terms and Conidtions is punishable by death and/or $1,000,000 fine (whichever comes first). ",r.a.createElement(W,null)),r.a.createElement("li",null,"You agree that the United States is the best country in the world and will never jepordize it's security in any way. ",r.a.createElement(W,null)),r.a.createElement("li",null,"Not agreeing to these Terms, even without a submission, means you are a Terrorist. ",r.a.createElement(W,null)),r.a.createElement("li",null,"If you are a Terrorist, you are an Enemy Combatant, and do not have protection under U.S. law. ",r.a.createElement(W,null)),r.a.createElement("li",null,"Enemy Combatants have no rights and relinquish all rights of safety, security, and respect as a human being. ",r.a.createElement(W,null)),r.a.createElement("li",null,"If you are not with the U.S.A., you are with 'Them'. 'Them' being Terrorists. Terrorists being Enemy Combatants. Enemy Conbatants have no rights and are less-than-human and want an unsafe community, women, and children. ",r.a.createElement(W,null)),r.a.createElement("li",null,"This is all a joke. None of this is true.")))},q={postLogin:function(e){return fetch("".concat(O.API_ENDPOINT,"/auth/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},X=function(){var e=Object(a.useContext)(y).dispatch,t=Object(a.useState)({}),n=Object(u.a)(t,2),c=n[0],l=n[1],o=Object(C.g)(),i=M(),s=Object(u.a)(i,2),m=s[0],d=s[1],f=function(){var t={email:"admin@dtf.gov",password:m.password};q.postLogin(t).then((function(e){g.saveAuthToken(e.authToken,e.user_id),t.email="",t.password=""})).then((function(t){e({type:"login",data:t}),o.push("/")})).catch((function(e){l(e)}))};return r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var t={};if(void 0!==m.password&&""!==m.password||(t={error:"Password is required"}),0!==Object.keys(t).length)return l(t);f()}(e)}},r.a.createElement("legend",null,"Login"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Email"),r.a.createElement("input",{id:"email-field",type:"email",name:"email",autoComplete:"email",value:"admin@dtf.gov",onChange:d}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Password"),r.a.createElement("input",{id:"password-field",type:"password",name:"password",autoComplete:"current-password",onChange:d}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,"Submit"),c.error?r.a.createElement(z,{message:c.error}):"",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(e){return o.push("/")}},"Cancel"))},G=(n(44),n(45),function(e){var t=Object(a.useContext)(s),n=Object(C.g)(),c=function(e,t){var n=parseInt(e);return t.find((function(e){return e.fact_id===n}))}(e.fact_id,t.state.facts),l=M({}),o=Object(u.a)(l,2),m=o[0],d=o[1],f=Object(a.useState)(),p=Object(u.a)(f,2),b=p[0],E=p[1],h=Object(a.useState)(),j=Object(u.a)(h,2),O=j[0],v=j[1],g=Object(a.useState)(),y=Object(u.a)(g,2),_=y[0],w=y[1],T=Object(a.useState)(),N=Object(u.a)(T,2),S=N[0],A=N[1],x=Object(a.useState)(),P=Object(u.a)(x,2),I=P[0],D=P[1],R=Object(a.useState)(),L=Object(u.a)(R,2),U=L[0],K=L[1],B=Object(a.useState)(),V=Object(u.a)(B,2),Y=V[0],H=V[1],W=Object(a.useState)({}),J=Object(u.a)(W,2),q=J[0],X=J[1];Object(a.useEffect)((function(){t.state.fetched&&(E(c.title),w(c.fact_id),v(c.text||""),A(c.date_submitted?F(c.date_submitted):null),D(c.date_under_review?F(c.date_under_review):null),K(c.date_approved?F(c.date_approved):null),H(c.date_not_true?F(c.date_not_true):null))}),[t.state.fetched]);var G=function(){var a=Object(i.a)(Object(i.a)({},m),{},{user_id:2});k.updateFact(e.fact_id,a).then((function(e){t.dispatch({type:"refetch"}),n.push("/")}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{id:"Add_Fact_Form",onSubmit:function(e){return function(e){e.preventDefault();var t={};if(0!==Object.keys(t).length)return X(t);G()}(e)}},r.a.createElement("legend",null,r.a.createElement("h2",null,"Edit Fact Form")),r.a.createElement("p",null,"Fact id: ",_),r.a.createElement("label",{htmlFor:"title-field"},"Title "),r.a.createElement("input",{type:"text",id:"title-field",name:"title",onChange:d,defaultValue:b,placeholder:"Title"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"text-field"},"Text "),r.a.createElement("input",{type:"text",id:"text-field",name:"text",onChange:d,defaultValue:O,placeholder:"additional text (optional) "}),r.a.createElement("br",null),r.a.createElement("p",null," Today is ",F(new Date)," "),r.a.createElement("p",null," Dates below are dd/mm/yyyy "),r.a.createElement("label",null,"Submitted "),r.a.createElement("input",{type:"date",name:"date_submitted",onChange:d,defaultValue:S}),r.a.createElement("br",null),r.a.createElement("label",null,"Under Review "),r.a.createElement("input",{type:"date",name:"date_under_review",onChange:d,defaultValue:I}),r.a.createElement("br",null),r.a.createElement("label",null,"Approved "),r.a.createElement("input",{type:"date",name:"date_approved",onChange:d,defaultValue:U}),r.a.createElement("br",null),r.a.createElement("label",null,"Not True "),r.a.createElement("input",{type:"date",name:"date_not_true",onChange:d,defaultValue:Y}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),q.title?r.a.createElement(z,{message:q.title.message}):"",r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Update"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return n.push("/")}},"Cancel"),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("button",{onClick:function(e){return a=_,void(window.confirm("Are you sure you want to delete this Fact?")&&k.deleteFact(a).then((function(e){t.dispatch({type:"refetch"}),n.push("/")})));var a}},"Delete"))}),$=function(e){var t=Object(a.useState)({}),n=Object(u.a)(t,2),c=n[0],l=n[1],o=Object(a.useContext)(s),i=Object(C.g)();return Object(a.useEffect)((function(){if(o.state.fetched){var t=o.state.facts.find((function(t){var n=parseInt(e.fact_id);return t.fact_id===n}));l(t)}}),[o.state.fetched]),r.a.createElement("div",null,r.a.createElement("p",null,"Title: ",c.title),r.a.createElement("p",null,"Text: ",c.text),r.a.createElement("p",null,"Fact Id: ",c.fact_id),r.a.createElement("p",null,"Status: ",c.status),r.a.createElement("p",null,"Submitted: ",c.date_submittd),r.a.createElement("p",null,"Under Review: ",c.date_under_review),r.a.createElement("p",null,"Date Approved: ",c.date_approved),r.a.createElement("p",null,"Not True: ",c.date_not_true),r.a.createElement("button",{onClick:function(){return i.push("/")}},"Back"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(B,{fact_id:c.fact_id}),r.a.createElement("br",null),r.a.createElement("br",null))},Q=(n(46),function(){var e=Object(a.useContext)(s),t=Object(a.useState)([]),n=Object(u.a)(t,2),c=n[0],l=n[1];return Object(a.useEffect)((function(){l(e.state.reports)}),[e.state.fetched]),r.a.createElement("div",{className:"main-feed"},r.a.createElement("p",null,"Number of Reports"),c.sort((function(e,t){return t.number_of_reports-e.number_of_reports})).map((function(e){return r.a.createElement("div",{className:"report-conntainer"},r.a.createElement("p",null,r.a.createElement("span",{className:"report-label"},"Fact Id"),e.fact_id),r.a.createElement("p",null,r.a.createElement("span",{className:"report-label"},"Title"),e.title),r.a.createElement("p",null,r.a.createElement("span",{className:"report-label"},"Text"),e.text),r.a.createElement("p",null,r.a.createElement("span",{className:"report-label"},"User Id"),e.user_id),r.a.createElement("p",null,r.a.createElement("span",{className:"report-label"},"Status"),e.fact_status),r.a.createElement("p",null,r.a.createElement("span",{className:"report-label"},"Date Submitted"),e.date_submitted),r.a.createElement("p",null,r.a.createElement("span",{className:"report-label"},"Number of Reports"),e.number_of_reports),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("button",{onClick:function(t){return n=e.fact_id,void(window.confirm("Are you sure you want to disapprove of Fact #".concat(n,"? It will be deleted immediately and will have never existed."))&&k.deleteFact(n).then((function(){window.alert("The Fact, which never existed, has been deleted. Which is impossible. But you don't know that.")})));var n}},"Delete Fact"))))})))});var Z=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2);return t[0],t[1],Object(a.useRef)(),r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null),r.a.createElement("body",null,r.a.createElement(C.d,null,r.a.createElement(Y,{exact:!0,path:"/",component:V}),r.a.createElement(Y,{path:"/admin-login",component:X}),r.a.createElement(Y,{path:"/submit-fact",component:J}),r.a.createElement(Y,{exact:!0,path:"/facts/id/:fact_id",component:function(e){return r.a.createElement($,{fact_id:e.match.params.fact_id})}}),r.a.createElement(S,{exact:!0,path:"/facts/id/:fact_id/edit",component:function(e){return r.a.createElement(G,{fact_id:e.match.params.fact_id})}}),r.a.createElement(S,{exact:!0,path:"/reports",component:Q}))),r.a.createElement(K,null))},ee=n(14),te=Object(ee.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),ne=te.actions,ae=(ne.increment,ne.decrement,ne.incrementByAmount,te.reducer),re=Object(ee.b)({name:"facts",initialState:{value:100},reducers:{addFact:function(e,t){e.value+=t.payload},removeFact:function(e,t){e.value-=t.payload},incrementByAmount:function(e,t){e.value+=t.payload}}}),ce=re.actions,le=(ce.addFact,ce.removeFact,ce.incrementByAmount,re.reducer);Object(ee.a)({reducer:{counter:ae,counter2:le}}),n(49),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(j,null,r.a.createElement(T,null,r.a.createElement(P,null,r.a.createElement(Z,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.d55abd96.chunk.js.map