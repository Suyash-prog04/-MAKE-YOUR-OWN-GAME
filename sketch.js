function preload(){
backgroundimg=loadImage("jungle.jpg");
monkeyimg=loadImage("monkey.jpg");
fruitimg=loadImage("fruit.jpg");

}
function setup(){
    var canvas= createCanvas(800,600);
    monkey= createSprite(50,550);
    monkey.addImage(monkeyimg);
    monkey.scale=0.5;

}
function draw(){
    background(backgroundimg);
    drawSprites();
}