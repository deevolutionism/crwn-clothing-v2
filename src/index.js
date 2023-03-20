import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import Home from './routes/home'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Authentication from './components/authentication'
import Shop from './routes/shop'
import Checkout from './routes/checkout'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

const container = document.getElementById('root')
const root = createRoot(container)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={ErrorPage}>
      <Route index element={<Home />} errorElement={ErrorPage}/>
      <Route path="auth" element={<Authentication />} />
      <Route path="shop/*" element={<Shop />} />
      <Route path="checkout" element={<Checkout />} />
    </Route>
  ),
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
