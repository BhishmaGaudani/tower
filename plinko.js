class pinko{
    constructor(x,y){
        var option ={
            isStatci:true
        }
        this.body=body.circle(x,y,10,option);
        this.radius=10;

        World.add(world,this.body);

    }
    display(){
        varpos=this.body.position;
        noStroke();
        FileList("grey");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
    }
}