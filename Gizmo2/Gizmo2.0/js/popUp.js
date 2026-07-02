export function showPop(startGame) {
  const gameContainer = document.getElementById("game-container");

  const popup = document.createElement("div");
  popup.classList = "popup";
  gameContainer.append(popup);

  const closeBtn = document.createElement("button");
  closeBtn.className = "popup-close";

  const welcomeText = document.createElement("h2");
  welcomeText.innerText = "Welcome to Gizmo Cookies 2";
  welcomeText.classList = "welcome-text";

  const text = document.createElement("p");
  text.innerText = "Choose your level or play original hardcore one";
  text.classList = "text";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList = "btn-container";
  popup.append(welcomeText, text, buttonContainer);

  const levelOne = document.createElement("button");
  levelOne.innerText = "Level 1";
  levelOne.classList = "btn-1";

  const levelTwo = document.createElement("button");
  levelTwo.innerText = "Level 2";
  levelTwo.classList = "btn-2";

  const levelThree = document.createElement("button");
  levelThree.innerText = "Level 3";
  levelThree.classList = "btn-3";
  buttonContainer.append(levelOne, levelTwo, levelThree);

  popup.addEventListener("click", (e) => {
    const button = e.target.closest("button");

    if (!button) return;
    const level = Number(button.dataset.level);

    popup.remove();

    startGame(level);
  });
}
