export class InputHandler {
    constructor(){
        this.keys = [];
        windows.addEventListener('keydown', e => {
            if (e.key === "ArrowDown" && this.key.indexOf(e.key) === -1){
                this.key.push(e.key);
            } 
        });
    }
}