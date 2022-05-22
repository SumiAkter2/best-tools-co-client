import React from 'react';
import Reviewers from './Reviewers';

const Reviews = () => {
    const reviewers = [{

        name: 'Bela shah',
        descriotion: 'Great job.',

    },
    {
        name: 'Susmit Ray',
        descriotion: 'god',

    },
    {
        name: 'Pol Bungi',
        descriotion: 'god',

    },
    {
        name: 'Riona Rion',
        descriotion: 'god',

    },]


    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3'>
            {
                reviewers.map((reviewer, index) => <Reviewers key={index} reviewer={reviewer}></Reviewers>)
            }



        </div>
    );
};

export default Reviews;