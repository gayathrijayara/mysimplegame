const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground;
var basket;
var backgroundImg;

function preload(){
  backgroundImg=loadImage("back ground.jpg")
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(600,390,1200,20);
  basket= new Dustbin(600,650,100,100)
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  ground.display();
  basket.display();  
  drawSprites();
}