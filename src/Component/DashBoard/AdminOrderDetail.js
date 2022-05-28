import React from 'react';

const AdminOrderDetail = ({ p, handleDelete }) => {
    return (
        <div className='grid grid-cols-7 p-4  h-16 mx-12 border-2'>
            <p >{p.email}</p>
            <p className='pl-12'>{p.name}</p>
            <p >{p.product_name}</p>
            <p >{p._id}</p>
            <p className='pl-24'>{p.price}</p>
            <p >{p.quantity}</p>
            <button onClick={() => handleDelete(p._id)} className='btn btn-primary'>Delete</button>

            {/* <p>{p._id}</p> */}
        </div>
    );
};

export default AdminOrderDetail;