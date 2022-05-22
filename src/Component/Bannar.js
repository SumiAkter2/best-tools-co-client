import React from 'react';
import banner from '../asset/ronix-tools-Nn2mg1lUbZc-unsplash.jpg'

const Bannar = () => {
    return (
        <div className='relative'>
            <div class="hero lg:h-[70vh] bg-primary">
                <div class="hero-content flex-col lg:flex-row">

                    <div className='max-w-6xl  text-left'>
                        <h1 class="text-2xl   font-bold">DISCOVER OUR YOUR  BEST TOOLS!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-secondary">Get Started</button>
                    </div>
                    <img src={banner} class="h-[50vh] rounded-md  shrink-0" alt='banner-image' />
                </div>
            </div>
            {/* card item */}
            <div>

            </div>

        </div>
    );
};

export default Bannar;