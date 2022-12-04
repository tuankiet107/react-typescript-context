import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CartProvider from "./contexts/CartProvider";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>
  ,document.getElementById("root")
);
