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
    <div className="flex flex-col md:flex-row justify-center items-center h-full">
      {home.map((home, index) => (
        <>
          <div
            key={index}
            className="h-[60vh] w-full bg-no-repeat bg-contain bg-center flex justify-center items-center text-center flex-col gap-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${urlFor(
                home.imgUrl
              )})`,
            }}
          ></div>
          <div className="flex flex-col gap-7 justify-center items-center text-center mr-8 mt-6">
            <h1 className="text-white font-medium italic text-3xl  xl:text-5xl font-primary">
              {home.title}
            </h1>
            <p className="text-white font-medium text-xl xl:text-3xl mx-2 font-secondary">
              {home.description}
            </p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Home;
