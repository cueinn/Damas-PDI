const body = document.body;
const modalStart = document.getElementById('modalStart');
const tabuleiro = document.getElementById('board');
const buttonStart = document.getElementById('buttonStart');
const buttonRestart = document.getElementById('restart');
const modalHelp = document.getElementById('modalHelp');
const buttonHelp = document.getElementById('btnHelp');
const boardWrap = document.getElementById('boardWrap');

// Cria o tabuleiro
function startGame(event) {
  if (buttonStart.click) {
    
    // Cria as casas
    squares = '';
    function rowOdd(r) {
      for (let i = 1; i < 9; i++){
        if (i%2 == 0) {
          squares = squares + `<div class="square black" id="${r}${i}"></div>`;
        }
        else {
          squares = squares + `<div class="square" id="${r}${i}"></div>`;
        }
      }
    }
    function rowEven(r) {
      for (let i = 1; i < 9; i++){
        if (i%2 == 1) {
          squares = squares + `<div class="square black" id="${r}${i}"></div>`;
        }
        else {
          squares = squares + `<div class="square" id="${r}${i}"></div>`;
        }
      }
    }
    
    for (let z = 1; z < 9; z++) {
      if (z%2 == 1)  { rowOdd(z) }
      else { rowEven(z) }
    }

  }

  const boardHtmlContent = `<div class="boardContent" id="boardContent">${squares}</div>`;
  let board = document.createElement('div'); 
  board.id = 'board';
  board.className = 'board';
  board.innerHTML = boardHtmlContent;
  document.body.appendChild(board);
}

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

class Piece {
  constructor(color, position) {
    this.color = color;
    this.position = position;
  }

  createPiece() {
    if (this.color == 'white') {
      return('<div class="piece"></div>')
    }
    if (this.color == 'black') {
      return('<div class="piece dark"></div>')
    }
  }
}

const testPiece = new Piece('black', 11);

class Square {
  constructor(color, position) {
    this.color = color;
    this.position = position;
  }
  
  createSquare() {
    return(`<div class="square ${this.color}" id="${this.position}"></div>`)
  }
}


buttonStart.addEventListener('click', startGame);
// tabuleiro.addEventListener('click', cliquePeca);
modalStart.addEventListener('click', closeModal);
modalHelp.addEventListener('click', closeModal);
buttonRestart.addEventListener('click', restart);
buttonHelp.addEventListener('click', openHelp);