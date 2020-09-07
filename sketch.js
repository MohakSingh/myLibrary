var fixRect, movingRect;



function setup() {
  createCanvas(800,400);
  fixRect=createSprite(200, 200, 50, 50);
movingRect=createSprite(400,200,50,50);
fixRect.shapeColor="white";
movingRect.shapeColor="green";
//fixRect.velocityX=2;
//movingRect.velocityX=-2;

}

function draw() {
  background(240,100,155);  
movingRect.x=mouseX;
movingRect.y=mouseY;


if(isTouching(movingRect,fixRect)){
  movingRect.shapeColor="red";
  fixRect.shapeColor="red";
  
}
else{
  movingRect.shapeColor="green";
  fixRect.shapeColor="green";
}

//bounceOff(movingRect,fixRect);

  drawSprites();
}









