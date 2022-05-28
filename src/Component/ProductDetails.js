import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from './Spinner';
import swal from 'sweetalert';
import axios from 'axios';
import auth from '../firebase.init';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const [user, loading, error] = useAuthState(auth);
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const [isdelete] = useState(false)
    const handleSubmit = e => {
        e.preventDefault();

        let minQuantity = product?.quantity;
        let avlQuantity = product?.avl;
        let inputQuantity = e.target.quantity.value;
        console.log(inputQuantity,);

        if (inputQuantity < minQuantity) {
            return swal({
                text: "Quantity can not be less then Min.Quantity.Please insert valid number of quantity",
                icon: "warning",
            });

        }
        if (inputQuantity > avlQuantity) {
            return swal({
                text: "Quantity can not be More then avl.Quantity .Please insert valid number of quantity",
                icon: "warning",
            });
        }

        const order = {
            product_name: product.name,
            User_name: user?.displayName,
            totalQuantity: inputQuantity,
            price: product.price,
            number: e.target.number.value,
            email: user?.email,
            status: "Pending",

        }
        // console.log(order);
        fetch(`https://radiant-shelf-15302.herokuapp.com/order`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                setProduct(data);

                if (data) {
                    swal({
                        text: "Successfully Purchase",
                        icon: 'success'
                    })
                }
            })
        setProduct('')
        navigate('/dashboard/order')
    }

    useEffect(() => {
        const url = `https://radiant-shelf-15302.herokuapp.com/products/${productId}`;

        fetch(url)

            .then(res => res.json())
            .then(data => setProduct(data))

    }, [productId, product])
    if (loading) {
        return (<Spinner></Spinner>)
    }








    return (
        < div className='lg:w-2/4 mx-auto bg-base-200 my-3'>

            <div className="hero ">
                <div >
                    <div className="hero-content flex-col lg:flex-row">

                        <img src={product?.picture} style={{
                            "width": "30%",
                            "height": "40%",

                        }} alt='tools img' />
                        <div className='text-left pl-2'>
                            <p >{product.description}</p>
                            <p className="text-xl ">des:{product?.name}</p>

                            <p>Price :{product.price}</p>
                            <p>Min. quantity:{product?.quantity}</p>
                            <p>Available: {product.avl} </p>
                        </div>
                    </div>

                </div>

            </div>

            <p className='text-3xl text-pink-500 '>Add Item</p>
            < form onSubmit={handleSubmit} className="grid lg:grid-cols-2 md:grid-cols-2">

                <input label="Name"
                    type="text"
                    name="name"
                    disabled readOnly
                    defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                <input label="Name"
                    disabled readOnly
                    type="email"
                    name="email"

                    value={user?.email || ""} placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                <input label="Name"
                    type="text"
                    name="product_name"
                    disabled readOnly
                    value={product?.name || ""} placeholder="Type Name" className="input input-bordered input-secondary w-full max-w-xs" />
                <br />
                <input
                    label="Name"
                    type="number"
                    name="quantity"

                    defaultValue={product.quantity} placeholder="Type Name " className="input input-bordered input-secondary w-full max-w-xs" />
                <input label="Name"
                    type="text"
                    name="number"

                    placeholder="Type phone" className="input input-bordered input-secondary w-full max-w-xs" />

                <button type='submit' className="btn btn-outline my-3 btn-secondary">Purchase</button>
            </form>
        </div>
    );
};


export default ProductDetails;