import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartItemSlice';
import uiSlice from "./ui-cart";





const store = configureStore({
  reducer: { ui:uiSlice.reducer, cart: cartSlice.reducer },
});


export default store;