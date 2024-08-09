import { clearApp, createUser } from "./app.js";
import { getTriviaQuestions } from "./getTriviaQuestions.js";

let amount: number;
let category: number | string;
let difficulty: string;
let type: string;

const app = document.getElementById("app");
const setupContainer = document.createElement("div");
setupContainer.classList.add("setup-container");

export const buildGameSetup = () => {
  if (app) {
    clearApp(app);
    clearApp(setupContainer);

    let questionsInput = `
    <header class="game-header">
        <hgroup>
            <h2 class="trivia-header">Trivia The Game</h2>
            <h3>Setup Game Rules</h3>
        </hgroup>
    </header>
    <span class="questions-container">
      <label for="username">Enter Username</label>
      <input id="username" type="text">
    </span>

    <span class="questions-container">
        <label for="questions-amount">Number of questions: (max 50)</label>
        <input id="questions-amount" type="number" min="1" max="50">
    </span>
    <div class="select-container">

        <span class="options-container">
            <label for="category">Select Category</label>
            <select class="game-setup" id="category">
                <option default></option>
                <option>Any Category</option>
            </select>
        </span>

        <span class="options-container">
            <label for="difficulty">Select Difficulty</label>
            <select class="game-setup" id="difficulty">
                <option value="" default></option>
                <option>Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </span>

        <span class="options-container">
            <label for="type">Select Type</label>
            <select class="game-setup" id="type">
                <option value="boolean" default></option>
                <option>Any Type</option>
                <option value="boolean">True / False</option>
                <option value="multiple">Multiple Choice</option>
            </select>
        </span>
    </div>
    <input type="submit" id="start-game" value="Start Game">`;
    setupContainer.innerHTML += questionsInput;
    app.appendChild(setupContainer);

    const nameInputField = document.getElementById("username");
    nameInputField?.addEventListener("change", (e) => {
      const username = e.target.value;
      createUser(username, 0);
    })

    const categorySelect = document.getElementById("category");
    categorySelect?.addEventListener("change", (e) => {
      if (e) {
        category = e.target.value;

        if (category === "Any Category" || "") {
          category = 0;
        }
        console.log(category);
      }
    });

    const questionsAmount = document.getElementById("questions-amount");
    questionsAmount?.addEventListener("change", (e) => {
      amount = e.target.value;
      if (amount === null || 0) {
        amount = 1;
      }
    });

    const difficultySelect = document.getElementById("difficulty");
    difficultySelect?.addEventListener("change", (e) => {
      difficulty = e.target.value;
      if (difficulty === "Any Difficulty" || "") {
        difficulty = "";
      }
      console.log(difficulty);
    });

    const typeSelect = document.getElementById("type");
    typeSelect?.addEventListener("change", (e) => {
      type = e.target.value;
      console.log(type);
      if (type === "Any Type" || "") {
        type = "boolean";
      }
      console.log(type);
    });

    const startBtn = document.getElementById("start-game");
    startBtn?.addEventListener("click", () => {
      getTriviaQuestions(amount, category, difficulty, type);
    });
  }
};
