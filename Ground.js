class Ground{
  constructor(x,y,width,height){
    var options={
      isStatic:true,
    }

    this.ground = Bodies.rectangle(this.ground.x, this.ground.y, this.width, this.height)
    this.width = width;
    this.height = height;

    World.add(world,this.ground)
  }

  display(){

     push();
     translate(this.ground.position.x, this.ground.position.y);
     fill(0)
     rectMode(CENTER);
     rect(this.ground, this.ground.position.x, this.ground.position.y, this.width, this.height);
     pop();



  }
}
