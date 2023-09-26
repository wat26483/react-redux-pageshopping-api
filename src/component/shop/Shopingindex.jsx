import React from 'react'
import './Shopingindex.css'
import { useSelector } from 'react-redux'
import CardItem from './CardItem'


function Shopingindex() {
    const { Allstock } = useSelector((state) => state.Allstock)
    return (
        <div>
            <div className='PageHome'>
                <h1>Fash Sale 10%</h1>
                <div className='item'>
                    {
                        Allstock.map(vale =>
                        (
                            < div key={vale.id} >
                                <CardItem vale={vale}/>
                            </div >
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Shopingindex