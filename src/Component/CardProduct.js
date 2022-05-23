import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CardProduct = ({ product }) => {
    const { _id } = product;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/products/:${id}`);
    }

    return (
        <div>
            <div class="card card-compact  bg-base-100 ">
                <figure><img src={product?.picture}

                    alt="products" /></figure>
                <div class="card-body text-left">
                    <h2 class="card-title">{product.name}</h2>
                    <p>{product.description}</p>



                    <button onClick={() => navigateToServiceDetail(_id)} class="btn btn-primary">Purchase</button>

                </div>
            </div>
        </div>
    );
};

export default CardProduct;