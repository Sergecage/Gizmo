export class Music{
    constructor(game, musicId = "backMusic"){
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = this.game.width - this.width - 20;
        this.y = 20;
        this.music = document.getElementById(musicId);
        this.musicIcon = document.getElementById("music");
        this.closeIcon = document.getElementById("close");
        this.isMuted = false;
        if (!this.music){
            alert(`Music ${musicId} was not found`)
            return;
        }
        this.music.volume = 0.3;
        document.querySelectorAll("audio").forEach((audio) => {
            if (audio!== this.music){
                audio.pause();
            }
        })
        this.handlWindowClick = (event) => {
            this.handleClick(event);
        }
        window.addEventListener("click", () => {
            if (!this.isMuted){
                this.music.play();
            }
        }, { once: true });
    }
    play(){
        
    }
    destroy(){
       window.addEventListener("click", (e) => {
            this.handleClick(e);
        }) 
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
            this.isMuted = !this.isMuted;
            if (this.isMuted){
                this.music.pause();
            } else {
                this.music.play();
            }
        }
    }
}