class Health {
    constructor(x, y, healAmount, id){
        this.body = Bodies.rectangle(x, y, 10, 10, {isStatic:true});
        this.body.label = `h${id}`;
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
