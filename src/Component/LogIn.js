import React, { useEffect } from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Spinner from './Spinner';
import { useForm } from "react-hook-form";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import g from '../asset/Google.jpg';
import useToken from '../Hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || gLoading) {
        return <Spinner></Spinner>
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='flex justify-center item-center  bg-inherit my-12'>
            <div className="card lg:w-96  text-primary-content">
                <div className="card-body border-2 shadow-lg">
                    <h2 className="text-left text-3xl font-bold text-pink-500">Log IN</h2>
                    {/* React form Hook */}
                    <form onSubmit={handleSubmit(onSubmit)}>


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
                                        // value: / [a - z0 - 9] +@[a-z]+\.[a-z]{2, 3}/,
                                        message: 'Give valid email',
                                    }
                                })}
                                type="email" placeholder="Enter Your Email "
                                className="input input-bordered w-full text-red-500  max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
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
                        <input className='btn btn-primary w-full max-w-xs ' type="submit" value="Log In" />
                    </form>
                    {/* or  */}
                    <div className="divider text-center text-xl ">OR</div>
                    {/* Google log in */}
                    <p><small>New to Doctors Portal <Link className='text-pink-500' to="/signin">Create New Account</Link></small></p>

                    <div className="card-actions justify-center">
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary w-full max-w-xs "><img src={g} style={{ 'width': '20px' }} alt="" /> GOOGLE SIGN IN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;