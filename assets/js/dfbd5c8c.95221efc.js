"use strict";(self.webpackChunkreact_kakao_maps_sdk=self.webpackChunkreact_kakao_maps_sdk||[]).push([[338],{6383:function(e,n,t){t.d(n,{W:function(){return o}});var a=t(7294),o=a.createContext({});n.Z=function(e){var n=e.children,t=e.center,r=e.className,i=e.size,c=e.loading,s=void 0!==c&&c,p=e.option,l=(0,a.useState)(),u=l[0],d=l[1],m=(0,a.useRef)(null);return(0,a.useLayoutEffect)((function(){s||void 0!==u||kakao.maps.load((function(){var e=new kakao.maps.LatLng(t.lat,t.lng),n=new kakao.maps.Map(m.current,Object.assign({center:e},p));d(n)}))}),[s,t,p,m]),(0,a.useEffect)((function(){if(null!==u&&void 0!==i){var e=i.width,n=i.height;m.current.style.width=e,m.current.style.height=n}}),[u,i]),a.createElement(a.Fragment,null,a.createElement("div",{id:"kakao-map-container",className:r,ref:m}),u&&a.createElement(o.Provider,{value:u},n))}},1925:function(e,n,t){t.d(n,{iu:function(){return o},o1:function(){return c},WY:function(){return i}});var a=t(7294),o=function(e){var n=e.apiKey,t=e.endpoint,o=(0,a.useState)(!0),r=o[0],i=o[1];return(0,a.useEffect)((function(){var e=document.createElement("script");e.id="kakao-maps-sdk",e.src=(null!=t?t:"//dapi.kakao.com/v2/maps/sdk.js")+"?autoload=false&appkey="+n,document.head.appendChild(e),e.onload=function(){i(!1)}}),[n,t]),r},r=t(6383),i=function(){var e=(0,a.useContext)(r.W),n=(0,a.useState)(null),t=n[0],o=n[1];return(0,a.useEffect)((function(){e&&t&&e.setCenter(new kakao.maps.LatLng(t.lat,t.lng))}),[e,t]),o},c=function(){var e=(0,a.useContext)(r.W),n=(0,a.useState)(null),t=n[0],o=n[1];return(0,a.useEffect)((function(){e&&t&&e.panTo(new kakao.maps.LatLng(t.lat,t.lng))}),[e,t]),o}},3857:function(e,n,t){t.d(n,{l:function(){return p},D:function(){return a.Z}});var a=t(6383),o=t(7462),r=t(7294),i=t(3069),c=t(3935),s=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={overlay:{}},t.el=document.createElement("div"),t}(0,i.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=this.props,n=e.map,t=e.position,a=e.xAnchor,o=e.yAnchor,r=e.zIndex,i=e.clickable,c=e.content,s=this.el,p=new kakao.maps.CustomOverlay({content:c||s,position:t,xAnchor:a,yAnchor:o,zIndex:r,clickable:i});p.setMap(n),this.setState((function(){return{overlay:p}}))},t.componentWillUnmount=function(){var e=this.state.overlay;e&&e.setMap(null)},t.render=function(){var e=this.props.children;return c.createPortal(e,this.el)},n}(r.Component),p=function(e){var n=e.position,t=e.children,i=e.option,c=(0,r.useContext)(a.W);return r.createElement(s,(0,o.Z)({},i,{map:c,position:new kakao.maps.LatLng(n.lat,n.lng)}),t)}},7517:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return k}});var a=t(7462),o=t(3366),r=t(7294),i=t(3905),c=t(8086),s=t(1925),p=t(3857),l=function(){var e=(0,s.iu)({apiKey:"6ec8020798deac7ef2f8897ad1c5ccf1"});return r.createElement(p.D,{loading:e,center:{lat:33.450701,lng:126.570667},size:{width:"100%",height:"450px"}},r.createElement(p.l,{position:{lat:33.450701,lng:126.570667}},r.createElement("div",{style:{border:"1px solid #333",borderRadius:"3px",backgroundColor:"#fff",paddingLeft:"2px",paddingRight:"2px",paddingTop:"1px",paddingBottom:"1px",color:"rgb(51, 51, 51)",fontSize:"12px"}},r.createElement("span",null,"\uce74\uce74\uc624!"))))},u=["components"],d={title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae301",sidebar_position:3},m=void 0,f={unversionedId:"sample/create-custom-overlay-1",id:"sample/create-custom-overlay-1",isDocsHomePage:!1,title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae301",description:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.",source:"@site/docs/sample/create-custom-overlay-1.mdx",sourceDirName:"sample",slug:"/sample/create-custom-overlay-1",permalink:"/docs/sample/create-custom-overlay-1",editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/create-custom-overlay-1.mdx",version:"current",sidebarPosition:3,frontMatter:{title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae301",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\uc9c0\ub3c4 \uc774\ub3d9\uc2dc\ud0a4\uae30",permalink:"/docs/sample/move-map"}},k=[{value:"Source Code",id:"source-code",children:[]}],v={toc:k};function g(e){var n=e.components,t=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,i.kt)(l,{mdxType:"SampleCreateMap"}),(0,i.kt)("h3",{id:"source-code"},"Source Code"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\uc544\ub798\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," \uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"../../src/Component/Kakaomap/")," \ub294 npm package\uc5d0 \ub9de\ucdb0\uc11c \uc0ac\uc6a9\ud574\uc8fc\uc138\uc694.")),(0,i.kt)(c.Z,{className:"language-jsx",mdxType:"CodeBlock"},'import React from "react";\nimport { useKakaoMapsSDK } from "../../src/Component/Kakaomap/hooks";\nimport { Map, CustomOverlayMap } from "../../src/Component/Kakaomap";\n\nconst SampleCreateMap = () => {\n  const loading = useKakaoMapsSDK({\n    apiKey: process.env.KAKAOMAP_API_KEY,\n  });\n\n  return (\n    <Map\n      loading={loading}\n      center={{\n        lat: 33.450701,\n        lng: 126.570667,\n      }}\n      size={{\n        width: "100%",\n        height: "450px",\n      }}\n    >\n      <CustomOverlayMap\n        position={{\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n      >\n        <div\n          style={{\n            border: "1px solid #333",\n            borderRadius: "3px",\n            backgroundColor: "#fff",\n            paddingLeft: "2px",\n            paddingRight: "2px",\n            paddingTop: "1px",\n            paddingBottom: "1px",\n            color: "rgb(51, 51, 51)",\n            fontSize: "12px",\n          }}\n        >\n          <span>\uce74\uce74\uc624!</span>\n        </div>\n      </CustomOverlayMap>\n    </Map>\n  );\n};\n\nexport default SampleCreateMap;\n'))}g.isMDXComponent=!0}}]);