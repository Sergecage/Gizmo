export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
    SITTING_LEFT: 2,
    SITTING_RIGHT: 3,
    RUNNING_LEFT: 4,
    RUNNING_RIGHT: 5,
    JUMPING_LEFT: 6,
    JUMPING_RIGHT: 7,
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
        this.player.speed = 0;
    }
    handleInput(input){
        if (input === "PRESS right") this.player.setState(states.RUNNING_RIGHT);
        else if ( input === "PRESS left") this.player.setState(states.RUNNING_LEFT);
        else if (input === "PRESS down") this.player.setState(states.SITTING_LEFT);
    }
}

class StandingRight extends State {
    constructor(player){
        super("STANDING RIGHT");
        this.player = player;
    }
    enter(){
        this.player.frameY = 1;
        this.player.speed = 0;
    }
    handleInput(input){
        if (input === "PRESS left") this.player.setState(states.RUNNING_LEFT);
        else if ( input === "PRESS right") this.player.setState(states.RUNNING_RIGHT);
        else if (input === "PRESS down") this.player.setState(states.SITTING_RIGHT);
    }
}
class SittingLeft extends State {
    constructor(player){
        super("SITTING LEFT");
        this.player = player;
    }
    enter(){
        this.player.frameY = 9;
        this.player.speed = 0;
    }
    handleInput(input){
        if (input === "PRESS right") this.player.setState(states.SITTING_RIGHT);
        else if (input === "PRESS up") this.player.setState(states.STANDING_LEFT);
        else if (input === "RELEASASE down") this.player.setState(states.STANDING_LEFT);
    }
}
class SittingRight extends State {
    constructor(player){
        super("SITTING RIGHT");
        this.player = player;
    }
    enter(){
        this.player.frameY = 8;
        this.player.speed = 0;
    }
    handleInput(input){
        if (input === "PRESS left") this.player.setState(states.SITTING_LEFT);
        else if (input === "PRESS up") this.player.setState(states.STANDING_RIGHT);
        else if (input === "RELEASASE down") this.player.setState(states.STANDING_RIGHT);
    }
}
class RunningLeft extends State {
    constructor(player){
        super("RUNNING LEFT");
        this.player = player;
    }
    enter(){
        this.player.frameY = 7;
         this.player.speed = -this.player.maxSpeed;
    }
    handleInput(input){
        if (input === "PRESS right") this.player.setState(states.RUNNING_RIGHT);
        else if (input === "RELEASASE left") this.player.setState(states.STANDING_LEFT);
        else if (input === "PRESS down") this.player.setState(states.SITTING_LEFT);
    }
}
class RunningRight extends State {
    constructor(player){
        super("RUNNING RIGHT");
        this.player = player;
    }
    enter(){
        this.player.frameY = 7;
        this.player.speed = this.player.maxSpeed;
    }
    handleInput(input){
        if (input === "PRESS left") this.player.setState(states.RUNNING_LEFT);
        else if (input === "RELEASASE right") this.player.setState(states.STANDING_RIGHT);
        else if (input === "PRESS down") this.player.setState(states.SITTING_RIGHT);
    }
}
class JumpingLeft extends State {
    constructor(player){
        super("JUMPING LEFT");
        this.player = player;
    }
    enter(){
        this.player.frameY = 3;
    }
    handleInput(input){
        if (input === "PRESS left") this.player.setState(states.RUNNING_LEFT);
    }
}
class JumpingRight extends State {
    constructor(player){
        super("JUMPING RIGHT");
        this.player = player;
    }
    enter(){
        this.player.frameY = 3;
    }
    handleInput(input){
        if (input === "PRESS left") this.player.setState(states.RUNNING_LEFT);
    }
}