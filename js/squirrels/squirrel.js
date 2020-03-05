class Squirrel {
    // Generate squirrel and set info
    constructor(x, y) {
        // set position
        this.x = x;
        this.y = y;
        this.name = pickRandomName();

        // set velocity to (0, 0)
        this.v = createVector();


        // set size of the squirrel
        this.r = 20;

        this.level = random();
        if (this.level > 0.99) {
            this.level = 1;
        }
        else if (this.level > 0.95) {
            this.level = 1;
        }
        else if (this.level > 0.80) {
            this.level = 3;
        }
        else if (this.level > 0.60) {
            this.level = 2;
        }
        else {
            this.level = 1;
        }

        // higher level squirrels are faster
        this.speed = 0.50 * this.level;

        // set color, default https://www.color-hex.com/color/a0522d
        // 160, 82, 45
        this.color = [160 - 40 * this.level, 82 - 20 * this.level, 45 - 50 * this.level, 255];

        // set number of lives (will be determined by level later)
        this.lives = this.level;
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
        if (this.lives <= 0) {
            // Current death animation is turning redder and fading the alpha
            this.color[3] -= 10;
        } // run stunned animation
        else if (this.stunned > 0) {
            // Current stunned animation is getting redder then fading to default color
            this.color[0] = 160 - 40 * this.level + (this.stunned * 5);
            this.stunned -= 1;
        } else {
            //  set red to default in case steps are off in the stunned animation
            this.color[0] = 160 - 40 * this.level;
            // if no other condition move by velocity
            this.x += this.v.x;
            this.y += this.v.y;
        }
    }


    // calculates unit vector to move to a given position
    moveToTarget(xPos, yPos) {
        let vPos = createVector(xPos, yPos);
        let vectorDiff = createVector(vPos.x - this.x, vPos.y - this.y);
        let amplitude = Math.pow(vectorDiff.x * vectorDiff.x + vectorDiff.y * vectorDiff.y, .5) / this.speed;
        let newVector = createVector(vectorDiff.x / amplitude, vectorDiff.y / amplitude);
        this.setVelocity(newVector.x, newVector.y);
    }


    // sets info if killed
    killed() {
        // turned redder
        this.color[0] = 160 + (this.stunned * 5);
        // stops moving
        this.v = createVector();
    }


    // check if hit
    hit(checkX, checkY) {
        // finds distance from mouse to squirrel
        let d = dist(checkX, checkY, this.x, this.y);

        // if mouse within 10% of the squirrel, it's a hit
        if (d < this.r * .9) {
            // set stunned time 30 frames
            this.stunned = 200 / this.level;

            // reduces lives by one
            this.lives -= 1;

            // checks if killed
            if (this.lives <= 0) {
                this.killed()
            }

            // returns hit true
            return true;
        }
        // if we get here there wasn't a hit
        return false;
    }
}
