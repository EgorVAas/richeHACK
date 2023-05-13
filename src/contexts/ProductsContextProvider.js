import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, JSON_API_WINE } from "../helpers/consts";
import { useLocation, useNavigate } from "react-router-dom";

export const productContext = createContext();
export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  productsWine: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, productsWine: action.payload };

    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    const { data } = await axios(`${JSON_API_WINE}${window.location.search}`);
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: data });
  };

  const addProduct = async (newProduct) => {
    await axios.post(JSON_API_WINE, newProduct);
    navigate("/wine");
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${JSON_API_WINE}/${id}`);
    getProducts();
  };

  const getProductDetails = async (id) => {
    const { data } = await axios(`${JSON_API_WINE}/${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${JSON_API_WINE}/${newProduct.id}`, newProduct);
    getProducts();
    navigate("/wine");
  };

  // *FIlter
  const location = useLocation();
  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(window.location.search)
    if(value === "all"){
      search.delete(query)
    } else{
      search.set(query, value)
    }

    const url = `${location.pathname}?${search.toString()}`;
    navigate(url)
  }
  // *FIlter

  const values = {
    addProduct,
    getProducts,
    productsWine: state.productsWine,
    deleteProduct,
    getProductDetails,
    productDetails: state.productDetails,
    saveEditedProduct,
    fetchByParams
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductsContextProvider;
