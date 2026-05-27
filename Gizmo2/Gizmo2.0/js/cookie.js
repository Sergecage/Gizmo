export class Cookie {
    constructor(game){
        this.game = game;
        this.spriteWidth = 150;
        this.spriteHeight = 190;
        this.width = 150;
        this.height = 190;
        this.x = Math.random() * (this.width * 0.8);
        this.y = Math.random() * (this.width * 0.8);
        this.image = document.getElementById("cookie");
    }
    update(){

    }
    draw(){
        
    }
}