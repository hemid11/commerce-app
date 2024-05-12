import React, { createContext, useState } from 'react';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (product) => {
    setBasketItems([...basketItems, product]);
  };

  const removeFromBasket = (productId) => {
    setBasketItems(basketItems.filter(item => item.productId !== productId));
  };

  return (
    <BasketContext.Provider value={{ basketItems, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
