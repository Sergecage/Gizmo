export default class Player {
    constructor(gameWidt, gameHeight){
        this.gameWidt = gameWidt;
        this.gameHeight= gameHeight;
        this.states = [];
        this.currentState = this.staets[0];
        this.image = document.getElementById("player");
        this.width = 250;
        this.height = 180;
        this.x = 0;
        this.y = 0;
    }
    draw(context){
        context.drawImage(this.image ,0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}