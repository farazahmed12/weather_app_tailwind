import React from "react";
import { MdError } from "react-icons/md";

import Form from "./Form";
import Report from "./Report";

const Home = () => {
  const [result, setResult] = React.useState({});
  const [error, setError] = React.useState("");
  return (
    <div>
      <section className="w-full h-screen bg-center bg-cover bg-no-repeat bg-[url('./assets/sunset.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 md:py-24">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Fell free to check Weather around you.
          </h1>

          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Form setResult={setResult} setError={setError} />
          </div>
          <div className=" space-y-4">
            <Report result={result} />
            {error ? (
              <div className=" grid justify-items-center ">
                <div className="bg-slate-700 p-8 my-8">
                  <div className="text-lg sm:text-4xl flex flex-row justify-center my-3">
                    <p className="  text-red-700  mx-2 sm:mx-4 my-1">
                      <MdError />
                    </p>
                    <p className="text-white font-semibold">{error}</p>
                  </div>
                  <div className="text-lg sm:text-2xl flex flex-row justify-center my-3">
                    <p className=" text-white  mx-4">
                      Try to understand, we are using the free version 😜
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
