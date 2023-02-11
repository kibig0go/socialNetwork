import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import App from './App';
// import store from "./redux/state";
import store from "./redux/redux_store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
// import StoreContext, {Provider} from "./MyContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state) => {
    // debugger;
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());
// store.subscribe(() => rerenderEntireTree(store.getState()));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
