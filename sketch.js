const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,stand,polygon,backgroundImg;
var ground,polygon_img,slingshot,blackBg;

var score = 0;

function preload()
{  
  getBackgroundImg();
  bg = loadImage("Orange.jpg");
  polygon_img = loadImage("hexa 2.jpg");
  blackBg = loadImage("Black Background.jpg");
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;
  
  
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);

 
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);


  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);

  block19 = new Block(400,65,30,40);



  block20 = new Block(640,175,30,40);
  block21= new Block(670,175,30,40);
  block22 = new Block(700,175,30,40);
  block23 = new Block(730,175,30,40);
  block24 = new Block(760,175,30,40);

  block25 = new Block(670,135,30,40);
  block26 = new Block(700,135,30,40);
  block27 = new Block(730,135,30,40);

  block28 = new Block(700,95,30,40);






  this.polygon = Bodies.circle(50,200,20);
  World.add(world,this.polygon);

  slingshot = new Slinglaunch(this.polygon,{x : 100,y: 200});

  stand = new Ground(1000,380,100000,20);
  stand1 = new Ground(380,300,270,10);
  stand2 = new Ground(700,200,200,10);
  
}

function draw() {
  if (backgroundImg)
      background(backgroundImg);

      noStroke();

  Engine.update(engine);

  // Dragging and Releasing
  textSize("20");
  fill("white");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",200,50);
  

  // Second chance(Space key)
  text("Press SPACE to get second chance",1000,350);
  textSize("20");
  fill("white");

  //Score
  text("SCORE :" +score,750,40);
  textSize("20");
  fill("white");

  
  block2.display();+
  block3.display();
  block4.display();
  block5.display(); 
  block6.display();
  block7.display();
  block8.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display(); 

  block16.display();
  block17.display();
  block18.display();
  block19.display();

  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();




  stand.display();
  stand1.display();
  stand2.display();

  
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
 
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();

  block16.score();
  block17.score();
  block18.score();
  block19.score();

  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();







  // Image
  imageMode(CENTER);
  image(polygon_img,this.polygon.position.x,this.polygon.position.y,40,40);
  
  slingshot.display();
  
}

function keyPressed()
{
  if (keyCode === 32)
  {
    slingshot.attach(this.polygon);
  }
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygon,{x : mouseX, y : mouseY})
}

function mouseReleased(){
slingshot.fly();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "Orange.jpg";
  }
  else{
      bg = "Black Background.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}