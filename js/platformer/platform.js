class Platform {
    constructor(x, y, w, h) {
        this.body = Bodies.rectangle(x, y, w, h, {isStatic: true});
        World.add(world, this.body);
        this.w = w;
        this.h = h;
        this.body.label = "platform";
        this.dist = null;
    }

    show() {
        fill(currentLevelInfo.colors.platform[0], currentLevelInfo.colors.platform[1], currentLevelInfo.colors.platform[2]);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.w, this.h,);
        // fill(255);
        // textAlign(CENTER);
        // text(`dist: ${this.dist}`, this.body.position.x, this.body.position.y);
    }

    remove() {
        World.remove(world, this.body);
    }
}
