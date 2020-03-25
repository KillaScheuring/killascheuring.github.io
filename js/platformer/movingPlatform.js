class MovingPlatform extends Platform {
    constructor(x, y, w, h, minX, maxX) {
        super(x, y, w, h);
        this.body.label = "movingPlatform";
        this.maxX = maxX ? maxX : width/2-20;
        this.minX = minX ? minX : -width/2+20;
        this.vx = x > 0 ? -1 : 1;
    }

    move(){
        let pos = this.body.position;
        Body.translate(this.body, createVector(this.vx, 0));
        //|| pos.x+this.w/2 >= width/2-10
        //pos.x-this.w/2 <= -width/2+10
        if((pos.x+this.w/2 >= this.maxX && this.vx > 0) || (pos.x-this.w/2 <= this.minX && this.vx < 0)){
            this.vx *= -1;
        }
    }


}
