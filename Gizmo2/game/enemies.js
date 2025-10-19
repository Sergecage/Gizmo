document.addEventListener("load", function(){
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width =1200;

class Game{
    constructor(){
        this.enemies = [];
    }
    update(){

    }
    draw(){

    }
    #addNewEnemy(){
        
    }
}

class Enemy {
    constructor(){

    }
    update(){

    }
    draw(){

    }
}

const animate = (timeStamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const deltaTime = timeStamp - lastTime;
    requestAnimationFrame(animate);
}
})