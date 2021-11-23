function move(piece, position) {
  piece['position'] = position;
  redrawPieces();
}

function checkPossibleMoviment(piece) {
  let positionA = 0;
  let positionB = 0;
  if (piece.color == 'black'){
    positionA = piece.position + 9;
    positionB = piece.position + 11;
  }
  else {
    positionA = piece.position - 9;
    positionB = piece.position - 11;
  }
  
  let squareA = document.getElementById(`${positionA}`);
  let squareB = document.getElementById(`${positionB}`);
  
  var possibleMoviments = [];

  if(squareA && !squareA.hasChildNodes()) {possibleMoviments.push(squareA.id)};
  if(squareB && !squareB.hasChildNodes()) {possibleMoviments.push(squareB.id)};

  console.log(`Movimento possível para ${possibleMoviments}`)
}