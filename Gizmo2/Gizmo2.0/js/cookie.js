export class Cookie {
  constructor(game) {
    this.game = game;
    this.spriteWidth = 250;
    this.spriteHeight = 290;
    this.width = 180;
    this.height = 180;
    this.x = Math.random() * (this.game.width - this.width);
    this.y =
      Math.random() * (this.game.height - this.height - this.game.groundMargin);
    this.image = document.getElementById("cookie");
    this.frameX = 0;
    this.maxFrame = 4;
    this.markedForDeletion = false;
  }
  update() {}
  draw(context) {
    context.drawImage(
      this.image,
      0,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height,
    );
  }
}
