const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;
const canvasCollison = document.getElementById("collisionCanvas");
const ctxCollision = canvasCollison.getContext("2d");
const COLLISION_CANVAS_WIDTH = window.innerWidth;
const COLLISION_CANVAS_HEIGHT = window.innerHeight;
let score = 0;
ctx.font = "50px Impact";

let timeToNextBat = 0;
let batInterval = 500;
let lastTime = 0;

let bats = [];
class Bat{
    constructor(){
        this.spriteWidth = 272;
        this.spriteHeight = 197;
        this.sizeModifier = Math.random() * 0.6 + 0.4;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = canvas.width;
        this.y = Math.random() * canvas.height - this.height;
        this.directionX = Math.random() * 5 + 3;
        this.directionY = Math.random() * 5 - 2.5; 
        this.markedFordeletion = false;
        this.image = new Image();
        this.image.src = "../assets/img/Enemy1.png";
        this.frame = 0;
        this.maxFrame = 4;
        this.timeSinceFlap = 0;
        this.flapInterval = Math.random() * 50 + 50;
        this.randomColors = [ Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
        this.color = "rgb(" + randomColors[0] + "," + randomColors[1] + "," + randomColors[2] + ")";
    }
    update(deltatime){
        if (this.y < 0 || this.y > canvas.height - this.height) {
            this.directionY = this.directionY  * -1;
        }
        this.x -= this.directionX;
        this.y += this.directionY;
        if (this.x < 0  - this.width) this.markedFordeletion = true;
        this.timeSinceFlap += deltatime;
        if (this.timeSinceFlap > this.flapInterval) {
            if (this.frame > this.maxFrame) this.frame = 0;
            else this.frame++;
        }
    }
    draw(){
        ctx.fillStyle(this.color);
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

const drawScore = () => {
    ctx.fillStyle = "black";
    ctx.fillText("score: " + score, 50, 75);
    ctx.fillStyle = "white";
    ctx.fillText("score: " + score, 55, 80);
}

window.addEventListener("click", function(e){
    const detectPixelColor = ctx.getImageData(e.x, e.y, 1, 1);
});

const animate = (timestamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let deltatime = timestamp - lastTime;
    lastTime = timestamp;
    timeToNextBat += deltatime;
    if ( timeToNextBat > batInterval) {
        bats.push( new Bat());
        timeToNextBat = 0;
    };
    drawScore();
    [...bats].forEach(obj => obj.update(deltatime));
    [...bats].forEach(obj => obj.draw());
    bats = bats.filter(obj => !obj.markedFordeletion);
    requestAnimationFrame(animate);
}

animate(0);