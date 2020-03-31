// Initialize matter.js variables
let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Events = Matter.Events,
    Constraint = Matter.Constraint;

// Initialize the engine and world to be used
let engine, world;

// Initialize the player variable
let player;

// Declare world object arrays
let platforms = [];
let intractableObjects = [];
let bounds = [];

// Dictionary for all intractable objects
let kindsOfObjects = {
    "health": Health,
    "maxHealth": MaxHealth,
    "spike": Spike,
    "portal": Portal,
    "jump": JumpBoost,
    "maxNumJump": NumJumpBoost,
    "speed": SpeedBoost,
};

// Declare camera object
let camera = {
    // camera position
    x: null,
    y: null,
    // set orientation
    orientation: "VERTICAL", // VERTICAL or HORIZONTAL
    // set size (smaller by larger for vertical) (larger by smaller for horizontal)
    smaller: 450,
    larger: 800
};

// Declare game state
let GAME_STATE = "START";
// Declare game level
let GAME_LEVEL = 0;

// Set between level timeout
let timeout = 60 * 3;

// for rebuilding level after bonus level TODO finish this
// currently only used to check if player coming back from bonus level
let previousLevel = {
    platforms: [],
    intractableObjects: [],
    bounds: [],
};

// Declare colors for each pick-up
let objectColors = {
    health: [255, 20, 20],
    maxHealth: [150, 75, 75],
    spike: [150, 150, 255],
    portal: [255, 255, 100],
    jump: [255, 255, 255],
    speed: [150, 255, 150],
    maxNumJump: [200, 100, 200],
    bonusPortal: [200, 200, 100],
};

// Set pool for bonus level information
// This will have
// The height and length of the level
// The color palette
// The object spawn rates
let bonusLevelsInfo = [
    {
        gameHeight: 2000,
        gameLength: 3000,
        colors: {
            // https://www.colourlovers.com/palette/4707093/Sweater_Weather
            background: [99, 30, 61],
            boundary: [157, 138, 106],
            platform: [155, 207, 161],
            player: [227, 164, 146]
        },
        objectRates: {
            maxHealth: 0.2,
            jump: 0.4,
            maxNumJump: 0.0,
            speed: 0.0,
        }
    },
    {
        gameHeight: 3000,
        gameLength: 3500,
        colors: {
            // https://www.colourlovers.com/palette/4707078/Dining_room
            background: [0, 2, 2],
            boundary: [25, 119, 116],
            platform: [18, 86, 99],
            player: [228, 184, 51]
        },
        objectRates: {
            maxHealth: 0.2,
            jump: 0.4,
            maxNumJump: 0.0,
            speed: 0.0,
        }
    },
    {
        gameHeight: 3500,
        gameLength: 4000,
        colors: {
            // Ice Cream
            background: [176, 136, 94],
            boundary: [229, 255, 229],
            platform: [255, 253, 208],
            player: [255, 192, 203]
        },
        objectRates: {
            maxHealth: 0.2,
            jump: 0.4,
            maxNumJump: 0.0,
            speed: 0.0,
        }
    },
    {
        gameHeight: 4000,
        gameLength: 4500,
        colors: {
            // https://www.colourlovers.com/palette/4709644/Girly_Summer
            background: [213, 187, 249],
            boundary: [255, 210, 167],
            platform: [255, 237, 167],
            player: [249, 219, 238]
        },
        objectRates: {
            maxHealth: 0.2,
            jump: 0.4,
            maxNumJump: 0.1,
            speed: 0.0,
        }
    }
];

