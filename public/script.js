const modalStart = document.getElementById('modalStart');
const tabuleiro = document.getElementById('boardWrap');
const buttonStart = document.getElementById('buttonStart');
const buttonRestart = document.getElementById('restart');
const modalHelp = document.getElementById('modalHelp');
const buttonHelp = document.getElementById('btnHelp');
const boardWrap = document.getElementById('boardWrap');

function startGame(event) {
  if (buttonStart.click) {
    
    var squares1 = '';
    for(let i = 1; i < 9; i++) {
      if (i % 2 == 1)  {
        var squares1 = squares1 + '<div class="square"><div class="piece dark"></div></div>';  
      }
      else {
        var squares1 = squares1 + '<div class="square"></div>';
      }
    }
    
    var squares2 = '';
    for(let i = 1; i < 9; i++) {
      if (i % 2 == 0)  {
        var squares2 = squares2 + '<div class="square"><div class="piece dark"></div></div>';  
      }
      else {
        var squares2 = squares2 + '<div class="square"></div>';
      }
    }
    
    var squares7 = '';
    for(let i = 1; i < 9; i++) {
      if (i % 2 == 1)  {
        var squares7 = squares7 + '<div class="square"><div class="piece"></div></div>';  
      }
      else {
        var squares7 = squares7 + '<div class="square"></div>';
      }
    }
    
    var squares8 = '';
    for(let i = 1; i < 9; i++) {
      if (i % 2 == 0)  {
        var squares8 = squares8 + '<div class="square"><div class="piece"></div></div>';  
      }
      else {
        var squares8 = squares8 + '<div class="square"></div>';
      }
    }
    
    var squaresDefault = '';
    for(let i = 0; i < 8; i++) {
      var squaresDefault = squaresDefault + '<div class="square"></div>';
    }

    var rows = '';
    for(let i = 1; i < 9; i++) {

      switch (i) {
        case 1:
          var rows = rows + `<div class="row" id="row${i}">${squares1}</div>`;
          break;
        case 2:
          var rows = rows + `<div class="row" id="row${i}">${squares2}</div>`;
          break;
        case 7:
          var rows = rows + `<div class="row">${squares7}</div>`;
          break;
        case 8:
          var rows = rows + `<div class="row">${squares8}</div>`;
          break;
        default:
          var rows = rows + `<div class="row" id="row${i}">${squaresDefault}</div>`;
          break;
      }

    }

    const boardHtmlContent = `<div class="board"><div class="boardContent" id="boardContent">${rows}</div></div>`;
    boardWrap.innerHTML = boardHtmlContent;

  }
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

buttonStart.addEventListener('click', startGame);
tabuleiro.addEventListener('click', cliquePeca);
modalStart.addEventListener('click', closeModal);
modalHelp.addEventListener('click', closeModal);
buttonRestart.addEventListener('click', restart);
buttonHelp.addEventListener('click', openHelp);