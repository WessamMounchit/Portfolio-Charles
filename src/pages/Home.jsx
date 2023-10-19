import { Fragment, useEffect, useState } from "react";
import { urlFor, client } from "../client";
import fetchData from "../utils/fetchData";
import errorImg from "../assets/errorImg.svg";

const Home = () => {
  //////////  STATE   //////////
  const [home, setHome] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  const query = '*[_type == "home"]';

  //////////  API   //////////
  useEffect(() => {
    fetchData(setHome, () => client.fetch(query));
  }, []);

  let content;
  //////////  LOADING   //////////
  if (home.loading) {
    content = (
      <div className="flex justify-center items-center">
        <img src="spinner.svg" alt="chargement" />
      </div>
    );
  }
  //////////  ERROR   //////////
  else if (home.error) {
    content = (
      <>
        <div
          className="h-full w-full bg-no-repeat bg-contain bg-center flex justify-center items-center text-center flex-col gap-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),url(${errorImg})`,
          }}
        >
          <div className="h-1/4 md:h-auto flex flex-col gap-3 sm:gap-7 justify-center items-center text-center pb-8 sm:p-0 sm:mr-8 sm:mt-6">
            <h1 className="text-white font-medium italic font-primary text-xl xl:text-5xl">
              Charles Cantin - Photographe
            </h1>
            <p className="text-white font-medium text-lg mx-2 font-secondary xl:text-3xl">
              Amateur de photographie passionné, je saisis l&apos;essence de vos
              moments les plus précieux.
            </p>
          </div>
        </div>
      </>
    );
    //////////  CONTENT   //////////
  } else if (home.data?.length > 0) {
    content = home.data?.map((home, index) => (
      <Fragment key={index}>
        <div
          className="h-full w-full bg-no-repeat bg-cover bg-center flex justify-center items-center text-center flex-col gap-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${urlFor(
              home.imgUrl
            )})`,
          }}
        >
          <div className="h-1/4 md:h-auto flex flex-col gap-3 sm:gap-7 justify-center items-center text-center pb-8 sm:p-0 sm:mr-8 sm:mt-6">
            <h1 className="text-white font-medium italic font-primary text-xl xl:text-5xl">
              {home.title}
            </h1>
            <p className="text-white font-medium text-lg mx-2 font-secondary xl:text-3xl">
              {home.description}
            </p>
          </div>
        </div>
      </Fragment>
    ));
  }

  return (
    <main className="flex flex-col md:flex-row justify-center items-center h-full">
      {content}
    </main>
  );
};

export default Home;
