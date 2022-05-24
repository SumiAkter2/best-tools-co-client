import React from 'react';
import banner from '../asset/ronix-tools-Nn2mg1lUbZc-unsplash.jpg'
import img1 from '../asset/img19.jpg'
import img11 from '../asset/img7.jpg'
import img12 from '../asset/img15.jpg'
import img7 from '../asset/img18.jpg';

const Bannar = () => {
    return (
        <div className='relative z-10'>
            <div className="hero lg:h-[70vh] bg-primary ">
                <div className="hero-content flex-col lg:flex-row">

                    <div className='max-w-6xl  text-left'>
                        <h1 className="text-2xl   font-bold">DISCOVER OUR YOUR  BEST TOOLS!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-secondary">Get Started</button>
                    </div>
                    <img src={banner} className="h-[50vh]  rounded-md  shrink-0" alt='banner-image' />
                </div>
            </div>
            {/* card item */}
            <div className='rounded-2xl mx-auto mt-[-50px] relative z-20 bg-base-200 shadow-lg  w-3/4' >
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-12 pt-4'>


                    <figure >
                        <img style={{ 'height': '150px' }} src={img11} alt="Shoes" className='rounded-2xl' />
                        <h1>Driller</h1>
                    </figure>



                    <figure >
                        <img style={{ 'height': '150px' }} src={img12} alt="Shoes" className='rounded - 2xl' />
                        <h1>Driller</h1>
                    </figure>

                    <figure >
                        <img style={{ 'height': '150px' }} src={img7} alt="Shoes" className='rounded-2xl' />
                        <h1>Driller</h1>
                    </figure>

                    <figure >
                        <img style={{ 'height': '150px' }} src={img1} alt="Shoes" className='rounded-2xl' />
                        <h1>Driller</h1>
                    </figure>

                </div>
            </div>

        </div >
    );
};

export default Bannar;