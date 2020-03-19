class Health {
    constructor(x, y, healAmount){
        this.body = Bodies.rectangle(x, y, 10, 10, {isStatic:true});
        this.body.label = "health";
        this.healAmount = healAmount;
        World.add(world, this.body);
    }

    show(){
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(255, 20, 20);
        ellipse(0, 0, 10, 10);
        pop();
    }

    interact(player){
        player.lives += this.healAmount;
    }
}

class Spike {
    constructor(x, y){
        this.body = Bodies.rectangle(x, y, 10, 10, {isStatic:true});
        World.add(world, this.body);
        this.body.label = "spike";
    }

    show(){
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(150, 150, 255);
        triangle(-5, 0, 0, -5, 5, 0);
        pop();
    }

    interact(player){
        player.lives --;
    }
}
