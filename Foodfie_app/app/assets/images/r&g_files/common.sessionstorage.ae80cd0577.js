(window.$WP=window.$WP||[]).push({id:"@ta/common.sessionstorage",e:["./packages/common/sessionstorage/sessionstorage.jsx"],x:{"./packages/common/sessionstorage/sessionstorage.jsx":["default"]},m:{"./packages/common/sessionstorage/sessionstorage.jsx":function(n,s,e){"use strict";e.r(s);var o=function n(s){return function(){try{return s.apply(void 0,arguments)}catch(n){return null}}},t=function n(){return window&&window.sessionStorage?window.sessionStorage:null},r=o(function(n){var s=t();return s&&JSON.parse(s.getItem(n)||"0")||null}),a=o(function(n,s){var e=t();e&&e.setItem(n,s)}),i=o(function(n){var s=t();s&&s.removeItem(n)});s.default={get:r,set:a,has:function n(s){return!!r(s)},remove:i,enabled:function n(){return null!==t()}}}}});
//# sourceMappingURL=common.sessionstorage.ae80cd0577.js.map