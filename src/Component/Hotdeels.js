import React from 'react';

const Hotdeels = () => {
    return (
        <div className='flex justify-center items-center my-12'>
            <h1 className='text-4xl font-bold'>New Arrival Comes : </h1>
            <div class="grid lg:grid-flow-col gap-5 text-center auto-cols-max">
                <div class="flex flex-col p-2 bg-primary rounded-box text-neutral-content">
                    <span class="countdown font-mono  text-5xl">
                        <span style={{ "--value": "15" }}></span>
                    </span>
                    days
                </div>
                <div class="flex flex-col p-2 bg-primary rounded-box text-neutral-content">
                    <span class="countdown font-mono  text-5xl">
                        <span style={{ "--value": "10" }}></span>
                    </span>
                    hours
                </div>
                <div class="flex flex-col p-2 bg-primary rounded-box text-neutral-content">
                    <span class="countdown font-mono  text-5xl">
                        <span style={{ "--value": "24" }}></span>
                    </span>
                    min
                </div>
                <div class="flex flex-col p-2 bg-primary rounded-box text-neutral-content">
                    <span class="countdown font-mono  text-5xl">
                        <span style={{ "--value": "22;" }}> </span>
                    </span>
                    sec
                </div>
            </div>
        </div >
    );
};

export default Hotdeels;