import { createSlice } from '@reduxjs/toolkit';

export const CreatSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [], // Initialize items as an empty array
  },
  reducers: {
    addItemToCart(state, action) {
      // const { name, image, cost } = action.payload;
      const existingItem = state.cartItems.find(
        item => item.index === action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push(
          { ...action.payload, quantity: 1 }
        );
      };
    },
    // removeItemFromCart: (state, action) => {
    //   // state.cartItems = state.cartItems.filter(
    //   //   item => item.index !== action.payload.name
    //   // );
    //   state.cartItems.map((item) => {
    //     if (item.index === action.payload) {
    //       state.cartItems = state.cartItems.filter(
    //         (item) => item.index !== item.index
    //       );
    //     }})
    // },
    // increaseItemQuantity: (state, action) => {
    //   const itemToIncrease = state.cartItems.find(
    //     item => item.index === action.payload.name
    //   );
    //   console.log(itemToIncrease);
    //   // itemToIncrease.forEach((item) => {
    //   //   if (itemToIncrease) {
    //   //     item.quantity +=1;
    //   //   }
    //   // })
    //   if (itemToIncrease) {
    //     itemToIncrease.quantity +=1;
    //   }
    // },
    // decreaseItemQuantity: (state, action) => {
    //   // const { name, quantity } = action.payload;
    //   const itemToDecrease = state.cartItems.find(
    //     item => item.name === action.payload
    //   );
    //   if (itemToDecrease && itemToDecrease.quantity > 1) {
    //     itemToDecrease.quantity--;
    //   }
    // },

  },
});

export const { 
  addItemToCart, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity
} = CreatSlice.actions;

export default CreatSlice.reducer;
