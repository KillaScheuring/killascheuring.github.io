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
        fill(colors.health[0], colors.health[1], colors.health[2]);
        ellipse(0, 0, 10, 10);
        pop();
    }

    remove(){
        World.remove(world, this.body);
    }

    interact(player){
        player.lives += this.healAmount;
    }
}

class JumpBoost {
    constructor(x, y, boostAmount, duration){
        this.body = Bodies.rectangle(x, y, 10, 10, {isStatic:true});
        this.body.label = "jumpBoost";
        this.boost = 0.0025*boostAmount;
        this.duration = duration;
        World.add(world, this.body);
    }

    show(){
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(colors.jump[0], colors.jump[1], colors.jump[2]);
        ellipse(0, 0, 10, 10);
        pop();
    }

    remove(){
        World.remove(world, this.body);
    }

    interact(player){
        player.bonuses.push({
            name: "jump",
            value: this.boost,
            duration: this.duration
        });
        console.log({
            name: "jump",
            value: this.boost,
            duration: this.duration
        });
    }
}

class Spike {
    constructor(x, y){
        this.size = 10;
        this.body = Bodies.rectangle(x, y, this.size*2, this.size*2, {isStatic:true});
        World.add(world, this.body);
        this.body.label = "spike";
    }

    show(){
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(colors.spike[0], colors.spike[1], colors.spike[2]);
        triangle(-this.size, this.size, 0, -this.size, this.size, this.size);
        pop();
    }

    remove(){
        World.remove(world, this.body);
    }

    interact(player){
        player.lives--;
    }
}



class Portal {
    constructor(x, y){
        this.body = Bodies.rectangle(x, y, 10, 20, {isStatic:true});
        World.add(world, this.body);
        this.body.label = "portal";
    }

    show(){
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(colors.portal[0], colors.portal[1], colors.portal[2]);
        rectMode(CENTER);
        rect(0, 0, 10, 20);
        pop();
    }

    remove(){
        World.remove(world, this.body);
    }

    interact(){
        GAME_STATE = "WIN";
    }
}
