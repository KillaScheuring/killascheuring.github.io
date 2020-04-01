class Platforms {
    constructor(x, y, w, h) {
        this.body = Bodies.rectangle(x, y, w, h, {isStatic: true});
        World.add(world, this.body);
        this.w = w;
        this.h = h;
        this.body.label = "platform";
        this.dist = null;
        this.objects = [];
    }

    show() {
        fill(currentLevelInfo.colors.platform[0], currentLevelInfo.colors.platform[1], currentLevelInfo.colors.platform[2]);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.w, this.h,);
        // fill(255);
        // textSize(12);
        // textAlign(CENTER);
        // text(`x: ${Math.floor(this.body.position.x)} y: ${Math.floor(this.body.position.y)}`, this.body.position.x, this.body.position.y);
    }

    remove() {
        World.remove(world, this.body);
    }

    add(object){
        this.objects.push(object);
    }
}

class Boundary extends Platforms {
    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.body.label = "boundary";
    }

    show() {
        fill(currentLevelInfo.colors.boundary[0], currentLevelInfo.colors.boundary[1], currentLevelInfo.colors.boundary[2]);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.w, this.h,);
    }

    remove() {
        World.remove(world, this.body);
    }
}

class MovingPlatform extends Platforms {
    constructor(x, y, w, h, minX, maxX) {
        super(x, y, w, h);
        this.body.label = "movingPlatform";
        this.player = null;
        this.maxX = maxX ? maxX : width/2-20;
        this.minX = minX ? minX : -width/2+20;
        this.vx = x > 0 ? -1 : 1;
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
}

