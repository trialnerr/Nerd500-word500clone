import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './store.js';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import ErrorPage from './ErrorPage.jsx';

const router = createBrowserRouter([
    {path: '*', element: <App />, errorElement: <ErrorPage />}
]);
//import your styles here
import styles from './scss/application.scss';

const rootNode = document.getElementById('root');
const root = createRoot(rootNode);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
