import { clearApp } from "./app.js";
import { buildGameSetup } from "./buildSetup.js";

const app = document.getElementById("app");

export const buildLanding = () => {
  if (app) {
    clearApp(app);

    let landingView = `
    <header class="game-header">
        <h1 class="trivia-header">Trivia the game</h1>
        <h4>Test your knowledge</h4>
    </header>
    <button class="game-btn" id="setup-game-btn">Setup Game</button>
    <button class="game-btn" id="leaderboard-btn">Leaderboard</button>`;

    app.innerHTML += landingView;

    const setupBtn = document.getElementById(
      "setup-game-btn"
    ) as HTMLButtonElement;
    setupBtn?.addEventListener("click", () => {
      buildGameSetup();
    });

    const leaderboardBtn = document.getElementById(
      "leaderboard-btn"
    ) as HTMLButtonElement;
    leaderboardBtn.addEventListener("click", () => {
      console.log("Funny Haha");
    });
  }
};
