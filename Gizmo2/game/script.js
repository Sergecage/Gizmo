const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width =1200;
const explosions = [];
let canvasPosition = canvas.getBoundingClientRect();

class Explosion{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.image = new Image();
        this.image.src = "../assets/img/Gizmo.png";
        this.frame = 0;
    }
    update(){
        this.frame++;
    }
    draw(){
        ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

window.addEventListener("click", function(e){
    let positionX = e.x - canvasPosition.left - 25;
    let positionY = e.y - canvasPosition.top - 25;
    explosions.push(new Explosion(positionX, positionY));
});

const animate = () => {
    for (let i = 0; i < explosions.length; i++){
        explosions[i].update();
        explosions[i].draw();
    }
    requestAnimationFrame(animate);
}

animate();