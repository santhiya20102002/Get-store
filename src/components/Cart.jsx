import React from "react";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <h2>{item.name}</h2>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="btn">Remove</button>
            </div>
          ))}
          <p className="total">Total: ${total}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
