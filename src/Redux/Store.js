import { configureStore } from "@reduxjs/toolkit";
import shopSlice from './Reducer'

export default configureStore ({
    reducer:{
        Allstock : shopSlice,
        cart : shopSlice,
    }
})

