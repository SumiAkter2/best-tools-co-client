import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Purchase = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [productId, products])
    return (
        <div>
            <h2>Hello purchase Now</h2>
            <h1>{products.name}</h1>
        </div>
    );
};

export default Purchase;