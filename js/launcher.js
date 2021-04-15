class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
        
    }

    fly(){
        this.launcher.bodyA = null;
    }
attach(body1){
    this.launcher.bodyA=body1
}
    display(){
        
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            
            stroke(48,22,8)
            if(pointA.x<220){
                strokeWeight(10);
            
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
            image(this.launcher3,pointA.x-25,pointA.y-10,15,30)
            }
            else{
                strokeWeight(3);
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
            image(this.launcher3,pointA.x+25,pointA.y-10,15,30)
            }
        }
    }
    
}