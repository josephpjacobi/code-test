(this.webpackJsonpmediazact=this.webpackJsonpmediazact||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),r=a.n(c),o=a(3),i=(a(16),function(e){if(e<=10){for(var t=0,a=1;a<=e;a++)t+=a;return 10*t}return 100*(e-10)+550}),u=function(e,t){return e/t},m=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),m=Object(o.a)(r,2),s=m[0],E=m[1],N=Object(n.useState)(""),d=Object(o.a)(N,2),p=d[0],f=d[1];return l.a.createElement("div",{className:"frog-data-container"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),/^[0-9]*$/.test(a)?(E(i(a)),f(u(i(a),a))):(alert("Only numbers are valid inputs"),c(""))},className:"form"},l.a.createElement("label",null,"Enter Number of Days:",l.a.createElement("input",{type:"type",value:a,onChange:function(e){c(e.target.value)}})),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement("h4",null,"Number of frogs: ".concat(a)),l.a.createElement("h4",null,"The weight of the frog community on day ".concat(a," : ").concat(s+" grams")),l.a.createElement("h4",null,"The weight of the average frog on day ".concat(a,": ").concat(p+" grams")))},s=(a(17),function(){for(var e=document.getElementById("tbl"),t=e.getElementsByTagName("tr"),a=t[t.length-1].getElementsByTagName("td").length,n=e.insertRow(),l=0;l<a;l++){n.insertCell().innerHTML="New Cell, who dis?"}}),E=function(){return l.a.createElement("div",{className:"table-container small-buffer"},l.a.createElement("table",{id:"tbl",border:"1"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Row"),l.a.createElement("td",null,"1")),l.a.createElement("tr",null,l.a.createElement("td",null,"Row"),l.a.createElement("td",null,"2")),l.a.createElement("tr",null,l.a.createElement("td",null,"Row"),l.a.createElement("td",null,"3")),l.a.createElement("tr",null,l.a.createElement("td",null,"Row"),l.a.createElement("td",null,"4")))),l.a.createElement("button",{onClick:s},"Add a row!"))},N=(a(18),function(){var e=document.getElementById("btn");e.style.display="none",setTimeout((function(){e.style.display="inline-block"}),1e3)}),d=function(){return l.a.createElement("button",{id:"btn",className:"small-buffer",onClick:N},"Want to see a magic trick?")},p=(a(19),function(){var e=[1,2,"a",3,"b","c",!0,4,!1,"6"];return l.a.createElement("div",null,e,l.a.createElement("button",{onClick:function(){for(var t=e.length-1;t>=0;t--)"number"!==typeof e[t]&&e.splice(t,1);return alert("After removing all non-numeric characters, your array is: ".concat(e)),e}},"Remove Non-numbers"))}),f=(a(20),function(e){var t=e.newValue,a=e.handleInput;return l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Enter some text below:"),l.a.createElement("input",{type:"text",value:t,onChange:a,maxLength:"50"}))}),A=function(e){var t=e.string.split("").reverse().join("");return l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Your text in reverse:"),t)},b=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1];return l.a.createElement("div",{className:"display"},l.a.createElement(f,{newValue:a,handleInput:function(e){c(e.target.value)}}),l.a.createElement(A,{string:a}))},y={"00705":{zipCodeType:"STANDARD",city:"AIBONITO",state:"PR",locationType:"PRIMARY",lat:18.14,long:-66.26,location:"NA-US-PR-AIBONITO"},11709:{zipCodeType:"STANDARD",city:"BAYVILLE",state:"NY",locationType:"PRIMARY",lat:40.9,long:-73.56,location:"NA-US-NY-BAYVILLE"},"06401":{zipCodeType:"STANDARD",city:"ANSONIA",state:"CT",locationType:"PRIMARY",lat:41.34,long:-73.06,location:"NA-US-CT-ANSONIA"},"07071":{zipCodeType:"STANDARD",city:"LYNDHURST",state:"NJ",locationType:"PRIMARY",lat:40.79,long:-74.11,location:"NA-US-NJ-LYNDHURST"},12308:{zipCodeType:"STANDARD",city:"SCHENECTADY",state:"NY",locationType:"PRIMARY",lat:42.8,long:-73.92,location:"NA-US-NY-SCHENECTADY"},20001:{zipCodeType:"STANDARD",city:"WASHINGTON",state:"DC",locationType:"PRIMARY",lat:38.89,long:-77.03,location:"NA-US-DC-WASHINGTON"},90001:{zipCodeType:"STANDARD",city:"LOS ANGELES",state:"CA",locationType:"PRIMARY",lat:33.97,long:-118.24,location:"NA-US-CA-LOS ANGELES"},11954:{zipCodeType:"STANDARD",city:"MONTAUK",state:"NY",locationType:"PRIMARY",lat:41.04,long:-71.94,location:"NA-US-NY-MONTAUK"},28202:{zipCodeType:"STANDARD",city:"CHARLOTTE",state:"NC",locationType:"PRIMARY",lat:35.19,long:80.83,location:"NA-US-NC-CHARLOTTE"},33125:{zipCodeType:"STANDARD",city:"MIAMI",state:"FL",locationType:"PRIMARY",lat:25.77,long:-80.2,location:"NA-US-FL-MIAMI"}},T=a(27),g=function(e,t){var a=y[e],n=y[t];if(a&&n){var l=a.lat/180*T.c,c=a.long/180*T.c,r=n.lat/180*T.c,o=r-l,i=n.long/180*T.c-c,u=12742*Object(T.a)(Object(T.g)(Object(T.d)(Object(T.f)(o/2),2)+Object(T.d)(Object(T.f)(i/2),2)*Object(T.b)(l)*Object(T.b)(r)))*100/100,m=Object(T.e)(.621*u);return"The distance between ".concat(a.city,", ").concat(a.state," and ").concat(n.city,", ").concat(n.state," is ").concat(m," miles!")}return"1 or more zipcodes do not exist"},S=(a(22),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),u=i[0],m=i[1],s=Object(n.useState)(""),E=Object(o.a)(s,2),N=E[0],d=E[1],p=function(e){return/^\d{5}?$/.test(e)};return l.a.createElement("div",{className:"display-distance-container"},l.a.createElement("h2",null,"Enter Two Zipcodes Below:"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p(a)&&p(u)?d(g(a,u)):d("Invalid Zipcodes")},className:"form"},l.a.createElement("label",null,"Starting Zipcode:",l.a.createElement("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},maxLength:"5"})),l.a.createElement("label",null,"Ending Zipcode:",l.a.createElement("input",{type:"text",value:u,onChange:function(e){return m(e.target.value)},maxLength:"5"})),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement((function(e){var t=e.message;return l.a.createElement("span",null,t)}),{message:N}))});a(23);r.a.render(l.a.createElement((function(){return l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"buffer center-stack"},l.a.createElement("h1",{className:"center-stack"},"CS Questions"),l.a.createElement(m,null)),l.a.createElement("div",{className:"buffer center-stack"},l.a.createElement("h1",{className:"center-stack"},"JavaScript Questions"),l.a.createElement(E,null),l.a.createElement(d,null),l.a.createElement(p,null)),l.a.createElement("div",{className:"buffer center-stack"},l.a.createElement("h1",{className:"center-stack"},"React Questions"),l.a.createElement(b,null),l.a.createElement(S,null)))}),null),document.querySelector("#root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.6a92ac31.chunk.js.map