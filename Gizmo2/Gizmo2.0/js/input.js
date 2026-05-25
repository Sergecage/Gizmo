export class InputHandler {
    constructor(game){
        this.game = game;
        this.keys = [];
        window.addEventListener('keydown', e => {
            if ((e.key === "ArrowDown" || e.key === "ArrowUp" 
                || e.key === "ArrowLeft" || e.key === "ArrowRight") && this.keys.indexOf(e.key) === -1){
                this.keys.push(e.key);
            } else if (e.key === "d") this.game.debug = !this.game.debug;
        });
        window.addEventListener("keyup", e => {
            if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
        window.addEventListener("touchstart", e => {
            if (e.targetTouches.length > 1){
                e.preventDefault()
            };
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            if (touchX  < window.innerWidth / 2) {
                if (!this.keys.includes("ArrowLeft")) {
                    this.keys.push("ArrowLeft");
                }
            } else {
                if (!this.keys.includes("ArrowRight")) {
                    this.keys.push("ArrowRight");
            }
        }
        if (touchY  < window.innerHeight / 2) {
                if (!this.keys.includes("ArrowUp")) {
                    this.keys.push("ArrowUp");
                }
            } 
        });
        window.addEventListener("toucmove", () => {
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
        })
        window.addEventListener("touchend", () => {
            this.keys = [];
        })
    }
}