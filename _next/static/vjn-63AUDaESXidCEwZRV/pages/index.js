(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=u,e.useAmp=function(){return u(r.default.useContext(l.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},l=n("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,a=t.hybrid,r=void 0!==a&&a,l=t.hasQuery;return n||r&&(void 0!==l&&l)}},"5fIB":function(t,e,n){var a=n("7eYB");t.exports=function(t){if(Array.isArray(t))return a(t)}},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=c,e.default=void 0;var a=i(n("q1tI")),r=i(n("Xuae")),l=n("lwAK"),u=n("FYa8"),o=n("/0+H");function i(t){return t&&t.__esModule?t:{default:t}}function c(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var s=["name","httpEquiv","charSet","itemProp"];function f(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(c(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,a={};return function(r){var l=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var u=r.key.slice(r.key.indexOf("$")+1);t.has(u)?l=!1:t.add(u)}switch(r.type){case"title":case"base":e.has(r.type)?l=!1:e.add(r.type);break;case"meta":for(var o=0,i=s.length;o<i;o++){var c=s[o];if(r.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?l=!1:n.add(c);else{var d=r.props[c],f=a[c]||new Set;f.has(d)?l=!1:(f.add(d),a[c]=f)}}}return l}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}var h=(0,r.default)();function p(t){var e=t.children;return(a.default.createElement(l.AmpStateContext.Consumer,null,(function(t){return a.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(h,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,o.isInAmpMode)(t)},e)}))})))}p.rewind=h.rewind;var m=p;e.default=m},FYa8:function(t,e,n){"use strict";var a;e.__esModule=!0,e.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext(null);e.HeadManagerContext=r},RXBc:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),r=n.n(a),l=n("rePB"),u=n("TSYQ"),o=n.n(u),i=n("WlAH"),c=r.a.createElement,d=function(t){var e=t.children,n=t.className,r=o()(Object(l.a)({},n,!!n));return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),c("main",{className:r,id:i.c},e)},s=n("UAhK"),f=n("/MKj"),h=r.a.createElement,p=function(){var t=Object(f.c)((function(t){return t.transaction.transactionList})),e=[0,0,0,0,0,0,0,0];return h("div",{className:"main"},h("table",{align:"center",border:"1 solid black",width:"1100",height:"150",color:"black",className:"mb-5"},h("thead",null,h("tr",null,h("th",{height:"50",colSpan:"9",align:"center",bgcolor:"#00FF7F"},h("h1",{align:"center"}," Summary Of Transaction")))),h("tbody",null,h("tr",{bgcolor:"#FFCC66"},h("th",{rowSpan:"2",width:"70"},"Date"),h("th",{colSpan:"4"},"Assets"),h("th",null,"="),h("th",{colSpan:"2"},"Liability"),h("th",{rowSpan:"2",width:"100"},"Revenue & Expence & Owner Equity")),h("tr",{className:"balancerow",bgcolor:"#FFE0B1",align:"center"},h("td",{width:"100"}," Cash "),h("td",{width:"100"}," Account Receivable "),h("td",{width:"100"}," Supplies "),h("td",{width:"100"}," Office equipment "),h("td",{width:"10"}," = "),h("td",{width:"150"}," Notes payable "),h("td",{width:"150"}," Account payable ")),null===t||void 0===t?void 0:t.map((function(t){var n=t.id,a=t.date,r=t.balance,l=t.t1,u=t.tt1,o=t.t2,i=t.tt2,c=["","","","","","","",""];return c[l-1]=r*u,c[o-1]=r*i,e[l-1]=e[l-1]+c[l-1],e[o-1]=e[o-1]+c[o-1],h("tr",{key:n,className:"balancerow",bgcolor:"#FFE0B1",align:"center"},h("td",{width:"100"}," ",a," "),h("td",null," ",c[0]),h("td",null," ",c[1]),h("td",null," ",c[2]),h("td",null," ",c[3]),h("td",null," = "),h("td",null," ",c[4]),h("td",null," ",c[5]),h("td",null," ",c[6]))})),h("tr",{className:"balancerow",bgcolor:"#FFE0B1",align:"center"},h("td",{width:"100"},"Total"),h("td",null," ",e[0]),h("td",null," ",e[1]),h("td",null," ",e[2]),h("td",null," ",e[3]),h("td",null," = "),h("td",null," ",e[4]),h("td",null," ",e[5]),h("td",null," ",e[6])),h("tr",null,h("td",null,h("h4",null,"Grand Total")),h("td",null," "),h("td",null,h("h4",null," ",e[0]+e[1]+e[2]+e[3])),h("td",null," "),h("td",null," "),h("td",null,"="),h("td",null," "),h("td",null,h("h4",null,e[4]+e[5]+e[6])),h("td",null," ")))))},m=n("9At1"),v=r.a.createElement,y=function(){var t=Object(f.b)(),e=Object(a.useState)(new Date),n=e[0],r=e[1],l=Object(a.useState)(0),u=l[0],o=l[1],c=Object(a.useState)(""),d=c[0],s=c[1],h=Object(a.useState)(""),p=h[0],y=h[1],b=Object(a.useState)(0),w=b[0],g=b[1],S=function(){var e;n&&p&&w&&t((e={date:n,trn:d,trn1:p,price:w,quality:u},{type:m.a.ADD_TRANSACTION,data:e}))};return v("div",null,v("div",{className:"mar fix"},v("marquee",null," Accounting ")),v("h1",{className:"t11",align:"center"},"Transaction Table"),v("table",{align:"center",border:"1px solid black",width:"900",height:"100",color:"black"},v("thead",{bgcolor:"#FFCC66"},v("tr",null,v("th",{width:"100"},"Date"),v("th",{width:"50"},"Quantity"),v("th",null,"Element"),v("th",null,"Transaction"),v("th",null,"Price"),v("th",null,"Submit"))),v("tbody",null,v("tr",null,v("td",null,v("input",{name:"data",value:n,type:"date",onChange:function(t){return r(t.target.value)}})),v("td",null,v("input",{name:"quality",value:u,type:"number",onChange:function(t){return o(t.target.value)}})),v("td",null,v("select",{value:d,name:"trn",onChange:function(t){return s(t.target.value)}},i.a.map((function(t){return v("option",{key:t.id,value:t.id},t.name)})))),v("td",null,v("select",{value:p,onChange:function(t){return y(t.target.value)}},i.e.map((function(t){return v("option",{key:t.id,value:t.id},t.name)})))),v("td",null,v("input",{name:"price",type:"number",value:w,onChange:function(t){return g(t.target.value)}})),v("td",null,v("button",{onClick:S},"Submit"))))))},b=r.a.createElement,w=function(){return b("div",null,b(y,null),b(p,null))},g="ACCOUNTING",S=r.a.createElement;e.default=function(){return S(d,null,S(s.default,{id:g}),S(w,null))}},UAhK:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),r=n.n(a),l=n("8Kt/"),u=n.n(l),o=n("9Koi"),i=r.a.createElement,c=function(t){return"META_DESCRIPTIONS.".concat(t)};e.default=function(t){var e=t.id,n=t.content,a=Object(o.a)().t;return i(u.a,null,i("title",null,a(function(t){return"META_TITLES.".concat(t)}(e),{content:n})),i("meta",{name:"description",content:a(c(e),{content:n})}),i("link",{href:"https://fonts.googleapis.com/css2?family=Baskervville&family=Roboto:wght@400;500&display=swap",rel:"stylesheet"}))}},Xuae:function(t,e,n){"use strict";var a=n("/GRZ"),r=n("qXWd"),l=n("i2R6"),u=n("48fX"),o=n("tCBg"),i=n("T0f4"),c=n("mPvQ");function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=i(t);if(e){var r=i(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return o(this,n)}}e.__esModule=!0,e.default=void 0;var s=n("q1tI"),f=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(c(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(o){u(c,o);var i=d(c);function c(t){var l;return a(this,c),l=i.call(this,t),f&&(e.add(r(l)),n(r(l))),l}return l(c,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),l(c,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(s.Component))}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,n){"use strict";var a;e.__esModule=!0,e.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});e.AmpStateContext=r},mPvQ:function(t,e,n){var a=n("5fIB"),r=n("rlHP"),l=n("KckH"),u=n("kG2m");t.exports=function(t){return a(t)||r(t)||l(t)||u()}},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])}},[["vlRD",0,1,2]]]);