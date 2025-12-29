import { Player } from "./js/player.js";
import { InputHandler } from "./js/input.js";
import { Background } from "./js/background.js";

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
            this.speed = 3;
            this.background = new Background(this);
            this.player = new Player(this);
            this.input = new InputHandler();
        }
        update(deltaTime){
            this.background.update();
            this.player.update(this.input.keys, deltaTime);
        }
        draw(context){
            this.background.draw(context);
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;

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