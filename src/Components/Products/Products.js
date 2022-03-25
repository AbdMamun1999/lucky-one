import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1>Products</h1>
            {
                products.map(product => console.log(product))
            }
        </div>
    );
};

export default Products;