(this["webpackJsonpreact-bitquran"]=this["webpackJsonpreact-bitquran"]||[]).push([[0],{106:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(21),c=t.n(i),l=(t(59),t(20)),o=t(30),u=t(22),s=t(19),d=(t(25),t(12)),p=t(13),h=t(15),f=t(14),m=t(16),g=t(5),v=t(7);function b(){var e=Object(g.a)(["\n  background-color: #e5e5e5;\n  display:flex;\n  align-items: flex-end;\n\n  >div{\n    font-size: 60px;\n    padding: 18px;\n    border-bottom: 3px solid #383838;\n    height: 130px;\n    line-height: 200px;\n\n    // @media (max-width:812px){\n    // line-height: 130px;\n    //   height: 35px;\n    //   font-size: 35px;\n    // }\n  }\n\n"]);return b=function(){return e},e}var x=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(h.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(r)))).state={active:1},t.switchTabs=function(e){t.setState({active:e}),t.props.onClickTab(e)},t.toHome=function(){t.props.history.push("/")},t}return Object(m.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onClickTab(1)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null,r.a.createElement("div",{onClick:this.toHome},"Quran")),r.a.createElement("div",{className:"tabs-style"},r.a.createElement("div",{className:"tablist-style"},r.a.createElement("div",{onClick:function(){return e.switchTabs(1)},className:"tab-style ".concat(1===this.state.active&&"tab-selected-style")},"Surah"))))}}]),n}(r.a.Component),y=Object(v.a)("div")(b()),O=Object(s.f)(x),j=t(51);var E=function(){return r.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{display:"inline-block",padding:"30px"}},r.a.createElement(j.PulseLoader,{color:"green",size:20,loading:!0})))},k=Object(s.f)((function(e){var n=e.loading,t=void 0!==n&&n,a=e.surahs,i=void 0===a?[]:a,c=e.history;return r.a.createElement("div",{style:{width:"100%",height:"100%"}},t?r.a.createElement(E,null):i.map((function(e,n){return r.a.createElement("div",{onClick:function(){return n=e.number,c.push("detail/".concat(n));var n},className:"surah",key:"".concat(e.number,"_").concat(n)},r.a.createElement("div",null,e.number),r.a.createElement("div",null,r.a.createElement("span",null,e.englishName),r.a.createElement("span",null,e.englishNameTranslation," ","(".concat(e.numberOfAyahs,")"))),r.a.createElement("div",null,e.name))})))})),w=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(h.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(r)))).state={},t}return Object(m.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",height:"100%"}},r.a.createElement("div",null,"hhahahha"))}}]),n}(a.Component),S=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(h.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(r)))).state={active:2},t.switchTabs=function(e){return t.setState({active:e})},t}return Object(m.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.surahs,a=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{onClickTab:function(n){return e.setState({active:n})}}),r.a.createElement("div",{className:"tab-panel-style"},1===this.state.active?r.a.createElement(k,{loading:a,surahs:t}):r.a.createElement(w,null)))}}]),n}(r.a.Component);function N(){var e=Object(g.a)(["\n  height: 100%;\n  background: white;\n  max-width: 1000px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n"]);return N=function(){return e},e}function C(){var e=Object(g.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: #eee;\n  display: flex;\n  justify-content: center;\n"]);return C=function(){return e},e}var z=Object(v.a)("div")(C()),T=Object(v.a)("div")(N()),I=function(e){var n=e.children;return r.a.createElement(z,null,r.a.createElement(T,null,n))},q=t(52),A=t.n(q),J=t(28),B=t(29),P=t(31),M=t.n(P),D="https://api.alquran.cloud/v1",F={getSurahs:function(){return new Promise((function(e,n){var t=localStorage.getItem("surahs-bitquran");if(t){var a=JSON.parse(t);return e(a)}M.a.get("".concat(D,"/surah")).then((function(n){var t=n.data,a=JSON.stringify(t.data);localStorage.setItem("surahs-bitquran",a),e(t.data)})).catch((function(e){return n({error:!0,details:e})}))}))},getSurah:function(e){return new Promise((function(n,t){var a=localStorage.getItem("surahs-detail-bitquran");if(a){var r=JSON.parse(a).find((function(n){return n.number===e}));if(r)return n(r)}var i=[M()("".concat(D,"/surah/").concat(e,"/ar.alafasy")),M()("".concat(D,"/surah/").concat(e,"/en.asad"))];Promise.all(i).then((function(e){var t=Object(o.a)(e,2),r=t[0],i=t[1],c=Object(l.a)({},r.data.data,{ayahs:r.data.data.ayahs.map((function(e,n){return Object(l.a)({},e,{translation:i.data.data.ayahs[n].text})}))});if(a){var u=JSON.parse(a);u.push(c);var s=JSON.stringify(u);return localStorage.setItem("surahs-detail-bitquran",s),n(c)}var d=[];d.push(c);var p=JSON.stringify(d);return localStorage.setItem("surahs-detail-bitquran",p),n(c)})).catch((function(e){console.log("Err",e),t({error:!0,detail:Object(l.a)({},e,{message:"There's an error when getting Surah's details"})})}))}))}},H=t(32),_=(t(105),t(53));function W(){var e=Object(g.a)(["\n  display: flex;\n  padding: 15px;\n  border-bottom: 1px solid#e5e5e5;\n\n  > div{\n    padding: 10px 15px;\n    background-color:#e5e5e5;\n    border-radius: 15px;\n    cursor: pointer;\n    margin-right: 15px;\n    display: flex;\n    align-items: center;\n\n    >div:last-child{\n      margin-left: 5px;\n      font-size: 20px;\n    }\n  }\n"]);return W=function(){return e},e}function L(){var e=Object(g.a)(["\n  white-space: pre-wrap;\n  padding: 15px;\n  font-size: 20px;\n  text-align: right;\n  color:green;\n"]);return L=function(){return e},e}function Q(){var e=Object(g.a)(["\ndisplay: flex;\njustify-content: space-between;\npadding: 15px;\nalign-items: center;\nmargin: 5px 0;\n\n> div:first-of-type{\n    font-size: 20px;\n    background-color:rgba(0,255,0,0.2);\n    color:green;\n    padding: 2px 8px;\n    border-radius: 10px;\n  }\n\n  >div:last-child{\n    font-size: 30px;\n    text-align:right;\n    line-height: 55px;\n  }\n"]);return Q=function(){return e},e}var R=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(h.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(r)))).state={play:!1},t.playPlayer=function(){},t.copyText=function(){var e=t.props.ayah,n="\n      ".concat(e.text," \n\n\n      ").concat(e.translation,"\n    ");_.a(n),Object(H.b)("Ayah copied",{position:H.b.POSITION.BOTTOM_CENTER,autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},t}return Object(m.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.ayah}},{key:"render",value:function(){var e=this.props.ayah,n=this.copyText;return r.a.createElement("div",{style:{padding:"0 20px",width:"100%"},key:"ayah_".concat(e.number)},r.a.createElement(H.a,null),r.a.createElement($,null,r.a.createElement("div",null,e.juz,":",e.number),r.a.createElement("div",null,e.text)),r.a.createElement(G,null,e.translation),r.a.createElement(K,null,r.a.createElement("div",{onClick:n},r.a.createElement(J.a,{icon:B.b}),r.a.createElement("div",null,"Copy"))))}}]),n}(r.a.Component),$=Object(v.a)("div")(Q()),G=Object(v.a)("div")(L()),K=Object(v.a)("div")(W()),U=R;function V(){var e=Object(g.a)(["\n  display: flex;\n  padding: 15px;\n  border-bottom: 1px solid#e5e5e5;\n\n  >div:first-of-type{\n    padding: 10px 15px;\n    background-color:#e5e5e5;\n    border-radius: 15px;\n    cursor: pointer;\n    margin-right: 15px;\n    display: flex;\n    align-items: center;\n\n    >div:last-child{\n      margin-left: 5px;\n      font-size: 20px;\n    }\n  }\n\n  >div:last-child{\n    padding: 10px 15px;\n    background-color:#e5e5e5;\n    border-radius: 15px;\n    cursor: pointer;\n    margin-right: 15px;\n    display: flex;\n    align-items: center;\n\n    >div:last-child{\n      margin-left: 5px;\n      font-size: 20px;\n    }\n  }\n"]);return V=function(){return e},e}function X(){var e=Object(g.a)(["\n  white-space: pre-wrap;\n  padding: 15px;\n  font-size: 20px;\n  text-align: right;\n  color:green;\n"]);return X=function(){return e},e}function Y(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n  align-items: center;\n  margin: 5px 0;\n\n  > div:first-of-type{\n    font-size: 20px;\n    background-color:rgba(0,255,0,0.2);\n    color:green;\n    padding: 2px 8px;\n    border-radius: 10px;\n  }\n\n  >div:last-child{\n    font-size: 30px;\n    text-align:right;\n  }\n"]);return Y=function(){return e},e}function Z(){var e=Object(g.a)(["\n  height: 80px;\n  background-color:#E5E5E5;\n  display: flex;\n\n  > div:first-of-type{\n    flex: 1;\n    display: flex;\n    align-items: center;\n    padding: 25px;\n    font-size: 30px;\n    cursor: pointer;\n  }\n\n  >div:last-child{\n    flex: 10;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-right: 115px;\n    font-size: 30px;\n    font-weight: 500;\n  }\n"]);return Z=function(){return e},e}var ee=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(h.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(r)))).state={ready:!1,selectedSurah:{},noSurah:!1},t.goBack=function(){return t.props.history.replace("/")},t}return Object(m.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){var e,n,t=this;return A.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e=this.props.match.params.number,n=Number(e)){a.next=4;break}return a.abrupt("return",this.goBack());case 4:F.getSurah(n).then((function(e){t.setState({selectedSurah:e,ready:!0,noSurah:!1})})).catch((function(e){t.setState({noSurah:!0,ready:!0}),console.log("err",e)}));case 5:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,n=e.ready,t=e.selectedSurah,a=e.noSurah;return n?r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null,r.a.createElement("div",{onClick:this.goBack},r.a.createElement(J.a,{icon:B.a})),r.a.createElement("div",null,a?"No surah":t.englishName)),r.a.createElement("div",{className:"tab-panel-style"},a&&r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Surah not found")),!a&&t.ayahs.map((function(e){return r.a.createElement(U,{key:e.number,ayah:e})})))):r.a.createElement(E,null)}}]),n}(a.Component),ne=Object(v.a)("div")(Z()),te=(Object(v.a)("div")(Y()),Object(v.a)("div")(X()),Object(v.a)("div")(V()),Object(s.f)(ee));var ae=function(){var e=r.a.useState({loading:!1,error:!1,surahs:[]}),n=Object(o.a)(e,2),t=n[0],a=n[1];return r.a.useEffect((function(){a(Object(l.a)({},t,{loading:!0})),F.getSurahs().then((function(e){return a(Object(l.a)({},t,{surahs:e,loading:!1}))})).catch((function(e){console.error("error while getting surahs: ",e),a(Object(l.a)({},t,{error:!0,surahs:[],loading:!1}))}))}),[]),r.a.createElement(I,null,r.a.createElement(u.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(S,{loading:t.loading,surahs:t.surahs})),r.a.createElement(s.a,{path:"/detail/:number"},r.a.createElement(te,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},25:function(e,n,t){},54:function(e,n,t){e.exports=t(106)},59:function(e,n,t){}},[[54,1,2]]]);
//# sourceMappingURL=main.fc7cc199.chunk.js.map