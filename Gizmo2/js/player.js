export default class Player {
    constructor(gameWidt, gameHeight){
        this.gameWidt = gameWidt;
        this.gameHeight= gameHeight;
        this.states = [];
        this.currentState = this.staets[0];
        this.image = document.getElementById("player");
        this.width = 250;
        this.height = 180;
        this.x = this.gameWidth / 2  - this.width / 2;
        this.y = this.gameHeight / 2 - this.height / 2;
        this.frameX = 0;
        this.frameY = 0;
    }
    draw(context){
        context.drawImage(this.image , this.width * frameX, this.height * frameY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    setState(state){
        this.currentState = this.state[state];
    }
}