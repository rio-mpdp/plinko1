class D{
    constructor(x,y,w,h){
        this.w=10
        this.h=300
      
       this.body=Matter.Bodies.rectangle(x,y,this.w,this.h,{
      isStatic:true,
        restitution:0,
        friction:1,
        density:1
  
       })
   
    Matter.World.add(myworld,this.body)
    
    }
    display(){
    push()
    fill("red")
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    
    rectMode(CENTER)
    rect(0,0,this.w,this.h)
    pop()
    }
    }
  
      
      