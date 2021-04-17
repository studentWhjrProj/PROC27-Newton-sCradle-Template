
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
    roof=new Roof(400,100,400,20);
    bob1=new Bob(320,400,20);
    bob2=new Bob(360,400,20);
    bob3=new Bob(400,400,20);
 //Create the Bodies - bob4 and bob5.


    rope1=new Rope(bob1.body,roof.body,-80,0);
    rope2=new Rope(bob2.body,roof.body,-40,0);
    rope3=new Rope(bob3.body,roof.body,0,0);
  
   // create rope4(offsetX & offsetY - 40 and 0 ) and 
  // rope5(offsetX & offsetY - 80 and 0 )

}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine);
  roof.display();
 
  // Display bob1, bob2, bob4 and bob5
  
  bob3.display();
  
  
 // Display rope1, rope2, rope4 and rope5
  
  rope3.display();
  
  drawSprites();
 
}
function keyPressed(){
  
  // Use If condition KeyCode for UP_ARROW to applyForce for the bob body.
  
  
  //Check this link for applyForce -  https://brm.io/matter-js/docs/classes/Body.html
  
	
}



