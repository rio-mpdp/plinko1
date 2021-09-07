class Particle{
  constructor(x,y,w,h){
      this.w=10
    
      
  this.body=Matter.Bodies.circle(x,y,this.w,{
   
      restitution:0,
      friction:0,
      density:1

     })
     this.color=color(random(0,255),random(0,255),random(0,255))

  Matter.World.add(myworld,this.body)
  
  }
  display(){
  push()
  fill(this.color)
  translate(this.body.position.x,this.body.position.y)
  rotate(this.body.angle)
  
  ellipseMode(RADIUS)
  ellipse(0,0,this.w)
  pop()
  }
  }

    
    
    