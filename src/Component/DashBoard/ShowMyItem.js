import React from 'react';


const ShowMyItem = ({ item, handleDelete }) => {
    const { _id, name, price, img } = item;


    return (
        <div className='d-flex align-items-center justify-content-center allItem-info'>
            <div className='items-img'>
                <img className='' src={img} alt="" srcset="" />
            </div>
            <div>
                <h5 className='fw-bold'>{name}</h5>
                <div className='d-flex align-items-center justify-content-center'>
                    <h5>{price}$</h5>
                    <button onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ShowMyItem;