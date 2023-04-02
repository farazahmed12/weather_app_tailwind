import axios from "axios";

export const fetchApi = async (city, country) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: city },
    headers: {
      "X-RapidAPI-Key": "7a95f3c898msh678bdae56a62a03p1ad6a6jsnf4abaee5a717",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("Error", error.message);
  }
};
