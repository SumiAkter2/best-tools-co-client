import React from 'react';
import emoji from '../asset/sad emoji.png';
const NotFound = () => {
    return (
        <div className='h-[80vh] mt-12' >
            <h1 className='text-3xl font-bold text-pink-700 '>Oops Something Wrong !!!</h1>
            <p className='flex justify-center' >
                <img src={emoji} alt="" />
            </p>
        </div>
    );
};

export default NotFound;