import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './stylesheets/index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


ReactDOM.render(
    <BrowserRouter>
       <App/>
    </BrowserRouter>,
    document.getElementById('root'),
);
registerServiceWorker();
