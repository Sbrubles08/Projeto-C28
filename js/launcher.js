class launcher{
    constructor(body, ancher){
        var lancador = {bodyA: body, pointB: ancher, stiffness: 0.004, length: 1}
        this.bodyA = body;
        this.pointB = ancher;
        this.launcher = Constraint.create(lancador);
        World.add(world, this.launcher);
    }
    display(){
        if(this.launcher.bodyA){
            strokeWeight(2)
            line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB.y);
        }
    }
    attach(body){
        this.launcher.bodyA=body
    }
    fly(){
        this.launcher.bodyA = null
    }
}