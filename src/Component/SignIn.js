import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
import Spinner from './Spinner';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../Hooks/useToken';
const SignIn = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user);

    const navigate = useNavigate();

    let signInError;

    if (loading || updating) {
        return <Spinner></Spinner>
    }

    if (error || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || updateError?.message}</small></p>
    }

    if (token) {
        navigate('/dashboard');
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
    }

    return (
        <div className='flex justify-center item-center bg-inherit my-12'>
            <div className="card w-96  text-primary-content">
                <div className="card-body border-4">
                    <h2 className="text-center text-xl font-bold"> Sign Up</h2>
                    {/* React form Hook */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name */}
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required',
                                }

                            })}
                            type="text" placeholder="Enter Your Name "
                            className="input input-bordered w-full  max-w-xs" />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}
                            </span>}
                        </label>


                        {/* Input field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required',

                                    },
                                    pattern: {

                                        message: 'Give valid email',
                                    }
                                })}
                                type="email" placeholder="Enter Your Email "
                                className="input input-bordered w-full   max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt ">{errors.email.message}</span>}
                            </label>
                            {/* Password */}
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required',
                                    },
                                    maxLength: {
                                        value: 6,
                                        message: 'Give valid email',
                                    }
                                })}
                                type="password" placeholder="Enter Your Password "
                                className="input input-bordered w-full  max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up" />
                    </form>

                    <p><small>Already have an account??<Link className='text-pink-500' to="/login">Please Log In</Link></small></p>

                </div>
            </div>
        </div>
    );
};

export default SignIn;