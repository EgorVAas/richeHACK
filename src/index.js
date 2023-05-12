import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductsContextProvider from "./contexts/ProductsContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
