import React from 'react';
import img from '../asset/depositphotos_202173158-stock-photo-male-hands-holding-power-drill.jpg'
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 px-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="w-2/5 rounded-lg shadow-2xl" />
                    <div className='text-left'>
                        <h1 className="text-5xl font-bold text-pink-400">Something About Us</h1>
                        <div className="divider "></div>
                        <p className="py-4">We provide best tools for our clients that they can benefited. the demand of users all over to have more access to content. Between driller, nuts, bolt, and  accessibility on the tools is so easy to use.</p>
                        <p className='text-xl mb-6'>We ensure our products :</p>

                        <p>Hard, stainless steel, customizable.</p>
                        <p>High bran electric ware, strong parts.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;