import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearAll } from "./slice.jsx";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log("selector value", cartSelector);

  const [cartItems, setCartItems] = useState(cartSelector);
  
  useEffect(()=>{
    setCartItems(cartSelector);
  },[cartSelector])
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const manageQuantity = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const cartTempItems = cartSelector.map((item) => {
      return item.id == id ? { ...item, quantity: quantity } : item;
    });
    //console.log(cartTempItems[0]);
    setCartItems(cartTempItems);
  };

  const handlePlaceOrder = ()=>{
    localStorage.clear();
    dispatch(clearAll());
    alert("Order Placed Successfully!");
    navigate("/");
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Your Cart Items</h1>
        <span> {cartItems.length} items</span>
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-info">
              <img src={item.thumbnail} alt="images" />
              <div className="item-details">
                <h4> {item.title} </h4>
                <p> {item.brand} </p>
              </div>
            </div>

            <div className="item-actions">
              <div style={{ display: "flex" }}>
                <input
                  onChange={(e) => manageQuantity(item.id, e.target.value)}
                  value={item.quantity ? item.quantity : 1}
                  style={{ margin: "25px" }}
                  type="number"
                  placeholder="Enter Quntity"
                />
                <div>
                  <span className="price">
                    $
                    {(item.quantity
                      ? item.price * item.quantity
                      : item.price
                    ).toFixed(2)}
                  </span>
                  <button onClick={() => dispatch(removeItem(item))} className="btn"> Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}

      <div className="cart-footer">
        <h2>
          Total Amount: ${" "}
          {cartItems
            .reduce(
              (total, item) =>
                total +
                (item.quantity ? item.price * item.quantity : item.price),
              0,
            )
            .toFixed(2)}
        </h2>
        <button onClick={handlePlaceOrder} className="btn">
          {" "}
          Place Order{" "}
        </button>
      </div>
    </div>
  );
};

export default CartList;
