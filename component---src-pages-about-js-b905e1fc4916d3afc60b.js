(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3XHS":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("Kvkj"),o=a("8cBu");t.default=function(){return i.a.createElement(r.e,null,i.a.createElement(r.h,{title:"About"}),i.a.createElement(o.a,null))}},"8cBu":function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return v})),a.d(t,"c",(function(){return j})),a.d(t,"d",(function(){return q}));var n=a("q1tI"),i=a.n(n),r=a("kKU3"),o=a("ofer"),c=a("Kvkj"),s=a("ma3e"),l={title:"About.",subtitle:"Find out more about me",links:[{to:"https://github.com/ethenalee",text:"ethena lee",Icon:s.b,newTab:!0},{to:"https://www.linkedin.com/in/yeonji900111/",text:"ethena lee",Icon:s.c,newTab:!0},{to:"https://society6.com/ethenalee",text:"ethena lee",Icon:s.d,newTab:!0}]},u=l.title,d=l.subtitle,m=l.links,b=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,{in:!0,timeout:1e3},i.a.createElement(o.a,{variant:"h1",color:"textPrimary"},i.a.createElement(c.a,null,u))),i.a.createElement(o.a,{variant:"h3",color:"textPrimary"},d),i.a.createElement(c.f,{links:m}))},p=a("ucgz"),g=a("Wbzz"),h=function(){return Object(g.useStaticQuery)("2552877346")},f=function(e){return{container:{padding:e.typography.pxToRem(32)+" 0"}}},v=Object(p.a)(f)((function(e){var t=e.classes,a=h().allContentfulBlogPost;return i.a.createElement("div",{className:t.container},a.edges.map((function(e,t){var a=e.node;return i.a.createElement(c.b,{key:t,data:a})})))})),x=function(){return Object(g.useStaticQuery)("1362865503")},k=function(e){return{container:{padding:e.typography.pxToRem(32)+" 0"}}},j=Object(p.a)(k)((function(e){var t=e.classes,a=x().allContentfulIllustration;return i.a.createElement("div",{className:t.container},a.edges.map((function(e,t){var a=e.node;return i.a.createElement(c.d,{key:t,data:a})})))})),y=(a("RUBk"),a("k1TG")),O=a("aXB2"),E=a("FqMR"),w=a("iuhU"),W=a("H2TA"),R=a("NqtD"),I=i.a.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,o=void 0===r?"div":r,c=e.disableGutters,s=void 0!==c&&c,l=e.fixed,u=void 0!==l&&l,d=e.maxWidth,m=void 0===d?"lg":d,b=Object(O.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.a.createElement(o,Object(y.a)({className:Object(w.a)(a.root,n,u&&a.fixed,s&&a.disableGutters,!1!==m&&a["maxWidth".concat(Object(R.a)(String(m)))]),ref:t},b))})),N=Object(W.a)((function(e){var t;return{root:(t={width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},Object(E.a)(t,e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),Object(E.a)(t,e.breakpoints.up("md"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),t),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(E.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(E.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(E.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(E.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(E.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(I),T=["video","audio","picture","iframe","img"],P=i.a.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,o=e.component,c=void 0===o?"div":o,s=e.image,l=e.src,u=e.style,d=Object(O.a)(e,["children","classes","className","component","image","src","style"]),m=-1!==T.indexOf(c),b=!m&&s?Object(y.a)({backgroundImage:'url("'.concat(s,'")')},u):u;return i.a.createElement(c,Object(y.a)({className:Object(w.a)(n.root,r,m&&n.media,-1!=="picture img".indexOf(c)&&n.img),ref:t,style:b,src:m?s||l:void 0},d),a)})),S=Object(W.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(P),L={tagline:"I’m Ethena Lee, a software engineer in Toronto",title:"Ethena’s Blog",subtitle:"This blog is for documenting my research I find interesting also sharing my illustrations"},z=function(e){e.typography;return{container:{backgroundImage:"url('../../images/illustration.png')",backgroundSize:"cover",padding:0,minHeight:"100vh",display:"flex",flexDirection:"column",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}},B=L.tagline,M=L.title,G=L.subtitle,q=Object(p.a)(z)((function(e){var t=e.classes;return i.a.createElement(N,{className:t.container},i.a.createElement(o.a,{variant:"h3",color:"textPrimary"},B),i.a.createElement(r.a,{in:!0,timeout:1e3},i.a.createElement(o.a,{variant:"h1",color:"textPrimary"},i.a.createElement(c.a,null,M))),i.a.createElement(o.a,{variant:"h4",color:"textPrimary"},G),i.a.createElement(S,{image:"../../images/illustration.png",title:"mainImage"}))}))}}]);
//# sourceMappingURL=component---src-pages-about-js-b905e1fc4916d3afc60b.js.map