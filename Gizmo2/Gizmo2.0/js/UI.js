export class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = "Helvetica";
    }
    draw(context){
        context.font = this.fontSize + "px " + this.fontFamily;
        context.textAlign = "left";
        context.fillStyle = this.game.fontColor;
        context.fillText("Score: " + this.game.score, 30 , 50);
        context.font  = this.fontSize * 0.8 + " px " +this.fontFamily;
        context.fillText("Time: " + this.game.time, 20, 80);
        if (this.game.gameOver){
            context.textAlign = "center";
            context.font  = this.fontSize * 2 + "px " +this.fontFamily;
        }
    }
}