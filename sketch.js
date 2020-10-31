var fixedrect, movingrect, car, wall;





function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(400, 200, 50, 80);
 movingrect = createSprite(600, 200, 50, 50);
 car = createSprite(100,100,30,30)
 wall = createSprite(700,100,30,100)
  
  fixedrect.shapeColor = "green"
  movingrect.shapeColor = "green"
 car.shapeColor = "blue"
 car.velocityX = 5
}

function draw() {
  background(0);  
 movingrect.x = World.mouseX
 movingrect.y = World.mouseY




if (fixedrect.x - movingrect.x <= movingrect.width/2 + fixedrect.width/2 &&
  movingrect.x-fixedrect.x <= movingrect.width/2 + fixedrect.width/2 &&  
  fixedrect.y - movingrect.y <= movingrect.height/2 + fixedrect.height/2 &&
  movingrect.y-fixedrect.y <= movingrect.height/2 + fixedrect.height/2  
  
  
  ){


  fixedrect.shapeColor = "red"
  movingrect.shapeColor = "red"

  

   

}

else{

  fixedrect.shapeColor = "green"
  movingrect.shapeColor = "green"
}


if (wall.x - car.x <= car.width/2 + wall.width/2 //&&
  //car.x-fixedrect.x <= car.width/2 + wall.width/2  
  ){

    car.velocityX = -5

  }


  drawSprites();
}