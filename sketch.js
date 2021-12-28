var backimg;
var paraimg;
var obs1;
var obs2;
var obs3;
function preload(){
backimg = loadImage("assets/bg.png")
paraimg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
obs1 = loadImage("assets/obsBottom2.png")
obs2 = loadImage("assets/obsbottom1.png")
obs3 = loadImage("assets/obsTop2.png")
}

function setup(){
createCanvas(1200,600)
para = createSprite(110,220)
para.addAnimation("moving",paraimg)
para.scale = 0.4
obstaclegroup = new Group();
}

function draw() {
  background(backimg)
text(mouseX+","+mouseY,mouseX,mouseY)
if(keyDown("UP_ARROW")){
  para.y = para.y-5
}
if(keyDown("DOWN_ARROW")){
para.y = para.y+5
}
if(para.isTouching(obstaclegroup)){
text("Game Over",600,300)
}
obstacle();
bulding();
 drawSprites();  
 bird();
}
function obstacle(){
  if(frameCount%170===0 ){

  
 obstacle1 = createSprite(1133,Math.round(random(390,550)))
 obstacle1.addImage("light",obs1)
 obstacle1.scale = 0.1
 obstacle1.velocityX = -3
 obstacle1.lifetime = 500
}}
function bulding(){
  if (frameCount%100===0){
    obstacle2 = createSprite(1133,Math.round(random(350,500)))
    obstacle2.addImage("building",obs2)
    obstacle2.scale = 0.1
    obstacle2.velocityX = -3
    obstacle2.lifetime = 500
    obstacle2.depth = para.depth
    para.depth+=1
    obstaclegroup.add(obstacle2)
  }
}
function bird(){
  if (frameCount%130===0){
    obstacle3 = createSprite(856,Math.round(random(5,75)))
    obstacle3.addImage("bird",obs3)
    obstacle3.scale = 0.1
    obstacle3.velocityX = -3
    obstacle3.lifetime = 500
}}