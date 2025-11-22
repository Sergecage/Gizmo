export default class InputHandler {
    constructor(){
        this.lastKey = "";
        window.addEventListener("keydown", function(e) {
            switch(e.key){
                case "ArrowLeft":
                    this.lastKey = "PRESS left";
                case "ArrowRight":
                    this.lastKey = "PRESS right";
            }
        });
        window.addEventListener("keyup", function(e) {
            switch(e.key){
                case "ArrowLeft":
                    this.lastKey = "RELEASE left";
                case "ArrowRight":
                    this.lastKey = "RELEASE right";
            }
        });
    }
}