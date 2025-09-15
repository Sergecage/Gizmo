const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width = 1200;

const playerImg = new Image();
playerImg.src = '../assets/img/Gizmo_jump.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;

const animate = () => {
    ctx.clearRect(0, 0,CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImg, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    requestAnimationFrame(animate);
}

animate();

const updateState = () => {

}

const startGame = () => {
    
}

const calculateScore = () => {
    
}