(this["webpackJsonptaller1-web-adv"]=this["webpackJsonptaller1-web-adv"]||[]).push([[0],{100:function(t,e,r){},101:function(t,e,r){},208:function(t,e,r){},209:function(t,e,r){},210:function(t,e,r){},211:function(t,e,r){},212:function(t,e,r){},213:function(t,e,r){},216:function(t,e,r){},217:function(t,e,r){},218:function(t,e,r){},219:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),i=r(84),c=r.n(i),o=r(33),s=r(20),l=r(4),u=r(17),d=r(13),b=(r(98),"#eye-left-shadow, #eye-right-shadow, #mouth, #whisker-left-1, #whisker-left-2, #whisker-left-3, #whisker-right-1, #whisker-right-2, #whisker-right-3"),h="#head, #ear-left-outside, #ear-right-outside, #body-front, #body-back, #paw-left, #paw-right, #tail",f="#eye-left-color, #eye-right-color",j="#tail-linePattern00, #tail-linePattern01, #tail-linePattern02, #tail-linePattern03, #tail-linePattern04, #tail-linePattern05, #body-back-linePattern00, #body-back-linePattern01, #body-back-linePattern02, #body-back-linePattern03, #body-back-linePattern04, #body-back-linePattern05, #body-back-linePattern06, #body-back-linePattern07, #body-front-linePattern00, #body-front-linePattern01, #body-front-linePattern02, #body-front-linePattern03, #body-front-linePattern04, #body-front-linePattern05, #body-front-linePattern06, #body-front-linePattern07, #body-front-linePattern08, #body-front-linePattern09, #body-front-linePattern10, #body-front-linePattern11, #body-front-linePattern12, #body-front-linePattern13, #body-front-linePattern14, #body-front-linePattern15, #body-front-linePattern16, #head-linePattern00, #head-linePattern01, #head-linePattern02, #head-linePattern03, #head-linePattern04, #head-linePattern05, #head-linePattern06, #head-linePattern07, #head-linePattern08, #ear-left-linePattern, #ear-right-linePattern",m="#tail-cwPattern, #paw-left-back-cwPattern, #paw-right-back-cwPattern, #paw-front-left-cwPattern, #paw-front-right-cwPattern, #body-front-cwPattern, #body-back-cwPattern, #head-cwPattern",k=r(3),y=function(t){var e=t.catProps,r=t.currentAttribute,n=e.settings[0],a=e.settings[1],i=b,c=h,o=f,s=j,l=m,u=function(t){switch(t){default:return"";case"eyes":return"CatView__model--eyes";case"necklace":return"CatView__model--necklace";case"hat":return"CatView__model--hat"}}(r);return Object(k.jsx)("article",{className:"CatView",children:Object(k.jsxs)(d.SvgLoader,{className:"CatView__model ".concat(u),path:"".concat("/cat-creator","/images/render/catrender.svg"),children:[Object(k.jsx)(d.SvgProxy,{selector:o,fill:a.fill}),Object(k.jsx)(d.SvgProxy,{selector:i,fill:n.stroke}),Object(k.jsx)(d.SvgProxy,{selector:c,fill:n.fill,stroke:n.stroke}),Object(k.jsx)(d.SvgProxy,{selector:s,fill:n.stroke,display:"lines"===n.type?"visible":"none"}),Object(k.jsx)(d.SvgProxy,{selector:"#ear-left-linePattern, #ear-right-linePattern",stroke:"lines"===n.type?"rgba(0, 0, 0, 0.1)":n.stroke}),Object(k.jsx)(d.SvgProxy,{selector:l,display:"colorAndWhite"===n.type?"visible":"none",fill:"#ffffff"===n.fill?"lightGray":"#FFFFFF"})]})})},p="".concat("/cat-creator","/images/"),O=function(t){return t.includes("blank")?void 0:"".concat(p).concat(t,".svg")},v=(r(100),function(t){t.value;var e=t.url,r=t.checked,n=t.onChangeCurrentAttribute,a=O(e);return Object(k.jsx)("div",{className:"AttributeItem".concat(r?" AttributeItem--selected":""),onClick:n,children:Object(k.jsx)("img",{className:"AttributeItem__image",src:a,alt:""})})}),x=(r(101),function(t){var e=t.attributeOptions,r=t.onChangeCurrentAttribute;return Object(k.jsx)("section",{className:"AttributeSelection",children:e.map((function(t){var e=t.id,n=t.url,a=t.checked;return Object(k.jsx)(v,{value:e,url:n,checked:a,onChangeCurrentAttribute:function(){r(e)}},e)}))})}),C=r(90),P=(r(208),function(t){var e=t.colorList,r=t.onEditAttributeColor,a=Object(n.useState)("#FFFFFF"),i=Object(s.a)(a,2),c=i[0],o=i[1];return Object(k.jsxs)("section",{className:"AttributeColorSection",children:[Object(k.jsx)("h3",{className:"AttributeColorSection__title",children:"Color"}),Object(k.jsx)(C.a,{color:c,onChange:function(t){o(t.hex);var e=function(t,e){var r=!1;"#"===t[0]&&(t=t.slice(1),r=!0);var n=parseInt(t,16),a=(n>>16)+e;a>255?a=255:a<0&&(a=0);var i=(n>>8&255)+e;i>255?i=255:i<0&&(i=0);var c=(255&n)+e;if(c>255?c=255:c<0&&(c=0),.2126*a+.7152*c+.0722*i<30){var o=parseInt(t,16),s=80+(o>>16);s>255?s=255:s<0&&(s=0);var l=80+(o>>8&255);l>255?l=255:l<0&&(l=0);var u=80+(255&o);return u>255?u=255:u<0&&(u=0),(r?"#":"")+(u|l<<8|s<<16).toString(16)}return(r?"#":"")+(c|i<<8|a<<16).toString(16)}(t.hex,-80);r(t.hex,e)},colors:e})]})}),A=(r(209),function(t){t.value;var e=t.url,r=t.checked,n=t.onEditAttributeType,a=O(e),i=O("items/checked");return Object(k.jsxs)("div",{className:"AttributeTypeItem",onClick:n,children:[Object(k.jsx)("img",{className:"AttributeTypeItem__image",src:a,alt:""}),Object(k.jsx)("img",{className:"AttributeTypeItem__check".concat(r?"":" AttributeTypeItem__check--remove"),src:i,alt:""})]})}),_=(r(210),function(t){var e=t.itemList,r=t.subtitle,n=t.onEditAttributeType;return Object(k.jsxs)("section",{className:"AttributeTypeSection",children:[Object(k.jsx)("h3",{className:"AttributeTypeSection__title",children:r}),Object(k.jsx)("div",{className:"AttributeTypeSection__items",children:e.map((function(t){var e=t.id,r=t.value,a=t.url,i=t.checked;return Object(k.jsx)(A,{value:r,url:a,checked:i,onEditAttributeType:function(){n(r)}},e)}))})]})}),g=(r(211),function(t){var e=t.currentAttribute,r=t.itemList,n=t.onEditAttributeType,a=t.onEditAttributeColor,i=function(t){switch(t){case"fur":return"Pelaje";case"eyes":return"Ojos";case"necklace":return"Collar";case"hat":return"Sombrero";case"scene":return"Escenario"}}(e),c=function(t){switch(t){case"fur":return"Patr\xf3n";case"eyes":return"Pupila";case"necklace":return"Accesorio";case"hat":return"Tipo"}}(e),o=function(t){switch(t){case"fur":return["#FFFFFF","#EBEBEB","#ABB8C3","#8ED1FC","#FF6900","#FCB900","#F78DA7","#000000"];case"eyes":default:return["#ABB8C3","#000000","#0BF86A","#05F0FF","#FF6900","#FCB900","#EB144C","#F78DA7","#9900EF"]}}(e);switch(e){case"scene":return Object(k.jsx)("section",{className:"AttributeOptions",children:Object(k.jsx)("h2",{className:"AttributeOptions__title",children:i})});default:return Object(k.jsxs)("section",{className:"AttributeOptions",children:[Object(k.jsx)("h2",{className:"AttributeOptions__title",children:i}),Object(k.jsx)(_,{itemList:r,subtitle:c,onEditAttributeType:n}),Object(k.jsx)(P,{colorList:o,onEditAttributeColor:a})]})}}),N=(r(212),r(213),function(t){var e=t.catName,r=t.onEditCatName;return Object(k.jsxs)("form",{className:"CatControl",children:[Object(k.jsx)("input",{className:"CatControl__input",type:"text",name:"catName",value:e,placeholder:"Escribe el nombre de tu gato",onChange:function(t){r(t.target.value)}}),Object(k.jsxs)("div",{className:"CatControl__options",children:[Object(k.jsxs)("div",{className:"CatControl__section",children:[Object(k.jsx)("button",{className:"CatControl__btn CatControl__btn--green",children:"Guardar"}),Object(k.jsx)("button",{className:"CatControl__btn CatControl__btn--default",children:"Por defecto"})]}),Object(k.jsx)("div",{className:"CatControl__section",children:Object(k.jsx)(u.b,{className:"CatControl__btn CatControl__btn--navegate",to:"/",children:"Ver creados"})})]})]})}),w=function(t){var e=t.catName,r=t.attributeOptions,n=t.currentAttribute,a=t.onEditCatName,i=t.onEditAttributeType,c=t.onEditAttributeColor,o=t.onChangeCurrentAttribute,s=function(t){var e=r.slice().findIndex((function(e){return e.id===t}));return r[e].itemList}(n);return Object(k.jsxs)("article",{className:"EditPanel",children:[Object(k.jsx)(x,{attributeOptions:r,onChangeCurrentAttribute:o}),Object(k.jsx)(g,{currentAttribute:n,onEditAttributeType:i,onEditAttributeColor:c,itemList:s}),Object(k.jsx)(N,{catName:e,onEditCatName:a})]})},E=(r(216),function(t){var e=t.catProps,r=t.attributeOptions,n=t.currentAttribute,a=t.onEditCatName,i=t.onEditAttributeType,c=t.onEditAttributeColor,o=t.onChangeCurrentAttribute;return Object(k.jsxs)("article",{className:"Creator",children:[Object(k.jsx)(y,{catProps:e,currentAttribute:n}),Object(k.jsx)("div",{className:"Creator__empty"}),Object(k.jsx)(w,{catName:e.catName,onEditCatName:a,attributeOptions:r,currentAttribute:n,onEditAttributeType:i,onEditAttributeColor:c,onChangeCurrentAttribute:o})]})}),F=(r(217),function(){return Object(k.jsx)("article",{className:"Intro",children:Object(k.jsxs)("section",{className:"Intro__container",children:[Object(k.jsx)("h1",{className:"Intro__title",children:"Cat creator"}),Object(k.jsxs)("section",{className:"Intro__controls",children:[Object(k.jsx)(u.b,{className:"Intro__btn",to:"/create",children:"Crear un gato"}),Object(k.jsx)(u.b,{className:"Intro__btn Intro__btn--gray",to:"/cats",children:"Ver creados"})]})]})})}),I=(r(218),{id:0,catName:"",creationDate:Date.now(),settings:[{id:"fur",type:"blank",fill:"#ffffff",shadow:"#EBEBEB",stroke:"#AFAFAF"},{id:"eyes",type:"expanded",fill:"#0BF86A",shadow:"none",stroke:"none"},{id:"necklace",type:"blank",fill:"#ffffff",shadow:"none",stroke:"none"},{id:"hat",type:"blank",fill:"#ffffff",shadow:"none",stroke:"none"}]}),S=[{id:"fur",url:"attributes/fur",checked:!0,itemList:[{id:0,value:"blank",url:"items/blank",checked:!0},{id:1,value:"lines",url:"items/lines",checked:!1},{id:2,value:"colorAndWhite",url:"items/colorAndWhite",checked:!1},{id:3,value:"siamese",url:"items/siamese",checked:!1},{id:4,value:"tricolor",url:"items/tricolor",checked:!1}]},{id:"eyes",url:"attributes/eyes",checked:!1,itemList:[{id:0,value:"expanded",url:"items/expanded",checked:!0},{id:1,value:"normal",url:"items/normal",checked:!1},{id:2,value:"contracted",url:"items/contracted",checked:!1}]},{id:"necklace",url:"attributes/necklace",checked:!1,itemList:[{id:0,value:"blank",url:"items/blank",checked:!0},{id:1,value:"round",url:"items/round",checked:!1},{id:2,value:"heart",url:"items/heart",checked:!1},{id:3,value:"ribbon",url:"items/ribbon",checked:!1}]},{id:"hat",url:"attributes/hat",checked:!1,itemList:[{id:0,value:"blank",url:"items/blank",checked:!0},{id:1,value:"tophat",url:"items/tophat",checked:!1},{id:2,value:"party",url:"items/party",checked:!1}]},{id:"scene",url:"attributes/scene",checked:!1,itemList:[{id:0,value:"blank",url:"items/blank",checked:!0},{id:1,value:"tophat",url:"items/tophat",checked:!1},{id:2,value:"party",url:"items/party",checked:!1}]}],T=function(){var t=Object(n.useState)(I),e=Object(s.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(S),c=Object(s.a)(i,2),d=c[0],b=c[1],h=Object(n.useState)("fur"),f=Object(s.a)(h,2),j=f[0],m=f[1],y=function(t){var e=Object(o.a)({},r);e.catName=t,a(e)},p=function(t){var e=d.slice();e.forEach((function(e){e.id===t?e.checked=!0:e.checked=!1})),b(e),m(t)},O=function(t){var e=Object(o.a)({},r),n=e.settings.findIndex((function(t){return t.id===j}));e.settings[n].type=t;var i=d.slice(),c=i.findIndex((function(t){return t.id===j}));i[c].itemList.forEach((function(t){t.value===e.settings[n].type?t.checked=!0:t.checked=!1})),a(e),b(i)},v=function(t,e){var n=Object(o.a)({},r),i=n.settings,c=i.findIndex((function(t){return t.id===j}));i[c].fill=t,i[c].stroke=e,n.settings=i,a(n)};return Object(k.jsx)("main",{className:"App",children:Object(k.jsxs)(u.a,{basename:"/cat-creator",children:[Object(k.jsx)(l.a,{path:"/",exact:!0,render:function(){return Object(k.jsx)(F,{})}}),Object(k.jsx)(l.a,{path:"/create",render:function(){return Object(k.jsx)(E,{catProps:r,attributeOptions:d,currentAttribute:j,onEditCatName:y,onEditAttributeType:O,onEditAttributeColor:v,onChangeCurrentAttribute:p})}})]})})};c.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(T,{})}),document.getElementById("root"))},98:function(t,e,r){}},[[219,1,2]]]);
//# sourceMappingURL=main.892d9487.chunk.js.map