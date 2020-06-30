class Boxes {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
      
      if(this.body.speed < 3){
        push();
        var pos =this.body.position;
        rectMode(CENTER);
        fill(253,179,29);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255, this.Visibility);
        pop();
      }
    }
    score(){
      if(this.Visibility < 0 && this.Visibility > -1005){
        score = score+1;
      }
    }
  }
