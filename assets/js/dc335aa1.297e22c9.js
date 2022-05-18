(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(7),o=(a(0),a(161)),i=["components"],c={title:"Migration"},l={unversionedId:"development/migration",id:"development/migration",isDocsHomePage:!1,title:"Migration",description:"Frictionless is a logical continuation of many existing packages created for Frictionless Data as though datapackage or tableschema. Although, most of these packages will be supported going forward, you can migrate to Frictionless, which is Python 3.6+, as it improves many aspects of working with data and metadata. This document also covers migration from one framework's version to another.",source:"@site/../docs/development/migration.md",slug:"/development/migration",permalink:"/docs/development/migration",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/development/migration.md",version:"current",lastUpdatedBy:"Shashi Gharti",lastUpdatedAt:1652855550,formattedLastUpdatedAt:"5/18/2022",sidebar:"development",previous:{title:"Changelog",permalink:"/docs/development/changelog"},next:{title:"Authors",permalink:"/docs/development/authors"}},s=[{value:"From v3 to v4",id:"from-v3-to-v4",children:[]},{value:"From dataflows",id:"from-dataflows",children:[]},{value:"From goodtables",id:"from-goodtables",children:[]},{value:"From datapackage",id:"from-datapackage",children:[]},{value:"From tableschema",id:"from-tableschema",children:[]},{value:"From tabulator",id:"from-tabulator",children:[]}],d={toc:s};function m(e){var t=e.components,a=Object(n.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Frictionless is a logical continuation of many existing packages created for Frictionless Data as though ",Object(o.b)("inlineCode",{parentName:"p"},"datapackage")," or ",Object(o.b)("inlineCode",{parentName:"p"},"tableschema"),". Although, most of these packages will be supported going forward, you can migrate to Frictionless, which is Python 3.6+, as it improves many aspects of working with data and metadata. This document also covers migration from one framework's version to another."),Object(o.b)("h2",{id:"from-v3-to-v4"},"From v3 to v4"),Object(o.b)("p",null,"Version 3 of the Frictionless Framework was experimental/unstable and active for 6 months. We improved the framework dramatically during this period of time including various minor API changes and one major API change - ",Object(o.b)("inlineCode",{parentName:"p"},"Table")," class has been merged into the ",Object(o.b)("inlineCode",{parentName:"p"},"Resource")," class. Please read the updated documentation to migrate to version 4:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/guides/guides-overview"},"Guides Overview")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/tutorials/tutorials-overview"},"Tutorials Overview")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/references/references-overview"},"References Overview"))),Object(o.b)("h2",{id:"from-dataflows"},"From dataflows"),Object(o.b)("p",null,"Frictionless Framework provides the ",Object(o.b)("inlineCode",{parentName:"p"},"frictionless transform")," function for data transformation. It can be used to migrate from ",Object(o.b)("inlineCode",{parentName:"p"},"dataflows")," or ",Object(o.b)("inlineCode",{parentName:"p"},"datapackage-pipelines"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/guides/transform-guide"},"Transform Guide")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/guides/transform-steps"},"Transform Steps"))),Object(o.b)("h2",{id:"from-goodtables"},"From goodtables"),Object(o.b)("p",null,"Frictionless Framework provides the ",Object(o.b)("inlineCode",{parentName:"p"},"frictionless validate")," function which is in high-level exactly the same as ",Object(o.b)("inlineCode",{parentName:"p"},"goodtables validate"),". Also ",Object(o.b)("inlineCode",{parentName:"p"},"frictionless describe")," is an improved version of ",Object(o.b)("inlineCode",{parentName:"p"},"goodtables init"),". You instead need to use the ",Object(o.b)("inlineCode",{parentName:"p"},"frictionless")," command instead of the ",Object(o.b)("inlineCode",{parentName:"p"},"goodtables")," command:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/guides/validation-guide"},"Validation Guide")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/guides/validation-checks"},"Validation Checks"))),Object(o.b)("h2",{id:"from-datapackage"},"From datapackage"),Object(o.b)("p",null,"Frictionless Framework has ",Object(o.b)("inlineCode",{parentName:"p"},"Package")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Resource")," classes which is almost the same as ",Object(o.b)("inlineCode",{parentName:"p"},"datapackage")," has:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/guides/framework/package-guide"},"Package Guide")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/guides/framework/resource-guide"},"Resource Guide"))),Object(o.b)("h2",{id:"from-tableschema"},"From tableschema"),Object(o.b)("p",null,"Frictionless Framework has ",Object(o.b)("inlineCode",{parentName:"p"},"Schema")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Field")," classes which is almost the same as ",Object(o.b)("inlineCode",{parentName:"p"},"tableschema")," has:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/guides/framework/schema-guide"},"Schema Guide")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/guides/framework/field-guide"},"Field Guide"))),Object(o.b)("h2",{id:"from-tabulator"},"From tabulator"),Object(o.b)("p",null,"Frictionless has ",Object(o.b)("inlineCode",{parentName:"p"},"Resource")," class which is an equivalent of the tabulator's ",Object(o.b)("inlineCode",{parentName:"p"},"Stream")," class:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/guides/framework/resource-guide"},"Resource Guide"))))}m.isMDXComponent=!0},161:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(a),p=r,u=m["".concat(i,".").concat(p)]||m[p]||b[p]||o;return a?n.a.createElement(u,c(c({ref:t},s),{},{components:a})):n.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);