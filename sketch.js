var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var car3IMG;

var background;


function preload(){
  car3IMG=loadImage("motorcycle.png");
  backgroundIMG=loadImage("road.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  background=createSprite(displayWidth/2, 0, displayWidth, displayHeight*10);
  background.addImage(backgroundIMG);
  background.scale=3.5;
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

background.velocityY=3;

    if(background.y>displayHeight){
      background.y=displayHeight/2-400;
   
    }
  }
}
