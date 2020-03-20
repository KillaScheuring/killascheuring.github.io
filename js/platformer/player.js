class Player {
    constructor(x, y){
        this.w = 30;
        this.h = 30;
        this.body = Bodies.rectangle(x, y, this.w, this.h);
        World.add(world, this.body);
        this.body.label = "player";
        this.numJumps = 0;
        this.bonuses = [];
        this.lives = 3;
        this.damgagedTimer = 0;
        this.baseStats = {
            jump: 0.03,
            speed: 2,
        };
        this.stats = {...this.baseStats};
    }

    jump(){
        if(this.numJumps < 2){
            Body.applyForce(this.body, this.body.position, createVector(0, -this.stats.jump));
            this.numJumps++;
        }
    }

    resetJumps(){
        this.numJumps = 0;
    }

    move(direction){
        Body.setVelocity(this.body, createVector(direction*this.stats.speed, this.body.velocity.y));
    }

    update(){
        this.stats = {...this.baseStats};
        for(let bonusIndex = this.bonuses.length-1; bonusIndex >= 0; bonusIndex--){
            this.bonuses[bonusIndex].duration --;
            if(this.bonuses[bonusIndex].duration > 0){
                this.stats[this.bonuses[bonusIndex].name] += this.bonuses[bonusIndex].value;
            } else if(this.bonuses[bonusIndex].duration < 0){
                this.bonuses.splice(bonusIndex, 1);
            }
        }
        if(this.damgagedTimer > 0){
            this.damgagedTimer--;
        }
    }

    show() {
        push();
        translate(width/2, this.body.position.y -height/2-140);
        let y = 0;
        for(let livesIndex = 0; livesIndex < this.lives; livesIndex++){
            let x = (livesIndex%6)*30 - width+40;
            y += (livesIndex%6) === 0 ? 30: 0;
            fill(255, 75, 75);
            ellipse(x, y, 20, 20);
        }
        y = 0;
        for(let bonusIndex = 0; bonusIndex < this.bonuses.length; bonusIndex++){
            let x = -80;
            y += 30;
            textAlign(CENTER);
            fill(255);
            text(`${Math.ceil(this.bonuses[bonusIndex].duration/60)}s`, x-30, y+5);
            fill(objectColors[this.bonuses[bonusIndex].name][0],
                objectColors[this.bonuses[bonusIndex].name][1],
                objectColors[this.bonuses[bonusIndex].name][2]);
            ellipse(x, y, 20, 20);
            fill(255);
            text(`x${this.bonuses[bonusIndex].multiplier}`, x+30, y+5);
        }
        pop();

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        if(this.damgagedTimer > 0){
            fill(min(colors.player[0]+(this.damgagedTimer%10 * 20), 255),
                max(colors.player[1]-(this.damgagedTimer%10 * 20), 0),
                max(colors.player[2]-(this.damgagedTimer%10 * 20), 0),
                map(this.damgagedTimer%10, 0, 9, 100, 255)
            );
        } else {
            fill(min(colors.player[0]+(this.damgagedTimer%10 * 20), 255),
                max(colors.player[1]-(this.damgagedTimer%10 * 20), 0),
                max(colors.player[2]-(this.damgagedTimer%10 * 20), 0)
            );
        }

        rect(0, 0, this.h, this.w);
        pop();
    }

    remove(){
        World.remove(world, this.body);
    }
}
