export const Christmas = {
  background: {
    layer1: "",
    layer2: "",
    layer3: "",
    layer4: "",
  },
  enemyInterval: 3000,
  enemy: "none",
  cookieGoal: 10,
  music: "christmas",
  treeImg: "",
};
export function showChristmas() {
  const christmas = document.getElementById("christmas");

  const christmasIcon = document.createElement("div");
  christmasIcon.className = "christmas-icon";

  const words = document.createElement("h6");
  words.innerText = "Christmas level";

  christmas.append(christmasIcon);
  words.append(christmasIcon);

  christmas.addEventListener("click", ()=> {
    christmas.remove();
    startGame("Christmas");
  })
}
