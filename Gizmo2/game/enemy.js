/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.width =1200;

enemy1 = {
    x: 0,
    y: 0,
    width: 200,
    height: 200,
}

const animateEnemy1 = () => {
    ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
}

animateEnemy1();