(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),a=n(6),r=n(8),o=n(5),i=n.n(o),l=(n(13),n(14),n(1)),u=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h="name",j="length";var d=function(){var t=Object(l.useState)(""),e=Object(a.a)(t,2),n=e[0],c=e[1],s=Object(l.useState)(!1),o=Object(a.a)(s,2),d=o[0],g=o[1],m=function(t,e,n){var c=Object(r.a)(t);return e&&c.sort((function(t,n){switch(e){case h:return t.localeCompare(n);case j:return t.length-n.length;default:return 0}})),n&&c.reverse(),c}(b,n,d),p=[{name:"Sort alphabetically",class:"is-info",change:h},{name:"Sort by length",class:"is-success",change:j}];return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[p.map((function(t){return Object(u.jsx)("button",{type:"button",className:i()("button","".concat(t.class),{"is-light":n!==t.change}),onClick:function(){return c("".concat(t.change))},children:t.name},t.name)})),Object(u.jsx)("button",{type:"button",className:i()("button is-warning",{"is-light":!d}),onClick:function(){return g(!d)},children:"Reverse"}),(n||d)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(""),g(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:m.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4ee43781.chunk.js.map