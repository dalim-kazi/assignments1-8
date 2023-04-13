import React from 'react';
import './Cart.css'
const Cart = (props) => {
     const {handlerAddToCart,cart}=props
    const {name,picture,age,details,time}=cart
    return (
    <div className='cart2-container'>
            <img src={picture} alt="" />
        <div className='cart-info'>
            <p style={{fontSize:"25px"}}>{name}</p>
            <p>{details}</p>
            <p>Age : {age}</p>
             <p>For to time : {time}</p>
        </div>
            
        <div>
            <button onClick={()=>handlerAddToCart(cart)} className='btn'>
                <p>Add to list</p>
            </button>
        </div>
    </div>
    );
};

export default Cart;