import React, { useState } from 'react';
import { ProductList } from './ProductList';
import { Cart } from './Cart';
import { products } from './products';
import './HomePage.css';

export const HomePage = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    return (
        <div className="HomePage">
            <ProductList products={products} addToCart={addToCart} />
            <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
    );
}


