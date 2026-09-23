export class mobileControls {
  constructor(input) {
    this.input = input;
    this.leftButton = document.querySelector("#left-button");
    this.rightButton = document.querySelector("#right-button");
    this.jumpButton = document.querySelector("#jump-button");
    this.addEvents();
  }
  addEvents() {
    this.leftButton.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.input.keys.push("ArrowLeft");
    });
    this.leftButton.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.removeKey("ArrowLeft");
    });
  }
  removeKey() {}
}
