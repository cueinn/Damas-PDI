const tabuleiro = document.getElementById('boardContent');
const modalStart = document.getElementById('modalStart');
const buttonRestart = document.getElementById('restart')

// tabuleiro.innerHTML = '<div>OI!</div>'

// Selecionar peças
function cliquePeca(event){
  if (event.target.classList.contains('piece')) {
    const pecas = Array.from(document.querySelectorAll('.piece'));
    pecas.forEach((el) => el.classList.remove('selected'));
    event.target.classList.add('selected');
  }
  if (event.target.classList.contains('dark')) {
    console.log("clicou em uma peça preta: "+event.target.classList);
  }
  if (event.target.classList.contains('light')) {
    console.log("clicou em uma peça clara "+event.target.classList);
  }
}

// Fechar o modal
function startGame(event) {
  const buttonStart = document.getElementById('buttonStart');
  if (buttonStart.click) {
    modalStart.classList.add('off');
  }
}
// Restart: abrir modal Start
function restart(event) {
  if (event.target.click) {
    modalStart.classList.remove('off');
  }
}

tabuleiro.addEventListener('click', cliquePeca);
modalStart.addEventListener('click', startGame);
buttonRestart.addEventListener('click', restart);