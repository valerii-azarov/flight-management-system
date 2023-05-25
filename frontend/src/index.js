import React from "react";
import { createRoot } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./App";
import "./styles/index.css";

const store = configureStore();

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
