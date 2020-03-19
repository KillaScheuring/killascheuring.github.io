class Platform {
    constructor(x, y, w, h) {
        this.body = Bodies.rectangle(x, y, w, h, {isStatic: true});
        World.add(world, this.body);
        this.w = w;
        this.h = h;
        this.body.label = "platform";
    }

    show(){
        fill(colors.platform[0], colors.platform[1], colors.platform[2]);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.w, this.h,);
    }

    remove(){
        World.remove(world, this.body);
    }
}
