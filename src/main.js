
function getShapeCoords(shapeCode, orient) {

  var shapeCoords;
  // I shape
  if(shapeCode == 105) {
    if(orient == 0 || orient == 2)
      shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':2, 'y':0}, {'x':3, 'y':0}]
    else if(orient == 1 || orient == 3)
      shapeCoords = [{'x':0, 'y':0}, {'x':0, 'y':1}, {'x':0, 'y':2}, {'x':0, 'y':3}]
  }
  // J shape
  if(shapeCode == 106) {
    if(orient == 0)
      shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':2, 'y':0}, {'x':2, 'y':1}]
    else if(orient == 1)
      shapeCoords = [{'x':2, 'y':0}, {'x':2, 'y':1}, {'x':2, 'y':2}, {'x':1, 'y':2}]
    else if(orient == 2)
      shapeCoords = [{'x':0, 'y':2}, {'x':1, 'y':2}, {'x':2, 'y':2}, {'x':0, 'y':1}]
    else if(orient == 3)
      shapeCoords = [{'x':0, 'y':0}, {'x':0, 'y':1}, {'x':0, 'y':2}, {'x':1, 'y':0}]
  }
  // L shape
  if(shapeCode == 108) {
    if(orient == 0)
      shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':2, 'y':0}, {'x':0, 'y':1}]
    else if(orient == 1)
      shapeCoords = [{'x':2, 'y':0}, {'x':2, 'y':1}, {'x':2, 'y':2}, {'x':1, 'y':0}]
    else if(orient == 2)
      shapeCoords = [{'x':0, 'y':2}, {'x':1, 'y':2}, {'x':2, 'y':2}, {'x':2, 'y':1}]
    else if(orient == 3)
      shapeCoords = [{'x':0, 'y':0}, {'x':0, 'y':1}, {'x':0, 'y':2}, {'x':1, 'y':2}]
  }
  // O shape (square)
  if(shapeCode == 111) {
    shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':0, 'y':1}, {'x':1, 'y':1}]
  }
  // S shape
  if(shapeCode == 115) {
    if(orient == 0 || orient == 2)
      shapeCoords = [{'x':0, 'y':1}, {'x':1, 'y':1}, {'x':1, 'y':0}, {'x':2, 'y':0}]
    else if(orient == 1 || orient == 3)
      shapeCoords = [{'x':0, 'y':0}, {'x':0, 'y':1}, {'x':1, 'y':1}, {'x':1, 'y':2}]
  }
  // T shape
  if(shapeCode == 116) {
    if(orient == 0)
      shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':2, 'y':0}, {'x':1, 'y':1}]
    else if(orient == 1)
      shapeCoords = [{'x':1, 'y':0}, {'x':1, 'y':1}, {'x':1, 'y':2}, {'x':0, 'y':1}]
    else if(orient == 2)
      shapeCoords = [{'x':0, 'y':2}, {'x':1, 'y':2}, {'x':2, 'y':2}, {'x':1, 'y':1}]
    else if(orient == 3)
      shapeCoords = [{'x':1, 'y':0}, {'x':1, 'y':1}, {'x':1, 'y':2}, {'x':2, 'y':1}]
  }
  // Z shape
  if(shapeCode == 122) {
    if(orient == 0 || orient == 2)
      shapeCoords = [{'x':0, 'y':0}, {'x':1, 'y':0}, {'x':1, 'y':1}, {'x':2, 'y':1}]
    else if(orient == 1 || orient == 3)
      shapeCoords = [{'x':0, 'y':1}, {'x':0, 'y':2}, {'x':1, 'y':0}, {'x':1, 'y':1}]
  }

  return shapeCoords
}


function getLeftOffSet(shapeCode, orient) {
  if(shapeCode == 106 && orient == 1)
      return -1
  if(shapeCode == 108 && orient == 1)
      return -1
  if(shapeCode == 116 && orient == 3)
      return -1
  else
    return 0
}

function getRightOffSet(shapeCode, orient) {
  
  if(shapeCode == 105) {
    if(orient == 1 || orient == 3) 
      return 3
    else
      return 0
  }

  if(shapeCode == 106) {
    if(orient == 3)
      return 1
    else
      return 0
  }
  if(shapeCode == 108) {
    if(orient == 3)
      return 1
    else
      return 0
  }
  if(shapeCode == 111) {
      return 1
  }
  if(shapeCode == 115) {
    if(orient == 1 || orient == 3)
      return 1
    else
      return 0
  
  }
  if(shapeCode == 116) {
    if(orient == 2)
      return 1
    else
      return 0
  }
  if(shapeCode == 122) {
    if(orient == 1 || orient == 3)
      return 1
    else
      return 0
  }
}

function getFloorOffSet(shapeCode, orient) {
  if(shapeCode == 105) {
    if(orient == 1 || orient == 3)
      return -3
    else 
      return 0
  }
  if(shapeCode == 106 || shapeCode == 108) {
    if(orient == 1 || orient == 3)
      return -2
    else if(orient == 2)
      return -2
    else
      return -1
  }
  if(shapeCode == 111) {
    return -1
  }
  if(shapeCode == 115 || shapeCode == 122) {
    if(orient == 0 || orient == 2)
      return -1
    else 
      return -2
  }
  if(shapeCode == 116) {
    if(orient == 0)
      return -1
    else if(orient == 1 || orient == 3)
      return -2
    else 
      return -2
  }
}

