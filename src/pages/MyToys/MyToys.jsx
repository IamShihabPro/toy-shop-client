import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch("https://toy-shop-server-gilt.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  console.log(myToys);

  const handleFilter = (email) => {
    console.log(email);
    const result = myToys.filter((cateData) => {
      return cateData.email === email;
    });
    setMyToys(result);
  };

  return (
    <div>
      <div className="overflow-x-auto mt-10">
        <button
          onClick={() => handleFilter(user.email)}
          className="btn mb-10 mx-auto items-center"
        >
          Press to show user data
        </button>
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {myToys?.map((toys, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{toys.name}</td>
                <td>{toys.category}</td>
                <td>{toys.price}</td>
              </tr>
            ))}

            {/* <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
