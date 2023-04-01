import React from "react";

import Form from "./Form";

const Home = () => {
  const [result, setResult] = React.useState({});
  return (
    <div>
      <section className="w-full h-screen bg-center bg-cover bg-no-repeat bg-[url('./assets/sunset.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 md:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Fell free to check Weather around you.
          </h1>

          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