// Set list for level information
// This will have
// The height of the level,
// The color palette (background, boundary, platform, player)
// The object spawn rates for the level
let levelsInfo = [
    {
        gameHeight: 2000,
        colors: {
            background: [50, 50, 50],
            boundary: [200, 200, 200],
            platform: [100, 100, 100],
            player: [255, 55, 255]
        },
        objectRates: {
            health: 0.2,
            spike: 0.0,
            jump: 0.0,
            maxNumJump: 0.0,
            speed: 0.0,
        },
        platformRate: 0.0,
        movingPlatformRate: 0.0
    },
    {
        gameHeight: 3000,
        colors: {
            // https://www.colourlovers.com/palette/4693855/A%CD%99a%CD%99w%CD%99o%CD%99
            background: [96, 80, 81],
            boundary: [190, 176, 152],
            platform: [218, 196, 172],
            player: [183, 227, 240]
        },
        objectRates: {
            health: 0.2,
            spike: 0.0,
            jump: 0.0,
            maxNumJump: 0.0,
            speed: 0.0,
        },
        platformRate: 0.1,
        movingPlatformRate: 0.0
    },
    {
        gameHeight: 4000,
        colors: {
            // https://www.colourlovers.com/palette/4706197/%D0%B6%D0%B8%D0%B7%D0%BD%D1%8C_%D0%B4%D0%B0%D1%80
            background: [205, 5, 0],
            boundary: [205, 77, 0],
            platform: [255, 127, 0],
            player: [255, 185, 0]
        },
        objectRates: {
            health: 0.3,
            spike: 0.1,
            jump: 0.0,
            maxNumJump: 0.0,
            speed: 0.0,
        },
        platformRate: 0.2,
        movingPlatformRate: 0.0
    },
    {
        gameHeight: 5000,
        colors: {
            // https://www.colourlovers.com/palette/4706400/Moons_Dark_Side
            background: [35, 38, 79],
            boundary: [26, 22, 43],
            platform: [182, 157, 196],
            player: [149, 182, 191]
        },
        objectRates: {
            health: 0.4,
            spike: 0.2,
            jump: 0.2,
            maxNumJump: 0.0,
            speed: 0.0,
        },
        platformRate: 0.3,
        movingPlatformRate: 0.0
    },
    {
        gameHeight: 6000,
        colors: {
            // https://www.colourlovers.com/palette/4706841/They_Dont_Know
            background: [90, 86, 114],
            boundary: [149, 150, 181],
            platform: [180, 224, 229],
            player: [214, 245, 199]
        },
        objectRates: {
            health: 0.4,
            spike: 0.3,
            jump: 0.2,
            maxNumJump: 0.1,
            speed: 0.0,
        },
        platformRate: 0.4,
        movingPlatformRate: 0.1
    },
    {
        gameHeight: 7000,
        colors: {
            // https://www.colourlovers.com/palette/4706842/Lost_Sock
            background: [84, 79, 78],
            boundary: [130, 140, 139],
            platform: [104, 217, 205],
            player: [245, 223, 171]
        },
        objectRates: {
            health: 0.4,
            spike: 0.5,
            jump: 0.3,
            maxNumJump: 0.1,
            speed: 0.0,
        },
        platformRate: 0.5,
        movingPlatformRate: 0.2
    },
    {
        gameHeight: 8000,
        colors: {
            // https://www.colourlovers.com/palette/4707077/Just_a_trial
            background: [23, 53, 73],
            boundary: [60, 140, 193],
            platform: [193, 60, 148],
            player: [227, 216, 55]
        },
        objectRates: {
            health: 0.5,
            spike: 0.6,
            jump: 0.3,
            maxNumJump: 0.2,
            speed: 0.1,
        },
        platformRate: 0.6,
        movingPlatformRate: 0.2
    },
    {
        gameHeight: 9000,
        colors: {
            // https://www.colourlovers.com/palette/4707234/Dear_Patience
            background: [170, 174, 179],
            boundary: [184, 204, 192],
            platform: [215, 230, 171],
            player: [252, 242, 189]
        },
        objectRates: {
            health: 0.6,
            spike: 0.6,
            jump: 0.4,
            maxNumJump: 0.2,
            speed: 0.1,
        },
        platformRate: 0.7,
        movingPlatformRate: 0.3
    },
    {
        gameHeight: 10000,
        colors: {
            // https://www.colourlovers.com/palette/2219694/Reds_and_pink
            background: [194, 20, 38],
            boundary: [248, 8, 59],
            platform: [246, 90, 90],
            player: [253, 252, 252]
        },
        objectRates: {
            health: 0.7,
            spike: 0.7,
            jump: 0.4,
            maxNumJump: 0.2,
            speed: 0.1,
        },
        platformRate: 0.8,
        movingPlatformRate: 0.3
    },
    {
        gameHeight: 12000,
        colors: {
            // https://www.colourlovers.com/palette/4709642/Youre_a_Natural
            background: [14, 42, 28],
            boundary: [51, 88, 53],
            platform: [86, 117, 112],
            player: [236, 239, 240]
        },
        objectRates: {
            health: 0.7,
            spike: 0.7,
            jump: 0.5,
            maxNumJump: 0.3,
            speed: 0.1,
        },
        platformRate: 0.8,
        movingPlatformRate: 0.4
    }
];


