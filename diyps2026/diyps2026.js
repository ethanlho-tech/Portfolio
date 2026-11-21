let selectedTool = "1";

function setup() {
  createCanvas(600, 600);
  background(245);
}

function draw() {
  // The canvas stays still until the user drags.
}

function keyPressed() {
  if ("123456".includes(key)) {
    selectedTool = key;
  }
}

function mouseDragged() {
  drawTool(selectedTool);
  return false;
}

function drawTool(tool) {
  push();
  translate(mouseX, mouseY);

  if (tool === "1") {
    // Orange fish
    noStroke();
    fill(255, 150, 0);
    ellipse(0, 0, 32, 18);
    triangle(14, 0, 28, -12, 28, 12);

    fill(0);
    ellipse(-8, -3, 3, 3);
  }

  else if (tool === "2") {
    // Blue bubbles
    noFill();
    stroke(0, 120, 255);
    strokeWeight(2);
    ellipse(0, 0, 16, 16);
    ellipse(15, -12, 10, 10);
    ellipse(-15, -18, 7, 7);
  }

  else if (tool === "3") {
    // Pink snacks
    fill(255, 100, 170);
    stroke(180, 30, 100);
    strokeWeight(1);
    rect(-9, -9, 18, 18, 4);

    stroke(255);
    line(-5, -3, 5, -3);
    line(-5, 3, 5, 3);
  }

  else if (tool === "4") {
    // Blue water waves
    noFill();
    stroke(0, 120, 255);
    strokeWeight(3);
    arc(0, 0, 28, 14, 0, PI);
    arc(18, 0, 28, 14, 0, PI);
  }

  else if (tool === "5") {
    // Yellow popcorn
    noStroke();
    fill(255, 220, 0);
    ellipse(-8, -3, 13, 13);
    ellipse(3, -5, 14, 14);
    ellipse(12, -1, 12, 12);

    fill(255, 180, 0);
    rect(-10, 3, 25, 10, 3);
  }

  else if (tool === "6") {
    // Green seaweed
    noFill();
    stroke(30, 160, 70);
    strokeWeight(4);
    bezier(0, 15, -15, 5, 15, -5, 0, -18);
    bezier(10, 15, 0, 5, 25, -5, 15, -20);
  }

  pop();
}
