import React from "react";
import { useLoaderData } from "react-router-dom";
import Panda from "../../assets/panda.jpg";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toys = useLoaderData();
  const {
    name,
    _id,
    photoURL,
    category,
    price,
    rating,
    subCategory,
    likes,
    email,
    date,
  } = toys;

  const handleUpdateToys = (event) => {
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

   

    fetch(`https://toy-shop-server-gilt.vercel.app/alltoys/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Toy update successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div>
      <div className="min-h-0 py-20 bg-slate-100 font-serif">
        <div className=" mx-auto grid">
          <div className="w-full bg-white mx-auto rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2">
            <div className="w-3/6 ">
              <img src={Panda} className="w-full h-full" alt="" />
            </div>

            <div className="w-full py-6 px-12">
              <h2 className="text-center mb-4 font-bold text-2xl text-blue-700">
                Update Toys
              </h2>

              <form onSubmit={handleUpdateToys}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Category</span>
                    </label>
                    <input
                      type="text"
                      name="categories"
                      defaultValue={category}
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
                      defaultValue={subCategory}
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
                      defaultValue={name}
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
                      defaultValue={price}
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
                      defaultValue={rating}
                      placeholder="Ratings"
                      className="input input-bordered border-blue-700"
                    />
                  </div>

                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text font-bold">Likes</span>
                    </label>
                    <input
                      type="number"
                      name="likes"
                      defaultValue={likes}
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
                      defaultValue={email}
                      name="email"
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
                      defaultValue={date}
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
                    defaultValue={photoURL}
                    className="input w-full border border-blue-700 rounded-lg py-3 px-3"
                    placeholder="Photo URL"
                  />
                </div>

                <div className="mt-4">
                  <button className="btn btn-active btn-primary w-full hover:bg-green-700">
                    Update
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

export default UpdateToy;
