var cat , catImg
var mouse , mouseImg
var bgImg 

function preload() {
    bgImg = loadImage(garden.png);
    catImg1=loadAnimation(cat1.png);
    mouseImg1=loadAnimation(mouse1.png);
    catImg2=loadAnimation(cat2.png,cat3.png);
    mouseImg2=loadAnimation(mouse2.png,mouse3.png);
   
}

function setup(){
    createCanvas(1000,800);

    mouse=ceateSprite(200,200,50,50);
    mouse.addImage(mouseImg);
    
    cat=createSprite(100,300,50,50);
    cat.addImage(catImg);
   

}

function draw() {

    background(bgImg);
    
    if (cat.x - mouse.x < (cat.width - mouse.width)/2) { 
    }

    if (cat.y - mouse.y < (cat.heigth - mouse.height)/2) { 
    }



    drawSprites();
}


function keyPressed(){

 if (keycode === LEFT_ARROW) { 
     mouse.addAnimation("mouseTeasing",mouseImg2);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay= 25;

 }


     if (keycode === RIGHT_ARROW) { 
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay= 25;

     }

 


}
