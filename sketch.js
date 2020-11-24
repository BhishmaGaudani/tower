
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 800);


	engine = Engine.create();
	world = engine.world;

	ground=new ground(240,780,480,20)

	for(vari=5;i<innerWidth;i=i+78){
		plinko.push(new plinko(j,75))
	}

	for(var j=34;j<width-24;j=j+48){
		plinko.push(new plinko(j,175))
	}

	for(var j=34;j<width-24;j=j+48){
		plinko.push(new plinko(j,275))
	}

	for(var j=10;j<width-2;j=j+48){
		plinko.push(new plinko(j,35))
	}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  background.display();
  
  if(framecount%20===0){
	  particle.push(new particle(random(10,470),0))
  }
  for(var i=0;i<divisions.length;i++){
	  divisions[i].display();
  }
  for(var i=0;i<divisions.length;i++){
	divisions[i].display();
  }

  for(var j=0;i<plinko.length;j++){
	divisions[j].display();
  } 
  
  

  drawSprites();
 
}



