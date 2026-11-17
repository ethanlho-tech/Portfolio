
var ballx = 300; // width/2 ?
var bally = 300;
var ballSize = 40;
var score =0;
var img1, img2;
var gameState = 1;



function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end of setup


function draw() {
  background(20, 40, 80);

 if (gameState == 1) {
  levelOne();
}
 else if (gameState == 2) {
  levelTwo();
}
  
  text(("Score: " + score), width/2, 40);

} // end of draw

function levelOne(){
  text("level 1", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width);
    bally = random(height);
    score = score +1;
  } // end if
  if (score>=5){
    gameState = 2;
  }
  
  line(ballx+20, bally+20, mouseX, mouseY);
  
//  ellipse(ballx, bally, ballSize, ballSize);

   drawFish(ballx, bally);
  
  
} // end of level 1


function levelTwo() {
  text("Level 2: Fast Goldfish", width / 2, height - 20);

  var distToBall = dist(ballx + 20, bally + 20, mouseX, mouseY);

  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 2;
  }

  drawFish(ballx, bally);
}

function drawFish(x, y) {
  push();
  translate(x, y);

  fill(255, 150, 0);
  noStroke();
  ellipse(20, 20, 40, 25);

  triangle(0, 20, 10, 10, 10, 30);

  fill(0);
  ellipse(28, 16, 4, 4);

  pop();
}
