(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{124:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),a=(r(0),r(161)),o=["components"],l={title:"Working with CLI"},s={unversionedId:"tutorials/working-with-cli",id:"tutorials/working-with-cli",isDocsHomePage:!1,title:"Working with CLI",description:"The Command-Line interface is a vital part for the Frictionless Framework. While working within Python provides more flexibility, CLI is the easist way to interact with Frictionless.",source:"@site/../docs/tutorials/working-with-cli.md",slug:"/tutorials/working-with-cli",permalink:"/docs/tutorials/working-with-cli",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/tutorials/working-with-cli.md",version:"current",lastUpdatedBy:"Lilly Winfree",lastUpdatedAt:1651540161,formattedLastUpdatedAt:"5/3/2022",sidebar:"tutorials",previous:{title:"Working in Python",permalink:"/docs/tutorials/working-in-python"},next:{title:"Working with API",permalink:"/docs/tutorials/working-with-api"}},c=[{value:"Install",id:"install",children:[]},{value:"Commands",id:"commands",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Errors",id:"errors",children:[]}],d={toc:c};function u(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Command-Line interface is a vital part for the Frictionless Framework. While working within Python provides more flexibility, CLI is the easist way to interact with Frictionless."),Object(a.b)("h2",{id:"install"},"Install"),Object(a.b)("p",null,"To install the package please follow the ",Object(a.b)("a",{parentName:"p",href:"/docs/guides/quick-start"},"Quick Start")," guide. Usually, a simple installation using Pip or Anaconda will install the ",Object(a.b)("inlineCode",{parentName:"p"},"frictionless")," binary on your computer so you don't need to install CLI aditionally."),Object(a.b)("h2",{id:"commands"},"Commands"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"frictionless")," binary requires providing a command like ",Object(a.b)("inlineCode",{parentName:"p"},"describe")," or ",Object(a.b)("inlineCode",{parentName:"p"},"validate"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless describe # to describe your data\nfrictionless extract # to extract your data\nfrictionless validate # to validate your data\nfrictionless transform # to transform your data\nfrictionless --help # to get list of the command\nfrictionless --version # to get the version\n")),Object(a.b)("h2",{id:"arguments"},"Arguments"),Object(a.b)("p",null,"All the arguments for the main CLI command are the same as they are in Python. You can read ",Object(a.b)("a",{parentName:"p",href:"/docs/guides/guides-overview"},"Guides")," and use almost all the information from there within the command-line. There is an important different in how arguments are written (note the dashes):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Python: validate('data/table.csv', limit_errors=1)\nCLI: $ validate data/table.csv --limit-errors 1\n")),Object(a.b)("p",null,"To get help for a command and its arguments you can use the help flag with the command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless describe --help # to get help for describe\nfrictionless extract --help # to get help for extract\nfrictionless validate --help # to get help for validate\nfrictionless transform --help # to get help for transform\n")),Object(a.b)("h2",{id:"outputs"},"Outputs"),Object(a.b)("p",null,"Usually, Frictionless commands returns pretty-formatted tabular data like ",Object(a.b)("inlineCode",{parentName:"p"},"extract")," or ",Object(a.b)("inlineCode",{parentName:"p"},"validate")," do. For the ",Object(a.b)("inlineCode",{parentName:"p"},"describe")," command you get a metadata back and you can choose in what format to return it:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless describe # default YAML with a commented front-matter\nfrictionless describe --yaml # standard YAML\nfrictionless describe --json # standard JSON\n")),Object(a.b)("h2",{id:"errors"},"Errors"),Object(a.b)("p",null,"The Frictionless' CLI interface should not fail with any internal Python errors with a traceback (a long listing of related code). If you see something like this please create an issue in the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/frictionless-py/issues"},"Issue Tracker"),"."))}u.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||a;return r?i.a.createElement(b,l(l({ref:t},c),{},{components:r})):i.a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);