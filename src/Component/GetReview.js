import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from 'react-dom';
import { NavLink } from "react-router-dom";


const GetReview = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        axios
            .get(`https://radiant-shelf-15302.herokuapp.com/review`)
            .then((res) => {
                setReview(res.data);
            });
    }, []);

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto px-12">
            {
                reviews?.map(review =>

                    <><div className="card card-compact   bg-base-300 shadow-xl">

                        <div className="card-body">
                            <h2 className="card-title">{review.comment}</h2>
                            <p><div className="rating text-xl">

                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />

                            </div></p>
                            <div className="card-actions justify-end">
                                <NavLink to='/dashboard/review'><button className="btn btn-primary">Give Review</button></NavLink>
                            </div>
                        </div>
                    </div></>)}


        </div>
    );
};

export default GetReview;