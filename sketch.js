//Game States
var PLAY=1;
var END=0;
var gameState=1;

var knife;
var knifeImage;
var score ;

function preload(){
  
  knife1 = loadImage("knife.png");
  alein1 =loadImage("alien1.png");
  alein2 =loadImage("alien2.png");
  fruit1 =loadImage("fruit1.png");
  fruit2 =loadImage("fruit2.png");
  fruit3 =loadImage("fruit3.png");
  fruit4 =loadImage("fruit4.png");
  chop=loadSound("knifeSwoosh.mp3");
  go=loadImage("gameover.png")
  gover=loadSound("gameover.mp3")
}




function setup() {
  createCanvas(600, 560);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knife1);
   knife.scale=0.7
  
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);
  knife.debug = false 

  score=0;
  bb = new Group();
bbb = new Group();
   c1 = new Group();
   c2= new Group();
   c3= new Group();
   c4= new Group();
   c5= new Group();
  //create fruit and monster Group variable here
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    
    //calling fruit and monster function
    
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
  
    // Increase score if knife touching fruit
   if(knife.isTouching(bb)){
     cloud1.x=1000;
     score=score+1
     chop.play();
     
   }
     if(knife.isTouching(bbb)){
     cloud7.x=10000;
     score=score+2
        chop.play();
     
     }
     if(knife.isTouching(c2)){
     cloud2.x=100000;
     score=score+5
        chop.play();
     
     }
if(knife.isTouching(c3)){
     cloud3.x=2000;
     score=score+3
   chop.play();
     
   }
     if(knife.isTouching(c4)){
    gameState = END;
gover.play();
     }
     if(knife.isTouching(c5)){
     gameState = END;
       gover.play();
     }
   }
else if (gameState === END) {
  bb.setVelocityYEach(0);
  bbb.setVelocityYEach(0);
  c2.setVelocityYEach(0);
  c3.setVelocityYEach(0);
  c4.setVelocityYEach(0);
  c5.setVelocityYEach(0);
bb.setLifetimeEach(-1);
  bbb.setLifetimeEach(-1);
  c2.setLifetimeEach(-1);
  c3.setLifetimeEach(-1);
  c4.setLifetimeEach(-1);
  c5.setLifetimeEach(-1);
  goo=createSprite(300,250,0,0);
  goo.addImage(go);
}

    // Go to end state if knife touching enemy
      
  no=createSprite(300,30,600,60);
  fill(0,0,255);
  score.depth=100
  drawSprites();
  
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
  spawnClouds1();
  spawnClouds2();
  spawnClouds3();
  spawnClouds4();
  spawnClouds5();
  spawnClouds6();
}

function spawnClouds1(){
  if(frameCount % 100===0){
cloud1=createSprite(0,-10,40,0);
  cloud1.addImage(fruit1);
    cloud1.scale=0.1;
    cloud1.x=Math.round(random(10,600));
    cloud1.velocityY=6;    
     cloud1.lifetime=200;
    cloud1.scale=0.3;
  bb.add(cloud1);
  }
}
function spawnClouds2(){
  if(frameCount % 300===0){
cloud7=createSprite(0,-10,40,0);
  cloud7.addImage(fruit2);
    cloud7.scale=0.1;
    cloud7.x=Math.round(random(10,600));
    cloud7.velocityY=10;    
     cloud7.lifetime=200;
    cloud7.scale=0.3;
  bbb.add(cloud7);
  }
}
function spawnClouds3(){
  if(frameCount % 50===0){
cloud2=createSprite(0,-10,40,0);
  cloud2.addImage(fruit3);
    cloud2.scale=0.1;
    cloud2.x=Math.round(random(10,600));
    cloud2.velocityY=8;    
     cloud2.lifetime=200;
    cloud2.scale=0.3;
  c2.add(cloud2);
  }
}
function spawnClouds4(){
  if(frameCount % 200===0){
cloud3=createSprite(0,-10,40,0);
  cloud3.addImage(fruit4);
    cloud3.scale=0.1;
    cloud3.x=Math.round(random(10,600));
    cloud3.velocityY=10;    
     cloud3.lifetime=200;
    cloud3.scale=0.3;
  c3.add(cloud3);
  }
}
function spawnClouds5(){
  if(frameCount % 180===0){
cloud4=createSprite(0,-10,40,0);
  cloud4.addImage(alein1);
    cloud4.scale=0.1;
    cloud4.x=Math.round(random(10,600));
    cloud4.velocityY=12;    
     cloud4.lifetime=200;
    cloud4.scale=0.8;
  c4.add(cloud4);
  }
}
function spawnClouds6(){
  if(frameCount % 280===0 ){
    cloud5=createSprite(0,0,0,0);
    cloud5.lifetime=200;
    cloud5.addImage(alein2);
    cloud5.scale=0.6;
    cloud5.x=Math.round(random(10,600));
    cloud5.velocityY=20;
    c5.add(cloud5);
    
    
  }
}