// Set current level information (first level to begin with)
let currentLevelInfo = levelsInfo[GAME_LEVEL];

// Set up canvas
function setup() {
    // Create the canvas (Vertically)
    let cnv = createCanvas(camera.smaller, camera.larger);
    // Place canvas in the container on the web page
    cnv.parent('game');

    noStroke();
    textSize(24);

    // Declare engine and world
    engine = Engine.create();
    world = engine.world;

    // Generate the player object
    player = new Player(0, 0);

    // Compose world
    composeWorld();

    // Declare function to handle jump resets and interact with objects
    function collision(event) {
        // loop through all collision pairs
        for (let pair of event.source.pairs.list) {
            // assign each label to a variable to make using them easier
            let bodyA = pair.bodyA.label;
            let bodyB = pair.bodyB.label;
            // loop through all objects to find the body that was in the collision
            if ([bodyA, bodyB].includes("player")) {
                if (Object.keys(kindsOfObjects).includes(bodyA) || Object.keys(kindsOfObjects).includes(bodyB)) {
                    for (let objectIndex = 0; objectIndex < intractableObjects.length; objectIndex++) {
                        // assign the body to a variable to make using it easier
                        let body = intractableObjects[objectIndex].body;
                        // check if either of the pair in the collision is the body of this object
                        if (pair.bodyB === body || pair.bodyA === body) {
                            // if so check if one is the player
                            if (bodyA === "player") {
                                // if bodyA is the object have it interact with the player
                                intractableObjects[objectIndex].interact(player);

                                if (bodyB !== "spike") {
                                    // if it is not a spike have it removed
                                    intractableObjects.splice(objectIndex, 1);
                                    World.remove(world, body);
                                    // if it is not health
                                    // it has a chance to spawn another of its kind in the level
                                    if (bodyB !== "health" && random() > 0.5) {
                                        spawnObject(bodyB);
                                    }
                                }
                                // break because we found the corresponding intractable object
                                break;
                            } else if (bodyB === "player") {
                                // if bodyB is the object have it interact with the player
                                intractableObjects[objectIndex].interact(player);
                                // if it is not a spike have it removed
                                if (bodyA !== "spike") {
                                    intractableObjects.splice(objectIndex, 1);
                                    World.remove(world, body);
                                    // if it is not health
                                    // it has a chance to spawn another of its kind in the level
                                    if (bodyA !== "health" && random() > 0.5) {
                                        spawnObject(bodyA);
                                    }
                                }
                                // break because we found the corresponding intractable object
                                break;
                            }
                        }
                    }
                }
                // this is a proxy for hitting the ground to reset the number of jumps the player can use
                if (player.body.velocity.y >= 0) {
                    player.resetJumps();
                }

                // check if player collided with a moving platform
                if ([bodyA, bodyB].includes("movingPlatform")) {
                    for (let platform of platforms) {
                        if ([pair.bodyA, pair.bodyB].includes(platform.body)) {
                            // if so, attach the player to the platform
                            platform.attach(player);
                        }
                    }
                }

            }

        }
    }

    // call the collision function when a collision starts
    Events.on(engine, 'collisionStart', collision);

}


