
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var chao


function setup() {
  createCanvas(400,400);
  rectMode(CENTER)
  engine = Engine.create();
  world = engine.world;
  var opt = {
    restitution: 1
 
   }
  ball = Bodies.circle(200,200,20,opt)
  World.add(world,ball)
  
  var op ={
   isStatic: true

  }
  chao = Bodies.rectangle(200,380,400,20,op)
  World.add(world,chao)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
  rect(chao.position.x,chao.position.y,400,20)
}

