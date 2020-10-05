var Engine = Matter.Engine,
   
    World = Matter.World,
    
    Bodies = Matter.Bodies;



    var object,ground, world,engine;


 function setup() {
 
 
createCanvas(400,400);

  
 
  engine = Engine.create()
  
  world = engine.world

  
 
   ground_options ={
    
   isStatic:true
  
    }
 ground = Bodies.rectangle(200,390,400,10,ground_options)
   
 
 World.add(world,ground)

 object_options ={
    
  restitution : 1
 
   }

 object = Bodies.circle(100,10,30,object_options);
 World.add(world,object)
  }
  function draw() {

 background('pink');  
 
 Engine.update(engine);
  

rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,10);
circle(object.position.x,object.position.y,30)
    
    
  }