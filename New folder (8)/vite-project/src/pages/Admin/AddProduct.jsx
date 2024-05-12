import React from 'react';

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        {}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
