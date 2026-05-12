export class Music{
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = this.game.width - 80;
        this.y = 20;
        this.music = document.getElementById("backMusic");
        this.musicIcon = document.getElementById("music");
        this.closeIcon = document.getElementById("close");
        this.isMuted = false;
        this.music.volume = 0.3;
        this.music.play();

        window.addEventListener("click", (e) => {
            this.handleClick(e);
        })
    }
    update(){

    }
    draw(context){
        context.drawImage(this.musicIcon, this.x, this.y, this.width, this.height);
        if (this.isMuted) {
            context.drawImage(this.closeIcon, this.x, this.y, this.width, this.height);
        }
    }
}