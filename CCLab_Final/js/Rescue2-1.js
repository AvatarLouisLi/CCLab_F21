let amt, startColor, newColor;
let changeColor = 0;
let img1;
let img2;
let bed;

function preload() {
  img1 = loadImage("assets/images/baby1.png");
  img2 = loadImage("assets/images/med.png");
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("myContainer");
  background(255);
  startColor = color(255,255,255);
  newColor = color(241,191,153);
  amt = 0;
  bed = new newBed(random()*width, 300);
}

function draw() {
   if (mouseX > 0 && mouseY > 0) {
    cursor('assets/images/med.png');
  }

  if (changeColor > 0) {
    amt += 0.01;
    changeColor -= 0.01;
  }

  if(amt >= 1){
    amt = 0.0;
    startColor = newColor;
    newColor =  color(241, 191, 153);
  }
  tint(lerpColor(startColor, newColor, amt));
  image(img1, 0, 0);

  bed.display();
}

function mousePressed() {
  if (mouseX > 40 && mouseX <204 && mouseY > 13 && mouseY < 241) {
    changeColor += 0.04;
  }
  if (mouseX > 92 && mouseX <454 && mouseY > 197 && mouseY < 292) {
    changeColor += 0.02;
  }
}

class newBed {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  display () {
    push();
    beginShape();
    fill(this.r, this.g, this.b);
    rectMode(CORNER);
    rect(86, 314, 450, 85);
    rect(88,400,10,50);
    rect(524,400,10,50);
    ellipseMode(CENTER);
    ellipse(83, 312, 150, 120);
    endShape();
    pop();
  }
}
