import React, { useState } from "react";
import { fetchApi } from "./api.js";

const Form = () => {
  const [data, setData] = useState({ city: "", country: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const getWeather = () => {
    fetchApi(data.city, data.country);
  };

  return (
    <div>
      <div className="mb-6">
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="city"
          id="large-input"
          placeholder="Enter your City here..."
          className=" my-4 bg-slate-900 inline w-[20rem] sm:w-[30rem] p-4 text-white border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          type="button"
          onClick={() => getWeather()}
          className="mx-4  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center  mb-2"
        >
          Get Weather
        </button>
      </div>
    </div>
  );
};

export default Form;
