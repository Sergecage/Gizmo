export function showPop(startGame) {
  const gameContainer = document.getElementById("game-container");

  const popup = document.createElement("div");
  popup.className = "popup";
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

  const playButton = document.createElement("button");
  playButton.className = "play-btn";
  playButton.textContent = "Play";

  const levelContainer = document.createElement("div");
  levelContainer.className = "level-container";

  const levelOne = document.createElement("button");
  levelOne.textContent = "Level 1";
  levelOne.className = "btn-1";

  const levelTwo = document.createElement("button");
  levelTwo.textContent = "Level 2";
  levelTwo.className = "btn-2";

  const levelThree = document.createElement("button");
  levelThree.textContent = "Level 3";
  levelThree.className = "btn-3";
  levelContainer.append(levelOne, levelTwo, levelThree);
  buttonContainer.append(playButton, levelContainer);

  playButton.addEventListener("click", () => {
    popup.remove();

    startGame("hardcore");
  });

  closeBtn.addEventListener("click", (e) => {
    popup.remove();
    startGame("hardcore");
  });

  levelOne.addEventListener("click", () => {
    popup.remove();
    startGame("level-1");
  });
}
