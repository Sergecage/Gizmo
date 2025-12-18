export class Player {
    constructor(game){
        this.game = game;
        this.width = 250;
        this.height = 300;
        this.x = 0;
        this.y = this.game.height - this.height;
    }
    update(){

    }
    draw(context){
        context.fillStyle = "purple";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
};