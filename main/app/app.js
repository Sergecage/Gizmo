const container = document.querySelector("[data-container]");
const containerWidth = 100;
const containerHeight = 70;
const content = document.querySelector(".main");
const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const gizmoImg = document.querySelector(".gizmo-img");
const gizmo = document.querySelector(".gizmo");
const playArea = document.querySelector(".area");
const modalBtn = document.querySelector(".close");
const modal = document.querySelector(".modal");

let score = 0;

localStorage.setItem("total", score.toString());


//scale resolution
/*const setPixels = () => {
    let containerPixels;
    if (window.innerWidth / window.innerHeight < containerWidth / containerHeight) {
        containerPixels = window.innerWidth / containerWidth;
    } else {
        containerPixels = window.innerHeight / containerHeight;
    }

    container.style.width = `${containerWidth * containerPixels}px`;
    container.style.heigh = `${containerHeight *containerPixels}px`;
}

setPixels();10
window.addEventListener("resize", setPixels);*/

//Gizmo moves
rightSide.addEventListener("mouseover", event => {
    gizmoImg.src = `./img/pictures/Gizmo-right.png`;
});

leftSide.addEventListener("mouseover", event => {
    gizmoImg.src = `./img/pictures/Gizmo-left.png`;
})

//items to catch
const items = [{
    name: "cookie",
    meaning: "food",
    bonus: "10",
    img: "img/pictures/cookie.png"
},
{
    name: "macaroni",
    meaning: "food",
    bonus: "15",
    img: "img/pictures/macaroni.png"
},
{   
    name: "cupcake",
    meaning: "food",
    bonus: "20",
    img: "img/pictures/cupcake.png"
},
{
    name: "button",
    meaning: "thing",
    bonus: "0",
    img: "img/pictures/button.png"
},
{
    name: "rock",
    meaning: "thing",
    bonus: "0",
    img: "img/pictures/rock.png"
}];

//create cookie item
const itemContainer = document.createElement("div");
    itemContainer.className = "play-item";
    const itemImg = document.createElement("img");
    itemImg.className = "item";
    
let getName = '';   

let itemContainerX = Math.random() * (playArea.offsetWidth - itemContainer.offsetWidth);
let gizmoX = playArea.offsetWidth / 2 - gizmo.offsetWidth /2;
let itemContainerY = 0;
//create item for the game
const generateItem = () => {
    const randomImg =items[Math.floor(Math.random() *items.length)];
    itemImg.src = `${randomImg.img}`;
    itemImg.alt = `${randomImg.name}`;
    let randomMeaning = `${randomImg.meaning}`;
    getName =randomMeaning;
    itemContainer.append(itemImg);
    playArea.append(itemContainer);
}

let currentScore = 0;

//update score
const updateScore = () => {
        scoreItem.innerText = parseInt(score++);
}

const decreaseScore = () => {
    //scoreItem.innerText = parseInt(score--);
    scoreItem.innerText = parseInt(score--);
}



//drop item function
const dropItem =  () => {
    itemContainerY += 1;
    itemContainer.style.top = `${itemContainerY}px`;
    itemContainer.style.left = `${itemContainerX}px`
    
    console.log(getName);
    if (itemContainerY > playArea.offsetHeight - gizmo.offsetHeight / 1.6 &&
        itemContainerX + itemContainer.offsetWidth > gizmoX &&
        itemContainerX < gizmoX + gizmo.offsetWidth && getName == "food") { 
            updateScore();
            resetItem();
        } else if ( itemContainerY > playArea.offsetHeight - gizmo.offsetHeight / 1.6 &&
            itemContainerX + itemContainer.offsetWidth > gizmoX &&
            itemContainerX < gizmoX + gizmo.offsetWidth && getName == "thing") {
                decreaseScore();
                resetItem();
                localStorage.getItem(score.toString());
        } 
        else if ( itemContainerY > playArea.offsetHeight) {
            resetItem();
            localStorage.getItem(score.toString());
        } else {
            requestAnimationFrame(dropItem);
        }

    closeModal();
    itemContainer.classList.remove("active");
    animation.style.display = "none";
}

//reset item
const resetItem = () => {
    itemContainerY = 0;
    itemContainerX = Math.random() * (playArea.offsetWidth - itemContainer.offsetWidth);
    dropItem();
    generateItem();
}

//create start button
const startBtn = document.createElement("div");
    startBtn.className = "start-btn";
    startBtn.innerText = "start";
    content.append(startBtn);

//score
const scoreItem = document.createElement("div");
scoreItem.className = "score";
scoreItem.innerText = "0";
content.append(scoreItem);
//start game 

//move Gizmo
const moveGizmo = (button) => {
    const move = 50;
    if (button.key === "ArrowLeft" && gizmoX > 0) {
        gizmoX -= move;
        gizmoImg.src = `./img/pictures/Gizmo-left.png`;
    }
     if (button.key === "ArrowRight" && gizmoX < playArea.offsetWidth - gizmo.offsetWidth){
        gizmoX += move;
        gizmoImg.src = `./img/pictures/Gizmo-right.png`;
    }
    gizmo.style.left = `${gizmoX}px`;
}

const moveGizmoTouch = (button) => {
    const move = 50;
    const gizmoRect = gizmo.getBoundingClientRect();
    if (gizmoImg.bottom >= gizmoRect.top && gizmoRect.left < gizmoRect.right && gizmoRect.right > gizmoRect.left) {
        gizmoX -= move;
        gizmoImg.src = `./img/pictures/Gizmo-left.png`;
        return;
    }
     if (button.touch === gizmoX && gizmoX < playArea.offsetWidth - gizmo.offsetWidth){
        gizmoX += move;
        gizmoImg.src = `./img/pictures/Gizmo-right.png`;
    }
    button.preventDefault();
    gizmo.style.left = `${gizmoX}px`;
}

//close modal window
const closeModal = () => {
    modal.style.display = "none";
}


startBtn.addEventListener("click", dropItem);
startBtn.addEventListener("touchstart", dropItem);
document.addEventListener("keydown", moveGizmo);
document.addEventListener("touchmove", moveGizmoTouch);
modalBtn.addEventListener("click", closeModal);
modalBtn.addEventListener("touchstart", closeModal);

//disco Gizmo
const discoBtn = document.createElement("div");
discoBtn.className = "disco-btn";
discoBtn.innerText = "disco";
content.append(discoBtn);

//dances Gizno
const animation = document.createElement("div");
    animation.className = "dance";
    animation.style.backgroundImage = "url(./img/animation/Gizmo-animation.gif)";

const discoGizmo = () => {
    generateItem();
    itemContainer.classList.add("active");   
    closeModal();
    playArea.append(animation);
    //resetItem();
}

discoBtn.addEventListener("click", discoGizmo);
discoBtn.addEventListener("touchstart", discoGizmo);