function drawShape(shapeCoords, xPos, yPos) {
  //ctx.fillStyle="black";
  //ctx.fillRect(0,0,canv.width,canv.height);

  ctx.fillStyle="blue";
  for(var i=0; i<shapeCoords.length; i++) {
    // gs-2 to remove couple of pixels to make nice border
    ctx.fillRect((shapeCoords[i].x+xPos)*gs,(shapeCoords[i].y+yPos)*gs,gs-2,gs-2);
    //ctx.fillRect(shapeCoords[i].x*gs,shapeCoords[i].y*gs,gs-2,gs-2);
  }
}
function reDrawFeild() {
  ctx.fillStyle="black";
  ctx.fillRect(0,0,canv.width,canv.height);

  ctx.fillStyle="blue";
  for(var i=0; i <trail.length; i++) {
    ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
  }
}

var shapes = [105, 106, 108, 111, 115, 116, 122];
var shapeCode = shapes[Math.floor(Math.random()*7)];
var orient = 0;
var shapeCoords;
var timerId;
var level = 9;
var shape = shapes[Math.floor(Math.random()*7)];
var leftOffSet;
var rightOffSet;
var xCov = [];
var yCov = [];
var cov = [];


window.onload=function() {
  canv=document.getElementById("gc");
  ctx=canv.getContext("2d");
  document.addEventListener("keydown", keyPush);
  //timerId = setInterval(game,1000/level*10);
  timerId = setInterval(game,1000/level);
}
//position of the worm
px=10
py=0;
//gs - width and height of a single square in the grid
gs=20;
//tc - number of squares in the grid
xTileCount=400/gs; 
yTileCount=800/gs; 
// only y velocity
yv=0;
var trail = [];
//TODO make variable setInterval
function game() {


  reDrawFeild();
  shapeCoords = getShapeCoords(shapeCode, orient);
  drawShape(shapeCoords, px, py);

  leftOffSet = getLeftOffSet(shapeCode, orient);
  rightOffSet = getRightOffSet(shapeCode, orient);
  floorOffSet = getFloorOffSet(shapeCode, orient);

  py+=yv;
  //if(px==0) {
  //  px=0+leftOffSet;
  //}
  //if(px==xTileCount) {
  //  px=xTileCount+rightOffSet;
  //}
  ////if(py<0) {
  ////  py= tc-1;
  ////}
  //wrap around y axis
  if(py>yTileCount-1) {
    py=0;
  }
  
  //given:
  //shapeCode
  //orient
  //need to adjust origin
  //need to find min
  console.log(trail.length)
  //if(py == newFloor[i]) // check against new floor, which gets changed every key stroke
  if(py == (yTileCount-1) ) {
    shapeAdjs = shapeCoords.map(function(obj) {
      var rObj = {};
      rObj['x'] = obj.x + px;
      rObj['y'] = obj.y + py+floorOffSet;
      return rObj
    })

    chk = shapeCoords.map(function(obj) {
      var rObj = {};
      rObj[obj.x+px] = obj.y+py+floorOffSet
      return rObj
    });
    console.log(chk)

    trail = trail.concat(shapeAdjs);

    clearInterval(timerId);
    timerId = setInterval(game,1000/level);
    shapeCode = shapes[Math.floor(Math.random()*7)];
  }
}
//TODO
//function getXcoords(shapeCode, orient, px)) {
//  return "[x1, x2, ..]"
//}
function getTrailsCeiling(trail, shapesFloor) {
  var xPos;
  var yPos;

  return {x: xPos, y: yPos}
}
function getShapesFloor(shapeCoords) {
  var xPos = 0;
  var yPos = 0;
  var xyPos = {};
  for(var i=0; i<shapeCoords.length; i++) {
    if(yPos < shapeCoords[i].y) {
      xPos = shapeCoords[i].x;
      yPos = shapeCoords[i].y;
      xyPos['x'] = xPos;
      xyPos['y'] = yPos;
    } 
  }
  return xyPos
}

function keyPush(evt) {
  switch(evt.keyCode) {
      case 32:
        if(timerId) {
          clearInterval(timerId);
          timerId = false;
        }
        else {
          timerId = setInterval(game,1000/level);
        }
        break;
      case 37: //left
        px+=-1;
        if(px<=0)
          px=0+leftOffSet;
        yv=1;
        //getNewFloor(getXcoords()); // call this function on every key stroke
        break;
      case 38: //up
        if(orient == 3) 
          orient = 0;
        else
          orient += 1;
        //getNewFloor(getXcoords()); // call this function on every key stroke
        break;
      case 39: //right
        if(px>=xTileCount)
          px=xTileCount-rightOffSet;
        px+=1;
        yv=1;
        //getNewFloor(getXcoords()); // call this function on every key stroke
        break;
      case 40: //down
        //xv=xv;
        yv=1; 
        break;
  }
}
