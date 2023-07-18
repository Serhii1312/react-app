import React from 'react';
import ReactDOM  from 'react-dom/client';
import App from './App';
import state from './components/redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App state={state} />
);