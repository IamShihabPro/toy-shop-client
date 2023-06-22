import React, { useEffect, useState } from "react";
import TableData from "./TableData";

const AllToys = () => {
  

  const [toysData, setToysData] = useState();
  useEffect(() => {
    fetch("https://toy-shop-server-gilt.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToysData(data);
      });
  }, [toysData]);

  
  return (
    <div className="overflow-x-auto w-full mt-6 ">
      <table className="table w-full bg-blue-700 text-white rounded-lg">
        <thead>
          <tr>
            <th className="bg-red-800">Toys</th>
            <th className="bg-red-800">Category / Sub-category</th>
            <th className="bg-red-800">Prices</th>
            <th className="bg-red-800">Manage Information</th>
          </tr>
        </thead>

        {toysData?.map((toyData) => (
          <TableData key={toyData._id} toyData={toyData}></TableData>
        ))}
      </table>
    </div>
  );
};

export default AllToys;
