function show(n,p,live){
 const e=st[p.id].env,v=ev(n,p.t==='set'?e:{}),c=v?'v1':'v0';
 if(typeof n==='string'){if(p.t==='ops')return `<span class="n" style="border-color:var(--bd)">${p.lab[n]}</span>`;
  return `<button class="var ${e[n]?'v1':'v0'}" data-v="${n}">${p.lab[n]}</button>`}
 const col=p.t==='set'?c:'';
 if(n.o==='not')return `<span class="n ${col}"><span class="o">¬</span>${show(n.a,p,live)}</span>`;
 const op=n.s!==undefined&&!st[p.id].done?`<button class="op" data-s="${n.s}">${SYM[n.o]}</button>`:`<span class="o">${SYM[n.o]}</span>`;
 return `<span class="n ${col}">${show(n.a,p,live)}${op}${show(n.b,p,live)}</span>`}
function room(){
 const nd=P.filter(p=>st[p.id].done).length;$('cnt').textContent=nd;
 $('room').innerHTML=P.map(p=>`<button class="ob ${st[p.id].done?'d':''}" data-o="${p.id}" style="left:${p.x}%;top:${p.y}%">${p.ico}<small>${p.nm}</small></button>`).join('')+
 `<button class="ob ${nd===4?'pulse':''}" data-o="door" style="left:50%;top:44%;font-size:72px">🚪<small>${nd===4?'Porta (tente o código)':'Porta trancada'}</small></button>`}
function open(h){$('box').innerHTML=h;$('sh').style.display='flex'}
function close(){$('sh').style.display='none'}
function sheet(id){
 const p=P.find(q=>q.id===id),s=st[id];
 let h=`<h2>${p.ico} ${p.nm}<button class="x" data-c>✕</button></h2><p>${p.story}</p><div class="leg sans">${p.names}</div>`;
 const t=tree(p);
 h+=`<div class="expr sans">${show(t,p,1)}</div>`;
 if(p.t==='set')h+=`<p class="sans" style="font-size:13px;color:var(--mu)">Toque nas alavancas. Verde = expressão verdadeira.</p>`;
 else{const g=p.mk(p.sol);
  h+=`<table class="sans"><tr>${p.vars.map(v=>`<th>${p.lab[v]}</th>`).join('')}<th>placa</th><th>sua</th><th></th></tr>`+
  combos(p.vars).map(r=>{const a=ev(g,r),b=ev(t,r);return `<tr class="${a===b?'r1':'r0'}">${p.vars.map(v=>`<td>${r[v]?'V':'F'}</td>`).join('')}<td>${a?'V':'F'}</td><td>${b?'V':'F'}</td><td>${a===b?'✓':'✗'}</td></tr>`}).join('')+`</table>
  <p class="sans" style="font-size:13px;color:var(--mu)">Toque nos operadores tracejados para trocá-los até a placa inteira bater.</p>`}
 if(s.done)h+=`<div class="clue"><b>📜 Pista encontrada</b><p style="margin:6px 0">${p.clue}</p><p class="sans" style="margin:0"><b>Dígito ${p.pos} do código: ${p.d}</b></p></div>`;
 else h+=s.hint?`<div class="hint">💡 ${p.hint}</div>`:`<button class="btn sans" data-h>💡 Pedir uma dica</button>`;
 open(h);
}
function doorSheet(){
 const nd=P.filter(p=>st[p.id].done).length;
 let h=`<h2>🚪 A porta<button class="x" data-c>✕</button></h2><p>Fechadura de quatro dígitos. ${nd<4?'Faltam pistas: ainda há mecanismos por resolver.':'Você tem todas as pistas.'}</p>
 <div class="code">${[1,2,3,4].map(i=>{const p=P.find(q=>q.pos===i);return `<span>${st[p.id].done?p.d:'?'}</span>`}).join('')}</div>
 <input id="cd" class="sans" inputmode="numeric" maxlength="4" placeholder="0000"><div id="dm" class="hint"></div><button class="btn p sans" data-go>Girar a fechadura</button>`;
 open(h)}
function notebook(){
 const f=P.filter(p=>st[p.id].done);
 let h=`<h2>📓 Caderno<button class="x" data-c>✕</button></h2>`+(f.length?f.map(p=>`<div class="clue" style="margin:0 0 8px"><p style="margin:0 0 4px">${p.clue}</p><b class="sans">Dígito ${p.pos}: ${p.d}</b></div>`).join(''):'<p>Nada ainda. Examine os objetos da sala.</p>');
 open(h)}
function ending(){
 open(`<h2>🌅 Liberdade</h2><p>A fechadura estala e a porta se abre. Lá fora, o dia amanhece.</p><p>Na mesa havia um último recado: o professor não se trancou para fugir, e sim para provar, com lógica, que aquela prova roubada era dele. Cada pista só aparecia para quem raciocinasse até o fim.</p><p><b>Você escapou e resolveu o mistério.</b></p><button class="btn p sans" data-r>Jogar de novo</button>`)}
