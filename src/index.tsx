import React from 'react';
import ReactDOM from 'react-dom/client';
import store from "./redux/reducers/store";
import {Provider} from 'react-redux';
import './index.css';
import Main from './components/Main/Main';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Main/>
        </Provider>
    </React.StrictMode>
);

