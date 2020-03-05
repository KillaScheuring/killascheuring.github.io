let squirrels = Array(5);
const offset = 50;

function setup() {
    createCanvas(500, 500);
    for(let i = 0; i < squirrels.length; i++){
        squirrels[i]=new Squirrel(offset + i * offset, 20);
    }
}

function draw() {
    background(76, 199, 70);
    fill(0);
    rect(width/2-50, height-50, 100, 50);
    for(let i = 0; i < squirrels.length; i++){
        squirrels[i].move(0, .5);
        squirrels[i].show();
    }
    fill(255);
    text("mouseX: " + mouseX, width*.66, 20);
    text("mouseY: " + mouseY, width*.66, 40);
}

function mouseClicked(){
    for(let i = 0; i < squirrels.length; i++){
        if(squirrels[i].killed(mouseX, mouseY)){
            squirrels[i] = new Squirrel(offset + i * offset, 20);
        }
    }
}

class Squirrel {
    constructor(x, y) {
        this.y = y;
        this.x = x;
        this.color = [160,82,45];
        this.r = 20;
    }

    show() {
        noStroke();
        fill(this.color[0], this.color[1], this.color[2]);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    move(vx, vy){
        vx = vx ? vx : 0;
        vy = vy ? vy : 0;
        this.x += vx;
        this.y += vy;
    }

    killed(checkX, checkY){
        console.log("check!");
        let d = dist(checkX, checkY, this.x, this.y);
        if(d < this.r*1.1){
            this.color = [255, 255, 255];
            return true;
        }
        return false;
    }
}
