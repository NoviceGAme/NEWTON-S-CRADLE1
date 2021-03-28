
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
   bob1=new Bob(400,250,50,50)
   bob2=new Bob(425,250,50,50)
   bob3=new Bob(450,250,50,50)
   bob4=new Bob(475,250,50,50)
   bob5=new Bob(500,250,50,50)
   
    pole1=new ground(400,50,300,20)
   
   rope1=new rope (bob1.body , pole1.body,-80 , 0);

   
   

   ground1=new ground(385,650,900,20)
   wall1=new ground(15,350,20,900)
   wall2=new ground (785,350,20,900)
   Engine.run(engine);


   

   
  
}


function draw() {
  rectMode(CENTER);
  background(55);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  ground1.display();
   wall1.display();
   wall2.display();


 
  drawSprites();

  pole1.display();
rope1.display();
  
 
}



