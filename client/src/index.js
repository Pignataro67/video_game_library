import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
// ADD COMPOSE
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
// NEW CODE
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

// OLD CODE
// const store = createStore(rootReducer,
// window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
// applyMiddleware(thunk),
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
