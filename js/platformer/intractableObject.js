class Health {
    constructor(x, y, healAmount) {
        this.w = 10 + 5 * (healAmount - 1);
        this.h = 10 + 5 * (healAmount - 1);
        this.body = Bodies.rectangle(x, y - 10 - this.h / 2, this.w, this.h, {isStatic: true});
        this.body.label = "health";
        this.healAmount = healAmount;
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(objectColors.health[0], objectColors.health[1], objectColors.health[2]);
        ellipse(0, 0, this.w, this.h);
        pop();
    }

    remove() {
        World.remove(world, this.body);
    }

    interact(player) {
        if (player.lives < player.maxLives) {
            player.lives =
                (player.lives + this.healAmount) > player.maxLives ?
                    player.maxLives :
                    player.lives + this.healAmount;
        }
        player.damgagedTimer = 0;
    }
}

class MaxHealth {
    constructor(x, y) {
        this.w = 10;
        this.h = 10;
        this.body = Bodies.rectangle(x, y - 10 - this.h / 2, this.w, this.h, {isStatic: true});
        this.body.label = "maxHealth";
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(objectColors.maxHealth[0], objectColors.maxHealth[1], objectColors.maxHealth[2]);
        ellipse(0, 0, this.w, this.h);
        pop();
    }

    remove() {
        World.remove(world, this.body);
    }

    interact(player) {
        player.maxLives++;
        player.lives = player.maxLives;
        player.damgagedTimer = 0;
    }
}

class JumpBoost {
    constructor(x, y, boostAmount, duration) {
        this.w = 10 + 5 * (boostAmount - 1);
        this.h = 10 + 5 * (boostAmount - 1);
        this.body = Bodies.rectangle(x, y - 10 - this.h / 2, this.w, this.h, {isStatic: true});
        this.body.label = "jump";
        this.boost = 0.0025 * boostAmount;
        this.multiplier = boostAmount;
        this.duration = duration;
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(objectColors.jump[0], objectColors.jump[1], objectColors.jump[2]);
        ellipse(0, 0, this.w, this.h);
        pop();
    }

    remove() {
        World.remove(world, this.body);
    }

    interact(player) {
        player.bonuses.push({
            name: "jump",
            value: this.boost,
            duration: this.duration,
            multiplier: this.multiplier
        });
    }
}

class NumJumpBoost {
    constructor(x, y, boostAmount, duration) {
        this.w = 10 + 5 * (boostAmount - 1);
        this.h = 10 + 5 * (boostAmount - 1);
        this.body = Bodies.rectangle(x, y - 10 - this.h / 2, this.w, this.h, {isStatic: true});
        this.body.label = "maxNumJump";
        this.boost = boostAmount;
        this.multiplier = boostAmount;
        this.duration = duration;
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(objectColors.maxNumJump[0], objectColors.maxNumJump[1], objectColors.maxNumJump[2]);
        ellipse(0, 0, this.w, this.h);
        pop();
    }

    remove() {
        World.remove(world, this.body);
    }

    interact(player) {
        player.bonuses.push({
            name: "maxNumJump",
            value: this.boost,
            duration: this.duration,
            multiplier: this.boost
        });
    }
}

class SpeedBoost {
    constructor(x, y, boostAmount, duration) {
        this.w = 10 + 5 * (boostAmount - 1);
        this.h = 10 + 5 * (boostAmount - 1);
        this.body = Bodies.rectangle(x, y - 10 - this.h / 2, this.w, this.h, {isStatic: true});
        this.body.label = "speed";
        this.boost = 0.5 * boostAmount;
        this.multiplier = boostAmount;
        this.duration = duration;
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(objectColors.speed[0], objectColors.speed[1], objectColors.speed[2]);
        ellipse(0, 0, this.w, this.h);
        pop();
    }

    remove() {
        World.remove(world, this.body);
    }

    interact(player) {
        player.bonuses.push({
            name: "speed",
            value: this.boost,
            duration: this.duration,
            multiplier: this.multiplier
        });
    }
}

class Spike {
    constructor(x, y) {
        this.size = 10;
        this.body = Bodies.rectangle(x, y - 10 - this.size, this.size * 2, this.size * 2, {isStatic: true});
        World.add(world, this.body);
        this.body.label = "spike";
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(objectColors.spike[0], objectColors.spike[1], objectColors.spike[2]);
        triangle(-this.size, this.size, 0, -this.size, this.size, this.size);
        pop();
    }

    remove() {
        World.remove(world, this.body);
    }

    interact(player) {
        if (player.damgagedTimer > 0) {
            return;
        }
        player.damgagedTimer = 90;
        player.lives--;
    }
}


class Portal {
    constructor(x, y, type) {
        this.type = typeof type === "string" ? type : "NEXT_LEVEL";
        this.w = 30;
        this.h = 50;
        this.body = Bodies.rectangle(x, y - 10 - this.h / 2, this.w, this.h, {isStatic: true});
        World.add(world, this.body);
        this.body.label = "portal";
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        if (this.type === "NEXT_LEVEL") {
            fill(objectColors.portal[0], objectColors.portal[1], objectColors.portal[2]);

            rectMode(CENTER);
            rect(0, 0, this.w, this.h);
        } else if (this.type === "BONUS_LEVEL") {
            fill(objectColors.bonusPortal[0], objectColors.bonusPortal[1], objectColors.bonusPortal[2], 100);
            rectMode(CENTER);
            rect(0, 0, this.w, this.h);
        }

        pop();
    }

    remove() {
        World.remove(world, this.body);
    }

    interact() {
        if (this.type === "NEXT_LEVEL") {
            if (camera.orientation === "VERTICAL") {
                GAME_LEVEL++;
            }
            GAME_STATE = "WIN";
            camera.orientation = "VERTICAL";
        } else if (this.type === "BONUS_LEVEL") {
            GAME_STATE = "WIN";
            camera.orientation = "HORIZONTAL";
        }
    }
}
