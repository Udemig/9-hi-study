import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import store from './redux/store';
import { Provider } from 'react-redux';
// container import
import { ToastContainer } from 'react-toastify';
// css import
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer autoClose={3000} draggable closeOnClick theme="colored" />
    </Provider>
  </React.StrictMode>
);
