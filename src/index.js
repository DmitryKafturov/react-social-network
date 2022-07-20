import React from 'react';

import Store from './Redux/store';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const renderDom = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App State={Store._State}
                    dispatch={Store.dispatch}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
};
renderDom(Store.getState());

Store.subscribe(() => {
    let state = Store.getState();
    renderDom(state);
});