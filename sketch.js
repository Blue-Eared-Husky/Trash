const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var counter = 1;

let engine;
let world;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}
	ball = Bodies.circle(width/8,100,10,ball_options);
	World.add(world,ball);

	ground = new Ground(width/2,height-10,width,20);
	wall1 = new Ground(10,height/2,20,height);
	wall1 = new Ground(width/2,10,width,20);
	wall3 = new Ground(width-10,height/2,20,height);

	trashwall1 = new Ground(width-230,height-30,10,200);
	trashwall2 = new Ground(width-350,height-30,10,200);
}


function draw() {
	background(0);
	Engine.update(engine);
  	rectMode(CENTER);
  	ellipseMode(CENTER);
	
	fill("white");
	ellipse(ball.position.x,ball.position.y,20,20);

	trashwall1.display();
	trashwall2.display();

	ground.display();

	if (keyCode === 32 && counter == 1){
		Matter.Body.applyForce(ball,ball.position,{x:15, y: -17})
		console.log("hi");
		counter -= 1;
	}
  
  	drawSprites();
}