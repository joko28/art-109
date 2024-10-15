// Sketch.js

// Tutorial 6

// let canvas;

// function setup() {
//   canvas = createCanvas(windowWidth, windowHeight);
//   canvas.position(0, 0);
//   canvas.style("z-index", -2);
//   //   background(225);
// }

// function windowResized() {
//   //   console.log("bigger! smaller!");
//   resizeCanvas(windowWidth, windowHeight);
// }

// function draw() {}

// function mouseMoved() {
//   drawThing(mouseX, mouseY);
//   drawThing(mouseX - 50, mouseY + 75);
// }

// function drawThing(_x, _y) {
//   strokeWeight(0);
//   fill(random(200, 255), random(200, 255), random(200, 255));
//   ellipse(_x, _y, 30, 30);
// }

// How to make a flow field in p5.js | Coding Project #9

let canvas;
let points = [];
let mult = 0.005;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", -2);
  background(30);
  angleMode(DEGREES);
  noiseDetail(1);

  initPoints();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(30);
  initPoints();
}

function initPoints() {
  points = [];
  let density = 50;
  let space = width / density;

  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      let p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p);
    }
  }
}

function draw() {
  noStroke();

  for (let i = 0; i < points.length; i++) {
    let r = map(points[i].x, 0, width, 50, 255);
    let g = map(points[i].y, 0, height, 50, 255);
    let b = map(points[i].x, 0, width, 255, 50);

    fill(r, g, b);

    let angle = map(
      noise(points[i].x * mult, points[i].y * mult),
      0,
      1,
      0,
      720
    );

    points[i].add(createVector(cos(angle), sin(angle)));
    ellipse(points[i].x, points[i].y, 1);
  }
}
