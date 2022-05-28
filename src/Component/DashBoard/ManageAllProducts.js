import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Spinner from '../Spinner';
import AllProducts from './AllProducts';

const ManageAllProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch(`https://radiant-shelf-15302.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])
    if (products.length === 0) {
        return (<Spinner></Spinner>)
    }



    return (
        <div>
            <h1 className='text-left text-pink-500 font-bold py-3'>All products: {products.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th> </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <AllProducts key={product._id} product={product}
                                index={index}  ></AllProducts>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageAllProducts;