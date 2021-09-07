class Box{
    constructor(x,y,w,h){
        this.w=10
      
        
    this.body=Matter.Bodies.circle(x,y,this.w,{
      isStatic:true,
        restitution:1,
        friction:0,
        density:1

       })
	
    Matter.World.add(myworld,this.body)
	
    }
    display(){
    push()
   fill("#15ede9")
       translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    
    ellipseMode(RADIUS)
    ellipse(0,0,this.w)
    pop()
    }
    }