const canvas = document.getElementById("game-canvas-1");

const popup = document.createElement("div");
popup.classList = "popup";
canvas.append(popup);

const welcomeText = document.createElement("h2");
welcomeText.innerText = "Welcome to Gizmo Cookies 2";
welcomeText.classList = "welcome-text";

const text = document.createElement("p");
text.innerText = "Choose your level or play original hardcore one";
text.classList = "text";
popup.append(welcomeText, text);

const levelOne = document.createElement("button");
levelOne.innerText = "Level 1";
levelOne.classList = "btn-1";

const levelTwo = document.createElement("button");
levelTwo.innerText = "Level 2";
levelTwo.classList = "btn-2";

const levelThree = document.createElement("button");
levelThree.innerText = "Level 3";
levelThree.classList = "btn-3";
