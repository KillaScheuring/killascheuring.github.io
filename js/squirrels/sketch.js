let squirrels = Array(10);
const offset = 50;

function setup() {
    // Set up canvas
    createCanvas(500, 500);

    // Generate initial squirrels
    for(let i = 0; i < squirrels.length; i++){
        // Get this squirrel's spawn location
        let spawn = pickRandomSpawn();
        // create the squirrel
        squirrels[i] = new Squirrel(spawn.x, spawn.y);
        // Set this squirrel in motion
        squirrels[i].moveToTarget(width/2, (height));
    }
}

function draw() {
    // Color background
    background(76, 199, 70);

    // Occasionally generate more squirrels until max reached
    if(random() < 0.03 && squirrels.length < 40){
        // Get the generated squirrel's spawn location
        let spawn = pickRandomSpawn();
        // create the squirrel
        let newSquirrel = new Squirrel(spawn.x, spawn.y);
        // push to the squirrel array
        squirrels.push(newSquirrel);
        // Set this squirrel in motion
        newSquirrel.moveToTarget(width/2, (height));
    }

    // Loop through the squirrels, update them, and show their location
    for(let squirrel of squirrels){
        squirrel.update();
        squirrel.show();

        // If squirrel finished death animation, remove from array
        if(squirrel.color[3] <= 0){
            squirrels.splice(squirrels.indexOf(squirrel), 1);
        }
    }

    // Draw target and "car"
    fill(0);
    rect(width/2-50, (height-50), 100, 50);
    fill(0, 255, 0);
    ellipse(width/2, (height-50), 5, 5);
}

// Generates a spawn point on part of a circle around the center
function pickRandomSpawn(){
    // get a random angle on the circle
    let randomAngle = random((Math.PI/2) + (Math.PI/8), ((3*Math.PI)/2)-(Math.PI/8));

    // get the x and y position from that angle
    let xPos = (Math.sin(randomAngle)*(width+100)/2+width/2);
    let yPos = (Math.cos(randomAngle)*(height+100)/2)+height/2;

    // return a vector with those x and y positions
    return createVector(xPos, yPos);
}

// check if squirrel is clicked
function mouseClicked(){
    // Loop through squirrels
    for(let i = 0; i < squirrels.length; i++){
        // ask this squirrel if it got hit
        squirrels[i].hit(mouseX, mouseY);
    }
}

