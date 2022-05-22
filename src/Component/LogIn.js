import React from 'react';
import google from '../asset/Google.jpg';
const LogIn = () => {
    return (
        <div className='my-12 '>

            <div className='w-2/3 mx-auto border-2 p-5 rounded-lg'>
                <h1 className='text-2xl text-left text-pink-500 font-bold'>LOG IN</h1>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" class="input input-bordered" />
                    <label class="label">
                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div class="form-control mt-6">
                    <button class="btn btn-primary">Log In</button>
                </div>
                <div class="divider w-1/4 mx-auto">OR</div>
                <div class="form-control mt-6 ">
                    <button class="btn btn-outline btn-primary "><img src={google} style={{ 'width': '30px', }} alt="" />log in with google </button>
                </div>



            </div>

        </div>
    );
};

export default LogIn;