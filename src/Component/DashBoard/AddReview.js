import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import Reviews from '../Reviews';

const AddReview = () => {
    // const { user } = useAuthState(auth);
    const [value, setValue] = React.useState(2);
    const [fieldValue, setFieldVAlue] = React.useState("")
    const handleField = (e) => {
        setFieldVAlue(e.target.value);
    }
    const handleReview = (e) => {
        let dataValues = { comment: fieldValue, rating: value, userName: user?.displayName };
        e.preventDefault();
        axios.post("https://polar-journey-34409.herokuapp.com/review", dataValues)
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
    const [user] = useAuthState(auth)
    return (
        <div className='py-12 '>

            {/* <form className=' mx-auto w-3/5 rounded-lg  '>
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
            </form> */}
            <div sx={{ my: 10 }}>
                <form onSubmit={handleReview} style={{ textAlign: "left" }}>
                    <input
                        label="Experience"
                        multiline
                        rows={3}
                        margin="normal"
                        fullWidth
                        onChange={handleField}
                        required className='border-4'
                    />
                    <typography sx={{ textAlign: "left" }} component="legend">
                        Gives Rating (out of 5)
                    </typography>
                    <rating
                        sx={{ width: "50%", textAlign: "left" }}
                        name="simple-controlled"
                        precision={0.5}
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <button
                        type="submit"
                        variant="outlined"
                        sx={{ backgroundColor: "#21a06a", color: "#000" }}
                    >
                        Submit
                    </button>
                </form>
            </div>
            <Reviews></Reviews>
        </div>
    );
};

export default AddReview;