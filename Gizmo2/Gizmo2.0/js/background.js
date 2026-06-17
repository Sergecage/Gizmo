class Layer {
  constructor(game, width, height, speedModifier, image) {
    this.game = game;
    this.width = width;
    this.height = height;
    this.speedModifier = speedModifier;
    this.image = image;
    this.x = 0;
    this.y = 0;
  }
  update() {
    if (this.x <= -this.width) this.x = 0;
    else this.x -= this.game.speed * this.speedModifier;
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height,
    );
  }
}

export class Background {
  constructor(game) {
    this.game = game;
    this.width = 1200;
    this.height = 750;
    this.layerImage = layer1;
    this.layerImage2 = layer2;
    this.layerImage3 = layer3;
    this.layerImage4 = layer4;
    this.layer = new Layer(
      this.game,
      this.width,
      this.height,
      1,
      this.layerImage,
    );
    this.layer2 = new Layer(
      this.game,
      this.width,
      this.height,
      1,
      this.layerImage2,
    );
    this.layer3 = new Layer(
      this.game,
      this.width,
      this.height,
      1,
      this.layerImage3,
    );
    this.layer4 = new Layer(
      this.game,
      this.width,
      this.height,
      1,
      this.layerImage4,
    );
    this.layer.x = 0;
    this.layer2.x = this.width;
    this.backgroundLayers = [this.layer, this.layer2];
  }
  update() {
    this.backgroundLayers.forEach((layer) => {
      layer.update();
    });
  }
  draw(context) {
    this.backgroundLayers.forEach((layer) => {
      layer.draw(context);
    });
  }
}
