import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { store } from './store.js';
import { Provider } from 'react-redux';

//import your styles here
import styles from './scss/application.scss';


const rootNode = document.getElementById('root');
const root = createRoot(rootNode);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
