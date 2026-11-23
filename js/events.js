document.addEventListener('click',e=>{
 const t=e.target.closest('button');if(!t)return;
 if(t.dataset.o){const id=t.dataset.o;id==='door'?doorSheet():sheet(id);return}
 if(t.id==='nb'){notebook();return}
 if('c' in t.dataset){close();return}
 if('r' in t.dataset){location.reload();return}
 if('go' in t.dataset){const v=$('cd').value;if(v===CODE){ending()}else{$('dm').textContent=v.length<4?'Digite os quatro dígitos.':'A porta não cede. Algum dígito está errado.'}return}
 const cur=P.find(p=>$('box').innerHTML.includes(p.story));if(!cur)return;const s=st[cur.id];
 if('h' in t.dataset){s.hint=true;sheet(cur.id);return}
 if(s.done)return;
 if(t.dataset.v){s.env[t.dataset.v]=!s.env[t.dataset.v]}
 else if(t.dataset.s!==undefined){const i=+t.dataset.s;s.sl[i]=(s.sl[i]+1)%OPS.length}
 else return;
 if(ok(cur)){s.done=true;room();$('msg').textContent='Algo se move dentro do objeto... você encontrou uma pista.'}
 sheet(cur.id)});
$('sh').addEventListener('click',e=>{if(e.target.id==='sh')close()});
