(this["webpackJsonpyou-tickle"]=this["webpackJsonpyou-tickle"]||[]).push([[0],{14:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n(1),s=n.n(a),i=n(5),o=n.n(i),r=(n(14),n(3)),u=n(6);n(29);var j=function(){var t=Object(a.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),j=o[0],l=o[1],b=Object(a.useState)(0),p=Object(r.a)(b,2),h=p[0],d=p[1],O={height:"390",width:"640",playerVars:{autoplay:1,start:h}};return Object(c.jsxs)("div",{children:[Object(c.jsxs)("form",{onSubmit:function(t){fetch("/api/tickle/"+n).then((function(t){return t.json()})).then((function(t){d(parseInt(t.phrase.start)),console.log(O),console.log(O.playerVars.start),l(t.link)})),t.preventDefault()},children:[Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",value:n,onChange:function(t){s(t.target.value)}})}),Object(c.jsx)("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)(u.a,{videoId:j,opts:O,onReady:function(t){t.target.pauseVideo()}}),";"]})]})};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.4f3585cd.chunk.js.map