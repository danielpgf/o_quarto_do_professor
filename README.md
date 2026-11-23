# 🕯️ O Quarto do Professor

Escape room de mistério em que cada pista é liberada resolvendo uma expressão lógica.
Você acorda numa sala trancada, examina os objetos, resolve os mecanismos e junta quatro dígitos para abrir a porta.

## Como jogar
- **Andar:** setas ou WASD, ou toque no chão / num objeto.
- **Examinar:** chegue perto de um objeto e aperte E, Espaço ou Enter (ou toque nele).
- **Estante:** ligue as alavancas até a expressão ficar verdadeira.
- **Relógio, gaveta e lareira:** troque os operadores até a tabela gravada bater em todas as linhas (✓).
- Cada acerto dá uma pista e um dígito, guardados no 📓 Caderno. Com os 4 dígitos, abra a 🚪 porta.

## Símbolos
| Símbolo | Significado |
|---|---|
| ∧ | E (verdadeiro se os dois lados são verdadeiros) |
| ∨ | OU (basta um lado verdadeiro) |
| ⊕ | OU exclusivo (lados diferentes) |
| → | Se... então (falso só se V → F) |
| ↔ | Equivale (lados iguais) |
| ¬ | NÃO (inverte) |

## Rodar
Não precisa de build. Abra `index.html` no navegador (ou publique no GitHub Pages).

## Estrutura
```
index.html        marcação da página
style.css         tema e componentes
js/logic.js       avaliador de expressões booleanas
js/puzzles.js     enigmas e código da porta
js/state.js       estado do jogo e verificação
js/render.js      desenho da sala, expressões e painéis
js/events.js      cliques e interações
js/player.js      boneco e movimento
js/main.js        inicialização
```
