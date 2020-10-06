import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'; // make sure you add this for firestore
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import { applyMiddleware, compose, createStore } from 'redux';
import { createFirestoreInstance } from "redux-firestore";
import thunk from 'redux-thunk';
import App from './App';
import "./config/fbConfig";
import './index.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer';
import AuthIsLoaded from './components/auth/AuthIsLoaded';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(getFirebase))
  )
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store} >
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
