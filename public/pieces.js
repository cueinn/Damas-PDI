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

  assemblePiece() {
    let squareToAssemble = document.getElementById(`square${this.position}`);
    let pieceHtml = this.createPiece();

    squareToAssemble.innerHTML = pieceHtml;
  }
}

const testPiece = new Piece('black', 12);