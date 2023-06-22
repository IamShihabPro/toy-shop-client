import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import '@smastrom/react-rating/style.css'
import { FaRegHeart } from 'react-icons/fa';

const ToysDetails = () => {
    const toysData = useLoaderData()
    const {name, _id, photoURL, category, price, rating, subCategory, likes} = toysData
    console.log(name);
    return (
        <div className='max-w-xl mx-auto mt-24'>
           <div className="card card-side bg-base-200 shadow-xl ">
                <figure><img src={photoURL} alt="Movie" className='w-72 h-72'/></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <div>
                    <p>Price: {price}</p>

                    <p className='flex gap-3 items-center'> <span className='font-bold'>Likes:</span> <FaRegHeart className='text-red-500 '></FaRegHeart> {likes} </p>
                    
                    <p className='flex'>
                <span className='font-bold'>Ratings: </span> <Rating className='ms-2' style={{ maxWidth: 100 }} value={rating} readOnly /> <span className='ms-2'>{rating}</span>
                </p>
                    </div>
                    <div className="card-actions justify-end">
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToysDetails;