import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaRegHeart } from 'react-icons/fa';

const Categories = ({toys}) => {
    const {category ,subCategory, name, price, likes, rating, photoURL, _id} = toys
    
    return (
        <div className="card w-72 gap-4 bg-base-100 shadow-xl">
                        <figure><img src={photoURL} className='w-full h-48' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {name} </h2>
                            <p>Price: {price}</p>

                    <p className='flex gap-3 items-center'> <span className='font-bold'>Likes:</span> <FaRegHeart className='text-red-500 '></FaRegHeart> {likes} </p>
                    
                    <p className='flex'>
                <span className='font-bold'>Ratings: </span> <Rating className='ms-2' style={{ maxWidth: 100 }} value={rating} readOnly /> <span className='ms-2'>{rating}</span>
                </p>
                            <Link to={`../toysDetails/${_id}`} > <div className="badge badge-secondary"> Details </div> </Link>
                        </div>
            </div>
    );
};

export default Categories;