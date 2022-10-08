import state, {subscribe} from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updatePostText } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state) => {
  
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updatePostText={updatePostText}/>
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);





