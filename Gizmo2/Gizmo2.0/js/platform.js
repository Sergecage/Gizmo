export class Platform {
  constructor() {
    this.width = 250;
    this.height = 20;
    this.x = x;
    this.y = y;
  }
  draw(context) {
    context.strokeRect(this.x, this.y, this.width, this.height);
  }
}
