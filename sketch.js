var bullet;
var speed,weight;
var wall;

function setup() {
  createCanvas(800,400);
  bullet = createSprite(50, 100, 50, 50);
  speed=random(10,50)
  bullet.velocityX=speed;
  wall = createSprite(750,100,20,50);
 
  weight=random(400,1000)
}

function draw() {
  background(780,87,45);
   if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
      var deformation=0.5*weight *speed*speed/22509
      if(deformation>180){
        bullet.shapeColor=color(255,0,0);
      }
      if(deformation<180 && deformation>100){
        bullet.shapeColor=color(230,230,0);
      }
      if(deformation<100){
        bullet.shapeColor=color(0,255,0);
      }
   }

  drawSprites();
}