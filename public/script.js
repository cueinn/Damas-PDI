const tabuleiro = document.getElementById('boardContent');

// tabuleiro.innerHTML = '<div>OI!</div>'

function cliquePeca(event){
  if (event.target.classList.contains('dark')) {
    alert('funcionou!');
  }
  console.log(event.target.classList);
}

tabuleiro.addEventListener('click', cliquePeca)