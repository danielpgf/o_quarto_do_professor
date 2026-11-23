const st={};P.forEach(p=>st[p.id]={env:{A:false,B:false,C:false},sl:[0,0,0],done:false,hint:false});
let hintD=false;
const $=i=>document.getElementById(i);
const tree=p=>p.t==='set'?p.e:p.mk(st[p.id].sl.map(i=>OPS[i]));
function ok(p){const t=tree(p);if(p.t==='set')return ev(t,st[p.id].env);const g=p.mk(p.sol);return combos(p.vars).every(r=>ev(t,r)===ev(g,r))}
