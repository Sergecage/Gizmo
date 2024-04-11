const content = document.querySelector(".main");
//const graphics = document.selectElementByTagName('svg')[0];
const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const gizmo = document.querySelector(".gizmo-img");
const playArea = document.querySelector(".area");

/*const head = document.createElement("ellipse");
head.setAttribute = "0 0 200 100";
head.style.fill = "grey";
head.style.cx = "100";
head.style.cy = "40";
head.style.rx = "45";
head.style.ry = "35";
graphics.append(head);*/

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
    img: "../img/pitures/cookie.png"
},
{
    name: "macaroni",
    meaning: "food",
    bonus: "15",
    img: "../img/pitures/macaroni.png"
},
{   
    name: "cupcake",
    meaning: "food",
    bonus: "20",
    img: "../img/pitures/cupcake.png"
},
{
    name: "button",
    meaning: "thing",
    bonus: "0",
    img: "../img/pitures/button.png"
},
{
    name: "rock",
    meaning: "food",
    bonus: "0",
    img: "../img/pitures/rock.png"
}];


//create item for the game
const generateItem = (item) => {
    const itemContainer = document.createElement("div");
    itemContainer.className = "play-item";
    const itemImg = document.createElement("img");
    itemImg.className = "item";
    const randomImg =items[0].img;
    itemImg.src = `${randomImg}`;
    itemImg.alt = `${items[0].name}`;
    itemContainer.append(itemImg);
    leftSide.append(itemContainer);
}

generateItem();