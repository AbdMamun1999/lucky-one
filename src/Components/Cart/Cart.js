import React from 'react';
import './Cart.css'
import {AiFillDelete} from 'react-icons/ai'

const Cart = ({product}) => {
    const {image,name} = product
    return (
        <div>
            <div className="cart-item">
                <div><img src={image} alt="" /></div>
                <h4>{name}</h4>
                <button>
                    <AiFillDelete size={18}></AiFillDelete>
                </button>
            </div>
        </div>
    );
};

export default Cart;