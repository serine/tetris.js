window.onload=function() {
  canv=document.getElementById("gc");
  ctx=canv.getContext("2d");
  document.getElementById("score").innerHTML = "Score: 0";
  document.getElementById("level").innerHTML = "Level: 5";
  document.addEventListener("keydown", keyPush);
  timerId = setInterval(game, 1000/level);
};

function getShapeCoords(shapeCode, orient) {
  var shapeCoords;
  // I shape
  if(shapeCode == 105) {
    if(orient == 0 || orient == 2)
      shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':2, 'y':0}, {'x':3, 'y':0}];
    else if(orient == 1 || orient == 3)
      shapeCoords = [{'x':0, 'y':0}, {'x':0, 'y':1}, {'x':0, 'y':2}, {'x':0, 'y':3}];
  };
  // J shape
  if(shapeCode == 106) {
    if(orient == 0)
      shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':2, 'y':0}, {'x':2, 'y':1}];
    else if(orient == 1)
      shapeCoords = [{'x':1, 'y':0}, {'x':1, 'y':1}, {'x':1, 'y':2}, {'x':0, 'y':2}];
    else if(orient == 2)
      shapeCoords = [{'x':0, 'y':0}, {'x':0, 'y':1}, {'x':1, 'y':1}, {'x':2, 'y':1}];
    else if(orient == 3)
      shapeCoords = [{'x':0, 'y':0}, {'x':0, 'y':1}, {'x':0, 'y':2}, {'x':1, 'y':0}];
  };
  // L shape
  if(shapeCode == 108) {
    if(orient == 0)
      shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':2, 'y':0}, {'x':0, 'y':1}];
    else if(orient == 1)
      shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':1, 'y':1}, {'x':1, 'y':2}];
    else if(orient == 2)
      shapeCoords = [{'x':0, 'y':1}, {'x':1, 'y':1}, {'x':2, 'y':1}, {'x':2, 'y':0}];
    else if(orient == 3)
      shapeCoords = [{'x':0, 'y':0}, {'x':0, 'y':1}, {'x':0, 'y':2}, {'x':1, 'y':2}];
  };
  // O shape (square)
  if(shapeCode == 111) {
    shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':0, 'y':1}, {'x':1, 'y':1}];
  };
  // S shape
  if(shapeCode == 115) {
    if(orient == 0 || orient == 2)
      shapeCoords = [{'x':1, 'y':0}, {'x':2, 'y':0}, {'x':0, 'y':1}, {'x':1, 'y':1}];
    else if(orient == 1 || orient == 3)
      shapeCoords = [{'x':0, 'y':0}, {'x':0, 'y':1}, {'x':1, 'y':1}, {'x':1, 'y':2}];
  };
  // T shape
  if(shapeCode == 116) {
    if(orient == 0)
      shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':2, 'y':0}, {'x':1, 'y':1}]
    else if(orient == 1)
      shapeCoords = [{'x':1, 'y':0}, {'x':1, 'y':1}, {'x':1, 'y':2}, {'x':0, 'y':1}];
    else if(orient == 2)
      shapeCoords = [{'x':0, 'y':1}, {'x':1, 'y':1}, {'x':2, 'y':1}, {'x':1, 'y':0}];
    else if(orient == 3)
      shapeCoords = [{'x':1, 'y':0}, {'x':1, 'y':1}, {'x':1, 'y':2}, {'x':2, 'y':1}];
  };
  // Z shape
  if(shapeCode == 122) {
    if(orient == 0 || orient == 2)
      shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':1, 'y':1}, {'x':2, 'y':1}];
    else if(orient == 1 || orient == 3)
      shapeCoords = [{'x':0, 'y':1}, {'x':0, 'y':2}, {'x':1, 'y':0}, {'x':1, 'y':1}];
  };
  return shapeCoords;
};

function getLeftOffSet(shapeCode, orient) {
  if(shapeCode == 116 && orient == 3)
    return -1;
  else
    return 0;
};

function getRightOffSet(shapeCode, orient) {
  if(shapeCode == 105) {
    if(orient == 0 || orient == 2)
      return -4;
    if(orient == 1 || orient == 3)
      return -1;
  };
  if(shapeCode == 106 || shapeCode == 108) {
    if(orient == 0 || orient == 2)
      return -3;
    if(orient == 1 || orient == 3)
      return -2;
  };
  if(shapeCode == 111)
      return -2;
  if(shapeCode == 115 || shapeCode == 122) {
    if(orient == 0 || orient == 2)
      return -3;
    if(orient == 1 || orient == 3)
      return -2;
  };
  if(shapeCode == 116) {
    if(orient == 0 || orient == 2 || orient == 3)
      return -3;
    if(orient == 1)
      return -2;
  };
};

