(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(161)),l=["components"],o={title:"Plugin Guide"},c={unversionedId:"guides/extension/plugin-guide",id:"guides/extension/plugin-guide",isDocsHomePage:!1,title:"Plugin Guide",description:"Frictionless is built on top of a powerful plugins system which is used internally and allows to extend the framework.",source:"@site/../docs/guides/extension/plugin-guide.md",slug:"/guides/extension/plugin-guide",permalink:"/docs/guides/extension/plugin-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/extension/plugin-guide.md",version:"current",lastUpdatedBy:"Shashi Gharti",lastUpdatedAt:1652855550,formattedLastUpdatedAt:"5/18/2022",sidebar:"guides",previous:{title:"Design Guide",permalink:"/docs/guides/extension/design-guide"},next:{title:"Scheme Guide",permalink:"/docs/guides/extension/scheme-guide"}},s=[{value:"Plugin Interface",id:"plugin-interface",children:[]},{value:"Plugin Example",id:"plugin-example",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,l);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Frictionless is built on top of a powerful plugins system which is used internally and allows to extend the framework."),Object(a.b)("h2",{id:"plugin-interface"},"Plugin Interface"),Object(a.b)("p",null,"Here is a list of available hooks that you can implement in your plugin:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"create_check")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"create_control")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"create_dialect")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"create_loader")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"create_parser")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"create_server")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"create_step")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"create_storage")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"create_type"))),Object(a.b)("p",null,"To create a plugin you need:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"create a module called ",Object(a.b)("inlineCode",{parentName:"li"},"frictionless_<name>")," available in PYTHONPATH"),Object(a.b)("li",{parentName:"ul"},"subclass the Plugin class and override one of the methods above")),Object(a.b)("p",null,'Please consult with "API Reference" for in-detail information about the Plugin interface and how these methods can be implemented.'),Object(a.b)("h2",{id:"plugin-example"},"Plugin Example"),Object(a.b)("p",null,"Let's say we're interested in supporting the ",Object(a.b)("inlineCode",{parentName:"p"},"csv2k")," format that we have just invented. For simplicity, let's use a format that is exactly the same with CSV."),Object(a.b)("p",null,"First of all, we need to create a ",Object(a.b)("inlineCode",{parentName:"p"},"frictionless_csv2k")," module containing a Plugin implementation and a Parser implementation but we're going to re-use the CsvParser as our new format is the same:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"frictionless_csv2k.py")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Plugin, system\nfrom frictionless.plugins.csv import CsvParser\n\nclass Csv2kPlugin(Plugin):\n    def create_parser(self, file):\n        if file.format == \"csv2k\":\n            return Csv2kParser(file)\n\nclass Csv2kParser(CsvParser):\n    pass\n\nsystem.register('csv2k', Csv2kPlugin())\n")),Object(a.b)("p",null,"Now, we can use our new format in any of the Frictionless functions that accept a table source, for example, ",Object(a.b)("inlineCode",{parentName:"p"},"extract")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Table"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import extract\n\nrows = extract('data/table.csv2k')\nprint(rows)\n")),Object(a.b)("p",null,"This example is over-simplified to show the high-level mechanics but writing Frictionless Plugins is designed to be easy. For inspiration, you can check the ",Object(a.b)("inlineCode",{parentName:"p"},"frictionless/plugins")," directory and learn from real-life examples. Also, in the Frictionless codebase there are many ",Object(a.b)("inlineCode",{parentName:"p"},"Check"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Control"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Dialect"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Loader"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Parser"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"Server")," implementations - you can read their code for better understanding of how to write your own subclass or reach out to us for support."))}p.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);