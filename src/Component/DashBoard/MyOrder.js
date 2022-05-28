import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import Spinner from '../Spinner';
import ShowMyItem from './ShowMyItem';
const MyOrder = () => {
    const [userData, setUserData] = useState([]);
    const [isLoading,] = useState(true);
    const [user, loading] = useAuthState(auth);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const url = `https://radiant-shelf-15302.herokuapp.com/order/${user?.email}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [user, product])
    if (loading) {
        return (<Spinner></Spinner>)
    }



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
        <div>
            <h1 className='text-pink-500 text-left font-bold text-2xl my-4'>My Orders :</h1>

            <div>

                <div className='grid lg:grid-cols-6 gap-0  lg:h-16 mx-12 border-2 text-pink-500 font-bold text-lg'>

                    <p></p>
                    <p>Name</p>
                    <p>Quantity</p>
                    <p>Price </p>
                    <p>Paid status </p>
                    <p>Delete </p>

                </div>

                {product.map((item, index) => (
                    <ShowMyItem
                        index=
                        {index}
                        key={item._id}
                        item={item}
                        handleDelete={handleDelete}
                    ></ShowMyItem>
                ))}



            </div>

        </div>


    );
};

export default MyOrder;