import { createSlice } from '@reduxjs/toolkit';

export const CreatSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [], // Initialize items as an empty array
  },
  reducers: {
    // SET KEY VALUE IS NAME => item.name
    addItemToCart(state, action) {
      const existingItem = state.cartItems.find(
        item => item.name === action.payload.name
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push(
          { ...action.payload, quantity: 1 }
        );
      };
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.name !== action.payload
      );
    },

    increaseItemQuantity: (state, action) => {
      const itemToIncrease = state.cartItems.find(
        item => item.name === action.payload
      );
      if (itemToIncrease) {
        itemToIncrease.quantity +=1;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemToDecrease = state.cartItems.find(
        item => item.name === action.payload
      );
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity--;
      }
    },

    clearCart(state) {
      state.cartItems = [];
    },

  },
});

export const { 
  addItemToCart, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart
} = CreatSlice.actions;

export default CreatSlice.reducer;
