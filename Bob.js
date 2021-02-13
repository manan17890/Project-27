class Bob{
    constructor(x,y,radius){
        var options = {
            restitution : 1.2,
            friction : 1.2,
            density : 0.99
           
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        this.image = loadImage("Marble.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.body.circleRadius,this.body.circleRadius);
        pop();
    }
}