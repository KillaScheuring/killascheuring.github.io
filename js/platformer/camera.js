class Camera {
    constructor() {
        this.y = 0;
        this.targetY = this.y;
        this.vy = 1;
    }

    update(){
        // if((this.y - this.targetY) < 0){
        //     this.y += this.vy;
        // } else if ((this.y - this.targetY) > 0){
        //     this.y -= this.vy;
        // }
        // if(Math.abs(this.y - this.targetY) < 5){
        //     this.targetY = Math.abs(this.y);
        // }
    }

    setTarget(target){
        this.targetY = target;
    }
}
