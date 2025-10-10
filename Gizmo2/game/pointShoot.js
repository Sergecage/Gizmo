const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width =1200;

let bats = [];
class Bat{
    constructor(x, y){
        this.width = 100;
        this.height = 50;
        this.x = canvas.width;
        this.y = Math.random() * canvas.height;
    }
}