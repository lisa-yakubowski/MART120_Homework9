function setup() {
  createCanvas(300, 500);
}

function draw() {
  background(20,200,200);
  fill(250, 220, 180);
  stroke('black');
  strokeWeight(3);
  textSize(32);
  textAlign(CENTER);
  text('Self Portrait', 150, 50);
  text('Lisa Yakubowski', 150, 475);
  stroke('black');
  strokeWeight(5);
  rect(75, 190, 150, 15);
  rect(120,325,15,100);
  rect(160,325,15,100);
  fill(200,25,200);
  triangle(100, 350, 150, 120, 200, 350);
  fill(250, 220, 180);
  ellipse(150, 120, 50, 60);
  stroke('black');
  strokeWeight(5);
  stroke('purple');
  strokeWeight(10);
  point(150, 220);
  point(150, 270);
  point(150, 320);
  point(140, 115);
  point(160, 115);
  stroke('yellow');
  strokeWeight(3);
  line(150,90,100,150);
  line(150,90,100,140);
  line(150,90,100,130);
  line(150,90,100,120);
  line(150,90,100,110);
  line(150,90,200,150);
  line(150,90,200,140);
  line(150,90,200,130);
  line(150,90,200,120);
  line(150,90,200,110);
}
