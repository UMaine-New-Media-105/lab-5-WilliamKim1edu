xPos = 200
yPos = 200
xSpd = 0
ySpd = 0

coll = 100

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  frameRate(60);
  xPos = 200;
  yPos = 200;
  xSpd = random(-4, 4);
  ySpd = random(-4, 4);
}

function draw() {
  background(0);
  noStroke();
  fill("white");
  //rect(xPos, yPos, coll);
  bounceSprite(xPos, yPos, 4);
  xPos = xPos + xSpd;
  yPos = yPos + ySpd;
  //console.log("x is " + xPos); console.log("y is " + yPos);
  
  //bounce control
  if (xPos >= 400 - coll/2) {
    xSpd = random(-4, -1);
  }
  if (xPos <= 0 + coll/2) {
    xSpd = random(1, 4);
  }
  if (yPos >= 400 - coll/2) {
    ySpd = random(-4, -1);
  }
  if (yPos <= 0 + coll/2) {
    ySpd = random(1, 4);
  }
  
  //noLoop();
}

  //arrow key control
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xSpd = random(-4, -1);
  }
  if (keyCode === RIGHT_ARROW) {
    xSpd = random(1, 4);
  }
  if (keyCode === UP_ARROW) {
    ySpd = random(-4, -1);
  }
  if (keyCode === DOWN_ARROW) {
    ySpd = random(1, 4);
  }
}
//sprite drawing
function bounceSprite (x, y, size){
  translate(x, y);
  scale(size);
  fill("lightskyblue");
  ellipse(0, 10, 25, 5);
  rect(-10, -5, 5, 15);
  rect(10, -5, 5, 15)
}
