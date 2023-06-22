import React from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import Swal from "sweetalert2";

const TableData = ({ toyData }) => {
  const { name, _id, photoURL, category, price, rating, subCategory, likes } =
    toyData;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        

        fetch(`https://toy-shop-server-gilt.vercel.app/alltoys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your data has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">
                Ratings {rating} / Likes {likes}
              </div>
            </div>
          </div>
        </td>
        <td>
          {category}
          <br />
          <span className="badge badge-ghost badge-sm">{subCategory}</span>
        </td>
        <td>{price}</td>
        <th>
          <button className="p-4 rounded hover:bg-green-500">
            <Link to={`/updatetoy/${_id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </Link>
          </button>

          <button
            onClick={() => handleDelete(_id)}
            className="p-4 rounded hover:bg-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>

          <button>
            {" "}
            <Link
              to={`/toysDetails/${_id}`}
              className="btn btn-ghost hover:bg-yellow-400"
            >
              {" "}
              <FaRegEye></FaRegEye>{" "}
            </Link>
          </button>
        </th>
      </tr>
    </>
  );
};

export default TableData;
