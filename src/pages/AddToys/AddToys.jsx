import React, { useContext } from "react";
import Img from "../../assets/toyStory.jpg";

import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);

  const handleAddToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const category = form.categories.value;
    const subCategory = form.subcategory.value;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const likes = form.likes.value;
    const email = form.email.value;
    const date = form.date.value;
    const photoURL = form.photoURL.value;

    const toyData = {
      category,
      subCategory,
      name,
      price,
      likes,
      rating,
      photoURL,
      email,
      date,
    };
    console.log(toyData);

    

    fetch("https://toy-shop-server-gilt.vercel.app/addtoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Toy added successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div>
      <div className="min-h-0 py-5 bg-slate-100">
        <div className="mx-auto grid">
          <div className="w-full bg-white mx-auto rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2 ">
            <div className="w-3/6 items-center border">
              <img src={Img} className="w-full h-full" alt="" />
            </div>

            <div className="w-full py-6 px-12">
              <h2 className="text-center mb-4 font-bold text-2xl text-blue-700">
                Add Toys
              </h2>

              <form onSubmit={handleAddToys}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Category</span>
                    </label>
                    <input
                      type="text"
                      name="categories"
                      placeholder="Category"
                      className="input input-bordered border-blue-700"
                    />
                  </div>

                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text font-bold">Sub category</span>
                    </label>
                    <input
                      type="text"
                      name="subcategory"
                      placeholder="Sub-category"
                      className="input input-bordered border-blue-700"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered border-blue-700"
                    />
                  </div>

                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text font-bold">Price</span>
                    </label>
                    <input
                      type="number"
                      name="price"
                      placeholder="Price"
                      className="input input-bordered border-blue-700"
                    />
                  </div>

                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text font-bold">Ratings</span>
                    </label>
                    <input
                      type="text"
                      name="rating"
                      placeholder="Ratings"
                      className="input input-bordered border-blue-700"
                    />
                  </div>

                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text font-bold">Likes</span>
                    </label>
                    <input
                      type="text"
                      name="likes"
                      placeholder="Likes"
                      className="input input-bordered border-blue-700"
                    />
                  </div>

                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text font-bold">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      placeholder="email"
                      className="input input-bordered border-blue-700"
                    />
                  </div>

                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text font-bold">Date</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      placeholder="date"
                      className="input input-bordered border-blue-700"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="label">
                    <span className="label-text font-bold">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    name="photoURL"
                    className="input w-full border border-blue-700 rounded-lg py-3 px-3"
                    placeholder="Photo URL"
                  />
                </div>

                <div className="mt-4">
                  <button className="btn btn-active btn-primary w-full hover:bg-green-700">
                    Add Toy
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToys;
