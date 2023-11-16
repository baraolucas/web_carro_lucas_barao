// função para alterar a cor da pagina
function mudarCor() {
  // selecionar o elemento 1 da classe section.module.content
  var elemento = document.querySelector('section.module.content');

  // if else para verificar se a cor é branca, se não, é amarela
  if (elemento.style.backgroundColor === "gray") {
      elemento.style.backgroundColor = "yellow";
  } else {
      elemento.style.backgroundColor = "gray";
  }
}

// adiciona um evento para o botão quando apertado
document.getElementById("botaocor").addEventListener("click", mudarCor);

// estrutura simples de laço (for) que imprime números no console
for (let i = 1; i <= 10; i++) {
  console.log(`Número ${i}`);
}