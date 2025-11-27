import {StandingLeft, StandingRight, SittingLeft, SittingRight, RunningLeft, RunningRight} from './state'

export default class Player {
    constructor(gameWidt, gameHeight){
        this.gameWidt = gameWidt;
        this.gameHeight= gameHeight;
        this.states = [new StandingLeft(this), new StandingRight(this), new SittingLeft(this), new SittingRight(this),
            new RunningLeft(this), new RunningRight(this)];
        this.currentState = this.staets[0];
        this.image = document.getElementById("player");
        this.width = 250;
        this.height = 180;
        this.x = this.gameWidth / 2  - this.width / 2;
        this.y = this.gameHeight / 2 - this.height / 2;
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 0;
        this.maxSpeed = 10;
    }
    draw(context){
        context.drawImage(this.image , this.width * frameX, this.height * frameY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    update(input){
        this.currentState.handleInput(input);
        this.x += this.speed;
    }
    setState(state){
        this.currentState = this.state[state];
        this.currentState.enter();
    }
}