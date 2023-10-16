import { useState, useEffect } from "react";
import { client, urlFor } from "../client";

const Prices = () => {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    const query = '*[_type == "prices"]';

    client.fetch(query).then((data) => {
      setPrice(data);
    });
  }, []);

  return (
    <div className="pb-9 mt-20">
      <h1 className="font-secondary italic font-bold text-5xl text-center pt-14 text-white">
        Les tarifs
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-20 m-4 mt-20 text-black">
        {price.map((price, index) => (
          <div key={index}>
            <div
              className={`flex flex-col gap-8 justify-center items-center h-72 w-72 sm:h-[22rem] sm:w-[22rem] p-5 sm:text-xl text-center text-white bg-white rounded-full bg-cover bg-center`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${urlFor(
                  price.imgUrl
                )})`,
              }}
            >
              <h2 className="font-primary font-extrabold">{price.titre}</h2>
              <p className="font-secondary font-semibold">
                {price.description}
              </p>
              <h2 className="font-primary font-bold">{price.prix}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;
