// initialize array to hold squirrels
let squirrels = [];

// Initialize game state
let game_state = "START";

// set time out to 5 seconds (60 fps)
let timeOut = 60 * 5;

// set number of squirrels generated in this wave
let numSquirrelsInWave = 0;

// set number of squirrels to be generated this wave (will be replaced by waveInfo[i].waveSize
let waveSize = 40;

// used for player advancement (TODO implement)
let waveInfo = [
    {
        waveSize: 40,
        levelRates: [0.99, 0.95, 0.80, 0.60],
        baseSpeed: 0.5,
        rateOfSpawn: 0.03
    }
];
// used for player advancement (TODO implement)
let waveIndex = 1;

// initialize car object
let car = {};

// Initialize array for all squirrels killed names
let squirrelNames = [];

// List of possible names
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
    let cnvs = createCanvas(1000, 750);
    cnvs.parent("canvas");
    textSize(24);
    car = {
        lives: 5,
        h: 100,
        w: width / 2,
        x: (width / 2),
        y: (height - 50),
        win: false
    };
}

function draw() {
    // Check the game state
    if (game_state === "START") {
        // set background color for start
        background(228, 230, 140);
        fill(0);
        // If start prompt the user to begin the game
        text("Click to start", width / 2 - width / 12, height / 2);
        // check if player wants to start
        if (mouseIsPressed) {
            game_state = "RUNNING";
        }
    } else if (game_state === "RUNNING") {

        // Background color
        background(76, 199, 70);

        fill(0);
        // Show the player the score
        textSize(24);
        text("number of squirrels squished: " + squirrelNames.length, 10, 40);

        // Occasionally generate more squirrels until max reached
        generateWave(waveSize, 0.3);

        // Loop through the squirrels, update them, and show their location
        for (let squirrel of squirrels) {
            squirrel.update();
            squirrel.show();

            // check if squirrel made it to the car
            if (dist(squirrel.x, squirrel.y, car.x, car.y) < car.h / 2 + squirrel.r) {
                // if so reduce lives and remove that squirrel
                car.lives--;
                squirrels.splice(squirrels.indexOf(squirrel), 1);
            }
            // If squirrel finished death animation, remove from array
            if (squirrel.color[3] <= 0) {
                // push to killed squirrel's name and level to the list of names
                squirrelNames.push(squirrel.name + " lvl: " + squirrel.level);
                // remove that squirrel
                squirrels.splice(squirrels.indexOf(squirrel), 1);
            }
        }

        // check for end cases
        if (car.lives <= 0) {
            // if player has no more lives go to game over
            game_state = "GAME_OVER";
        } else if (numSquirrelsInWave === waveSize && squirrels.length === 0) {
            // if player has survived the wave go to game over
            game_state = "GAME_OVER";
            // set car to winning
            car.win = true;
        }
    } else if (game_state === "GAME_OVER") {
        // if game over reset the squirrels array
        squirrels = [];

        // set string to prompt player to play again
        let clickString = "Click to try again in " + Math.floor(timeOut / 60) + " seconds";

        // if time out elapsed just prompt the player to play again
        if (timeOut < 0) {
            clickString = "Click to try again";
        }

        // set background to grey
        background(171, 171, 171);
        fill(0);

        // tell the user game over
        text("Game Over", 50, 40);
        // tell the user whether they won or not
        text(car.win ? "You Won!" : "You lost to the squirrels!", 50, 70);
        // tell them when/if they can play again
        text(clickString, 50, 100);
        // Title to list the names of slain squirrels
        text("Squirrels Killed", 50, 140);

        // step down timeout
        timeOut--;

        // set text size for names display
        textSize(16);

        // set number of columns
        let cols = 4;
        // set current y offset
        let y = 0;
        // loop through all names
        for (let index = 0; index < squirrelNames.length; index++) {
            // if we are on a new row step up y offset
            if((index % cols) === 0){y+=30;}
            // display that name at a position with offset
            text(squirrelNames[index], 50 + (index % cols) * 250, 150 + y);
        }
        // reset text size
        textSize(24);

        // check if player wants to play again
        if (mouseIsPressed && timeOut < 0) {
            // if player clicks
            // reset time out for next game over
            timeOut = 60 * 5;

            // reset number of squirrels generated this wave
            numSquirrelsInWave = 0;

            // reset the names array to be empty
            squirrelNames = [];

            // reset number of lives left
            car.lives = 5;
            // reset to not have won
            car.win = false;

            // change game state to running the game
            game_state = "RUNNING";
        }
    }

    // Draw target and "car"
    fill(117);
    rectMode(CENTER);
    rect(car.x, car.y, car.w, car.h);

    // draw the x, y position of the car for debugging
    // fill(0, 255, 0);
    // ellipse(car.x, car.y, 5, 5);
}

function generateWave(totalSquirrelsInWave, rateOfSpawn) {
    // Generate squirrels only if there is remaining space in this wave
    // check against a random and spawn rate
    if (random() < rateOfSpawn && (squirrels.length + numSquirrelsInWave) < totalSquirrelsInWave) {
        // select the generated squirrel's spawn location
        let spawn = pickRandomSpawn();
        // create the squirrel
        let newSquirrel = new Squirrel(spawn.x, spawn.y);
        // push to the squirrel array
        squirrels.push(newSquirrel);
        // Set this squirrel in motion
        newSquirrel.moveToTarget(car.x, car.y);
        // iterate the number of squirrels generated this wave
        numSquirrelsInWave++;
    }
    // return not used
    return (squirrels.length + numSquirrelsInWave) === totalSquirrelsInWave;
}

// Generates a name and has a chance to add a flourish
function pickRandomName() {
    // get random name
    let name = random(POSSIBLE_NAMES);
    if (random() > 0.95) {
        // add a flourish
        let newName = "That ";
        newName += random() > 0.5 ? '"lovely person" ' : '"swell dude" ';
        name = newName + name;
    } else if (random() > 0.99){
        name = "Oh hi Mark"
    }

    // return that name
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

