class Piece {
  constructor(color, position, id) {
    this.color = color;
    this.position = position;
    this.id = id;
  }

  createPiece() {
    return(`<div class="piece ${this.color}" id="${this.id}"></div>`)
  }

  assemblePiece() {
    let squareToAssemble = document.getElementById(`${this.position}`);
    let pieceHtml = this.createPiece();

    squareToAssemble.innerHTML = pieceHtml;
  }

  checkPossibleMoviment() {
    let positionA = 0;
    let positionB = 0;
    if (this.color == 'black'){
      positionA = this.position - -9;
      positionB = this.position - -11;
    }
    else {
      positionA = this.position - 9;
      positionB = this.position - 11;
    }
    
    let squareA = document.getElementById(`${positionA}`);
    let squareB = document.getElementById(`${positionB}`);

    var possibleMoviments = [];
  
    if(squareA && !squareA.hasChildNodes()) {possibleMoviments.push(squareA.id)};
    if(squareB && !squareB.hasChildNodes()) {possibleMoviments.push(squareB.id)};
  
    return possibleMoviments
  }

  move() {

    let possibleMoviments = this.checkPossibleMoviment();
    
    if (possibleMoviments.length === 0){
      console.log('Nenhum movimento possivel. Escolha outra peça.')
    }
    else {
      let moviment = prompt(`Movimento possível para ${possibleMoviments}. Para onde mover?`);
      
      if (moviment == possibleMoviments[0] || moviment == possibleMoviments[1]) {
        this.position = moviment;
        redrawPieces();
      }
      else {
        let moviment = alert(`Esse movimento não é possível :(`);
        this.move()
      }
    }

  }
}

const horacio = new Piece('black', 12, 'horacio');
const timoteo = new Piece('black', 14, 'timoteo');
const ofelia = new Piece('black', 16, 'ofelia');
const ualace = new Piece('black', 18, 'ualace');
const ratazana = new Piece('black', 21, 'ratazana');
const mariano = new Piece('black', 23, 'mariano');
const felicio = new Piece('black', 25, 'felicio');
const tiberius = new Piece('black', 27, 'tiberius');
const haroldo = new Piece('white', 72, 'haroldo');
const capataz = new Piece('white', 74, 'capataz');
const joao = new Piece('white', 76, 'joao');
const chico = new Piece('white', 78, 'chico');
const carlos = new Piece('white', 81, 'carlos');
const rafael = new Piece('white', 83, 'rafael');
const jose = new Piece('white', 85, 'jose');
const marlene = new Piece('white', 87, 'marlene');

const pieceBox = [horacio, timoteo, ofelia, ualace, ratazana, mariano, felicio, tiberius, haroldo, capataz, joao, chico, carlos, rafael, jose, marlene]

function drawPieces() {
  pieceBox.forEach((el) => {
    el.assemblePiece()
  })
}

function redrawPieces(params) {
  document.querySelectorAll('.piece').forEach(e => e.remove());
  drawPieces();
  console.log('Peças reposicionadas');
}