class Player {
    constructor(x, y){
        this.w = 30;
        this.h = 30;
        this.body = Bodies.rectangle(x, y, this.w, this.h);
        World.add(world, this.body);
        this.body.label = "player";
        this.numJumps = 0;
        this.lives = 3;
    }

    jump(){
        if(this.numJumps < 2){
            Body.applyForce(this.body, this.body.position, createVector(0, -0.03));
            this.numJumps++;
        }
    }

    resetJumps(){
        this.numJumps = 0;
    }

    move(direction){
        Body.setVelocity(this.body, createVector(direction*2, this.body.velocity.y));
    }

    show() {
        push();
        translate(width/2, this.body.position.y);
        let y = -height/2-140;
        for(let livesIndex = 0; livesIndex < this.lives; livesIndex++){
            let x = (livesIndex%6)*30 - width+40;
            y += (livesIndex%6) === 0 ? 30: 0;
            fill(255, 75, 75);
            ellipse(x, y, 20, 20);
        }
        pop();
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill(255, 55, 255);
        rect(0, 0, this.h, this.w);
        pop();
    }

    reset(){
        this.body.position.x = 0;
        this.body.position.y = 0;
        this.lives = 3;
        this.numJumps = 0;
    }
}
