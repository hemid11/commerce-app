import React from 'react';

const ProductDetail = () => {

  const product = {
    id: 1,
    name: "Product Name",
    description: "Product Description",
    price: 99.99,
    stockCount: 10,

  };

  return (
    <div>
      <h2>Product Detail</h2>
      <div>
        <h3>{product.name}</h3>
        <p>Description: {product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Stock Count: {product.stockCount}</p>
        {}
        <button>Add to Basket</button>
      </div>
    </div>
  );
};

export default ProductDetail;
