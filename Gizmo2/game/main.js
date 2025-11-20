import Player from "../js/player";

window.addEventListener("load", function(){
    const loading = document.getElementById("loading");
    loading.style.display = "none";
    const canvas = this.document.getElementById("game-frame");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = this.window.innerHeight;

    const player = new Player(canvas.width, canvas.height);
    player.draw(ctx);
})