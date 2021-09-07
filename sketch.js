
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var myworld;
arr=[]
array=[]

function preload(){
	
  }

function setup() {
	createCanvas(500, 700);
	engine = Engine.create();
	myworld = engine.world;
   
	 ground=new Ground(250,700,width,20)
	
	Engine.run(engine);
	for (var i=25;i<500;i+=40){
	arr.push(new Box(i,50)	)
	if(i!=0&&i!=500){
	arr.push(new Box(i,150))
	if(i!=0&&i!=500){
	arr.push(new Box(i,250))
	if(i!=0&&i!=500)	{
	arr.push(new Box(i,350))
	}}}}

for (var p=40;p<500;p+=40){
arr.push(new Box(p,100)	)
if(i!=0&&i!=500){
arr.push(new Box(p,200))
if(i!=0&&i!=500){
arr.push(new Box(p,300))
if(i!=0&&i!=500)	{
arr.push(new Box(p,400))
}}}}

 
for (var j=0;j<500;j+=45){
arr.push(new D(j,600)	)
}

			
	 
}

function draw() {

  background("black");
    textSize(30)
  fill("green")
 
 
 

for( var i=0;i<arr.length;i++){
	arr[i].display()
}

if(frameCount% 60==0){
pa=new Particle(random(20,width-30),0,10,10)
array.push(pa)
}
for(var f=0;f<array.length;f++){
	array[f].display()
}
  
  ground.display()
}




