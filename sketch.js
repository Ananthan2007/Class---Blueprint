const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var box1,box2,box3,box4;
var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,100,50,50);
  box2 = new Box(300,100,50,50);
  box3 = new Box(400,200,50,50);
  box4 = new Box(150,50,70,50);

  ground = new Ground(200,height,800,20)
}

function draw() {
  background("black");
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  ground.display();
}