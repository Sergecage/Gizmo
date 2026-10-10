const landscapeQuery = window.matchMedia("(orientation: landscape)");
const gameContainer = document.querySelector("#game-container");
const rotateMessage = document.querySelector(".rotate-message");

export function updateOrientation() {
  const isLandscape = landscapeQuery.matches;

  gameContainer.classList.toggle("landscape-mode", isLandscape);
  gameContainer.classList.toggle("portrait-mode", !isLandscape);
}
updateOrientation();
