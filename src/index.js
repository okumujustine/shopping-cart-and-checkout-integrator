import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartWrapper } from "./components/index"

ReactDOM.render(
  <React.StrictMode>
    <CartWrapper>
      <App />
    </CartWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

