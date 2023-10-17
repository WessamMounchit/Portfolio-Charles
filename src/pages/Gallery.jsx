import { useState, useEffect } from "react";
import { urlFor, client } from "../client";
import fetchData from "../utils/fetchData";
import errorImg from "../assets/errorImg.svg";

const Gallery = () => {
  //////////  STATE   //////////
  const [activeFilter, setActiveFilter] = useState("Tout");
  const [gallery, setGallery] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  const filters = [
    "Mariage",
    "Grossesse",
    "Bébé",
    "Famille",
    "Bâptème",
    "Couple",
    "Tout",
  ];

  const query = '*[_type == "gallery"]';

  //////////  API   //////////
  useEffect(() => {
    fetchData(setGallery, () => client.fetch(query));
  }, []);

  //////////  FILTERS   //////////
  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const filteredGallery =
    activeFilter === "Tout"
      ? gallery.data
      : gallery.data.filter((item) => item.tags.includes(activeFilter));

  let content;
  //////////  LOADING   //////////
  if (gallery.loading) {
    content = (
      <div
        className="flex justify-center items-center"
        style={{
          backgroundImage: `url(${errorImg})`,
        }}
      ></div>
    );
  }
  //////////  ERROR   //////////
  else if (gallery.error) {
    content = (
      <div className="flex justify-center items-center">
        <img src={errorImg} alt="chargement" />
      </div>
    );
  }
  //////////  NO CONTENT   //////////
  else if (gallery.data?.length === 0) {
    content = (
      <p className="font-secondary text-white text-xl font-semibold">
        Aucune photo disponible
      </p>
    );
  }
  //////////  CONTENT   //////////
  else if (gallery.data?.length > 0) {
    content = (
      <div className="flex flex-wrap justify-center items-center gap-7 px-8 sm:px-0">
        {filteredGallery?.map((item, index) => (
          <div key={index}>
            <img
              className="rounded-lg object-cover sm:h-60 sm:w-96 "
              src={urlFor(item.imgUrl)}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="pb-9 mt-20">
      <h1 className="font-secondary italic font-bold text-5xl text-center pt-14 text-white">
        Découvrez ma collection
      </h1>

      {/* FILTERS */}
      <div className="font-primary text-2xl flex flex-wrap justify-center gap-2 mb-20 mx-6 mt-9 text-white sm:mt-16 sm:gap-8 ">
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => handleFilter(filter)}
            className={`${
              activeFilter === filter
                ? "bg-white text-black"
                : "text-white hover:bg-gray-700 hover:text-white"
            } rounded-md px-3 py-2 text-sm font-medium`}
          >
            {filter}
          </button>
        ))}

        {/* CONTENT */}
      </div>
      {content}
    </section>
  );
};

export default Gallery;
