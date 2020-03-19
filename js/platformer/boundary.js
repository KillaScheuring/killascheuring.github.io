class Boundary extends Platform{
    constructor(x, y, w, h){
        super(x, y, w, h);
        this.body.label = "boundary";
    }

    show(){
        fill(colors.boundary[0], colors.boundary[1], colors.boundary[2]);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.w, this.h,);
    }

    remove(){
        World.remove(world, this.body);
    }
}
