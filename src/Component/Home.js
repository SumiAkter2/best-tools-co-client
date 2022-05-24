import React from 'react';
import Bannar from './Bannar';
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
            <Subcrib></Subcrib>
        </div>
    );
};

export default Home;