import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './context/user.context';
import {ProductsProvider} from './context/products.context'
import App from './App';
import './index.styles.scss'
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cart.context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <BrowserRouter>
  <UserProvider>
    <ProductsProvider>
    <CartProvider>
  <App />
  </CartProvider>
    </ProductsProvider>
  </UserProvider>
  </BrowserRouter>
 
  </React.StrictMode>
);
