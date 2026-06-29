"use client";
import { useContext, useState } from "react";
import { cartContext } from "../contexts/CortContext";

export default function CartProduct() {
  const { cart, removeFromCart, updateQuantity, getTotal } =
    useContext(cartContext);
  return (
    <div className="cart-box">
      <div className="cart-product">
        <h1 className="cart-title">Cart Item</h1>
        {cart.length === 0 ? (
          <p className="cart-p">No items in cart</p>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="cart-item">
              <div className="cart-box-image">
                <img src={product.image} className="cart-image" alt="image" />
              </div>
              <div className="cart-item-text">
                <h2 className="cart-product-title">{product.title}</h2>
                <input
                  type="number"
                  value={product.quantity}
                  min="1"
                  className="cart-number-input"
                  onChange={() =>
                    updateQuantity(product.id, Number(event.target.value))
                  }
                />
                <p className="cart-p">
                  {(product.price * product.quantity).toFixed(2)}
                </p>
                <button
                  className="cart-btn"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        {cart.length === 0 ? (
          ""
        ) : (
          <div className="total-box">
            <h1 className="total-price">
              Total Price :{" "}
              <span className="total-number"> {getTotal().toFixed(2)}</span>
            </h1>
            <button className="total-btn">Buy</button>
          </div>
        )}
      </div>
    </div>
  );
}
