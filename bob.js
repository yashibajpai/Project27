class Bob {
    constructor (x,y,r){
        var options={
            isStatic: false,
            restitution: 0.8,
            friction: 0.5,
            density: 1.2, 
        } 
        this.body =  Bodies.circle(x,y,r,options)
        this.r = r 
        World.add(world,this.body)
    }
    display () {
     fill("white")
     ellipseMode(RADIUS)
     ellipse(this.body.position.x,this.body.position.y,this.r,this.r)



    }
}