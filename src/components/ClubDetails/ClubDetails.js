import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './ClubDetails.css'
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import { addToLoxalStorage, getStoragebd } from '../Utility/Utility';
const ClubDetails = () => {
    const [carts, setCarts] = useState([])
    const [items, setItems] = useState([])
    useEffect(() => {
      fetch(`./fake.json`)
      .then(res => res.json())
      .then(data=> setCarts(data))
    }, [])
    useEffect(() => {
        const storagebd = getStoragebd()
        let saveCart =[]
        for (const id in storagebd) {
            const addedCart = carts.find(cart => cart.id === id)
            if (addedCart) {
                const quantity = storagebd[id]
                addedCart.quantity= quantity
                saveCart.push(addedCart)
              }
        }
        setItems(saveCart)
    },[carts])
    const handlerAddToCart = (selectItem) => {
        let newCart =[]
        const exsits = carts.find(cart => cart.id === selectItem.id)
        if (!exsits) {
            selectItem.quantity = 1
            newCart = [...items, selectItem]
        }
        else {
            const rest = carts.filter(cart => cart.id !== selectItem.id)
            selectItem.quantity = selectItem.quantity + 1
            newCart =[...rest, exsits]
        } 
        setItems(newCart)
      addToLoxalStorage(selectItem.id)
    }
    return (
        <div className='club-container'>
            <div className='cart-container'>
                {
                    carts.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                        handlerAddToCart={handlerAddToCart}
                    ></Cart>)
                }
            </div>
            <div className='details-container'>
                <PlayerDetails
                items ={items}
                ></PlayerDetails>
            </div>
        </div>
    );
};

export default ClubDetails;