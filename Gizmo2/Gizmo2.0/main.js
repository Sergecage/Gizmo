import { Player } from "./js/player.js";
import { InputHandler } from "./js/input.js";
import { Background } from "./js/background.js";
import { FlyingEnemy, GroundEnemy, CrawlingEnemy } from "./js/enemies.js";

window.addEventListener('load', function(){
    const canvas = document.getElementById("game-canvas-1");
    const ctx = canvas.getContext("2d");
    canvas.width = 1200;
    canvas.height = 750;

    class Game{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.groundMargin = 0;
            this.speed = 1;
            this.maxSpeed = 3;
            this.background = new Background(this);
            this.player = new Player(this);
            this.input = new InputHandler();
            this.enemies = [];
            this.enemyTimer = 0;
            this.enemyInterval = 1000;
        }
        update(deltaTime){
            this.background.update();
            this.player.update(this.input.keys, deltaTime);

            if (this.enemyTimer > this.enemyInterval){
                this.AddEnemy();
                this.enemyTimer = 0;
            } else {
                this.enemyTimer += deltaTime;
            }
            this.enemies.forEach(enemy => {
                enemy.update(deltaTime);
                if (enemy.markedForDeletion) this.enemies.splice(this.enemies.indexOf(enemy), 1);
            } )
        }
        draw(context){
            this.background.draw(context);
            this.player.draw(context);
            this.enemies.forEach(enemy => {
                enemy.draw(context);
            } )
        }
        AddEnemy(){
            if (this.speed > 0 && Math.random() < 0.5 ) this.enemies.push(new GroundEnemy(this));
            this.enemies.push(new FlyingEnemy(this));
            console.log(this.enemies);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);
    let lastTime = 0;
    console.log(this.x, this.y);

    const animate = (timeStamp) => {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});