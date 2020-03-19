let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Events = Matter.Events,
    Pair = Matter.Pair;

let engine, world;

let player, ground;

let platforms = [];
let intractableObjects = [];
let kindsOfPickUps = ["h"];
let gameHeight = 3000;
let bounds = [];
let camera;

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function setup() {
    createCanvas(400, 800);
    noStroke();
    engine = Engine.create();
    world = engine.world;
    player = new Player(0, 0);
    camera = new Camera();
    camera.y = player.body.position.y;
    bounds.push(new Boundary(0, height/2-10, width, 20));
    bounds.push(new Boundary(-width/2+10, -height+30, 20, gameHeight));
    bounds.push(new Boundary(width/2-10, -height+30, 20, gameHeight));

    for(let platformIndex = 0; platformIndex < Math.floor(gameHeight/70)-3; platformIndex++){
        let w = 100 + (platformIndex%3)*30;
        let side = platformIndex%2 === 0 ? 1 : -1;
        let x = side*(-width/2+70);
        let y = -gameHeight+(height) - 70 + platformIndex*70;

        let platform = new Platform(x + side*(platformIndex%3)*15, y, w, 20);
        platforms.push(platform);
        if(random() > 0.8){
            let healthX = random((x + side*(platformIndex%3)*14)-(w/2),(x + side*(platformIndex%3)*14)+(w/2));
            let health = new Health(healthX, y-15, Math.floor(random(1, 3)), Object.keys(intractableObjects).length + 1);
            intractableObjects.push(health);
        }
    }
    function collision(event){
        for(let pair of event.source.pairs.list){
            let bodyA = pair.bodyA.label;
            let bodyB = pair.bodyB.label;
            if(bodyA === "player" && kindsOfPickUps.includes(bodyB[0])){
                for(let i = 0; i < intractableObjects.length; i++){
                    let body = intractableObjects[i].body;
                    if(pair.bodyB === body){
                        intractableObjects[i].interact(player);
                        intractableObjects.splice(i, 1);
                    }
                }
            }
            else if (bodyB === "player" && kindsOfPickUps.includes(bodyA[0])){
                for(let i = 0; i < intractableObjects.length; i++){
                    let body = intractableObjects[i].body;
                    if(pair.bodyA === body){
                        intractableObjects[i].interact(player);
                        intractableObjects.splice(i, 1);
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

function draw() {
    translate(width/2, (height*2)/3-camera.y);
    background(50);
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
    player.show();
    camera.y = player.body.position.y;
}

function keyPressed(){
    if (keyCode === UP_ARROW) {
        player.jump();
    }
}
