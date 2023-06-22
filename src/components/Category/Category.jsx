import React, { useEffect, useState } from "react";
import Categories from "./Categories";

const Category = () => {
  const [toysData, setToysData] = useState([]);
  useEffect(() => {
    fetch("https://toy-shop-server-gilt.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToysData(data);
      });
  }, []);

  const handleFilter = (catItem) => {
    console.log(catItem);
    const result = toysData.filter((cateData) => {
      return cateData.category === catItem;
    });
    setToysData(result);
  };

  console.log(toysData);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mx-auto">
        <h1 className="text-center font-serif mt-24 mb-4 font-bold text-3xl">
          Shop by <span className="text-blue-500">Category</span>{" "}
        </h1>
        <hr className="w-56 mb-10 h-1 bg-blue-500  " />
      </div>

      <div className="flex mb-10">
        {/* grid md:grid-cols-2 lg:grid-cols-2 gap-2 */}

        <div className="grid grid-cols-1 gap-2 ms-4 w-1/6">
          {toysData.map((cate) => (
            <button
              onClick={() => handleFilter(cate.category)}
              className="btn btn-primary"
            >
              {" "}
              {cate.category}{" "}
            </button>
          ))}
        </div>

        <div className=" ms-16 drop-shadow-md me-2 grid md:grid-cols-3 w-5/6 gap-y-4">
          {toysData.map((toys) => (
            <Categories key={toys._id} toys={toys}></Categories>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
