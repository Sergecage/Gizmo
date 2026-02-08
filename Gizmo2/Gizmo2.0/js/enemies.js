class Enemy {
    constructor(game){
        this.frameX = 0;
        this.frameY = 0;
        this.fps = 20;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.markedForDeletion = false;
    }
    update(deltaTime){
        this.x -= this.speedX + this.game.speed;
        this.y += this.speedY;
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else{
            this.frameTimer += deltaTime;
        }
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }
    draw(context){
        if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}

export class FlyingEnemy extends Enemy {
    constructor(game){
        super(game);
        this.game = game;
        this.image = document.getElementById("enemy_fly");
        this.spriteWidth = this.image.naturalWidth / 5;
        this.spriteHeight = this.image.naturalHeight;
        this.width = this.spriteWidth *0.2;
        this.height = this.spriteHeight * 0.2;
        this.x = this.game.width ;
        this.y = Math.random() * (this.game.height * 0.5);
        this.speedX = 1;
        this.speedY = 0;
        this.maxFrame = 4;
        this.frameX = 0;
        this.frameY = 0;
        this.angle = 0;
        this.va = Math.random() * 0.1 + 0.1;
    }
    update(deltaTime){
        super.update(deltaTime);
        this.angle += this.va;
        this.y += Math.sin(this.angle);
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }
    draw(context){
        if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
    context.drawImage(
        this.image,
        this.frameX * this.spriteWidth,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width,
        this.height
    );
}
}

export class GroundEnemy extends Enemy {
    constructor(game){
        super(game);
        this.game = game;
        this.width = 150;
        this.height = 150;
        this.x = this.game.width;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.image = document.getElementById("enemy_stand");
        this.speedX = 1;
        this.speedY = 0;
        this.maxFrame = 0;
    }
     draw(context){
        if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
    context.drawImage(
        this.image,
        this.x,
        this.y,
        this.width,
        this.height
    );
   
}
}

export class CrawlingEnemy extends Enemy {
    constructor(game){
        super(game);
        this.game = game;
        this.width = 150;
        this.height = 150;
        this.x = this.game.width;
        this.y = Math.random() * this.game.height * 0.5;
        this.image = document.getElementById("enemy_crawl");
        this.speedX = 0;
        this.speedY = Math.random() > 0.5 ? 1 : -1;
        this.maxFrame = 4;
    }
    update(deltaTime){
        super.update(deltaTime);
        if (this.y > this.game.height - this.height - this.game.groundMargin) this.speedY *= -1;
        if (this.y < -this.height) this.markedForDeletion = true;
    }
    draw(context){
        super.draw(context);
        context.beginPath();
        context.moveTo(this.x + this.width / 2, 0);
        context.lineTo(this.x + this.width / 2, this.y + 50);
        context.stroke();
    }
}