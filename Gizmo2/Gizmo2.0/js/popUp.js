const canvas = document.getElementById("game-canvas-1");

const popup = document.createElement("div");
popup.classList = "popup";
canvas.append(popup);

const welcomeText = document.createElement("h2");
welcomeText.innerText = "Welcome to Gizmo Cookies 2";
welcomeText.classList = "welcome-text";
