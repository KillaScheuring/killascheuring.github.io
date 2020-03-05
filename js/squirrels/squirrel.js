class Squirrel {
    // Generate squirrel and set info
    constructor(x, y) {
        // set position
        this.x = x;
        this.y = y;

        // set velocity to (0, 0)
        this.v = createVector();

        // set color, default https://www.color-hex.com/color/a0522d
        this.color = [160, 82, 45, 255];
        // set size of the squirrel
        this.r = 20;

        // set number of lives (will be determined by level later)
        this.lives = 2;
        // current stun time
        this.stunned = 0;
    }


    // render the squirrel
    show() {
        noStroke();
        fill(this.color[0], this.color[1], this.color[2], this.color[3]);
        // currently a circle
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    // set velocity
    setVelocity(vx, vy) {
        // default for either velocities is 0
        vx = vx ? vx : 0;
        vy = vy ? vy : 0;

        // set the current velocity
        this.v.x = vx;
        this.v.y = vy;
    }

    // update squirrel's info
    update() {
        // run death animation if lives is less than or equal to zero
        if(this.lives <= 0){
            // Current death animation is turning redder and fading the alpha
            this.color[3] -= 10;
        } // run stunned animation
        else if(this.stunned > 0){
            // Current stunned animation is getting redder then fading to default color
            this.color[0] = 160+(this.stunned*5);
            this.stunned -= 1;
        } else {
            //  set red to default in case steps are off in the stunned animation
            this.color[0] = 160;
            // if no other condition move by velocity
            this.x += this.v.x;
            this.y += this.v.y;
        }
    }


    // calculates unit vector to move to a given position
    moveToTarget(xPos, yPos) {
        let vPos = createVector(xPos, yPos);
        let vectorDiff = createVector(vPos.x - this.x, vPos.y - this.y);
        let amplitude = Math.pow(vectorDiff.x * vectorDiff.x + vectorDiff.y* vectorDiff.y, .5)*2;
        console.log(amplitude);
        let newVector = createVector(vectorDiff.x/amplitude, vectorDiff.y/amplitude);
        this.setVelocity(newVector.x, newVector.y);
    }


    // sets info if killed
    killed(){
        // turned redder
        this.color[0] = 160+(this.stunned*5);
        // stops moving
        this.v = createVector();
    }


    // check if hit
    hit(checkX, checkY) {
        // finds distance from mouse to squirrel
        let d = dist(checkX, checkY, this.x, this.y);

        // if mouse within 10% of the squirrel, it's a hit
        if (d < this.r * 1.1) {
            // set stunned time 30 frames
            this.stunned = 30;

            // reduces lives by one
            this.lives -= 1;

            // checks if killed
            if(this.lives <= 0){this.killed()}

            // returns hit true
            return true;
        }
        // if we get here there wasn't a hit
        return false;
    }
}
