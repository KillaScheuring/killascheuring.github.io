class Boundary extends Platform{
    constructor(x, y, w, h){
        super(x, y, w, h);
        this.body.label = "boundary";
    }

    show(){
        fill(200);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.w, this.h,);
    }
}
