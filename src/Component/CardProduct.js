import React from 'react';

const CardProduct = ({ product }) => {
    return (
        <div>
            <div class="card card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div class="card-body text-left">
                    <h2 class="card-title">{product.name}</h2>
                    <p>{product.description}</p>

                    <button class="btn btn-primary">Buy Now</button>

                </div>
            </div>
        </div>
    );
};

export default CardProduct;