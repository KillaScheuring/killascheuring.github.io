class MovingPlatform extends Platform {
    constructor(x, y, w, h, minX, maxX) {
        super(x, y, w, h);
        this.body.label = "movingPlatform";
        this.player = null;
        this.maxX = maxX ? maxX : width/2-20;
        this.minX = minX ? minX : -width/2+20;
        this.vx = x > 0 ? -1 : 1;
        this.objects = [];
    }

    move(){
        let pos = this.body.position;
        Body.translate(this.body, createVector(this.vx, 0));
        if(this.player && this.player.body.position.y > pos.y - this.h - this.player.h){
            Body.translate(this.player.body, createVector(this.vx, 0));
        }
        for(let object of this.objects){
            if(object.body){
                Body.translate(object.body, createVector(this.vx, 0));
            }
        }
        if((pos.x+this.w/2 >= this.maxX && this.vx > 0) || (pos.x-this.w/2 <= this.minX && this.vx < 0)){
            this.vx *= -1;
        }
    }

    attach(player){
        this.player = player;
        this.player.attach(this);
    }

    detach(){
        if(this.player){
            Body.setVelocity(this.player.body, createVector(this.vx, this.player.body.velocity.y));
        }
        this.player = null;
    }

    add(object){
        this.objects.push(object);
    }
}
