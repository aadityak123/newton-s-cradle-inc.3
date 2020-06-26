class Roof{
    constructor(){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(400,100,400,20,options);
        this.width = 200;
        this.height = 10;
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        rect(400,100,400,20)
    }
}