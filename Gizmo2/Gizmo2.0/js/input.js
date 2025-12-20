export class InputHandler {
    constructor(){
        this.keys = [];
        window.addEventListener('keydown', e => {
            if ((e.key === "ArrowDown" || e.key === "ArrowDown") && this.keys.indexOf(e.key) === -1){
                this.keys.push(e.key);
            } 
        });
        window.addEventListener("keyup", e => {
            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
    }
}