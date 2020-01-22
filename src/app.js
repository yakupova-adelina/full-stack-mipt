import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom'

import MainPage from './components/main_page'
import LoginForm from './components/login_form'
import RegisterForm from './components/register_form'

import { createHashHistory } from 'history'
import { saveState, loadState } from './persist_store'

const history = createHashHistory();

require('file-loader?name=[name].[ext]!./index.html');


import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reducer } from './reducers'

const loggerMiddleware = createLogger();
const persistedState = loadState();

const store = createStore(
    reducer,
    persistedState,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

store.subscribe(() => {
    saveState( store.getState() );
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path='/' history={history} component={MainPage} />
                <Route exact path='/login' history={history} component={LoginForm} />
                <Route exact path='/register' history={history} component={RegisterForm} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
