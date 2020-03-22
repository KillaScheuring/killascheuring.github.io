let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Events = Matter.Events;

let engine, world;

let player;

let platforms = [];
let intractableObjects = [];
let bounds = [];

let kindsOfObjects = {
    "health": Health,
    "maxHealth": MaxHealth,
    "spike": Spike,
    "portal": Portal,
    "jump": JumpBoost,
    "maxNumJump": NumJumpBoost,
    "speed": SpeedBoost,
};

let bonusLevelTypes = {
    maxHealth: 0.4,
    jump: 0.5,
    maxNumJump: 0,
    speed: 0.0,
};
let camera = {
    x: null,
    y: null,
    orientation: "VERTICAL", // VERTICAL or HORIZONTAL
    smaller: 350,
    larger: 700
};

let GAME_STATE = "START";
let GAME_LEVEL = 0;
let timeout = 60 * 3;

let previousLevel = {
    platforms: [],
    intractableObjects: [],
    bounds: [],
};

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
        }
    },
];

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
            jump: 0.5,
            maxNumJump: 0.0,
            speed: 0.0,
            platform: 0.0,
        }
    },
    {
        gameHeight: 3000,
        colors: {
            // https://www.colourlovers.com/palette/4693855/A%CD%99a%CD%99w%CD%99o%CD%99
            background: [96, 80, 81],
            boundary: [200, 200, 200],
            platform: [218, 196, 172],
            player: [183, 227, 240]
        },
        objectRates: {
            health: 0.2,
            spike: 0.0,
            jump: 0.5,
            maxNumJump: 0.2,
            speed: 0.2,
            platform: 0.1,
        }
    },
    {
        gameHeight: 4000,
        colors: {
            // https://www.colourlovers.com/palette/4706197/%D0%B6%D0%B8%D0%B7%D0%BD%D1%8C_%D0%B4%D0%B0%D1%80
            background: [205, 5, 0],
            boundary: [200, 200, 200],
            platform: [255, 127, 0],
            player: [255, 185, 0]
        },
        objectRates: {
            health: 0.3,
            spike: 0.1,
            jump: 0.5,
            maxNumJump: 0.2,
            speed: 0.2,
            platform: 0.2,
        }
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
            jump: 0.5,
            maxNumJump: 0.2,
            speed: 0.2,
            platform: 0.3,
        }
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
            jump: 0.5,
            maxNumJump: 0.3,
            speed: 0.2,
            platform: 0.4,
        }
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
            spike: 0.4,
            jump: 0.5,
            maxNumJump: 0.3,
            speed: 0.3,
            platform: 0.4,
        }
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
            spike: 0.5,
            jump: 0.5,
            maxNumJump: 0.3,
            speed: 0.3,
            platform: 0.4,
        }
    }

];

let currentLevelInfo = levelsInfo[0];

function setup() {
    createCanvas(camera.smaller, camera.larger);
    noStroke();
    engine = Engine.create();
    world = engine.world;
    player = new Player(0, 0);
    composeWorld();

    function collision(event) {
        for (let pair of event.source.pairs.list) {
            let bodyA = pair.bodyA.label;
            let bodyB = pair.bodyB.label;
            if (bodyA === "player" && Object.keys(kindsOfObjects).includes(bodyB)) {
                for (let i = 0; i < intractableObjects.length; i++) {
                    let body = intractableObjects[i].body;
                    if (pair.bodyB === body) {
                        intractableObjects[i].interact(player);
                        if (bodyB !== "spike") {
                            intractableObjects.splice(i, 1);
                            World.remove(world, body);
                            if (bodyB !== "health" && random() > 0.5) {
                                spawnObject(bodyB);
                            }
                        }
                        break;
                    }
                }
            } else if (bodyB === "player" && Object.keys(kindsOfObjects).includes(bodyA)) {
                for (let i = 0; i < intractableObjects.length; i++) {
                    let body = intractableObjects[i].body;
                    if (pair.bodyA === body) {
                        intractableObjects[i].interact(player);
                        if (bodyA !== "spike") {
                            intractableObjects.splice(i, 1);
                            World.remove(world, body);
                            if (bodyB !== "health" && random() > 0.5) {
                                spawnObject(bodyA);
                            }
                        }
                        break;
                    }
                }
            }
        }
        if (player.body.velocity.y > 0) {
            player.resetJumps();
        }
    }

    Events.on(engine, 'collisionStart', collision);

}

