const playerState = "jump";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function(e) {
    playerState = e.target.value;
})

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width =1200;
let gameSpeed = 5;
const explosions = [];

const backgroundLayer1 = new Image();
backgroundLayer1.src = "../assets/img/Gizmo_back1.jpg"
const backgroundLayer2 = new Image();
backgroundLayer2.src = "../assets/img/Gizmo_back.jpg"

const slider = document.getElementById("slider");
slider.value = gameSpeed;
const showGameSpeed = document.getElementById("showGameSpeed");
showGameSpeed.innerText = gameSpeed;
slider.addEventListener("change", function(e){
    gameSpeed = e.target.value;
    showGameSpeed.innerText = gameSpeed;
})

const playerImg = new Image();
playerImg.src = '../assets/img/Gizmo_walk_cycle.png';
playerImg.style.zIndex = "5";
playerImg.classList = "gizmo";
const spriteWidth = 435;
const spriteHeight = 523;
let gameFrame = 0;
const staggerFrame = 15;
const spriteAnimations = [];
const animationStates = [
    {
        name : "left_walk",
        frames: "2"
    },
    {
        name : "right_walk",
        frames: "2"
    },
    {
        name : "jump",
        frames: "2"
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++ ){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
})

const animate = () => {
    ctx.clearRect(0, 0,CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrame) % spriteAnimations[playerState].loc.length;
    frameX = spriteWidth * position;
    frameY = spriteAnimations["left_walk"].loc[position].y;
    ctx.drawImage(playerImg, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
}

class Layer {
    constructor(image, speedModifier) {
        this.image = image;
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 450;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = 0;
        }
        this.x = this.x - this.speed;
        //this.x = gameFrame * this.speed % this.width;
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

class Explosion {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
    }
}

const layer1 = new Layer(backgroundLayer1, 0.5);
const layer2 = new Layer(backgroundLayer2, 0.4);

const gameObjects = [layer1, layer2];

const animateBack = () => {
    gameObjects.forEach(x => {
        x.update();
        x.draw();
    });
    //gameFrame--;
    requestAnimationFrame(animateBack);
}

animate();
animateBack();

const updateState = () => {

}

const startGame = () => {
    
}

const calculateScore = () => {
    
}