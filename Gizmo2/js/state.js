export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
    SITTING_LEFT: 2,
    SITTING_RIGHT: 3,
}

class State {
    constructor(state){
        this.state = state;
    }
}

class StandingLeft extends State {
    constructor(player){
        super("STANDING LEFT");
        this.player = player;
    }
    enter(){
        this.player.frameY = 1;
    }
    handleInput(input){
        if (input === "PRESS right") this.player.setState(states.STANDING_RIGHT);
    }
}

class StandingRight extends State {
    constructor(player){
        super("STANDING RIGHT");
        this.player = player;
    }
    enter(){
        this.player.frameY = 1;
    }
    handleInput(input){
        if (input === "PRESS left") this.player.setState(states.STANDING_LEFT);
    }
}
class SittingLeft extends State {
    constructor(player){
        super("SITTING LEFT");
        this.player = player;
    }
    enter(){
        this.player.frameY = 1;
    }
    handleInput(input){
        if (input === "PRESS right") this.player.setState(states.SITTING_RIGHT);
        else if (input === "PRESS up") this.player.setState(states.STANDING_LEFT);
    }
}