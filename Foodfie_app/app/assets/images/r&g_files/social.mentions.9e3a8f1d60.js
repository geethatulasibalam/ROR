(window.$WP=window.$WP||[]).push({id:"@ta/social.mentions",d:["vendor-babel","vendor-react-libs","ta-platform","@ta/social.mentions-layout","@ta/social.mentions-pieces","@ta/social.mentions-types","@ta/social.mentions-data-provider","@ta/social.mentions-tracking","@ta/social.tabs","@ta/overlays.modal","@ta/common.infinite-loader","ta-common","@ta/common.text","@ta/overlays.headers","@ta/common.grid"],e:["./packages/social/mentions/index.jsx"],x:{"./packages/social/mentions/index.jsx":["MentionsOverviewSection","MentionsWideOverviewSection","MentionsFeed","MentionsFeedForLocation"]},m:{"./packages/social/mentions/index.jsx":function(e,t,n){"use strict";n.r(t);var o=n("@babel/runtime/helpers/esm/extends"),i=n.n(o),a=n("react"),l=n("@ta/common.i18n"),r=n("@ta/social.mentions-layout"),c=n("@ta/social.mentions-pieces"),s=n("@ta/social.mentions-types"),m=n("@ta/social.mentions-data-provider"),u=n("@ta/social.mentions-tracking"),d=n("@babel/runtime/helpers/esm/slicedToArray"),v=n.n(d),_=n("react-redux"),p=n("@ta/common.classnames"),h=n.n(p),b=n("@ta/social.tabs"),M=n("@ta/overlays.modal"),C=n("@ta/common.infinite-loader"),f=n.n(C),E=n("@ta/styleguide.loading"),g=n("@ta/common.text"),O=n("@ta/overlays.headers"),w=Object(_.connect)(function(e){return{isMobile:"MOBILE"===e.meta.device.viewportCategory}})(function e(t){var n=t.content,o=t.counts,d=t.activeTab,v=t.onTabChange,_=t.hasMore,p=t.loading,C=t.loader,w=t.onClose,S=t.isMobile,y=a.useCallback(function(){v(null)},[v]),T=a.useCallback(function(){v("TRIP")},[v]),k=a.useCallback(function(){v("LINK_POST")},[v]),N=S?100:160;return a.createElement(f.a,{loadMore:C,threshold:550,throttle:50,hasMore:!p&&_,infiniteLoadOnMount:!0},function(e,t){var v=o||{},_=v.all,C=v.trips,f=v.linkPosts,j=o&&!function e(t){var n=0,o=0;return t.forEach(function(e){null==e&&o++,e&&n++}),0===o&&1===n}([null==C?void 0:C.count,null==f?void 0:f.count]),P=function e(t){return t?t.hasMore?Object(l.localize)("mentions_tab_all_count_more",{all:t.count}):Object(l.localize)("mentions_tab_all_count",{all:t.count}):Object(l.localize)("mentions_tab_all")}(_),D=function e(t){return t?t.hasMore?Object(l.localize)("mentions_tab_trips_count_more",{trips:t.count}):Object(l.localize)("mentions_tab_trips_count",{trips:t.count}):Object(l.localize)("mentions_tab_trips")}(C),I=function e(t){return t?t.hasMore?Object(l.localize)("mentions_tab_links_count_more",{linkPosts:t.count}):Object(l.localize)("mentions_tab_links_count",{linkPosts:t.count}):Object(l.localize)("mentions_tab_links")}(f);return a.createElement(M.ModalView,{onClose:w,isFullBleed:!0,bodyScroll:!1,header:a.createElement(O.TitleBar,{displayType:"LEFT_ALIGN_GRAY"},Object(l.localize)("mentions_headline"))},j&&a.createElement(b.SocialTabs,{tabNames:[P,D,I]},_&&a.createElement(b.SocialTab,{isActive:null===d,label:P,onClick:y}),C&&a.createElement(b.SocialTab,{isActive:"TRIP"===d,label:D,onClick:T}),f&&a.createElement(b.SocialTab,{isActive:"LINK_POST"===d,label:I,onClick:k})),a.createElement("div",{className:"social-mentions-MentionsFeed__feed--1H5_J",ref:e},a.createElement("ul",{ref:t},n.map(m.mapContentToSummary).filter(Object(s.requireFields)({contentFields:["title"]})).map(function(e){var t=e.content,n=t.icon,o=t.title,l=t.urlDomain,s=t.urlDescriptor,m=t.photo,d=t.description,v=e.actor,_=v.avatar,p=v.actorUrl,b=v.isVerified,M=v.displayName,C=v.contributionCount,f=v.followerCount,E=e.key,O=e.context;return a.createElement(u.MentionsTrackingProvider,i()({},O,{key:E}),a.createElement("li",{className:"social-mentions-MentionsFeed__list--3eOcp"},a.createElement(r.MentionsCard,{photo:a.createElement(c.ContentPhoto,{photo:m,photoWidth:N,photoHeight:N,placeholder:n,urlDescriptor:s}),title:o?a.createElement(c.MentionsTitle,{title:o,domain:l,urlDescriptor:s,className:h()("social-mentions-MentionsFeed__title--_xXfR","social-mentions-MentionsFeed__overflow--12TJU")}):null,header:a.createElement(c.MentionsCardHeader,{avatar:_,actorUrl:p,isVerified:b,displayName:M,contributionCount:C,followerCount:f}),description:!S&&d?a.createElement(g.Abbreviate,{text:d,max:300}):null})))}),p&&a.createElement("div",{className:"social-mentions-MentionsFeed__loading--1NLjI"},a.createElement(E.LoadingSpinner,null)))))})}),S=function e(t){var n=t.locationId,o=t.onClose,i=a.useState(null),l=v()(i,2),r=l[0],c=l[1],s=null==r?["LINK_POST","TRIP"]:[r];return a.createElement(m.SocialContentDataProvider,{objectTypes:s,locationId:n,limit:20},function(e){var t=e.content,i=e.loading,l=e.loader,u=e.hasMore;return a.createElement(m.SocialContentDataProvider,{objectTypes:["LINK_POST","TRIP"],locationId:n,limit:20},function(e){var d=e.content,v=e.loading,_=e.hasMore;return a.createElement(m.SocialContentDataProvider,{locationId:n,objectTypes:["TRIP"],limit:20},function(e){var p=e.content,h=e.loading,b=e.hasMore;return a.createElement(m.SocialContentDataProvider,{locationId:n,objectTypes:["LINK_POST"],limit:20},function(e){var n=e.content,m=e.loading,M=e.hasMore,C=v||h||m;return a.createElement(w,{content:C?[]:t,hasMore:u,loading:i||C,counts:C?void 0:{all:{count:d.length,hasMore:d.length>=15&&_},trips:{count:p.length,hasMore:p.length>=15&&b},linkPosts:{count:n.length,hasMore:n.length>=15&&M}},loader:l,activeTab:r,onTabChange:c,onClose:o,key:s.join(":")})})})})})},y=function e(t){var n=t.locationId,o=t.children,i=a.useState(!1),l=v()(i,2),r=l[0],s=l[1],m=Object(u.useMentionsInteractionContext)().showMore,d=a.useCallback(function(){s(!1)},[]),_=a.useCallback(function(e){s(!0),m&&m(e)},[m]);return a.createElement(a.Fragment,null,a.createElement(c.SeeAllLink,{onClick:_},o),r&&a.createElement(S,{locationId:n,onClose:d}))},T=function e(t){var n=t.content,o=t.locationId,d=t.hasMore,v=t.contentCount;return a.createElement(a.Fragment,null,a.createElement("h2",null,Object(l.localize)("mentions_headline")),a.createElement("ul",{className:"social-mentions-MentionsOverviewSection__mentionsContainer--3i_JS"},n.map(m.mapContentToSummary).filter(Object(s.requireFields)({contentFields:["title"]})).slice(0,3).map(function(e){var t=e.content,n=t.title,o=t.urlDescriptor,s=t.urlDomain,m=e.actor,d=m.avatar,v=m.actorUrl,_=m.isVerified,p=m.displayName,h=void 0===p?Object(l.localize)("native_login_user_review_anonymous"):p,b=e.context,M=e.key;return a.createElement(u.MentionsTrackingProvider,i()({},b,{key:M}),a.createElement("li",{className:"social-mentions-MentionsOverviewSection__mention--3qYgb"},a.createElement(r.MentionsNote,{avatar:a.createElement(c.MentionsNoteAvatar,{photo:d?{photoSizes:d}:void 0,display:"inline",target:"_self",href:v,withBorder:!0}),title:n?a.createElement(c.MentionsTitle,{title:n,urlDescriptor:o,domain:s}):null,attribution:a.createElement(c.ProfileLabel,{name:h,url:v,isVerified:_})})))})),d&&a.createElement(y,{locationId:o},function e(t){return t?t.hasMore?Object(l.localize)("mentions_see_all_count_more",{contentCount:t.count}):Object(l.localize)("mentions_see_all_count",{contentCount:t.count}):Object(l.localize)("mentions_see_all")}(v)))},k=n("@ta/common.grid"),N=Object(_.connect)(function(e){return{viewportCategory:e.meta.device.viewportCategory}})(function e(t){var n=t.content,o=t.locationId,i=t.hasMore,d=t.contentCount;if("MOBILE"===t.viewportCategory)return a.createElement(T,{content:n,locationId:o,hasMore:i,contentCount:d});var v=n.map(m.mapContentToSummary).filter(Object(s.requireFields)({contentFields:["title"]})).slice(0,2);return 0===v.length?null:a.createElement(a.Fragment,null,a.createElement("div",{className:"social-mentions-MentionsWideOverviewSection__headline--3mXgN"},a.createElement(c.MentionsHeadline,{contentCount:d,hasMore:(i||3===n.length)&&a.createElement(y,{locationId:o},Object(l.localize)("mentions_see_all"))})),2===v.length&&a.createElement(k.Columns,{gapless:!0},a.createElement(k.Column,{tablet:{width:6}},a.createElement("div",{className:h()("social-mentions-MentionsWideOverviewSection__first--2aVgJ","social-mentions-MentionsWideOverviewSection__column--Cb3dm","social-mentions-MentionsWideOverviewSection__two_cards--3QdqJ")},a.createElement(u.MentionsTrackingProvider,v[0].context,a.createElement(r.MentionsCard,{photo:a.createElement(c.ContentPhoto,{photo:v[0].content.photo,photoWidth:110,photoHeight:110,placeholder:v[0].content.icon,urlDescriptor:v[0].content.urlDescriptor}),title:v[0].content.title?a.createElement(c.MentionsTitle,{title:v[0].content.title,domain:v[0].content.urlDomain,urlDescriptor:v[0].content.urlDescriptor,className:h()("social-mentions-MentionsWideOverviewSection__big_title--D_vGc","social-mentions-MentionsWideOverviewSection__overflow--3EaYC")}):null,header:a.createElement(c.MentionsCardHeader,{avatar:v[0].actor.avatar,actorUrl:v[0].actor.actorUrl,isVerified:v[0].actor.isVerified,displayName:v[0].actor.displayName,contributionCount:v[0].actor.contributionCount,followerCount:v[0].actor.followerCount})})))),a.createElement(k.Column,{tablet:{width:6}},a.createElement("div",{className:h()("social-mentions-MentionsWideOverviewSection__second--34kqo","social-mentions-MentionsWideOverviewSection__column--Cb3dm","social-mentions-MentionsWideOverviewSection__two_cards--3QdqJ")},a.createElement(u.MentionsTrackingProvider,v[1].context,a.createElement(r.MentionsCard,{photo:a.createElement(c.ContentPhoto,{photo:v[1].content.photo,photoWidth:110,photoHeight:110,placeholder:v[1].content.icon,urlDescriptor:v[1].content.urlDescriptor}),title:v[1].content.title?a.createElement(c.MentionsTitle,{title:v[1].content.title,domain:v[1].content.urlDomain,urlDescriptor:v[1].content.urlDescriptor,className:h()("social-mentions-MentionsWideOverviewSection__big_title--D_vGc","social-mentions-MentionsWideOverviewSection__overflow--3EaYC")}):null,header:a.createElement(c.MentionsCardHeader,{avatar:v[1].actor.avatar,actorUrl:v[1].actor.actorUrl,isVerified:v[1].actor.isVerified,displayName:v[1].actor.displayName,contributionCount:v[1].actor.contributionCount,followerCount:v[1].actor.followerCount})}))))),1===v.length&&a.createElement("div",{className:"social-mentions-MentionsWideOverviewSection__one_card--2rQTQ"},a.createElement(u.MentionsTrackingProvider,v[0].context,a.createElement(r.MentionsCard,{photo:a.createElement(c.ContentPhoto,{photo:v[0].content.photo,photoWidth:170,photoHeight:110,fitStrategy:"cover",placeholder:v[0].content.icon,urlDescriptor:v[0].content.urlDescriptor}),title:v[0].content.title?a.createElement(c.MentionsTitle,{title:v[0].content.title,domain:v[0].content.urlDomain,urlDescriptor:v[0].content.urlDescriptor,className:h()("social-mentions-MentionsWideOverviewSection__big_title--D_vGc","social-mentions-MentionsWideOverviewSection__overflow--3EaYC")}):null,header:a.createElement(c.MentionsCardHeader,{avatar:v[0].actor.avatar,actorUrl:v[0].actor.actorUrl,isVerified:v[0].actor.isVerified,displayName:v[0].actor.displayName,contributionCount:v[0].actor.contributionCount,followerCount:v[0].actor.followerCount})}))))});n.d(t,"MentionsOverviewSection",function(){return T}),n.d(t,"MentionsWideOverviewSection",function(){return N}),n.d(t,"MentionsFeed",function(){return w}),n.d(t,"MentionsFeedForLocation",function(){return S})}}});
//# sourceMappingURL=social.mentions.9e3a8f1d60.js.map