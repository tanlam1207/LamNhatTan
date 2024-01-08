import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newCart = [...state.cartItems, action.payload];
      return {
        ...state,
        cartItems: newCart,
      };
    },
    deleteCart: (state, action) => {
      const updatedCart = state.cartItems.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        cartItems: updatedCart,
      };
    },
  },
});

export const { addToCart,deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
