import React from 'react';
import './ProductItem.css';

export const ProductItem = ({ product, addToCart }) => {
    return (
        <div className="product-item">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} width="150" height="150" />
            <p>Rs. {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}


