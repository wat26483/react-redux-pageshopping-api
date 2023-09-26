import React, { useState,useEffect } from 'react'
import './nav.css'
import { AiOutlineShoppingCart, AiOutlineCloseSquare,AiTwotoneShop  } from "react-icons/ai";
import { useSelector } from 'react-redux';
import Cart from './cart';


function Nav() {
  const [cartOpen, setCartOpen] = useState(true)
  const { cart } = useSelector((state) => state.cart)
  const Total = cart.map(Item => Item.price * Item.Quality).reduce((prev, curr) => prev + curr, 0)
  useEffect(() => {
    const docBody = document.body;

    cartOpen ? (
        docBody.classList.remove('hide')
    ) : (
        docBody.classList.add('hide')
    );

}, [cartOpen]);
  return (
    <div className='Nav'>
      <div>
        <AiTwotoneShop size={45}/>
      </div>
      <div className="Nav-Bar">
        {cart.length === 0 ? "" : <span className='Status-Item'>{cart.length}</span>}
        <AiOutlineShoppingCart size={35} onClick={()=>setCartOpen(!cartOpen)}/>
      </div>
      {cartOpen ? '' : 

      <div className="Cart">
        <div className="Cart-header">
          <span onClick={()=>setCartOpen(!cartOpen)}><AiOutlineCloseSquare size={35} /></span>
          <h3>Cart</h3>
        </div>
        <Cart cart={cart} />
        <div className="Cart-footer">
          <h3>Total Price   {Total.toFixed(2)} $</h3>
        </div>
      </div>}
    </div>
  )
}

export default Nav