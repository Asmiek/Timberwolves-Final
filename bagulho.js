document.addEventListener("DOMContentLoaded", () => {
  const jogadores = document.querySelectorAll('.jogador');

  jogadores.forEach(jogador => {
    jogador.addEventListener('mouseenter', () => {
      // Cria o elemento de descrição
      const descricao = document.createElement('div');
      descricao.classList.add('descricao-jogador');

      const nome = jogador.dataset.nome;
      const texto = jogador.dataset.descricao;

      descricao.innerHTML = `
        <h3>${nome}</h3>
        <p>${texto}</p>
      `;

      // Aplica o filtro escuro e adiciona o texto
      const imagem = jogador.querySelector('img');
      imagem.style.filter = 'blur(3px) brightness(0.5)';
      jogador.appendChild(descricao);

      // Suave fade-in
      requestAnimationFrame(() => {
        descricao.style.opacity = '1';
      });
    });

    jogador.addEventListener('mouseleave', () => {
      const descricao = jogador.querySelector('.descricao-jogador');
      const imagem = jogador.querySelector('img');

      if (descricao) {
        // Suave fade-out
        descricao.style.opacity = '0';

        // Espera o fade terminar antes de remover o texto
        setTimeout(() => {
          descricao.remove();
          imagem.style.filter = 'none'; // Volta a imagem ao normal
        }, 300); // 300ms = tempo da animação CSS
      } else {
        imagem.style.filter = 'none';
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lobo = document.getElementById("lobo-bolado");
  const imagemEvoluida = "imagens/Lobão bombado.png";
  let evoluido = false;

  // Move o lobo quando o mouse se aproxima
  document.addEventListener("mousemove", (e) => {
    if (evoluido) return; // não se move depois de evoluir

    const loboRect = lobo.getBoundingClientRect();
    const distanciaX = e.clientX - (loboRect.left + loboRect.width / 2);
    const distanciaY = e.clientY - (loboRect.top + loboRect.height / 2);
    const distancia = Math.sqrt(distanciaX**2 + distanciaY**2);

    // Se o mouse estiver próximo (100px)
    if (distancia < 120) {
      const bodyWidth = document.body.clientWidth;
      let novaPos = loboRect.left + 150; // move 150px pra direita
      if (novaPos + loboRect.width > bodyWidth - 20) {
        novaPos = bodyWidth - loboRect.width - 20; // não ultrapassar limite
      }
      lobo.style.left = novaPos + "px";
    }
  });

  // Clique para evoluir
  lobo.addEventListener("click", () => {
    if (evoluido) return;

    evoluido = true;
    lobo.style.transition = "transform 1.5s ease, left 1.5s ease";
    lobo.classList.add("transformando");

    setTimeout(() => {
      lobo.src = imagemEvoluida;
      lobo.classList.remove("transformando");
      lobo.classList.add("evoluido");
       lobo.style.cursor = 'pointer'; // muda o cursor
  lobo.addEventListener('click', () => {
    window.location.href = 'outra pagina/sec.html'; // substitua pelo link desejado
  }, { once: true }); // só precisa clicar uma vez
    }, 1000);
  });
});
