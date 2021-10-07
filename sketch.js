const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine,world;

var bgImg;

var snow_img;

var snow1 , snow2 , snow3 , snow4 , snow5;

function preload(){
  bgImg = loadImage("snow3.jpg"); 

  snow_img = loadImage("snow5.webp");
}

function setup() {
  var canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world; 
  
  var option1 = {
    firctionAir: 0.0000001,
    friction: 0.5,
    density: 0.1,
    restitution: 0.5
  }
  snow1 = Bodies.rectangle(random(20,1200) , random(0,30) , 50 , 50 , option1);
  World.add(world , snow1);

  var option2 = {
    firctionAir: 0.0000001,
    friction: 0.5,
    density: 0.1,
    restitution: 0.5
  }
  snow2 = Bodies.rectangle(random(20,1200) , random(0,30) , 50 , 50 , option2);
  World.add(world , snow2);

  var option3 = {
    firctionAir: 0.0000001,
    friction: 0.5,
    density: 0.1,
    restitution: 0.5
  }
  snow3 = Bodies.rectangle(random(20,1200) , random(0,30) , 50 , 50 , option3);
  World.add(world , snow3);

  var option4 = {
    firctionAir: 0.0000001,
    friction: 0.5,
    density: 0.1,
    restitution: 0.5
  }
  snow4 = Bodies.rectangle(random(20,1200) , random(0,30) , 50 , 50 , option4);
  World.add(world , snow4);

  var option5 = {
    firctionAir: 0.0000001,
    friction: 0.5,
    density: 0.1,
    restitution: 0.5
  }
  snow5 = Bodies.rectangle(random(20,1200) , random(0,30) , 50 , 50 , option5);
  World.add(world , snow5);
}

function draw() {
  background(bgImg);  
  Engine.update(engine); 

  imageMode(CENTER);
  image(snow_img , snow1.position.x , snow1.position.y , 50 , 50);

  imageMode(CENTER);
  image(snow_img , snow2.position.x , snow2.position.y , 50 , 50);

  imageMode(CENTER);
  image(snow_img , snow3.position.x , snow3.position.y , 50 , 50);

  imageMode(CENTER);
  image(snow_img , snow4.position.x , snow4.position.y , 50 , 50);

  imageMode(CENTER);
  image(snow_img , snow5.position.x , snow5.position.y , 50 , 50);

  if(snow1.position.y > 450){
    var option1 = {
      firctionAir: 0.0000001,
      friction: 0.5,
      density: 0.1,
      restitution: 0.5
    }
    snow1 = Bodies.rectangle(random(20,1200) , random(0,30) , 50 , 50 , option1);
    World.add(world , snow1);
  }  

  if(snow2.position.y > 450){
    var option2 = {
      firctionAir: 0.0000001,
      friction: 0.5,
      density: 0.1,
      restitution: 0
    }
    snow2 = Bodies.rectangle(random(20,1200) , random(0,30) , 50 , 50 , option2);
    World.add(world , snow2);
  } 

  if(snow3.position.y > 450){
    var option3 = {
      firctionAir: 0.0000001,
      friction: 0.5,
      density: 0.1,
      restitution: 0.5
    }
    snow3 = Bodies.rectangle(random(20,1200) , random(0,30) , 50 , 50 , option3);
    World.add(world , snow3);
  } 

  if(snow4.position.y > 500){
    var option4 = {
      firctionAir: 0.0000001,
      friction: 0.5,
      density: 0.1,
      restitution: 0.5
    }
    snow4 = Bodies.rectangle(random(20,1200) , random(0,30) , 50 , 50 , option4);
    World.add(world , snow4);
  } 

  if(snow5.position.y > 500){
    var option5 = {
      firctionAir: 0.0000001,
      friction: 0.5,
      density: 0.1,
      restitution: 0.5
    }
    snow5 = Bodies.rectangle(random(20,1200) , random(0,30) , 50 , 50 , option5);
    World.add(world , snow5);
  } 
}