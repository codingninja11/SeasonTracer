(this.webpackJsonpseasons=this.webpackJsonpseasons||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(3),r=s(4),c=s(7),i=s(6),o=s(1),l=s.n(o),u=s(5),d=s.n(u),h=(s(13),{summer:{text:"Let's hit the beach!",iconName:"sun"},winter:{text:"Burr it is cold!",iconName:"snowflake"}}),j=function(e){var t,s,n=(t=e.lat,(s=(new Date).getMonth())>2&&s<9?t>0?"summer":"winter":t>0?"winter":"summer"),r=h[n],c=r.text,i=r.iconName;return Object(a.jsxs)("div",{className:"season-display ".concat(n),children:[Object(a.jsx)("i",{className:"icon-left massive ".concat(i," icon")}),Object(a.jsx)("h1",{children:c}),Object(a.jsx)("i",{className:"icon-right massive ".concat(i," icon")})]})},m=function(e){return Object(a.jsx)("div",{className:"ui active dimmer",children:Object(a.jsx)("div",{className:"ui big text loader",children:e.message})})};m.defaultProps={message:"Loading..."};var b=m,v=function(e){Object(c.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(n.a)(this,s);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={lat:null,errorMessage:""},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition((function(t){return e.setState({lat:t.coords.latitude})}),(function(t){return e.setState({errorMessage:t.message})}))}},{key:"renderContent",value:function(){return this.state.errorMessage&&!this.state.lat?Object(a.jsxs)("div",{children:["Error: ",this.state.errorMessage]}):!this.state.errorMessage&&this.state.lat?Object(a.jsx)(j,{lat:this.state.lat}):Object(a.jsx)(b,{message:"Please accept location request"})}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"border red",children:this.renderContent()})}}]),s}(l.a.Component);d.a.render(Object(a.jsx)(v,{}),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.87a4d607.chunk.js.map