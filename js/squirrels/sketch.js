let squirrels = [];
let game_state = "START";
const INITIAL_SQUIRRELS = 10;
const MAX_SQUIRRELS = 20;
let squirrelNames = [];

let car = {};

const POSSIBLE_NAMES = [
    "Joey",
    "Mickey",
    "Thomas",
    "Daniel",
    "Dan",
    "Tom",
    "Benjamin",
    "Ben",
    "Adam",
    "Samuel",
    "Sammy",
    "John",
    "Luke",
    "James",
    "Jamie",
    "Nathan",
    "Joshua",
    "Josh",
    "Jacob",
    "Aaron",
    "David",
    "Dave",
    "Matthew",
    "Matt",
    "Ethan",
    "Robert",
    "Bob",
    "Robbie",
    "Oliver",
    "Ollie",
    "Jack",
    "William",
    "Richard",
    "Ricky",
    "Rick",
    "Dick",
    "Rich",
    "Harry",
    "Christopher",
    "Chris",
    "Harrison",
    "Jake",
    "Edward",
    "Charles",
    "Charlie",
    "Dewey",
    "Liam",
    "Henry",
    "Heinz",
    "Louis",
    "Marcus",
    "Angel",
    "Rhodes",
    "Jesse",
    "Joel",
    "Alvan",
    "Zechariah",
    "Malachi",
    "Jasper",
    "Mark",
    "Amber",
    "Martha",
    "Phoebe",
    "Elizabeth",
    "Liza",
    "Hannah",
    "Anna",
    "Abigail",
    "Chloe",
    "Mary",
    "Rebecca",
    "Becca",
    "Sarah",
    "Sadie",
    "Emily",
    "Emma",
    "Millie",
    "Holly",
    "Jessica",
    "Jessie",
    "Jess",
    "Poppy",
    "Freya",
    "Isabella",
    "Bella",
    "Nicole",
    "Niki",
    "Amelia",
    "Florence",
    "Ellie",
    "Molly",
    "Sophie",
    "Alice",
    "Allie",
    "Eleanor",
    "Leora",
    "Mia",
    "Jasmine",
    "Ella",
    "Amy",
    "Megan",
    "Meg",
    "Zoe",
    "Adria",
    "Sha",
    "Mariah",
    "Brook",
    "Tabitha",
    "Naomi",
    "Olive",
    "Claudia",
    "Jo-Anna",
    "Deborah",
    "Ira",
    "Livia",
    "Magdalene",
    "Alena",
    "Micah ",
    "Mia",
    "Liz"];

function setup() {
    // Set up canvas
    createCanvas(1000, 750);
    car = {
        lives: 3,
        h: 50,
        w: 60,
        x: width / 2 - 50,
        y: (height - 50),
        win: false
    };
}

function draw() {
    if (game_state === "START") {
        background(228, 230, 140);
        fill(0);
        text("Click to start", width / 2 - width / 10, height / 2);
        if (mouseIsPressed) {
            game_state = "RUNNING";
        }
    }
    else if (game_state === "RUNNING") {
        // Color background
        background(76, 199, 70);

        // Occasionally generate more squirrels until max reached
        if (random() < 0.03 && squirrels.length < MAX_SQUIRRELS) {
            // select the generated squirrel's spawn location
            let spawn = pickRandomSpawn();
            // create the squirrel
            let newSquirrel = new Squirrel(spawn.x, spawn.y);
            // push to the squirrel array
            squirrels.push(newSquirrel);
            // Set this squirrel in motion
            newSquirrel.moveToTarget(car.x, car.y);
        }

        // Loop through the squirrels, update them, and show their location
        for (let squirrel of squirrels) {
            squirrel.update();
            squirrel.show();
            if (dist(squirrel.x, squirrel.y, car.x, car.y) < squirrel.r*1.1) {
                car.lives--;
                squirrels.splice(squirrels.indexOf(squirrel), 1);
            }
            // If squirrel finished death animation, remove from array
            if (squirrel.color[3] <= 0) {
                squirrelNames.push(squirrel.name);
                squirrels.splice(squirrels.indexOf(squirrel), 1);
            }
        }
        if(car.lives <= 0){
            game_state = "GAME_OVER";
            squirrels = [];
        }
        if(squirrelNames.length > 10){
            game_state = "GAME_OVER";
            squirrels = [];
            car.win = true;
        }
    }
    else if (game_state === "GAME_OVER") {
        background(171, 171, 171);
        fill(0);
        text("Game Over Click to try again in", width / 2 - width / 10, height / 2);
        text("Game Over Click to try again in", width / 2 - width / 10, height / 2  + 20);
        text("Squirrels Killed", width / 2 - width / 10, height / 2 + 30);

        if (mouseIsPressed) {
            squirrelNames = [];
            car.lives = 3;
            car.win = false;
            game_state = "RUNNING";
        }
    }

    // Draw target and "car"
    fill(0);
    rect(car.x, car.y, car.w, car.h);
    fill(0, 255, 0);
    ellipse(car.x, car.y, 5, 5);
}

// Generates a name and has a chance to add a flourish
function pickRandomName() {
    let name = random(POSSIBLE_NAMES);
    if (random() > 0.95) {
        let newName = "That ";
        newName += random() > 0.5 ? "bastard " : "b**** ";
        name = newName + name;
    }

    console.log(name);

    return name;

}

// Generates a spawn point on part of a circle around the center
function pickRandomSpawn() {
    // get a random angle on the circle
    let randomAngle = random((Math.PI / 2) + (Math.PI / 8), ((3 * Math.PI) / 2) - (Math.PI / 8));

    // get the x and y position from that angle
    let xPos = (Math.sin(randomAngle) * (width + 100) / 2 + width / 2);
    let yPos = (Math.cos(randomAngle) * (height + 100) / 2) + height / 2;

    // return a vector with those x and y positions
    return createVector(xPos, yPos);
}

// check if squirrel is clicked
function mouseClicked() {
    // Loop through squirrels
    for (let i = 0; i < squirrels.length; i++) {
        // ask this squirrel if it got hit

        squirrels[i].hit(mouseX, mouseY);
    }
    if (game_state === "RUNNING") {

    }
}

