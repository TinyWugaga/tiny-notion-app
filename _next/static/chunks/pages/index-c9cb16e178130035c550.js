(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8801:function(e,t,i){"use strict";var n=i(2809),o=i(5893),r=i(2695),s=i(9163);function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var c=s.ZP.div.withConfig({displayName:"Card__CardRoot",componentId:"sc-vwlgj6-0"})(["position:relative;width:calc(25% - 1.4rem);max-width:387px;height:150px;max-height:100%;margin:1rem .7rem;background-color:#fdfdfd;border:1px solid grey;border-radius:5px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);cursor:pointer;-moz-osx-font-smoothing:grayscale;backface-visibility:hidden;transform:translateZ(0);transition:transform 0.25s ease-out;&:hover{transform:scale(1.05);}",""],(function(e){return e.classes})),d=s.ZP.div.withConfig({displayName:"Card__CardContainer",componentId:"sc-vwlgj6-1"})(["padding:1rem;height:100%;display:flex;flex-direction:column;",""],(function(e){return e.classes})),h=s.ZP.h1.withConfig({displayName:"Card__CardTitle",componentId:"sc-vwlgj6-2"})(["flex:1;font-size:1.2rem;margin:5px auto;",""],(function(e){return e.classes})),f=s.ZP.div.withConfig({displayName:"Card__CardContent",componentId:"sc-vwlgj6-3"})(["flex:3;overflow:hidden;display:flex;flex-direction:column;",""],(function(e){return e.classes}));t.Z=function(e){var t=e.classes,i=void 0===t?{}:t,n=e.className,s=e.children,a=e.title,p=(0,r.Z)(e,["classes","className","children","title"]);return(0,o.jsx)(c,l(l({className:n,classes:i.root},p),{},{children:(0,o.jsxs)(d,{classes:i.container,children:[a&&(0,o.jsx)(h,{classes:i.title,children:a}),(0,o.jsx)(f,{classes:i.content,children:s})]})}))}},1681:function(e,t,i){"use strict";var n=i(9163).ZP.div.withConfig({displayName:"CardList__CardListRoot",componentId:"sc-3jbffl-0"})(['position:relative;width:100%;height:auto;margin:auto;overflow:auto;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;align-content:stretch;>div[class*="__CardRoot"]{@media (max-width:1024px){min-width:45%;max-width:50%;}@media (max-width:768px){min-width:60%;max-width:320px;}}']);t.Z=n},4213:function(e,t,i){"use strict";i.d(t,{Z:function(){return C}});var n=i(5893),o=i(2695),r=i(1664),s=i(9163),a=i(9008),l=function(e){var t=e.children,i=(0,o.Z)(e,["children"]).title;return(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:i}),(0,n.jsx)("meta",{name:"description",content:"Get Skill List of Tiny"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),(0,n.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Mono",rel:"stylesheet"}),(0,n.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Raleway",rel:"stylesheet"}),(0,n.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Montserrat",rel:"stylesheet"}),t]})},c=s.ZP.div.withConfig({displayName:"BasicLayout__PageContainer",componentId:"sc-19zvkm9-0"})(["min-height:100vh;margin:0;padding:0;display:grid;height:100vh;grid-template-rows:auto 1fr auto;overflow:hidden;",""],(function(e){return e.classes})),d=function(e){var t=e.classes,i=void 0===t?{}:t,r=e.className,s=e.children,a=(0,o.Z)(e,["classes","className","children"]).title;return(0,n.jsxs)(c,{className:r,classes:i.root,children:[(0,n.jsx)(l,{title:a}),s]})},h=s.ZP.div.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-zjdyjm-0"})(["position:absolute;width:100%;height:var(--header-height);left:0px;top:0px;padding:0.5rem 2.4rem;background:rgba(255,255,255,0.15);display:flex;justify-content:flex-start;margin-bottom:25px;"]),f=s.ZP.h1.withConfig({displayName:"Header__HeaderTitle",componentId:"sc-zjdyjm-1"})(["position:relative;width:100%;height:100%;margin:auto;font-family:Raleway;font-style:normal;font-weight:normal;font-size:3rem;line-height:1.2;text-align:center;color:#565656;display:flex;align-items:center;text-transform:capitalize;"]),p=function(e){var t=e.title;return(0,n.jsx)(h,{children:(0,n.jsx)(f,{children:t})})},g=s.ZP.main.withConfig({displayName:"Main__MainRoot",componentId:"sc-u3w236-0"})(["position:absolute;top:0;margin-top:var(--header-height);width:100vw;height:calc(100% - var(--header-height) - var(--footer-height));overflow-x:hidden;"]),m=s.ZP.div.withConfig({displayName:"Main__MainContainer",componentId:"sc-u3w236-1"})(["position:relative;margin:auto;width:100%;height:100%;overflow-y:scroll;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),u=function(e){var t=e.children;return(0,n.jsx)(g,{children:(0,n.jsx)(m,{className:"container",children:t})})},x=s.ZP.section.withConfig({displayName:"Section",componentId:"sc-r4s2gs-0"})(["position:relative;overflow:auto;flex:1;width:100%;height:100%;display:flex;justify-content:center;"]),y=i(5675),w=i(2494),_=i.n(w),j=s.ZP.footer.withConfig({displayName:"Footer__FooterRoot",componentId:"sc-1svr3wp-0"})(["width:100%;padding-top:var(--footer-height);position:absolute;bottom:0%;border-top:1px solid #919ea4;background:rgba(0,0,0,0.05);"]),v=s.ZP.div.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1svr3wp-1"})(["position:absolute;top:0;height:100%;width:100%;display:flex;justify-content:center;align-items:center;flex-grow:1;a{display:inline-block;}"]),b=function(){return(0,n.jsx)(j,{children:(0,n.jsx)(v,{children:(0,n.jsxs)("a",{href:"https://scratch-carbon-250.notion.site/Hello-This-is-Tiny-cd0c13d727ec4c7197d91b7346ac57ab",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:_().logo,children:(0,n.jsx)(y.default,{src:"logo.svg",alt:"TNT Logo",width:72,height:16})})]})})})},P={root:{color:"#565656",background:"linear-gradient(180deg, rgba(151, 195, 221, 0.84) 0%, #97C3DD 29.69%, #8EB8D0 100%)",textAlign:"center",fontFamily:"Roboto Mono"}},C=function(e){var t=e.children,i=(0,o.Z)(e,["children"]),s=i.category,a=i.title,l=i.sections;return(0,n.jsxs)(d,{className:"SkillsPage",classes:P,title:"Skill List".concat(s?": ".concat(s):""),children:[(0,n.jsx)(p,{title:function(e){return(0,n.jsx)(r.default,{href:"/skills",as:"/tiny-notion-app/skills",children:(0,n.jsx)("a",{children:e})})}(a)}),(0,n.jsxs)(u,{children:[null===l||void 0===l?void 0:l.map((function(e,t){return(0,n.jsx)(x,{children:(0,n.jsx)(e.component,{category:s})},t)})),t&&t]}),(0,n.jsx)(b,{})]})}},6124:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return c}});var n=i(5893),o=i(1664),r=i(4213),s=i(1681),a=i(8801),l={root:{width:"150px",height:"120px"},content:{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"normal",fontSize:"1.5rem",lineHeight:"1.5",justifyContent:"center",alignItems:"center"}};function c(){return(0,n.jsx)(r.Z,{title:"Skills",children:(0,n.jsx)(s.Z,{children:(0,n.jsx)(o.default,{href:"/skills",as:"/tiny-notion-app/skills",children:(0,n.jsx)("a",{children:(0,n.jsx)(a.Z,{classes:l,children:"Skills Board"})})})})})}},8581:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(6124)}])},2494:function(e){e.exports={container:"Page_container__3ujKo",main:"Page_main__ZzF9F",footer:"Page_footer__3WnPd",title:"Page_title__1GAv4",description:"Page_description__2Dk12",code:"Page_code__bu330",grid:"Page_grid__2WZJm",card:"Page_card__36vyd",logo:"Page_logo__2eht4"}}},function(e){e.O(0,[235,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);