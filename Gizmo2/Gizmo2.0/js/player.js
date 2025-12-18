export class Player {
    constructor(game){
        this.game = game;
        this.width = 250;
        this.height = 300;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.image = gizmo;
    }
    update(){

    }
    draw(context){
        context.fillStyle = "purple";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
};