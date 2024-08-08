import { clearApp } from "./app.js";
import { buildGameSetup } from "./buildSetup.js";
const app = document.getElementById("app");
const landingContainer = document.createElement("div");
landingContainer.classList.add("landing-container");
export const buildLanding = () => {
    if (app) {
        clearApp(app);
        let landingView = `
    <header class="game-header">
        <h1 class="trivia-header">Trivia the game</h1>
        <h3>Test your knowledge</h3>
    </header>
    <button class="game-btn" id="setup-game-btn">Setup Game</button>
    <button class="game-btn" id="leaderboard-btn">Leaderboard</button>`;
        landingContainer.innerHTML += landingView;
        app.appendChild(landingContainer);
        const setupBtn = document.getElementById("setup-game-btn");
        setupBtn === null || setupBtn === void 0 ? void 0 : setupBtn.addEventListener("click", () => {
            buildGameSetup();
        });
        const leaderboardBtn = document.getElementById("leaderboard-btn");
        leaderboardBtn.addEventListener("click", () => {
            console.log("Funny Haha");
        });
    }
};
