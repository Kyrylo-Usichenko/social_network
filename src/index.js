import './scss/index.scss'
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/index.scss'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



    ReactDOM.render(

            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>,

        document.getElementById('root')
    );



reportWebVitals();
