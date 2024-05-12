import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = ({ adminID, setAdminID, setLocalAdminID }) => {
  const handleLogout = () => {
    setAdminID(null);
    setLocalAdminID(null);
    localStorage.removeItem('adminID');
  };

  return (
    <header>
      <div>
        <h1>Admin Panel</h1>
        <nav>
          <ul>
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/add-category">Add Category</Link>
            </li>
            <li>
              <Link to="/admin/categorys">Categories</Link>
            </li>
            <li>
              <Link to="/admin/add-product">Add Product</Link>
            </li>
            <li>
              <Link to="/admin/products">Products</Link>
            </li>
            <li>
              <Link to="/admin/users">Users</Link>
            </li>
            <li>
              <Link to="/admin/orders">Orders</Link>
            </li>
            <li>
              <Link to="/admin/messages">Messages</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
