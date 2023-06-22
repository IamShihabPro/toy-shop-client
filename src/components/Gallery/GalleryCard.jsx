import React from 'react';

const GalleryCard = ({data}) => {
    const {_id, name,likes, rating, photoURL } = data
    return (
        <div className=''>

            
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg  -translate-y-6 ">
                
                <img className="w-36 h-36 mt-4 mb-3 mx-auto rounded-full drop-shadow-md " src={photoURL} alt="Bonnie image"/>
                
                <div className="p-5">
                    
                        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white drop-shadow-md">{name}</h5>
                
                </div>
            </div>

           
        </div>
    );
};

export default GalleryCard;