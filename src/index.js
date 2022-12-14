import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import StoreContext from './StoreContext';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}> 
        <App/>
        </Provider>

      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState()
//   rerenderEntireTree(state);
// });





