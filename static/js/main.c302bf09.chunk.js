(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{53:function(e,t,i){},54:function(e,t,i){},66:function(e,t,i){},72:function(e,t,i){},76:function(e,t,i){},77:function(e,t,i){},78:function(e,t,i){"use strict";i.r(t);var n,c,r,a,s,o,l=i(9),d=i.n(l),u=i(55),j=i.n(u),m=(i.p,i(66),i(27)),p=i(28),b=i(38),x=i(60),h=p.a.nav(n||(n=Object(m.a)(["\n    background:#fff;\n    height:80px;\n    display:flex;\n    justify-content:space-between;\n    padding:0 2rem;\n    z-index:10;\n"]))),O=Object(p.a)(b.b)(c||(c=Object(m.a)(["\n    color:#000;\n    display:flex;\n    align-items:center;\n    text-decoration:none;\n    padding:0 1rem;\n    height:100%;\n    cursor:pointer;\n    font-size:1.5rem;\n\n    &.active{\n        color:#15cdfc;\n    }\n\n"]))),g=Object(p.a)(x.a)(r||(r=Object(m.a)(["\ndisplay:none;\ncolor:#000;\n\n@media screen and(max-width:760px){\n    display:block;\n    position:absolute;\n    top:0;\n    right:0;\n    transform:translated(-100%,75%);\n    font-size:1.8rem;\n    cursor:pointer;\n    z-index:100;\n}\n"]))),f=p.a.div(a||(a=Object(m.a)(["\n    display:flex;\n    align-items:center;\n    margin-right:-24px;\n\n    \n"]))),v=p.a.nav(s||(s=Object(m.a)(["\n    display:flex;\n    align-items:center;\n    margin-right:24px;\n\n\n    \n"]))),y=Object(p.a)(b.b)(o||(o=Object(m.a)(["\n    border-radius:4px;\n    background:#256ce1;\n    padding:10px 22px;\n    color:#fff;\n    border:none;\n    font-size:1.5rem;\n    outline:none;\n    cursor:pointer;\n    transition:all 0.2s ease-in-out;\n    text-decoration:none;\n\n    &:hover{\n        transition:all 0.2s ease-in-out;\n        background:#fff;\n        color:#010686;\n    }\n\n"]))),w=i.p+"static/media/logo1.e7cfdcb9.png",q=i(7);var N=function(){return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)(h,{children:[Object(q.jsx)(O,{to:"/",children:Object(q.jsx)("img",{src:w,alt:"Logo",style:{width:"100px"}})}),Object(q.jsx)(g,{}),Object(q.jsxs)(f,{children:[Object(q.jsx)(O,{to:"/category",activeStyle:!0,children:"Category"}),Object(q.jsx)(O,{to:"/faq",activeStyle:!0,children:"FAQs"}),Object(q.jsx)(O,{to:"/cart",activeStyle:!0,children:"My Cart"}),Object(q.jsx)(v,{children:Object(q.jsx)(y,{to:"/login",children:"Login"})})]})]})})},S=i(17);i(72);var A=function(e){return Object(q.jsxs)("div",{className:"blog",children:[Object(q.jsx)("span",{className:"blog-title",children:e.title}),Object(q.jsx)("p",{className:"blog-content",children:e.content}),Object(q.jsx)("span",{className:"read-more",children:"READ MORE"})]})};var D=function(){return Object(q.jsxs)("div",{style:{width:"100vw",textAlign:"center",marginTop:"6rem",padding:"7rem"},children:[Object(q.jsx)("h2",{style:{fontSize:"2.5rem"},children:"HAVE A READ"}),Object(q.jsx)(A,{title:"The right quality",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),Object(q.jsx)(A,{title:"The right time",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),Object(q.jsx)(A,{title:"The basis of a balanced diet",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]})},T=(i(53),i(16)),C=i(40);i(74),i(79);C.a.initializeApp({apiKey:"AIzaSyCY0yKrQsDpmiRcUjF2YmBagYfo12hTQu4",authDomain:"proffus-3c86a.firebaseapp.com",projectId:"proffus-3c86a",storageBucket:"proffus-3c86a.appspot.com",messagingSenderId:"552712226222",appId:"1:552712226222:web:d0c1de02c8ba20d774343f"});C.a.auth();var L=C.a.firestore(),k=(C.a,i.p+"static/media/c1.c3a65abc.png"),E=i.p+"static/media/c2.c8dbdf73.png",R=i.p+"static/media/c0.d49c9078.png";var z=function(){var e=Object(l.useState)([]),t=Object(T.a)(e,2),i=t[0],n=t[1];return Object(l.useEffect)((function(){L.collection("categories").get().then((function(e){var t=[];e.forEach((function(e){var i=e.data();t.push(i)})),n(t),console.log(t),console.log(i[0].title)})).catch((function(e){return console.log(e)}))}),[]),Object(q.jsxs)("div",{style:{display:"flex",width:"100vw",justifyContent:"space-around",marginTop:"3rem"},children:[Object(q.jsxs)("div",{className:"box",children:[Object(q.jsx)("img",{src:k,style:{width:"170px"}}),Object(q.jsx)("span",{children:i[0].title})]}),Object(q.jsxs)("div",{className:"box",children:[Object(q.jsx)("img",{src:R,style:{width:"170px"}}),Object(q.jsx)("span",{children:i[1].title})]}),Object(q.jsxs)("div",{className:"box",children:[Object(q.jsx)("img",{src:E,style:{width:"170px"}}),Object(q.jsx)("span",{children:i[2].title})]})]})};var U=function(){return Object(q.jsxs)("div",{style:{textAlign:"center",width:"100vw",marginTop:"3rem"},children:[Object(q.jsx)("h2",{className:"heading",children:"HOW IT WORKS"}),Object(q.jsx)("p",{className:"subheading",children:"Sea Basket delivers fresh sourced seafood in a few easy clicks"}),Object(q.jsx)("h3",{className:"subHeading2",children:"CATEGORIES"}),Object(q.jsx)(z,{})]})},I=i.p+"static/media/c3.d03d6003.png";var B=function(){return Object(q.jsx)("div",{children:Object(q.jsx)("img",{src:I,alt:"Cover image",style:{width:"100%"}})})};i(54);var F=function(){return Object(q.jsx)("div",{children:Object(q.jsx)("div",{className:"copyright",children:Object(q.jsx)("p",{children:"Sea Basket | All Rights Reserved | 2021 Copyright"})})})};var P=function(){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)("div",{className:"footer",children:[Object(q.jsx)("img",{src:w,alt:"logo",className:"logo"}),Object(q.jsxs)("div",{className:"lists",children:[Object(q.jsxs)("div",{className:"l1",children:[Object(q.jsx)("span",{children:"Support"}),Object(q.jsx)("br",{}),Object(q.jsx)("span",{children:"About us"}),Object(q.jsx)("br",{}),Object(q.jsx)("span",{children:"Privacy Policy"}),Object(q.jsx)("br",{})]}),Object(q.jsxs)("div",{className:"l2",children:[Object(q.jsx)("span",{children:"Terms and Condition"}),Object(q.jsx)("br",{}),Object(q.jsx)("span",{children:"Return n Refund Policy"}),Object(q.jsx)("br",{}),Object(q.jsx)("span",{children:"Shipping n Delivery Policy"}),Object(q.jsx)("br",{})]})]})]}),Object(q.jsx)(F,{})]})};i(76);var M=function(){return Object(q.jsxs)("div",{style:{width:"100vw",textAlign:"center",marginTop:"6rem"},children:[Object(q.jsx)("h2",{className:"heading",children:"A GLANCE AT OUR PRODUCT"}),Object(q.jsx)("div",{className:"video",children:Object(q.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6stlCkUDG_s",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,style:{borderRadius:"25px"}})})]})};i(77);var Y=function(e){return Object(q.jsx)("div",{className:"topic-box",children:Object(q.jsxs)("div",{className:"gradient",children:[Object(q.jsx)("span",{className:"topic-title",children:e.title}),Object(q.jsx)("p",{className:"topic-content",children:e.content}),Object(q.jsx)("span",{className:"tread-more",children:"READ MORE"})]})})};i.p,i.p;var H,Q,G,K,J=function(){return Object(q.jsxs)("div",{style:{width:"100vw",textAlign:"center",padding:"7rem"},children:[Object(q.jsx)("h2",{style:{fontSize:"2.5rem"},children:"TOPICS YOU CAN'T MISS"}),Object(q.jsx)(Y,{title:"Topics you can't miss",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),Object(q.jsx)(Y,{title:"How to clean/cut your seafood",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]})},W=[{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}],V=i(0),X=i(50),_=p.a.div(H||(H=Object(m.a)(["\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    justify-content:center;\n    position:relative;\n    height:60vh;\n    background:#fff;\n    width:100vw;\n    padding:7rem;\n    \n    \n"]))),Z=p.a.div(Q||(Q=Object(m.a)(["\n    box-shadow:2px 10px 35px 1px rgba(153,153,153,0.3);\n    padding:4rem;\n    border-radius:25px;\n    width:85vw;\n"]))),$=p.a.div(G||(G=Object(m.a)(["\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n    width:100%;\n    text-align:left;\n    cursor:pointer;\n\n    h1{\n        padding:2rem;\n        font-size:2rem;\n        margin-top:4rem;\n    }\n\n    span{\n        color:#0E79BD;\n        margin-right:1.5rem;\n    }\n"]))),ee=p.a.div(K||(K=Object(m.a)(["\n    width:100%;\n    height:100px;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n\n    p{\n        font-size:1.5rem;\n    }\n"])));var te=function(){var e=Object(l.useState)(!1),t=Object(T.a)(e,2),i=t[0],n=t[1];return Object(q.jsxs)(V.b.Provider,{value:{color:"#000",size:"25px"},children:[Object(q.jsx)("center",{children:Object(q.jsx)("h2",{style:{fontSize:"2.5rem"},children:"FAQs"})}),Object(q.jsx)(_,{children:Object(q.jsx)(Z,{children:W.map((function(e,t){return Object(q.jsxs)("div",{style:{marginTop:"3rem"},children:[Object(q.jsxs)($,{onClick:function(){return function(e){if(i===e)return n(null);n(e)}(t)},children:[Object(q.jsx)("h2",{children:e.question}),Object(q.jsx)("span",{children:i==t?Object(q.jsx)(X.a,{style:{color:"#0E79BD"}}):Object(q.jsx)(X.b,{style:{color:"#0E79BD"}})})]},t),i===t?Object(q.jsx)(ee,{children:Object(q.jsx)("p",{children:e.answer})}):null]})}))})})]})};var ie=function(){return Object(q.jsxs)("div",{style:{overflowX:"hidden"},children:[Object(q.jsx)(B,{}),Object(q.jsx)(U,{}),Object(q.jsx)(M,{}),Object(q.jsx)(D,{}),Object(q.jsx)(te,{}),Object(q.jsx)(J,{}),Object(q.jsx)(P,{})]})};var ne=function(){return Object(q.jsxs)(b.a,{children:[Object(q.jsx)(N,{}),Object(q.jsx)(S.c,{children:Object(q.jsx)(S.a,{path:"/",exact:!0,component:ie})})]})},ce=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,80)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;i(e),n(e),c(e),r(e),a(e)}))};j.a.render(Object(q.jsx)(d.a.StrictMode,{children:Object(q.jsx)(ne,{})}),document.getElementById("root")),ce()}},[[78,1,2]]]);
//# sourceMappingURL=main.c302bf09.chunk.js.map