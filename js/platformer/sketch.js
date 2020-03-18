
let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Events = Matter.Events,
    Pair = Matter.Pair;

let engine, world;

let player, ground;

let platforms = [];
let gameHeight = 3000;
let bounds = [];
let camera;

function setup() {
    createCanvas(800, 800);
    noStroke();
    engine = Engine.create();
    world = engine.world;
    player = new Player(0, 0);
    camera = new Camera();
    camera.y = player.body.position.y;
    bounds.push(new Boundary(0, height/2-10, width, 20));
    bounds.push(new Boundary(-height/2+10, -height+30, 20, gameHeight));
    bounds.push(new Boundary(height/2-10, -height+30, 20, gameHeight));

    for(let platformIndex = 0; platformIndex < Math.ceil(gameHeight/50); platformIndex++){
        let side = platformIndex%2 === 0 ? 1 : -1;
        let x = side*(-width/2+70);
        let y = -gameHeight+(height/2) + platformIndex*50;
        let platform = new Platform(x + side*(platformIndex%3)*15, y, 100 + (platformIndex%3)*30, 20);
        platforms.push(platform);
    }
    function collision(event){
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
    for(let bound of bounds){
        bound.show();
    }
    for(let platform of platforms){
        platform.show();
    }
    player.show();
    camera.y = player.body.position.y;
}

function keyPressed(){
    if (keyCode === UP_ARROW) {
        player.jump();
    }
}
