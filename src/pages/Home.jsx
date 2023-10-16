import { useEffect, useState } from "react";
import { urlFor, client } from "../client";

const Home = () => {
  const [home, setHome] = useState([]);

  useEffect(() => {
    const query = '*[_type == "home"]';

    client.fetch(query).then((data) => {
      setHome(data);
    });
  }, []);

  return (
    <main className="flex flex-col md:flex-row justify-center items-center h-full">
      {home.map((home, index) => (
        <section key={index}>
          <div
            className="h-[55vh] w-full bg-no-repeat bg-contain bg-center flex justify-center items-center text-center flex-col gap-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${urlFor(
                home.imgUrl
              )})`,
            }}
          ></div>
          <div className="flex flex-col gap-3 sm:gap-7 justify-center items-center text-center pb-8 sm:p-0 sm:mr-8 sm:mt-6">
            <h1 className="text-white font-medium italic font-primary text-xl xl:text-5xl">
              {home.title}
            </h1>
            <p className="text-white font-medium text-lg mx-2 font-secondary xl:text-3xl">
              {home.description}
            </p>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Home;
