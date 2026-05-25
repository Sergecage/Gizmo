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
            this.handleTouch(e);
            
        });
        window.addEventListener("touchmove", e => {
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
        })
        window.addEventListener("touchend", () => {
            this.keys = [];
        })
    }
    handleTouch(e){
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;

        if (touchX < window.innerHeight / 2){
            this.key.oush("ArrowLeft");
        }
    }
}