const lobo = document.getElementById('lobo');
const frase = document.getElementById('frase');

const frases = [
  "Saia da minha Página!",
  "Nunca mais encha o saco de um lobo quieto!",
  "AAAUUUUUU!",
  "Anthony Edwards > SGA",
  "Já não falei pra sair??",
  "Eu disse... FUI!",
  "Corre antes que eu te ache!",
  "Cuidado com minhas garras!",
];

// Faz o lobo fugir do mouse
lobo.addEventListener('mouseenter', () => {
  const container = document.querySelector('.lobo-container');
  const containerRect = container.getBoundingClientRect();
  const loboRect = lobo.getBoundingClientRect();

  // Calcula posições aleatórias dentro do container
  const maxX = containerRect.width - loboRect.width;
  const maxY = containerRect.height - loboRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  lobo.style.position = 'absolute';
  lobo.style.left = randomX + 'px';
  lobo.style.top = randomY + 'px';
});

// Ao clicar no lobo, exibe uma frase aleatória
lobo.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * frases.length);
  frase.textContent = frases[randomIndex];
});