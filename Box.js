class Box{
    constructor(x,y,width,height){
        var options={
            restitution:1,
            gravity:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.colours=['red','blue','green','pink','purple','brown','black','teal','magenta','orange','peachpuff','grey','violet','turquoise','coral','olive'];
        this.ran=random(this.colours);
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.ran);
        strokeWeight(4);
        stroke(this.ran);
        rect(0, 0, this.width, this.height);
        pop(); 
    }
}