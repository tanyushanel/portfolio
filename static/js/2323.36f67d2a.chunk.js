"use strict";(self.webpackChunkapp_portfolio=self.webpackChunkapp_portfolio||[]).push([[2323],{2323:(t,e,o)=>{o.d(e,{Attractor:()=>i});var a=o(4409);class i extends a.U4{constructor(t){super(t)}clear(){}init(){}interact(t){const e=this.container;void 0===t.attractDistance&&(t.attractDistance=(0,a.VG)(t.options.move.attract.distance)*e.retina.pixelRatio);const o=t.attractDistance,i=t.getPosition(),c=e.particles.quadTree.queryCircle(i,o);for(const s of c){if(t===s||!s.options.move.attract.enable||s.destroyed||s.spawning)continue;const e=s.getPosition(),{dx:o,dy:c}=(0,a.vr)(i,e),n=t.options.move.attract.rotate,r=o/(1e3*n.x),l=c/(1e3*n.y),p=s.size.value/t.size.value,v=1/p;t.velocity.x-=r*p,t.velocity.y-=l*p,s.velocity.x+=r*v,s.velocity.y+=l*v}}isEnabled(t){return t.options.move.attract.enable}reset(){}}}}]);
//# sourceMappingURL=2323.36f67d2a.chunk.js.map