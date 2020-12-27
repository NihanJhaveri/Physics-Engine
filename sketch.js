const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, box;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    
   var box_options ={
   isStatic: false,
   restitution: 1.5,

   }
   
    box = Bodies.rectangle(200,200,50,50,box_options);
    World.add(world,box);
}

function draw(){
    background("red");
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown");
    rect(ground.position.x,ground.position.y,400,20);
    fill("blue");
    rect(box.position.x,box.position.y,50,50);
}