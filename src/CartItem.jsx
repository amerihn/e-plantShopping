import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity } from './CreatSlice';
import './CartItem.css';

const CartItem = () => {
  
  // Calculate total amount for all products in the cart
  const cartItems = useSelector(state => state.cart.cartItems);
  const calculateTotalAmount = () => {
    let totalAmount = 0;
    cartItems.forEach((item) => {
      totalAmount += item.price * item.quantity;
    });
    return totalAmount;
  };

  // Calculate total cost based on quantity for an item
    const calculateTotalCost = (item) => {
      let totalCost = 0;
      totalCost = item.price * item.quantity;
      return totalCost;
  }; 
  
  // const handleContinueShopping = (e) => {
  //   alert('Functionality to be added for future reference');
  // };
  // const handleCheckoutShopping = (e) => {
  //   alert('Functionality to be added for future reference');
  // };

  // const dispatch = useDispatch();
  
  // const handleRemove = (index) => {
  //   dispatch(removeItemFromCart(index));
  // };

  // const handleIncrement = (index) => {
  //   dispatch(increaseItemQuantity(index));
  //   console.log(index);
  // };
  // const handleDecrement = (item) => {
  //  dispatch(decreaseItemQuantity(item));
  // };


  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>
        Total Cart Amount: 
        $ {calculateTotalAmount()} 
      </h2>

      <ul>
        {cartItems.map((item, index) => (
          <li className="cart-item" key={index}>
            <img className="cart-item-image" src={item.image}/>
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" 
                  onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">
                  {item.quantity}
                </span>
                <button className="cart-item-button cart-item-button-inc" 
                  onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>
              <button className="cart-item-delete" 
                onClick={() => handleRemove(CartItem)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      {/* <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div> */}
    </div>
  );

};

export default CartItem;


