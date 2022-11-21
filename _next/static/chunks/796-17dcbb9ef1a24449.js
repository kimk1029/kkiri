"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[796],{8062:function(n,i,e){var t=e(5893),r=function(n){return(0,t.jsx)("div",{style:{marginTop:n.height}})};i.Z=r},9852:function(n,i,e){var t=e(7297),r=e(5893),o=e(9521);function c(){var n=(0,t.Z)(["\n          gap: ","px;\n        "]);return c=function(){return n},n}function a(){var n=(0,t.Z)(["\n          flex: ",";\n        "]);return a=function(){return n},n}function s(){var n=(0,t.Z)(["\n          margin: ",";\n        "]);return s=function(){return n},n}function l(){var n=(0,t.Z)(["\n          padding: ",";\n        "]);return l=function(){return n},n}function d(){var n=(0,t.Z)(["\n          flex-direction: ",";\n        "]);return d=function(){return n},n}function u(){var n=(0,t.Z)(["\n  display: flex;\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return u=function(){return n},n}var f=function(n){var i=n.children,e=n.flex,t=n.gap,o=n.direction,c=n.margin,a=n.padding,s=n.className;return(0,r.jsx)(h,{flex:e,gap:t,direction:o,margin:c,padding:a,className:s,children:i})},h=o.ZP.div.withConfig({componentId:"sc-673bd605-0"})(u(),function(n){var i=n.gap;return i?(0,o.iv)(c(),i):""},function(n){var i=n.flex;return i?(0,o.iv)(a(),i):""},function(n){var i=n.margin;return i?(0,o.iv)(s(),i):""},function(n){var i=n.padding;return i?(0,o.iv)(l(),i):""},function(n){var i=n.direction;return i?(0,o.iv)(d(),i):""});i.Z=f},683:function(n,i){i.Z={MOBILE:"@media ".concat("(max-width: 870px)")}},8998:function(n,i,e){e.d(i,{Z:function(){return G}});var t=e(7297),r=e(5893),o=e(683),c=e(5675),a=e.n(c),s=e(9521),l=e(9852);function d(){var n=(0,t.Z)(["\n      "," : -10px\n    "]);return d=function(){return n},n}function u(){var n=(0,t.Z)(["\n  display: flex;\n  gap: 30px;\n  position: absolute;\n  bottom: 45px;\n  "," {\n    display: none;\n  }\n  ","\n"]);return u=function(){return n},n}var f=function(n){var i=n.location;return(0,r.jsxs)(h,{location:i,gap:30,align:"flex-end",children:[(0,r.jsx)(a(),{layout:"fixed",src:"/img/blue-character.svg",width:72,height:111}),(0,r.jsx)(a(),{layout:"fixed",src:"/img/purple-character.svg",width:85,height:113}),(0,r.jsx)(a(),{layout:"fixed",src:"/img/yellow-character.svg",width:72,height:130}),(0,r.jsx)(a(),{layout:"fixed",src:"/img/green-character.svg",width:79,height:96})]})},h=(0,s.ZP)(l.Z).withConfig({componentId:"sc-9523ee9f-0"})(u(),o.Z.MOBILE,function(n){var i=n.location;return(0,s.iv)(d(),i)});function g(){var n=(0,t.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #f5f5f5;\n  padding: 24px 0;\n  width: 100vw;\n"]);return g=function(){return n},n}function p(){var n=(0,t.Z)(["\n  font-family: yg-jalnan;\n  color: #989898;\n"]);return p=function(){return n},n}function x(){var n=(0,t.Z)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 100%;\n  color: #616161;\n"]);return x=function(){return n},n}function m(){var n=(0,t.Z)(["\n  font-weight: 300;\n  font-size: 10px;\n  line-height: 100%;\n  color: #757575;\n  margin-top: 21px;\n"]);return m=function(){return n},n}var v=function(){return(0,r.jsxs)(b,{children:[(0,r.jsx)(j,{children:"끼리끼리"}),(0,r.jsxs)(l.Z,{gap:13,margin:"8px 0 0 0",children:[(0,r.jsx)(Z,{children:"Contact us"}),(0,r.jsx)(Z,{children:"admin@gmail.com"})]}),(0,r.jsx)(y,{children:"Copyright ⓒ심커. All rights reserved."})]})},b=s.ZP.footer.withConfig({componentId:"sc-928e6b78-0"})(g()),j=s.ZP.span.withConfig({componentId:"sc-928e6b78-1"})(p()),Z=s.ZP.span.withConfig({componentId:"sc-928e6b78-2"})(x()),y=s.ZP.span.withConfig({componentId:"sc-928e6b78-3"})(m()),w=e(1664),k=e.n(w),I=e(7294);function C(){var n=(0,t.Z)(["\n  background-color: #ff7f42;\n  width: 100%;\n  height: 80px;\n  .container {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0 auto;\n    position: relative;\n    padding: 0 40px;\n    max-width: 1042px;\n    .logo {\n      height: 40px;\n      display: block;\n    }\n    .logo-mini {\n      display: none;\n    }\n    .dimmed {\n      display: none;\n    }\n    .mobile-menu {\n      display: none;\n    }\n  }\n  "," {\n    height: 56px;\n    box-sizing: border-box;\n    .container {\n      padding: 0 20px;\n      .logo {\n        display: none;\n      }\n      .dimmed {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        display: block;\n        background-color: #000;\n        transition: opacity 0.5s ease-out;\n        &.active {\n          opacity: 0.8;\n          z-index: 998;\n        }\n        &.none {\n          opacity: 0;\n          z-index: -999;\n        }\n      }\n      .mobile-menu {\n        display: block;\n        width: 80%;\n        height: 100vh;\n        position: absolute;\n        top: 0;\n        background-color: #fff;\n        z-index: 999;\n        transition: left 0.7s ease;\n        box-sizing: border-box;\n        .close-btn {\n          position: absolute;\n          top: 20px;\n          right: 20px;\n        }\n        &.active {\n          left: -20px;\n        }\n        &.none {\n          left: -86%;\n        }\n        .m-login {\n          padding: 20px;\n          border-bottom: 10px solid #f4f4f4;\n          span {\n            font-size: 12px;\n            width: 68%;\n            display: inline-block;\n          }\n        }\n        .m-menu {\n          padding: 0 20px;\n          ul.board {\n            border-bottom: 1px solid #e0e0e0;\n            line-height: 40px;\n            font-size: 16px;\n            padding-bottom: 10px;\n            list-style-type: none;\n            padding-inline-start: 0px;\n            h2 {\n              color: #616161;\n              font-weight: 400;\n              font-size: 13px;\n              line-height: 19px;\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return C=function(){return n},n}function N(){var n=(0,t.Z)(["\n  width: 100%;\n  height: 38px;\n  background: #faecdc;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  "," {\n    height: 25px;\n  }\n"]);return N=function(){return n},n}function P(){var n=(0,t.Z)(["\n  cursor: pointer;\n  background: #ffffff;\n  border-radius: 10px;\n  color: #000;\n  width: 76px;\n  height: 40px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  "," {\n    height: 28px;\n  }\n"]);return P=function(){return n},n}function z(){var n=(0,t.Z)(["\n  cursor: pointer;\n  display: none;\n  "," {\n    display: block;\n  }\n  &.center {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"]);return z=function(){return n},n}function E(){var n=(0,t.Z)(["\n  cursor: pointer;\n  position: relative;\n  display: block;\n  "," {\n    display: none;\n  }\n"]);return E=function(){return n},n}var B=s.ZP.nav.withConfig({componentId:"sc-8c8b9993-0"})(C(),o.Z.MOBILE),M=s.ZP.a.withConfig({componentId:"sc-8c8b9993-1"})(N(),o.Z.MOBILE),L=s.ZP.div.withConfig({componentId:"sc-8c8b9993-2"})(P(),o.Z.MOBILE),O=s.ZP.div.withConfig({componentId:"sc-8c8b9993-3"})(z(),o.Z.MOBILE),T=s.ZP.div.withConfig({componentId:"sc-8c8b9993-4"})(E(),o.Z.MOBILE),_=function(){var n=(0,I.useState)(!1),i=n[0],e=n[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{children:(0,r.jsx)(a(),{src:"/img/icon/menu.svg",onClick:function(){return e(!i)},width:24,height:24})}),(0,r.jsxs)("div",{className:"mobile-menu ".concat(i?"active":"none"),children:[(0,r.jsx)("span",{onClick:function(){return e(!i)},className:"close-btn",children:(0,r.jsx)(O,{children:(0,r.jsx)(a(),{src:"/img/icon/close.svg",width:24,height:24})})}),(0,r.jsxs)("div",{className:"m-login",children:[(0,r.jsx)("span",{children:"로그인하고 끼리끼리를 마음껏 투어하세요!"}),(0,r.jsx)(k(),{href:"/login",children:(0,r.jsx)(M,{children:"로그인"})})]}),(0,r.jsxs)("div",{className:"m-menu",children:[(0,r.jsxs)("ul",{className:"board",children:[(0,r.jsx)("li",{children:"공지사항"}),(0,r.jsx)("li",{children:"자유게시판"})]}),(0,r.jsxs)("ul",{className:"board",children:[(0,r.jsx)("h2",{children:"유형별 TEST"}),(0,r.jsx)("li",{children:"MBTI 유형"}),(0,r.jsx)("li",{children:"색상 테스트"}),(0,r.jsx)("li",{children:"?? 테스트"}),(0,r.jsx)("li",{children:"?? 테스트"})]})]})]}),(0,r.jsx)("div",{className:"dimmed ".concat(i?"active":"none")})]})},F=function(){return(0,r.jsx)(B,{children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(_,{}),(0,r.jsx)(T,{children:(0,r.jsx)(a(),{className:"logo",src:"/img/logo.png",width:115,height:39})}),(0,r.jsx)(O,{className:"center",children:(0,r.jsx)(a(),{className:"logo-mini",src:"/img/logo-mini.svg",width:39,height:35,objectFit:"fill"})}),(0,r.jsx)(k(),{href:"/login",children:(0,r.jsx)("div",{className:"account",children:(0,r.jsx)(L,{children:"로그인"})})})]})})};function S(){var n=(0,t.Z)(["\n  background-color: #fff;\n  overflow: auto;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]);return S=function(){return n},n}function A(){var n=(0,t.Z)(['\n  position: relative;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  background-color: inherit;\n  height: 100%;\n  background-image: url("/img/background-dash.svg");\n  background-repeat: no-repeat;\n  background-position-y: bottom;\n  background-position-x: left;\n  background-attachment: fixed;\n  background-size: 90%;\n  '," {\n    background-image: unset;\n  }\n"]);return A=function(){return n},n}var X=function(n){var i=n.children;return(0,r.jsxs)(q,{children:[(0,r.jsx)(F,{}),(0,r.jsxs)(D,{children:[i,(0,r.jsx)(f,{location:"left"}),(0,r.jsx)(f,{location:"right"})]}),(0,r.jsx)(v,{})]})},q=s.ZP.div.withConfig({componentId:"sc-c80d1209-0"})(S()),D=s.ZP.div.withConfig({componentId:"sc-c80d1209-1"})(A(),o.Z.MOBILE),G=X}}]);