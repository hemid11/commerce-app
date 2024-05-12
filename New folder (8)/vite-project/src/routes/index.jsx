import React from 'react';
import AdminRoot from '../pages/Admin/AdminRoot'
import ClientRoot from '../pages/Client/ClientRoot';
import AddCategory from '../pages/Admin/AddCategory';
import Categories from '../pages/Admin/Categories';
import Login from '../pages/Admin/Login';
import AddProduct from '../pages/Admin/AddProduct';
import Products from '../pages/Admin/Products'
import Users from '../pages/Admin/Users';
import Orders from '../pages/Admin/Orders'
import Messages from '../pages/Admin/Messages';
import Dashboard from '../pages/Admin/Dashboard';
import Basket from '../pages/Client/Basket';
import ClientProducts from '../pages/Client/Products';
import Register from '../pages/Client/Register';
import ClientContactUs from '../pages/Client/ContactUs';
import ClientHome from '../pages/Client/Home';
import ProductDetail from '../pages/Client/ProductDetail';
import Error from '../pages/Error';

export const ROUTES = [
  {
    path: '/admin',
    element: <AdminRoot />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: 'add-category', element: <AddCategory /> },
      { path: 'categorys', element: <Categories /> },
      { path: 'login', element: <Login /> },
      { path: 'add-product', element: <AddProduct /> },
      { path: 'products', element: <Products /> },
      { path: 'users', element: <Users /> },
      { path: 'orders', element: <Orders /> },
      { path: 'messages', element: <Messages /> },
    ],
  },
  {
    path: '/',
    element: <ClientRoot />,
    children: [
      { path: '/', element: <ClientHome /> },
      { path: 'contact', element: <ClientContactUs /> },
      { path: 'basket', element: <Basket /> },
      { path: 'login', element: <ClientLogin /> },
      { path: 'register', element: <Register /> },
      { path: 'clientproducts', element: <ClientProducts /> },
      { path: 'clientproducts/:id', element: <ProductDetail /> },
    ],
  },
  { path: '*', element: <Error /> },
];
