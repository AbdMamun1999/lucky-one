import React from 'react';
import './Cart.css'
import {AiFillDelete} from 'react-icons/ai'

const Cart = ({product,deleteFromCart}) => {
    const {image,name,id} = product
    return (
        <div>
            <div className="cart-item">
                <div><img src={image} alt="" /></div>
                <h4>{name}</h4>
                <button onClick={()=>deleteFromCart(id)}>
                    <AiFillDelete size={18}></AiFillDelete>
                </button>
            </div>
        </div>
    );
};

export default Cart;