class Bob {
    constructor(x,y) {
        var options={
            isStatic:false,
            restitution:1.2,
            friction:0,
            inertia: Infinity
        }
        this.body = Bodies.circle(x,y,15,options);
        this.radius = 15;

        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;

        fill("purple");
        push();
        ellipseMode(RADIUS);
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipse(0,0,15,15);
        pop();
    }
}