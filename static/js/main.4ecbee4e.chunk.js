(this["webpackJsonptaller1-web-adv"]=this["webpackJsonptaller1-web-adv"]||[]).push([[0],{27:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},42:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),r=i(17),o=i.n(r),s=i(15),l=i(10),a=i(2),d=i(18),u=i(7),f=(i(27),i(0)),h=function(e){var t=e.catProps,i=t.settings[0],c=t.settings[1];return Object(f.jsx)("article",{className:"CatView",children:Object(f.jsxs)(u.SvgLoader,{path:"".concat("/cat-creator","/images/render/catsvg.svg"),children:[Object(f.jsx)(u.SvgProxy,{selector:"#eye-left-color",fill:c.fill}),Object(f.jsx)(u.SvgProxy,{selector:"#eye-right-color",fill:c.fill}),Object(f.jsx)(u.SvgProxy,{selector:"#head",fill:i.fill}),Object(f.jsx)(u.SvgProxy,{selector:"#ear-left-outside",fill:i.fill}),Object(f.jsx)(u.SvgProxy,{selector:"#ear-right-outside",fill:i.fill}),Object(f.jsx)(u.SvgProxy,{selector:"#body-front",fill:i.fill}),Object(f.jsx)(u.SvgProxy,{selector:"#body-back",fill:i.fill}),Object(f.jsx)(u.SvgProxy,{selector:"#tail",fill:i.fill})]})})},b="".concat("/cat-creator","/images/"),j=function(e){return e.includes("blank")?void 0:"".concat(b).concat(e,".svg")},k=(i(29),function(e){e.value;var t=e.url,i=e.checked,c=e.onChangeCurrentAttribute,n=j(t);return Object(f.jsx)("div",{className:"SettingOptionItem".concat(i?" SettingOptionItem--selected":""),onClick:c,children:Object(f.jsx)("img",{className:"SettingOptionItem__image",src:n,alt:""})})}),m=(i(30),function(e){var t=e.settingOptions,i=e.onChangeCurrentAttribute;return Object(f.jsx)("section",{className:"EditSelection",children:t.map((function(e){var t=e.id,c=e.url,n=e.checked;return Object(f.jsx)(k,{value:t,url:c,checked:n,onChangeCurrentAttribute:function(){i(t)}},t)}))})}),v=(i(31),function(e){var t=e.value,i=e.checked,c=e.onEditAttributeColor,n=j("items/checked");return Object(f.jsx)("div",{className:"ColorItem",style:{backgroundColor:t},onClick:c,children:Object(f.jsx)("img",{className:"ColorItem__check".concat(i?"":" ColorItem__check--remove"),src:n,alt:""})})}),O=(i(32),function(e){var t=e.colorList,i=e.onEditAttributeColor;return Object(f.jsxs)("section",{className:"ColorSection",children:[Object(f.jsx)("h3",{className:"ColorSection__title",children:"Color"}),Object(f.jsx)("div",{className:"ColorSection__items",children:t.map((function(e){var t=e.id,c=e.fill,n=e.checked;return Object(f.jsx)(v,{value:c,checked:n,onEditAttributeColor:function(){i(c)}},t)}))})]})}),x=(i(33),function(e){e.value;var t=e.url,i=e.checked,c=e.onEditAttributeType,n=j(t),r=j("items/checked");return Object(f.jsxs)("div",{className:"EditItem",onClick:c,children:[Object(f.jsx)("img",{className:"EditItem__image",src:n,alt:""}),Object(f.jsx)("img",{className:"EditItem__check".concat(i?"":" EditItem__check--remove"),src:r,alt:""})]})}),p=(i(34),function(e){var t=e.itemList,i=e.onEditAttributeType;return Object(f.jsxs)("section",{className:"EditSection",children:[Object(f.jsx)("h3",{className:"EditSection__title",children:"Tipo"}),Object(f.jsx)("div",{className:"EditSection__items",children:t.map((function(e){var t=e.id,c=e.value,n=e.url,r=e.checked;return Object(f.jsx)(x,{value:c,url:n,checked:r,onEditAttributeType:function(){i(c)}},t)}))})]})}),g=(i(35),function(e){var t=e.currentAttribute,i=e.itemList,c=e.colorList,n=e.onEditAttributeType,r=e.onEditAttributeColor,o=function(e){switch(e){case"fur":return"Pelaje";case"eyes":return"Ojos";case"necklace":return"Collar";case"hat":return"Sombrero";case"scene":return"Escenario"}}(t);return Object(f.jsxs)("section",{className:"EditOptions",children:[Object(f.jsx)("h2",{className:"EditOptions__title",children:o}),Object(f.jsx)(p,{itemList:i,onEditAttributeType:n}),Object(f.jsx)(O,{colorList:c,onEditAttributeColor:r})]})}),A=(i(36),function(e){var t=e.settingOptions,i=e.currentAttribute,c=e.onEditAttributeType,n=e.onEditAttributeColor,r=e.onChangeCurrentAttribute,o=function(e){var i=t.slice().findIndex((function(t){return t.id===e}));return t[i].itemList}(i),s=function(e){var i=t.slice().findIndex((function(t){return t.id===e}));return t[i].colorList}(i);return Object(f.jsxs)("article",{className:"EditPanel",children:[Object(f.jsx)(m,{settingOptions:t,onChangeCurrentAttribute:r}),Object(f.jsx)(g,{currentAttribute:i,onEditAttributeType:c,onEditAttributeColor:n,itemList:o,colorList:s})]})}),C=(i(37),function(e){var t=e.catProps,i=e.settingsOptions,c=e.currentAttribute,n=e.onEditAttributeType,r=e.onEditAttributeColor,o=e.onChangeCurrentAttribute;return Object(f.jsxs)("article",{className:"Creator",children:[Object(f.jsx)(h,{catProps:t}),Object(f.jsx)(A,{settingOptions:i,currentAttribute:c,onEditAttributeType:n,onEditAttributeColor:r,onChangeCurrentAttribute:o})]})}),E=(i(38),{id:0,catName:"Gato nuevo",creationDate:Date.now(),settings:[{id:"fur",type:"blank",fill:"#ffffff",shadow:"#EBEBEB",stroke:"AFAFAF"},{id:"eyes",type:"expanded",fill:"#0BF86A",shadow:"none",stroke:"none"},{id:"necklace",type:"blank",fill:"#ffffff",shadow:"none",stroke:"none"},{id:"hat",type:"blank",fill:"#ffffff",shadow:"none",stroke:"none"}]}),y=[{id:"fur",url:"attributes/fur",checked:!0,itemList:[{id:0,value:"blank",url:"items/blank",checked:!0},{id:1,value:"lines",url:"items/lines",checked:!1},{id:2,value:"colorAndWhite",url:"items/colorAndWhite",checked:!1},{id:3,value:"siamese",url:"items/siamese",checked:!1},{id:4,value:"tricolor",url:"items/tricolor",checked:!1}],colorList:[{id:0,fill:"#FFFFFF",shadow:"#EBEBEB",stroke:"#AFAFAF",checked:!0},{id:1,fill:"#303030",shadow:"#000000",stroke:"#AFAFAF",checked:!1}]},{id:"eyes",url:"attributes/eyes",checked:!1,itemList:[{id:0,value:"expanded",url:"items/expanded",checked:!0},{id:1,value:"normal",url:"items/normal",checked:!1},{id:2,value:"contracted",url:"items/contracted",checked:!1}],colorList:[{id:0,fill:"#0BF86A",shadow:"none",stroke:"none",checked:!0},{id:1,fill:"#05F0FF",shadow:"none",stroke:"none",checked:!1},{id:2,fill:"#FF78CB",shadow:"none",stroke:"none",checked:!1}]},{id:"necklace",url:"attributes/necklace",checked:!1,itemList:[{id:0,value:"blank",url:"items/blank",checked:!0},{id:1,value:"round",url:"items/round",checked:!1},{id:2,value:"heart",url:"items/heart",checked:!1},{id:3,value:"ribbon",url:"items/ribbon",checked:!1}],colorList:[{id:0,fill:"#ffffff",shadow:"none",stroke:"none",checked:!0},{id:1,fill:"#000000",shadow:"none",stroke:"none",checked:!1},{id:2,fill:"#DC1515",shadow:"none",stroke:"none",checked:!1}]},{id:"hat",url:"attributes/hat",checked:!1,itemList:[{id:0,value:"blank",url:"items/blank",checked:!0},{id:1,value:"tophat",url:"items/tophat",checked:!1},{id:2,value:"party",url:"items/party",checked:!1}],colorList:[{id:0,fill:"#ffffff",shadow:"none",stroke:"none",checked:!0},{id:1,fill:"#000000",shadow:"none",stroke:"none",checked:!1},{id:2,fill:"#DC1515",shadow:"none",stroke:"none",checked:!1}]}],S=function(){var e=Object(c.useState)(E),t=Object(l.a)(e,2),i=t[0],n=t[1],r=Object(c.useState)(y),o=Object(l.a)(r,2),u=o[0],h=o[1],b=Object(c.useState)("fur"),j=Object(l.a)(b,2),k=j[0],m=j[1],v=function(e){var t=u.slice();t.forEach((function(t){t.id===e?t.checked=!0:t.checked=!1})),h(t),m(e)},O=function(e){var t=Object(s.a)({},i),c=t.settings.findIndex((function(e){return e.id===k}));t.settings[c].type=e;var r=u.slice(),o=r.findIndex((function(e){return e.id===k}));r[o].itemList.forEach((function(e){e.value===t.settings[c].type?e.checked=!0:e.checked=!1})),n(t),h(r)},x=function(e){var t=Object(s.a)({},i),c=t.settings.findIndex((function(e){return e.id===k}));t.settings[c].fill=e;var r=y.slice(),o=r.findIndex((function(e){return e.id===k}));r[o].colorList.forEach((function(e){e.fill===t.settings[c].fill?e.checked=!0:e.checked=!1})),n(t),h(r)};return Object(f.jsx)("main",{className:"App",children:Object(f.jsx)(d.a,{basename:"/cat-creator",children:Object(f.jsx)(a.a,{path:"/",render:function(){return Object(f.jsx)(C,{catProps:i,settingsOptions:u,currentAttribute:k,onEditAttributeType:O,onEditAttributeColor:x,onChangeCurrentAttribute:v})}})})})};o.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.4ecbee4e.chunk.js.map