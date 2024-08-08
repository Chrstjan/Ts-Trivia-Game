import { clearApp } from "./app.js";

const app = document.getElementById("app");

export const buildGameSetup = () => {
  if (app) {
    clearApp(app);

    let questionsInput = `
    <header class="game-header">
        <hgroup>
            <h2 class="trivia-header">Trivia The Game</h2>
            <h3>Setup Game Rules</h3>
        </hgroup>
    </header>
    <span class="questions-container">
        <label for="questions-amount">Number of questions: (max 50)</label>
        <input id="questions-amount" type="number" min="1" max="50">
    </span>
    <div class="select-container">

        <span class="options-container">
            <label for="category">Select Category</label>
            <select class="game-setup" id="category">
                <option default>Any Category</option>
            </select>
        </span>

        <span class="options-container">
            <label for="difficulty">Select Difficulty</label>
            <select class="game-setup" id="difficulty">
                <option default>Any Category</option>
            </select>
        </span>

        <span class="options-container">
            <label for="type">Select Type</label>
            <select class="game-setup" id="type">
                <option default>Any Type</option>
                <option value="boolean">True / False</option>
                <option>Multiple Choice</option>
            </select>
        </span>
    </div>
    <input type="submit" id="start-game" value="Start Game">`;
    app.innerHTML += questionsInput;
  }
};
