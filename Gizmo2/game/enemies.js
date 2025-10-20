document.addEventListener("load", function(){
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width =1200;

class Game{
    constructor(){
        this.enemies = [];
        this.#addNewEnemy();
    }
    update(){
        this.enemies.forEach(obj => obj.update());
    }
    draw(){
        this.enemies.forEach(obj => obj.draw());
    }
    #addNewEnemy(){
        this.enemy.push(new Enemy())
    }
}

class Enemy {
    constructor(){
        this.x = 100;
        this.y = 100;
        this.width = 100;
        this.height = 100;
    }
    update(){

    }
    draw(){

    }
}

const game = new Game();
let lastTime = 1;
const animate = (timeStamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    game.update();
    game.draw();
    requestAnimationFrame(animate);
};
animate(0);
});