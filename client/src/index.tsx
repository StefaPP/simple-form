import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { SimpleForm } from "./components";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <SimpleForm />
  </Provider>,
  document.getElementById("example")
);
