class Bob{
    constructor(x,y,diameter){

        var options = {
            'isStatic': false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
     this.body = Bodies.circle(x,y,diameter,options);
     this.diameter = diameter;
     World.add(world,this.body);
    }
    
     display(){

     var pos = this.body.position;
     push();
     translate(pos.x, pos.y);
     circle(0,0,diameter);
     pop();




     }
}