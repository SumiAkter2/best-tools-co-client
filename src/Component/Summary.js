import React from 'react';
import './Summary.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
const Summary = () => {
    return (

        <div>

            <div class="stats stats-vertical lg:stats-horizontal shadow">

                <div class="stat">
                    <div class="stat-title">Total Production cost</div>
                    <div class="stat-value">$720000</div>
                    <div class="stat-desc">Jan 2021 - Feb 2022</div>
                </div>

                <div class="stat">
                    <div class="stat-title">Sold </div>
                    <div class="stat-value">$980000</div>
                    <div class="stat-desc">1 year</div>
                </div>

                <div class="stat">
                    <div class="stat-title">Happy Client</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">With Best Review</div>
                </div>

            </div>
        </div>

    );
};

export default Summary;