import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css'

const Product = (props) => {
    const {img, name, seller, price,stock} = props.product;
    return (
        <div className='products'>
            <div className='product-img'>
                <img src={img} alt='' />
            </div>
           <div className='product-details'>
                <h3>{name}</h3>
                <p>By: {seller}</p>
                <span>Price : ${price}</span>
                <p>Only {stock} left in stock - order soon</p>
                <button onClick={() => props.clickHandler(props.product)}>   <FontAwesomeIcon icon={faShoppingCart} /> Add Cart</button>
           </div>
        </div>
    );
};

export default Product;