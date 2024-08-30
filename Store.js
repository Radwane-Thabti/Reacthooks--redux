       // creation de mon Store REDUX //

import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Dashboard/userSlice/userSlice'
import productsSlice from './Dashboard/productsSlice/productsSlice'
import cartSlice from './cartSlice'
import orderSlice from './orderSlice'


export const store = configureStore({
  reducer: {user:userSlice , products:productsSlice,cart:cartSlice,orders:orderSlice}
})
