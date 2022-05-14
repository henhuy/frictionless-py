(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{161:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||c;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),c=(r(0),r(161)),a=["components"],i={title:"Schemes Reference"},l={unversionedId:"references/schemes-reference",id:"references/schemes-reference",isDocsHomePage:!1,title:"Schemes Reference",description:"It's a schemes reference supported by the main Frictionless package. If you have installed external plugins, there can be more schemes available. Below we're listing a scheme group name (or a loader name) like Remote, which is used, for example, for http, https etc schemes. Options can be used for creating controls, for example, control = RemoteControl(http_timeout=1).",source:"@site/../docs/references/schemes-reference.md",slug:"/references/schemes-reference",permalink:"/docs/references/schemes-reference",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/references/schemes-reference.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1652531382,formattedLastUpdatedAt:"5/14/2022",sidebar:"references",previous:{title:"Plugins Reference",permalink:"/docs/references/plugins-reference"},next:{title:"Formats Reference",permalink:"/docs/references/formats-reference"}},s=[{value:"Buffer",id:"buffer",children:[]},{value:"Local",id:"local",children:[]},{value:"Multipart",id:"multipart",children:[]},{value:"Remote",id:"remote",children:[{value:"Http Session",id:"http-session",children:[]},{value:"Http Preload",id:"http-preload",children:[]},{value:"Http Timeout",id:"http-timeout",children:[]}]},{value:"S3",id:"s3",children:[{value:"Endpoint Url",id:"endpoint-url",children:[]}]},{value:"Stream",id:"stream",children:[]}],p={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"It's a schemes reference supported by the main Frictionless package. If you have installed external plugins, there can be more schemes available. Below we're listing a scheme group name (or a loader name) like Remote, which is used, for example, for ",Object(c.b)("inlineCode",{parentName:"p"},"http"),", ",Object(c.b)("inlineCode",{parentName:"p"},"https")," etc schemes. Options can be used for creating controls, for example, ",Object(c.b)("inlineCode",{parentName:"p"},"control = RemoteControl(http_timeout=1)"),"."),Object(c.b)("h2",{id:"buffer"},"Buffer"),Object(c.b)("p",null,"There are no options available."),Object(c.b)("h2",{id:"local"},"Local"),Object(c.b)("p",null,"There are no options available."),Object(c.b)("h2",{id:"multipart"},"Multipart"),Object(c.b)("p",null,"There are no options available."),Object(c.b)("h2",{id:"remote"},"Remote"),Object(c.b)("h3",{id:"http-session"},"Http Session"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Type: requests.Session")),Object(c.b)("p",null,"User defined http session"),Object(c.b)("h3",{id:"http-preload"},"Http Preload"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Type: bool")),Object(c.b)("p",null,"Don't use http streaming and preload all the data"),Object(c.b)("h3",{id:"http-timeout"},"Http Timeout"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Type: int")),Object(c.b)("p",null,"User defined http timeout in minutes"),Object(c.b)("h2",{id:"s3"},"S3"),Object(c.b)("h3",{id:"endpoint-url"},"Endpoint Url"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Type: string")),Object(c.b)("p",null,"Endpoint url"),Object(c.b)("h2",{id:"stream"},"Stream"),Object(c.b)("p",null,"There are no options available."))}u.isMDXComponent=!0}}]);