
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var roofobject;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 1400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofobject=new Roof(300,150);
	bobdiameter=40;
	bobxposition=width/2;
	bobyposition=height/4+700
	bobobject1=new Bob(bobxposition-bobdiameter*2,bobyposition,bobdiameter);
	bobobject2=new Bob(bobxposition-bobdiameter,bobyposition,bobdiameter);
	bobobject3=new Bob(bobxposition,bobyposition,bobdiameter);
	bobobject4=new Bob(bobxposition+bobdiameter,bobyposition,bobdiameter);
	bobobject5=new Bob(bobxposition+bobdiameter*2,bobyposition,bobdiameter);

	rope1=new Rope(bobobject1.body,roofobject.body,-bobdiameter*2,0);
	rope2=new Rope(bobobject2.body,roofobject.body,-bobdiameter,0);
	rope3=new Rope(bobobject3.body,roofobject.body,0,0);
	rope4=new Rope(bobobject4.body,roofobject.body,bobdiameter,0);
	rope5=new Rope(bobobject5.body,roofobject.body,bobdiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofobject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-50,y:-45})
	}
}

