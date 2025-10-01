/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width =1200;

class Enemy {
    constructor(){
        this.x = 10;
        this.y = 50;
        this.width = 100;
        this.height = 100;
    }
    update(){
        this.x++;
        this.y++;
    }
}
const enemy1 = new Enemy();
const enemy2 = new Enemy();

const animateEnemy1 = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemy1.update();
    ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    requestAnimationFrame(animateEnemy1);
}

animateEnemy1();