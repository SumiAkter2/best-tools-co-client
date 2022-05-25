import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { isDisabled } from '@testing-library/user-event/dist/utils';
const ProductDetails = () => {
    // const { register, formState: { errors }, handleSubmit } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`;

        fetch(url)

            .then(res => res.json())
            .then(data => setProduct(data))

    }, [productId, product])



    const handleSubmit = e => {
        e.preventDefault();
        let minQuantity = product?.quantity;
        let avlQuantity = product?.avl;
        let inputQuantity = e.target.quantity.value;
        console.log(inputQuantity);
        if (inputQuantity < minQuantity) {

            return alert("Quantity can not be less then Min. Quantity") && isDisabled;

        }
        if (inputQuantity > avlQuantity) {
            return alert("Quantity can not be More then Available Quantity");
        }
        if (inputQuantity => minQuantity || inputQuantity <= avlQuantity) {
            const Quantity = (minQuantity) + (inputQuantity);
            const newQuantity = { Quantity };
            console.log(newQuantity);
            const url = `http://localhost:5000/orders/${productId}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newQuantity),
            })
                .then((res) => res.json())
                .then((data) => {
                    setProduct({ ...data, avlQuantity: (avlQuantity - newQuantity) });
                    toast("Successfully Delivered");
                });
        } else {
            alert("Please insert positive number of quantity");
            e.target.reset();
            return;
        }
    };

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
                            <p>Min. quantity:{product?.quantity}</p>
                            <p>Available: {product.avl} </p>
                        </div>
                    </div>

                </div>

            </div>

            <p className='text-3xl text-pink-500 '>Add Item</p>
            < form onSubmit={handleSubmit} class="form-control">

                <div className='mx-auto grid w-2/4 my-5 pb-2'>


                    <input type="text" value={user?.displayName || ''} placeholder="Type Name" className="input input-bordered input-md " />

                    <input type="text" value={user?.email || ''}
                        // {...register("text", { required: true })}
                        placeholder="Type Email Address" className="input input-bordered input-md " />
                    {/* <span className="label-text-alt">  {errors.text?.type === 'required' && "Address name is required"}</span> */}
                    <input type="text" placeholder="Type Address" className="input input-bordered  input-md" />
                    <input type="text" placeholder="Type Phone No" className="input input-bordered  input-md" />
                    <input type="number" name='quantity'

                        defaultValue={product?.quantity} className="input input-bordered   w-full max-w-xs" />
                    {/* <span class="label-text-alt">h:{errors.number?.type === 'required' && "First name is required"}</span> */}


                    <button type='submit' className="btn btn-outline btn-primary my-2 ">order</button>
                </div>
            </form>
        </div>
    );
};

export default ProductDetails;