(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8cBu":function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return v})),a.d(t,"c",(function(){return j})),a.d(t,"d",(function(){return q}));var n=a("q1tI"),i=a.n(n),r=a("kKU3"),c=a("ofer"),o=a("Kvkj"),s=a("ma3e"),l={title:"About.",subtitle:"Find out more about me",links:[{to:"https://github.com/ethenalee",text:"ethena lee",Icon:s.b,newTab:!0},{to:"https://www.linkedin.com/in/yeonji900111/",text:"ethena lee",Icon:s.c,newTab:!0},{to:"https://society6.com/ethenalee",text:"ethena lee",Icon:s.d,newTab:!0}]},u=l.title,d=l.subtitle,m=l.links,b=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,{in:!0,timeout:1e3},i.a.createElement(c.a,{variant:"h1",color:"textPrimary"},i.a.createElement(o.a,null,u))),i.a.createElement(c.a,{variant:"h3",color:"textPrimary"},d),i.a.createElement(o.f,{links:m}))},g=a("ucgz"),p=a("Wbzz"),h=function(){return Object(p.useStaticQuery)("2552877346")},f=function(e){return{container:{padding:e.typography.pxToRem(32)+" 0"}}},v=Object(g.a)(f)((function(e){var t=e.classes,a=h().allContentfulBlogPost;return i.a.createElement("div",{className:t.container},a.edges.map((function(e,t){var a=e.node;return i.a.createElement(o.b,{key:t,data:a})})))})),x=function(){return Object(p.useStaticQuery)("1362865503")},k=function(e){return{container:{padding:e.typography.pxToRem(32)+" 0"}}},j=Object(g.a)(k)((function(e){var t=e.classes,a=x().allContentfulIllustration;return i.a.createElement("div",{className:t.container},a.edges.map((function(e,t){var a=e.node;return i.a.createElement(o.d,{key:t,data:a})})))})),O=(a("RUBk"),a("k1TG")),y=a("aXB2"),E=a("FqMR"),w=a("iuhU"),W=a("H2TA"),R=a("NqtD"),I=i.a.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,c=void 0===r?"div":r,o=e.disableGutters,s=void 0!==o&&o,l=e.fixed,u=void 0!==l&&l,d=e.maxWidth,m=void 0===d?"lg":d,b=Object(y.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.a.createElement(c,Object(O.a)({className:Object(w.a)(a.root,n,u&&a.fixed,s&&a.disableGutters,!1!==m&&a["maxWidth".concat(Object(R.a)(String(m)))]),ref:t},b))})),N=Object(W.a)((function(e){var t;return{root:(t={width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},Object(E.a)(t,e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),Object(E.a)(t,e.breakpoints.up("md"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),t),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(E.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(E.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(E.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(E.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(E.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(I),T=["video","audio","picture","iframe","img"],B=i.a.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,c=e.component,o=void 0===c?"div":c,s=e.image,l=e.src,u=e.style,d=Object(y.a)(e,["children","classes","className","component","image","src","style"]),m=-1!==T.indexOf(o),b=!m&&s?Object(O.a)({backgroundImage:'url("'.concat(s,'")')},u):u;return i.a.createElement(o,Object(O.a)({className:Object(w.a)(n.root,r,m&&n.media,-1!=="picture img".indexOf(o)&&n.img),ref:t,style:b,src:m?s||l:void 0},d),a)})),L=Object(W.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(B),P={tagline:"I’m Ethena Lee, a software engineer in Toronto",title:"Ethena’s Blog",subtitle:"This blog is for documenting my research I find interesting also sharing my illustrations"},S=function(e){e.typography;return{container:{backgroundImage:"url(src/images/illustration.png)",backgroundSize:cover}}},z=P.tagline,M=P.title,G=P.subtitle,q=Object(g.a)(S)((function(e){var t=e.classes;return i.a.createElement(N,{className:t.container},i.a.createElement(c.a,{variant:"h3",color:"textPrimary"},z),i.a.createElement(r.a,{in:!0,timeout:1e3},i.a.createElement(c.a,{variant:"h1",color:"textPrimary"},i.a.createElement(o.a,null,M))),i.a.createElement(c.a,{variant:"h4",color:"textPrimary"},G),i.a.createElement(L,{image:"src/images/illustration.png",title:"mainImage"}))}))},vx99:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("Kvkj"),c=a("8cBu");t.default=function(){return i.a.createElement(r.e,{noBackground:!0},i.a.createElement(r.h,{title:"Blog"}),i.a.createElement(c.b,null))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-d69bf50ac44569cb231c.js.map