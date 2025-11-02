window.addEventListener("load", function() {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 720;

    class InputHandler{
        constructor(){
            this.keys = [];
            window.addEventListener("keydown",  e => {
                if ((e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "ArrowRight") 
                    && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key);
                }
            })
            window.addEventListener("keydup",  e => {
                if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "ArrowRight"){
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }
            })
        }
    }

    class Player{
        constructor(gameWidth, gameHeight){
            this.gameHeight = gameHeight;
            this.gameWidth = gameWidth;
            this.width = 250;
            this.height = 200;
            this.x = 0;
            this.y = 0;
        }
        draw(context){
            context.fillStyle = "blue";
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    class Background{

    }

    class Enemy {

    }

    const handleEnemies = () => {

    };

    const displayStatus = () => {

    };

    const input = new InputHandler();
    const player  = new Player();

    const animate = () => {

    };
});