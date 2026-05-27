export class Cookie {
    constructor(game){
        this.game = game;
        this.spriteWidth = 150;
        this.spriteHeight = 190;
        this.width = 80;
        this.height = 80;
        this.x = Math.random() * (this.width * 0.8);
        this.y = Math.random() * (this.width * 0.8);
        this.image = document.getElementById("cookie");
        this.markedForDeletion = false;
    }
    update(){

    }
    draw(context){

    }
}