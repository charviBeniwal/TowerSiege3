class Hanger{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB : pointB,
            stiffness: 0.03,
            length: 2
        }
        this.pointB = pointB;
        this.hanger = Constraint.create(options);
        World.add(world, this.hanger);
    }

    display(){
       if(this.hanger.bodyA){
            var pointA = this.hanger.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
       }
    }
     fly(){
        this.hanger.bodyA = null
    }

    attach(body){
        this.hanger.bodyA = body;
    }
    
}