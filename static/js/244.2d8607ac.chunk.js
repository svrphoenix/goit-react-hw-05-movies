"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[244],{5244:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,o,i,a,s=t(5861),u=t(9439),c=t(7757),l=t.n(c),p=t(2791),f=t(1087),h=t(7689),d=t(9014),x=t(9228),v=t(168),m=t(6444),b=t(2134),g=m.ZP.form(r||(r=(0,v.Z)(["\n  margin: 0 auto;\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),w=m.ZP.button(o||(o=(0,v.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),Z=m.ZP.input(i||(i=(0,v.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n\n  font: inherit;\n  font-size: 18px;\n  border-style: none;\n  \n  outline: none;\n  padding: 0 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),y=(0,m.ZP)(b.RB5)(a||(a=(0,v.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),k=t(184),j=function(n){var e=n.onSubmit,t=(0,p.useState)(""),r=(0,u.Z)(t,2),o=r[0],i=r[1];return(0,k.jsxs)(g,{onSubmit:function(n){n.preventDefault(),i(o.toLowerCase().trim()),o?(e(o),i("")):(0,d.Am)("Please enter movie name")},children:[(0,k.jsx)(Z,{name:"search",type:"text",value:o,placeholder:"Search movies",required:!0,autoFocus:!0,autoComplete:"off",onChange:function(n){i(n.currentTarget.value)}}),(0,k.jsx)(w,{type:"submit",children:(0,k.jsx)(y,{})})]})},_=t(3932),C=t(1696),S=t(1747),A=t(3521),P=function(){var n=(0,p.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=(0,f.lr)(),i=(0,u.Z)(o,2),a=i[0],c=i[1],v=(0,p.useState)(!1),m=(0,u.Z)(v,2),b=m[0],g=m[1],w=(0,h.TH)();(0,p.useEffect)((function(){var n=a.get("query");if(n){var e=new AbortController;g(!0);var t=function(){var t=(0,s.Z)(l().mark((function t(){var o;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.z(n,e);case 3:if(0!==(o=t.sent).results.length){t.next=7;break}return(0,d.Am)("No movies found"),t.abrupt("return");case 7:r(o.results),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code&&d.Am.error("Error happened on server. Please, reload webpage."),r([]);case 14:return t.prev=14,g(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,10,14,17]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e.abort()}}}),[a]);return(0,k.jsx)(C.$,{children:(0,k.jsxs)(S.A,{children:[(0,k.jsx)(j,{onSubmit:function(n){c({query:n})}}),b&&(0,k.jsx)(A.a,{}),(0,k.jsx)(_.Z,{movies:t,location:w}),(0,k.jsx)(d.x7,{position:"top-right",reverseOrder:!1})]})})}}}]);
//# sourceMappingURL=244.2d8607ac.chunk.js.map