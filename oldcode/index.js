import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { counterReducer } from "./reducer";
import logger from "redux-logger";

const myLogger = (store) => (next) => (action) => {
  return next(action);
};
const secondMiddleware = (store) => (next) => (action) => {
  return next(action);
};
const capAtTen = (store) => (next) => (action) => {
  console.log(store);
  if (store.getState() >= 10) {
    return next({ type: "DECREMENT" });
  }
  next(action);
};

const store = createStore(
  counterReducer,
  applyMiddleware(myLogger, secondMiddleware, capAtTen, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
