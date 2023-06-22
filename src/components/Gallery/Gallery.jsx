import React, { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [toysData, setToysData] = useState([]);
  useEffect(() => {
    fetch("https://toy-shop-server-gilt.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToysData(data);
      });
  }, []);

  console.log(toysData);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mx-auto">
        <h1 className="text-center font-serif mt-24 mb-4 font-bold text-3xl">
          Our <span className="text-blue-500">Gallery</span>{" "}
        </h1>
        <hr className="w-56 mb-10 h-1 bg-blue-500  " />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
        {toysData.slice(0, 6).map((data) => (
          <GalleryCard key={data._id} data={data}></GalleryCard>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
