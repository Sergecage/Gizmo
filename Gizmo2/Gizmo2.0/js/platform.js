export class Platform {
  constructor() {
    this.width = 250;
    this.height = 20;
    this.x = x;
    this.y = y;
    this.spawnInterval = 6000;
  }
  update() {}
  draw(context) {
    context.strokeRect(this.x, this.y, this.width, this.height);
  }
}
