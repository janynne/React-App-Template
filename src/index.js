import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor }  from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './redux/history';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
            <Router history={history}>
                <App />
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
