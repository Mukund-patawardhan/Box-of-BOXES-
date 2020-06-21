const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boxes = [];
var slider;

function setup(){
    createCanvas(1300,650);

    engine = Engine.create();
    world= engine.world;

    ground1=new Ground(650,700,1300,300);
    ground2=new Ground(650,-100,1300,300);

    slider=createSlider(-30,30,0,1);
}

function draw(){
    background("teal");

    Engine.update(engine);

    engine.world.gravity.y=slider.value();

    ground1.display();
    ground2.display();

    for(var i=0;i<boxes.length;i=i+1){
        boxes[i].display();
    }

    this.slider.position(200,600);
    textSize(100);
    text(slider.value(),400,630);

}

function mousePressed(){
    if(mouseY<550){
    var box1=new Box(mouseX,mouseY,random(10,100),random(10,100));
    boxes.push(box1);
    }
}