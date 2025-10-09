const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width =1200;
const explosions = [];
let canvasPosition = canvas.getBoundingClientRect();

class Explosion{
    constructor(x, y){
        this.spriteWidth = 500;
        this.spriteHeight = 579;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "./assets/img/Gizmo_walk.png";
        this.frame = 0;
        this.timer = 0;
        this.angle = Math.random() * 6.2;
        this.sound = new Audio();
    }
    update(){
        this.frame++;
    }
    draw(){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, 0 - this.width / 2, 0 - this.height / 2, this.width, this.height);
        ctx.restore();
    }
}

window.addEventListener("click", function(e){
 createAnimation(e);
});

const createAnimation = (e) => {
    let positionX = e.x - canvasPosition.left - 25;
    let positionY = e.y - canvasPosition.top - 25;
    explosions.push(new Explosion(positionX, positionY));
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < explosions.length; i++){
        explosions[i].update();
        explosions[i].draw();
        if (explosions[i].frame > 5){
            explosions.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(animate);
}

animate();