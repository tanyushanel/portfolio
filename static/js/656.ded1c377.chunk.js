"use strict";(self.webpackChunkapp_portfolio=self.webpackChunkapp_portfolio||[]).push([[656],{656:(o,i,e)=>{e.d(i,{Collider:()=>u});var s=e(4409);const t=.5,n=10,a=0;function d(o,i,e,d,l,c){const r=(0,s.qE)(o.options.collisions.absorb.speed*l.factor/n,a,d);o.size.value+=r*t,e.size.value-=r,d<=c&&(e.size.value=0,e.destroy())}const l=o=>{void 0===o.collisionMaxSpeed&&(o.collisionMaxSpeed=(0,s.VG)(o.options.collisions.maxSpeed)),o.velocity.length>o.collisionMaxSpeed&&(o.velocity.length=o.collisionMaxSpeed)};function c(o,i){(0,s.pE)((0,s.Tg)(o),(0,s.Tg)(i)),l(o),l(i)}function r(o,i,e,s){switch(o.options.collisions.mode){case"absorb":!function(o,i,e,s){const t=o.getRadius(),n=i.getRadius();void 0===t&&void 0!==n?o.destroy():void 0!==t&&void 0===n?i.destroy():void 0!==t&&void 0!==n&&(t>=n?d(o,0,i,n,e,s):d(i,0,o,t,e,s))}(o,i,e,s);break;case"bounce":c(o,i);break;case"destroy":!function(o,i){o.unbreakable||i.unbreakable||c(o,i),void 0===o.getRadius()&&void 0!==i.getRadius()?o.destroy():void 0!==o.getRadius()&&void 0===i.getRadius()?i.destroy():void 0!==o.getRadius()&&void 0!==i.getRadius()&&(o.getRadius()>=i.getRadius()?i:o).destroy()}(o,i)}}class u extends s.U4{constructor(o){super(o)}clear(){}init(){}interact(o,i){if(o.destroyed||o.spawning)return;const e=this.container,t=o.getPosition(),n=o.getRadius(),a=e.particles.quadTree.queryCircle(t,2*n);for(const d of a){if(o===d||!d.options.collisions.enable||o.options.collisions.mode!==d.options.collisions.mode||d.destroyed||d.spawning)continue;const a=d.getPosition(),l=d.getRadius();if(Math.abs(Math.round(t.z)-Math.round(a.z))>n+l)continue;(0,s.Yf)(t,a)>n+l||r(o,d,i,e.retina.pixelRatio)}}isEnabled(o){return o.options.collisions.enable}reset(){}}}}]);
//# sourceMappingURL=656.ded1c377.chunk.js.map