import React, { useContext } from 'react';
import { BasketContext } from '../../context/BasketContext';

const Basket = () => {
  const { basketItems } = useContext(BasketContext);

  return (
    <div>
      <h2>Basket</h2>
      {basketItems.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <div>
          <ul>
            {basketItems.map((item, index) => (
              <li key={index}>
                <p>{item.productName}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </li>
            ))}
          </ul>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Basket;
