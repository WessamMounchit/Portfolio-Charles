import { Fragment, useEffect, useState } from "react";
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
        <Fragment key={index}>
          <div
            className="h-[50%] md:h-full w-full bg-no-repeat bg-contain bg-center flex justify-center items-center text-center flex-col gap-4"
            style={{
              backgroundImage: `url(${urlFor(
                home.imgUrl
              )})`,
            }}
          ></div>
          <div className="h-1/4 md:h-auto flex flex-col gap-3 sm:gap-7 justify-center items-center text-center pb-8 sm:p-0 sm:mr-8 sm:mt-6">
            <h1 className="text-white font-medium italic font-primary text-xl xl:text-5xl">
              {home.title}
            </h1>
            <p className="text-white font-medium text-lg mx-2 font-secondary xl:text-3xl">
              {home.description}
            </p>
          </div>
        </Fragment>
      ))}
    </main>
  );
};

export default Home;
