const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball , hanger;
var score = 0;
var bg;

function preload(){
  getTime();
}

function setup(){
  var canvas = createCanvas(1500,500);
  engine = Engine.create();
  world = engine.world;

  ball = new Box(200, 40, 30);
  hanger = new Hanger(ball.body,{x: 200 , y:40});
  ground = new Ground(700,480,1400,20);
  
  paddle1= new Ground(650,400,200,15);
  box1 = new Boxes(600,390,50,50);
  box2 = new Boxes(650,390,50,50);
  box3 = new Boxes(700,390,50,50);
  box4 = new Boxes(625,365,50,50);
  box5 = new Boxes(675,365,50,50);
  box6 = new Boxes(650,340,50,50);
  
  paddle2= new Ground(1100,320,200,15);
  box_1 = new Boxes(1050,310,50,50);
  box_2= new Boxes(1100,310,50,50);
  box_3 = new Boxes(1150,310,50,50);
  box_4 = new Boxes(1075,285,50,50);
  box_5 = new Boxes(1125,285,50,50);
  box_6 = new Boxes(1100,260,50,50);

}

function draw(){
  if(bg){
    background(bg);  
  }
 
  Engine.update(engine);
  strokeWeight(4);
  text("SCORE: " + score,1200,30);
  
  ball.display();
  hanger.display();
  ground.display();
  paddle1.display();
  paddle2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box_1.display();
  box_2.display();
  box_3.display();
  box_4.display();
  box_5.display();
  box_6.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box_1.score();
  box_2.score();
  box_3.score();
  box_4.score();
  box_5.score();
  box_6.score();


}

function mouseDragged(){
    Matter.Body.setPosition(ball.body , {x: mouseX, y: mouseY})
}

function mouseReleased(){
    hanger.fly();
}

function keyPressed(){
  if(keyCode === 32){
      hanger.attach(ball.body)
  }
}


async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=06 && hour<=19){
   
    bg = "pink";

  }else{
    
   bg = "blue";

  }
}


