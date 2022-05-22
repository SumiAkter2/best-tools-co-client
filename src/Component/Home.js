import React from 'react';
import Bannar from './Bannar';
import Products from './Products';
import Reviews from './Reviews';
import Summary from './Summary';



const Home = () => {
    return (
        <div>

            <Bannar></Bannar>
            <Products></Products>
            <Summary></Summary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;