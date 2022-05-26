import React from 'react';



const Arrival = () => {
    return (
        <div className='lg:flex gap-x-4 px-12 grid gap-y-5'>
            <div class="hero " style={{ "background-image": "url('img15.jpg')" }}>
                <div class="hero-overlay bg-opacity-50"></div>
                <div class="hero-content text-center text-secondary">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl text-white font-bold">GET READY <br />
                            <span className='text-5xl text-yellow-500 font-bold'>FOR NEW ARRIVAL</span>
                        </h1>

                        <button class="btn btn-primary">SEE MORE</button>
                    </div>
                </div>
            </div>

            <div class="hero " style={{ "background-image": "url('img14.jpg')" }}>
                <div class="hero-overlay bg-opacity-50"></div>
                <div class="hero-content text-center text-secondary">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl text-white font-bold">COMMING  <br />
                            <span className='text-5xl text-yellow-500 font-bold'>OUR NEW BRAND   </span>
                        </h1>

                        <button class="btn btn-primary">SEE MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Arrival;