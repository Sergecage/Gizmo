class Enemy {
    constructor(){
        this.frameX = 0;
        this.frameY = 0;
        this.fps = 20;
        this.frameInterval = 1000 / this.fps;
        this.frameTime = 0;
    }
    update(){

    }
    draw(){

    }
}

class FlyingEnemy extends Enemy {
    constructor(){
        super();
    }
}

class GroundEnemy extends Enemy {
    constructor(){
        super();
    }
}

class CrawlingEnemy extends Enemy {
    constructor(){
        super();
    }
}