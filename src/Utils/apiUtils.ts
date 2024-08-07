export const myFetchData = async (endpoint: string, options: any = null) => {
  let response: any = "";

  try {
    response = await fetch(endpoint, options);
    console.log(response);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
};
