let seedX = 300;
let seedY = 320;

let score = 0;
let gameState = 1;
let flowers = [];

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);

  seedX = random(60, width - 60);
  seedY = random(250, 390);
}

function draw() {
  drawGarden();

  if (gameState == 1) {
    levelOne();
  } else if (gameState == 2) {
    levelTwo();
  }

  drawFlowers();
  drawBabyBird();

  fill(40);
  text("Flowers grown: " + score, width / 2, 40);
}

function drawGarden() {
  if (score >= 5) {
    background(180, 230, 255);
  } else {
    background(210, 245, 220);
  }

  // Sun
  fill(255, 220, 80);
  noStroke();
  ellipse(80, 80, 70, 70);

  // Clouds
  fill(255);
  ellipse(190, 90, 70, 35);
  ellipse(230, 90, 80, 45);
  ellipse(270, 90, 65, 35);

  // Grass
  fill(100, 190, 90);
  rect(0, 420, width, 180);

  // Ground
  fill(120, 80, 45);
  rect(0, 500, width, 100);

  fill(40, 120, 60);

  if (score >= 5) {
    text("The garden is blooming!", width / 2, 75);
  } else {
    text("Move your mouse to catch the seed", width / 2, 75);
  }
}

function levelOne() {
  fill(40, 120, 60);
  text("Level 1: Plant the seeds", width / 2, height - 20);

  let distanceToSeed = dist(mouseX, mouseY, seedX, seedY);

  if (distanceToSeed < 30) {
    growFlower();
    score = score + 1;

    seedX = random(60, width - 60);
    seedY = random(250, 390);
  }

  drawSeed();
}

function levelTwo() {
  fill(40, 120, 60);
  text("Level 2: The garden is growing!", width / 2, height - 20);

  let distanceToSeed = dist(mouseX, mouseY, seedX, seedY);

  if (distanceToSeed < 30) {
    growFlower();
    score = score + 2;

    seedX = random(60, width - 60);
    seedY = random(250, 390);
  }

  drawSeed();
}

function growFlower() {
  flowers.push({
    x: seedX,
    y: seedY
  });

  if (score >= 5) {
    gameState = 2;
  }
}

function drawSeed() {
  fill(80, 50, 20);
  ellipse(seedX, seedY, 18, 25);

  fill(40, 130, 60);
  ellipse(seedX + 8, seedY - 8, 18, 8);
}

function drawFlowers() {
  for (let flower of flowers) {
    stroke(30, 130, 50);
    strokeWeight(5);
    line(flower.x, flower.y, flower.x, flower.y + 55);

    noStroke();

    fill(255, 120, 170);
    ellipse(flower.x - 12, flower.y, 20, 20);
    ellipse(flower.x + 12, flower.y, 20, 20);
    ellipse(flower.x, flower.y - 12, 20, 20);
    ellipse(flower.x, flower.y + 12, 20, 20);

    fill(255, 220, 40);
    ellipse(flower.x, flower.y, 16, 16);

    fill(40, 150, 60);
    ellipse(flower.x - 12, flower.y + 35, 22, 10);
  }
}

function drawBabyBird() {
  push();

  // Branch
  stroke(90, 55, 30);
  strokeWeight(8);
  line(390, 230, 540, 230);

  // Baby bird body
  noStroke();
  fill(255, 220, 80);
  ellipse(460, 190, 65, 55);

  // Wing
  fill(245, 190, 50);
  ellipse(445, 200, 28, 35);

  // Head
  fill(255, 230, 100);
  ellipse(450, 160, 55, 50);

  // Beak
  fill(240, 140, 40);
  triangle(420, 165, 395, 175, 420, 180);

  // Eye
  fill(20);
  ellipse(438, 157, 7, 7);

  // Tiny feather
  fill(255, 230, 100);
  triangle(455, 135, 465, 115, 475, 140);

  pop();
}

function mousePressed() {
  if (score >= 10) {
    score = 0;
    flowers = [];
    gameState = 1;
    seedX = random(60, width - 60);
    seedY = random(250, 390);
  }
}
