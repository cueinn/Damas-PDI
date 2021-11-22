const body = document.body;
const modalStart = document.getElementById('modalStart');
const buttonStart = document.getElementById('buttonStart');
const buttonRestart = document.getElementById('restart');
const modalHelp = document.getElementById('modalHelp');
const buttonHelp = document.getElementById('btnHelp');
const boardWrap = document.getElementById('boardWrap');

// Cria o tabuleiro
function startGame(event) {
  if (buttonStart.click) {
    
    // Cria as casas
    squareGroup = '';
    function rowOdd(r) {
      for (let i = 1; i < 9; i++){
        if (i%2 == 0) {
          let square = new Square('black', r*10+i);
          squareGroup += square.createSquare();
        }
        else {
          let square = new Square('white', r*10+i);
          squareGroup += square.createSquare();
        }
      }
    }
    function rowEven(r) {
      for (let i = 1; i < 9; i++){
        if (i%2 == 1) {
          let square = new Square('black', r*10+i);
          squareGroup += square.createSquare();
        }
        else {
          let square = new Square('white', r*10+i);
          squareGroup += square.createSquare();
        }
      }
    }
    
    for (let z = 1; z < 9; z++) {
      if (z%2 == 1)  { rowOdd(z) }
      else { rowEven(z) }
    }

  }

  const boardHtmlContent = `<div class="boardContent" id="boardContent">${squareGroup}</div>`;
  let board = document.createElement('div'); 
  board.id = 'board';
  board.className = 'board';
  board.innerHTML = boardHtmlContent;
  document.body.appendChild(board);

  drawPieces();
  
}

// Selecionar peças
function cliquePeca(event){
  if (event.target.classList.contains('piece')) {
    const pecas = Array.from(document.querySelectorAll('.piece'));
    pecas.forEach((el) => el.classList.remove('selected'));
    event.target.classList.add('selected');
    console.log(`${event.target.id} selecionado`)
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


buttonStart.addEventListener('click', startGame);
document.addEventListener('click', cliquePeca);
modalStart.addEventListener('click', closeModal);
modalHelp.addEventListener('click', closeModal);
buttonRestart.addEventListener('click', restart);
buttonHelp.addEventListener('click', openHelp);