function composeWorld() {

    for (let objs of bounds.concat(platforms).concat(intractableObjects)) {
        objs.remove();
    }
    player.remove();
    platforms = [];
    intractableObjects = [];
    bounds = [];

    if (camera.orientation === "VERTICAL") {
        let reloading = false;
        if (previousLevel.playerPos) {
            player = new Player(previousLevel.playerPos.x, previousLevel.playerPos.y, player.lives, player.maxLives);
            previousLevel.playerPos = null;
            reloading = true;
        } else if (GAME_LEVEL === 0) {
            player = new Player(0, 0);
        } else {
            player = new Player(0, 0, GAME_LEVEL !== 0 ? player.lives : null, (GAME_LEVEL % 2) === 0 ? player.maxLives + 2 : player.maxLives);
        }
        currentLevelInfo = {...levelsInfo[GAME_LEVEL]};
        resizeCanvas(camera.smaller, camera.larger);
        let minDistanceBetweenPlatforms = 100;
        let maxDistanceBetweenPlatforms = map(currentLevelInfo.objectRates.platform, 0, 1, minDistanceBetweenPlatforms, 400);
        let platformHeight = 20;
        let top = -currentLevelInfo.gameHeight;

        bounds.push(new Boundary(0, height / 2 - 10, width, 20));
        bounds.push(new Boundary(-width / 2 + 10, height / 2 - currentLevelInfo.gameHeight / 2 - 150, 20, currentLevelInfo.gameHeight + 300));
        bounds.push(new Boundary(width / 2 - 10, height / 2 - currentLevelInfo.gameHeight / 2 - 150, 20, currentLevelInfo.gameHeight + 300));
        bounds.push(new Boundary(0, height / 2 - currentLevelInfo.gameHeight - 300, width, 20));

        platforms.push(new Platform(width / 2 - 50, height / 2 - 100, 100, platformHeight));

        for (let platformIndex = 1; platformIndex < Math.ceil(currentLevelInfo.gameHeight / minDistanceBetweenPlatforms); platformIndex++) {
            let lastPlatformY = platforms[platformIndex - 1].body.position.y;

            let side = random(-1, 1) > 0 ? 1 : -1;

            let w = Math.floor(random(50, width / 3));

            let x = side * (width / 2 - w);
            let y = min(lastPlatformY - platformHeight - Math.floor(random(minDistanceBetweenPlatforms, maxDistanceBetweenPlatforms)), currentLevelInfo.gameHeight - 80);

            let platform = new Platform(x, y, w, platformHeight);
            platforms.push(platform);

            if (platformIndex === 0) {
                continue;
            }

            if (y - top < 250) {
                break;
            }

            for (let thisType of Object.keys(currentLevelInfo.objectRates)) {
                if (random() < currentLevelInfo.objectRates[thisType] && thisType !== "platform") {
                    spawnObject(thisType, platforms[platformIndex]);
                }
            }
        }

        spawnObject("portal", platforms[platforms.length - 1]);

        if (!reloading && random() < 0.3) {
            let platform = random(platforms);
            let pos = platform.body.position;
            let x = pos.x < 0 ? -width / 2 + 5 : width / 2 - 5;

            let bonusPortal = new Portal(x, pos.y, "BONUS_LEVEL");
            intractableObjects.push(bonusPortal);
        }

        camera.x = width / 2;
        camera.y = player.body.position.y;
    } else if (camera.orientation === "HORIZONTAL") {
        resizeCanvas(camera.larger, camera.smaller);

        currentLevelInfo = {...random(bonusLevelsInfo)};
        previousLevel.playerPos = {...player.body.position};

        player.remove();
        player = new Player(0, 0, GAME_LEVEL !== 0 ? player.lives : null, player.maxLives);

        let bottom = height / 2;
        let top = -currentLevelInfo.gameHeight + height / 2;
        let end = currentLevelInfo.gameLength - width / 5;

        bounds.push(new Boundary(-width / 5, -currentLevelInfo.gameHeight / 2 + height / 2, 20, currentLevelInfo.gameHeight * 2));
        bounds.push(new Boundary(end, -currentLevelInfo.gameHeight / 2 + height / 2, 20, currentLevelInfo.gameHeight * 2));

        platforms.push(new Platform(-width / 5 + 100, height / 2 - 10, 200, 20));

        for (let platformIndex = 1; platformIndex < Math.ceil(currentLevelInfo.gameLength / 30); platformIndex++) {
            let lastPlatformPos = platforms[platformIndex - 1].body.position;
            if (end - lastPlatformPos.x <= 300) {
                break;
            }
            let lastPlatformW = platforms[platformIndex - 1].w;


            let w = Math.floor(random(30, 200));

            let x = lastPlatformPos.x + Math.floor(random(lastPlatformW + 30, lastPlatformW + 150));

            let y = min(max(lastPlatformPos.y + Math.floor(random(-200, 200)), top), bottom - 40);

            platforms.push(new Platform(x, y, w, 20));

            for (let kindOfObject of Object.keys(bonusLevelTypes)) {
                if (kindOfObject === "platform" || kindOfObject === "spike") {
                    continue;
                }
                if (random() < bonusLevelTypes[kindOfObject]) {
                    spawnObject(kindOfObject, platforms[platformIndex]);
                }
            }
        }

        let bonusPortal = new Portal(-width / 5 + 50, height / 2 - 10);
        intractableObjects.push(bonusPortal);

        spawnObject("portal", platforms[platforms.length - 1]);

        camera.y = player.body.position.y;
        camera.x = player.body.position.x;
    }
}

