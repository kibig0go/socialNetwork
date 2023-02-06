import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, handleTextAreaChange} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
export const render = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} handleTextAreaChange={handleTextAreaChange}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}