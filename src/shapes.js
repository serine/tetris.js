
//105	69	01101001	i
//106	6A	01101010	j
//108	6C	01101100	l
//111	6F	01101111	o
//115	73	01110011	s
//116	74	01110100	t
//122	7A	01111010	z

function getShapeCoords(shapeCode, orient) {

  var shapeCoords;
  // I shape
  if(shapceCode == 105) {
    if(orient == 0 || orient == 2)
      shapeCoords = [{'x':0, 'y':3}, {'x':1, 'y':3}, {'x':2, 'y':3}, {'x':3, 'y':3}]
    else if(orient == 1 || orient == 3)
      shapeCoords = [{'x':0, 'y':0}, {'x':0, 'y':1}, {'x':0, 'y':2}, {'x':0, 'y':3}]
  }
  // J shape
  if(shapceCode == 106) {
    if(orient == 0)
      shapeCoords = [{'x':0, 'y':2}, {'x':1, 'y':2}, {'x':2, 'y':2}, {'x':2, 'y':1}]
    else if(orient == 1)
      shapeCoords = [{'x':2, 'y':2}, {'x':2, 'y':1}, {'x':2, 'y':0}, {'x':1, 'y':0}]
    else if(orient == 2)
      shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':2, 'y':0}, {'x':0, 'y':1}]
    else if(orient == 3)
      shapeCoords = [{'x':0, 'y':2}, {'x':0, 'y':1}, {'x':0, 'y':0}, {'x':1, 'y':2}]
  }
  // L shape
  if(shapceCode == 108) {
    if(orient == 0)
      shapeCoords = [{'x':0, 'y':2}, {'x':1, 'y':2}, {'x':2, 'y':2}, {'x':0, 'y':1}]
    else if(orient == 1)
      shapeCoords = [{'x':2, 'y':2}, {'x':2, 'y':1}, {'x':2, 'y':0}, {'x':1, 'y':2}]
    else if(orient == 2)
      shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':2, 'y':0}, {'x':2, 'y':1}]
    else if(orient == 3)
      shapeCoords = [{'x':0, 'y':2}, {'x':0, 'y':1}, {'x':0, 'y':0}, {'x':1, 'y':0}]
  }
  // O shape (square)
  if(shapeCode == 111) {
    shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':0, 'y':1}, {'x':1, 'y':1}]
  }
  // S shape
  if(shapeCode == 115) {
    if(orient == 0 || orient == 2)
      shapeCoords = [{'x':0, 'y':1}, {'x':1, 'y':1}, {'x':1, 'y':2}, {'x':2, 'y':2}]
    else if(orient == 1 || orient == 3)
      shapecoords = [{'x':0, 'y':2}, {'x':0, 'y':1}, {'x':1, 'y':1}, {'x':1, 'y':0}]
  }
  // T shape
  if(shapeCode == 116) {
    if(orient == 0)
      shapeCoords = [{'x':0, 'y':2}, {'x':1, 'y':2}, {'x':2, 'y':3}, {'x':1, 'y':1}]
    else if(orient == 1)
      shapecoords = [{'x':1, 'y':2}, {'x':1, 'y':1}, {'x':1, 'y':0}, {'x':0, 'y':1}]
    else if(orient == 2)
      shapecoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':2, 'y':0}, {'x':1, 'y':1}]
    else if(orient == 3)
      shapecoords = [{'x':1, 'y':2}, {'x':1, 'y':1}, {'x':1, 'y':0}, {'x':2, 'y':1}]
  }
  // Z shape
  if(shapeCode == 122) {
    if(orient == 0 || orient == 2)
      shapeCoords = [{'x':0, 'y':2}, {'x':1, 'y':2}, {'x':1, 'y':1}, {'x':2, 'y':1}]
    else if(orient == 1 || orient == 3)
      shapecoords = [{'x':0, 'y':0}, {'x':0, 'y':1}, {'x':1, 'y':1}, {'x':1, 'y':2}]
  }

  return shapeCoords
}

function drawShape(shapeCoords, xPos, yPos) {
  ctx.fillStyle="blue";
  for(var i=0;i<shapeCoords.length; i++) {
    ctx.fillRect((shapeCoords[i].x+xPos)*gs,(shapeCoords[i].y+yPos)*gs,gs-2,gs-2);
  }
}
