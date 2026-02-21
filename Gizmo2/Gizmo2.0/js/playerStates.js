import { Dust, Splash } from "./particles.js";

const states = {
    RUNNING_LEFT: 0,
    RUNNING_RIGHT: 1,
    JUMPING: 2,
}

class State {
    constructor(state, game){
        this.state = state;
        this.game = game;
        this.animate = true;
    }
}

export class RunningLeft extends State {
    constructor(game){
        super("RUNNING_LEFT", game);
    }
    enter(){
        this.game.player.frameX = 1;
        this.game.player.frameY = 1;
        this.game.player.maxFrame = 3;
        this.animate = false;
    }
    handleInput(input){
        if ( input.includes("ArrowRight")) {
            this.game.player.setState(states.RUNNING, 1);
        }
    }
}

export class Running extends State {
    constructor(game){
        super("RUNNING_RIGHT", game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.frameY = 2;
        this.game.player.maxFrame = 0;
        this.animate = true;
    }
    handleInput(input){
        this.game.particles.push(new Dust(this.game, this.game.player.x + this.game.player.width * 0.5, this.game.player.y + this.game.player.height));
        if (input.includes("ArrowLeft")) {
            this.game.player.setState(states.RUNNING_LEFT, 1);
        } else if (input.includes("ArrowUp")) {
            this.game.player.setState(states.JUMPING, 1);
        }
    }
}

export class Jumping extends State {
    constructor(game){
        super("JUMPING", game);
    }
    enter(){
        this.game.player.frameX = 0;
        if (this.game.player.onGround()) {
            this.game.player.vy -= 30;

            for (let i = 0; i < 20; i++) {
                this.game.particles.push(new Splash(this.game, this.game.player.x + this.game.player.width * 0.5, this.game.player.y + this.game.player.height));
            }
        }
        this.game.player.frameY = 0;
        this.game.player.maxFrame = 0;
    }
    handleInput(input){
        if (this.game.player.onGround()) {
            this.game.player.setState(states.RUNNING_RIGHT, 0);
        }
    }
}