import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
   
    const chooleOneForMe = (cart) =>{
        const newCart = [...cart]
        for(let i = newCart.length-1; i > 0; i--){
            let randomCart = Math.floor(Math.random()*(i+1))
            console.log(i+1)
            let temp = newCart[randomCart]
            newCart[randomCart] = newCart[i]
            newCart[i] = temp
        }

        setCart(newCart.slice(-1)); 
    }
    console.log(cart)

    return (
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
                <h1 style={{color:'#222f3e',textAlign:'center'}}>Product Summary</h1>
                {
                    cart.map(product => <Cart
                        key={product.id}
                        product={product}
                    ></Cart>)
                }
                <div className='btn-div'>
                    <button className='chooseBtn' onClick={()=>chooleOneForMe(cart)}>
                        Choose 1 for me
                    </button>
                    <button className='chooseBtn'>Choose again</button>
                </div>
            </div>
        </div>
    );
};

export default Products;