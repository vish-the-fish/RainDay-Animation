class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
      
        this.umbrella = Bodies.circle(x,y,100,options);
        this.width = 100;
        this.height = 200;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        fill(0);
       ellipseMode(CENTER);
       ellipse(pos.x,pos.y+70,this.width, this.height);
      
    }
}