import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';

const UpdateProfile = () => {
    const [input, setInput] = useState({});
    const getAddProductValue = (e) => {
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
                .post("http://localhost:5000/update", input)
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
                text: "Please add new something  then try again!",
                icon: "error",
            });
        }

    }
    return (
        <div>
            <h1 className='text-pink-500 text-left font-bold py-4'>Update profile :</h1>
            <form className='w-full grid lg:grid-cols-3 gap-4'>
                <input label="Product Name"
                    type="text"
                    name="name" onChange={getAddProductValue} placeholder="Type Email" class="input pt-3 w-full input-bordered input-secondary max-w-xs" />
                <input label="Product Name"
                    type="text"
                    name="name" onChange={getAddProductValue} placeholder="Type Product Name" class="input pt-3 w-full input-bordered input-secondary max-w-xs" />
                <input label="Short Information"
                    name="short_description" onChange={getAddProductValue} type="text" placeholder="Educational Qualification" class="input pt-3 w-full input-bordered input-secondary max-w-xs" />
                <div class="form-control w-full max-w-xs">


                    <input name="location" label="location" onChange={getAddProductValue} type="text" placeholder="Type location" class="input pt-3 w-full input-bordered input-secondary max-w-xs" />
                    <input onChange={getAddProductValue} type="number" placeholder="Type phone number" class="input pt-3 w-full input-bordered input-secondary max-w-xs" />

                </div>
                <button onClick={handlePost} class="btn btn-primary my-4">update Now</button>
            </form>
        </div>

    );
};

export default UpdateProfile;