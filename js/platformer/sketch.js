let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Events = Matter.Events,
    Pair = Matter.Pair;

let engine, world;

let player;

let platforms = [];
let intractableObjects = [];
let bounds = [];

let kindsOfObjects = {
    "health": Health,
    "spike": Spike,
    "portal": Portal,
    "jumpBoost": JumpBoost,
    "speedBoost": SpeedBoost
};
let gameHeight = 2000;
let camera;

let GAME_STATE = "START";
let GAME_LEVEL = 0;
let timeout = 60 * 5;

let colors = {
    background: [50, 50, 50],
    boundary: [200, 200, 200],
    platform: [100, 100, 100],
    player: [255, 55, 255]
};

let objectColors = {
    health: [255, 20, 20],
    spike: [150, 150, 255],
    portal: [150, 255, 150],
    jump: [255, 255, 255],
    speed: [150, 255, 150]
};

let levelInfo = [
    {
        gameHeight: 2000,
        colors: {
            background: [50, 50, 50],
            boundary: [200, 200, 200],
            platform: [100, 100, 100],
            player: [255, 55, 255]
        },
        objectRates: {
            health: 0.8,
            spike: 0.9,
            jump: 0.5,
            speed: 0.5,
            platform: 0,
        }
    },
    {
        gameHeight: 3000,
        colors: {
            //https://www.colourlovers.com/palette/4693855/A%CD%99a%CD%99w%CD%99o%CD%99
            background: [96, 80, 81],
            boundary: [200, 200, 200],
            platform: [218, 196, 172],
            player: [183, 227, 240]
        },
        objectRates: {
            health: 0.8,
            spike: 0.8,
            jump: 0.6,
            speed: 0.5,
            platform: 0.3,
        }
    },
    {
        gameHeight: 4000,
        colors: {
            //https://www.colourlovers.com/palette/4706197/%D0%B6%D0%B8%D0%B7%D0%BD%D1%8C_%D0%B4%D0%B0%D1%80
            background: [205, 5, 0],
            boundary: [200, 200, 200],
            platform: [255, 127, 0],
            player: [255, 185, 0]
        },
        objectRates: {
            health: 0.8,
            spike: 0.6,
            jump: 0.8,
            speed: 0.5,
            platform: 0.4,
        }
    }
    ,
    {
        gameHeight: 5000,
        colors: {
            //https://www.colourlovers.com/palette/4706400/Moons_Dark_Side
            background: [35,38,79],
            boundary: [26,22,43],
            platform: [182,157,196],
            player: [149,182,191]
        },
        objectRates: {
            health: 0.8,
            spike: 0.5,
            jump: 0.7,
            speed: 0.5,
            platform: 0.45,
        }
    }
];

