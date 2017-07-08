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
  this.color = {
   'r':random(50,200),
    'g':random(50,200),
    'b':random(50,200)
  };

  this.move = function() {
    this.x += sin(this.angle)*this.speed;
    this.y += cos(this.angle)*this.speed;
    this.age++;

  };

  this.display = function() {
    noStroke();
    fill(this.color.r,this.color.g, this.color.b, 200-(this.age*1.5));
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
