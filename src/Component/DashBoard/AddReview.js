
import axios from "axios";
import React from 'react';
import swal from "sweetalert";

import Reviews from '../Reviews';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import GetReview from "../GetReview";


const AddReview = () => {
    const { user } = useAuthState(auth);
    const [value, setValue] = React.useState(2);
    const [fieldValue, setFieldVAlue] = React.useState("")
    const handleField = (e) => {
        setFieldVAlue(e.target.value);
    }
    const handleReview = (e) => {
        let dataValues = { comment: fieldValue, rating: value, userName: user?.displayName };
        e.preventDefault();
        axios.post(`https://radiant-shelf-15302.herokuapp.com/review`, dataValues)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "Thanks for your Support!",
                        icon: "success",
                    });
                    e.target.reset()
                    dataValues = {};
                    setValue(2);
                }
            })
    }
    return (
        <div className=' my-12  mx-auto'>
            <div >
                <h1 className="text-pink-500 font-bold text-xl">Give You Feed Back Here:</h1>
                <form onSubmit={handleReview} ><textarea className="textarea textarea-secondary" placeholder="Start" onChange={handleField}
                    required></textarea>

                    {/* <p>{user.email}</p> */}
                    {/* <p>{user.displayName}</p> */}
                    <p component="legend">
                        Gives Rating (out of 5)
                    </p>

                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <button
                        type="submit"

                        className="btn-primary rounded-sm p-2 mb-12"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <GetReview></GetReview>
            {/* <Reviews></Reviews> */}
        </div>
    );
};

export default AddReview;