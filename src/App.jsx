import {  useEffect } from 'react'
import './App.css'
import ShoppingApi from './Api/ShoppingApi'
import { useDispatch } from 'react-redux'
import { addShop } from './Redux/Reducer'
import Nav from './component/navbar/nav'
import Shopingindex from './component/shop/Shopingindex'

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    const loadstore = async () => {

      const response = await ShoppingApi.get()

      setTimeout(() => {
        const Data = response.data
        const addData = Data.map(AddData=>{
          return {...AddData,Quality : 1}
        })
        dispatch(addShop(addData))
      }, 500);
    } 
    loadstore();
  }, []);
  return (
    <div>
      <Nav/>
    <Shopingindex/>
    </div>
  )
}

export default App
