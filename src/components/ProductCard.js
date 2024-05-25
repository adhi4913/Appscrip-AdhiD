// ProductCard.js

import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img className="product-card-image" src={product.image} alt={product.name} />
                {product.outOfStock && <div className="out-of-stock">OUT OF STOCK</div>}
            </div>
            <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-signin">
                    <a href="/signin">sign in</a> or create an account to see pricing
                </p>
            </div>
            <div className="product-actions">
                <a href="#wishlist"><i className="fas fa-heart"></i></a>
            </div>
        </div>
    );
}

export default ProductCard;
