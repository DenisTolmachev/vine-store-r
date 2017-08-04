import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import registerServiceWorker from './registerServiceWorker';
//import pop from './js/pop-up-pictures'


ReactDOM.render(
    <App />,
document.getElementById('root'));


registerServiceWorker();
