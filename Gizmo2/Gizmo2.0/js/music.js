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
        window.addEventListener("click", () => {
            if (!this.isMuted){
                this.music.play();
            }
        }, { once: true });

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
    handleClick(event){
        this.mouseX = event.offsetX;
        this.mouseY = event.offsetY;
        if (this.mouseX > this.x && this.mouseX < this.x + this.width && this.mouseY > this.y && this.mouseY < this.y + this.height){

        }
        this.isMuted = !this.isMuted;
        if (this.isMuted){
            this.music.pause();
        } else {
            this.music.play();
        }
    }
}