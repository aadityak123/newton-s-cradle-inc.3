class Ball{
  constructor(){
    var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2,
    }

    this.body = Bodies.circle(100,650,10,options)
    this.radius = 10;
    this.body.collide(ground)
    World.add(world, this.body)

  }
  display(){

    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(this.image, 0, 0, this.width, this.height);
    pop();


  }

}
