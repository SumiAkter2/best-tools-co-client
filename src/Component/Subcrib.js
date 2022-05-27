import React from 'react';

const Subcrib = () => {
    return (
        <div className=' lg:flex justify-evenly items-center my-24'>
            <div>
                <h1 className='text-3xl text-center text-pink-500'>   SIGN UP TO NEWSLETTER !</h1>
                <h1>Receive early  updates Our  products info.</h1>
            </div>
            <div className='flex mt-4'>
                <input type="text" placeholder="Type Emaill" className="input input-bordered input-secondary w-full " />
                <button className="btn btn-outline btn-secondary ml-3">Subscribe</button>
            </div>
        </div>
    );
};

export default Subcrib;