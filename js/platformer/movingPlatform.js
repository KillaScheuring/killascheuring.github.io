class MovingPlatform extends Platform {
    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.body.label = "movingPlatform";
        this.body.friction = 0.9;
        this.body.frictionStatic = 0.9;
        // Body.setStatic(this.body, false);
        this.vx = x > 0 ? -1 : 1;
    }

    move(){
        let pos = this.body.position;
        Body.translate(this.body, createVector(this.vx, 0));
        //|| pos.x+this.w/2 >= width/2-10
        //pos.x-this.w/2 <= -width/2+10
        if((pos.x+this.w/2 >= width/2-20 && this.vx > 0) || (pos.x-this.w/2 <= -width/2+20 && this.vx < 0)){
            this.vx *= -1;
        }
    }
}
