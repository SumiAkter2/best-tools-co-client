import React, { useEffect, useState } from 'react';
import CardProduct from './CardProduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div className='my-12'>
            <h1 className='text-3xl'>New Arrivals</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-2 my-12'>
                {
                    products.map(product => <CardProduct key={product._id}
                        product={product}>

                    </CardProduct>)
                }
            </div>
        </div>
    );
};

export default Products;