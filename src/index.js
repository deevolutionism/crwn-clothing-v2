import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import Home from './routes/home'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Authentication from './components/authentication'
import { UserProvider } from './context/user';
import { ProductProvider } from './context/product'
import Shop from './routes/shop'
import { CartProvider } from './context/cart';

const container = document.getElementById('root')
const root = createRoot(container)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={ErrorPage}>
      <Route index element={<Home />} errorElement={ErrorPage}/>
      <Route path="/auth" element={<Authentication />} />
      <Route path="/shop" element={<Shop />} />
    </Route>
  ),
)

root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router}></RouterProvider>
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
