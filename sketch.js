var bg,bgImg;
var car,carimg;
function preload(){
bgImg=loadImage("background2.jpg")
carimg=loadImage("car img.jpg")
}

function setup(){
    createCanvas(2000,1000)

    bg=createSprite(800,100,2000,700);
    bg.scale= 3
    bg.addImage(bgImg)
    bg.velocityX= -3

    car=createSprite(200,500,60,10);
    car.addImage(carimg)
}

function draw(){
    background("lightgreen")
    if(bg.x<500){
bg.x=800

    }

    drawSprites();
}