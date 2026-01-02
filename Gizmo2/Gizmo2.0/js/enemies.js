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
    constructor(game){
        super();
        this.game = game;
        this.width = 100;
        this.height = 90;
        this.x = 200;
        this.y = 200;
        this.speedX = 2;
        this.maxFrame = 5;
    }
}

class GroundEnemy extends Enemy {
    constructor(game){
        super();
        this.game = game;
    }
}

class CrawlingEnemy extends Enemy {
    constructor(game){
        super();
        this.game = game;
    }
}