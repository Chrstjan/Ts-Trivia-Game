import { QuestionsObject } from "../Utils/interfaces.js";
import { buildQuestion } from "./buildQuestion.js"

export const receivedQuestions = async (questions: QuestionsObject) => {
    let userPoints: number = 0;
    let scoreMultiplyer: number = 1; 
    console.log(questions);
    buildQuestion(questions, userPoints, scoreMultiplyer);
}