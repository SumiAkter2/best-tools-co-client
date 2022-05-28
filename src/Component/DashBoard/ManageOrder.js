import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import swal from 'sweetalert';
import auth from '../../firebase.init';

import AdminOrderDetail from './AdminOrderDetail';


const ManageOrder = () => {
    const [loading] = useAuthState(auth);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const url = `https://radiant-shelf-15302.herokuapp.com/orderDetails`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                console.log(data);
            })

    }, [product])
    const handleDelete = (id) => {
        const proceed = swal({
            text: "Are you sure to delete this order ?",
            icon: 'warning',
            buttons: true,

        });
        if (proceed) {
            const url = `https://radiant-shelf-15302.herokuapp.com/deleteProducts/${id}`;
            fetch(url, {
                method: "DELETE",
            })

                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = product.filter((item) => item._id !== id);
                    setProduct(remaining);
                });

        }
        else {
            return;
        }
    };

    return (
        <div >
            <h1 className='text-2xl my-12 font-bold '>Manage All Orders:</h1>
            <div className='grid grid-cols-7 gap-0 h-16 mx-12 border-2 text-pink-500 font-bold text-lg'>

                <p>Email:</p>
                <p className='pl-12'>Name:</p>
                <p>Product:</p>
                <p> Id:</p>
                <p className='pl-12'>Price:</p>
                <p>Quantity:</p>
            </div>
            {
                product.map(p => <AdminOrderDetail key={p._id}
                    handleDelete={handleDelete}
                    p={p}></AdminOrderDetail>)
            }

        </div>
    );
};

export default ManageOrder;