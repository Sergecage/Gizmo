import Player from "../js/player";
import InputHandler from "../js/input";
import { drawStatus } from "../js/utils";

window.addEventListener("load", function(){
    const loading = document.getElementById("loading");
    loading.style.display = "none";
    const canvas = this.document.getElementById("game-frame");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = this.window.innerHeight;

    const player = new Player(canvas.width, canvas.height);
    player.draw(ctx);
    const input = new InputHandler();

    let lastTime = 0;
    const animate = (timeStamp) => {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.update(input.lastKey);
        player.draw(ctx, deltaTime);
        drawStatus(ctx, input, player);
        this.requestAnimationFrame(animate);
    };
    animate(0);
});