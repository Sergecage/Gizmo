const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width = 1200;

const playerImg = new Image();
playerImg.src = '../assets/img/Gizmo_walk_cycle.png';
const spriteWidth = 445;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrame = 15;

const animate = () => {
    ctx.clearRect(0, 0,CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrame) % 2;
    frameX = spriteWidth * position;
    ctx.drawImage(playerImg, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();

const updateState = () => {

}

const startGame = () => {
    
}

const calculateScore = () => {
    
}