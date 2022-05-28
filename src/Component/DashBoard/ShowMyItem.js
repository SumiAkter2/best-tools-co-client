import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';


const ShowMyItem = ({ item, handleDelete, index }) => {
    const { _id, quantity, price, status, product_name } = item;


    return (
        < div className='grid lg:grid-cols-6 gap-0  lg:h-16 mx-12 border-2 '>


            < p>{index + 1} </ p>
            < p>{product_name} </ p>
            < p>{item.totalQuantity} </ p>
            < p>{price} </ p>

            < p>{status} </ p>

            < p>
                <button className='btn btn-primary' onClick={() => handleDelete(_id)}>x</button>

            </p>
        </div>
    );
};

export default ShowMyItem;