const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width =1200;

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
    }
    update(){
        this.x -= this.directionX;
        if (this.x < 0  - this.width) this.markedFordeletion = true;
    }
    draw(){
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

const animate = (timestamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let deltatime = timestamp - lastTime;
    lastTime = timestamp;
    timeToNextBat += deltatime;
    if ( timeToNextBat > batInterval) {
        bats.push( new Bat());
        timeToNextBat = 0;
    }
    [...bats].forEach(obj => obj.update());
    [...bats].forEach(obj => obj.draw());
    bats = bats.filter(obj => !obj.markedFordeletion);
    requestAnimationFrame(animate);
}

animate(0);