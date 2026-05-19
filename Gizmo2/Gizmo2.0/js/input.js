export class InputHandler {
    constructor(game){
        this.game = game;
        this.keys = [];
        window.addEventListener('keydown', e => {
            if ((e.key === "ArrowDown" || e.key === "ArrowUp" 
                || e.key === "ArrowLeft" || e.key === "ArrowRight") && this.keys.indexOf(e.key) === -1){
                this.keys.push(e.key);
            } else if (e.key === "d") this.game.debug != this.game.debug;
        });
        window.addEventListener("keyup", e => {
            if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
        window.addEventListener("touchstart", e => {
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            if (e.key === "" || e.key === "" || e.key === "" || e.key === "") {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
    }
}