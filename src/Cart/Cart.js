import React from 'react';
import './Cart.css'

const Cart = ({product}) => {
    const {image,name} = product
    return (
        <div>
            <div className="cart-item">
                <div><img src={image} alt="" /></div>
                <h4>{name}</h4>
                <button>closed</button>
            </div>
        </div>
    );
};

export default Cart;