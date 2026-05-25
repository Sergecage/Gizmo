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
            
        }, {passive : false} );
        window.addEventListener("touchmove", e => {
            e.preventDefault()
            this.handleTouch(e);
        }, {passive : false})
        window.addEventListener("touchend", () => {
            this.keys = [];
        })
    }
    handleTouch(e){
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        this.keys = [];
        if (touchX < window.innerWidth / 2){
            this.key.oush("ArrowLeft");
        }
        else {
            this.key.push("ArrowRight");
        }
        if (touchY < window.innerHeight / 2){
            this.key.oush("ArrowUp");
        }
    }
}