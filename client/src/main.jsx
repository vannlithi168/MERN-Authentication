// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "../src/store/store"; // Replace with the actual path to your store
import App from "./App";

const rootElement = document.getElementById("root");

// Use createRoot to render your app
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
