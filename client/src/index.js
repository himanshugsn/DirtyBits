import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import './style.css'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';

import reducer from './reducers'

const store = createStore(reducer, {}, applyMiddleware(reduxThunk))

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.querySelector("#root")
);
