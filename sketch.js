var homeImage, storyImage, crowdImage, jokerSitting, messyRoom, playImage;
var clothesImage, bottleImage, knifeImage, earringImage;
var gamestate = "homestate"
var home, story, crowd, joker, room, play;
var clothes, bottle, knife, earring;

function preload(){
  homeImage = loadImage('jokerFrontImage[1].jpg')
  storyImage = loadImage("jokerFrontImage[2].jpg")
  crowdImage = loadImage("crowd[3].jpg")
  jokerSitting = loadImage("jokerSitting[4].jpg")
  messyRoom = loadImage("aMessyRoom2[5].jpg")
  playImage = loadImage("playButton-[1].png")
  clothesImage = loadImage("bloodClothes-clue(2).png")
  bottleImage = loadImage("bloodBottle-clue(4).png")
  knifeImage = loadImage("bloodKnife-clue(1).png")
  earringImage = loadImage("victimEarring-clue(3).png")
}

function setup() {
  createCanvas(displayWidth, displayHeight);
 // createSprite(400, 200, 50, 50);
  home = createSprite(displayWidth/2, displayHeight/2);
  home.addImage(homeImage);

  story = createSprite(displayWidth/2, displayHeight/2);
  story.addImage(storyImage);
  story.scale = 0.4

  crowd = createSprite(displayWidth/2, displayHeight/2);
  crowd.addImage(crowdImage);
  crowd.scale = 2

  joker = createSprite(displayWidth/2, displayHeight/2);
  joker.addImage(jokerSitting);
  joker.scale = 0.4

  room = createSprite(displayWidth/2, displayHeight/2);
  room.addImage(messyRoom);
  room.scale = 0.3

  play = createSprite(displayWidth/2 - 80, displayHeight/2 + 150);
  play.addImage(playImage);
}

function draw() {
  background(255,255,255);  
  if(gamestate==="homestate"){
    story.visible = false
    crowd.visible = false
    joker.visible = false
    room.visible = false
  }
  if(gamestate==="storystate"){
    story.visible = true
    home.visible = false
    crowd.visible = false
    joker.visible = false
    room.visible = false
    play.visible = false
  }
  if(gamestate==="crowdstate"){
    crowd.visible = true
    home.visible = false
    story.visible = false
    joker.visible = false
    room.visible = false
    play.visible = false
  }
  if(gamestate==="jokerstate"){
    room.visible = false
    home.visible = false
    story.visible = false
    joker.visible = true
    crowd.visible = false
    play.visible = false
  }
  if(gamestate==="roomstate"){
    room.visible = true
    home.visible = false
    story.visible = false
    crowd.visible = false
    joker.visible = false
    play.visible = false
  }
  if(keyDown("space")){
    gamestate = "roomstate"
  }
  if(keyDown("enter")){
    gamestate = "jokerstate";
  }
  if(keyDown(RIGHT_ARROW)){
    gamestate = "crowdstate";
  }
  if(mousePressedOver(play)){
    gamestate = "storystate";

  }
  drawSprites();
}