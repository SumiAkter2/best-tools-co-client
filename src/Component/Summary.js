import React from 'react';
import './Summary.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
const Summary = () => {
    return (

        <div>

            <div className="stats stats-vertical lg:stats-horizontal shadow">

                <div className="stat">
                    <div className="stat-title">Total Production cost</div>
                    <div className="stat-value">$720000</div>
                    <div className="stat-desc">Jan 2021 - Feb 2022</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Sold </div>
                    <div className="stat-value">$980000</div>
                    <div className="stat-desc">1 year</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Happy Client</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">With Best Review</div>
                </div>

            </div>
        </div>

    );
};

export default Summary;