const content = document.querySelector(".main");
//const graphics = document.selectElementByTagName('svg')[0];
const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const gizmo = document.querySelector(".gizmo-img");
const playArea = document.querySelector(".area");


//Gizmo moves
rightSide.addEventListener("mouseover", event => {
    gizmo.src = `./img/pictures/Gizmo-right.png`;
});

leftSide.addEventListener("mouseover", event => {
    gizmo.src = `./img/pictures/Gizmo-left.png`;
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
    meaning: "food",
    bonus: "0",
    img: "img/pictures/rock.png"
}];

//create cookie item
const itemContainer = document.createElement("div");
    itemContainer.className = "play-item";
    const itemImg = document.createElement("img");
    itemImg.className = "item";
    const randomImg =items[Math.floor(Math.random() *items.length)];
    itemImg.src = `${randomImg.img}`;
    itemImg.alt = `${randomImg.name}`;
    itemContainer.append(itemImg);

//create item for the game
const generateItem = () => {
    leftSide.append(itemContainer);
}


//drop item function
const dropItem =  () => {
    generateItem();
    //gizmo.classList.add("left");
    itemContainer.classList.add("active");
}
//create start button
const startBtn = document.createElement("div");
    startBtn.className = "start-btn";
    startBtn.innerText = "start";
    playArea.append(startBtn);
//start game 
const startGame = () => {
    dropItem();
}
//move Gizmo
const moveGizmo = (button) => {
    if (button.key.startsWith("ArrowLeft")) {
        gizmo.classList.add("left");
    }
    else if (button.key.startsWith("ArrowRight")){
        gizmo.classList.add("right");
    }
}
startBtn.addEventListener("click", startGame);
document.addEventListener("keydown", moveGizmo);
