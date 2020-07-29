var ball,paddle,ballimg,paddleimg;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball= createSprite(60,200,20,20);
  ball.addImage ('ball.png',ballimg); 
  ball.velocityX=9;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage("paddle.png",paddleimg);
  

}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  drawSprites();
  explosion();
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

