(self.webpackChunkshell=self.webpackChunkshell||[]).push([[12],{1012:(Y,D,u)=>{u.r(D);var L=u(7783);function G(t,n,r,a,s,o,l){try{var h=t[o](l),c=h.value}catch(U){return void r(U)}h.done?n(c):Promise.resolve(c).then(a,s)}function d(t){return function(){var n=this,r=arguments;return new Promise(function(a,s){var o=t.apply(n,r);function l(c){G(o,a,s,l,h,"next",c)}function h(c){G(o,a,s,l,h,"throw",c)}l(void 0)})}}let i={};const y={},R={};let j=!1;function g(){return(g=d(function*(t,n){return(yield y[t].get(n))()})).apply(this,arguments)}function H(t,n){return _.apply(this,arguments)}function _(){return(_=d(function*(t,n){return R[n]||(j||(yield u.I("default"),j=!0),yield t.init(u.S.default),R[n]=!0),t})).apply(this,arguments)}function M(){return M=d(function*(t,n){if("string"==typeof t)return yield P(t,n);if("script"===t.type){const r=t;return yield P(r.remoteEntry,r.remoteName)}"module"===t.type&&(yield function F(t){return S.apply(this,arguments)}(t.remoteEntry))}),M.apply(this,arguments)}function S(){return(S=d(function*(t){return y[t]?Promise.resolve():yield import(t).then(n=>{H(n,t),y[t]=n})})).apply(this,arguments)}function P(t,n){return x.apply(this,arguments)}function x(){return(x=d(function*(t,n){return new Promise((r,a)=>{if(y[n])return void r();const s=document.createElement("script");s.src=t,s.onerror=a,s.onload=()=>{const o=window[n];H(o,n),y[n]=o,r()},document.body.appendChild(s)})})).apply(this,arguments)}function m(t,n){return k.apply(this,arguments)}function k(){return k=d(function*(t,n){let r,a,s,o;if(o="string"==typeof t?{type:"manifest",remoteName:t,exposedModule:n}:t,!o.type){const l=Object.keys(i).length>0;o.type=l?"manifest":"script"}if("manifest"===o.type){const l=i[o.remoteName];if(!l)throw new Error("Manifest does not contain "+o.remoteName);o={type:l.type,exposedModule:o.exposedModule,remoteEntry:l.remoteEntry,remoteName:"script"===l.type?o.remoteName:void 0},s=l.remoteEntry}else s=o.remoteEntry;return"script"===o.type?(r={type:"script",remoteEntry:o.remoteEntry,remoteName:o.remoteName},a=o.remoteName):"module"===o.type&&(r={type:"module",remoteEntry:o.remoteEntry},a=o.remoteEntry),s&&(yield function E(t,n){return M.apply(this,arguments)}(r)),yield function N(t,n){return g.apply(this,arguments)}(a,o.exposedModule)}),k.apply(this,arguments)}const B=[{path:"testimonials",loadChildren:()=>m({type:"module",remoteEntry:"http://localhost:2000/remoteEntry.js",exposedModule:"./TestimonialsModule"}).then(t=>t.TestimonialsModule)},{path:"dashboard",loadChildren:()=>m({type:"module",remoteEntry:"http://localhost:3000/remoteEntry.js",exposedModule:"./DashboardModule"}).then(t=>t.DashboardModule)},{path:"products",loadChildren:()=>m({type:"module",remoteEntry:"http://localhost:4000/remoteEntry.js",exposedModule:"./ProductsModule"}).then(t=>t.ProductsModule)},{path:"cart",loadChildren:()=>m({type:"module",remoteEntry:"http://localhost:5000/remoteEntry.js",exposedModule:"./CartModule"}).then(t=>t.CartModule)},{path:"",outlet:"products",loadChildren:()=>m({type:"module",remoteEntry:"http://localhost:4000/remoteEntry.js",exposedModule:"./ProductsModule"}).then(t=>t.ProductsModule)},{path:"",outlet:"testimonials",loadChildren:()=>m({type:"module",remoteEntry:"http://localhost:2000/remoteEntry.js",exposedModule:"./TestimonialsModule"}).then(t=>t.TestimonialsModule)},{path:"",outlet:"dashboard",loadChildren:()=>m({type:"module",remoteEntry:"http://localhost:3000/remoteEntry.js",exposedModule:"./DashboardModule"}).then(t=>t.DashboardModule)}];var e=u(5760),v=u(140);class f{constructor(){this.title="shell"}}f.\u0275fac=function(n){return new(n||f)},f.\u0275cmp=e.\u0275\u0275defineComponent({type:f,selectors:[["app-root"]],decls:85,vars:0,consts:[[1,"container"],[1,"header"],["src","assets/logo.png","alt","Trillo logo",1,"logo"],["action","#",1,"search"],["type","text","placeholder","Search perfumes ...",1,"search__input"],[1,"search__button"],[1,"search__icon"],[0,"xlink","href","assets/sprite.svg#icon-magnifying-glass"],[1,"user-nav"],[1,"user-nav__icon-box"],[1,"user-nav__icon"],[0,"xlink","href","assets/sprite.svg#icon-bookmark"],[0,"xlink","href","assets/sprite.svg#icon-chat"],[0,"xlink","href","assets/sprite.svg#icon-cart"],[1,"user-nav__notification"],[1,"user-nav__user"],["src","assets/user.jpg","alt","User photo",1,"user-nav__user-photo"],[1,"user-nav__user-name"],[1,"content"],[1,"sidebar"],[1,"side-nav"],["routerLinkActive","side-nav__item--active",1,"side-nav__item"],["routerLink","products",1,"side-nav__link"],[1,"side-nav__icon"],[0,"xlink","href","assets/sprite.svg#icon-home"],["routerLink","dashboard",1,"side-nav__link"],[0,"xlink","href","assets/sprite.svg#icon-aircraft-take-off"],["routerLink","cart",1,"side-nav__link"],[0,"xlink","href","assets/sprite.svg#icon-key"],["routerLink","testimonials",1,"side-nav__link"],[0,"xlink","href","assets/sprite.svg#icon-map"],[1,"legal"],[1,"hotel-view"],[1,"overview"],[1,"overview__heading"],[1,"overview__stars"],[1,"overview__icon-star"],[0,"xlink","href","assets/sprite.svg#icon-star"],[1,"overview__location"],[1,"overview__icon-location"],[0,"xlink","href","assets/sprite.svg#icon-location-pin"],[1,"btn-inline"],[1,"overview__rating"],[1,"overview__rating-average"],[1,"overview__rating-count"],[1,"detail"],[1,"description"],["name","dashboard"],["name","products"],[1,"user-reviews"],["name","testimonials"]],template:function(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"header",1),e.\u0275\u0275element(2,"img",2),e.\u0275\u0275elementStart(3,"form",3),e.\u0275\u0275element(4,"input",4),e.\u0275\u0275elementStart(5,"button",5),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(6,"svg",6),e.\u0275\u0275element(7,"use",7),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(8,"nav",8)(9,"div",9),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(10,"svg",10),e.\u0275\u0275element(11,"use",11),e.\u0275\u0275elementEnd()(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(12,"div",9),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(13,"svg",10),e.\u0275\u0275element(14,"use",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(15,"div",9),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(16,"svg",10),e.\u0275\u0275element(17,"use",13),e.\u0275\u0275elementEnd(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(18,"span",14),e.\u0275\u0275text(19,"0"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15),e.\u0275\u0275element(21,"img",16),e.\u0275\u0275elementStart(22,"span",17),e.\u0275\u0275text(23,"Youness"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(24,"div",18)(25,"nav",19)(26,"ul",20)(27,"li",21)(28,"a",22),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(29,"svg",23),e.\u0275\u0275element(30,"use",24),e.\u0275\u0275elementEnd(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(31,"span"),e.\u0275\u0275text(32,"Products"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(33,"li",21)(34,"a",25),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(35,"svg",23),e.\u0275\u0275element(36,"use",26),e.\u0275\u0275elementEnd(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(37,"span"),e.\u0275\u0275text(38,"Dashboard"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(39,"li",21)(40,"a",27),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(41,"svg",23),e.\u0275\u0275element(42,"use",28),e.\u0275\u0275elementEnd(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(43,"span"),e.\u0275\u0275text(44,"Cart"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(45,"li",21)(46,"a",29),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(47,"svg",23),e.\u0275\u0275element(48,"use",30),e.\u0275\u0275elementEnd(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(49,"span"),e.\u0275\u0275text(50,"Testimonials"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(51,"div",31),e.\u0275\u0275text(52," \xa9 2022 by Trillo. All rights reserved. "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(53,"main",32)(54,"div",33)(55,"h1",34),e.\u0275\u0275text(56," Our perfume store on trustpilot "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(57,"div",35),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(58,"svg",36),e.\u0275\u0275element(59,"use",37),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(60,"svg",36),e.\u0275\u0275element(61,"use",37),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(62,"svg",36),e.\u0275\u0275element(63,"use",37),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(64,"svg",36),e.\u0275\u0275element(65,"use",37),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(66,"svg",36),e.\u0275\u0275element(67,"use",37),e.\u0275\u0275elementEnd()(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(68,"div",38),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(69,"svg",39),e.\u0275\u0275element(70,"use",40),e.\u0275\u0275elementEnd(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(71,"a",41),e.\u0275\u0275text(72,"Lausanne, Switzerland"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(73,"div",42)(74,"div",43),e.\u0275\u0275text(75,"8.9"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(76,"div",44),e.\u0275\u0275text(77,"532 votes"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(78,"div",45)(79,"div",46)(80,"div"),e.\u0275\u0275element(81,"router-outlet",47),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(82,"router-outlet",48),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(83,"div",49),e.\u0275\u0275element(84,"router-outlet",50),e.\u0275\u0275elementEnd()()()()())},dependencies:[v.RouterOutlet,v.RouterLink,v.RouterLinkActive]});class p{}p.\u0275fac=function(n){return new(n||p)},p.\u0275mod=e.\u0275\u0275defineNgModule({type:p,bootstrap:[f]}),p.\u0275inj=e.\u0275\u0275defineInjector({imports:[L.BrowserModule,v.RouterModule.forRoot(B)]}),L.platformBrowser().bootstrapModule(p).catch(t=>console.error(t))}}]);