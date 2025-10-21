document.addEventListener("load", function(){
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width =1200;

class Game{
    constructor(){
        this.ctx = ctx;
        this.width = width;
        this.height - height;
        this.enemies = [];
        this.enemyInterval = 1000;
        this.enemyTimer = 0;
    }
    update(deltaTime){
        this.enemies = this.enemies.filter(obj => !obj.markedForDeletion);
        if (this.enemyTimer > this.enemyInterval){
            this.#addNewEnemy();
            this.enemyTimer = 0;
        } else{
            this.enemyTimer += deltaTime;
        }
        this.enemies.forEach(obj => obj.update());
    }
    draw(){
        this.enemies.forEach(obj => obj.draw(this.ctx));
    }
    #addNewEnemy(){
        this.enemy.push(new Enemy(this))
    }
}

class Enemy {
    constructor(game){
        this.game = game;
        this.x = this.game.width;
        this.y = Math.random() * this.game.height;
        this.width = 100;
        this.height = 100;
        this.markedForDeletion = false;
    }
    update(){
        this.x--;
        if (this.x < 0 - this.width) this.markedForDeletion = true;
    }
    draw(ctx){
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const game = new Game(ctx, canvas.width, canvas.height);
let lastTime = 1;
const animate = (timeStamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    game.update(deltaTime);
    game.draw();
    requestAnimationFrame(animate);
};
animate(0);
});