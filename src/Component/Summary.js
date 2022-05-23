import React from 'react';
import './Summary.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
const Summary = () => {
    return (

        <div>

            <CountdownCircleTimer
                isPlaying
                duration={7}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>

    );
};

export default Summary;