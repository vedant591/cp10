var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  buttonred=createButton("red")  
  buttonred.position(100,50)
  buttonred.mousePreesed(red)
  buttongreen=createButton("green")
  buttongreen.position(200,50)
  buttongreen.mousePreesed(red)
}

function red() {
  r=255
  g=0
  b=0
}
function draw() {
  background(r,g,b);
}

