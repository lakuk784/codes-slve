const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//variables
var player;
var mazeo,flapo,spao;
var mimg,ob1,ob2;
var bidimg,walimg;
var gameState = 0;
var num1,num2,num3;
var astroimg,ssimg;
var che1,che2,che3;
var ob1,ob2,ob3,ob4,ob5,ob6,ob7;
var yelimg,bluimg,redimg,pinimg;
var line1,line2,line3,line4,line5,line6;

function preload()
{
    //loads images
    mimg = loadImage ("img/main.png")
    yelimg = loadImage ("img/yel.png")
    bluimg = loadImage ("img/blu.png")
    redimg = loadImage ("img/red.png")
    pinimg = loadImage ("img/pin.png")
    astroimg = loadImage ("img/astro.png")
    ssimg = loadImage ("img/ss.png")
    bidimg = loadImage ("img/bid.png")
    walimg = loadImage ("img/wal.png")
    num1 = loadImage ("img/1.png")
    num2 = loadImage ("img/2.png")
    num3 = loadImage ("img/3.jpg")
}

function setup (){
    //creates canvas
    createCanvas (500,600)

    //creates engine
    engine = Engine.create();
    world = engine.world;

    //player
    player = createSprite (135,175,1,1)
    player.addImage("moving",mimg)
    player.scale = 0.03
   
    //objects of the class
    mazeo = new Maze ();
}

function draw(){
    //background
    background(0)

    console.log(gameState)
    //updates engine
    Engine.update(engine);

    //checks if the player is touching the nums and then adds 1 to the gamestate
    if (player.isTouching(che1))
    {
        gameState = gameState+1
    }

    //checks if the gameState is particular no. and the calls the respective class object
    if (gameState === 0)
    {
        base();
    }
    if (gameState === 1)
    {
        mazeo.display();
    }

    //checks if the player is touching any obstacles
    if (player.isTouching(ob1))
    {
        player.x = 135
        player.y = 175
    }
    drawSprites();

    text(mouseX+","+mouseY,mouseX,mouseY)
}

function base ()
{
 
    // creating lines 
    line1 = createSprite(100,300,10,350)
    line1.shapeColor ="white"
 
    line2 = createSprite(400,300,10,350)
    line2.shapeColor ="white"
 
    line3 = createSprite(250,475,300,10)
    line3.shapeColor ="white"
 
    line4 = createSprite(250,129,300,10)
    line4.shapeColor ="white"
 
    line5 = createSprite(225,233,250,10)
    line5.shapeColor ="white"
 
    line6 = createSprite(275,345,250,10)
    line6.shapeColor ="white"
 
    //creating obstacles
    ob1 = createSprite(200,130,5,5)
    ob1.shapeColor = "white"
    ob1.velocityY = 3
 
    ob2 = createSprite(280,223,5,5)
    ob2.shapeColor = "white"
    ob2.velocityY = -3
 
    ob3 = createSprite(274,260,10,40)
    ob3.shapeColor = "white"
    
    ob4 = createSprite(200,316,10,40)
    ob4.shapeColor = "white"
 
    ob5 = createSprite(190,450,10,40)
    ob5.shapeColor = "white"
     
    ob6 = createSprite(300,380,10,40)
    ob6.shapeColor = "white"
 
    ob7 = createSprite(245,445,5,5)
    ob7.shapeColor = "white"
    ob7.velocityY = -3
 
    //checkpoints
    che1 = createSprite (365,181,1,1)
    che1.addImage("still",num1)
    che1.scale = 0.2
 
    che2 = createSprite (125,293,1,1)
    che2.addImage("still",num2)
    che2.scale = 0.2
 
    che3 = createSprite (365,412,1,1)
    che3.addImage("still",num3)
    che3.scale = 0.1
 
    
    //bouncesoff the object
    ob1.bounceOff(line4)
    ob1.bounceOff(line5)

    ob2.bounceOff(line4)
    ob2.bounceOff(line5)

    ob7.bounceOff(line3)
    ob7.bounceOff(line6)

    player.bounceOff(line1)
    player.bounceOff(line2)
    player.bounceOff(line3)
    player.bounceOff(line4)
    player.bounceOff(line5)
    player.bounceOff(line6)
    player.bounceOff(ob3)
    player.bounceOff(ob4)
    player.bounceOff(ob5)
    player.bounceOff(ob6)
 
    

    //moves the player using arrow keys
    if (keyDown(LEFT_ARROW))
    {
        player.x = player.x-2
    }
    if (keyDown(UP_ARROW))
    {
        player.y = player.y-2
    }
    if (keyDown(RIGHT_ARROW))
    {
        player.x = player.x+2
    }
    if (keyDown(DOWN_ARROW))
    {
        player.y = player.y+2
    }

}