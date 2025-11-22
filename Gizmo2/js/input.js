export default class InputHandler {
    constructor(){
        this.lastKey = "";
        window.addEventListener("keydown", function(e) {
            switch(e.key){
                case "ArrowLeft":
                    this.lastKey = "PRESS left";
            }
        })
    }
}