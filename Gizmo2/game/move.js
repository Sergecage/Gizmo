window.addEventListener("load", function() {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 720;

    class InputHandler{
        constructor(){
            this.keys = [];
            window.addEventListener("keydown",  e => {
                if (e.key === "ArrowDown" && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key);
                }
            })
        }
    }

    class Player{

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

    const animate = () => {

    };
});