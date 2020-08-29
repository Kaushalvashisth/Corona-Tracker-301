(this["webpackJsonpcorona-app"]=this["webpackJsonpcorona-app"]||[]).push([[0],{187:function(e,t,a){e.exports={container:"Chart_container__2gnxn"}},188:function(e,t,a){e.exports={FormControl:"CountryPicker_FormControl__33wdF"}},189:function(e,t,a){e.exports=a.p+"static/media/image2.d7265326.png"},194:function(e,t,a){e.exports=a(588)},31:function(e,t,a){e.exports={container:"Cards_container__-MkBa",card:"Cards_card__1cQg3",infected:"Cards_infected__1XVDk",recovered:"Cards_recovered__3Jeza",deaths:"Cards_deaths__1EBX8"}},44:function(e,t,a){e.exports={container:"App_container__Cnw_V",image:"App_image__yTW1X",footerStyle:"App_footerStyle__2yc0K",footerStyle2:"App_footerStyle2__abi6x"}},588:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),s=a(7),u=a.n(s),l=a(21),i=a(177),d=a(178),m=a(191),p=a(190),f=a(607),v=a(611),h=a(608),y=a(609),b=a(73),E=a.n(b),g=a(74),_=a.n(g),x=a(31),C=a.n(x),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:C.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:_()(C.a.card,C.a.infected)},r.a.createElement(h.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(y.a,{variant:"h5 "},r.a.createElement(E.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:_()(C.a.card,C.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(y.a,{variant:"h5 "},r.a.createElement(E.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Number of Recoveries from COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:_()(C.a.card,C.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(y.a,{variant:"h5 "},r.a.createElement(E.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Number of Deaths by COVID-19"))))):"...Loading"},O=a(72),S=a(75),j=a.n(S),k=(a(220),"https://covid19.mathdro.id/api"),D=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n,r,c,o,s,l,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k,t&&(a="".concat(k,"/countries/").concat(t)),e.prev=2,e.next=5,j.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,l=r.lastUpdate,i={confirmed:c,recovered:o,deaths:s,lastUpdate:l},e.abrupt("return",i);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(k,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(k,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=a(109),V=a(187),A=a.n(V),F=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,i=Object(n.useState)([]),d=Object(O.a)(i,2),m=d[0],p=d[1];Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(m),e()}),[]);var f=0!==m.length?r.a.createElement(I.Line,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#206a5d",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"#e23e57",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,v=a?r.a.createElement(I.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["#206a5d","#81b214","#8f0d20"],data:[a.value,c.value,o.value]}]},option:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return r.a.createElement("div",{className:A.a.container},s?v:f)},J=a(612),K=a(610),R=a(188),U=a.n(R),X=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),console.log(o),r.a.createElement(J.a,{className:U.a.FormControl},r.a.createElement(K.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),";"))},G=a(44),L=a.n(G),M=a(189),P=a.n(M),T=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:L.a.container},r.a.createElement("div",{className:L.a.imgBox},r.a.createElement("img",{className:L.a.image,src:P.a})),r.a.createElement(w,{data:t}),r.a.createElement(X,{handleCountryChange:this.handleCountryChange}),r.a.createElement(F,{data:t,country:a}),r.a.createElement("footer",{className:L.a.footerStyle},r.a.createElement("a",{href:"https://github.com/Kaushalvashisth/Corona-Tracker-301"},"Feel free to give \u2605 on Github")),r.a.createElement("footer",{className:L.a.footerStyle2}," Big \u2764 Kaushal"))}}]),a}(r.a.Component);o.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.cbcb7042.chunk.js.map