import { Player } from "./js/player";

window.addEventListener('load', function(){
    const canvas = document.getElementById("game-canvas-1");
    const ctx = canvas.getContext("2d");
    canvas.width = 900;
    canvas.height = 500;

    class Game{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player();
        }
        update(){

        }
        draw(){
            
        }
    }
});