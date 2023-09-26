import React from 'react'
import './nav.css'
import { Remove, IncrementQuality, DecrementQuality } from '../../Redux/Reducer'
import { MdOutlineDeleteForever } from "react-icons/md";
import { AiOutlinePlusCircle,AiOutlineMinusCircle } from "react-icons/ai";
import { useDispatch } from 'react-redux';
function Cart({ cart }) {
  const dispatch = useDispatch()

  function Summary(Num1, Num2) {
    return (Num1 * Num2).toFixed(2)
  }
  return (
    <div className='item-cart'>
      {cart.length === 0 ? <h1>cart is emty </h1>:(
        
          cart.map(carts => (
            <div className="item-selec" key={carts.id}>
                  <img src={carts.image} />
                  <div className="Tittle-Cart">
                    <div className="tittle">
                      {carts.title}
                    </div>
                    <h4 className="price">
                      Total {Summary(carts.price, carts.Quality)} $
                    </h4>
                  </div>
                  <div className="Button-UpDown">
                    <AiOutlinePlusCircle size={26} onClick={() => {
                      dispatch(IncrementQuality(carts))
                    }} />
                    <p>{carts.Quality}</p>
                    {carts.Quality === 1 ? <AiOutlineMinusCircle size={26}/> : <AiOutlineMinusCircle size={26} onClick={() => {
                      dispatch(DecrementQuality(carts) )
                    }} />}
                    
                  </div>
                  <div className="Button-Remove">
                    <MdOutlineDeleteForever size={45} onClick={() => {
                      dispatch(Remove(carts.id))
                    }} />
                  </div>
                </div>
          ))
        
      )}
    </div>
  )
}

export default Cart