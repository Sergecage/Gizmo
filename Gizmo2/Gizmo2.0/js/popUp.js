export function showPop(startGame) {
  const gameContainer = document.getElementById("game-container");

  const popup = document.createElement("div");
  popup.classList = "popup";
  gameContainer.append(popup);

  const closeBtn = document.createElement("button");
  closeBtn.className = "popup-close";
  closeBtn.setAttribute("aria-label", "Close");

  const welcomeText = document.createElement("h2");
  welcomeText.textContent = "Welcome to Gizmo Cookies 2";
  welcomeText.className = "welcome-text";

  const text = document.createElement("p");
  text.textContent =
    "Choose your level or play original hardcore one, collect cookies, avoid monsters and survive as long as possible!";
  text.className = "text";

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "btn-container";
  popup.append(welcomeText, text, buttonContainer, closeBtn);

  const levelOne = document.createElement("button");
  levelOne.textContent = "Level 1";
  levelOne.className = "btn-1";

  const levelTwo = document.createElement("button");
  levelTwo.textContent = "Level 2";
  levelTwo.className = "btn-2";

  const levelThree = document.createElement("button");
  levelThree.textContent = "Level 3";
  levelThree.className = "btn-3";
  buttonContainer.append(levelOne, levelTwo, levelThree);

  popup.addEventListener("click", (e) => {
    const button = e.target.closest("button");

    if (!button) return;
    const level = Number(button.dataset.level);

    popup.remove();

    startGame(level);
  });
}
