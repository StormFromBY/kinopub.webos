(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[18],{516:function(e,n,t){"use strict";t.d(n,"b",(function(){return p})),t.d(n,"a",(function(){return m}));var r=t(6),c=t(31),i=t(20),o=t(0),u=t(525),a=t.n(u),l=t(21),s=t(46),b=t(38),d=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},c=n.onEnterViewport,i=n.onLeaveViewport,u=Object(o.useState)(),a=Object(s.a)(u,2),l=a[1],d=Object(o.useRef)(null),j=Object(o.useRef)(!1),O=Object(o.useRef)(!1),f=Object(o.useRef)(0),v=Object(o.useRef)(0),h=Object(o.useCallback)((function(){if(e.current&&d.current){var n=Object(b.findDOMNode)(e.current);n&&d.current.observe(n)}}),[e,d]),m=Object(o.useCallback)((function(){if(e.current&&d.current){var n=Object(b.findDOMNode)(e.current);n&&(d.current.unobserve(n),d.current.disconnect(),d.current=null)}}),[e,d]),p=Object(o.useCallback)((function(e){var n=e[0]||{},t=n.isIntersecting,o=n.intersectionRatio,u="undefined"!==typeof t?t:o>0;if(!O.current&&u)return O.current=!0,null===c||void 0===c||c(),f.current+=1,j.current=u,void l(u);O.current&&!u&&(O.current=!1,null===i||void 0===i||i(),r.disconnectOnLeave&&d.current&&d.current.disconnect(),v.current+=1,j.current=u,l(u))}),[d,r.disconnectOnLeave,c,i]),g=Object(o.useCallback)((function(){d.current||(d.current=new IntersectionObserver(p,t))}),[d,t,p]);return Object(o.useEffect)((function(){return g(),h(),function(){m()}}),[g,h,m]),{inViewport:j.current,enterCount:f.current,leaveCount:v.current}},j=t(722);var O,f=function(e){var n=Object(j.a)();return Object(o.useMemo)((function(){return"".concat(e,"-").concat(n)}),[e,n])},v=t(1),h=l.b.div(O||(O=Object(i.a)(["\n  height: 5rem;\n"]))),m=Object(o.createContext)({}),p=function(e){var n=e.children,t=e.onScrollToEnd,i=Object(c.a)(e,["children","onScrollToEnd"]),u=Object(o.useRef)(null),l=f("scrollable"),s=Object(o.useMemo)((function(){return{id:l}}),[l]);return d(u,{onEnterViewport:t}),Object(v.jsxs)(a.a,Object(r.a)(Object(r.a)({id:l,direction:"vertical",verticalScrollbar:"hidden",horizontalScrollbar:"hidden"},i),{},{children:[Object(v.jsx)(m.Provider,{value:s,children:n}),Object(v.jsx)(h,{ref:u})]}))}},518:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(6),c=t(0),i=t(526),o=t.n(i),u=t(516),a=t(1),l=function(e){var n=Object(c.useContext)(u.a).id;return Object(a.jsx)(o.a,Object(r.a)({once:!0,offset:100,scrollContainer:n&&"#".concat(n)},e))};var s=l},519:function(e,n,t){"use strict";var r=t(0),c=t(544),i=t(142);n.a=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];var u=Object(r.useMemo)((function(){return new i.c}),[]),a=Object(c.a)([e].concat(t),(function(){return u[e].apply(u,t)}));return a}},521:function(e,n,t){"use strict";t.d(n,"a",(function(){return k}));var r,c,i,o=t(78),u=t(0),a=t(102),l=t.n(a),s=t(516),b=t(20),d=t(513),j=t(524),O=t.n(j),f=t(21),v=t(518),h=t(5),m=t(1),p=Object(f.b)(v.a)(r||(r=Object(b.a)(["\n  display: inline-flex;\n  position: relative;\n  height: 20rem !important;\n  width: 20%;\n"]))),g=Object(f.b)(O.a)(c||(c=Object(b.a)(["\n  width: 100%;\n"]))),x=f.b.div(i||(i=Object(b.a)(["\n  position: absolute;\n  background: var(--main-color);\n  right: 0;\n  z-index: 1;\n  padding: 0 0.5em;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  margin-right: 0.25rem;\n"]))),w=function(e){var n=e.item,t=Object(d.e)(),r=Object(u.useCallback)((function(){(null===n||void 0===n?void 0:n.id)&&t.push(Object(h.b)(h.a.Item,{itemId:n.id}))}),[null===n||void 0===n?void 0:n.id,t]);return Object(m.jsxs)(p,{height:"20rem",children:[Object(m.jsx)(x,{children:null===n||void 0===n?void 0:n.new}),Object(m.jsx)(g,{source:null===n||void 0===n?void 0:n.posters.medium,caption:null===n||void 0===n?void 0:n.title,onClick:r})]})},k=function(e){var n=e.items,t=e.loading,r=e.onScrollToEnd,c=e.scrollable,i=void 0===c||c,u=Object(m.jsxs)(m.Fragment,{children:[l()(n,(function(e){return Object(m.jsx)(w,{item:e},e.id)})),t&&l()(Object(o.a)(new Array(15)),(function(e,n){return Object(m.jsx)(w,{},n)}))]});return i?Object(m.jsx)(s.b,{onScrollToEnd:r,children:u}):u}},544:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(552),c=t(2),i=t(522);function o(e,n,t){var o=Object(c.l)(e,n,t);return Object(i.a)(o,r.a)}},735:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));t(0);var r=t(142),c=t(521),i=t(519),o=t(1),u=function(){var e=Object(i.a)("watchingSerials",r.a.True),n=e.data,t=e.isLoading;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(c.a,{items:null===n||void 0===n?void 0:n.items,loading:t})})}}}]);
//# sourceMappingURL=18.76265e7a.chunk.js.map