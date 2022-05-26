import React from 'react';


const ShowMyItem = ({ item, handleDelete }) => {
    const { _id, description, quantity, avl, name, price, picture } = item;


    return (
        < div className='lg:w-2/4 mx-auto bg-base-200 my-3'>

            <div className="hero ">
                <div >
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://api.lorem.space/image/movie?w=260&h=400" style={{ 'width': '100px' }} alt='tools img' />
                        <div className='text-left pl-2'>
                            <p >{description}</p>
                            <p className="text-xl ">{_id}</p>

                            <p>Price{price}</p>
                            <p>Min. quantity:{quantity}</p>
                            <p>Available: {avl} </p>
                            <button className='btn btn-primary' onClick={() => handleDelete(_id)}>Delete</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShowMyItem;