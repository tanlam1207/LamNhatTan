import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProductIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

      if (existingProductIndex !== -1) {
        state.cartItems[existingProductIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteCart: (state, action) => {
      const updatedCart = state.cartItems.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        cartItems: updatedCart,
      };
    },
    updateQuantity: (state, action) => {
      const { id, newQuantity } = action.payload;
      const productToUpdate = state.cartItems.find((item) => item.id === id);

      if (productToUpdate) {
        productToUpdate.quantity = newQuantity;
      }
    },
  },
});

export const { addToCart,deleteCart,updateQuantity  } = cartSlice.actions;
export default cartSlice.reducer;
