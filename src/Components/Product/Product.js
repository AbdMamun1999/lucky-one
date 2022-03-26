import React from 'react';
import './Product.css'
import {BsFillCartFill} from 'react-icons/bs';

const Product = ({addToCart,product}) => {
    const {image,price,name} = product
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div>
                <h4 className='product-name'>{name}</h4>
                <p>Price: ${price}</p>
            </div>
            <button onClick={()=>addToCart(product)}>
                Add to cart
                <BsFillCartFill size={18} style={{marginLeft:'5px'}}></BsFillCartFill>
            </button>
        </div>
    );
};

export default Product;