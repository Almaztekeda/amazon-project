import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import reducer, { initialState } from './reducer';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// Measure performance in your app and log results
reportWebVitals();
