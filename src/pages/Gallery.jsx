import { useState, useEffect } from "react";
import { urlFor, client } from "../client";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("Tout");
  const [gallery, setGallery] = useState([]);
  const filters = [
    "Mariage",
    "Grossesse",
    "Bébé",
    "Famille",
    "Bâptème",
    "Couple",
    "Tout",
  ];

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    const query = '*[_type == "gallery"]';

    client.fetch(query).then((data) => {
      setGallery(data);
    });
  }, []);

  const filteredGallery =
    activeFilter === "Tout"
      ? gallery
      : gallery.filter((item) => item.tags.includes(activeFilter));

  return (
    <section className="pb-9 mt-20">
      <h1 className="font-secondary italic font-bold text-5xl text-center pt-14 text-white">
        Découvrez ma collection
      </h1>

      <div className="font-primary text-2xl flex flex-wrap justify-center gap-2 mb-20 mx-6 mt-9 sm:mt-16  sm:gap-8 text-white">
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
      </div>

      <div className="flex flex-wrap justify-center items-center gap-7 px-8 sm:px-0">
        {filteredGallery.map((item, index) => (
          <div key={index}>
            <img
              className="rounded-lg sm:h-60 sm:w-96 object-cover"
              src={urlFor(item.imgUrl)}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
