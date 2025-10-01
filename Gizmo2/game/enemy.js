/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width =1200;
const numberOfEnemies = 100;
const enemies = [];

class Enemy {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 100;
        this.height = 100;
    }
    update(){
        this.x++;
        this.y++;
    }
    draw(){
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

for (let i = 0; i < numberOfEnemies; i++){
    enemies.push(new Enemy());
}

const animateEnemy1 = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemy1.update();
    enemy1.draw();
    requestAnimationFrame(animateEnemy1);
}

animateEnemy1();