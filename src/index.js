import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscriber} from "./redux/state";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, handleTextAreaChange} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} handleTextAreaChange={handleTextAreaChange}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(state);
subscriber(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
