import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';
// import { useForm } from 'react-hook-form';
import Spinner from './Spinner';
import { isDisabled } from '@testing-library/user-event/dist/utils';
// import axios from 'axios';
const ProductDetails = () => {

    const [user, loading, error] = useAuthState(auth);
    const { productId } = useParams();
    const [product, setProduct] = useState([]);


    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`;

        fetch(url)

            .then(res => res.json())
            .then(data => setProduct(data))

    }, [productId, product])

    if (loading) {
        return (<Spinner></Spinner>)
    }

    const handleSubmit = e => {
        e.preventDefault();

        // const orders = {
        //     productName: product.name,
        //     productId: product._id,
        //     Name: user?.displayName,
        //     email: user?.email,
        //     quantity: e.target.quantity.value,
        //     phone: e.target.phone.value,
        //     address: e.target.address.value,
        // }

        // fetch(`http://localhost:5000/products/${productId}`, {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(product),
        // }).then(res => res.json())
        //     .then(data => {
        //         if (data.success) {
        //             toast(`Order Done!!`)

        //             setProduct(null)
        //         }
        //     })
        let minQuantity = product?.quantity;
        let avlQuantity = product?.avl;
        let inputQuantity = e.target.quantity.value;

        console.log(product.picture);

        console.log(inputQuantity);
        if (inputQuantity < minQuantity) {
            return toast.error("Quantity can not be less then Min. Quantity.Please insert valid number of quantity") && isDisabled;

        }
        if (inputQuantity > avlQuantity) {
            return toast.error("Quantity can not be More then Available Quantity.Please insert valid number of quantity");
        }
        // console.log(orders);

        // if (inputQuantity => minQuantity || inputQuantity <= avlQuantity) {
        //     const Quantity = (minQuantity) + (inputQuantity);
        //     const newQuantity = { Quantity };
        //     console.log(newQuantity);
        //     const url = `https://polar-reef-20310.herokuapp.com/orders/${productId}`;
        //    
        //         .then((res) => res.json())
        //         .then((data) => {
        //            
        //             setProduct({ ...data, avlQuantity: (avlQuantity - newQuantity) });
        //             toast("Successfully Delivered");
        //         });
        // } else {
        //     toast.error(`Sorry !!`)
        //     alert("Please insert valid number of quantity");
        //     e.target.reset();
        //     return;
        // }
        setProduct(null)

    };

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
            < form onSubmit={handleSubmit} >

                <div className='mx-auto grid w-2/4 my-5 pb-2'>


                    <input type="text" value={user?.displayName || ''} placeholder="Type Name" className="input input-bordered input-md " />

                    <input type="text" value={user?.email || ''}
                        // {...register("text", { required: true })}
                        placeholder="Type Email Address" className="input input-bordered input-md " />

                    <input type="text" name='address' placeholder="Type Address" className="input input-bordered  input-md" />
                    <input type="text" name='phone' placeholder="Type phone" className="input input-bordered  input-md" />
                    <input type="number" name='quantity'

                        defaultValue={product?.quantity} className="input input-bordered   w-full max-w-xs" />



                    {/* {(inputQuantity > product.avl) ? <button type='submit' disabled className="btn btn-outline btn-primary my-2 ">order</button> : */}
                    <button type='submit' className="btn btn-outline btn-primary my-2 ">order</button>
                    {/* } */}
                </div>
            </form>
        </div>
    );
};

export default ProductDetails;