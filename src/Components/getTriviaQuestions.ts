import { myFetchData } from "../Utils/apiUtils.js";
import { buildQuestion } from "./buildQuestion.js";

export const getTriviaQuestions = async (
  amount: number,
  category: number | string,
  difficulty: string,
  type: string
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
  const data = await myFetchData(endpoint);
  buildQuestion(data);
  console.log(data);
};
