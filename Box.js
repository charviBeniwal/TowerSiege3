class Box{
  constructor(x, y, radius){
      var options={
          isStatic: false,
          restitution: 0.5,
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world,this.body);
  }
  display(){
      var pos = this.body.position;
      ellipseMode(RADIUS);
      fill(169,116,227);
      ellipse(pos.x, pos.y, this.radius, this.radius);
  }
}
