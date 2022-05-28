import React from 'react';

const Reviewers = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-lg border-4">
            <div className="card-body">
                <p>{review.comment}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                        <div className="rating text-xl">

                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviewers;