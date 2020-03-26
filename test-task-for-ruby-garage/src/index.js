import './css/body.css';
import './css/general.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedBaseLayout from './Layouts/Base';
import firebase from 'firebase/app';
import { Provider } from 'react-redux';
import store from './store/index';
require('dotenv').config();
 // Your web app's Firebase configuration
 const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
 var firebaseConfig = {
  apiKey: apiKey,
  authDomain: "todo-rubygarage.firebaseapp.com",
  databaseURL: "https://todo-rubygarage.firebaseio.com",
  projectId: "todo-rubygarage",
  storageBucket: "todo-rubygarage.appspot.com",
  messagingSenderId: "232587754146",
  appId: "1:232587754146:web:eb872317da50ea3d3cf5fb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
        <ConnectedBaseLayout />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);