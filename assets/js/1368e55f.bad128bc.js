"use strict";(self.webpackChunkreact_kakao_maps_sdk_docs=self.webpackChunkreact_kakao_maps_sdk_docs||[]).push([[565],{995:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return k},default:function(){return C},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return v}});var a=t(7462),o=t(3366),r=t(7294),l=t(3905),s=t(8086),u=t(1710),p=t(3772),i=function(){var e=(0,u.useMapSetCenter)(),n=(0,u.useMapPanTo)();return r.createElement(r.Fragment,null,r.createElement("h5",null,"ReactHook\uc73c\ub85c \uc774\ub3d9\uc2dc\ud0a4\uae30"),r.createElement("div",{style:{display:"flex",gap:"10px"}},r.createElement("button",{onClick:function(){return e({lat:33.452613,lng:126.570888})}},"\uc9c0\ub3c4 \uc911\uc2ec\uc88c\ud45c \uc774\ub3d9\uc2dc\ud0a4\uae30"),r.createElement("button",{onClick:function(){return n({lat:33.45058,lng:126.574942})}},"\uc9c0\ub3c4 \uc911\uc2ec\uc88c\ud45c \ubd80\ub4dc\ub7fd\uac8c \uc774\ub3d9\uc2dc\ud0a4\uae30")))},c=function(){var e=(0,r.useState)({center:{lat:33.452613,lng:126.570888},isPanto:!1}),n=e[0],t=e[1];return r.createElement(r.Fragment,null,r.createElement(p.Map,{center:n.center,isPanto:n.isPanto,style:{width:"100%",height:"450px"},level:3,onCenterChanged:function(){return console.log("center changed")}},r.createElement(i,null)),r.createElement("h5",null,"State\ubcc0\uacbd\uc73c\ub85c \uc774\ub3d9\uc2dc\ud0a4\uae30"),r.createElement("div",{style:{display:"flex",gap:"10px"}},r.createElement("button",{onClick:function(){return t({center:{lat:33.452613,lng:126.570888},isPanto:!1})}},"\uc9c0\ub3c4 \uc911\uc2ec\uc88c\ud45c \uc774\ub3d9\uc2dc\ud0a4\uae30"),r.createElement("button",{onClick:function(){return t({center:{lat:33.45058,lng:126.574942},isPanto:!0})}},"\uc9c0\ub3c4 \uc911\uc2ec\uc88c\ud45c \ubd80\ub4dc\ub7fd\uac8c \uc774\ub3d9\uc2dc\ud0a4\uae30")))},d=["components"],m={title:"\uc9c0\ub3c4 \uc774\ub3d9\uc2dc\ud0a4\uae30",sidebar_position:2},k=void 0,f={unversionedId:"sample/map/moveMap",id:"sample/map/moveMap",isDocsHomePage:!1,title:"\uc9c0\ub3c4 \uc774\ub3d9\uc2dc\ud0a4\uae30",description:"\uc9c0\ub3c4\ub97c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4. \uc9c0\ub3c4 \uac1d\uccb4\uc758 \uba54\uc18c\ub4dc\ub97c \ud1b5\ud574 \uc9c0\ub3c4\ub97c \uc6d0\ud558\ub294 \uc88c\ud45c\ub85c \uc774\ub3d9\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610, \uc9c0\ub3c4\uac00 \ud45c\uc2dc\ub418\uace0 \uc788\ub294 \uc601\uc5ed\ud06c\uae30\ub97c \ubc97\uc5b4\ub098\uc9c0 \uc54a\ub294 \uac70\ub9ac\ub77c\uba74 \uc560\ub2c8\uba54\uc774\uc158 \ud6a8\uacfc\ucc98\ub7fc \uc9c0\ub3c4\ub97c \ubd80\ub4dc\ub7fd\uac8c \uc774\ub3d9\uc2dc\ud0ac \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/sample/map/moveMap.mdx",sourceDirName:"sample/map",slug:"/sample/map/moveMap",permalink:"/docs/sample/map/moveMap",editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/map/moveMap.mdx",version:"current",sidebarPosition:2,frontMatter:{title:"\uc9c0\ub3c4 \uc774\ub3d9\uc2dc\ud0a4\uae30",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\uc9c0\ub3c4 \uc0dd\uc131\ud558\uae30",permalink:"/docs/sample/map/basicMap"},next:{title:"\ub9c8\ucee4 \uc0dd\uc131\ud558\uae30",permalink:"/docs/sample/overlay/basicMarker"}},v=[{value:"Source Code",id:"source-code",children:[]}],M={toc:v};function C(e){var n=e.components,t=(0,o.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},M,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uc9c0\ub3c4\ub97c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4. \uc9c0\ub3c4 \uac1d\uccb4\uc758 \uba54\uc18c\ub4dc\ub97c \ud1b5\ud574 \uc9c0\ub3c4\ub97c \uc6d0\ud558\ub294 \uc88c\ud45c\ub85c \uc774\ub3d9\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610, \uc9c0\ub3c4\uac00 \ud45c\uc2dc\ub418\uace0 \uc788\ub294 \uc601\uc5ed\ud06c\uae30\ub97c \ubc97\uc5b4\ub098\uc9c0 \uc54a\ub294 \uac70\ub9ac\ub77c\uba74 \uc560\ub2c8\uba54\uc774\uc158 \ud6a8\uacfc\ucc98\ub7fc \uc9c0\ub3c4\ub97c \ubd80\ub4dc\ub7fd\uac8c \uc774\ub3d9\uc2dc\ud0ac \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)(c,{mdxType:"SampleCreateMap"}),(0,l.kt)("h3",{id:"source-code"},"Source Code"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"original docs : ",(0,l.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/moveMap/"},"https://apis.map.kakao.com/web/sample/moveMap/"))),(0,l.kt)(s.Z,{className:"language-jsx",mdxType:"CodeBlock"},'import React, { useState } from "react";\nimport { useMapSetCenter, useMapPanTo } from "react-kakao-maps-sdk/hooks";\nimport { Map } from "react-kakao-maps-sdk";\n\nconst MoveMapPosition = () => {\n  // map \uac1d\uccb4\uc758 \uc911\uc2ec\uc744 \uc124\uc815\ud558\ub294 \ud568\uc218\ub97c \uac00\uc838\uc624\ub294 hook\n  const setCenter = useMapSetCenter();\n  // map \uac1d\uccb4\uc758 \uc911\uc2ec\uc744 \ubd80\ub4dc\ub7fd\uac8c \uc774\ub3d9\ud558\ub294 \ud568\uc218\ub97c \uac00\uc838\uc624\ub294 hook\n  const panTo = useMapPanTo();\n\n  return (\n    <>\n      <h5>ReactHook\uc73c\ub85c \uc774\ub3d9\uc2dc\ud0a4\uae30</h5>\n      <div\n        style={{\n          display: "flex",\n          gap: "10px",\n        }}\n      >\n        <button onClick={() => setCenter({ lat: 33.452613, lng: 126.570888 })}>\n          \uc9c0\ub3c4 \uc911\uc2ec\uc88c\ud45c \uc774\ub3d9\uc2dc\ud0a4\uae30\n        </button>\n        <button onClick={() => panTo({ lat: 33.45058, lng: 126.574942 })}>\n          \uc9c0\ub3c4 \uc911\uc2ec\uc88c\ud45c \ubd80\ub4dc\ub7fd\uac8c \uc774\ub3d9\uc2dc\ud0a4\uae30\n        </button>\n      </div>\n    </>\n  );\n};\n\nconst SampleCreateMap = () => {\n  const [state, setState] = useState({\n    // \uc9c0\ub3c4\uc758 \ucd08\uae30 \uc704\uce58\n    center: { lat: 33.452613, lng: 126.570888 },\n    // \uc9c0\ub3c4 \uc704\uce58 \ubcc0\uacbd\uc2dc panto\ub97c \uc774\uc6a9\ud560\uc9c0\uc5d0 \ub300\ud574\uc11c \uc815\uc758\n    isPanto: false,\n  });\n\n  return (\n    <>\n      <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n        center={state.center}\n        isPanto={state.isPanto}\n        style={{\n          // \uc9c0\ub3c4\uc758 \ud06c\uae30\n          width: "100%",\n          height: "450px",\n        }}\n        level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n        onCenterChanged={() => console.log("center changed")}\n      >\n        {/* \uc774\ub584 useMapSetCenter, useMapPanTo \uc758 \uacbd\uc6b0 \ubc18\ub4dc\uc2dc Map \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc790\uc2dd\uc73c\ub85c \uac10\uc2f8\uc838 \uc788\uc5b4\uc57c \ud568 */}\n        <MoveMapPosition />\n      </Map>\n      <h5>State\ubcc0\uacbd\uc73c\ub85c \uc774\ub3d9\uc2dc\ud0a4\uae30</h5>\n      <div\n        style={{\n          display: "flex",\n          gap: "10px",\n        }}\n      >\n        <button\n          onClick={() =>\n            setState({\n              center: { lat: 33.452613, lng: 126.570888 },\n              isPanto: false,\n            })\n          }\n        >\n          \uc9c0\ub3c4 \uc911\uc2ec\uc88c\ud45c \uc774\ub3d9\uc2dc\ud0a4\uae30\n        </button>\n        <button\n          onClick={() =>\n            setState({\n              center: { lat: 33.45058, lng: 126.574942 },\n              isPanto: true,\n            })\n          }\n        >\n          \uc9c0\ub3c4 \uc911\uc2ec\uc88c\ud45c \ubd80\ub4dc\ub7fd\uac8c \uc774\ub3d9\uc2dc\ud0a4\uae30\n        </button>\n      </div>\n    </>\n  );\n};\n\nexport default SampleCreateMap;\n'))}C.isMDXComponent=!0},1710:function(e,n,t){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.useRelayout=n.useMapPanTo=n.useMapSetCenter=n.useKakaoMapsSDK=void 0;var o=a(t(1913));n.useKakaoMapsSDK=o.default;var r=a(t(5847));n.useMapSetCenter=r.default;var l=a(t(6860));n.useMapPanTo=l.default;var s=a(t(9277));n.useRelayout=s.default},1913:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var a=t(7294);n.default=function(e){var n=e.apiKey,t=e.endpoint,o=a.useState(!0),r=o[0],l=o[1];return a.useEffect((function(){var e=document.createElement("script");e.id="kakao-maps-sdk",e.src=(null!=t?t:"//dapi.kakao.com/v2/maps/sdk.js")+"?autoload=false&appkey="+n,document.head.appendChild(e),e.onload=function(){l(!1)}}),[n,t]),r}},6860:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var a=t(7294),o=t(8333);n.default=function(){var e=a.useContext(o.KakaoMapContext),n=a.useState(null),t=n[0],r=n[1];return a.useEffect((function(){e&&t&&e.panTo(new kakao.maps.LatLng(t.lat,t.lng))}),[e,t]),r}},5847:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var a=t(7294),o=t(8333);n.default=function(){var e=a.useContext(o.KakaoMapContext),n=a.useState(null),t=n[0],r=n[1];return a.useEffect((function(){e&&t&&e.setCenter(new kakao.maps.LatLng(t.lat,t.lng))}),[e,t]),r}},9277:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var a=t(7294),o=t(8333),r=t(4302);n.default=function(){var e=a.useContext(o.KakaoMapContext),n=a.useContext(r.KakaoRoadviewContext);return function(){e&&e.relayout(),n&&n.relayout()}}}}]);