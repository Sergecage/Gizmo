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
        this.enemyInterval = 100;
        this.enemyTimer = 0;
        this.enemyTypes = ['bat', 'angry'];
    }
    update(deltaTime){
        this.enemies = this.enemies.filter(obj => !obj.markedForDeletion);
        if (this.enemyTimer > this.enemyInterval){
            this.#addNewEnemy();
            this.enemyTimer = 0;
        } else{
            this.enemyTimer += deltaTime;
        }
        this.enemies.forEach(obj => obj.update(deltaTime));
    }
    draw(){
        this.enemies.forEach(obj => obj.draw(this.ctx));
    }
    #addNewEnemy(){
        const randomEnemy = this.enemyTypes[Math.random()]
        this.enemy.push(new Bat(this));
        this.enemy.sort(function(a,b){
            return a.y - b.y;
        });
    }
}

class Enemy {
    constructor(game){
        this.game = game;
        this.markedForDeletion = false;
    }
    update(deltaTime){
        this.x - this.vxSpeed * deltaTime;
        if (this.x < 0 - this.width) this.markedForDeletion = true;
    }
    draw(ctx){
        ctx.drawImage(this.image, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

class Bat extends Enemy{
    constructor(game){
        super(game);
        this.spriteWidth = 229;
        this.spriteHeight = 171;
         this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.x = this.game.width;
        this.y = Math.random() * this.game.height;
        this.image = bat;
        this.vxSpeed = Math.random() * 0.1 + 0.1;
    }
}

class Angry extends Enemy{
    constructor(game){
        super(game);
        this.spriteWidth = 261;
        this.spriteHeight = 209;
         this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.x = this.game.width;
        this.y = Math.random() * this.game.height;
        this.image = angry;
        this.vxSpeed = Math.random() * 0.2 + 0.1;
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