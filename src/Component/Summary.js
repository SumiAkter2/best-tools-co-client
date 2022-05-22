import React from 'react';
import './Summary.css';
const Summary = () => {
    return (
        // <div className='summary' >
        //     <h2 className='text-4xl text-white font-bold my-12'>  The Summary of Best Tools co.</h2>

        //     <div className='lg:flex mx-lg-3 lg:justify-center lg:items-center  my-24 block'>





        //         <div>
        //             <div class=" radial-progress bg-primary text-primary-content border-4 border-primary" >80% </div>

        //             <h1 className='text-white'>Successful FeedBack</h1>

        //         </div>


        //         <div>
        //             <div class=" radial-progress bg-primary text-primary-content border-4 border-primary" >100% </div>

        //             <h1 className='text-white'>Customer satisfaction</h1>

        //         </div>

        //         <div>
        //             <div class=" radial-progress bg-primary text-primary-content border-4 border-primary" >20% </div>

        //             <h1 className='text-white'>Per Year Improvement</h1>

        //         </div>


        //         {/* <h1>hello</h1>
        //     <progress class="progress progress-primary w-56" value="0" max="100"></progress><br />
        //     <progress class="progress progress-primary w-56" value="10" max="100"></progress><br />
        //     <progress class="progress progress-primary w-56" value="40" max="100"></progress><br />
        //     <progress class="progress progress-primary w-56" value="70" max="100"></progress><br />
        //     <progress class="progress progress-primary w-56" value="100" max="100"></progress> */}
        //     </div >
        // </div>
        <div>
            <div class="stats shadow">

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div class="stat-title">Downloads</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div class="stat-title">New Users</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>

    );
};

export default Summary;