import { Dust } from "./particles.js";

const states = {
    SITTING: 0,
    RUNNING: 1,
    JUMPING: 2,
}

class State {
    constructor(state, game){
        this.state = state;
        this.game = game;
        this.animate = true;
    }
}

export class Sitting extends State {
    constructor(game){
        super("SITTING", game);
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
        super("RUNNING");
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.frameY = 2;
        this.game.player.maxFrame = 0;
        this.animate = true;
    }
    handleInput(input){
        if (input.includes("ArrowLeft")) {
            this.game.player.setState(states.SITTING, 1);
        } else if (input.includes("ArrowUp")) {
            this.game.player.setState(states.JUMPING, 1);
        }
    }
}

export class Jumping extends State {
    constructor(game){
        super("JUMPING");
    }
    enter(){
        this.game.player.frameX = 0;
        if (this.game.player.onGround()) {
            this.game.player.vy -= 30;
        }
        this.game.player.frameY = 0;
        this.game.player.maxFrame = 0;
    }
    handleInput(input){
        if (this.game.player.onGround()) {
            this.game.player.setState(states.SITTING, 0);
        }
    }
}