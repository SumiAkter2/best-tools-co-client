import React from 'react';
import Arrival from './Arrival';
import Bannar from './Bannar';
import Hotdeels from './Hotdeels';
import Products from './Products';
import Reviews from './Reviews';
import Subcrib from './Subcrib';
import Summary from './Summary';



const Home = () => {
    return (
        <div>

            <Bannar></Bannar>
            <Products></Products>
            <Summary></Summary>
            <Reviews></Reviews>
            <Hotdeels></Hotdeels>
            <Arrival></Arrival>
            <Subcrib></Subcrib>
        </div>
    );
};

export default Home;