(this.webpackJsonploopix=this.webpackJsonploopix||[]).push([[0],{71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(23),r=a.n(c),i=a(16),o=a(20),l=a(19),d=a(36),j=a(5),u={isLoading:!1};var p={pads:[]};var b=Object(l.b)({system:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOADING_START":return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0});case"LOADING_DONE":return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1});default:return e}},pad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PADS":return Object(j.a)(Object(j.a)({},e),{},{pads:t.pads});case"UPDATE_PAD":return Object(j.a)(Object(j.a)({},e),{},{pads:e.pads.map((function(e){return e._id===t.pad._id?t.pad:e}))});default:return e}}}),O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,v=Object(l.d)(b,O(Object(l.a)(d.a))),f=a(4),x=a(13),h=a(12),g=a.n(h),_=a(18),m=a(26);var y,w={loadFromStorage:function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null},saveToStorage:function(e,t){localStorage[e]=JSON.stringify(t)}},P=[{_id:101,name:"Disco Party",loop:"loops/120_future_funk_beats_25.mp3",isOn:!1},{_id:102,name:"Night Mood",loop:"loops/120_stutter_breakbeats_16.mp3",isOn:!1},{_id:103,name:"Bass Guitar",loop:"loops/Bass Warwick heavy funk groove on E 120 BPM.mp3",isOn:!1},{_id:104,name:"Classic Guitar",loop:"loops/electric guitar coutry slide 120bpm - B.mp3",isOn:!1},{_id:105,name:"Drums",loop:"loops/FUD_120_StompySlosh.mp3",isOn:!1},{_id:106,name:"Tropical Island",loop:"loops/GrooveB_120bpm_Tanggu.mp3",isOn:!1},{_id:107,name:"Gamming Style",loop:"loops/MazePolitics_120_Perc.mp3",isOn:!1},{_id:108,name:"Groovy kid",loop:"loops/PAS3GROOVE1.03B.mp3",isOn:!1},{_id:109,name:"Alien Bit",loop:"loops/SilentStar_120_Em_OrganSynth.mp3",isOn:!1}],S="PADS",N={query:function(){return k.apply(this,arguments)},getById:function(e){var t=P.find((function(t){return t._id===e}));return Promise.resolve(t)},save:function(e){y=y.map((function(t){return t._id===e._id?e:t})),w.saveToStorage(S,y)},saveMultiplePads:function(e){return y=y.map((function(t){return e.includes(t._id)?Object(j.a)(Object(j.a)({},t),{},{isOn:!t.isOn}):t})),w.saveToStorage(S,y),y}};function k(){return(k=Object(_.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.loadFromStorage(S);case 2:return(y=e.sent)||(y=Object(m.a)(P),w.saveToStorage(S,y)),e.abrupt("return",y);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return function(){var t=Object(_.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.save(e);case 3:a({type:"UPDATE_PAD",pad:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("err in updating pad",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}function T(e){return function(){var t=Object(_.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.saveMultiplePads(e);case 3:n=t.sent,a({type:"SET_PADS",pads:n}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("err in updating pads",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}var D=a(29),I=a(37),A=a(38),F=a(17),L=a(15),C=a(39),B=a(40),G=a(2);function R(e){var t=e.padIsOn,a=e.isPlaying;return Object(G.jsxs)("div",{class:"spectrograph ".concat(t&&a?"active":""),children:[Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"}),Object(G.jsx)("div",{class:"spectrograph__bar"})]})}function M(e){var t=e.pad,a=(e.idx,e.setNewPadsIdsForPlay),n=e.playedSeconds,s=e.isPlaying,c=e.setLoopToRemove,r=e.newPadsIdsForPlay,o=Object(i.b)();return Object(G.jsxs)("div",{className:"pad-preview btn glassmorphism ".concat(t.isOn?"active":""," ").concat(r.includes(t._id)?"waiting-to-join":""),onClick:function(){return function(e){var t=Object(j.a)(Object(j.a)({},e),{},{isOn:!e.isOn});r.includes(e._id)?a((function(t){return t.filter((function(t){return t!==e._id}))})):e.isOn?(o(E(t)),c(e.loop)):0!==n||s?a((function(t){return[].concat(Object(m.a)(t),[e._id])})):o(E(t))}(t)},children:[Object(G.jsxs)("div",{className:"pad-header flex space-between",children:[Object(G.jsx)("div",{className:"icon",children:function(e){switch(e){case 101:return Object(G.jsx)(I.a,{});case 102:return Object(G.jsx)(A.a,{});case 103:return Object(G.jsx)(F.b,{});case 104:return Object(G.jsx)(L.a,{});case 105:return Object(G.jsx)(F.a,{});case 106:return Object(G.jsx)(F.c,{});case 107:return Object(G.jsx)(C.a,{});case 108:return Object(G.jsx)(L.d,{});case 109:return Object(G.jsx)(B.a,{})}}(t._id)}),Object(G.jsx)("div",{className:"pad-state-btn",children:t.isOn?Object(G.jsx)(D.b,{className:"icon on"}):Object(G.jsx)(D.a,{className:"icon off"})})]}),Object(G.jsx)("div",{className:"pad-name",children:t.name}),Object(G.jsx)(R,{padIsOn:t.isOn,isPlaying:s})]},t._id)}function J(e){var t=e.pads,a=e.setLoopToRemove,n=e.setNewPadsIdsForPlay,s=e.isPlaying,c=e.playedSeconds,r=e.newPadsIdsForPlay;return Object(G.jsx)("div",{className:"pad-list-container",children:Object(G.jsx)("div",{className:"inner-container",children:t.map((function(e,t){return Object(G.jsx)(M,{pad:e,idx:t,setNewPadsIdsForPlay:n,playedSeconds:c,isPlaying:s,setLoopToRemove:a,newPadsIdsForPlay:r},e._id)}))})})}var U=a(41),q=a.n(U);function V(e){var t=e.activePads,a=e.isPlaying,n=e.handleEnded,s=e.handleProgress,c=e.handleDuration;return Object(G.jsx)(G.Fragment,{children:t.map((function(e){return Object(G.jsx)("div",{className:"player-wrapper",children:Object(G.jsx)(q.a,{className:"react-player fixed-bottom",url:e,height:"10px",width:"10px",playing:a,controls:!1,onEnded:n,onProgress:s,onDuration:c})},e)}))})}function X(e){var t=e.handleClick;return Object(G.jsx)("button",{className:"player-button flex place-center justify-center",onClick:function(){return t()},children:Object(G.jsx)(L.b,{})})}function z(e){var t=e.activePads,a=e.handleClick;return Object(G.jsx)("button",{className:"player-button flex place-center justify-center ".concat(t.length>0?"active":""),onClick:function(){return a()},children:Object(G.jsx)(L.c,{})})}var W=a(42);function H(e){var t=e.msg;return Object(G.jsxs)("div",{className:"msg flex place-center",children:[Object(G.jsx)(W.a,{className:"icon"})," ",Object(G.jsx)("span",{className:"margin-left-5px",children:t})]})}var K=[{path:"/",component:function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.pad.pads})),a=Object(n.useState)(null),s=Object(x.a)(a,2),c=s[0],r=s[1],o=Object(n.useState)(0),l=Object(x.a)(o,2),d=l[0],j=l[1],u=Object(n.useState)(!1),p=Object(x.a)(u,2),b=p[0],O=p[1],v=Object(n.useState)([]),f=Object(x.a)(v,2),h=f[0],m=f[1],y=Object(n.useState)([]),w=Object(x.a)(y,2),P=w[0],S=w[1],k=Object(n.useState)(null),E=Object(x.a)(k,2),D=E[0],I=E[1],A=Object(n.useState)(null),F=Object(x.a)(A,2),L=F[0],C=F[1];Object(n.useEffect)((function(){e(function(){var e=Object(_.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"LOADING_START"}),e.next=4,N.query();case 4:a=e.sent,t({type:"SET_PADS",pads:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("err in loading pads",e.t0);case 11:return e.prev=11,t({type:"LOADING_DONE"}),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(n.useEffect)((function(){!function(){var e=t.filter((function(e){return!0===e.isOn})).map((function(e){return e.loop}));m(e)}()}),[t]),Object(n.useEffect)((function(){(0===h.length||h.length>0&&!b)&&O(!1)}),[h,b]);Object(n.useEffect)((function(){}),[b]),Object(n.useEffect)((function(){0===h.length&&P.length>0&&(e(T(P)),O(!0),S([]))}),[h,e,P]),Object(n.useEffect)((function(){}),[P]);return t?Object(G.jsxs)("div",{className:"loop-machine-container",children:[b&&Object(G.jsxs)("div",{class:"scene",children:[Object(G.jsxs)("div",{class:"wrap",children:[Object(G.jsx)("div",{class:"wall wall-right"}),Object(G.jsx)("div",{class:"wall wall-left"}),Object(G.jsx)("div",{class:"wall wall-top"}),Object(G.jsx)("div",{class:"wall wall-bottom"}),Object(G.jsx)("div",{class:"wall wall-back"})]}),Object(G.jsxs)("div",{class:"wrap",children:[Object(G.jsx)("div",{class:"wall wall-right"}),Object(G.jsx)("div",{class:"wall wall-left"}),Object(G.jsx)("div",{class:"wall wall-top"}),Object(G.jsx)("div",{class:"wall wall-bottom"}),Object(G.jsx)("div",{class:"wall wall-back"})]})]}),Object(G.jsx)("div",{className:"controls flex justify-center",children:b?Object(G.jsx)(X,{handleClick:function(){return O(!1)}}):Object(G.jsx)(z,{activePads:h,handleClick:function(){h.length>0?O(!0):(C("Select at least one pad to start"),setTimeout((function(){C(null)}),1500))}})}),Object(G.jsx)("div",{className:"inspiration-text",children:" make your own music."}),Object(G.jsx)(J,{pads:t,setNewPadsIdsForPlay:S,playedSeconds:d,isPlaying:b,setLoopToRemove:I,newPadsIdsForPlay:P}),Object(G.jsx)(V,{activePads:h,isPlaying:b,handleEnded:function(){},handleProgress:function(a){(1===a.played&&(O(!1),P.length>0&&e(T(P)),S([]),O(!0)),D)&&(t.find((function(e){return e.loop===D})).isOn||m(h.filter((function(e){return e!==D}))),I(null));b||j(a.playedSeconds)},handleDuration:function(e){c?e>c&&r(e):r(e)},setIsPlaying:O}),L&&Object(G.jsx)(H,{msg:L})]}):Object(G.jsx)("div",{children:"loading..."})}}],Q=function(){return Object(G.jsx)("div",{className:"flex space-between navbar",children:Object(G.jsx)("div",{children:Object(G.jsxs)(o.b,{className:"navlink-btn",to:"/",children:[Object(G.jsx)("img",{src:"img/logo.png",alt:"",className:"logo-img"}),Object(G.jsx)("span",{children:"Loopix"})]})})})};function Y(){return Object(G.jsxs)("div",{className:"App",children:[Object(G.jsx)(Q,{}),Object(G.jsx)(f.c,{children:K.map((function(e){return Object(G.jsx)(f.a,{exact:!0,component:e.component,path:e.path},e.path)}))})]})}a(71);var Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,73)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(G.jsx)(s.a.StrictMode,{children:Object(G.jsx)(i.a,{store:v,children:Object(G.jsx)(o.a,{children:Object(G.jsx)(Y,{})})})}),document.getElementById("root")),Z()}},[[72,1,2]]]);
//# sourceMappingURL=main.9f566dc3.chunk.js.map