function spawnObject(typeOfObj, platform) {
    if (typeOfObj === null) {
        let randomPick = random(Object.keys(kindsOfObjects));
        if (randomPick === "portal" || randomPick === "maxHealth") {
            return;
        }
        typeOfObj = randomPick;
    }
    platform = platform ? platform : random(platforms);
    let pos = platform.body.position;
    let x = Math.floor(random(pos.x - platform.w / 2 + 30, pos.x + platform.w / 2 - 30));

    let spawnedObject = new kindsOfObjects[typeOfObj](x, pos.y, Math.floor(random(1, 3)), Math.floor(random(60 * 3, 60 * 5)));
    intractableObjects.push(spawnedObject);
}

function draw() {
    if (GAME_STATE === "START") {
        push();
        translate(width / 2, height / 2);
        background(255, 255, 150);
        fill(0);
        textAlign(CENTER);
        text("Click to start", 0, -60);
        text("Collect the circles to gain lives", 0, 0);
        text("Avoid the triangles", 0, 60);
        if (mouseIsPressed) {
            GAME_STATE = "RUNNING";
        }
        pop();
    } else if (GAME_STATE === "RUNNING") {
        background(currentLevelInfo.colors.background[0], currentLevelInfo.colors.background[1], currentLevelInfo.colors.background[2]);
        if (keyIsDown(LEFT_ARROW)) {
            player.move(-1);
        } else if (keyIsDown(RIGHT_ARROW)) {
            player.move(1);
        }
        Engine.update(engine);
        player.update();
        push();
        if (camera.orientation === "VERTICAL") {
            translate(width / 2, (height * 2) / 3 - camera.y);
            camera.y = player.body.position.y;
        } else if (camera.orientation === "HORIZONTAL") {
            translate(width / 5 - camera.x, (height) / 2 - camera.y);
            camera.y = player.body.position.y;
            camera.x = player.body.position.x;
            if (player.body.position.y > currentLevelInfo.gameHeight) {
                player.lives--;
                player = new Player(0, 0, player.lives, player.maxLives);
                player.damgagedTimer = 90;
            }
        }

        // Display all entities
        for (let platform of platforms) {
            platform.show();
        }

        for (let bound of bounds) {
            bound.show();
        }

        for (let thisObj in intractableObjects) {
            intractableObjects[thisObj].show();
        }
        player.show();
        pop();

        if (player.lives <= 0) {
            GAME_STATE = "GAME_OVER";

        }
    } else if (GAME_STATE === "GAME_OVER") {
        if (camera.orientation === "HORIZONTAL") {
            resizeCanvas(camera.larger, camera.smaller);
        } else if (camera.orientation === "VERTICAL") {
            resizeCanvas(camera.smaller, camera.larger);
        }
        push();
        translate(width / 2, height / 2);
        player.remove();
        background(100);
        fill(0);
        textAlign(CENTER);
        text(`You got to level ${GAME_LEVEL + 1}`, 0, -40);
        text(`Click to start again ${timeout > 0 ? `in ${Math.ceil(timeout / 60)} sec` : ""}`, 0, 0);
        timeout--;
        if (mouseIsPressed && timeout < 0) {
            GAME_LEVEL = 0;
            GAME_STATE = "RUNNING";
            timeout = 60 * 3;
            player = new Player(0, 0);
            composeWorld();
        }
        pop();
    } else if (GAME_STATE === "WIN") {
        if (camera.orientation === "HORIZONTAL") {
            resizeCanvas(camera.larger, camera.smaller);
        } else if (camera.orientation === "VERTICAL") {
            resizeCanvas(camera.smaller, camera.larger);
        }
        push();
        translate(width / 2, height / 2);
        player.remove();
        background(150, 255, 150);
        fill(0);
        textAlign(CENTER);
        text(`You Won!${GAME_LEVEL === levelsInfo.length ? "" : ` Next level is lvl.${GAME_LEVEL + 1}`}`, 0, -40);
        text(`Click to ${GAME_LEVEL === levelsInfo.length ? " play again" : "start next level"}${timeout > 0 ? ` in ${Math.floor(timeout / 60)} sec` : ""}`, 0, 0);
        timeout--;
        if (mouseIsPressed && timeout < 0) {
            GAME_LEVEL = GAME_LEVEL === levelsInfo.length ? 0 : GAME_LEVEL;
            GAME_STATE = "RUNNING";
            timeout = 60 * 5;
            composeWorld();
        }
        pop();
    }

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        player.jump();
    }
}
