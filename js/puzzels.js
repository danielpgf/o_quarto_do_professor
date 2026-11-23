const P=[
{id:'rel',ico:'🕰️',nm:'Relógio',x:22,y:20,t:'ops',vars:['A','B'],lab:{A:'🕯️',B:'💡'},names:'🕯️ vela · 💡 lâmpada',
 story:'O relógio parou às 3h07. Atrás do mostrador há uma placa com uma tabela gravada e duas luzes. Uma inscrição diz: “Os ponteiros só andam quando exatamente uma das duas luzes está acesa.”',
 hint:'“Exatamente uma” é o OU exclusivo (⊕): só é verdadeiro quando os dois valores são diferentes.',
 mk:o=>B(o[0],'A','B',0),sol:['xor'],
 clue:'Um bilhete: “Eu, Prof. Alvarenga, me tranquei aqui por escolha. Não confie em quem diz que há só uma chave.”',pos:2,d:1},
{id:'est',ico:'📚',nm:'Estante',x:78,y:20,t:'set',vars:['A','B','C'],lab:{A:'🔴',B:'🟡',C:'🟢'},names:'🔴 alavanca vermelha · 🟡 amarela · 🟢 verde',
 story:'Atrás dos livros há três alavancas. A trava só solta quando a expressão gravada na madeira for VERDADEIRA. Ligue ou desligue as alavancas tocando nelas.',
 hint:'A precisa ser verdadeira. Depois, B → ... lembre: A → B só falha se A for V e B for F.',
 e:B('and',B('imp','A','B'),B('and',B('xor','B','C'),'A')),
 clue:'Uma fotografia do professor com dois alunos, rostos riscados. No verso: “Ele roubou a minha prova.”',pos:4,d:2},
{id:'gav',ico:'🗄️',nm:'Gaveta',x:20,y:62,t:'ops',vars:['A','B','C'],lab:{A:'🔑',B:'📜',C:'🔦'},names:'🔑 chave · 📜 carta · 🔦 lanterna',
 story:'A gaveta tem três encaixes e uma tabela. Está escrito: “Se apenas UMA das duas primeiras peças estiver no lugar, então a terceira deve estar também.”',
 hint:'Estrutura: (primeira ? segunda) ? terceira. “Apenas uma” é ⊕ e “então” é →.',
 mk:o=>B(o[0],B(o[1],'A','B',1),'C',0),sol:['imp','xor'],
 clue:'Dentro, um diário aberto: “O culpado nunca saiu desta sala. Foi ele mesmo quem a trancou.”',pos:1,d:4},
{id:'lar',ico:'🔥',nm:'Lareira',x:80,y:62,t:'ops',vars:['A','B','C'],lab:{A:'🪵',B:'💨',C:'🔥'},names:'🪵 lenha · 💨 fumaça · 🔥 chama',
 story:'Sob as cinzas há uma placa com uma tabela. Nenhuma dica, só a lógica: preencha os três operadores e as linhas precisam bater. A expressão tem um ¬ escondido na lenha.',
 hint:'Teste operador por operador e veja quais linhas ficam ✓. Comece pelo operador de fora.',
 mk:o=>B(o[0],B(o[1],'A',N('B'),1),B(o[2],'B','C',2),0),sol:['iff','and','xor'],
 clue:'Entre as cinzas, um anel gravado “A.A.”. O professor se trancou para esconder o próprio erro.',pos:3,d:7}
];
const CODE='4172';
