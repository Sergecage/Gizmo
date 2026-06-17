import { Player } from "./js/player.js";
import { InputHandler } from "./js/input.js";
import { Background } from "./js/background.js";
import { FlyingEnemy, GroundEnemy, CrawlingEnemy } from "./js/enemies.js";
import { UI } from "./js/UI.js";
import { Music } from "./js/music.js";
import { Cookie } from "./js/cookie.js";

window.addEventListener("load", function () {
  const canvas = document.getElementById("game-canvas-1");
  const ctx = canvas.getContext("2d");
  canvas.width = 1200;
  canvas.height = 750;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.groundMargin = 0;
      this.speed = 1;
      this.maxSpeed = 3;
      this.background = new Background(this);
      this.player = new Player(this);
      this.input = new InputHandler(this);
      this.UI = new UI(this);
      this.music = new Music(this);
      this.enemies = [];
      this.particles = [];
      this.cookies = [];
      this.collisions = [];
      this.enemyTimer = 0;
      this.enemyInterval = 3000;
      this.debug = false;
      this.score = 0;
      this.winScore = 10;
      this.fontColor = "orange";
      this.time = 0;
      this.maxTime = 100000;
      this.gameOver = false;
      this.lives = 3;
      this.player.currentState = this.player.states[0];
      this.player.currentState.enter();
      this.cookieTimer = 0;
      this.cookieInterval = 5000;
    }
    update(deltaTime) {
      this.time += deltaTime;
      if (this.time > this.maxTime) this.gameOver = true;
      this.background.update();
      this.player.update(this.input.keys, deltaTime);

      if (this.enemyTimer > this.enemyInterval) {
        this.AddEnemy();
        this.enemyTimer = 0;
      } else {
        this.enemyTimer += deltaTime;
      }
      if (this.cookieTimer > this.cookieInterval) {
        this.cookies.push(new Cookie(this));
        this.cookieTimer = 0;
      } else {
        this.cookieTimer += deltaTime;
      }

      this.enemies.forEach((enemy) => {
        enemy.update(deltaTime);
      });
      this.cookies.forEach((cookie) => {
        cookie.update(deltaTime);
      });
      this.particles.forEach((particle, index) => {
        particle.update();
      });
      this.collisions.forEach((collision, index) => {
        collision.update();
        if (collision.markedForDeletion) this.collisions.splice(index, 1);
      });
      this.particles = this.particles.filter(
        (particle) => !particle.markedForDeletion,
      );
      this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);
      this.collisions = this.collisions.filter(
        (collision) => !collision.markedForDeletion,
      );
      this.music.update();
      this.cookies = this.cookies.filter((cookie) => !cookie.markedForDeletion);
    }
    draw(context) {
      this.background.draw(context);
      this.cookies.forEach((cookie) => {
        cookie.draw(context);
      });
      this.player.draw(context);
      this.enemies.forEach((enemy) => {
        enemy.draw(context);
      });
      this.particles.forEach((particle) => {
        particle.draw(context);
      });
      this.UI.draw(context);
      this.music.draw(context);
    }
    AddEnemy() {
      if (this.speed > 0 && Math.random() < 0.5)
        this.enemies.push(new GroundEnemy(this));
      else if (this.speed > 0) this.enemies.push(new CrawlingEnemy(this));
      this.enemies.push(new FlyingEnemy(this));
    }
  }

  const game = new Game(canvas.width, canvas.height);
  let lastTime = 0;

  const animate = (timeStamp) => {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);
    if (!game.gameOver) requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
});
