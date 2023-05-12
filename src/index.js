import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductsContextProvider from "./contexts/ProductsContextProvider";
import WhiskeyContextProvider from "./contexts/WhiskeyContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <WhiskeyContextProvider>
      <AuthContextProvider>
        <ProductsContextProvider>
          <App />
        </ProductsContextProvider>
      </AuthContextProvider>
    </WhiskeyContextProvider>
  </BrowserRouter>
);
