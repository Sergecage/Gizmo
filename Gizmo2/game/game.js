const playerState = "left_walk";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function(e) {
    playerState = e.target.value;
})

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width =1200;
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = "../assets/img/Gizmo_back1.jpg"
const backgroundLayer2 = new Image();
backgroundLayer1.src = "../assets/img/Gizmo_back.jpg"

const playerImg = new Image();
playerImg.src = '../assets/img/Gizmo_walk_cycle.png';
playerImg.style.zIndex = "5";
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

let x = 0;
let x2 = 2400;
const animateBack = () => {
    ctx.drawImage(backgroundLayer1, x, 0);
    ctx.drawImage(backgroundLayer1, x2, 0);
    if (x < -2400) x = 2400 + x2 - gameSpeed;
    else x -= gameSpeed;
    if (x2 < -2400) x2 = 2400 + x - gameSpeed;
    else x2 -= gameSpeed;
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