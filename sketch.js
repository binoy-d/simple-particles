var objects = [];
var b;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  if(mouseIsPressed)
    objects.push(new Particle());
    for(var i = 0;i < objects.length;i++){
    b = objects[i];
    b.display();
    b.move();
    if(b.age>=125){
      objects.splice(b, 1);
    }
  }
}
function Particle() {
  this.x = mouseX;
  this.y = mouseY;
  this.age = 0;
  this.diameter = random(10, 30);
  this.angle = random(0,360);
  this.speed = random(0.1,4);


  this.move = function() {
    this.x += sin(this.angle)*this.speed;
    this.y += cos(this.angle)*this.speed;
    this.age++;

  };

  this.display = function() {
    noStroke();
    fill(random(0,255),random(0,255),random(0,255),250-(this.age*2));
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
