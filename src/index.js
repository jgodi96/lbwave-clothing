import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './context/user.context';
import {CategoriesProvider} from './context/categories.context'
import App from './App';
import './index.styles.scss'
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cart.context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <BrowserRouter>
  <UserProvider>
    <CategoriesProvider>
    <CartProvider>
  <App />
  </CartProvider>
    </CategoriesProvider>
  </UserProvider>
  </BrowserRouter>
 
  </React.StrictMode>
);
