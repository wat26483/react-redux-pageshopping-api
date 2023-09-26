import React from 'react'
import './Shopingindex.css'
import { addCart, changequality } from '../../Redux/Reducer'
import { useDispatch } from 'react-redux'

function CardItem({ vale }) {
    const dispatch = useDispatch()
    function Discount (sum){
        return (sum*90/100).toFixed(2)
    }
    return (
        <div className='card'>
            <div className='card-item'>
                <img src={vale.image} />
                <h3>{vale.title}</h3>
                <div className='btnsale'>
                <button onClick={() => {
                        const newCart = {
                            id : vale.id,
                            image: vale.image,
                            Quality: vale.Quality,
                            price : Discount(vale.price),
                            title: vale.title }
                        dispatch(changequality(vale))
                        dispatch(addCart(newCart))
                    }}>Add to Cart</button>
                </div>
                <h2>Sale {Discount(vale.price)} $</h2>
                {vale.rating.count} Amount
            </div>
            <span className='Tag'>On<br />Sale <br /> 10%</span>
        </div>
    )
}

export default CardItem