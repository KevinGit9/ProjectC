import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

const idGenerator = {
  currentIdCount: 0,

  Generate: function() {
    let id = "id" + this.currentIdCount;
    this.currentIdCount++;
    return id;
  }
}