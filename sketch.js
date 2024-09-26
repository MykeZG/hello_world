function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(random(100, 151), random(0, 90), 100);

  stronkeWeight(5);
  noFill(30, 100, 67);
  stroke(mouseY, 255, 0);
  circle(mouseX + 80, mouseY, 200);

  stronkeWeight(5);
  stroke(mouseY, 255, 0);
  fill(200, 200, 10);
  rect(mouseX, mouseY, 100, 100);
  //   el orden de las lineas es importante para la generación del código
}
