(self.webpackChunkshell=self.webpackChunkshell||[]).push([[609],{609:(f,c,n)=>{n.r(c),n.d(c,{CartService:()=>d,Gender:()=>r,MfCartModule:()=>s,cartForRootGuard:()=>a});var t=n(760);let d=(()=>{class e{constructor(){this.products=[],console.log("mf-card@1.3.0")}add(o){this.products.push(o)}remove(o){this.products=this.products.filter(l=>l.id!==o)}count(){return this.products.length}clear(){this.products=[]}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();var r=(()=>{return(e=r||(r={})).Men="men",e.Women="women",r;var e})();const u=new t.InjectionToken("CART FORROOT GUARD");function a(e){return!!e}let s=(()=>{class e{constructor(o){if(o)throw new TypeError("*** CartModule.forRoot() called twice. Lazy loaded modules should use CartModule.forChild() instead. ***")}static forRoot(){return{ngModule:e,providers:[d,{provide:u,useFactory:a,deps:[[d,new t.Optional,new t.SkipSelf]]}]}}static forChild(){return{ngModule:e}}}return e.\u0275fac=function(o){return new(o||e)(t.\u0275\u0275inject(u,8))},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({}),e})()}}]);