import React from 'react';
import './Product.css'

const Product = ({addToCart,product}) => {
    const {id,image,price,name} = product
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div>
                <h4 className='product-name'>{name}</h4>
                <p>Price: ${price}</p>
            </div>
            <button onClick={()=>addToCart(product)}>Add to cart</button>
        </div>
    );
};

export default Product;