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
    this.fps = 10;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.markedForDeletion = false;
  }
  update(deltaTime) {
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) {
        this.frameX++;
      } else {
        this.frameX = 0;
      }
    } else {
      this.frameTimer += deltaTime;
    }
  }
  draw(context) {
    context.drawImage(
      this.image,
      this.frameX + this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height,
    );
    if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height);
    }
  }
}
