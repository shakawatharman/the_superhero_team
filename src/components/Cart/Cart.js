import React from 'react';
import Name from '../Name/Name';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props

    const totalAmount = cart.reduce((prev,current)=>parseFloat(prev)+parseFloat(current.salary),0);

    return (
        <div className="cart-data">
            <h2>Total Added : {cart.length}</h2>
            <h3>Total Amount : $ { totalAmount.toFixed(2) }</h3>
            { 
                cart.map(person=> <Name key={person.key} name={person.name} img={person.img}></Name> )
            }
        </div>
    );
};

export default Cart;