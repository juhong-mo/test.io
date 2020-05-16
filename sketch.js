// Juhong Mo 모주홍
// Draw a Bird Exercise
// CS099
// Spring 2020

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(100, 180, 220);
  
  strokeWeight(1);
  stroke(0);
  rectMode(CORNER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  
//   tree
  stroke(150, 100, 50);
  strokeWeight(100);
  line(480, 0, 480, 400);
  fill(150, 100, 50);
  strokeWeight(8);
  strokeJoin(ROUND);
  triangle(480, 350, 50, 300, 480, 400);
  stroke(0, 100);
  strokeWeight(3);
  noFill();
  circle(480, 320, 80);
  circle(480, 320, 60);
  circle(480, 320, 40);
  circle(480, 320, 20);
  noStroke();
  fill(50, 150, 100, 180);
  ellipse(50, 260, 30, 80);
  ellipse(30, 300, 40, 20);
  
//   circlebird
  fill(120, 80, 220);
  circle(360, 270, 120);
  ellipse(310, 290, 30, 50);
  ellipse(410, 290, 30, 50);
  stroke(120, 80, 220);
  strokeWeight(5);
  line(345, 200, 345, 215);
  line(335, 195, 343, 220);
  fill(255, 255, 255, 50);
  circle(360, 290, 80);
  strokeWeight(8);
  stroke(0);
  point(330, 230);
  point(360, 225);
  fill(230, 180, 100);
  noStroke();
  quad(345, 235, 335, 239, 346, 241, 356, 237);
  fill('Orange');
  ellipse(340, 330, 20, 10);
  ellipse(380, 330, 20, 10);
  
//   trianglebird
  fill(240, 220, 100);
  triangle(120, 40, 50, 150, 190, 150);
  push();
    rotate(340);
    ellipse(40, 100, 50, 80);
    rotate(40);
    ellipse(180, 25, 40, 80);
  pop();
  fill(255, 150);
  triangle(130, 90, 90, 150, 170, 150);
  fill(240, 220, 100);
  triangle(120, 40, 100, 110, 160, 110);
  strokeWeight(5);
  stroke(240, 220, 100);
  line(110, 25, 120, 45);
  line(105, 40, 120, 45);
  stroke(0);
  strokeWeight(8);
  point(115, 100);
  point(145, 100);
  noStroke();
  fill('Orange');
  triangle(130, 100, 120, 105, 140, 105);
  ellipse(90, 150, 30, 15);
  ellipse(160, 150, 30, 15);
  
}