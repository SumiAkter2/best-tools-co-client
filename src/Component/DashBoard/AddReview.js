import userEvent from '@testing-library/user-event';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Reviews from '../Reviews';

const AddReview = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='py-12 '>

            <form className=' mx-auto w-3/5 rounded-lg  '>
                <p className='text-2xl text-pink-400 font-bold my-6'>Your review:</p>
                <textarea class="textarea textarea-secondary" placeholder="Bio"></textarea>
                <p>{user?.displayName}</p>
                <p>{user?.email}</p>
                <p>Rating:<div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div></p>
                <button class="btn  btn-primary my-4">Submit</button>
            </form>
            <Reviews></Reviews>
        </div>
    );
};

export default AddReview;