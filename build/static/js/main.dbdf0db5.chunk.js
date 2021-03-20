(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(21),i=n.n(o),r=(n(27),n(8)),s=n.n(r),u=n(11),p=n(3),h=n(4),l=n(9),j=n(6),m=n(5),b=n(0),d=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(b.jsx)("span",{onClick:this.props.showType,children:"".concat(this.props.type," ")})}}]),n}(c.Component),f=n(10),O=n.n(f),k=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var c;return Object(p.a)(this,n),(c=e.call(this,t)).state={imgSrc:c.props.pokemon.sprites.front,hover:!1,catched:!1},c.switchImg=c.switchImg.bind(Object(l.a)(c)),c}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(){this.state.imgSrc!==this.props.pokemon.sprites.front&&this.state.imgSrc!==this.props.pokemon.sprites.back&&this.setState({imgSrc:this.props.pokemon.sprites.front})}},{key:"switchImg",value:function(){return this.state.hover?this.setState({imgSrc:this.props.pokemon.sprites.front,hover:!1}):this.setState({imgSrc:this.props.pokemon.sprites.back,hover:!0})}},{key:"pokemonInCollection",value:function(){var t=Object(u.a)(s.a.mark((function t(){var e,n,c,a=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("/api/collection");case 2:e=t.sent,n=e.data,console.log("collection: ",n),c=n.some((function(t){return t.id===a.props.pokemon.id})),this.setState({catched:c});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"catch",value:function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.post("/api/collection/catch/".concat(this.props.pokemon.name));case 2:this.props.checkCatch();case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"release",value:function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.delete("/api/collection/release/".concat(this.props.pokemon.name));case 2:this.props.checkCatch();case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(b.jsxs)("ul",{className:"details",children:[Object(b.jsxs)("li",{children:["Name: ",this.props.pokemon.name]}),Object(b.jsxs)("li",{children:["Height ",this.props.pokemon.height]}),Object(b.jsxs)("li",{children:["Weight: ",this.props.pokemon.weight]}),Object(b.jsxs)("li",{children:["Types: ",this.props.pokemon.types.map((function(e,n){return Object(b.jsx)(d,{showType:function(){return t.props.showType(e)},type:e},n)}))]}),Object(b.jsx)("img",{src:this.state.imgSrc,alt:this.props.pokemon.name,onMouseEnter:function(){return t.switchImg()},onMouseOut:function(){return t.switchImg()}}),Object(b.jsx)("button",{onClick:function(){t.props.catched?t.release():t.catch()},children:this.props.catched?"Release":"Catch"})]})}}]),n}(c.Component),v=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("ul",{className:"details",children:[Object(b.jsx)("li",{children:"Name:"}),Object(b.jsx)("li",{children:"Height:"}),Object(b.jsx)("li",{children:"Weight:"}),Object(b.jsx)("li",{children:"Types: "})]})}}]),n}(c.Component),y=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var c;return Object(p.a)(this,n),(c=e.call(this,t)).state={value:""},c.handleChange=c.handleChange.bind(Object(l.a)(c)),c}return Object(h.a)(n,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){var t=this;return Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",value:this.state.value,className:"search-area",onChange:this.handleChange}),Object(b.jsx)("button",{type:"button",onClick:function(){return t.props.handleSubmit(t.state.value)},children:"Search"})]})}}]),n}(c.Component),g=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var c;return Object(p.a)(this,n),(c=e.call(this,t)).state={pokemonImage:""},c}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("li",{className:"pokemon-preview",onClick:function(){return t.props.handleSubmit(t.props.pokemon.name)},children:[this.props.pokemon.name,Object(b.jsx)("img",{src:this.props.pokemon.imgSrc,alt:""})]})}}]),n}(c.Component),x=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsx)("ul",{children:this.props.pokemons.map((function(e,n){return Object(b.jsx)(g,{pokemon:e,handleSubmit:t.props.handleSubmit},n)}))})}}]),n}(c.Component),S=n(22),C=n.n(S),w=(n(68),function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(b.jsx)(C.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80})}}]),n}(c.Component)),T=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var c;return Object(p.a)(this,n),(c=e.call(this,t)).state={collection:[]},c}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;O.a.get("/api/collection").then((function(e){var n=e.data;return t.setState({collection:n})}))}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"collection-pokemon",children:Object(b.jsx)("ul",{children:this.state.collection.map((function(t,e){return Object(b.jsx)("li",{children:t.name},e)}))})})}}]),n}(c.Component),I=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var c;return Object(p.a)(this,n),(c=e.call(this,t)).state={pokemon:null,name:"",pokemonsOfType:[],isTypeListLoading:!1,collectionView:!1,catched:!1},c.handleSubmit=c.handleSubmit.bind(Object(l.a)(c)),c.handleTypeList=c.handleTypeList.bind(Object(l.a)(c)),c.pokemonInCollection=c.pokemonInCollection.bind(Object(l.a)(c)),c}return Object(h.a)(n,[{key:"pokemonInCollection",value:function(){var t=Object(u.a)(s.a.mark((function t(e){var n=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",O.a.get("/api/collection").then((function(t){return t.data.some((function(t){return t.name===e}))})).then((function(t){return n.setState({catched:t})})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var t=Object(u.a)(s.a.mark((function t(e){var n=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O.a.get("/api/pokemon/".concat(e)).then((function(t){n.setState({pokemon:t.data,pokemonsOfType:[]}),n.pokemonInCollection(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"handleTypeList",value:function(t){var e=this;this.setState({isTypeListLoading:!0}),O.a.get("/api/type/".concat(t)).then((function(t){e.setState({pokemonsOfType:t.data.pokemons}),e.setState({isTypeListLoading:!1})}))}},{key:"render",value:function(){var t=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Pokedex"}),Object(b.jsx)("button",{onClick:function(){return t.setState({collectionView:!t.state.collectionView})},children:"collection"}),this.state.collectionView?Object(b.jsx)(T,{}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{handleSubmit:this.handleSubmit}),this.state.pokemon?Object(b.jsx)(k,{showType:this.handleTypeList,pokemon:this.state.pokemon,catched:this.state.catched,checkCatch:function(){return t.pokemonInCollection(t.state.pokemon.name)}}):Object(b.jsx)(v,{}),this.state.isTypeListLoading?Object(b.jsx)(w,{}):Object(b.jsx)(x,{pokemons:this.state.pokemonsOfType,handleSubmit:this.handleSubmit})]})]})}}]),n}(c.Component),L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),o(t),i(t)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),L()}},[[69,1,2]]]);
//# sourceMappingURL=main.dbdf0db5.chunk.js.map