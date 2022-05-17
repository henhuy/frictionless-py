(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},y=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,b=a(e,["components","mdxType","originalType","parentName"]),d=l(n),y=r,s=d["".concat(p,".").concat(y)]||d[y]||u[y]||c;return n?i.a.createElement(s,o(o({ref:t},b),{},{components:n})):i.a.createElement(s,o({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,p=new Array(c);p[0]=y;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var b=2;b<c;b++)p[b]=n[b];return i.a.createElement.apply(null,p)}return i.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),c=(n(0),n(161)),p=["components"],o={title:"Types Reference"},a={unversionedId:"references/types-reference",id:"references/types-reference",isDocsHomePage:!1,title:"Types Reference",description:"This document provides a full reference to the Frictionless types.",source:"@site/../docs/references/types-reference.md",slug:"/references/types-reference",permalink:"/docs/references/types-reference",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/references/types-reference.md",version:"current",lastUpdatedBy:"Shashi Gharti",lastUpdatedAt:1652771969,formattedLastUpdatedAt:"5/17/2022",sidebar:"references",previous:{title:"Steps Reference",permalink:"/docs/references/steps-reference"},next:{title:"API Reference",permalink:"/docs/references/api-reference"}},b=[{value:"AnyType",id:"anytype",children:[]},{value:"ArrayType",id:"arraytype",children:[]},{value:"BooleanType",id:"booleantype",children:[]},{value:"DateType",id:"datetype",children:[]},{value:"DatetimeType",id:"datetimetype",children:[]},{value:"DurationType",id:"durationtype",children:[]},{value:"GeojsonType",id:"geojsontype",children:[]},{value:"GeopointType",id:"geopointtype",children:[]},{value:"IntegerType",id:"integertype",children:[]},{value:"NumberType",id:"numbertype",children:[]},{value:"ObjectType",id:"objecttype",children:[]},{value:"StringType",id:"stringtype",children:[]},{value:"TimeType",id:"timetype",children:[]},{value:"YearType",id:"yeartype",children:[]},{value:"YearmonthType",id:"yearmonthtype",children:[]}],l={toc:b};function d(e){var t=e.components,n=Object(i.a)(e,p);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This document provides a full reference to the Frictionless types."),Object(c.b)("h2",{id:"anytype"},"AnyType"),Object(c.b)("p",null,"Code: ",Object(c.b)("inlineCode",{parentName:"p"},"any")," ",Object(c.b)("br",null)),Object(c.b)("h2",{id:"arraytype"},"ArrayType"),Object(c.b)("p",null,"Code: ",Object(c.b)("inlineCode",{parentName:"p"},"array")," ",Object(c.b)("br",null)),Object(c.b)("h2",{id:"booleantype"},"BooleanType"),Object(c.b)("p",null,"Code: ",Object(c.b)("inlineCode",{parentName:"p"},"boolean")," ",Object(c.b)("br",null)),Object(c.b)("h2",{id:"datetype"},"DateType"),Object(c.b)("p",null,"Code: ",Object(c.b)("inlineCode",{parentName:"p"},"date")," ",Object(c.b)("br",null)),Object(c.b)("h2",{id:"datetimetype"},"DatetimeType"),Object(c.b)("p",null,"Code: ",Object(c.b)("inlineCode",{parentName:"p"},"datetime")," ",Object(c.b)("br",null)),Object(c.b)("h2",{id:"durationtype"},"DurationType"),Object(c.b)("p",null,"Code: ",Object(c.b)("inlineCode",{parentName:"p"},"duration")," ",Object(c.b)("br",null)),Object(c.b)("h2",{id:"geojsontype"},"GeojsonType"),Object(c.b)("p",null,"Code: ",Object(c.b)("inlineCode",{parentName:"p"},"geojson")," ",Object(c.b)("br",null)),Object(c.b)("h2",{id:"geopointtype"},"GeopointType"),Object(c.b)("p",null,"Code: ",Object(c.b)("inlineCode",{parentName:"p"},"geopoint")," ",Object(c.b)("br",null)),Object(c.b)("h2",{id:"integertype"},"IntegerType"),Object(c.b)("p",null,"Code: ",Object(c.b)("inlineCode",{parentName:"p"},"integer")," ",Object(c.b)("br",null)),Object(c.b)("h2",{id:"numbertype"},"NumberType"),Object(c.b)("p",null,"Code: ",Object(c.b)("inlineCode",{parentName:"p"},"number")," ",Object(c.b)("br",null)),Object(c.b)("h2",{id:"objecttype"},"ObjectType"),Object(c.b)("p",null,"Code: ",Object(c.b)("inlineCode",{parentName:"p"},"object")," ",Object(c.b)("br",null)),Object(c.b)("h2",{id:"stringtype"},"StringType"),Object(c.b)("p",null,"Code: ",Object(c.b)("inlineCode",{parentName:"p"},"string")," ",Object(c.b)("br",null)),Object(c.b)("h2",{id:"timetype"},"TimeType"),Object(c.b)("p",null,"Code: ",Object(c.b)("inlineCode",{parentName:"p"},"time")," ",Object(c.b)("br",null)),Object(c.b)("h2",{id:"yeartype"},"YearType"),Object(c.b)("p",null,"Code: ",Object(c.b)("inlineCode",{parentName:"p"},"year")," ",Object(c.b)("br",null)),Object(c.b)("h2",{id:"yearmonthtype"},"YearmonthType"),Object(c.b)("p",null,"Code: ",Object(c.b)("inlineCode",{parentName:"p"},"yearmonth")," ",Object(c.b)("br",null)))}d.isMDXComponent=!0}}]);