function setup() {
    createCanvas(400, 800);
    noStroke();
    engine = Engine.create();
    world = engine.world;
    composeWorld();
    player = new Player(0, 0);
    camera = new Camera();
    camera.y = player.body.position.y;

    function collision(event) {
        for (let pair of event.source.pairs.list) {
            let bodyA = pair.bodyA.label;
            let bodyB = pair.bodyB.label;
            if (bodyA === "player" && Object.keys(kindsOfObjects).includes(bodyB)) {
                for (let i = 0; i < intractableObjects.length; i++) {
                    let body = intractableObjects[i].body;
                    if (pair.bodyB === body) {
                        intractableObjects[i].interact(player);
                        if(bodyB !== "spike"){
                            intractableObjects.splice(i, 1);
                            World.remove(world, body);
                            if(bodyB !== "health" && random() > 0.5){
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
                        if(bodyA !== "spike") {
                            intractableObjects.splice(i, 1);
                            World.remove(world, body);
                            if(bodyB !== "health" && random() > 0.5){
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
    platforms = [];
    intractableObjects = [];
    bounds = [];

    let distanceBetweenPlatforms = 70;
    let platformHeight = 20;
    let platformMaxExtraWidth = 30;

    bounds.push(new Boundary(0, height / 2 - 10, width, 20));
    bounds.push(new Boundary(-width / 2 + 10, height / 2 - gameHeight / 2 - 150, 20, gameHeight + 300));
    bounds.push(new Boundary(width / 2 - 10, height / 2 - gameHeight / 2 - 150, 20, gameHeight + 300));
    bounds.push(new Boundary(0, height / 2 - gameHeight - 300, width, 20));

    let portal = new Portal(-width / 2 + 70, height / 2 - gameHeight);
    intractableObjects.push(portal);

    for (let platformIndex = 0; platformIndex < Math.floor(gameHeight / distanceBetweenPlatforms); platformIndex++) {
        if(random() < levelInfo[GAME_LEVEL].objectRates.platform && platformIndex !== 0){
            continue;
        }
        let side = platformIndex % 2 === 0 ? 1 : -1;

        let w = 100 + (platformIndex % 3) * platformMaxExtraWidth;

        let x = side * ((-width / 2 + distanceBetweenPlatforms) + (platformIndex % 3) * platformMaxExtraWidth / 2);
        let y = height / 2 - gameHeight + platformHeight + platformIndex * distanceBetweenPlatforms;

        let platform = new Platform(x, y, w, platformHeight);
        platforms.push(platform);

        if (random() > levelInfo[GAME_LEVEL].objectRates.health) {
            let healthX = random(x - w / 2 + 30, x + w / 2 - 30);
            let health = new Health(healthX, y - 20, Math.floor(random(1, 3)));
            intractableObjects.push(health);
        }

        if (random() > levelInfo[GAME_LEVEL].objectRates.spike && platformIndex !== 0) {
            let spikeX = random(x - w / 2 + 30, x + w / 2 - 30);
            let spike = new Spike(spikeX, y - 20, Math.floor(random(1, 3)));
            intractableObjects.push(spike);
        }

        if (random() > levelInfo[GAME_LEVEL].objectRates.jump) {
            let jumpBoostX = random(x - w / 2 + 30, x + w / 2 - 30);
            let jumpBoost = new JumpBoost(jumpBoostX, y - 20, Math.floor(random(1, 3)), Math.floor(random(60 * 3, 60 * 5)));
            intractableObjects.push(jumpBoost);
        }

        if (random() > levelInfo[GAME_LEVEL].objectRates.speed) {
            let speedBoostX = random(x - w / 2 + 30, x + w / 2 - 30);
            let speedBoost = new SpeedBoost(speedBoostX, y - 20, Math.floor(random(1, 3)), Math.floor(random(60 * 3, 60 * 5)));
            intractableObjects.push(speedBoost);
        }
    }
}

function spawnObject(typeOfObj){
    let platform = random(platforms);
    let pos = platform.body.position;
    let x = Math.floor(random(pos.x - platform.w / 2 + 30, pos.x + platform.w / 2 - 30));
    let y = pos.y-20;

    let spawnedObject = new kindsOfObjects[typeOfObj](x, y, Math.floor(random(1, 3)), Math.floor(random(60 * 3, 60 * 5)));
    intractableObjects.push(spawnedObject);
}

function draw() {
    if (GAME_STATE === "START") {
        push();
        translate(width / 2, height / 2);
        background(100);
        fill(255);
        textAlign(CENTER);
        text("Click to start", 0, -60);
        text("Collect the circles to gain lives", 0, 0);
        text("Avoid the triangles", 0, 60);
        if (mouseIsPressed) {
            GAME_STATE = "RUNNING";
        }
        pop();
    } else if (GAME_STATE === "RUNNING") {
        push();
        text(`player position - x:${player.body.position.x} y:${player.body.position.y}`, width / 2, height / 2);
        translate(width / 2, (height * 2) / 3 - camera.y);
        background(colors.background[0], colors.background[1], colors.background[2]);
        textAlign(CENTER);
        if (keyIsDown(LEFT_ARROW)) {
            player.move(-1);
        } else if (keyIsDown(RIGHT_ARROW)) {
            player.move(1);
        }
        Engine.update(engine);

        for (let platform of platforms) {
            platform.show();
        }

        for (let bound of bounds) {
            bound.show();
        }

        for (let thisObj in intractableObjects) {
            intractableObjects[thisObj].show();
        }
        player.update();
        player.show();
        camera.y = player.body.position.y;

        if (player.lives <= 0) {
            GAME_STATE = "GAME_OVER";

        }
        pop();
    } else if (GAME_STATE === "GAME_OVER") {
        push();
        translate(width / 2, height / 2);
        player.remove();
        background(100);
        fill(255);
        textAlign(CENTER);
        text(`You got to level ${GAME_LEVEL+1}`, 0, -40);
        text(`Click to start again ${timeout > 0 ? `in ${Math.floor(timeout / 60)} sec` : ""}`, 0, 0);
        timeout--;
        if (mouseIsPressed && timeout < 0) {
            GAME_LEVEL = 0;
            colors = {...levelInfo[GAME_LEVEL].colors};
            GAME_STATE = "RUNNING";
            timeout = 60 * 5;
            player = new Player(0, 0);
            composeWorld();
        }
        pop();
    } else if (GAME_STATE === "WIN") {
        push();
        translate(width / 2, height / 2);
        player.remove();
        background(100);
        fill(255);
        textAlign(CENTER);
        text(`You Won!${GAME_LEVEL === levelInfo.length ? "" :` Next level is lvl.${GAME_LEVEL+1}`}`, 0, -40);
        text(`Click to ${GAME_LEVEL === levelInfo.length ? " play again" : "start next level"}${timeout > 0 ? ` in ${Math.floor(timeout / 60)} sec` : ""}`, 0, 0);
        timeout--;
        if (mouseIsPressed && timeout < 0) {
            GAME_LEVEL = GAME_LEVEL === levelInfo.length ? 0 : GAME_LEVEL;
            colors = {...levelInfo[GAME_LEVEL].colors};
            GAME_STATE = "RUNNING";
            timeout = 60 * 5;
            player = new Player(0, 0);
            composeWorld();
        }
        pop();
    }

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        player.jump();
        camera.y = player.body.position.y;
    }
}
