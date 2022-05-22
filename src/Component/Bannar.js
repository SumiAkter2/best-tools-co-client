import React from 'react';
import banner from '../asset/ronix-tools-Nn2mg1lUbZc-unsplash.jpg'
import img1 from '../asset/tools-1.png'
const Bannar = () => {
    return (
        <div className='relative z-10'>
            <div class="hero lg:h-[70vh] bg-primary ">
                <div class="hero-content flex-col lg:flex-row">

                    <div className='max-w-6xl  text-left'>
                        <h1 class="text-2xl   font-bold">DISCOVER OUR YOUR  BEST TOOLS!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-secondary">Get Started</button>
                    </div>
                    <img src={banner} class="h-[50vh]  rounded-md  shrink-0" alt='banner-image' />
                </div>
            </div>
            {/* card item */}
            <div className='rounded-2xl mx-auto mt-[-50px] relative z-20 bg-base-200 shadow-lg  w-3/4' >
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-12 pt-4'>


                    <figure >
                        <img style={{ 'width': '200px' }} src={img1} alt="Shoes" className='rounded-2xl' />
                        <h1>Driller</h1>
                    </figure>



                    <figure >
                        <img style={{ 'width': '200px' }} src={img1} alt="Shoes" className='rounded - 2xl' />
                        <h1>Driller</h1>
                    </figure>

                    <figure >
                        <img style={{ 'width': '200px' }} src={img1} alt="Shoes" className='rounded-2xl' />
                        <h1>Driller</h1>
                    </figure>

                    <figure >
                        <img style={{ 'width': '200px' }} src={img1} alt="Shoes" className='rounded-2xl' />
                        <h1>Driller</h1>
                    </figure>

                </div>
            </div>

        </div >
    );
};

export default Bannar;