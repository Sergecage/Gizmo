const landscapeQuery = window.matchMedia("(orientation: landscape)");
const gameContainer = document.querySelector("#game-container");
const rotateMessage = document.querySelector(".rotate-message");

export function updateOrientation() {
  const isLandscape = landscapeQuery.matches;
}
updateOrientation();
