const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var base;
var cloud,cloudImage
var enemy1,enemy2,enemy

function preload() {
   cloudImage = loadImage("cloud.png")
   enemy2 = loadImage("tererist1.png")
   enemy1 = loadImage("tererist.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    base = new Ground(300,370,2400,25);

    
}

function draw(){
    background("white");
    Engine.update(engine);
    base.display();
    spawnClouds();
    selectEnemy();
    drawSprites();
     
}

function selectEnemy(){
  var select_enemy = Math.round(random(1,2));
  enemy = createSprite(1200,Math.round(random(100,320)),30,50)
  enemy.velocityX = -8
  
if (frameCount % 50  === 0){
  if (select_enemy == 1){
    enemy.addImage(enemy1);
    enemy.scale = 0.4
  }  else if (select_enemy == 2){
     enemy.addImage(enemy2);
     enemy.scale = 0.4
  }
}
}

function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 80 === 0) {
       var cloud = createSprite(1200,100,40,10);
      cloud.addImage(cloudImage)
      cloud.scale = 0.4
      cloud.y = Math.round(random(10,60))
      
      cloud.velocityX = -6;
      
      
      //assigning lifetime to the variable
      cloud.lifetime = 450
      console.log(cloud.y)
    }
    
}

