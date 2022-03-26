import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const addToCart = (product) =>{
        const newCart = [...cart,product]
        setCart(newCart)
    }
    return (
        <div className='container-fulid'>
             <h1>Products</h1>
            <div  className='container'>
                <div className='products-container'>
                    {
                        products.map(product => <Product 
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        ></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <h1>Product Summary</h1>
                    {
                        cart.map(product => <Cart 
                            key={product.id}
                            product={product}
                        ></Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;