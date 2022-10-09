import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state) => {
  
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)}/>
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);





