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