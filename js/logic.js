const SYM={and:'∧',or:'∨',xor:'⊕',imp:'→',iff:'↔'},OPS=['and','or','xor','imp','iff'];
const B=(o,a,b,s)=>({o,a,b,s}),N=a=>({o:'not',a});
function ev(n,e){if(typeof n==='string')return e[n];if(n.o==='not')return !ev(n.a,e);
 const a=ev(n.a,e),b=ev(n.b,e);return n.o==='and'?a&&b:n.o==='or'?a||b:n.o==='xor'?a!==b:n.o==='imp'?(!a||b):a===b}
const combos=vs=>vs.reduce((r,v)=>r.flatMap(x=>[{...x,[v]:true},{...x,[v]:false}]),[{}]);
