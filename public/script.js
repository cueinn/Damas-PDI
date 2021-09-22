const tabuleiro = document.getElementById('boardContent');

// tabuleiro.innerHTML = '<div>OI!</div>'

function cliquePeca(event){
  if (event.target.classList.contains('piece')) {
    event.target.classList.add('selected');
  }
  if (event.target.classList.contains('dark')) {
    console.log("clicou em uma peça preta: "+event.target.classList);
  }
  if (event.target.classList.contains('light')) {
    console.log("clicou em uma peça clara "+event.target.classList);
  }
}

tabuleiro.addEventListener('click', cliquePeca)