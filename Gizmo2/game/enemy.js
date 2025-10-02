/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width =1200;
const numberOfEnemies = 10;
const enemies = [];

const enemyImage = new Image();
enemyImage.src = "../assets/img/Enemy1.png"

class Enemy {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 860;
        this.spriteHeight  =755;
        this.width = this.spriteWidth / 8.5;
        this.height = this.spriteHeight / 8.5;
        this.frame = 0;
    }
    update(){
        this.x += this.speed;
        this.y += this.speed;
        // animate sprites
        this.frame < 4 ? this.frame = 0 : this.frame++;
    }
    draw(){
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(enemyImage,0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

for (let i = 0; i < numberOfEnemies; i++){
    enemies.push(new Enemy());
}

const animateEnemy1 = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemies.forEach(enemy => {
        enemy.draw();
        enemy.update();
    });
    requestAnimationFrame(animateEnemy1);
}

animateEnemy1();