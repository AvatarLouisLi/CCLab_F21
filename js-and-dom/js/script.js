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

function setup() {
  createCanvas(740, 900);
  color1R = random(255);
  color1G = random(255);
  color1B = random(255);
  currx = 30;
  curry = 700;
  prevx = 30;
  prevy = 700;

  r1 = random(0, 255);
  g1 = random(0, 255);
  b1 = random(0, 255);

  d = 10;
}

function draw() {

  rectMode(CENTER);

  background(r1, g1, b1);

 //sun
  noStroke();
  fill(234, 85, 46);
  ellipse(75, 150, 100, 100);

 //Initial Mountains
  fill(220)
  noStroke();
  triangle(130, 600, 530, 600, 315, 300);

  fill(200)
  noStroke();
  triangle(370, 600, 600, 600, 490, 400);
  console.log(mouseX, mouseY);

  //ground
  push();
  fill(250, 232, 155);
  noStroke();
  rectMode(CORNER);
  rect(0, 540, 740, 360);
  pop();

  beginShape();
  strokeWeight(1.5);
  strokeCap(ROUND);
  rectMode(CORNER);
  fill(color1R, color1G, color1B);
  rect(currx - 23, curry + 4, 4, 4);
  rect(currx - 23, curry - 8, 4, 4);
  strokeWeight(2);
  strokeCap(ROUND);
  ellipseMode(CENTER);
  ellipse(currx - 6.5, curry - 1, 28, 28);
  ellipse(currx, curry, 16, 16);
  fill(random(255), random(255), random(255));
  rect(currx - 3.3, curry - 3.6, 7.2, 7.3);
  line(currx - 3.3, curry - 3.6, currx + 3.9, curry + 3.7);
  line(currx - 3.3, curry + 3.7, currx + 3.9, curry - 3.6);
  endShape();

  gapx = prevx - currx;
  gapy = prevy - curry;

  for (n = 1; n < 20; n++) {
    if (abs(gapx) > 10 || abs(gapy) > 10) {
      if (curry > 0 && curry < 190) {
      gapx = gapx / 200;
      gapy = gapy / 200;
      }
      else if (curry > 190){
      gapx = gapx / 2;
      gapy = gapy / 2;
      }
    }
  }

  currx = currx + gapx;
  curry = curry + gapy;
}

function mouseClicked() {
  d = d + 10;
}

function mousePressed() {
  prevx = mouseX;
  prevy = mouseY;
}
