class Piece {
  constructor(color, position) {
    this.color = color;
    this.position = position;
  }

  createPiece() {
    return(`<div class="piece ${this.color}"></div>`)
  }

  assemblePiece() {
    let squareToAssemble = document.getElementById(`${this.position}`);
    let pieceHtml = this.createPiece();

    squareToAssemble.innerHTML = pieceHtml;
  }
}

const pieceName = [
    "cafunga",
    "quixote",
    "sacoleiro",
    "ualace",
    "alvyn",
    "alasse",
    "vaceran",
    "tiberius",
    "gaigacs",
    "capataz",
    "joao",
    "francisco",
    "carlos",
    "rafael",
    "jose",
    "barizon"
  ]