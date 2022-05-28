import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import swal from 'sweetalert';
import auth from '../../firebase.init';

import AdminOrderDetail from './AdminOrderDetail';


const ManageOrder = () => {
    const [userData, setUserData] = useState([]);
    const [isLoading,] = useState(true);
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
        swal({
            title: "Are you sure?",

            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                axios
                    .delete(
                        `https://radiant-shelf-15302.herokuapp.com/deleteProducts/${id}`
                    )
                    .then((res) => {
                        if (res.data.deletedCount) {
                            swal("Product has been deleted!", {
                                icon: "success",
                            });
                            const restOrder = userData.filter(
                                (userdata) => userdata._id !== id
                            );
                            setUserData(restOrder);
                        }
                    });
            } else {
                swal("Your Product is safe!");
            }
        });
    };

    return (
        <div >
            <h1 className='text-2xl my-12 font-bold '>Manage All Orders:</h1>
            <div className='grid lg:grid-cols-7 gap-0  lg:h-16 mx-12 border-2 text-pink-500 font-bold text-lg'>

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