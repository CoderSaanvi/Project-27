var bob1,bob2,bob3,bob4,bob5
var roof,rope1,rope2,rope3,rope4,rope5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	roof = new Roof(400,350,150,20);

	ground = new Roof(400,690,width,20);

	bob1 = new Bob(340,550);
	bob2 = new Bob(370,550);
	bob3 = new Bob(400,550);
	bob4 = new Bob(430,550);
	bob5 = new Bob(460,550);

	rope1 = new Rope(bob1.body,roof.body,-60,0)
	rope2 = new Rope(bob2.body,roof.body,-30,0)
	rope3 = new Rope(bob3.body,roof.body,0,0)
	rope4 = new Rope(bob4.body,roof.body,30,0)
	rope5 = new Rope(bob5.body,roof.body,60,0)
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("lightGrey");

  Engine.update(engine);

  roof.display();
  ground.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode==UP_ARROW) {
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.020,y:-0.020});
	}
  }



