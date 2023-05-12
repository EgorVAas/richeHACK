import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductsContextProvider from "./contexts/ProductsContextProvider";
import WhiskeyContextProvider from "./contexts/WhiskeyContextProvider";
import LiquorContextProvider from "./contexts/LiquorContextProvider";
import GinContextProvider from "./contexts/GinContextProvider";
import AdminContextProvider from "./contexts/AdminContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AdminContextProvider>
      <GinContextProvider>
        <LiquorContextProvider>
          <WhiskeyContextProvider>
            <AuthContextProvider>
              <ProductsContextProvider>
                <App />
              </ProductsContextProvider>
            </AuthContextProvider>
          </WhiskeyContextProvider>
        </LiquorContextProvider>
      </GinContextProvider>
    </AdminContextProvider>
  </BrowserRouter>
);
