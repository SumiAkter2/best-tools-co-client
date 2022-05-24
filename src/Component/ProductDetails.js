import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
const ProductDetails = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`;

        fetch(url)

            .then(res => res.json())
            .then(data => setProduct(data))

    }, [productId, product])


    const handlePurchase = event => {
        event.preventDefault();
        console.log('allah');
    }

    // let quantity = product?.quantity;
    // const addQuantity = parseInt(event.target.quantity.value);
    // if (addQuantity > 0) {
    //     quantity = parseInt(quantity) + addQuantity;
    //     const updateInventory = { quantity };

    //         const url = `http://localhost:5000/products/${productId}`;
    //         fetch(url, {
    //             method: "PUT",
    //             headers: {
    //                 "content-type": "application/json",
    //             },
    //             body: JSON.stringify(updateInventory),
    //         })
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 console.log(data);
    //                 toast("quantity Updated");
    //                 event.target.reset();
    //             });
    //     // }
    // //          {
    //             alert("Please insert positive number of quantity");
    //         event.target.reset();
    //     return;
    // }
    // };
    // const addQuantity = parseInt(event.target.quantity.value);
    // console.log(addQuantity);

    // if (quantity >= (product.quantity) && quantity <= (product.avl)) {
    //     quantity = parseInt(quantity) + addQuantity;
    //     const updateQuantity = { quantity };

    // }
    // const url = `http://localhost:5000/quantity/${productId}`;
    // fetch(url, {
    //     method: "PUT",
    //     headers: {
    //         "content-type": "application/json",
    //     },
    //     body: JSON.stringify({ quantity }),
    // })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setProduct({ ...data, quantity: quantity });
    //         toast("Successfully Delivered");
    //     });
    // if (quantity < (minQuantity)) {
    //     return alert("Quantity can not be less then Min. Quantity");
    // }
    // if (quantity > (product?.avl)) {
    //     return alert("Quantity can not be More then Available Quantity");
    // }


    return (
        < div className='lg:w-2/4 mx-auto bg-base-200 my-3'>

            <div className="hero ">
                <div >
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://api.lorem.space/image/movie?w=260&h=400" style={{ 'width': '100px' }} alt='tools img' />
                        <div className='text-left pl-2'>
                            <p >{product.description}</p>
                            <p className="text-xl ">{product.name}</p>

                            <p>Price{product.price}</p>
                            <p>Min. quantity:{product.quantity}</p>
                            <p>Available: {product.avl} </p>
                        </div>
                    </div>

                </div>

            </div>

            <p className='text-3xl text-pink-500 '>Add Item</p>
            < form >
                {/* onSubmit={handleSubmit(onSubmit)}*/}
                <div className='mx-auto grid w-2/4 my-5 pb-2'>


                    <input type="text" value={user?.displayName || ''} placeholder="Type Name" className="input input-bordered input-md " />

                    <input type="text" value={user?.email || ''}
                        {...register("text", { required: true })}
                        placeholder="Type Email Address" className="input input-bordered input-md " />
                    {/* <span className="label-text-alt">  {errors.text?.type === 'required' && "Address name is required"}</span> */}
                    <input type="text" placeholder="Type Address" className="input input-bordered  input-md" />
                    <input type="text" placeholder="Type Phone No" className="input input-bordered  input-md" />
                    <input type="number" defaultValue={product?.quantity} className="input input-bordered   w-full max-w-xs" />

                    <button onChange={handlePurchase} className="btn btn-outline btn-primary my-2 ">order</button>
                </div>
            </form>
        </div>
    );
};

export default ProductDetails;