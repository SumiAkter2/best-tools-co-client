import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductAddForm = () => {
    const [input, setInput] = useState({});
    const getAddProductValue = (e) => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newValue = { ...input };
        newValue[field] = value;
        setInput(newValue);
        console.log(newValue);
    }
    const handlePost = (e) => {
        e.preventDefault();
        if (Object.keys(input).length > 0) {
            axios
                .post("http://localhost:5000/addProduct", input)
                .then((res) => {
                    if (res.data.insertedId) {
                        toast.error(`Something happened wrong..`)
                        setInput({});
                    } else {
                        toast.error(`Something happened wrong..`)
                    }
                });
        } else {
        }
    }
    return (
        <div>
            <form onSubmit={onsubmit} >
                <input type="text" onChange={getAddProductValue} name="name " placeholder="Type Product Name" class="input input-bordered input-secondary w-full max-w-xs" /><br />
                <input type="text" onChange={getAddProductValue} name=" price" placeholder="Type Price" class="input input-bordered input-secondary w-full max-w-xs" /><br />
                <input type="text" onChange={getAddProductValue} name="url " placeholder="Type Image Url" class="input input-bordered input-secondary w-full max-w-xs" /><br />
                <input type="text" onChange={getAddProductValue} name=" description" placeholder="Type Description" class="input input-bordered input-secondary w-full max-w-xs" /><br />
                <button className='btn btn-primary' onClick={handlePost}>Add Now</button>
            </form>
        </div>
    );
};

export default ProductAddForm;