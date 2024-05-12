
import React from 'react';
import Routes from './routes';
import Navbar from './components/Navbar';
import { BasketProvider } from './context/BasketContext';

const App = () => {
  return (
    <div>
      <BasketProvider>
        <Navbar />
        <Routes />
      </BasketProvider>
    </div>
  );
};

export default App;
