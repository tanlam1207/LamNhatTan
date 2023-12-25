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
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
