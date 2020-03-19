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

let kindsOfPickUps = ["health", "spike", "portal", "jumpBoost"];
let gameHeight = 3000;
let camera;

let GAME_STATE = "START";
let timeout = 60*5;

let colors = {
    boundary: [200, 200, 200],
    platform: [100, 100, 100],
    player: [255, 55, 255],
    health: [255, 20, 20],
    spike: [150, 150, 255],
    portal: [150, 255, 150],
    jump: [150, 255, 150],

};

function setup() {
    createCanvas(400, 800);
    noStroke();
    engine = Engine.create();
    world = engine.world;
    composeWorld();
    player = new Player(0, 0);
    camera = new Camera();
    camera.y = player.body.position.y;
    function collision(event){
        for(let pair of event.source.pairs.list){
            let bodyA = pair.bodyA.label;
            let bodyB = pair.bodyB.label;
            if(bodyA === "player" && kindsOfPickUps.includes(bodyB)){
                for(let i = 0; i < intractableObjects.length; i++){
                    let body = intractableObjects[i].body;
                    if(pair.bodyB === body){
                        intractableObjects[i].interact(player);
                        intractableObjects.splice(i, 1);
                        World.remove(world, body);
                        break;
                    }
                }
            }
            else if (bodyB === "player" && kindsOfPickUps.includes(bodyA)){
                for(let i = 0; i < intractableObjects.length; i++){
                    let body = intractableObjects[i].body;
                    if(pair.bodyA === body){
                        intractableObjects[i].interact(player);
                        intractableObjects.splice(i, 1);
                        World.remove(world, body);
                        break;
                    }
                }
            }
        }
        if(player.body.velocity.y > 0){
            player.resetJumps();
        }
    }

    Events.on(engine, 'collisionStart', collision);

}

function composeWorld(){
    for(let objs of bounds.concat(platforms).concat(intractableObjects)){
        objs.remove();
    }
    platforms = [];
    intractableObjects = [];
    bounds = [];
    bounds.push(new Boundary(0, height/2-10, width, 20));
    bounds.push(new Boundary(-width/2+10, -height+30, 20, gameHeight));
    bounds.push(new Boundary(width/2-10, -height+30, 20, gameHeight));

    let portal = new Portal(-width/2+70, -gameHeight+(height) - 90);
    intractableObjects.push(portal);

    for(let platformIndex = 0; platformIndex < Math.floor(gameHeight/70)-3; platformIndex++){
        let w = 100 + (platformIndex%3)*30;
        let side = platformIndex%2 === 0 ? 1 : -1;
        let x = side*(-width/2+70);
        let y = -gameHeight+(height) - 70 + platformIndex*70;

        let platform = new Platform(x + side*(platformIndex%3)*15, y, w, 20);
        platforms.push(platform);
        if(random() > 0.8){
            let healthX = random((x + side*(platformIndex%3)*14)-(w/2),(x + side*(platformIndex%3)*14)+(w/2));
            let health = new Health(healthX, y-15, Math.floor(random(1, 3)));
            intractableObjects.push(health);
        }
        
        if(random() > 0.8){
            let spikeX = random((x + side*(platformIndex%3)*14)-(w/2),(x + side*(platformIndex%3)*14)+(w/2));
            let spike = new Spike(spikeX, y-20, Math.floor(random(1, 3)));
            intractableObjects.push(spike);
        }

        if(random() > 0.8){
            let jumpBoostX = random((x + side*(platformIndex%3)*14)-(w/2),(x + side*(platformIndex%3)*14)+(w/2));
            let jumpBoost = new JumpBoost(jumpBoostX, y-20, Math.floor(random(1, 3)), Math.floor(random(60*3, 60*5)));
            intractableObjects.push(jumpBoost);
        }
    }
}

function draw() {
    if(GAME_STATE === "START"){
        push();
        translate(width/2, height/2);
        background(100);
        fill(255);
        textAlign(CENTER);
        text("Click to start", 0, -60);
        text("Collect the circles to gain lives", 0, 0);
        text("Avoid the triangles", 0, 60);
        if(mouseIsPressed){
            GAME_STATE = "RUNNING";
        }
        pop();
    } else if(GAME_STATE === "RUNNING"){
        push();
        text(`player position - x:${player.body.position.x} y:${player.body.position.y}`, width/2, height/2);
        translate(width/2, (height*2)/3-camera.y);
        background(50);
        textAlign(CENTER);
        if (keyIsDown(LEFT_ARROW)){
            player.move(-1);
        } else if (keyIsDown(RIGHT_ARROW)){
            player.move(1);
        }
        Engine.update(engine);

        for(let platform of platforms){
            platform.show();
        }

        for(let bound of bounds){
            bound.show();
        }

        for(let thisObj in intractableObjects){
            intractableObjects[thisObj].show();
        }
        player.update();
        player.show();
        camera.y = player.body.position.y;

        if(player.lives <= 0){
            GAME_STATE = "GAME_OVER";

        }
        pop();
    } else if(GAME_STATE === "GAME_OVER"){
        push();
        translate(width/2, height/2);
        player.remove();
        background(100);
        fill(255);
        textAlign(CENTER);
        text(`Click to start ${timeout > 0 ? `in ${Math.floor(timeout/60)} sec`: ""}`, 0, 0);
        timeout--;
        if(mouseIsPressed && timeout < 0){
            GAME_STATE = "RUNNING";
            timeout = 60*5;
            player = new Player(0, 0);
        }
        pop();
    }

}

function keyPressed(){
    if (keyCode === UP_ARROW) {
        player.jump();
        camera.y = player.body.position.y;
    }
}
