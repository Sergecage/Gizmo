class Layer {
    constructor(game, width, height, speedModifier, image){
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.image = image;
        this.x = 0;
        this.y = 0;
    }
    update(){
        if (this.x < this.width) this.x = 0;
        else this.x -= this.speed * this.speedModifier;
    }
    draw(context){
        context.drawImage(this.image, this.x , this.y, this.width, this.height);
    }
}

export class Background {
    constructor(game){
        this.game = game;
        this.width = 1200;
        this.height = 750;
        this.layerImage = layer1;
    }
}