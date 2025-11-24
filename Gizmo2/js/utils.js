export const drawStatus = (context, input, player) => {
    context.font = "30px Helvetica";
    context.fillText("Last Input: " + input.lastKey, 20, 50); 
    context.fillText("Active state: " + player.currentState.state);
}