import React from 'react';
import Reviewers from './Reviewers';
import man1 from '../asset/businessman1.jpg';
import man2 from '../asset/businessman2.jpg';
import man3 from '../asset/businessman3.jpg';
import man4 from '../asset/businessman4.jpg';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Lao Herry',
            review: '',
            location: 'California',
            img: man1,
            comment: 'Great service, Great tools and FAST delivery!! Loved the hammer, now buying more! Happy! Happy!'
        },
        {
            _id: 2,
            name: 'Xu kai',
            review: '',
            location: 'Chaina',
            img: man2,
            comment: 'OMG..great store !!! Found this store while visiting the UK.. '
        },
        {
            _id: 3,
            name: 'Mr k',
            review: '',
            location: 'India',
            img: man3,
            comment: 'I completely love this site, found it on BEST TOOLS at first now I just order directly through them...'
        },
        {
            _id: 4,
            name: 'Inaya',
            review: '',
            location: 'Paris',
            img: man4,
            comment: 'This is my very first order through site, and I am totally and completely satisfied! The tools is great and so are the prices. I will definitely return again and again...'
        }
    ];

    return (
        <section className='my-12'>
            <div >
                <div className='my-12'>
                    <h4 className="text-2xl text-center  text-pink-700 font-bold">Our Best Review</h4>
                    <h2 className='text-3xl text-center'>What client say</h2>
                </div>
                <div>
                    {/* <img src={} className="w-24 lg:w-48" alt="" /> */}
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6'>
                {
                    reviews.map(review => <Reviewers
                        key={review._id}
                        review={review}
                    ></Reviewers>)
                }
            </div>
        </section >
    );
};

export default Reviews;