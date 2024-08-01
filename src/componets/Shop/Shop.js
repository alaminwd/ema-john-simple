import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProduct] =  useState(first10);
    const [cart, setCart ] = useState([]);

   const clickHandler = (products) =>{
    const newCart = [...cart, products]
    setCart(newCart)
   }
    return (
        <div className='shop'>
            <div className="product-container">
                <ul>
                    {
                        products.map(product => <Product product={product} clickHandler={clickHandler}></Product>)
                    }
                </ul>
            </div>
            <div className='cart-container'>
                {/* <h3>This cart section</h3>
                <h3>Cart {cart.length}</h3> */}
                <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;