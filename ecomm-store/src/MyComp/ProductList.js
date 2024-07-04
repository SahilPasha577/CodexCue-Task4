import React from 'react';
import { ProductItem } from './ProductItem';
import { products } from './products';
import './ProductList.css';

export const ProductList = ({ addToCart }) => {
    return (
        <>
            <div className='product-list-1'>
                <h2>Products</h2>
                <div className="product-list">

                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </>
    );
}


