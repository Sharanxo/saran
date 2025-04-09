var box;

function setup() {
  createCanvas(1920,1080);
  box = createSprite(300,300,80,30);

}

function draw() 
{
   background(3,2,2);

   if (keyIsDown(RIGHT_ARROW)) {
    box.position.x += 5;
    box.shapeColor = color(255, 100, 100);
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x -= 5;
    box.shapeColor = color(100, 100, 255); 
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y -= 5;
    box.shapeColor = color(100, 255, 100); 
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y += 5;
    box.shapeColor = color(255, 255, 100); 
  }
  

  drawSprites();
}




