import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import AuthProvider from './Context/AuthContext'
ReactDOM.render(<AuthProvider><App /></AuthProvider>, document.getElementById('root'));
