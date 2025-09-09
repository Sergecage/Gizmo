const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width = 1200;

const playerImg = new Image();
playerImg.src = '../assets/img/Gizmo.png';

const animate = () => {
    ctx.clearRect(0, 0,CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(100, 50, 100,100);
    ctx.drawImage(playerImg, 0, 180, 300, 300,);
    requestAnimationFrame(animate);
}

animate();

const updateState = () => {

}

const startGame = () => {
    
}

const calculateScore = () => {
    
}