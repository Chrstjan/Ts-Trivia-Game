import { Questions, QuestionsObject } from "../Utils/interfaces.js";
import { clearApp } from "./app.js";
import { buildLanding } from "./buildLanding.js";

const app = document.getElementById("app");
const cardsContainer = document.createElement("div");
cardsContainer.classList.add("cards-container");

export const buildQuestion = async (questions: QuestionsObject) => {
  console.log(questions);
  if (app) {
    clearApp(app);

    let backBtn = `<button id="back-btn">Forfeit Game</button>`;
    app.innerHTML += backBtn;

    questions.results.map((question: Questions, index) => {
      console.log(question);
      console.log(index);

      let questionCards = `
        <span class="question-cards">
            <header>
                <h2>Question: ${question.question}</h2>
                <h3>Category: ${question.category}</h3>
            </header>
            <span class="btn-container">
                <button class="answer-btn" data-answer="True" data-index="${index}">True</button>
                <button class="answer-btn" data-answer="False" data-index="${index}">False</button>
            </span>
        </span>`;
      cardsContainer.innerHTML += questionCards;
      app.appendChild(cardsContainer);
    });

    const goBackBtn = document.getElementById("back-btn");
    goBackBtn?.addEventListener("click", () => {
      buildLanding();
    });

    const answerBtns = document.querySelectorAll(".answer-btn");
    answerBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const clickedBtn = e.target as HTMLElement;
        const selectedAnswer = clickedBtn.getAttribute("data-answer");
        //! tells that the attribute is not null, 10 tells the parse int to the use the base 10 system
        const questionIndex = parseInt(
          clickedBtn.getAttribute("data-index")!,
          10
        );
        const correctAnswer = questions.results[questionIndex].correct_answer;

        const answerContainer = clickedBtn.parentElement as HTMLElement;

        if (selectedAnswer === correctAnswer) {
          console.log("Correct Answer");
          answerContainer.innerHTML += `<h4 class="correct-answer">Correct Answer</h4>`;
        } else {
          console.log("Incorrect Answer");
          answerContainer.innerHTML += `<h4 class="incorrect-answer">Incorrect Answer</h4>`;
        }
      });
    });
  }
};
