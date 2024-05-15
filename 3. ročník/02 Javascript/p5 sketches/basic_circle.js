let x = 30
let y = 30
let speed = 5
let r = 255 
let g = 255
let b = 255
function setup() {
  createCanvas(400, 400)
}

function draw() {
  
  
  
  background(220)
  fill(r,g,b)
  // stroke(255)
  noStroke()
  if (x > width || x < 0) {
    speed *= -1
    r = random(0, 255)
    g = random(0, 255)
    b = random(0, 255)
  }
  x += speed
  
  
  ellipse(x, y, 50)
}