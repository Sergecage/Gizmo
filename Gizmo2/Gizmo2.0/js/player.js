export class Player {
    constructor(game){
        this.game = game;
        this.width = 250;
        this.height = 300;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.image = gizmo;
    }
    update(input){
        if (input.includes("ArrowRight")) x++;
        else if (input.includes("ArrowRight")) x--;
    }
    draw(context){
        context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
};