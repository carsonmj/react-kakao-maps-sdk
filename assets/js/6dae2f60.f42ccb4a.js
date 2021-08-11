"use strict";(self.webpackChunkreact_kakao_maps_sdk_docs=self.webpackChunkreact_kakao_maps_sdk_docs||[]).push([[48],{3081:function(e,a,n){n.r(a),n.d(a,{contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return u},metadata:function(){return v},toc:function(){return N}});var t=n(7462),s=n(3366),l=n(7294),r=n(3905),c=n(8086),m=n(3772),o=function(){return l.createElement("div",{className:"overlaybox"},l.createElement("div",{className:"boxtitle"},"\uae08\uc8fc \uc601\ud654\uc21c\uc704"),l.createElement("div",{className:"first"},l.createElement("div",{className:"triangle text"},"1"),l.createElement("div",{className:"movietitle text"},"\ub4dc\ub798\uace4 \uae38\ub4e4\uc774\uae302")),l.createElement("ul",null,l.createElement("li",{className:"up"},l.createElement("span",{className:"number"},"2"),l.createElement("span",{className:"title"},"\uba85\ub7c9"),l.createElement("span",{className:"arrow up"}),l.createElement("span",{className:"count"},"2")),l.createElement("li",null,l.createElement("span",{className:"number"},"3"),l.createElement("span",{className:"title"},"\ud574\uc801(\ubc14\ub2e4\ub85c \uac04 \uc0b0\uc801)"),l.createElement("span",{className:"arrow up"}),l.createElement("span",{className:"count"},"6")),l.createElement("li",null,l.createElement("span",{className:"number"},"4"),l.createElement("span",{className:"title"},"\ud574\ubb34"),l.createElement("span",{className:"arrow up"}),l.createElement("span",{className:"count"},"3")),l.createElement("li",null,l.createElement("span",{className:"number"},"5"),l.createElement("span",{className:"title"},"\uc548\ub155, \ud5e4\uc774\uc990"),l.createElement("span",{className:"arrow down"}),l.createElement("span",{className:"count"},"1"))))},p=function(){return l.createElement(m.Map,{center:{lat:37.502,lng:127.026581},style:{width:"100%",height:"450px"},level:4},l.createElement(m.CustomOverlayMap,{position:{lat:37.49887,lng:127.026581},xAnchor:.3,yAnchor:.91},l.createElement(o,null)))},i=["components"],u={title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae302",sidebar_position:43},d=void 0,v={unversionedId:"sample/overlay/customOverlay2",id:"sample/overlay/customOverlay2",isDocsHomePage:!1,title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae302",description:"HTML\uacfc CSS\ub97c \uc774\uc6a9\ud574 \uc9c0\ub3c4 \uc704\uc5d0 \uc790\uc720\ub86d\uac8c \ucee8\ud150\uce20\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4.",source:"@site/docs/sample/overlay/customOverlay2.mdx",sourceDirName:"sample/overlay",slug:"/sample/overlay/customOverlay2",permalink:"/docs/sample/overlay/customOverlay2",editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/overlay/customOverlay2.mdx",version:"current",sidebarPosition:43,frontMatter:{title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae302",sidebar_position:43},sidebar:"tutorialSidebar",previous:{title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae301",permalink:"/docs/sample/overlay/customOverlay1"},next:{title:"\ub85c\ub4dc\ubdf0 \uc0dd\uc131\ud558\uae30",permalink:"/docs/sample/roadview/basicRoadview"}},N=[{value:"Source Code",id:"source-code",children:[]}],k={toc:N};function y(e){var a=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,t.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"HTML\uacfc CSS\ub97c \uc774\uc6a9\ud574 \uc9c0\ub3c4 \uc704\uc5d0 \uc790\uc720\ub86d\uac8c \ucee8\ud150\uce20\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,r.kt)(p,{mdxType:"SampleCreateMap"}),(0,r.kt)("h3",{id:"source-code"},"Source Code"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"original docs : ",(0,r.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/customOverlay2/"},"https://apis.map.kakao.com/web/sample/customOverlay2/"))),(0,r.kt)(c.Z,{className:"language-jsx",mdxType:"CodeBlock"},'import React from "react";\nimport { Map, CustomOverlayMap } from "react-kakao-maps-sdk";\nimport "./customOverlay2.css";\n\n// \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\uc5d0 \ud45c\uc2dc\ub420 Component \uc785\ub2c8\ub2e4.\nconst MovieChart = () => (\n  <div className="overlaybox">\n    <div className="boxtitle">\uae08\uc8fc \uc601\ud654\uc21c\uc704</div>\n    <div className="first">\n      <div className="triangle text">1</div>\n      <div className="movietitle text">\ub4dc\ub798\uace4 \uae38\ub4e4\uc774\uae302</div>\n    </div>\n    <ul>\n      <li className="up">\n        <span className="number">2</span>\n        <span className="title">\uba85\ub7c9</span>\n        <span className="arrow up"></span>\n        <span className="count">2</span>\n      </li>\n      <li>\n        <span className="number">3</span>\n        <span className="title">\ud574\uc801(\ubc14\ub2e4\ub85c \uac04 \uc0b0\uc801)</span>\n        <span className="arrow up"></span>\n        <span className="count">6</span>\n      </li>\n      <li>\n        <span className="number">4</span>\n        <span className="title">\ud574\ubb34</span>\n        <span className="arrow up"></span>\n        <span className="count">3</span>\n      </li>\n      <li>\n        <span className="number">5</span>\n        <span className="title">\uc548\ub155, \ud5e4\uc774\uc990</span>\n        <span className="arrow down"></span>\n        <span className="count">1</span>\n      </li>\n    </ul>\n  </div>\n);\n\nconst SampleCreateMap = () => {\n  return (\n    <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n      center={{\n        // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n        lat: 37.502,\n        lng: 127.026581,\n      }}\n      style={{\n        // \uc9c0\ub3c4\uc758 \ud06c\uae30\n        width: "100%",\n        height: "450px",\n      }}\n      level={4} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n    >\n      <CustomOverlayMap // \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\ub97c \ud45c\uc2dc\ud560 Container\n        // \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\uac00 \ud45c\uc2dc\ub420 \uc704\uce58\uc785\ub2c8\ub2e4\n        position={{\n          lat: 37.49887,\n          lng: 127.026581,\n        }}\n        // \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\uac00\uc5d0 \ub300\ud55c \ud655\uc7a5 \uc635\uc158\n        xAnchor={0.3}\n        yAnchor={0.91}\n      >\n        <MovieChart />\n      </CustomOverlayMap>\n    </Map>\n  );\n};\n\nexport default SampleCreateMap;\n'))}y.isMDXComponent=!0}}]);