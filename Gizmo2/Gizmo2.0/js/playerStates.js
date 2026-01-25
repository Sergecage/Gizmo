const states = {
    SITTING: 0,
    RUNNING: 1,
    JUMPING: 2,
}

class State {
    constructor(state){
        this.state = state;
        this.animate = true;
    }
}

export class Sitting extends State {
    constructor(player){
        super("SITTING");
        this.player = player;
    }
    enter(){
        this.player.frameX = 1;
        this.player.frameY = 1;
        this.player.maxFrame = 3;
        this.animate = false;
    }
    handleInput(input){
        if ( input.includes("ArrowRight")) {
            this.player.setState(states.RUNNING, 1);
        }
    }
}

export class Running extends State {
    constructor(player){
        super("RUNNING");
        this.player = player;
    }
    enter(){
        this.player.frameX = 0;
        this.player.frameY = 2;
        this.player.maxFrame = 3;
        this.animate = true;
    }
    handleInput(input){
        if (input.includes("ArrowLeft")) {
            this.player.setState(states.SITTING, 1);
        } else if (input.includes("ArrowUp")) {
            this.player.setState(states.JUMPING, 1);
        }
    }
}

export class Jumping extends State {
    constructor(player){
        super("JUMPING");
        this.player = player;
    }
    enter(){
        this.player.frameX = 0;
        if (this.player.onGround()) {
            this.player.vy -= 30;
        }
        this.player.frameY = 0;
        this.player.maxFrame = 3;
    }
    handleInput(input){
        if (this.player.onGround()) {
            this.player.setState(states.SITTING, 0);
        }
    }
}