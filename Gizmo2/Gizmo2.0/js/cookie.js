export class Cookie {
  constructor(game) {
    this.game = game;
    this.spriteWidth = 150;
    this.spriteHeight = 190;
    this.width = 80;
    this.height = 80;
    this.x = Math.random() * (this.game.width - this.width);
    this.y =
      Math.random() * (this.game.height - this.height - this.game.groundMargin);
    this.image = document.getElementById("cookie");
    this.markedForDeletion = false;
  }
  update() {}
  draw(context) {
    context.drawImage(
      this.image,
      0,
      0,
      this.spriteWidth,
      this.spriyeHeight,
      this.x,
      this.y,
      this.width,
      this.height,
    );
  }
}
