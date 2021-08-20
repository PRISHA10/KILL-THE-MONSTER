class monstEr{
  constructor(x,y,r){
var options={
  density:5,
  frictionAir:0
}
this.r=r
this.image=loadImage('Monster-01.png')
this.body=Bodies.circle(x,y,this.r/2,options)
World.add(world,this.body)
  }   
  display(){
 var pos=this.body.position
 push() 
 translate(pos.x,pos.y)
 imageMode(CENTER)
image(this.image,0,0,this.r,this.r)
pop()   
  }

 }