import React from 'react';

const Reviewers = ({ reviewer }) => {
    return (
        <div className='mt-12'>
            <div className='flex justify-center '>
                <img class="mask mask-heart" src="https://api.lorem.space/image/shoes?w=60&h=60" />

                <div className='text-left pl-2'>
                    <h1>{reviewer.name}</h1>
                    <h1>{reviewer.descriotion}</h1>
                    <div class="rating rating-sm rating-half ">
                        <p className='text-yellow-800 text-left' >4.8</p>
                        <input type="radio" name="rating-10" class="rating-hidden" />
                        <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" checked />
                        <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Reviewers;