function getFloorOffSet(shapeCode, orient) {
  if(shapeCode == 105) {
    if(orient == 0 || orient == 2)
      return 0;
    if(orient == 1 || orient == 3)
      return -3;
  };
  if(shapeCode == 106 || shapeCode == 108) {
    if(orient == 0 || orient == 2)
      return -1;
    if(orient == 1 || orient == 3)
      return -2;
  };
  if(shapeCode == 111)
    return -1;
  if(shapeCode == 115 || shapeCode == 122) {
    if(orient == 0 || orient == 2)
      return -1;
    if(orient == 1 || orient == 3)
      return -2;
  };
  if(shapeCode == 116) {
    if(orient == 0 || orient == 2)
      return -1;
    if(orient == 1 || orient == 3)
      return -2;
  };
};

function drawShape(shapeCoords, shapeCode, xPos, yPos) {
  var shapeCol;

  if(shapeCode == 105)
    shapeCol = "red";
  if(shapeCode == 106)
    shapeCol = "orange";
  if(shapeCode == 108)
    shapeCol = "goldenrod";
  if(shapeCode == 111)
    shapeCol = "green";
  if(shapeCode == 115)
    shapeCol = "darkcyan";
  if(shapeCode == 122)
    shapeCol = "blue";
  if(shapeCode == 116)
    shapeCol = "deeppink";

  if(px>=xTileCount+rightOffSet)
    px=xTileCount+rightOffSet;
  //ctx.fillStyle="blue";
  ctx.fillStyle=shapeCol;
  for(var i=0; i<shapeCoords.length; i++) {
    // gs-2 to remove couple of pixels to make nice border
    ctx.fillRect((shapeCoords[i].x+xPos)*gs,(shapeCoords[i].y+yPos)*gs,gs-2,gs-2);
  };
};

function reDrawFeild(matrix, shapeCode) {

  ctx.fillStyle="black";
  ctx.fillRect(0,0,canv.width,canv.height);

  for(var i=0;i<matrix.length; i++) {
    for(var j=0; j<matrix[i].length; j++) {
      var shapeCol = "";

      if(matrix[i][j] == 1)
        shapeCol = "red";
      else if(matrix[i][j] == 2)
        shapeCol = "orange";
      else if(matrix[i][j] == 3)
        shapeCol = "goldenrod";
      else if(matrix[i][j] == 4)
        shapeCol = "green";
      else if(matrix[i][j] == 5)
        shapeCol = "darkcyan";
      else if(matrix[i][j] == 6)
        shapeCol = "blue";
      else if(matrix[i][j] == 7)
          shapeCol = "deeppink";

      if(shapeCol) {
        ctx.fillStyle=shapeCol;
        ctx.fillRect(j*gs,i*gs,gs-2,gs-2);
      };
    };
  };
};

function gameOver(matrix) {
  reDrawFeild(matrix);

  var text = [{x:1, y:10}, {x:1, y:9}, {x:1, y:8}, {x:1, y:7}, {x:1, y:6}, {x:2, y:6}, {x:3, y:6}, {x:2, y:10}, {x:3, y:10}, {x:3, y:9}, //G
              {x:5, y:10}, {x:5, y:9}, {x:5, y:8}, {x:5, y:7}, {x:5, y:6}, {x:6, y:6}, {x:7, y:10}, {x:7, y:9}, {x:7, y:8}, {x:7, y:7}, {x:7, y:6}, {x:6, y:8}, //A
              {x:9, y:10}, {x:9, y:9}, {x:9, y:8}, {x:9, y:7}, {x:9, y:6}, {x:10, y:6}, {x:10, y:7}, {x:11, y:8}, {x:12, y:6}, {x:12, y:7}, {x:13, y:10}, {x:13, y:9}, {x:13, y:8}, {x:13, y:7}, {x:13, y:6}, //M
              {x:15, y:10}, {x:15, y:9}, {x:15, y:8}, {x:15, y:7}, {x:15, y:6}, {x:16, y:6}, {x:17, y:6}, {x:16, y:8}, {x:16, y:10}, {x:17, y:10},//E
              {x:1, y:13}, {x:1, y:14}, {x:1, y:15}, {x:1, y:16}, {x:1, y:17}, {x:2, y:13}, {x:2, y:17}, {x:3, y:13}, {x:3, y:14}, {x:3, y:15}, {x:3, y:16}, {x:3, y:17},//O
              {x:5, y:13}, {x:5, y:14}, {x:5, y:15}, {x:5, y:16}, {x:6, y:17}, {x:7, y:13}, {x:7, y:14}, {x:7, y:15}, {x:7, y:16},//V
              {x:9, y:13}, {x:9, y:14}, {x:9, y:15}, {x:9, y:16}, {x:9, y:17}, {x:10, y:13}, {x:11, y:13}, {x:10, y:15}, {x:10, y:17}, {x:11, y:17},//E
              {x:13, y:13}, {x:13, y:14}, {x:13, y:15}, {x:13, y:16}, {x:13, y:17}, {x:14, y:13}, {x:15, y:13}, {x:15, y:15}, {x:15, y:14}, {x:14, y:16}, {x:15, y:17}//R
             ];

  ctx.fillStyle="red";
  var gs = 15;
  for(var i=0;i<text.length; i++) {
    ctx.fillRect(text[i].x*gs,text[i].y*gs,gs-2,gs-2);
  };
};


