import React from 'react';
import './Summary.css';
import img1 from '../asset/groth.jpg';
import img2 from '../asset/global.jpg';
import img3 from '../asset/satisfaction-icon-10.jpg';

const Summary = () => {
    return (

        <div>
            <h1 className='text-pink-400 font-bold uppercase text-4xl'>Your Satisfaction is Our success</h1>
            <div className="stats stats-vertical lg:stats-horizontal shadow">

                <div className="stat">
                    <img style={{ 'width': '150px' }} src={img1} alt="" />
                    <div className="stat-title">Growth</div>
                    <div className="stat-value">31%</div>
                    <div className="stat-desc">Jan 2021 - Feb 2022</div>
                </div>


                <div className="stat">
                    <img style={{ 'width': '150px' }} src={img3} alt="" />
                    <div className="stat-title">Happy Client</div>
                    <div className="stat-value">100%</div>
                    <div className="stat-desc">With Best Review</div>
                </div>
                <div className="stat">
                    <img style={{ 'width': '150px' }} src={img2} alt="" />
                    <div className="stat-title">Globally People know </div>
                    <div className="stat-value">70%</div>
                    <div className="stat-desc"></div>
                </div>


            </div>
        </div>

    );
};

export default Summary;