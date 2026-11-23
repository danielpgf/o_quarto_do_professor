const OB=[...P.map(p=>({id:p.id,x:p.x,y:p.y})),{id:'door',x:50,y:44}];
let px=50,py=84,tg=null,face=1,mv=false,keys={},lt=0;
const RC=()=>$('room').getBoundingClientRect();
function dist(a,b){const r=RC();return Math.hypot((a.x-b.x)*r.width/100,(a.y-b.y)*r.height/100)}
function nearest(){let b=null,d=90;for(const o of OB){const k=dist({x:px,y:py},o);if(k<d){d=k;b=o}}return b}
function upd(){const p=$('pl');if(!p)return;p.style.left=px+'%';p.style.top=py+'%';p.style.transform=`translate(-50%,-50%) scaleX(${face})`;p.className=mv?'w':'';const n=nearest();document.querySelectorAll('.ob').forEach(b=>b.classList.toggle('near',!!n&&b.dataset.o===n.id))}
function use(id){id==='door'?doorSheet():sheet(id)}
function goTo(id){const o=OB.find(q=>q.id===id),n=nearest();if(n&&n.id===id){tg=null;use(id);return}tg={x:o.x,y:Math.min(92,o.y+10),o:id}}
function tick(t){const dt=Math.min(.05,(t-lt)/1000);lt=t;const open=$('sh').style.display==='flex';mv=false;
 if(!open){const dx=(keys.ArrowRight||keys.d?1:0)-(keys.ArrowLeft||keys.a?1:0),dy=(keys.ArrowDown||keys.s?1:0)-(keys.ArrowUp||keys.w?1:0);
  if(dx||dy){tg=null;const l=Math.hypot(dx,dy);px+=dx/l*42*dt;py+=dy/l*42*dt;mv=true;if(dx)face=dx<0?-1:1}
  else if(tg){const r=RC(),ddx=(tg.x-px)*r.width/100,ddy=(tg.y-py)*r.height/100,d=Math.hypot(ddx,ddy);
   if(d<6){const o=tg.o;tg=null;if(o)use(o)}else{const s=170*dt;px+=ddx/d*s*100/r.width;py+=ddy/d*s*100/r.height;mv=true;if(Math.abs(ddx)>2)face=ddx<0?-1:1}}
  px=Math.max(6,Math.min(94,px));py=Math.max(16,Math.min(92,py))}
 upd();requestAnimationFrame(tick)}
addEventListener('keydown',e=>{if(document.activeElement&&document.activeElement.tagName==='INPUT')return;const k=e.key.length===1?e.key.toLowerCase():e.key;
 if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].includes(k))e.preventDefault();
 if(k==='e'||k===' '||k==='Enter'){if($('sh').style.display!=='flex'){const n=nearest();if(n)use(n.id)}return}
 keys[k]=true});
addEventListener('keyup',e=>{const k=e.key.length===1?e.key.toLowerCase():e.key;keys[k]=false});
addEventListener('blur',()=>{keys={}});
$('room').addEventListener('click',e=>{if(e.target.id!=='room')return;const r=RC();tg={x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100}});
requestAnimationFrame(t=>{lt=t;tick(t)});
