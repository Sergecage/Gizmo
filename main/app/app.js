const content = document.querySelector(".main");
//const graphics = document.selectElementByTagName('svg')[0];
const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const gizmoImg = document.querySelector(".gizmo-img");
const gizmo = document.querySelector(".gizmo");
const playArea = document.querySelector(".area");

let score = 0;

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
    
    

let itemContainerX = Math.random() * (playArea.offsetWidth - itemContainer.offsetWidth);
let gizmoX = playArea.offsetWidth / 2 - gizmo.offsetWidth /2;
let itemContainerY = 0;
//create item for the game
const generateItem = () => {
    const randomImg =items[Math.floor(Math.random() *items.length)];
    itemImg.src = `${randomImg.img}`;
    itemImg.alt = `${randomImg.name}`;
    const randomMeaning = `${randomImg.meaning}`;
    console.log(randomMeaning);
    itemContainer.append(itemImg);
    playArea.append(itemContainer);
    if (randomMeaning == "food"){
    updateScore();
    } else {
        decreaseScore();
    }
}

//update score
const updateScore = () => {
        scoreItem.innerText = parseInt(score++);
}

const decreaseScore = () => {
    scoreItem.innerText = parseInt(score--);
}


//drop item function
const dropItem =  () => {
    itemContainerY += 1;
    itemContainer.style.top = `${itemContainerY}px`;
    itemContainer.style.left = `${itemContainerX}px`

    if (itemContainerY > playArea.offsetHeight - gizmo.offsetHeight / 1.6 &&
        itemContainerX + itemContainer.offsetWidth > gizmoX &&
        itemContainerX < gizmoX + gizmo.offsetWidth) { 
            resetItem();
        } else if ( itemContainerY > playArea.offsetHeight) {
            resetItem();
        } else {
            requestAnimationFrame(dropItem);
        }
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
    console.log("move");
}


startBtn.addEventListener("click", dropItem);
document.addEventListener("keydown", moveGizmo);

/*const discoGizmo (button) => {
    itemContainer.classList.add("active");
    if (button.key.startsWith("ArrowLeft")) {
        gizmo.classList.toggle("left");
    }
    else if (button.key.startsWith("ArrowRight")){
        gizmo.classList.toggle("right");
    }
}*/