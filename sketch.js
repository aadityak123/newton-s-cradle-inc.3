
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var roof1;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;

	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof()
	
	
	

	var dia = 40;
	var startX = width/2;
	var startY = height/4;
	bobObject1 = new Bob(startX-20+2*dia,startY,dia)
	bobObject2 = new Bob(startX-10+dia,startY,dia)
	bobObject3 = new Bob(startX,startY,dia)
	bobObject4 = new Bob(startX+10+dia,startY,dia)
	bobObject5 = new Bob(startX+20+2*dia,startY,dia)

	rope1 = new Rope(bobObject1,roof1,0,0)
	rope2 = new Rope(bobObject2,roof1,0,0)
	rope3 = new Rope(bobObject3,roof1,0,0)
	rope4 = new Rope(bobObject4,roof1,0,0)
	rope5 = new Rope(bobObject5,roof1,0,0)
	

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  

  roof1.display();
  chain1 = new Rope(roof1,bobObject1,5,0)


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  
  drawSprites();
 
}



