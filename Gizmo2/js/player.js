class Player {
    constructor(gameWidt, gameHeight){
        this.gameWidt = gameWidt;
        this.gameHeight= gameHeight;
        this.states = [];
        this.currentState = this.staets[0];
        this.image = document.getElementById("player");
        this.width = 250;
        this.height = 180;
    }
}