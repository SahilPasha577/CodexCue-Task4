import React, { useState, useEffect } from 'react';
import { CartItem } from './CartItem';
import './Cart.css';

export const Cart = ({ cart, removeFromCart }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(cart);
    }, [cart]);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart">
            <h2>Cart</h2>
            <div className="cart-in">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                    ))
                )}
            </div>

            {cartItems.length > 0 && (
                <div className="cart-total">
                    <h3>Total Price: Rs. {calculateTotalPrice().toFixed(2)}</h3>
                </div>
            )}

        </div>
    );
};














