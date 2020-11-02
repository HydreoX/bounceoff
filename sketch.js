var fixedRect, movingRect;
var car,wall

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

car = createSprite(300,100,50,30)
car.shapeColor = "blue";
car.velocityX = 8

wall = createSprite(900,100,20,150)
wall.shapeColor = "yellow"
}

function draw() {
  background(0,0,0);  

  if (bounceOff(car,wall)){
 wall.shapeColor = "green"
 text("collided",200,300)
console.log("collided")
}


// bounceOff(car,wall);
  drawSprites();
}
