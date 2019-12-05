(window.$WP=window.$WP||[]).push({id:"@ta/common.page-dates",d:["vendor-babel","ta-platform"],e:["./packages/common/page-dates/page-dates.jsx"],x:{"./packages/common/page-dates/calendar-date.jsx":["a"],"./packages/common/page-dates/date-type-store.jsx":["a"],"./packages/common/page-dates/page-dates.jsx":["CalendarDate","utils","encode","decode","DateTypeStore","setHotelsPageDates","Validation","HotelsValidation"],"./packages/common/page-dates/update.jsx":["a"],"./packages/common/page-dates/utils.jsx":["c","a","b"]},m:{"./node_modules/webpack/buildin/global.js":function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},"./packages/common/page-dates/calendar-date.jsx":function(e,t,n){"use strict";var a=n("@babel/runtime/helpers/esm/classCallCheck"),r=n.n(a),i=n("@babel/runtime/helpers/esm/createClass"),u=n.n(i),o=n("@babel/runtime/helpers/esm/defineProperty"),s=n.n(o),c=function(){function e(t){r()(this,e),s()(this,"date",void 0);var n=t||new Date;this.date=new Date(n.getFullYear(),n.getMonth(),n.getDate())}return u()(e,[{key:"daysInMonth",value:function e(){return new Date(this.year(),this.month()+1,0).getDate()}},{key:"eachDayInMonth",value:function t(n){for(var a=1,r=this.daysInMonth();a<=r;a++)n(new e(new Date(this.year(),this.month(),a)))}},{key:"thisMonth",value:function t(){return new e(new Date(this.year(),this.month(),1))}},{key:"nextMonth",value:function e(){return this.relativeMonth(1)}},{key:"previousMonth",value:function e(){return this.relativeMonth(-1)}},{key:"relativeMonth",value:function t(n){return new e(new Date(this.year(),this.month()+n,1))}},{key:"relativeDay",value:function t(n){return new e(new Date(this.year(),this.month(),this.day()+n))}},{key:"firstOfMonth",value:function t(){return new e(new Date(this.year(),this.month(),1))}},{key:"lastOfMonth",value:function t(){return new e(new Date(this.year(),this.month(),this.daysInMonth()))}},{key:"year",value:function e(){return this.date.getFullYear()}},{key:"month",value:function e(){return this.date.getMonth()}},{key:"day",value:function e(){return this.date.getDate()}},{key:"dayOfWeek",value:function e(){return this.date.getDay()}},{key:"firstDayOfMonth",value:function e(){return new Date(this.year(),this.month(),1).getDay()}},{key:"inRange",value:function e(t,n){return!(!t||!n)&&this.compare(t)>0&&this.compare(n)<0}},{key:"compare",value:function e(t){for(var n=[Date.prototype.getFullYear,Date.prototype.getMonth,Date.prototype.getDate],a=0,r=n.length;a<r;a++){var i=n[a];if(i.call(this.date)<i.call(t.date))return-1;if(i.call(this.date)>i.call(t.date))return 1}return 0}},{key:"daysTo",value:function e(t){return Math.ceil((t.date.getTime()-this.date.getTime())/864e5)}},{key:"toString",value:function e(){return[this.year(),this.month(),this.day()].join("-")}}],[{key:"fromString",value:function t(n){var a=n.split("-").map(function(e){return parseInt(e,10)});return new e(new Date(a[0],a[1],a[2]))}}]),e}();t.a=c},"./packages/common/page-dates/date-type-store.jsx":function(e,t,n){"use strict";var a=n("./packages/common/page-dates/calendar-date.jsx");t.a=Object.freeze(function r(){var e={CHECKIN:{queryString:null,pathString:null},CHECKOUT:{queryString:null,pathString:null},STAYDATES:{children:["CHECKIN","CHECKOUT"],queryString:"staydates",pathString:"zus"},EATERY:{queryString:"eaterydate",pathString:"zur"},DEPARTURE:{queryString:null,pathString:null},RETURN:{queryString:null,pathString:null},ROUNDTRIP:{children:["DEPARTURE","RETURN"],queryString:"rtdates",pathString:"zut"},ONEWAYFLIGHT:{queryString:"oneway",pathString:"zuo"},LEG_1:{queryString:"leg1date",pathString:"zu1"},LEG_2:{queryString:"leg2date",pathString:"zu2"},LEG_3:{queryString:"leg3date",pathString:"zu3"},ATTRACTION:{queryString:"attrdate",pathString:"zua"},ATTRACTION_FROM:{queryString:null,pathString:null},ATTRACTION_TO:{queryString:null,pathString:null},ATTRACTIONRANGE:{children:["ATTRACTION_FROM","ATTRACTION_TO"],queryString:"attrrange",pathString:"zue"},VPDATES:{children:["VPDEPARTURE","VPRETURN"],queryString:"vpdates",pathString:null},VPDEPARTURE:{queryString:null,pathString:null},VPRETURN:{queryString:null,pathString:null}};function t(t){var n=[];for(var a in e)e.hasOwnProperty(a)&&e[a].children&&e[a].children.indexOf(t)>=0&&n.push(a);return n}function n(e){var t=ta.page.getDates(e);return t&&t[0]?new a.a(t[0]):null}return Object.values(e).forEach(function(e){e.children&&Object.freeze(e.children),Object.freeze(e)}),e.getStartDateType=function(n){var a=t(n);if(0==a.length){var r=e[n].children;return r&&r.length>0?r[0]:n}return e[a[0]].children[0]},e.getEndDateType=function(n){var a=t(n);if(0==a.length){var r=e[n].children;return r&&r.length>0?r[r.length-1]:n}var i=e[a[0]];return i.children[i.children.length-1]},e.isChildDateType=function(e){return t(e).length>0},e.isSingleDateType=function(t){var n=e[t];return!(e.isChildDateType(t)||n&&n.children&&n.children.length>0)},e.getParents=t,e.isHotelDateType=function(e){return t(e).indexOf("STAYDATES")>=0},e.isRoundTripDateType=function(e){return t(e).indexOf("ROUNDTRIP")>=0},e.isAttractionRangeDateType=function(e){return t(e).indexOf("ATTRACTIONRANGE")>=0},e.isVacationPackagesDateType=function(e){return t(e).indexOf("VPDATES")>=0},e.allowsSameDayRange=function(t){return e.isAttractionRangeDateType(t)||e.isRoundTripDateType(t)},e.isMultiCityDateType=function(e){return"LEG_1"==e||"LEG_2"==e||"LEG_3"==e},e.isStartDateType=function(n){var a=t(n);return 0!=a.length&&0==e[a[0]].children.indexOf(n)},e.isEndDateType=function(n){var a=t(n);if(0==a.length)return!1;var r=e[a[0]];return r.children.indexOf(n)==r.children.length-1},e.getStartDate=function(t){var n=e.getStartDateType(t);return null==n?ta.page.getDates(t)[0]:ta.page.getDates(n)[0]},e.getEndDate=function(t){var n=e.getEndDateType(t);return null==n?ta.page.getDates(t)[0]:ta.page.getDates(n)[0]},e.getMinEnabledDate=function(t){if(e.isHotelDateType(t)||e.isRoundTripDateType(t));else{if("LEG_1"==t)return n("ONEWAYFLIGHT");if("LEG_2"==t)return n("LEG_1")||n("ONEWAYFLIGHT");if("LEG_3"==t)return n("LEG_2")||n("LEG_1")||n("ONEWAYFLIGHT");if("ATTRACTION_TO"==t)return n("ATTRACTION_FROM")}return null},e.flattenType=function(t){var n=e[t];return n?n.children?n.children.slice(0):[t]:[]},e.getCorrespondingDateType=function(e){switch(e){case"CHECKIN":return"CHECKOUT";case"CHECKOUT":return"CHECKIN";case"DEPARTURE":return"RETURN";case"RETURN":return"DEPARTURE";case"ATTRACTION_FROM":return"ATTRACTION_TO";case"ATTRACTION_TO":return"ATTRACTION_FROM";case"VPDEPARTURE":return"VPRETURN";case"VPRETURN":return"VPDEPARTURE";default:return null}},e}())},"./packages/common/page-dates/page-dates.jsx":function(e,t,n){"use strict";n.r(t);var a=n("./packages/common/page-dates/calendar-date.jsx"),r=n("./packages/common/page-dates/utils.jsx"),i=n("./packages/common/page-dates/date-type-store.jsx"),u=n("./packages/common/page-dates/update.jsx"),o=n("@babel/runtime/helpers/esm/classCallCheck"),s=n.n(o),c=n("@babel/runtime/helpers/esm/defineProperty"),l=n.n(c),h=function e(t,n,r){return!(i.a[t].children&&n&&r)||new a.a(n).compare(new a.a(r))<0},d=function e(t,n,r){return!(i.a[t].children&&n&&r)||0!==new a.a(n).compare(new a.a(r))},g=function e(t,n){return Math.abs(new a.a(t).daysTo(new a.a(n)))},p=function e(t){return function(e,n,a){return!(i.a[e].children&&n&&a)||g(n,a)<=t}},f=function e(t){return function(e,n,a){var r=new Date;return(!n||g(r,n)<=t)&&(!a||g(r,a)<=t)}},T=function e(t){var n=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s()(this,e),l()(this,"dateType",void 0),l()(this,"maxStayLength",void 0),l()(this,"maxStayDistance",void 0),l()(this,"validators",void 0),l()(this,"validate",function(e,t){var a=n.validators[n.dateType];return!a||0===a.length||!a.some(function(a){return!a(n.dateType,e,t)})}),this.dateType=t;var r=a.maxStayLength,i=void 0===r?30:r,u=a.maxStayDistance,o=void 0===u?396:u;this.maxStayLength=i,this.maxStayDistance=o,this.validators={STAYDATES:[h,d,p(this.maxStayLength),f(this.maxStayDistance)],ROUNDTRIP:[h],ATTRACTIONRANGE:[h],VPDATES:[h,d,p(this.maxStayLength)]}},y=new T("STAYDATES"),m=T;n.d(t,"CalendarDate",function(){return a.a}),n.d(t,"utils",function(){return r.b}),n.d(t,"encode",function(){return r.c}),n.d(t,"decode",function(){return r.a}),n.d(t,"DateTypeStore",function(){return i.a}),n.d(t,"setHotelsPageDates",function(){return u.a}),n.d(t,"Validation",function(){return m}),n.d(t,"HotelsValidation",function(){return y})},"./packages/common/page-dates/update.jsx":function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return s});var a=n("@ta/common.state"),r=n("@ta/common.radio"),i=n.n(r),u=n("./packages/common/page-dates/date-type-store.jsx"),o=n("./packages/common/page-dates/utils.jsx"),s=function t(n,r){try{var s=Object(o.c)(n,r);Object(a.getStore)().dispatch(a.actions.travelerInfo.setHotelsTravelerInfo(s,void 0,!1)),n&&r&&function e(t,n){var a=u.a[t]&&u.a[t].queryString;if(a&&n){var r="".concat(a,"=").concat(n);fetch("/UpdateSessionDatesAjax",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},credentials:"same-origin",body:r})}}("STAYDATES",s),function t(n,a){e.require(["trjs!ta/util/Error"],function(e){try{window.ta.page.pushDates?window.ta.page.pushDates(null,n,a):i()("wcDateEventsRadio").emit("dateSelected",null,n,a)}catch(t){e.record(t,"page-dates-interface: Failed to update with new dates")}})}("STAYDATES",[n,r])}catch(e){}}}).call(this,n("./node_modules/webpack/buildin/global.js"))},"./packages/common/page-dates/utils.jsx":function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"a",function(){return h});var a=n("@babel/runtime/helpers/esm/toArray"),r=n.n(a),i="_";function u(e){var t=String(e);return(1===t.length?"0":"")+t}function o(e){return[e.getFullYear(),u(e.getMonth()+1),u(e.getDate())].join(i)}function s(e){return"[object Date]"===Object.prototype.toString.call(e)}function c(e,t){if((!e||!t)&&[e,t].every(s))return!1;var n=new Date(e.getTime()),a=new Date(t.getTime());return n.setHours(0,0,0,0),a.setHours(0,0,0,0),n.getTime()===a.getTime()}var l=function e(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return n.map(function(e){return e?o(e):i+i}).join(i)},h=function e(t){var n,a,u=t?t.split(i):[];if(u.length&&u.length%3==0){for(var o,s,c,l=[];u.length;){var h=u,d=r()(h);o=d[0],s=d[1],c=d[2],u=d.slice(3),o.length&&s.length&&c.length?l.push(new Date(parseInt(o,10),parseInt(s,10)-1,parseInt(c,10))):l.push(null)}n=l[0],a=l[1]}return{startDate:n,endDate:a}};t.b={pad:u,dateToIso:o,fromString:function d(e){if(!e)return null;var t=e.split("-");return t.length<2&&(t=e.split("_")),new Date(parseInt(t[0],10),parseInt(t[1],10)-1,parseInt(t[2],10))},fromStringMulti:function g(e){if(!e)return[];var t=e.split(i);return 6!==t.length?[]:[new Date(parseInt(t[0],10),parseInt(t[1],10)-1,parseInt(t[2],10)),new Date(parseInt(t[3],10),parseInt(t[4],10)-1,parseInt(t[5],10))]},compareDatesNoTime:c,compareDatesArrayNoTime:function p(e,t){if(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length)return!1;for(var n=!0,a=0;a<e.length;a++)n=n&&c(e[a],t[a]);return n}}}}});
//# sourceMappingURL=common.page-dates.9b24aac1db.js.map