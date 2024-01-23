import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

import { fetchCartItems } from "./redux/actions/cartActions";

// Dispatch the fetchCartItems action on application startup
store.dispatch(fetchCartItems());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
