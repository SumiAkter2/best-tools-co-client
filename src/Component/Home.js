import React from 'react';
import About from './About';
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

            <Reviews></Reviews>
            <Summary></Summary>
            <About></About>
            <Hotdeels></Hotdeels>
            <Arrival></Arrival>
            <Subcrib></Subcrib>
        </div>
    );
};

export default Home;