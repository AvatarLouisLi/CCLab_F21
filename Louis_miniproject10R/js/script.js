let color1R;
let color1G;
let color1B;
let currx;
let curry;
let prevx;
let prevy;
let gapx = 0;
let gapy = 0;
let d;
let r1;
let g1;
let b1;
let theJawa;
let xoff;
let slider1;
let slider2;
let slider3;
let slider4;
let rSlider, gSlider, bSlider

function setup() {
  let canvas = createCanvas(740, 900);
  canvas.parent("myContainer");
  slider1 = createSlider(0, width, width/2);
  slider1.position(600, 355);
  slider2 = createSlider(50, width, width/2);
  slider2.position(600, 415);
  slider3 = createSlider(50, width * 2/3, width/2);
  slider3.position(600, 680);
  slider4 = createSlider(50, width * 2/3, width/2);
  slider4.position(1540, 680);

  textSize(15);
  noStroke();

  color1R = random(255);
  color1G = random(255);
  color1B = random(255);
  currx = 30;
  curry = 700;
  prevx = 30;
  prevy = 700;

  rSlider = createSlider(0, 255, 100);
  rSlider.position(1540, 270);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(1540, 300);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(1540, 330);

  d = 10;
  xoff = 0;
}

function draw() {
  rectMode(CENTER);

  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('red', 670, 45);
  text('green', 670, 70);
  text('blue', 670, 100);


 //sun1
  noStroke();
  fill(234, 85, 46);
  ellipse(slider1.value(), 150, 100, 100);

 //sun2
  noStroke();
  fill(227, 25, 16);
  ellipse(slider2.value(), 180, 60, 60);

 //Mountains
  fill(220)
  noStroke();
  triangle(slider3.value(), 600, slider3.value()+400, 600, slider3.value()+185, 300);

  fill(200)
  noStroke();
  triangle(slider4.value(), 600, slider4.value()+230, 600, slider4.value()+120, 400);

  //ground
  push();
  fill(250, 232, 155);
  noStroke();
  rectMode(CORNER);
  rect(0, 540, 740, 360);
  pop();

  xoff = xoff + 0.01;
  let n = noise(xoff) -0.5;

  if (n > 0) {
  push();
  beginShape();
  fill(227, 168, 105);
  curveVertex(n * width+45, 890);
  curveVertex(n * width+45, 890);
  curveVertex(n * width+34, 835);
  curveVertex(n * width+24, 840);
  curveVertex(n * width+14, 835);
  curveVertex(n * width+3, 890);
  curveVertex(n * width+24, 895);
  curveVertex(n * width+45, 890);
  curveVertex(n * width+24, 895);
  endShape();

  beginShape();
  fill(235, 142, 85);
  curveVertex(n * width+34, 835);
  curveVertex(n * width+34, 835);
  curveVertex(n * width+24, 812);
  curveVertex(n * width+14, 835);
  curveVertex(n * width+24, 840);
  curveVertex(n * width+34, 835);
  curveVertex(n * width+24, 840);
  endShape();

  fill(128,138,135);
  ellipse(n * width+24, 827.5, 12, 13);

  fill(235, 142, 85);
  rectMode(CORNER);
  rect(n * width+24, 845.5, 20, 7);
  rect(n * width+42, 847.5, 5, 3);

  fill(41, 36, 33);
  rectMode(CORNER);
  rect(n * width+49, 810, 2, 42);
  ellipse(n * width+50.5, 847.5, 6, 4);
  pop();

  stroke('yellow');
  }

  else if (n < 0) {

  push();
  scale(-1, 1);
  beginShape();
  fill(227, 168, 105);
  curveVertex(n * width+45, 890);
  curveVertex(n * width+45, 890);
  curveVertex(n * width+34, 835);
  curveVertex(n * width+24, 840);
  curveVertex(n * width+14, 835);
  curveVertex(n * width+3, 890);
  curveVertex(n * width+24, 895);
  curveVertex(n * width+45, 890);
  curveVertex(n * width+24, 895);
  endShape();

  beginShape();
  fill(235, 142, 85);
  curveVertex(n * width+34, 835);
  curveVertex(n * width+34, 835);
  curveVertex(n * width+24, 812);
  curveVertex(n * width+14, 835);
  curveVertex(n * width+24, 840);
  curveVertex(n * width+34, 835);
  curveVertex(n * width+24, 840);
  endShape();

  fill(128,138,135);
  ellipse(n * width+24, 827.5, 12, 13);

  fill(235, 142, 85);
  rectMode(CORNER);
  rect(n * width+24, 845.5, 20, 7);
  rect(n * width+42, 847.5, 5, 3);

  fill(41, 36, 33);
  rectMode(CORNER);
  rect(n * width+49, 810, 2, 42);
  ellipse(n * width+50.5, 847.5, 6, 4);
  pop();

  stroke('yellow');
  }
}