function putPiece(matrix, shapeCoords, shapeCode, px, py) {
  var shapeCol;

  if(shapeCode == 105)
    shapeCol = 1;
  if(shapeCode == 106)
    shapeCol = 2;
  if(shapeCode == 108)
    shapeCol = 3;
  if(shapeCode == 111)
    shapeCol = 4;
  if(shapeCode == 115)
    shapeCol = 5;
  if(shapeCode == 122)
    shapeCol = 6;
  if(shapeCode == 116)
    shapeCol = 7;

  for(var i=0; i<shapeCoords.length; i++) {
    var xIdx = shapeCoords[i].x+px;
    var yIdx = shapeCoords[i].y+py;
    matrix[yIdx][xIdx] = shapeCol;
  };
};

function cleanRow(matrix) {
  var score=0;
  for(var i=0;i<matrix.length; i++) {
    var chkRow = true;
    for(var j=0; j<matrix[i].length; j++) {
      if(matrix[i][j] == 0)
        chkRow = false;
    };

    if(chkRow) {
      matrix.splice(i, 1);
      matrix.unshift(new Array(xTileCount).fill(0));
      score+=1;
    };
  };
  return score;
};

function chkPiece(matrix, shapeCoords, px, py) {
  for(var i=0; i<shapeCoords.length; i++) {
    var xIdx = shapeCoords[i].x+px;
    var yIdx = shapeCoords[i].y+py;
    var chkIdx = matrix[yIdx][xIdx];
    if(chkIdx >= 1)
      return true;
  };
  return false;
};

function dropPiece(matrix, shapeCoords, px, py) {
  for(var i=0; i<shapeCoords.length; i++) {
    var xIdx = shapeCoords[i].x+px;
    for(var j=0; j<yTileCount-5;j++) {
      var yIdx = shapeCoords[i].y+py+j;
      var chkIdx = matrix[yIdx][xIdx];
      if(chkIdx == 1) {
        putPiece(matrix, shapeCoords, px, py);
        return 0;
      };
    };
  };
};


var shapes = [105, 106, 108, 111, 115, 116, 122];
var shapeCode = shapes[Math.floor(Math.random()*7)];
var orient = 0;
var shapeCoords;
var trailsCeiling;
var timerId;
var leftOffSet;
var rightOffSet;
var score = 0;
var level = 5;
var levelCnt = 0;

px=10
py=0;
//gs - width and height of a single square in the grid
gs=20;
//tc - number of squares in the grid
xTileCount=300/gs;
yTileCount=600/gs;
// only y velocity
yv=0;
var matrix = [];
for(var i=0;i<=yTileCount; i++)
  matrix.push(new Array(xTileCount).fill(0));
//TODO make variable setInterval
function game() {

  reDrawFeild(matrix, shapeCode);
  shapeCoords = getShapeCoords(shapeCode, orient);
  drawShape(shapeCoords, shapeCode, px, py);
  //drawShape(shapeCoords, px, py);

  leftOffSet = getLeftOffSet(shapeCode, orient);
  rightOffSet = getRightOffSet(shapeCode, orient);
  floorOffSet = getFloorOffSet(shapeCode, orient);

  py+=yv;

  var piece = chkPiece(matrix, shapeCoords, px, py);
  if(piece || py == yTileCount+floorOffSet) {
    if(py == 1) {
        clearInterval(timerId);
        gameOver(matrix);
    };
    py-=1;
    putPiece(matrix, shapeCoords, shapeCode, px, py);
    score += cleanRow(matrix);
    var scoreField = "Score: "
    var levelField = "Level: "
    document.getElementById("score").innerHTML = scoreField+score;
    levelCnt+=1;
    if(levelCnt == 10) {
      console.log(levelCnt)
      //level+=1;
      levelCnt = 0;
      document.getElementById("level").innerHTML = levelField+level;
    };
    py=0;
    yv=1;
    shapeCode = shapes[Math.floor(Math.random()*7)];
  };
  yv=1;
}

var oldKeyCount;
var oldFlipCount;

function keyPush(evt) {
  switch(evt.keyCode) {
      //case 13:
      //  dropPiece(matrix, shapeCoords, px, py);
      //  yv=1;
      case 32: // space
        // using oldKeyCount and oldFlipCount variables
        // to preserve keyboard state
        if(timerId) {
          oldKeyCount = px;
          oldFlipCount = orient;
          clearInterval(timerId);
          timerId = false;
        }
        else {
          px = oldKeyCount;
          orient = oldFlipCount;
          timerId = setInterval(game,1000/level);
        }
        break;
      case 37: //left
        //if(px<0+leftOffSet)
        if(px<=0)
          px=0+leftOffSet;
        else
          px+=-1;
        yv=1;
        break;
      case 38: //up
        if(orient == 3)
          orient = 0;
        else
          orient += 1;
        yv=1;
        break;
      case 39: //right
      if(px>=xTileCount+rightOffSet)
          px=xTileCount+rightOffSet;
        else
          px+=1;
        yv=1;
        break;
      case 40: //down
        if(py<=yTileCount-7)
          yv=3;
        else
          yv=1;
        break;
  };
}