// generate the world
function composeWorld() {

    // burn it all down to start anew
    for (let objs of bounds.concat(platforms).concat(intractableObjects)) {
        objs.remove();
    }
    player.remove();
    platforms = [];
    intractableObjects = [];
    bounds = [];

    // check orientation
    if (camera.orientation === "VERTICAL") {
        // player start height for new levels
        let playerStart = (height) / 3;
        // Assume that the level is new
        let reloading = false;

        // check game status
        if (previousLevel.playerPos) {
            // if player position in previous level info set player to that position
            // also give the new player object the same stats
            player = new Player(previousLevel.playerPos.x, previousLevel.playerPos.y, player.lives, player.maxLives);

            previousLevel.playerPos = null;

            reloading = true;

        } else if (GAME_LEVEL === 0) {
            // if new game or game reset generate player with base stats
            player = new Player(0, playerStart);
        } else {
            // if new level generate player with the same number of lives and max lives as the previous player object
            // unless it's an even numbered level, then add 2 max levels to the new player
            player = new Player(0, playerStart, (GAME_LEVEL % 2) === 0 ? player.lives + 2 : player.lives, (GAME_LEVEL % 2) === 0 ? player.maxLives + 2 : player.maxLives);
        }
        // set current level info
        currentLevelInfo = {...levelsInfo[GAME_LEVEL]};
        // set canvas orientation to vertical
        resizeCanvas(camera.smaller, camera.larger);

        // set minimum distance between platforms
        // the min that works is 150
        let minDistanceBetweenPlatforms = 150;
        // set the maximum distance between the minimum distance and the the maximum allowed in the game
        // mapped to the current platform difficulty rate
        // the maximum without pickups is 490
        let maxDistanceBetweenPlatforms = map(currentLevelInfo.platformRate, 0, 1, minDistanceBetweenPlatforms, 600);

        // set universal platform height
        let platformHeight = 20;

        // set top of the world
        // used to determine when to stop making platforms
        let top = -currentLevelInfo.gameHeight;

        // build the boundaries
        // ground
        bounds.push(new Boundary(0, height / 2 - 10, width, 20));
        // left side
        bounds.push(new Boundary(-width / 2 + 10, height / 2 - currentLevelInfo.gameHeight / 2 - 150, 20, currentLevelInfo.gameHeight + 300));
        // right side
        bounds.push(new Boundary(width / 2 - 10, height / 2 - currentLevelInfo.gameHeight / 2 - 150, 20, currentLevelInfo.gameHeight + 300));
        // ceiling
        bounds.push(new Boundary(0, height / 2 - currentLevelInfo.gameHeight - 300, width, 20));

        ///////////////// Generate platforms ////////////////////////////

        // first platform
        platforms.push(new Platform(width / 2 - 50 - 20, height / 2 - 100, 100, platformHeight));

        // loop though the maximum number of platforms
        for (let platformIndex = 1; platformIndex < currentLevelInfo.gameHeight; platformIndex++) {

            // get the last platforms position and width
            let lastPlatformPos = platforms[platformIndex - 1].body.position;
            let lastPlatformW = platforms[platformIndex - 1].w;

            // generate a random distance between the last platform and the new one
            let newDist = random(minDistanceBetweenPlatforms, maxDistanceBetweenPlatforms);

            // generate a random angle from the last platform to the new one
            let angle = lastPlatformPos.x > 0 ? random((2 * PI) / 3, (5 * PI) / 6) : random((PI / 3), (PI / 6));

            // compute the horizontal distance from the last platform to the new one
            let xDist = newDist * Math.cos(angle);
            // compute the vertical distance from the last platform to the new one
            let yDist = newDist * Math.sin(angle);

            // compute the new platforms position
            let x = lastPlatformPos.x + xDist + lastPlatformPos.x > 0 ? lastPlatformW / 2 : -lastPlatformW / 2;
            let y = lastPlatformPos.y + platformHeight / 2 - yDist;

            // generate a random width for the new position
            let w = random(50, width / 2 - 20 - Math.abs(x));

            // if the new platform is covering the last one
            // flip it to the other side
            if (x - w - 30 < (lastPlatformPos.x - lastPlatformW / 2) && x + w + 30 > (lastPlatformPos.x + lastPlatformW / 2)) {
                x *= -1;
            }

            // double the width (platforms drawn from the center)
            w *= 2;

            // Construct new platform
            let platform = random() < currentLevelInfo.movingPlatformRate ? new MovingPlatform(x, y, w, platformHeight) : new Platform(x, y, w, platformHeight);
            platforms.push(platform);

            // if this platform is close to the top break to stop generating platforms
            if (y - top < maxDistanceBetweenPlatforms * 2) {
                break;
            }

            // Generate objects on all but the first and last platforms
            if (platformIndex !== 0) {
                // loop through all the object rates in the level
                for (let thisType of Object.keys(currentLevelInfo.objectRates)) {
                    // if the random number is less than the object rate spawn an object
                    // ignore the platform rate
                    if (random() < currentLevelInfo.objectRates[thisType]) {
                        spawnObject(thisType, platforms[platformIndex]);
                    }
                }
            }
        }

        // spawn portal on the last platform
        spawnObject("portal", platforms[platforms.length - 1]);

        // if the level isn't being reloaded there is a chance for a bonus level portal to generate
        if (!reloading && random() < 0.3) {
            // pick a random platform to spawn the portal
            let platform = random(platforms);
            // get it's position
            let pos = platform.body.position;
            // spawn it in the wall based on the side the platform was on
            let x = pos.x < 0 ? -width / 2 + 5 : width / 2 - 5;

            // construct the bonus level portal
            let bonusPortal = new Portal(x, pos.y, "BONUS_LEVEL");
            intractableObjects.push(bonusPortal);
        }

        // set the camera position to the center on the x-axis and the player's y
        camera.x = width / 2;
        camera.y = player.body.position.y;

    } else if (camera.orientation === "HORIZONTAL") {
        // set the canvas orientation to horizontal
        resizeCanvas(camera.larger, camera.smaller);

        // set the current level info to a random bonus level
        currentLevelInfo = {...random(bonusLevelsInfo)};
        // set player position in previous level info
        previousLevel.playerPos = {...player.body.position};

        // make a new player with the same info from the previous player
        player = new Player(0, 0, player.lives, player.maxLives);

        // set area to generate the platforms
        let bottom = height / 2;
        let top = -currentLevelInfo.gameHeight + height / 2;
        let end = currentLevelInfo.gameLength - width / 5;

        // generate boundaries
        // beginning
        bounds.push(new Boundary(-width / 5, -currentLevelInfo.gameHeight / 2 + height / 2, 20, currentLevelInfo.gameHeight * 2));
        // end
        bounds.push(new Boundary(end, -currentLevelInfo.gameHeight / 2 + height / 2, 20, currentLevelInfo.gameHeight * 2));

        ///////////////// Generate platforms ////////////////////////////

        // first platform
        platforms.push(new Platform(-width / 5 + 100, height / 2 - 10, 200, 20));

        // loop through maximum number of platforms
        for (let platformIndex = 1; platformIndex < Math.ceil(currentLevelInfo.gameLength / 30); platformIndex++) {
            // get last platform position and width
            let lastPlatformPos = platforms[platformIndex - 1].body.position;
            let lastPlatformW = platforms[platformIndex - 1].w;

            // generate a random distance between the last platform and the new one
            let newDist = random(30, 200);

            // generate a random angle from the last platform to the new one
            let angle = 0;
            if (lastPlatformPos.y > bottom - 30) {
                angle = random(0, (PI / 3));
            } else if (lastPlatformPos.y < top + 30) {
                angle = random(-(PI / 3), 0);
            } else {
                angle = random(-(PI / 3), (PI / 3));
            }

            // compute the horizontal distance from the last platform to the new one
            let xDist = newDist * Math.cos(angle);
            // compute the vertical distance from the last platform to the new one
            let yDist = newDist * Math.sin(angle);

            // generate a random width for the new position
            let w = random(15, 100);

            // compute the new platforms position
            let x = lastPlatformPos.x + xDist + lastPlatformW / 2 + w;
            let y = lastPlatformPos.y + 10 - yDist;
            w *= 2;

            // generate new platform
            platforms.push(new Platform(x, y, w, 20));

            // if this platform is close to the end break
            if (end - x <= 400) {
                break;
            }

            // generate pickups
            for (let kindOfObject of Object.keys(currentLevelInfo.objectRates)) {
                if (random() < currentLevelInfo.objectRates[kindOfObject]) {
                    spawnObject(kindOfObject, platforms[platformIndex]);
                }
            }
        }

        // generate portals back to previous level
        let bonusPortal = new Portal(-width / 5 + 50, height / 2 - 10);
        intractableObjects.push(bonusPortal);

        spawnObject("portal", platforms[platforms.length - 1]);

        // set camera to follow player
        camera.y = player.body.position.y;
        camera.x = player.body.position.x;
    }
}

