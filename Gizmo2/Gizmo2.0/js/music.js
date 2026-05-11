export class Music{
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = this.game.width - 80;
        this.y = 20;
        this.musicIcon = document.getElementById("music");
        this.closeIcon = document.getElementById("close");
        this.isMuted = false;
        this.music = music;
    }
    update(){

    }
    draw(){

    }
}