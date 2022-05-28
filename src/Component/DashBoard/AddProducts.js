import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../firebase.init';

const AddProducts = () => {
    // const [user] = useAuthState(auth)
    const [input, setInput] = useState({});
    const getAddProductValue = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newValue = { ...input };
        newValue[field] = value;
        setInput(newValue);
    }
    const handlePost = (e) => {
        e.preventDefault();
        if (Object.keys(input).length > 0) {
            axios
                .post("https://radiant-shelf-15302.herokuapp.com/addProduct", input)
                .then((res) => {
                    if (res.data.insertedId) {
                        swal({
                            text: "Added successful!",
                            icon: "success",
                        });
                        setInput({});
                    } else {
                        swal({
                            text: "Something went wrong!",
                            icon: "error",
                        });
                    }
                });
        } else {
            swal({
                text: "Please add new product first And try again!",
                icon: "error",
            });
        }

    }

    return (
        <div >
            <h1 className='text-pink-500 text-left font-bold py-4'>ADD A NEW PRODUCT:</h1>
            <form className='w-full grid lg:grid-cols-3 gap-4'>
                <input label="Product Name"
                    type="text"
                    name="name" onChange={getAddProductValue} placeholder="Type Product Name" className="input pt-3 w-full input-bordered input-secondary max-w-xs" />
                <input label="Short Information"
                    name="short_description" onChange={getAddProductValue} type="text" placeholder="Short Information" className="input pt-3 w-full input-bordered input-secondary max-w-xs" />
                <div className="form-control w-full max-w-xs">

                    <label className=" mb-3 w-full   max-w-xs" onChange={getAddProductValue} label="Image URL"
                        name="image" type="text" placeholder="Image URL" >


                    </label>
                    <select className="select select-secondary">
                        <option disabled selected>Pick one</option>
                        <option>https://i.ibb.co/xqqS3t0/imgg4.jpg</option>
                        <option>https://i.ibb.co/jT6Zd2d/imgg5.jpg
                        </option>
                        <option> https://i.ibb.co/cwBsrVT/imgg6.jpg</option>
                        <option> https://i.ibb.co/rmWqmt6/imgg7.jpg</option>
                        <option> https://i.ibb.co/TBC5JQX/imgg8.jpg</option>
                    </select>

                </div>


                <input label="Description"
                    name="description" onChange={getAddProductValue} type="text" placeholder="Type Description" className="input pt-3 w-full input-bordered input-secondary max-w-xs" />
                <input name="price" label="price" onChange={getAddProductValue} type="number" placeholder="Type price" className="input pt-3 w-full input-bordered input-secondary max-w-xs" />
                <input onChange={getAddProductValue} type="number" placeholder="Type Quantity" className="input pt-3 w-full input-bordered input-secondary max-w-xs" />

                <button onClick={handlePost} className="btn btn-primary my-4">Add Now</button>
            </form>
        </div>
    );
};

export default AddProducts;