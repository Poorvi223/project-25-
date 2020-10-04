const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render

var paper;
var dustbin;
var ground; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	paper = new Paper (100,100,20,20)
	dustbin = new Dustbin(600,570);
	ground = new Ground(400,600,800,20);
	
	var render = Render.create({
		element : document.body,
		engine : engine,
		options : {
			width : 1600,
			height : 700,
			wireframes : false
		}
	});
	Engine.run(engine);
	Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(200);

  var options ={
	isStaic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
  }
  
  paper.display();
  dustbin.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){

		matter.Body.applyForce(paperObject.body.position,{x:85,y:-85})
	}
}



