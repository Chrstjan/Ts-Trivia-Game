import { myFetchData } from "../Utils/apiUtils.js";

export const getDummyData = async () => {
  const endpoint: string = "https://dummyjson.com/recipes?limit=5";
  const data = await myFetchData(endpoint);
  console.log(data);
};
