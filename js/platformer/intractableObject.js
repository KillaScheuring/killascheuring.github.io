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
        fill(objectColors.health[0], objectColors.health[1], objectColors.health[2]);
        ellipse(0, 0, 10, 10);
        pop();
    }

    remove(){
        World.remove(world, this.body);
    }

    interact(player){
        player.lives += this.healAmount;
        player.damgagedTimer = 0;
    }
}

class JumpBoost {
    constructor(x, y, boostAmount, duration){
        this.body = Bodies.rectangle(x, y, 10, 10, {isStatic:true});
        this.body.label = "jumpBoost";
        this.boost = 0.0025*boostAmount;
        this.multiplier = boostAmount;
        this.duration = duration;
        World.add(world, this.body);
    }

    show(){
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(objectColors.jump[0], objectColors.jump[1], objectColors.jump[2]);
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
            duration: this.duration,
            multiplier: this.multiplier
        });
    }
}

class NumJumpBoost {
    constructor(x, y, boostAmount, duration){
        this.body = Bodies.rectangle(x, y, 10, 10, {isStatic:true});
        this.body.label = "numJumpBoost";
        this.boost = boostAmount;
        this.duration = duration;
        World.add(world, this.body);
    }

    show(){
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(objectColors.maxNumJump[0], objectColors.maxNumJump[1], objectColors.maxNumJump[2]);
        ellipse(0, 0, 10, 10);
        pop();
    }

    remove(){
        World.remove(world, this.body);
    }

    interact(player){
        player.bonuses.push({
            name: "maxNumJump",
            value: this.boost,
            duration: this.duration,
            multiplier: this.boost
        });
    }
}

class SpeedBoost {
    constructor(x, y, boostAmount, duration){
        this.body = Bodies.rectangle(x, y, 10, 10, {isStatic:true});
        this.body.label = "speedBoost";
        this.boost = 0.5*boostAmount;
        this.multiplier = boostAmount;
        this.duration = duration;
        World.add(world, this.body);
    }

    show(){
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(objectColors.speed[0], objectColors.speed[1], objectColors.speed[2]);
        ellipse(0, 0, 10, 10);
        pop();
    }

    remove(){
        World.remove(world, this.body);
    }

    interact(player){
        player.bonuses.push({
            name: "speed",
            value: this.boost,
            duration: this.duration,
            multiplier: this.multiplier
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
        fill(objectColors.spike[0], objectColors.spike[1], objectColors.spike[2]);
        triangle(-this.size, this.size, 0, -this.size, this.size, this.size);
        pop();
    }

    remove(){
        World.remove(world, this.body);
    }

    interact(player){
        if(player.damgagedTimer > 0){
            return;
        }
        player.damgagedTimer = 90;
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
        fill(objectColors.portal[0], objectColors.portal[1], objectColors.portal[2]);
        rectMode(CENTER);
        rect(0, 0, 10, 20);
        pop();
    }

    remove(){
        World.remove(world, this.body);
    }

    interact(){
        GAME_LEVEL++;
        GAME_STATE = "WIN";
    }
}
