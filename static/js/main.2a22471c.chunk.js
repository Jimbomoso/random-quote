(this["webpackJsonprandom-quote"]=this["webpackJsonprandom-quote"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(1),r=n.n(a),u=n(3),s=n.n(u),i=(n(13),n(4)),c=n(5),h=n(7),d=n(6),l=[{quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",author:"Marilyn Monroe"},{quote:"Be yourself; everyone else is already taken.",author:"Oscar Wilde"},{quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",author:"Albert Einstein"},{quote:"Be the change you wish to see in the world.",author:"Mahatma Gandi"},{quote:"Every moment that you share someone else's pain, feel what they feel, makes you more human.",author:"Bill Murray"},{quote:"Life is a tragedy for those who feel, and a comedy for those who think.",author:"La Bruyere"}];function m(e){var t=e.quote,n=e.generateRandomQuote;return Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:"card-body",id:"quote-box",children:[Object(o.jsx)("p",{className:"card-text",id:"text",children:t.quote}),Object(o.jsx)("h5",{className:"card-title",id:"author",children:t.author}),Object(o.jsxs)("button",{id:"new-quote",onClick:function(){n(l)},type:"submit",children:[Object(o.jsx)("i",{class:"fas fa-mouse"})," Generate Quote"]}),Object(o.jsxs)("button",{className:"ml-3",id:"tweet-quote",onClick:function(){n(l),window.open("https://twitter.com/intent/tweet/?text="+encodeURIComponent(t.quote+"--"+t.author))},type:"submit",children:[" ",Object(o.jsx)("i",{class:"fab fa-twitter",children:" "})," Share Quote"]})]})})}var f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={quote:l[0].quote,author:l[0].author},e.generateRandomQuote=function(t){var n=Math.floor(Math.random()*l.length),o=l[n];e.setState({quote:o.quote,author:o.author}),e.shuffleQuotes(l)},e.shuffleQuotes=function(e){return e.sort((function(){return.5-Math.random()}))},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"container",id:"quote-box",children:[Object(o.jsx)("h1",{className:"text-center",children:"Random Quote"}),Object(o.jsx)(m,{generateRandomQuote:this.generateRandomQuote,quote:this.state})]})}}]),n}(a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),o(e),a(e),r(e),u(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.2a22471c.chunk.js.map