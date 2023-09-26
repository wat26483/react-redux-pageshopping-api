import { createSlice,current } from "@reduxjs/toolkit";

const initialState ={
    Allstock:[],
    cart:[]
}
 
const shopSlice = createSlice({
    name: "ShopList",
    initialState,   
    reducers: {
        addShop: (state,action)=> {
            state.Allstock = action.payload
        },
        addCart: (state,action)=>{
            const Finditem = state.cart.find(Item=> Item.id === action.payload.id)
            Finditem ? Finditem.Quality++ : state.cart = [...state.cart,action.payload]
            console.log(current(state))
        },
        changequality: (state,action)=>{
            state.Allstock.map((stock)=>{
                stock.id === action.payload.id ? 
                stock.rating.count-- :  stock
            })
        },
        Remove : (state,action)=>{
            state.cart = state.cart.filter(item => {
                return item.id !== action.payload
            })
        },
        IncrementQuality : (state,action)=>{
            state.cart.map(item=>{
                item.id === action.payload.id ?
                item.Quality++ : item
            })
        },
        DecrementQuality : (state,action)=>{
            state.cart.map(item=>{
                item.id === action.payload.id ?
                item.Quality-- : item
            })
        },
    }
})




export const { addShop,addCart,changequality,Remove,IncrementQuality,DecrementQuality } = shopSlice.actions
export default shopSlice.reducer
