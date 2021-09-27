import React,{ useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [data,setData] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setData(data))
    },[]);

    const HandleClick = (data)=>{
       const newCart = [...cart,data];
       setCart(newCart);
       
    }
    return (
        <div className="container">
            <h2>Total data : {data.length}</h2>
            <div className="shop-container"> 
                <div className="card-container">
                    {data.map(each => <Card 
                    key={each.key} 
                    data={each}
                    HandleClick={HandleClick}
                    ></Card>)};
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;