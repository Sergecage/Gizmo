const states = {
    SITTING: 0,
    RUNNING: 1,
    JUMPING: 2,
}

class State {
    constructor(state){
        this.state = state;
    }
}

export class Sitting extends State {
    constructor(player){
        super("SITTING");
        this.player = player;
    }
    enter(){
        this.player.frameY = 0;
    }
    handleInput(input){
        if (input.icnludes("AroowLeft") ||  input.icnludes("AroowRight")) {
            this.player.setState(states.RUNNING);
        }
    }
}

export class Running extends State {
    constructor(player){
        super("RUNNING");
        this.player = player;
    }
    enter(){
        this.player.frameY = 1;
    }
    handleInput(input){
        if (input.icnludes("AroowDown")) {
            this.player.setState(states.SITTING);
        }
    }
}

export class Jumping extends State {
    constructor(player){
        super("JUMPING");
        this.player = player;
    }
    enter(){
        if (this.player.onGround()) this.vy -= 30;
        this.player.frameY = 0;
    }
    handleInput(input){
        if (input.icnludes("AroowUp")) {
            this.player.setState(states.SITTING);
        }
    }
}