import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './HomePage';
import DataSelectionPage from './dataselection';
import LoginPage from './login';

// var element = React.createElement('h1', { className: 'greeting' }, 'Hello!');
// ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(<LoginPage />, document.getElementById('root'));
