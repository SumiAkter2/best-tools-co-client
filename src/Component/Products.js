import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardProduct from './CardProduct';
import Spinner from './Spinner';
const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])
    if (products.length === 0) {
        return (<Spinner></Spinner>)
    }
    // https://polar-reef-20310.herokuapp.com/products
    return (
        <div className='my-12'>
            <h1 className='text-3xl'>Available Products</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-2 my-12 px-24'>
                {
                    products.slice(-6).map(product => <CardProduct key={product._id}
                        product={product}

                    ></CardProduct>)
                }
            </div>
        </div>
    );
};

export default Products;