// spawn object
function spawnObject(typeOfObj, platform) {
    // if no type, randomly select one
    typeOfObj = typeOfObj ? typeOfObj : random(Object.keys(currentLevelInfo.objectRates));
    // if no platform, randomly select one
    platform = platform ? platform : random(platforms);
    // get the platforms position
    let pos = platform.body.position;
    // select a random place on the platform to spawn the object
    let x = Math.floor(random(pos.x - platform.w / 2 + 30, pos.x + platform.w / 2 - 30));

    // generate the object
    let spawnedObject = new kindsOfObjects[typeOfObj](x, pos.y, Math.floor(random(1, 3)), Math.floor(random(60 * 3, 60 * 5)));
    if(platform.body.label === "movingPlatform"){
        platform.add(spawnedObject);
    }
    intractableObjects.push(spawnedObject);
}

function draw() {
    // check the orientation
    // set the canvas to the current orientation
    if (camera.orientation === "HORIZONTAL") {
        resizeCanvas(camera.larger, camera.smaller);
    } else if (camera.orientation === "VERTICAL") {
        resizeCanvas(camera.smaller, camera.larger);
    }

    if (GAME_STATE === "START") {
        push();
        // center the drawing
        translate(width / 2, height / 2);
        // set the background
        background(255, 255, 150);
        // set text styling
        fill(0);
        textAlign(CENTER);
        textSize(24);
        // display instructions to the player
        text("Click to start", 0, -60);
        text("Collect the circles to gain lives", 0, 0);
        text("Avoid the triangles", 0, 60);

        // start if mouse is pressed
        if (mouseIsPressed) {
            GAME_STATE = "RUNNING";
        }
        pop();
    } else if (GAME_STATE === "RUNNING") {
        // set background color
        background(currentLevelInfo.colors.background[0], currentLevelInfo.colors.background[1], currentLevelInfo.colors.background[2]);

        // controls for player movement
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            player.move(-1);
        } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            player.move(1);
        }
        // move all moving platforms
        for (let platform of platforms) {
            if (platform.body.label === "movingPlatform") {
                platform.move();
            }
        }
        // update engine and player
        Engine.update(engine);
        player.update();
        push();
        // check orientation
        if (camera.orientation === "VERTICAL") {
            // only follow player's y
            translate(width / 2, (height * 2) / 3 - camera.y);
            camera.y = player.body.position.y;
        } else if (camera.orientation === "HORIZONTAL") {
            // follow player's y and x
            translate(width / 5 - camera.x, (height) / 2 - camera.y);
            camera.y = player.body.position.y;
            camera.x = player.body.position.x;
            // if player falls out of world respawn
            if (player.body.position.y > currentLevelInfo.gameHeight / 2) {
                player.lives--;
                player = new Player(0, 0, player.lives, player.maxLives);
                player.damgagedTimer = 90;
            }
        }

        // Display all entities
        for (let objs of bounds.concat(platforms).concat(intractableObjects)) {
            objs.show();
        }
        player.show();
        pop();

        // if the player runs out of lives set stat to game over
        if (player.lives <= 0) {
            GAME_STATE = "GAME_OVER";
        }
    } else if (GAME_STATE === "GAME_OVER") {

        push();
        translate(width / 2, height / 2);
        // remove the player
        player.remove();

        // set styling
        background(100);
        fill(0);
        textAlign(CENTER);
        textSize(24);
        // Display game over info to user
        text(`You got to level ${GAME_LEVEL + 1}`, 0, -40);
        text(`Click to start again ${timeout > 0 ? `in ${Math.ceil(timeout / 60)} sec` : ""}`, 0, 0);
        // tick down time out
        timeout--;
        // if user clicks after time out
        // run new game
        if (mouseIsPressed && timeout < 0) {
            GAME_LEVEL = 0;
            GAME_STATE = "RUNNING";
            timeout = 60 * 3;
            player = new Player(0, 0);
            composeWorld();
        }
        pop();
    } else if (GAME_STATE === "WIN") {
        push();
        translate(width / 2, height / 2);
        // remove player
        player.remove();
        // set style
        background(150, 255, 150);
        fill(0);
        textAlign(CENTER);
        textSize(24);
        // display info to user
        // let the user know they won and if there is a next level display what it is
        text(`You Won!${GAME_LEVEL === levelsInfo.length ? "" : ` Next level is lvl.${GAME_LEVEL + 1}`}`, 0, -40);

        text(`Click to ${GAME_LEVEL === levelsInfo.length ? " play again" : "start next level"}${timeout > 0 ? ` in ${Math.ceil(timeout / 60)} sec` : ""}`, 0, 0);
        // tick down timeout
        timeout--;
        // if user clicks after time out
        // run next level
        if (mouseIsPressed && timeout < 0) {
            GAME_LEVEL = GAME_LEVEL === levelsInfo.length ? 0 : GAME_LEVEL;
            GAME_STATE = "RUNNING";
            timeout = 60 * 3;
            composeWorld();
        }
        pop();
    }

}

function keyPressed() {
    if (keyCode === UP_ARROW || keyCode === 87) {
        player.jump();
    }
}
