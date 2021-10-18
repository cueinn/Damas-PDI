// const tabuleiro = document.getElementById('boardContent');
const modalStart = document.getElementById('modalStart');
const buttonStart = document.getElementById('buttonStart');
const buttonRestart = document.getElementById('restart');
const modalHelp = document.getElementById('modalHelp');
const buttonHelp = document.getElementById('btnHelp');
const boardWrap = document.getElementById('boardWrap');

function startGame(event) {
  if (buttonStart.click) {
    
    // Cria o tabuleiro
    boardWrap.innerHTML = '<div class="board"><div class="boardContent" id="boardContent"></div></div>';
    
    // Insere linhas
    var rows = '';
    for (let i = 0; i < 8; i++) {
      rows = rows + `<div class="row" id="row${i}"></div>`
    }
    const boardContent = document.getElementById('boardContent');
    boardContent.innerHTML = rows;

    // Função para criar 8 casas
    function createSquares(element) {
      var squares = '';
      for (let i = 0; i < 8; i++) {
        var squares = squares + `<div class="square"></div>`;
      }
      element.innerHTML = squares;
    }
    // Colocando casas nas linhas
    var allRows = document.getElementsByClassName('row');
    Array.prototype.forEach.call(allRows, createSquares);
  }
}

// Selecionar peças
// function cliquePeca(event){
//   if (event.target.classList.contains('piece')) {
//     const pecas = Array.from(document.querySelectorAll('.piece'));
//     pecas.forEach((el) => el.classList.remove('selected'));
//     event.target.classList.add('selected');
//   }
//   if (event.target.classList.contains('dark')) {
//     console.log("clicou em uma peça preta: "+event.target.classList);
//   }
//   if (event.target.classList.contains('light')) {
//     console.log("clicou em uma peça clara "+event.target.classList);
//   }
// }


// // Fechar o modal
function closeModal(event) {
  if (event.target.classList.contains('closeModal')) {
    event.target.closest('.modal').animate([
      { opacity: '0'},
    ], {
      duration: 300,
      easing: 'ease-out'
    });
    setTimeout(() => {
      event.target.closest('.modal').classList.add('off');
    }, 300);
  }
}

// // Restart: abrir modal Start
function restart(event) {
  if (event.target.click) {
    modalStart.classList.remove('off');
    modalStart.animate(
      [
        { opacity: '0' },
        { opacity: '1' }
      ], {
        duration: 300,
        easing: 'ease-out'
      }
    )
  }
}

// // Abrir modal de ajuda
function openHelp(event) {
  if (buttonHelp.click) {
    modalHelp.classList.remove('off');
    modalHelp.animate(
      [
        { opacity: '0' },
        { opacity: '1' }
      ], {
        duration: 300,
        easing: 'ease-out'
      }
    )
  }
}

buttonStart.addEventListener('click', startGame);
// tabuleiro.addEventListener('click', cliquePeca);
modalStart.addEventListener('click', closeModal);
modalHelp.addEventListener('click', closeModal);
buttonRestart.addEventListener('click', restart);
buttonHelp.addEventListener('click', openHelp);