const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine,world;
var ground1
var hero,rope,rope1
var monster1,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18
var box19,box20,box21,box22,box23,box24,box25,box26



function preload() {
//preload the images here
bgimage=loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
engine=Engine.create()
world=engine.world
 
ground1= new Ground(1500,540,3000,20)
hero=new Hero(400,200,250)
rope=new Fly(hero.body,{x:500,y:30})
monster1= new monstEr(1000,250,250)
box1=new box(450,200,50,50)
box2=new box(450,200,50,50)
box3=new box(450,200,50,50)
box4=new box(450,200,50,50)
box5=new box(500,200,50,50)
box6=new box(500,200,50,50)
box7=new box(500,200,50,50)
box8=new box(500,200,50,50)
box9=new box(550,200,50,50)
box10=new box(550,200,50,50)
box11=new box(550,200,50,50)
box12=new box(550,200,50,50)
box13=new box(500,200,50,50)

box14=new box(650,200,50,50)
box15=new box(650,200,50,50)
box16=new box(650,200,50,50)
box17=new box(650,200,50,50)
box18=new box(700,200,50,50)
box19=new box(700,200,50,50)
box20=new box(700,200,50,50)
box21=new box(700,200,50,50)
box22=new box(750,200,50,50)
box23=new box(750,200,50,50)
box24=new box(750,200,50,50)
box25=new box(750,200,50,50)
box26=new box(700,200,50,50)

}

function draw() {
  background(bgimage);
Engine.update(engine);

ground1.display();
hero.display()
rope.display()
monster1.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
box23.display()
box24.display()
box25.display()
box26.display()





}

function mouseDragged(){
 Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}


